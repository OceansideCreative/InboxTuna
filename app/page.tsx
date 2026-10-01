import Link from "next/link";
import { Header } from "@/components/header";
import { Arrow, Brand, ChannelIcon, Fish, SailArt } from "@/components/brand";
import { ContactCard } from "@/components/contact-card";

const opportunities = [
  {
    number: "01",
    icon: "flow" as const,
    label: "AUTOMATED FOLLOW-UP",
    title: "Help interested people take the next step.",
    description:
      "Someone asks about your business. A useful email can answer their questions, explain what you offer, and make it easier to book or buy.",
    example: "An inquiry comes in → a helpful introduction goes out.",
  },
  {
    number: "02",
    icon: "mail" as const,
    label: "NEWSLETTERS & PROMOTIONS",
    title: "Give customers more reasons to choose you.",
    description:
      "Share useful advice, introduce a service, or put a timely offer in front of people who already know your business.",
    example: "You launch a service → the right customers hear about it.",
  },
  {
    number: "03",
    icon: "text" as const,
    label: "EMAIL & TEXT CAMPAIGNS",
    title: "Make coming back an easy decision.",
    description:
      "A relevant reminder or invitation can bring your business to mind when a customer is ready for another appointment or purchase.",
    example: "It’s time for another visit → a reminder makes it easy to book.",
  },
];

const faqs = [
  [
    "Can you take over what we already send?",
    "Yes. We can take over an existing newsletter or campaign schedule, improve the parts that need attention, and keep the voice your customers know. You don’t have to start again to work with us.",
  ],
  [
    "How much input will you need from us?",
    "We need to learn your business, get access to the agreed tools, and understand what matters to your customers. After that, you share business updates and approve messages through a process we agree together. We bring the plan and handle production.",
  ],
  [
    "How does pricing work?",
    "We propose a fixed monthly fee based on the campaigns, audiences, tools, and automations we’ll manage. Any initial setup is priced separately. You’ll see the scope and price before committing. If a one-time setup is all you need, we’ll recommend that.",
  ],
  [
    "Who handles replies and customer service?",
    "Your team handles personal replies, sales conversations, quotes, bookings, and customer service. We handle the agreed marketing messages and automations, including where replies go and when a follow-up sequence should stop.",
  ],
  [
    "How will we know what’s working?",
    "We agree on the actions that matter to your business, such as inquiries, bookings, and purchases. We review what your tools can track alongside your team’s feedback. We don’t guarantee revenue; we use what we learn to guide the next campaigns and improvements.",
  ],
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> MANAGED BY NICK & BRIDGETTE
            </p>
            <h1 id="hero-title">
              We set up and manage{" "}
              <span className="hero-highlight">email and text marketing</span>{" "}
              for your leads and customers.
            </h1>
            <p className="hero-description">
              We plan, write, and send newsletters, promotions, and automated
              follow-up to help turn inquiries into sales and bring customers
              back.
            </p>
            <p className="hero-takeover">
              We can take over an existing program or help you get started.
            </p>
            <div className="hero-actions">
              <a className="button button-coral" href="#contact">
                Let’s talk <Arrow diagonal />
              </a>
              <a className="text-link" href="#services">
                See what we handle <Arrow />
              </a>
            </div>
            <p className="small-note">
              Start with a 20-minute conversation about your business.
            </p>
          </div>
          <SailArt />
        </section>

        <div className="service-strip" aria-label="What we manage">
          <div className="container strip-inner">
            <span>NEWSLETTERS</span>
            <span aria-hidden="true">↗</span>
            <span>TEXT CAMPAIGNS</span>
            <span aria-hidden="true">↗</span>
            <span>AUTOMATED FOLLOW-UP</span>
            <span aria-hidden="true">↗</span>
            <span>ONGOING MANAGEMENT</span>
          </div>
        </div>

        <section
          id="services"
          className="section container opportunities-section"
          aria-labelledby="opportunities-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHY KEEPING IN TOUCH MATTERS</p>
              <h2 id="opportunities-title">
                Make more of your leads and customer relationships.
              </h2>
            </div>
            <p>
              You already put work into attracting people to your business.
              Email and text help you stay useful, explain what you offer, and
              give them a clear next step.
            </p>
          </div>
          <div className="opportunity-grid">
            {opportunities.map((item) => (
              <article className="opportunity-card" key={item.number}>
                <div className="opportunity-top">
                  <ChannelIcon type={item.icon} />
                  <span>{item.number}</span>
                </div>
                <p className="card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="opportunity-description">{item.description}</p>
                <p className="opportunity-example">{item.example}</p>
              </article>
            ))}
          </div>
          <div className="next-campaign">
            <p>
              Have a newsletter to hand over, a service to promote, or follow-up
              to put in place?
            </p>
            <a className="text-link" href="#contact">
              Let’s start there <Arrow />
            </a>
          </div>
        </section>

        <section
          id="work"
          className="section work-section"
          aria-labelledby="work-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">CLIENT EXPERIENCE</p>
                <h2 id="work-title">Work Nick already handles.</h2>
              </div>
              <p>
                Two examples from Nick’s client work. The writing, the practical
                details, and a clear role for the client.
              </p>
            </div>
            <div className="work-grid">
              <article className="work-card">
                <div className="work-label">
                  <span>FINANCIAL ADVISORY</span>
                  <ChannelIcon type="mail" />
                </div>
                <h3>Client emails the advisor doesn’t have to write.</h3>
                <p>
                  Educational emails for different client age groups, with
                  branded charts and revisions based on the advisor’s feedback.
                </p>
                <div className="work-result">
                  <span>WHAT THE CLIENT HANDS OVER</span>
                  <p>
                    The writing and preparation. The advisor provides subject
                    expertise and approves the content.
                  </p>
                </div>
                <p className="work-credit">
                  Email work by Nick through WVNDR Media.
                </p>
              </article>
              <article className="work-card work-card-clinic">
                <div className="work-label">
                  <span>WELLNESS CLINIC</span>
                  <ChannelIcon type="text" />
                </div>
                <h3>Email and text promotions with a clear next step.</h3>
                <p>
                  Copy that explains the clinic’s offers, plus help organizing
                  selected services and appointment names in its existing
                  software.
                </p>
                <div className="work-result">
                  <span>WHAT THE CLIENT HANDS OVER</span>
                  <p>
                    Promotional copy and selected software setup. The clinic
                    handles customer replies, bookings, and care.
                  </p>
                </div>
                <p className="work-credit">
                  Scope: communication and selected booking-system
                  configuration.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="section container management-section"
          aria-labelledby="management-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2 id="management-title">
                We set it up
                <br />
                and run it.
              </h2>
            </div>
            <p>
              You get a plan, messages ready to review, and people responsible
              for getting them out. We work within a scope and schedule agreed
              with you.
            </p>
          </div>
          <div className="management-board">
            <article className="management-start">
              <span className="step-number">01 / GETTING STARTED</span>
              <h3>Get the right things in place.</h3>
              <ul>
                <li>Learn your business, customers, and current messages.</li>
                <li>Agree on the first campaigns or automations.</li>
                <li>Set up the tools, audiences, timing, and approvals.</li>
              </ul>
            </article>
            <article className="management-monthly">
              <span className="step-number">02 / MONTH TO MONTH</span>
              <h3>Keep the work moving.</h3>
              <ul>
                <li>Plan, write, build, and send the agreed campaigns.</li>
                <li>Check selected automations and update them when needed.</li>
                <li>Review responses and results to guide the next work.</li>
              </ul>
            </article>
          </div>
          <p className="management-handoff">
            <strong>Your part:</strong> share business updates and approve the
            messages. Your team handles personal replies, sales, and customer
            service.
          </p>
          <div className="tools-section">
            <div>
              <h3>We start with the tools you have.</h3>
              <p>Where practical, we work in your existing accounts.</p>
            </div>
            <ul aria-label="Some of the platforms we work with">
              <li>Mailchimp</li>
              <li>Constant Contact</li>
              <li>Klaviyo</li>
              <li>MailerLite</li>
              <li>Zenoti</li>
              <li>Nextech</li>
            </ul>
          </div>
        </section>

        <section
          id="about"
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-layout">
            <div className="people-art" aria-hidden="true">
              <div className="people-art-top">
                <span>THE PEOPLE BEHIND INBOX TUNA</span>
                <Fish />
              </div>
              <div className="people-name name-nick">
                Nick<span>↗</span>
              </div>
              <div className="people-name name-bridgette">
                Bridgette<span>↗</span>
              </div>
              <div className="people-art-bottom">
                <span>HOLLYWOOD, FLORIDA</span>
                <span>OCEANSIDE CREATIVE SERVICES</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">A SMALL TEAM YOU’LL GET TO KNOW</p>
              <h2 id="about-title">
                You’ll work directly with Nick and Bridgette.
              </h2>
              <p>
                We run Inbox Tuna from Hollywood, Florida. Nick handles the
                writing, marketing, and technical setup. Bridgette keeps the
                details and communication organized.
              </p>
              <p>
                We like learning how a business works and getting useful things
                done. You’ll speak with the people handling your work.
              </p>
              <a className="text-link" href="#contact">
                Come meet us <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section container faq-layout"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">A FEW PRACTICAL DETAILS</p>
            <h2 id="faq-title">Before we talk.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">20 MINUTES WITH NICK & BRIDGETTE</p>
              <h2 id="contact-title">
                Let’s talk about
                <br />
                your business.
              </h2>
              <p>
                Tell us how you reach your leads and customers today, and what
                you’d like to improve or hand over.
              </p>
              <ul className="conversation-points">
                <li>We’ll talk through a useful first priority.</li>
                <li>Explain what we could set up or take over.</li>
                <li>If there’s a fit, follow with a clear scope and price.</li>
              </ul>
              <p className="contact-note">
                No account access or preparation needed for the first
                conversation.
              </p>
            </div>
            <ContactCard />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <Link href="/" aria-label="Inbox Tuna home">
            <Brand />
          </Link>
          <p>We keep your business in touch.</p>
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
          <span>Hollywood, Florida</span>
        </div>
      </footer>
    </>
  );
}
