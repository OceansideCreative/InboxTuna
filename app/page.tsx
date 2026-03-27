"use client";

import { useEffect } from "react";

const tickerItems = [
  "Cold Outreach",
  "Newsletter Management",
  "List Building",
  "Infrastructure",
  "Copywriting",
  "Deliverability",
  "Automations",
  "TAM Research",
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="logo">
          INBOX <span>TUNA</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#how">Process</a>
          <a href="#book" className="nav-btn">
            Book a Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="sun-glow" />
        <div className="caustics">
          <svg
            viewBox="0 0 1000 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,200 Q150,180 300,220 Q450,260 600,200 Q750,140 900,210 L1000,210"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M0,350 Q200,310 350,370 Q500,430 700,350 Q850,290 1000,360"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M0,500 Q100,480 250,520 Q400,560 550,490 Q700,420 850,510 L1000,500"
              fill="none"
              stroke="white"
              strokeWidth="1.2"
            />
            <path
              d="M0,150 Q250,120 400,170 Q600,220 800,150 L1000,160"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <path
              d="M0,650 Q180,620 350,670 Q520,720 700,640 Q880,560 1000,650"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
            <path
              d="M0,80 Q200,60 380,100 Q550,140 720,80 Q880,30 1000,90"
              fill="none"
              stroke="white"
              strokeWidth="0.6"
            />
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-tag">Email Marketing, Fully Managed</div>
            <h1>
              I make email
              <br />
              <span className="accent">your most</span>
              <span className="accent">productive channel.</span>
              <span className="sub-line">
                Whether you&apos;re reaching your audience or building a new
                one.
              </span>
            </h1>
            <p className="hero-body">
              Cold outreach, newsletters, list management, infrastructure. I
              handle the entire system so you can focus on closing deals.
            </p>
            <div className="hero-cta-row">
              <a href="#book" className="hero-cta">
                Book a Call →
              </a>
              <span className="hero-cta-sub">20 min · No pitch</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="tuna-wrap">
              <svg
                viewBox="0 0 480 360"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="tb"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1e8a9e" />
                    <stop offset="35%" stopColor="#0e6478" />
                    <stop offset="100%" stopColor="#0b1a24" />
                  </linearGradient>
                  <linearGradient
                    id="tbelly"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#12cdb8"
                      stopOpacity="0.4"
                    />
                    <stop
                      offset="100%"
                      stopColor="#e6d4ac"
                      stopOpacity="0.55"
                    />
                  </linearGradient>
                  <linearGradient
                    id="tfin"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d4940a" />
                    <stop offset="100%" stopColor="#c4561a" />
                  </linearGradient>
                </defs>

                {/* Splash */}
                <line
                  x1="418"
                  y1="138"
                  x2="458"
                  y2="118"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="428"
                  y1="162"
                  x2="465"
                  y2="155"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="412"
                  y1="184"
                  x2="450"
                  y2="190"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="462"
                  cy="128"
                  r="3.5"
                  fill="rgba(255,255,255,0.25)"
                />
                <circle
                  cx="470"
                  cy="162"
                  r="2.5"
                  fill="rgba(255,255,255,0.15)"
                />

                {/* Body */}
                <path
                  d="M60,180 C60,180 105,100 195,88 C285,76 385,100 420,160 C435,183 428,208 420,222 C380,278 280,290 195,280 C115,270 60,225 60,180Z"
                  fill="url(#tb)"
                />

                {/* Belly */}
                <path
                  d="M115,205 C155,262 275,278 405,218 C375,262 275,280 195,274 C135,267 110,235 115,205Z"
                  fill="url(#tbelly)"
                />

                {/* Dorsal */}
                <path
                  d="M215,90 L248,22 L295,86"
                  fill="url(#tfin)"
                  opacity="0.9"
                />

                {/* Tail */}
                <path
                  d="M60,180 L8,122 L30,178 L8,232 Z"
                  fill="url(#tfin)"
                  opacity="0.85"
                />

                {/* Pectoral */}
                <path
                  d="M295,205 L342,258 L283,232Z"
                  fill="url(#tfin)"
                  opacity="0.6"
                />

                {/* Rear fins */}
                <path
                  d="M98,212 L82,244 L112,228Z"
                  fill="url(#tfin)"
                  opacity="0.4"
                />

                {/* Stripes */}
                <path
                  d="M140,140 C200,132 300,128 380,140"
                  fill="none"
                  stroke="rgba(15,181,162,0.1)"
                  strokeWidth="1"
                />
                <path
                  d="M130,160 C200,152 310,148 390,158"
                  fill="none"
                  stroke="rgba(15,181,162,0.08)"
                  strokeWidth="1"
                />
                <path
                  d="M120,180 C200,175 320,172 400,178"
                  fill="none"
                  stroke="rgba(15,181,162,0.06)"
                  strokeWidth="1"
                />

                {/* Eye */}
                <circle
                  cx="375"
                  cy="162"
                  r="18"
                  fill="#0b1a24"
                  stroke="rgba(18,205,184,0.4)"
                  strokeWidth="2"
                />
                <circle cx="378" cy="159" r="7" fill="#12cdb8" />
                <circle cx="381" cy="156" r="2.5" fill="#f2ead8" />
              </svg>
            </div>
          </div>
        </div>

        <div className="wave-bottom">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,25 C240,45 480,5 720,25 C960,45 1200,5 1440,25 L1440,60 L0,60Z"
              fill="#0b1a24"
            />
          </svg>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span className="ticker-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="about">
        <div className="about-inner">
          <div className="about-block reveal">
            <div className="about-block-text">
              Not an agency.
              <br />
              Not a freelancer.
              <br />
              <span>An embedded operator.</span>
            </div>
          </div>
          <div className="about-text reveal rd1">
            <div
              className="sec-tag"
              style={{
                background: "var(--navy)",
                color: "var(--water-bright)",
              }}
            >
              About Inbox Tuna
            </div>
            <h2>
              I work with a small number of businesses and{" "}
              <span className="hl">go deep.</span>
            </h2>
            <p>
              I&apos;m not running a playbook — I&apos;m learning your market,
              your buyers, and your voice. Then I build the email system that
              fits and I run it.
            </p>
            <p>
              The work starts with email but goes wherever the opportunity is —{" "}
              <strong>
                competitive research, market intelligence, sales tools,
                AI-powered workflows.
              </strong>{" "}
              Email is the starting point, not the ceiling.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header reveal">
            <div className="sec-tag">What I Do</div>
            <h2>
              I make email your most
              <br />
              productive channel.
            </h2>
          </div>

          <div className="svc-grid">
            <div className="svc-card reveal">
              <div className="num">01</div>
              <h3>Email List Management</h3>
              <p>
                You have a list — subscribers, clients, prospects — but
                it&apos;s not working hard enough. I build a strategy, write the
                content, set the cadence, and handle every send.
              </p>
              <div className="svc-tags">
                <span className="svc-tag">Strategy</span>
                <span className="svc-tag">Copywriting</span>
                <span className="svc-tag">Segmentation</span>
                <span className="svc-tag">Automations</span>
                <span className="svc-tag">Monthly Sends</span>
              </div>
            </div>

            <div className="svc-card reveal rd1">
              <div className="num">02</div>
              <h3>Cold Email Outreach</h3>
              <p>
                You need conversations with people who don&apos;t know you yet.
                I build your total addressable market, set up the
                infrastructure, write the sequences, and hand off replies.
              </p>
              <div className="svc-tags">
                <span className="svc-tag">TAM Research</span>
                <span className="svc-tag">Infrastructure</span>
                <span className="svc-tag">List Building</span>
                <span className="svc-tag">Sequences</span>
                <span className="svc-tag">Reply Handoff</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="how">
        <div className="process-inner">
          <div className="process-header reveal">
            <div className="sec-tag">How It Works</div>
            <h2>
              Simple process.
              <br />
              Serious results.
            </h2>
          </div>

          <div className="steps">
            <div className="step reveal">
              <div className="step-num">01</div>
              <h3>Discovery Call</h3>
              <p>
                We talk about your business, your audience, and what&apos;s been
                tried before. I&apos;ll tell you straight whether email is the
                right play.
              </p>
            </div>
            <div className="step reveal rd1">
              <div className="step-num">02</div>
              <h3>Build Phase</h3>
              <p>
                I set everything up — strategy, content calendar,
                infrastructure, target lists. You pay for the tools. You own all
                the data.
              </p>
            </div>
            <div className="step reveal rd2">
              <div className="step-num">03</div>
              <h3>Execution</h3>
              <p>
                Copy gets written, emails go out, replies come in. I stay in the
                weeds so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="why-inner">
          <div className="why-header reveal">
            <div className="sec-tag">Why Inbox Tuna</div>
            <h2>
              I go deep so your
              <br />
              emails <span className="hl">don&apos;t sink.</span>
            </h2>
          </div>

          <div className="why-grid">
            <div className="why-card reveal">
              <h4>You Own Everything</h4>
              <p>
                Your tools, your data, your domains, your lists. I operate the
                system — you own it. If we part ways, you keep everything.
              </p>
            </div>
            <div className="why-card reveal rd1">
              <h4>Boutique by Design</h4>
              <p>
                Limited client roster means I&apos;m actually in your business,
                not running a playbook. I learn your market, your buyers, and
                your voice.
              </p>
            </div>
            <div className="why-card reveal rd2">
              <h4>Beyond the Send Button</h4>
              <p>
                The work goes wherever the opportunity is — competitive research,
                market intelligence, sales tools, AI-powered workflows.
              </p>
            </div>
            <div className="why-card reveal rd3">
              <h4>Built Right from Day One</h4>
              <p>
                Proper infrastructure. Proper lists. Proper copy. Sloppy setup
                is why most email programs fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="for-who">
        <div className="for-inner">
          <div className="for-header reveal">
            <div className="sec-tag">Is This For You?</div>
            <h2>This works best for…</h2>
          </div>

          <div className="for-grid">
            <div className="for-card reveal">
              <div className="for-arrow">→</div>
              <p>
                <strong>B2B service businesses</strong> that need a steady
                pipeline of conversations with decision-makers.
              </p>
            </div>
            <div className="for-card reveal rd1">
              <div className="for-arrow">→</div>
              <p>
                <strong>Businesses with a list they&apos;re neglecting</strong>{" "}
                — you know you should be emailing, you just don&apos;t have time
                to do it yourself.
              </p>
            </div>
            <div className="for-card reveal rd2">
              <div className="for-arrow">→</div>
              <p>
                <strong>
                  Companies that tried cold email and it didn&apos;t work
                </strong>{" "}
                — bad infrastructure, bad lists, or a bad agency. Time to do it
                right.
              </p>
            </div>
            <div className="for-card reveal rd3">
              <div className="for-arrow">→</div>
              <p>
                <strong>Sales teams that want more at-bats</strong> — you can
                close, you just need someone putting opportunities in front of
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="book">
        <div className="cta-inner reveal">
          <h2>
            Ready to make email
            <br />
            <span className="hl">actually work?</span>
          </h2>
          <p>
            Book a 20-minute call. I&apos;ll tell you if I can help — and if I
            can&apos;t, I&apos;ll tell you that too.
          </p>
          <a href="#" className="cta-btn">
            Book Your Call →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="#" className="f-logo">
          Inbox Tuna
        </a>
        <p>Oceanside Creative Services · nick@inboxtuna.com</p>
      </footer>
    </>
  );
}
