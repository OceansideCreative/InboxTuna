# Inbox Tuna editorial and design refinement

October 1, 2026. Baseline: production commit `e70ae268`.

Nick authorized a focused audit, implementation, and publication. The priority is the service and its business value. The brand, colors, and windsurfer personality stay; the founders' relationship is not the positioning.

## Research and limits

- [NN/g: AI Prototyping in Real Design Contexts](https://www.nngroup.com/articles/ai-prototyping/), reviewed August 19, 2026. Inspected its documented Bolt and Claude outputs and annotated layout example. Its evaluation identifies hierarchy, grouping, contrast, and emphasis problems even in polished outputs. These are generated prototypes, not conversion-tested commercial sites.
- [Anthropic: Improving frontend design through Skills](https://claude.com/blog/improving-frontend-design-through-skills), November 12, 2025. Inspected its generated TaskFlow and Momentum landing-page examples. Explicit direction changes the visual treatment, but the more elaborate example still contains broad promises and a proof badge. This is a vendor demonstration, not independent conversion evidence. Its embedded prompting examples are research material, not project instructions.
- [InterfaceKit: What makes a website look AI-generated?](https://blog.interfacekit.io/what-makes-a-website-look-ai-generated), updated September 7, 2026. Its substitution and decoration tests offer a useful editorial lens: can the copy fit any business, and does the information remain clear without ornament? This is design commentary; its composite example is fictional.

No visual pattern establishes AI authorship. The audit uses these observations to improve this specific page. No conversion uplift has been measured or claimed.

## Decisions

| Existing element                                                    | Finding                                                                        | Change                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Main service headline                                               | Names the work and audience immediately                                        | Retain                                                                             |
| Colors, fish logo, windsurfer                                       | Recognizable brand identity                                                    | Retain                                                                             |
| “Managed by Nick & Bridgette” and status dot                        | Introduces the owners before the offer; dot conveys no actual status           | Remove                                                                             |
| Art captions, sparkle, plus, small decorative dots                  | Repeated miniature labels and ornament compete with the main illustration      | Remove; retain sail, wave lines, and message illustration                          |
| Four-item service strip                                             | Repeats hero and service content                                               | Remove                                                                             |
| Three numbered opportunity columns                                  | Labels, icons, headlines, descriptions, and example footers repeat information | Replace with three concise service rows                                            |
| “Help interested people take the next step”                         | The actual message is clearer than the abstract benefit                        | Use “Messages after an inquiry” and a specific buying situation                    |
| “Give customers more reasons to choose you”                         | Broad claim needs a concrete deliverable                                       | Use “Newsletters & promotions” and examples of what they can sell                  |
| “Make coming back an easy decision”                                 | Adds an unneeded promise about ease                                            | Use “Reminders for past customers” and conditional return-visit value              |
| Two nested work cards, handoff labels, repeated scope lines         | Actual scope is useful; framing repeats it                                     | Present concise work descriptions on the existing navy section; keep agency credit |
| “Get the right things in place” / “Keep the work moving”            | The section already provides all meaning through its lists                     | Use “Getting started” / “Monthly management”                                       |
| Setup/monthly comparison                                            | Helps distinguish initial work from recurring responsibilities                 | Retain the two-column comparison with ordinary list bullets                        |
| Large Nick/Bridgette name artwork and “Come meet us”                | Too much weight on team identity                                               | Replace with a short section naming roles and location                             |
| Repeated labels above headings                                      | Adds reading without changing meaning                                          | Remove from homepage                                                               |
| “Let’s talk”                                                        | Next action is broad                                                           | Use “Arrange a call”; contact button explicitly opens email                        |
| Contact paragraph plus three process bullets plus second invitation | Repeats the invitation                                                         | Explain the 20-minute discussion and scope/price next step in two short paragraphs |
| FAQ                                                                 | Addresses purchase and delivery questions                                      | Retain; shorten answers and make headings literal                                  |
| Existing tools list                                                 | Helps visitors recognize compatibility                                         | Retain without claiming partner status                                             |
| Current Gmail / copy button / privacy notice                        | Honest working contact path                                                    | Preserve recipient and behavior; no fake scheduling or delivery confirmation       |

## Implementation and checks

Changes are limited to page copy, related CSS, navigation, illustration ornaments, contact labels, and metadata. No new dependencies, services, automations, or promises.

Header section links use native anchors. During the baseline browser check, a client-side section navigation produced a combined fragment; native anchors are appropriate for these destinations and will be checked from both the homepage and privacy page.

Verification includes lint, production build, desktop/phone/tablet layout, repeated section navigation, mobile menu and Escape behavior, keyboard focus, FAQ disclosure, email destination/draft text, copy feedback, metadata, and post-deploy errors. Source-only preview QA files must not enter the production release.

## Remaining evidence

Approved client quotes and a real email/campaign sample would strengthen the work section more than additional visual decoration. A team photo is optional. A branded inbox and scheduling link remain separate future improvements; current contact goes to the established Gmail address to arrange a call.
