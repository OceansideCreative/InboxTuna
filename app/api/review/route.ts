import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin)
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 415 },
    );
  if (
    process.env.CONTACT_DELIVERY !== "resend" ||
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_FROM_EMAIL
  )
    return NextResponse.json(
      { error: "Email delivery is not configured" },
      { status: 503 },
    );
  // The public form is deliberately email-draft based until server delivery is configured.
  // When enabling delivery, add the project-level Vercel rate-limit rule described in docs/LAUNCH.md.
  let data: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 6000)
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    data = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!data || typeof data !== "object" || Array.isArray(data))
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  if (data.company_fax)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const { name, email, business, message } = data;
  if (
    typeof name !== "string" ||
    !name.trim() ||
    name.length > 100 ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof business !== "string" ||
    !business.trim() ||
    business.length > 200 ||
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.length > 2000
  )
    return NextResponse.json(
      { error: "Please check your details" },
      { status: 400 },
    );
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL || site.email],
        reply_to: email.trim(),
        subject: "Inbox Tuna: new conversation request",
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nBusiness: ${business.trim()}\n\n${message.trim()}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok)
      return NextResponse.json(
        { error: "Unable to send the request" },
        { status: 502 },
      );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send the request" },
      { status: 502 },
    );
  }
}
