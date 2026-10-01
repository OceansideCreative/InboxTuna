import Link from "next/link";
import { Header } from "@/components/header";
import { Arrow, Brand, SailArt } from "@/components/brand";
import { ContactCard } from "@/components/contact-card";

const services = [
  {
    title: "Newsletters & promotions",
    description:
      "Introduce a service, share useful advice, or announce an offer. We write and send campaigns that give people a reason to book, buy, or get in touch.",
  },
  {
    title: "Messages after an inquiry",
    description:
      "Someone asks for information but isn’t ready to buy. We set up email sequences that answer common questions and help them decide.",
  },
  {
    title: "Reminders for past customers",
    description:
      "When it’s time for another visit or purchase, a relevant email or text can prompt a return. We plan the audience, message, and timing.",
  },
];

const faqs = [
  [
    "Can you take over what we already send?",
    "Yes. We can take over your newsletter or campaign schedule, improve the parts that need attention, and keep the voice your customers know.",
  ],
  [
    "How much input will you need from us?",
    "At the start, we need to learn your business and get access to the tools we’ll use. After that, you share business updates and review messages. We agree on an approval process that fits your schedule.",
  ],
  [
    "How does pricing work?",
    "We propose a fixed monthly fee based on the campaigns, audiences, tools, and automations we’ll manage. Initial setup is priced separately. You’ll see the scope and price before committing. If a one-time setup is all you need, we’ll recommend that.",
  ],
  [
    "Who handles replies and customer service?",
    "Your team handles personal replies, sales conversations, quotes, bookings, and customer service. We manage the marketing messages, including where replies go and when automated messages should stop.",
  ],
  [
    "How will we know what’s working?",
    "We review clicks, inquiries, bookings, and purchases where your tools can track them. Your team’s feedback helps us understand what those numbers mean for the business and decide what to send next.",
  ],
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              We set up and manage{" "}
              <span className="hero-highlight">email and text marketing</span>{" "}
              for your leads and customers.
            </h1>
            <p className="hero-description">
              We plan, write, and send newsletters, promotions, and automated
              messages to help turn inquiries into sales and bring customers
              back.
            </p>
            <p className="hero-takeover">
              We can take over what you already send or help you get started.
            </p>
            <div className="hero-actions">
              <a className="button button-coral" href="#contact">
                Arrange a call <Arrow />
              </a>
              <a className="text-link" href="#services">
                What we manage
              </a>
            </div>
            <p className="small-note">
              20 minutes to discuss your email and text marketing.
            </p>
          </div>
          <SailArt />
        </section>

        <section
          id="services"
          className="section container services-section"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <h2 id="services-title">What we manage</h2>
            <p>
              Messages for the people asking about your business, buying from
              you, and considering another visit.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="section work-section"
          aria-labelledby="work-title"
        >
          <div className="container work-layout">
            <h2 id="work-title">Client work</h2>
            <div className="work-list">
              <article className="work-example">
                <h3>Newsletters for a financial advisor</h3>
                <p>
                  Educational emails for different client age groups, with
                  branded charts. The advisor provides subject expertise and
                  reviews the content. We handle the writing and preparation.
                </p>
                <p className="work-credit">
                  Email work by Nick through WVNDR Media.
                </p>
              </article>
              <article className="work-example">
                <h3>Promotions for a wellness clinic</h3>
                <p>
                  Email and text copy for the clinic’s services and offers, plus
                  help organizing service names and appointment options in its
                  existing software. The clinic handles replies and bookings.
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
            <h2 id="management-title">We set it up and run it.</h2>
            <p>We agree on a scope and schedule before work begins.</p>
          </div>
          <div className="management-board">
            <article className="management-start">
              <h3>Getting started</h3>
              <ul>
                <li>Review your current messages, tools, and customer list.</li>
                <li>Choose the first campaigns and automations.</li>
                <li>Set up audiences, timing, testing, and approvals.</li>
              </ul>
            </article>
            <article className="management-monthly">
              <h3>Monthly management</h3>
              <ul>
                <li>Write, build, test, and send the agreed campaigns.</li>
                <li>
                  Check the automations we manage and update them as your
                  business changes.
                </li>
                <li>
                  Review responses and results to decide what to send next.
                </li>
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
              <p>If your current system can do the job, we’ll use it.</p>
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
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-layout">
            <h2 id="about-title">Who does the work?</h2>
            <p>
              Inbox Tuna is run by Nick Patterson and Bridgette in Hollywood,
              Florida. Nick handles the marketing, writing, and technical setup.
              Bridgette keeps the projects and communication organized.
            </p>
          </div>
        </section>

        <section
          className="section container faq-layout"
          aria-labelledby="faq-title"
        >
          <h2 id="faq-title">Common questions</h2>
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
              <h2 id="contact-title">
                Talk through your email and text marketing.
              </h2>
              <p>
                In 20 minutes, we’ll discuss what you send now, what you want it
                to achieve, and what we could take over.
              </p>
              <p>
                If it makes sense to work together, we’ll send a scope and
                price.
              </p>
              <p className="contact-note">
                No account access needed for this call.
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
          <a className="text-link" href="#main-content">
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
