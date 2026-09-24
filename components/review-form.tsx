"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Arrow } from "./brand";
import { site } from "@/lib/site";
export function ReviewForm({ deliveryEnabled }: { deliveryEnabled: boolean }) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "draft" | "error"
  >("idle");
  const [draft, setDraft] = useState("");
  const [mailLink, setMailLink] = useState("");
  const [copied, setCopied] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;
    if (data.company_fax) return;
    const message = `Hi Nick and Bridgette,\n\nI'd like to talk about our customer communication.\n\nName: ${data.name}\nEmail: ${data.email}\nBusiness / website: ${data.business}\n\nWhat's on my list:\n${data.message}\n`;
    setDraft(message);
    setCopied(false);
    if (!deliveryEnabled) {
      setMailLink(
        `mailto:${site.email}?subject=${encodeURIComponent("Let’s talk about our customer communication")}&body=${encodeURIComponent(message)}`,
      );
      setStatus("draft");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Delivery failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <div className="review-form-wrap">
      <span className="form-topline">
        <span className="status-dot" /> A GOOD PLACE TO START
      </span>
      <h3>Tell us a little.</h3>
      <form onSubmit={submit} method="post" action="/api/review">
        <div className="form-grid">
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="First and last name"
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@yourbusiness.com"
            />
          </label>
        </div>
        <label>
          Business name or website
          <input
            name="business"
            autoComplete="organization"
            required
            maxLength={200}
            placeholder="Where can we learn about you?"
          />
        </label>
        <label>
          What would you like us to take off your list?
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={4}
            placeholder="The emails you mean to send, follow-up that’s getting missed, a tool you could use more…"
          />
        </label>
        <div className="honeypot" aria-hidden="true">
          <label>
            Leave this blank
            <input name="company_fax" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <button
          type="submit"
          className="button"
          disabled={status === "sending" || status === "sent"}
        >
          {status === "sending"
            ? "Sending…"
            : status === "sent"
              ? "Request sent"
              : deliveryEnabled
                ? "Request a conversation"
                : "Prepare my email"}
          <Arrow diagonal />
        </button>
        <p className="form-disclosure">
          {deliveryEnabled
            ? "We’ll use these details to respond to your inquiry."
            : "This prepares a message in your email app. You’ll review it and press send."}{" "}
          No newsletter signup. <Link href="/privacy">Privacy</Link>.
        </p>
      </form>
      <div aria-live="polite" aria-atomic="true">
        {status === "sent" && (
          <div className="form-response">
            <strong>Thanks for getting in touch.</strong>
            <p>
              Your request has been sent to us. We’ll reply by email to arrange
              a conversation.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="form-response form-error">
            <strong>That didn’t go through.</strong>
            <p>
              Your message is still here. Please try again or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        )}
        {status === "draft" && (
          <div className="form-response">
            <strong>Your message is ready to send.</strong>
            <p>
              Open your email app, check the message, and send it to us. Nothing
              has been sent yet.
            </p>
            <a className="button button-small" href={mailLink}>
              Open my email app <Arrow diagonal />
            </a>
            <details className="draft-details">
              <summary>No email app? Copy the message.</summary>
              <p>
                Send to <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <textarea
                aria-label="Your prepared email"
                readOnly
                value={draft}
                rows={7}
              />
              <button type="button" className="text-link" onClick={copy}>
                {copied ? "Copied!" : "Copy message"}
              </button>
            </details>
          </div>
        )}
      </div>
      <noscript>
        <style>{`.review-form-wrap form { display: none; }`}</style>
        <p className="form-disclosure">
          Please use the direct email link below to get in touch.
        </p>
      </noscript>
      <p className="direct-email">
        Prefer to email directly?{" "}
        <a href={`mailto:${site.email}`}>
          Say hello <Arrow diagonal />
        </a>
      </p>
    </div>
  );
}
