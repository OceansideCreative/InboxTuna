import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy" },
  description:
    "How Inbox Tuna handles information you share when you contact us.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main-content" className="container privacy-page">
        <p className="eyebrow">INBOX TUNA · OCEANSIDE CREATIVE SERVICES</p>
        <h1>Your information.</h1>
        <p>Last updated October 1, 2026.</p>
        <p>
          Inbox Tuna is a service of Oceanside Creative Services. This page
          explains how we handle information you share when you contact us.
        </p>
        <h2>When you get in touch</h2>
        <p>
          We use the name, email address, business details, and message you
          provide to respond to your inquiry and discuss working together. An
          inquiry does not subscribe you to a marketing newsletter.
        </p>
        <p>
          The contact links open a draft in your email app or Gmail. Nothing is
          sent until you choose to send it through your email provider. The copy
          button puts our email address on your device’s clipboard.
        </p>
        <h2>Hosting and email</h2>
        <p>
          Vercel hosts the website and may process technical information, such
          as IP addresses and request logs, to deliver and secure it. Inquiries
          are processed by the email services used to send and receive them. We
          do not sell your inquiry information.
        </p>
        <h2>Keeping information</h2>
        <p>
          We keep business correspondence as needed to respond, manage our
          working relationships, and meet applicable recordkeeping obligations.
          Please don’t include sensitive personal, financial, or health
          information in an initial inquiry.
        </p>
        <h2>Questions or requests</h2>
        <p>
          To ask about, correct, or request deletion of information you have
          shared with us, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. We’ll review your
          request and explain any records we need to retain.
        </p>
        <p>
          <Link href="/">← Back to Inbox Tuna</Link>
        </p>
      </main>
    </>
  );
}
