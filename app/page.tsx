import Link from "next/link";
import { Header } from "@/components/header";
import { Arrow, Brand, ChannelIcon, Fish, SailArt } from "@/components/brand";
import { Opportunity } from "@/components/opportunity";
import { ReviewForm } from "@/components/review-form";
import { cases } from "@/lib/site";

const faqs = [
  [
    "What would you actually handle for us?",
    "We agree on a plan around your business: the audiences to contact, the messages they need, and the timing. That can include newsletters, email or text campaigns, and automated follow-up. We handle planning, writing, setup, checks, and ongoing attention within that scope.",
  ],
  [
    "Who answers when a customer replies?",
    "Your team. Before anything goes out, we agree on where replies go and who takes the next step. You handle quotes, appointments, sales, and customer service. We manage the messages and follow-up, including when an automated sequence should stop.",
  ],
  [
    "Can you work with the software we already use?",
    "That’s where we start. We look at what your current tools can do and what access we need. If a limitation means new software or extra technical work, we explain it and agree on the cost before proceeding.",
  ],
  [
    "How much of my time will this take?",
    "More at the start, while we learn your business and agree on the plan. After that, we need business updates and approvals through one point of contact. We bring you drafts and recommendations, so you’re reviewing the work rather than starting it from scratch.",
  ],
  [
    "How does pricing work?",
    "Ongoing management has a fixed monthly fee, based on the tools, audiences, and work we agree to handle. Any initial setup is spelled out separately. After the first conversation, you’ll get a clear scope and price before making a commitment.",
  ],
  [
    "How will we know whether it’s helping?",
    "We agree on the actions that matter to your business, such as inquiries, appointments, or purchases, and what your tools can track. We review those alongside campaign activity and your team’s feedback. We don’t guarantee revenue or count every sale after an email as a sale caused by that email.",
  ],
  [
    "What if I only need a few things set up?",
    "Then we’ll say so. Sometimes a focused project or a change in your existing software is the right answer. Ongoing management should earn its place by giving your business something useful each month.",
  ],
];

export default function Home() {
  const deliveryEnabled =
    process.env.CONTACT_DELIVERY === "resend" &&
    Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> CUSTOMER COMMUNICATION, HANDLED.
            </p>
            <h1 id="hero-title">
              We keep your
              <br />
              business
              <br />
              <span className="underline-accent">in touch.</span>
            </h1>
            <p className="hero-description">
              We manage your emails, texts, and automated follow-up to help
              turn inquiries into customers and give customers reasons to come
              back. You get a plan, the work done, and people responsible for it.
            </p>
            <div className="hero-actions">
              <a className="button" href="#review">
                Let’s talk about your business <Arrow diagonal />
              </a>
              <a className="text-link" href="#services">
                See what we handle <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="small-note">
              In 20 minutes, let’s see what we could take over for you.
            </p>
          </div>
          <SailArt />
        </section>
        <div className="service-strip" aria-label="Our services">
          <div className="container">
            <span>EMAIL MARKETING</span>
            <span className="strip-star" aria-hidden="true">
              ✳
            </span>
            <span>TEXT CAMPAIGNS</span>
            <span className="strip-star" aria-hidden="true">
              ✳
            </span>
            <span>FLOWS & AUTOMATIONS</span>
            <span className="strip-star" aria-hidden="true">
              ✳
            </span>
            <span>ONGOING MANAGEMENT</span>
          </div>
        </div>
        <section className="section container problem">
          <div>
            <p className="eyebrow">FROM THE FIRST INQUIRY TO THE NEXT VISIT</p>
            <h2>
              Give people
              <br />
              a reason to
              <br />
              choose you again.
            </h2>
            <p className="section-intro">
              Some people are deciding whether to buy. Others already know
              your business and could use it again. What they hear from you
              should reflect where they are.
            </p>
          </div>
          <div className="problem-list">
            {[
              [
                "01",
                "Help a new inquiry take the next step.",
                "Someone asks about your business today. A useful introduction, answers to common questions, and timely follow-up can help them decide what to do next.",
              ],
              [
                "02",
                "Keep customers informed and interested.",
                "Share useful advice, introduce a service, or explain what’s coming up. Give people something relevant to hear from a business they already know.",
              ],
              [
                "03",
                "Make the invitation to come back.",
                "A service is due. A season is changing. A customer has a reason to buy again. Plan those messages before the moment passes.",
              ],
            ].map(([n, title, body]) => (
              <div className="problem-row" key={n}>
                <span className="number">{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="services" className="services-section section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">HERE’S WHERE WE COME IN</p>
                <h2>
                  We plan it, write it,
                  <br />
                  <em>and keep it going.</em>
                </h2>
              </div>
              <p>
                Already sending and ready to hand it over? Or still meaning to
                get it started? We take responsibility for the work, using your
                existing tools wherever practical.
              </p>
            </div>
            <div className="service-rows">
              {[
                {
                  type: "mail" as const,
                  n: "01",
                  title: "Email & newsletters.",
                  body: "A newsletter. A useful update. A reason to come back. We turn what’s happening in your business into emails for the people who should hear about it.",
                  list: "Planning · Writing · Building · Sending",
                },
                {
                  type: "text" as const,
                  n: "02",
                  title: "Text campaigns.",
                  body: "Some messages are short, timely, and better sent by text. We help you use that channel thoughtfully, with an appropriate audience and a clear next step.",
                  list: "Relevant messages · Audience checks · Timing",
                },
                {
                  type: "flow" as const,
                  n: "03",
                  title: "Automated follow-up.",
                  body: "Welcome new inquiries, follow up on an estimate, or check in after a purchase. We set up the messages, timing, and stopping points, then check that they still fit your business.",
                  list: "Automations · Reply routing · Ongoing checks",
                },
              ].map((s) => (
                <article
                  className={`service-row service-${s.type}`}
                  key={s.type}
                >
                  <div className="service-icon">
                    <ChannelIcon type={s.type} />
                  </div>
                  <div className="service-name">
                    <span className="micro">{s.n} / WHAT WE HANDLE</span>
                    <h3>{s.title}</h3>
                  </div>
                  <div className="service-body">
                    <p>{s.body}</p>
                    <p className="service-tasks">{s.list}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="scope-note">
              <span className="scope-mark" aria-hidden="true">
                ↗
              </span>
              <p>
                <strong>A clear monthly scope.</strong> We agree on the
                audiences, campaigns, automations, and tools we’ll manage. You
                know what’s included and who’s taking care of it.
              </p>
            </div>
            <div className="tools-note">
              <h3>We start with the tools you already use.</h3>
              <p>
                Our experience includes email platforms and the communication
                features inside business software. We’ll look at what your
                setup supports before recommending anything new.
              </p>
              <ul className="tool-names" aria-label="Tools we’ve worked with">
                {["Mailchimp", "Constant Contact", "Klaviyo", "MailerLite", "Zenoti", "Nextech"].map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <p className="tools-footnote">Use something else? Tell us what you have.</p>
            </div>
          </div>
        </section>
        <section className="section container process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A SIMPLE WAY TO START</p>
              <h2>
                A clear first month.
                <br />
                A plan after that.
              </h2>
            </div>
            <p>
              You keep your accounts and customer relationships. We handle the
              preparation and execution, with an approval process that fits
              your business.
            </p>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Look at what you have.",
                "Your customers, inquiries, messages, and tools. We find out what’s already working and what’s being missed.",
              ],
              [
                "02",
                "Agree on the first month.",
                "We choose the first campaigns or flows, define the scope, and agree on approvals and what success would look like.",
              ],
              [
                "03",
                "Get the messages out.",
                "We write, build, check, and schedule. You give us the business context and sign off where needed.",
              ],
              [
                "04",
                "Manage it month to month.",
                "We plan and send the next campaigns, check existing flows, and adjust where needed. Together, we review the responses and actions your tools can track.",
              ],
            ].map(([n, t, b]) => (
              <div className="process-step" key={n}>
                <span className="step-number">{n}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="handoff">
          <div className="container handoff-inner">
            <div>
              <p className="eyebrow">THE HANDOFF IS PART OF THE PLAN</p>
              <h2>
                We manage the messages.
                <br />
                <span>You handle the conversations.</span>
              </h2>
            </div>
            <p>
              When someone replies, your team takes it from there: quotes,
              bookings, sales, and customer service. We agree on where those
              replies go before anything goes out.
            </p>
          </div>
        </section>
        <section id="work" className="section container work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW EXAMPLES OF THE WORK</p>
              <h2>
                Different businesses.
                <br />
                Work you can recognize.
              </h2>
            </div>
            <p>
              Client newsletters, clear product introductions, and messages
              that connect to a booking. A few examples of Nick’s work.
            </p>
          </div>
          <div className="work-grid">
            {cases.map((c, i) => (
              <article className={`work-card work-${c.id}`} key={c.id}>
                <div className="work-visual" aria-hidden="true">
                  <div className="sample-paper">
                    <span className="micro">
                      {i === 0
                        ? "FROM YOUR ADVISOR"
                        : i === 1
                          ? "A QUICK QUESTION"
                          : "KEEPING YOU IN THE LOOP"}
                    </span>
                    <div className="sample-rule" />
                    <strong>
                      {i === 0 ? (
                        <>
                          A little clarity
                          <br />
                          for your inbox.
                        </>
                      ) : i === 1 ? (
                        <>
                          The right person.
                          <br />A clear introduction.
                        </>
                      ) : (
                        <>
                          Something new.
                          <br />A clear next step.
                        </>
                      )}
                    </strong>
                    {i === 0 ? (
                      <div className="sample-chart">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    ) : i === 1 ? (
                      <div className="sample-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    ) : (
                      <span className="sample-cta">
                        See what’s happening <Arrow />
                      </span>
                    )}
                  </div>
                  <span className="sample-tag">
                    {i === 0 ? "EMAIL" : i === 1 ? "OUTREACH" : "EMAIL + TEXT"}
                  </span>
                </div>
                <div className="work-copy">
                  <p className="micro">{c.sector}</p>
                  <h3>{c.title}</h3>
                  <p>{c.summary}</p>
                  <div className="tags">
                    {c.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <details className="case-detail">
                    <summary>
                      See the work{" "}
                      <span className="details-plus" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <div>
                      <h4>The need</h4>
                      <p>{c.need}</p>
                      <h4>The work</h4>
                      <p>{c.work}</p>
                      <h4>The handoff</h4>
                      <p>{c.handoff}</p>
                      <p className="case-note">{c.note}</p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <p className="work-footnote">
            Client names are omitted. Illustrations are representative, not
            screenshots or performance reports.
          </p>
        </section>
        <Opportunity />
        <section id="about" className="section container about">
          <div
            className="team-art"
            aria-label="Nick and Bridgette, the people behind Inbox Tuna"
          >
            <div className="team-topline">
              <span className="micro">YOUR PEOPLE AT INBOX TUNA</span>
              <Fish />
            </div>
            <div className="team-names">
              Nick.
              <br />
              Bridgette.
              <br />
              <span>Your people.</span>
            </div>
            <div className="team-stripes" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="micro">
              BASED IN HOLLYWOOD, FLORIDA.
              <br />A LITTLE COASTAL ENERGY INCLUDED.
            </p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">HI, WE’RE NICK & BRIDGETTE.</p>
            <h2>
              Good at the work.
              <br />
              Easy to talk to.
            </h2>
            <p>
              You’ve built a business people want to buy from. We help you
              keep talking to those people, without having to write every
              email or figure out every setting yourself.
            </p>
            <p>
              Nick brings the writing, marketing, and technical know-how.
              Bridgette brings the organization, follow-through, and a way with
              people. Together, we keep the details moving.
            </p>
            <p>
              We get to know what you sell, how your customers buy, and how
              you like to work. You’ll deal directly with us.
            </p>
            <a className="text-link" href="#review">
              Tell us about your business <Arrow diagonal />
            </a>
          </div>
        </section>
        <section className="faq-section section">
          <div className="container faq-layout">
            <div>
              <p className="eyebrow">A FEW FAIR QUESTIONS</p>
              <h2>
                Before we
                <br />
                say hello.
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <span className="details-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="review" className="section review-section">
          <div className="container review-layout">
            <div className="review-copy">
              <p className="eyebrow">LET’S TALK ABOUT YOUR BUSINESS</p>
              <h2>
                Let’s see what
                <br />
                your next month
                <br />
                <em>could look like.</em>
              </h2>
              <p>
                Tell us how you communicate with customers and inquiries
                today, and what you’d like to improve or hand over. In a
                20-minute conversation, we’ll talk through where we could
                help and what we’d start with.
              </p>
              <ul className="review-points">
                <li>A first priority tied to your business goals.</li>
                <li>A clear picture of what we could take over.</li>
                <li>If there’s a fit, a scoped proposal afterward.</li>
              </ul>
              <p className="review-signoff">
                Talk soon,
                <br />
                <strong>Nick & Bridgette</strong>
              </p>
            </div>
            <ReviewForm deliveryEnabled={deliveryEnabled} />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <Link href="/" aria-label="Inbox Tuna home">
            <Brand />
          </Link>
          <p>
            Good communication.
            <br />
            Kept going.
          </p>
          <a className="text-link" href="#hero-title">
            Back to top ↑
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Inbox Tuna · Oceanside Creative
            Services
          </span>
          <Link href="/privacy">Privacy</Link>
          <span>Hollywood, FL · Working with businesses everywhere.</span>
        </div>
      </footer>
    </>
  );
}
