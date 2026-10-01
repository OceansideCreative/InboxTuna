# Inbox Tuna — October 1, 2026 revision

Nick authorized rebuilding and publishing the existing Vercel site on October 1. This revision starts from the original production commit `060f447`, not either unpublished September preview.

## What changed

- The headline explains the service directly: setup and management of email and text marketing for leads and customers.
- Three examples connect messages to inquiries, sales opportunities, and repeat visits.
- The original colors, windsurfer artwork, fonts, and Inbox Tuna identity remain.
- Two anonymous descriptions of Nick’s actual work support the offer. No invented results, testimonials, client endorsements, or screenshots are published.
- Setup and recurring responsibilities are explained together. Clients handle personal replies, sales, and customer service.
- The calculator and unrelated cold-outreach example are removed from the homepage. Their original components remain in the repository for reference.
- Contact now goes directly to an email draft, with a Gmail option and a copyable address. There is no form to fill out before starting the email.
- Metadata and the privacy page match the revised site.

## Contact behavior

The homepage uses `components/contact-card.tsx`. Its email and Gmail links open prepared drafts; they do not send messages or claim a call is booked. The recipient remains `oceansidecreativeservices@gmail.com`, the established address in `lib/site.ts`.

The earlier inquiry form and `/api/review` route remain in source for a future direct-delivery setup, but the homepage does not use them. Do not enable or advertise direct delivery without configuring and verifying a sender and receipt. Never commit API keys.

## Remaining assets and decisions

1. A real photo of Nick and Bridgette.
2. Approved client quotes, names/logos, and campaign screenshots. Current work descriptions remain anonymous and credit WVNDR Media where appropriate.
3. A verified Inbox Tuna mailbox if Nick wants to replace the existing Gmail address.
4. A real scheduling link if Nick wants visitors to choose a time directly. No calendar or booking availability has been invented.

There is no public price floor, revenue guarantee, claimed performance result, or guaranteed time saving. Fees are scoped after the conversation; setup is identified separately.

## Source and release

- Homepage and FAQ: `app/page.tsx`
- Styling: `app/globals.css`
- Branding/artwork: `components/brand.tsx`
- Navigation: `components/header.tsx`
- Contact: `components/contact-card.tsx` and `lib/site.ts`
- SEO: `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`
- Privacy: `app/privacy/page.tsx`

Run `npm run lint` and `npm run build`. Check desktop/mobile layout, menu, anchors, FAQs, email recipient/body, and privacy navigation before publishing.

Production is the Vercel project `inboxtuna`, linked to the `main` branch of `OceansideCreative/InboxTuna`. Publish through that existing connection. Production must build with `VERCEL_ENV=production`; preview builds are intentionally noindex. The original production commit is retained in Git for rollback.
