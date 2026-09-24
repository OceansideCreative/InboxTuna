# Inbox Tuna redesign

This redesign is prepared on `codex/communications-redesign`. Keep production on its existing deployment until the preview and contact details have been reviewed.

## What is included

- A complete responsive homepage explaining managed email, text, newsletters, and follow-up.
- A custom wordmark, tuna mark, sail illustration, social preview graphic, and locally hosted type.
- An explicit handoff: the client's team handles customer replies, quotes, bookings, and service.
- Three anonymous work examples. They describe actual kinds of work and avoid unsupported results or public client endorsements.
- A hypothetical annual opportunity calculator, including contribution margin and optional service/setup/software costs. It does not forecast returns or compound the same audience every month.
- A bounded complimentary review: a 20-minute conversation to assess fit and identify priorities.
- Privacy page, metadata, mobile navigation, keyboard focus, and reduced-motion support.

## Decisions and assets still needed

1. **Branded email.** Create and verify the mailbox you want to receive inquiries. The current fallback is the established Oceanside Gmail address. Update `lib/site.ts` only once the new mailbox receives and sends correctly. Domain email hosting is separate from Vercel website hosting.
2. **Contact delivery.** The default form prepares an email draft. Nothing is sent until the visitor sends it in their email app. A copyable message and direct address are provided if an email app is unavailable. For direct form delivery, complete the configuration below. A scheduling link can be added once one exists; none has been invented.
3. **Client permissions.** Get approval for client names, logos, screenshots, and any quotes before adding them. A willingness to provide a reference is not the same as permission to publish it. No fabricated results or testimonials are included.
4. **Photo.** A genuine photo of Nick and Bridgette would add warmth. The current type-led team graphic is intentionally complete without a stock or generated portrait.
5. **Commercial scope.** Finalize the monthly minimum, the initial setup approach, the approval process, and contract terms. The public page says a fixed monthly fee is scoped after the conversation. The calculator's $1,500 entry is clearly an illustrative input, not a published service quote.

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
- Case descriptions and contact address: `lib/site.ts`
- Styling: `app/globals.css`
- Icons and sail illustration: `components/brand.tsx`
- Inquiry form: `components/review-form.tsx`
- Calculator: `components/opportunity.tsx`
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
