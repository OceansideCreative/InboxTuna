"use client";

import { useState } from "react";
import { Arrow } from "./brand";
import { site } from "@/lib/site";

const subject = "Let’s talk about email and text marketing";
const body =
  "Hi Nick and Bridgette,\n\nI’d like to arrange a 20-minute conversation.\n\nMy business / website:\n\nWhat I’d like help with:\n\nA good time to talk:\n\nThanks!";
const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export function ContactCard() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus("You can select and copy the email address above.");
    }
  }
  return (
    <div className="contact-card">
      <h3>Arrange a 20-minute call.</h3>
      <p>
        Email your website and what you’d like help with. We’ll reply to find a
        time.
      </p>
      <a className="button" href={mailto}>
        Email to arrange a call <Arrow />
      </a>
      <p className="email-app-note">
        Opens a draft in your email app.{" "}
        <a href={gmail} target="_blank" rel="noopener noreferrer">
          Open in Gmail
        </a>
      </p>
      <div className="contact-address">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <button
          className="copy-email"
          type="button"
          onClick={copyEmail}
          aria-label="Copy our email address"
        >
          Copy
        </button>
      </div>
      <p className="copy-status" role="status">
        {copyStatus}
      </p>
    </div>
  );
}
