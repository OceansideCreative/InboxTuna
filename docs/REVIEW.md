# Inbox Tuna: business-value rebuild

Review branch: `codex/inbox-tuna-business-value`.

This version is a preview. Production publication is not approved.

## What this pass needs to solve

The previous pass changed copy while preserving most of the sales argument. It described tasks and relief more clearly, but did not give an established owner a strong enough reason to hire Nick and Bridgette now.

The new narrative connects the work to recognizable business situations: helping a new inquiry take the next step, keeping a prospective buyer informed, and giving a customer a reason to return. Interactive examples make those messages concrete. They are illustrations of the service, not records of client campaigns or results.

The page must also explain the handoff: agreed communication work belongs to Inbox Tuna; individual replies, quotes, bookings, sales, and customer service stay with the client. The invitation is a useful conversation about a current priority and what taking responsibility would involve.

Only the color palette is locked. The headline, illustration, layout, and section order can change to improve clarity and persuasion.

## Proof and commercial boundaries

The two main work examples describe actual work:

- **Financial advisor:** Educational email copy for different client age groups, branded charts, and revisions following advisor feedback. The advisor retains review and final approval. Preserve the WVNDR Media credit.
- **Wellness clinic:** Promotional email and text copy plus selected service and appointment configuration in existing software. The clinic handles bookings, replies, and care.

These examples demonstrate relevant work and responsibility. They do not prove incremental revenue, booking growth, or measured time savings. No client testimonial, name, logo, or screenshot should be added without approval. Manufacturing cold outreach is a separate service and is not a main proof case for this offer.

There is no public pricing floor or cap. The preference for $1,000+ engagements is internal; a larger fee needs an appropriate scope and business case. The public offer uses an agreed scope and fixed monthly fee, with setup identified separately when needed.

The calculator explores hypothetical gross revenue from additional purchases over 12 months. It does not deduct service fees or provide a profitability verdict. The selected percentage is an assumption, not a forecast. Do not label revenue as profit or ROI, compound the same audience monthly, or treat ordinary purchases as incremental results.

## Inputs still needed

1. A genuine photo of Nick and Bridgette.
2. An approved quote from Jason explaining why delegating email work is valuable to him.
3. An approved clinic or PV campaign screenshot, with the original request and what Nick delivered. Verify details before adding PV as another case.
4. A verified receiving mailbox and configured direct inquiry delivery, or a real booking link. Until then, describe the existing email-draft flow accurately; preparing a draft is not sending an inquiry.

## Validation completed

- ESLint, TypeScript, and the production build passed.
- The Vercel preview reached READY. The new opening, work examples, calculator, and contact section were visually inspected on desktop.
- All three illustrative message states rendered correctly. Work navigation, the calculator contact link, and the pricing FAQ worked.
- Calculator checks: 1,000 people × 2% × $250 displayed $5,000 and 20 additional purchases; a blank input suppressed the result; 101% produced an accessible error and no result. Defaults were restored afterward.
- The contact form prepared a correct email draft with synthetic test data and explicitly stated that nothing had been sent. No message was sent. Direct delivery remains unconfigured.
- Responsive styles were reviewed, and missing word spaces in the mobile FAQ heading were corrected. A rendered mobile viewport was not available in this browser session; mobile visual verification remains a publication check.

## Before publication

Confirm the mobile layout, finish the receiving-mailbox or booking setup, and obtain Nick's approval before publishing to production.
