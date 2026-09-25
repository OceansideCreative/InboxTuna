# Inbox Tuna redesign

The first redesign is live. The substantive rebuild is prepared on `codex/inbox-tuna-business-value` for review; it is not approved for production yet. See `docs/REVIEW.md` for its reasoning and remaining inputs. This replaces the earlier copy-only preview on `codex/communication-offer-refinement`.

## What is included

- A complete responsive homepage explaining managed email, text, newsletters, and follow-up.
- A custom wordmark, tuna mark, interactive message examples, social preview graphic, and locally hosted type.
- An explicit handoff: the client's team handles customer replies, quotes, bookings, and service.
- Two anonymous work examples focused on advisory emails and clinic communication. They describe actual work and avoid unsupported results or public client endorsements.
- A hypothetical annual opportunity calculator showing additional completed purchases and revenue before costs. It does not forecast returns, compare service fees, or compound the same audience every month.
- A 20-minute conversation to identify an initial priority, discuss the handoff, and assess fit.
- Privacy page, metadata, mobile navigation, keyboard focus, and reduced-motion support.

## Decisions and assets still needed

1. **Branded email.** Create and verify the mailbox you want to receive inquiries. The current fallback is the established Oceanside Gmail address. Update `lib/site.ts` only once the new mailbox receives and sends correctly. Domain email hosting is separate from Vercel website hosting.
2. **Contact delivery.** The default form prepares an email draft. Nothing is sent until the visitor sends it in their email app. A copyable message and direct address are provided if an email app is unavailable. For direct form delivery, complete the configuration below. A scheduling link can be added once one exists; none has been invented.
3. **Client permissions.** Get approval for client names, logos, screenshots, and any quotes before adding them. A willingness to provide a reference is not the same as permission to publish it. No fabricated results or testimonials are included.
4. **Photo.** A genuine photo of Nick and Bridgette would add warmth. The current type-led team graphic is intentionally complete without a stock or generated portrait.
5. **Commercial scope.** Finalize the initial setup approach, approval process, and contract terms before selling. The public page says a fixed monthly fee is scoped after the conversation. The calculator has no preset service fee. The internal preference for $1,000+ per client is not a public package or ceiling; larger engagements can be priced higher when the scope and business case justify it.

## Current design and copy decisions

- Preserve the color palette; rebuild the sales narrative, headline, structure, and visual hierarchy.
- Explain value across new inquiries, current customers, and repeat purchases. No promised revenue or invented results.
- Address owners already doing the work as well as those who have not set it up.
- Describe a scoped first month and ongoing campaigns, checks, and relevant adjustments. Avoid implying that every automation needs constant changes.
- Invite a concrete conversation about the visitor’s next business priority and what we could take over. Omit “free.”
- Include the named customer-communication tools as text, without partnership or certification claims. Smartlead and the cold-outreach work example are omitted from this page to keep the focus on this offer.
- Keep the team illustration and anonymous work examples until real photos and approved client material arrive. No empty testimonial section.
- Keep the working email-draft inquiry flow. Direct delivery or a real scheduling link is the remaining conversion improvement once the mailbox/provider is ready.

## Direct inquiry delivery (optional)

The site uses an email-draft flow unless all three of these environment variables are set at build time:

- `CONTACT_DELIVERY=resend`
- `RESEND_API_KEY` (server secret)
- `CONTACT_FROM_EMAIL` (a verified sender address in the email service)

Set `CONTACT_TO_EMAIL` to the verified receiving mailbox; otherwise the existing address in `lib/site.ts` is used. Do not put secrets in `NEXT_PUBLIC_` variables or commit them.

Before enabling delivery:

- Verify the sender domain and provider-required DNS records, without disturbing existing mail records.
- Add an appropriate Vercel Firewall rate-limit rule for POST `/api/review` and review spam controls for the site's traffic. The honeypot and origin check are modest filtering, not a comprehensive abuse defense.
- Redeploy with the environment variables. Page rendering selects the delivery mode during the build.
- Submit one authorized test request, confirm receipt and Reply-To behavior, then test a provider failure. The form must show success only after the provider accepts the message. Provider acceptance does not guarantee inbox placement.
- Confirm the privacy text accurately reflects the activated providers and any analytics you add.

The current route validates input and rejects unconfigured delivery with HTTP 503. It does not store contacts in Supabase, subscribe them to a list, send automatic promotional messages, or pretend delivery worked. Add those capabilities only when their actual use and consent flow are agreed.

## Content edits

- Homepage and FAQ: `app/page.tsx`
- Current case descriptions: `app/page.tsx`; contact address: `lib/site.ts`
- Styling: `app/globals.css`
- Icons and brand assets: `components/brand.tsx`; interactive examples: `components/message-preview.tsx`
- Inquiry form: `components/review-form.tsx`
- Calculator: `components/opportunity.tsx` and `components/opportunity.module.css`
- SEO/social metadata: `app/layout.tsx`
- Privacy: `app/privacy/page.tsx`

## Local development and deployment

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run start
```

Read the repository's `AGENTS.md` before making Next.js changes. Fonts are local subsets of Archivo and DM Sans; their OFL licenses are included beside the files.

Preview builds are marked `noindex`, and their robots file disallows crawling. Production builds use the canonical domain `https://www.inboxtuna.com`. When ready, deploy the reviewed commit to production using the project's normal GitHub/Vercel flow. Do not simply alias a preview build to the production domain: rebuild with the production environment so metadata and contact settings are correct.

No customer messages have been sent and no DNS, email accounts, or existing client systems have been changed by this redesign.
