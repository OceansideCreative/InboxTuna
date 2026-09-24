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
    "We need your input on the business, your customers, and what you want to say. We’ll agree on one point of contact and a straightforward approval process. The goal is to get this off your ongoing to-do list; we won’t invent a number of hours you’ll save.",
  ],
  [
    "How does pricing work?",
    "Ongoing management has a fixed monthly fee, based on the tools, audiences, and work we agree to handle. Any initial setup is spelled out separately. After the first conversation, you’ll get a clear scope and price before making a commitment.",
  ],
  [
    "Do you guarantee more sales?",
    "No. Better communication can create opportunities, but your offer, demand, customer experience, and team’s follow-through matter too. We commit to the agreed work, careful execution, and reporting what we can actually measure.",
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
              Emails, texts, newsletters, and the follow-up in between. We plan,
              write, and manage them so staying in touch doesn’t keep landing
              back on your list.
            </p>
            <div className="hero-actions">
              <a className="button" href="#review">
                Let’s look at your follow-up <Arrow diagonal />
              </a>
              <a className="text-link" href="#services">
                See what we handle <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="small-note">
              Start with a free, 20-minute conversation.
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
            <p className="eyebrow">SOUND FAMILIAR?</p>
            <h2>
              “We really should
              <br />
              be keeping up
              <br />
              with this.”
            </h2>
            <p className="section-intro">
              Past customers. People who asked for a quote. Subscribers who
              haven’t heard from you in months. You already have people to talk
              to.
            </p>
          </div>
          <div className="problem-list">
            {[
              [
                "01",
                "The newsletter keeps getting put off.",
                "You have something useful to say. Finding the time to write it, build it, and send it is another story.",
              ],
              [
                "02",
                "Follow-up depends on someone remembering.",
                "An inquiry goes quiet. A customer hasn’t been back. There’s no clear plan for what happens next.",
              ],
              [
                "03",
                "Your software could be doing more.",
                "You’re paying for tools with useful features, but setting them up keeps sliding down the list.",
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
                  The messages. The setup.
                  <br />
                  <em>The keeping it going.</em>
                </h2>
              </div>
              <p>
                We take responsibility for the communication you want
                happening—using the tools you have, wherever practical.
              </p>
            </div>
            <div className="service-rows">
              {[
                {
                  type: "mail" as const,
                  n: "01",
                  title: "Emails worth opening.",
                  body: "A newsletter. A useful update. A reason to come back. We turn what’s happening in your business into emails for the people who should hear about it.",
                  list: "Planning · Writing · Building · Sending",
                },
                {
                  type: "text" as const,
                  n: "02",
                  title: "Texts with a reason.",
                  body: "Some messages are short, timely, and better sent by text. We help you use that channel thoughtfully, with an appropriate audience and a clear next step.",
                  list: "Relevant messages · Audience checks · Timing",
                },
                {
                  type: "flow" as const,
                  n: "03",
                  title: "Follow-up that follows through.",
                  body: "A welcome after an inquiry. A check-in after a purchase. A review request or an invitation back. We set up the useful follow-up and keep an eye on how it works.",
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
                <strong>One agreed plan. Someone responsible for it.</strong> We
                define the tools, priorities, and cadence together. If the work
                grows, we agree on the change first.
              </p>
            </div>
          </div>
        </section>
        <section className="section container process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A SIMPLE WAY TO START</p>
              <h2>
                Off your list.
                <br />
                Into a routine.
              </h2>
            </div>
            <p>
              You keep your accounts and your customer relationships. We make
              the communication easier to keep up with.
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
                "Pick the first priorities.",
                "We agree on the useful work, the scope, and what needs your approval. Then we put a plan around it.",
              ],
              [
                "03",
                "Get the messages out.",
                "We write, build, check, and schedule. You give us the business context and sign off where needed.",
              ],
              [
                "04",
                "Keep paying attention.",
                "We check the flows, plan the next messages, and review responses and trackable actions with you.",
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
                Real things to take care of.
              </h2>
            </div>
            <p>
              From writing the next email to helping the software do its job,
              this is the kind of work Nick already handles.
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
              We like getting to know a business, figuring out what would help,
              and getting it done.
            </p>
            <p>
              Nick brings the writing, marketing, and technical know-how.
              Bridgette brings the organization, follow-through, and a way with
              people. Together, we keep the details moving.
            </p>
            <p>
              You’ll know who’s handling the work. And you’ll be able to have a
              normal conversation with us about it.
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
              <p className="eyebrow">LET’S TAKE A LOOK</p>
              <h2>
                What’s been
                <br />
                sitting on
                <br />
                <em>your list?</em>
              </h2>
              <p>
                Tell us a little about your business. We’ll start with a free,
                20-minute conversation about how you keep in touch and where
                things fall through.
              </p>
              <ul className="review-points">
                <li>No account access needed to start.</li>
                <li>One or two useful priorities to consider.</li>
                <li>An honest answer about whether we can help.</li>
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
