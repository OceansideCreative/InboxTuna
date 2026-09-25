import Link from "next/link";
import { Header } from "@/components/header";
import { Arrow, Brand, Fish } from "@/components/brand";
import { MessagePreview } from "@/components/message-preview";
import { Opportunity } from "@/components/opportunity";
import { ReviewForm } from "@/components/review-form";

const faqs = [
  [
    "We already have the software. What do you add?",
    "Someone to decide what to send, who should receive it, and what happens next—then write, build, and run it. We start with your existing tools. If a limitation calls for extra software or technical work, we agree on that before proceeding.",
  ],
  [
    "How much input will you need from me?",
    "We learn your business at the start: what you offer, how people buy, and what you want to achieve. Then we agree on one point of contact and an approval process. You provide business updates and review drafts; we bring the recommendations and handle the agreed work.",
  ],
  [
    "How does pricing work?",
    "We propose a fixed monthly fee for a defined scope: the campaigns, audiences, tools, and automations we’ll handle. Any initial setup is identified separately. You see the scope and price before committing. If you only need a focused setup project, we’ll say so.",
  ],
  [
    "What will we measure?",
    "We start with the action you want people to take, such as an inquiry, appointment, or purchase. We review what your tools can track alongside your team’s feedback. Sales depend on your offer and follow-through too, so we don’t guarantee revenue or attribute every sale after an email to that email.",
  ],
  [
    "Can you use the contacts we already have?",
    "We first look at where the contacts came from, whether they’re appropriate to contact, and what permissions and preferences are recorded. Email and text may need different audiences. We agree on those details before anything goes out.",
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
            <p className="eyebrow"><span className="status-dot" /> EMAIL & TEXT MARKETING, MANAGED FOR YOU</p>
            <h1 id="hero-title">Help people<br />choose you.<br /><span>And come back.</span></h1>
            <p className="hero-description">We plan and run your newsletters, text campaigns, and automated follow-up. Help new inquiries take the next step. Give customers a reason to buy again.</p>
            <p className="hero-ownership">Nick & Bridgette handle the work. You run the business.</p>
            <a className="button button-coral" href="#review">Talk with Nick & Bridgette <Arrow diagonal /></a>
            <p className="hero-note">In 20 minutes, we’ll talk through where to start and what we could take over.</p>
          </div>
          <MessagePreview />
        </section>

        <div className="journey-strip" aria-label="Communication across the customer relationship">
          <div className="container journey-inner">
            <p><span>FIRST INQUIRY</span>A clearer next step</p><span className="journey-arrow" aria-hidden="true">↗</span>
            <p><span>CURRENT CUSTOMER</span>More of what you offer</p><span className="journey-arrow" aria-hidden="true">↗</span>
            <p><span>NEXT PURCHASE</span>A reason to return</p>
          </div>
        </div>

        <section id="services" className="section container buying-section">
          <div className="buying-intro">
            <p className="eyebrow">WHEN IT’S TIME TO HAND THIS OVER</p>
            <h2>Ready to hand over<br />your emails<br /><em>and follow-up?</em></h2>
            <p>Whether you already send regularly or want a more consistent process, we can take responsibility for the messages that go out next.</p>
            <a className="text-link" href="#management">Here’s what we take over <Arrow /></a>
          </div>
          <div className="buying-moments">
            <article><span className="moment-number">01</span><div><h3>You already send emails.<br />You’re ready to stop writing them.</h3><p>Keep the voice and knowledge your customers value. Hand over the planning, writing, building, and sending.</p><span className="starting-point">A place to start: your next newsletter.</span></div></article>
            <article><span className="moment-number">02</span><div><h3>New inquiries keep coming.<br />What happens next is less consistent.</h3><p>We set up the introduction, useful answers, and next-step messages that follow an inquiry. Each message has a job, and a time to go out.</p><span className="starting-point">A place to start: the first message after an inquiry.</span></div></article>
            <article><span className="moment-number">03</span><div><h3>There’s something worth promoting.<br />You want it out this month.</h3><p>A new service. A seasonal need. A reason to book again. We work out who should hear about it and get the message ready.</p><span className="starting-point">A place to start: one timely campaign.</span></div></article>
          </div>
        </section>

        <section id="work" className="work-section section">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">WORK NICK ALREADY HANDLES</p><h2>Here’s what it<br /><em>looks like in practice.</em></h2></div><p>Nick already handles client education emails and clinic promotions. Here’s what he does and what stays with the client.</p></div>
            <div className="work-grid">
              <article className="work-card">
                <div className="work-label"><span>01 / FINANCIAL ADVISORY</span><span className="work-dot" /></div>
                <h3>Client emails the advisor<br />doesn’t have to write.</h3>
                <p>An advisor wanted to keep clients informed without writing every email himself.</p>
                <div className="work-detail"><h4>What Nick handles</h4><p>Educational emails for different client age groups, branded charts, and revisions based on the advisor’s feedback.</p></div>
                <div className="work-handoff"><span>THE CLIENT’S PART</span><p>The advisor brings subject expertise and approves the content.</p></div>
                <p className="work-credit">Email work by Nick through WVNDR Media.</p>
              </article>
              <article className="work-card work-card-clinic">
                <div className="work-label"><span>02 / WELLNESS CLINIC</span><span className="work-dot" /></div>
                <h3>A promotion with<br />a practical next step.</h3>
                <p>A clinic needed to explain its offers and help customers understand how to take the next step.</p>
                <div className="work-detail"><h4>What Nick handles</h4><p>Promotional email and text copy, plus help organizing selected services and appointment names in the clinic’s software.</p></div>
                <div className="work-handoff"><span>THE CLIENT’S PART</span><p>The clinic handles replies, bookings, and questions about care.</p></div>
                <p className="work-credit">Scope: communication and selected software configuration.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="management" className="section container management-section">
          <div className="section-heading"><div><p className="eyebrow">SOMEONE RESPONSIBLE FOR THE WORK</p><h2>You shouldn’t have to<br /><em>start from scratch</em><br />every month.</h2></div><p>We get to know your business, agree on what we’ll handle, and bring you a plan. You have drafts to review and a clear idea of what’s happening next.</p></div>
          <div className="management-board">
            <article className="management-start"><p className="board-label">GETTING STARTED</p><h3>Put the right things<br />in place.</h3><ul><li>Understand your offer, customers, and current messages.</li><li>Choose the first campaigns or automations and agree on the scope.</li><li>Set up audiences, timing, approvals, and where replies go.</li></ul></article>
            <article className="management-monthly"><p className="board-label">MONTH TO MONTH</p><h3>Keep the communication<br />worth receiving.</h3><ul><li>Plan, write, build, and send the agreed campaigns.</li><li>Check the selected automations and adjust when needed.</li><li>Review responses and trackable actions, then plan the next work.</li></ul></article>
            <div className="management-replies"><Arrow /><p><strong>When someone replies, your team takes the conversation.</strong> You handle sales, quotes, appointments, and customer service. We agree on the handoff before sending.</p></div>
          </div>
          <div className="tools-section"><div><h3>Already have the tools?<br />That’s where we start.</h3><p>Platforms we’ve worked with. No need to change everything to get started.</p></div><ul aria-label="Platforms we’ve worked with"><li>Mailchimp</li><li>Constant Contact</li><li>Klaviyo</li><li>MailerLite</li><li>Zenoti</li><li>Nextech</li></ul></div>
        </section>

        <Opportunity />

        <section id="about" className="section container about-section">
          <div className="people-art" aria-hidden="true"><div className="people-art-top"><span>TWO PEOPLE. YOUR TEAM.</span><Fish /></div><div className="people-name name-nick">Nick<span>↗</span></div><div className="people-name name-bridgette">Bridgette<span>↗</span></div><div className="people-art-bottom"><span>HOLLYWOOD, FLORIDA</span><span>WORKING WITH YOU</span></div></div>
          <div className="about-copy"><p className="eyebrow">THE PEOPLE BEHIND INBOX TUNA</p><h2>You’ll work with<br />Nick & Bridgette.</h2><p>We’re a two-person business in Hollywood, Florida. Nick handles the writing, marketing, and technical setup. Bridgette keeps the details and communication organized.</p><p>We like learning how a business works, figuring out what would help, and getting it done. You’ll speak directly with the people handling your work.</p><a className="text-link" href="#review">Come meet us <Arrow diagonal /></a></div>
        </section>

        <section className="faq-section section"><div className="container faq-layout"><div><p className="eyebrow">BEFORE WE TALK</p><h2>A few things<br />you might<br /><em>be wondering.</em></h2></div><div className="faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section id="review" className="section review-section">
          <div className="container review-layout">
            <div className="review-copy"><p className="eyebrow">LET’S FIND YOUR FIRST USEFUL STEP</p><h2>What would you like<br />your customers<br /><em>to do next?</em></h2><p>Book a visit? Ask about a service? Come back sooner? Tell us what you have in mind—or what you’re ready to hand over.</p><div className="conversation-note"><span>20 MINUTES WITH NICK & BRIDGETTE</span><p>We’ll look at how you communicate today, talk through a useful first priority, and explain what we could take over.</p></div><p className="review-next">If there’s a fit, we’ll follow with a clear scope and price. No account access needed for the first conversation.</p></div>
            <ReviewForm deliveryEnabled={deliveryEnabled} />
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-main"><Link href="/" aria-label="Inbox Tuna home"><Brand /></Link><p>Good to hear from you.</p><a className="text-link" href="#hero-title">Back to top ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Inbox Tuna · Oceanside Creative Services</span><Link href="/privacy">Privacy</Link><span>Hollywood, Florida · Working with businesses everywhere.</span></div></footer>
    </>
  );
}
