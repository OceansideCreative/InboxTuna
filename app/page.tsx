"use client";

import { useEffect, useRef, useCallback } from "react";

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

interface Fish {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  caught: boolean;
  catchSpeed: number;
}

export default function Home() {
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);
  const sonarCanvasRef = useRef<HTMLCanvasElement>(null);
  const sonarSectionRef = useRef<HTMLElement>(null);
  const heroFrameRef = useRef(0);
  const sonarFrameRef = useRef(0);
  const fishRef = useRef<Fish[]>([]);
  const heroRafRef = useRef<number>(0);
  const sonarRafRef = useRef<number>(0);

  const initFish = useCallback(() => {
    const f: Fish[] = [];
    for (let i = 0; i < 14; i++) {
      f.push({
        x: Math.random() * 90 + 5,
        y: 42 + Math.random() * 50,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.04,
        size: 0.8 + Math.random() * 1.6,
        color: Math.random() > 0.5 ? "#f0aa0c" : "#48e8d4",
        caught: false,
        catchSpeed: 0,
      });
    }
    fishRef.current = f;
  }, []);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Init fish
    initFish();

    // Hero canvas animation
    const heroCanvas = heroCanvasRef.current;
    if (heroCanvas) {
      const ctx = heroCanvas.getContext("2d");
      if (ctx) {
        const resize = () => {
          const rect = heroCanvas.parentElement?.getBoundingClientRect();
          if (rect) {
            heroCanvas.width = rect.width * 2;
            heroCanvas.height = rect.height * 2;
            ctx.scale(2, 2);
          }
        };
        resize();
        window.addEventListener("resize", resize);

        const drawHero = () => {
          const w = heroCanvas.width / 2;
          const h = heroCanvas.height / 2;
          const frame = heroFrameRef.current;
          ctx.clearRect(0, 0, w, h);

          // Water surface waves
          ctx.strokeStyle = "rgba(255,255,255,0.07)";
          ctx.lineWidth = 1;
          for (let wv = 0; wv < 3; wv++) {
            ctx.beginPath();
            for (let x = 0; x < w; x++) {
              const wy =
                h * 0.2 +
                Math.sin((x + frame * 1.5 + wv * 200) * 0.015) * 4 +
                Math.cos((x + frame + wv * 100) * 0.008) * 3;
              x === 0 ? ctx.moveTo(x, wy) : ctx.lineTo(x, wy);
            }
            ctx.stroke();
          }

          const boatBob = Math.sin(frame * 0.03) * 5;
          const boatX = w * 0.5;
          const boatY = h * 0.2 + boatBob;

          // Hull
          ctx.fillStyle = "rgba(11,26,36,0.75)";
          ctx.beginPath();
          ctx.moveTo(boatX - w * 0.12, boatY);
          ctx.lineTo(boatX - w * 0.09, boatY - 22);
          ctx.lineTo(boatX + w * 0.09, boatY - 22);
          ctx.lineTo(boatX + w * 0.12, boatY - 12);
          ctx.lineTo(boatX + w * 0.135, boatY);
          ctx.closePath();
          ctx.fill();

          // Tower
          ctx.fillStyle = "rgba(11,26,36,0.55)";
          ctx.fillRect(boatX + 8, boatY - 46, 3.5, 24);
          ctx.fillRect(boatX - 8, boatY - 42, 30, 5);

          // Outriggers
          ctx.strokeStyle = "rgba(11,26,36,0.35)";
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(boatX + 10, boatY - 44);
          ctx.lineTo(boatX - w * 0.09, boatY - 60);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(boatX + 10, boatY - 44);
          ctx.lineTo(boatX + w * 0.11, boatY - 60);
          ctx.stroke();

          // Fishing lines
          ctx.strokeStyle = "rgba(255,255,255,0.1)";
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(boatX - w * 0.08, boatY - 60);
          ctx.quadraticCurveTo(
            boatX - w * 0.07,
            boatY + h * 0.2,
            boatX - w * 0.06,
            boatY + h * 0.55
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(boatX + w * 0.1, boatY - 60);
          ctx.quadraticCurveTo(
            boatX + w * 0.09,
            boatY + h * 0.2,
            boatX + w * 0.08,
            boatY + h * 0.5
          );
          ctx.stroke();

          // Wake
          ctx.strokeStyle = "rgba(255,255,255,0.06)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(boatX - w * 0.12, boatY + 2);
          ctx.quadraticCurveTo(
            boatX - w * 0.17,
            boatY + 5,
            boatX - w * 0.25,
            boatY
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(boatX + w * 0.135, boatY + 2);
          ctx.quadraticCurveTo(
            boatX + w * 0.18,
            boatY + 5,
            boatX + w * 0.27,
            boatY
          );
          ctx.stroke();

          // Fish
          const fish = fishRef.current;
          for (let i = 0; i < fish.length; i++) {
            const f = fish[i];
            const fx = (f.x / 100) * w;
            const fy = (f.y / 100) * h;
            const fSize = (f.size / 100) * w;

            if (f.caught) {
              f.y -= f.catchSpeed;
              f.catchSpeed += 0.06;
              if (f.y < 15) {
                f.caught = false;
                f.y = 50 + Math.random() * 42;
                f.x = Math.random() * 90 + 5;
                f.catchSpeed = 0;
              }
            } else {
              f.x += f.vx;
              f.y += f.vy + Math.sin(frame * 0.02 + i) * 0.015;
              if (f.x < 3 || f.x > 97) f.vx *= -1;
              if (f.y < 30 || f.y > 92) f.vy *= -1;
              if (frame % 250 === i * 18 && Math.random() > 0.55) {
                f.caught = true;
                f.catchSpeed = 0.3;
              }
            }

            ctx.save();
            ctx.translate(fx, fy);
            if (f.vx < 0) ctx.scale(-1, 1);
            ctx.globalAlpha = f.caught
              ? 0.35 + Math.sin(frame * 0.2) * 0.15
              : 0.5;
            ctx.fillStyle = f.color;

            // Body
            ctx.beginPath();
            ctx.ellipse(0, 0, fSize, fSize * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();

            // Tail
            ctx.beginPath();
            ctx.moveTo(-fSize, 0);
            ctx.lineTo(-fSize - fSize * 0.5, -fSize * 0.4);
            ctx.lineTo(-fSize - fSize * 0.5, fSize * 0.4);
            ctx.closePath();
            ctx.fill();

            // Eye
            ctx.fillStyle = "#0b1a24";
            ctx.beginPath();
            ctx.arc(fSize * 0.6, -fSize * 0.15, fSize * 0.15, 0, Math.PI * 2);
            ctx.fill();

            // Splash lines when caught
            if (f.caught) {
              ctx.strokeStyle = "rgba(255,255,255,0.2)";
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(fSize * 0.5, -fSize * 0.6);
              ctx.lineTo(fSize * 1.2, -fSize * 1.4);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(fSize * 0.8, -fSize * 0.4);
              ctx.lineTo(fSize * 1.5, -fSize * 1.1);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(-fSize * 0.3, -fSize * 0.7);
              ctx.lineTo(-fSize * 0.6, -fSize * 1.5);
              ctx.stroke();
            }

            ctx.restore();
          }

          // Depth fade at bottom
          const grd = ctx.createLinearGradient(0, h * 0.85, 0, h);
          grd.addColorStop(0, "rgba(6,85,88,0)");
          grd.addColorStop(1, "rgba(6,85,88,0.7)");
          ctx.fillStyle = grd;
          ctx.fillRect(0, h * 0.85, w, h * 0.15);

          heroFrameRef.current++;
          heroRafRef.current = requestAnimationFrame(drawHero);
        };
        drawHero();

        return () => {
          window.removeEventListener("resize", resize);
          cancelAnimationFrame(heroRafRef.current);
        };
      }
    }

    return () => observer.disconnect();
  }, [initFish]);

  // Sonar canvas
  useEffect(() => {
    const sonarCanvas = sonarCanvasRef.current;
    const sonarSection = sonarSectionRef.current;
    if (!sonarCanvas || !sonarSection) return;

    const ctx = sonarCanvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      sonarCanvas.width = sonarSection.offsetWidth * 2;
      sonarCanvas.height = sonarSection.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const drawSonar = () => {
      const w = sonarCanvas.width / 2;
      const h = sonarCanvas.height / 2;
      const frame = sonarFrameRef.current;

      ctx.fillStyle = "rgba(5,14,20,0.12)";
      ctx.fillRect(0, 0, w, h);

      const xPos = (frame * 1.5) % w;
      const baseY = h * 0.78;

      // Bottom contour
      for (let i = 0; i < 5; i++) {
        let bx = xPos - i * 2;
        if (bx < 0) bx += w;
        const ny =
          Math.sin(bx * 0.006) * 30 + Math.cos(bx * 0.003) * 20;
        const op = 1 - i * 0.18;
        ctx.fillStyle = `rgba(72,232,212,${0.2 * op})`;
        ctx.fillRect(bx, baseY + ny, 2.5, h - baseY - ny);
        ctx.fillStyle = `rgba(240,170,12,${0.1 * op})`;
        ctx.fillRect(bx, baseY + ny - 6, 2.5, 10);
      }

      // Fish blips
      if (frame % 35 === 0) {
        const fy = 60 + Math.random() * (h * 0.55);
        ctx.beginPath();
        ctx.arc(xPos, fy, 2 + Math.random() * 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(240,170,12,0.5)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          xPos,
          fy,
          5 + Math.random() * 5,
          -Math.PI * 0.8,
          -Math.PI * 0.2
        );
        ctx.strokeStyle = "rgba(240,170,12,0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Sweep glow
      ctx.fillStyle = "rgba(72,232,212,0.04)";
      ctx.fillRect(xPos - 15, 0, 30, h);

      sonarFrameRef.current++;
      sonarRafRef.current = requestAnimationFrame(drawSonar);
    };
    drawSonar();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(sonarRafRef.current);
    };
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
          <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 Q150,180 300,220 Q450,260 600,200 Q750,140 900,210 L1000,210" fill="none" stroke="white" strokeWidth="1.5" />
            <path d="M0,350 Q200,310 350,370 Q500,430 700,350 Q850,290 1000,360" fill="none" stroke="white" strokeWidth="1" />
            <path d="M0,500 Q100,480 250,520 Q400,560 550,490 Q700,420 850,510 L1000,500" fill="none" stroke="white" strokeWidth="1.2" />
            <path d="M0,150 Q250,120 400,170 Q600,220 800,150 L1000,160" fill="none" stroke="white" strokeWidth="0.8" />
            <path d="M0,650 Q180,620 350,670 Q520,720 700,640 Q880,560 1000,650" fill="none" stroke="white" strokeWidth="0.8" />
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
                Whether you&apos;re reaching your audience or building a new one.
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
            <div className="boat-canvas-wrap">
              <canvas ref={heroCanvasRef} className="boat-canvas" />
            </div>
          </div>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,25 C240,45 480,5 720,25 C960,45 1200,5 1440,25 L1440,60 L0,60Z" fill="#0b1a24" />
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
              style={{ background: "var(--navy)", color: "var(--water-bright)" }}
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
                You need conversations with people who don&apos;t know you yet. I
                build your total addressable market, set up the infrastructure,
                write the sequences, and hand off replies.
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
                I set everything up — strategy, content calendar, infrastructure,
                target lists. You pay for the tools. You own all the data.
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

      {/* DEPTH TRANSITION — water gets deeper */}
      <div className="depth-transition-zone" />

      {/* WHY — deeper water */}
      <section className="why sonar-zone">
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
                Proper infrastructure. Proper lists. Proper copy. Sloppy setup is
                why most email programs fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO — even deeper */}
      <section className="for-who deep-water">
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

      {/* CTA — SONAR ZONE */}
      <section className="cta sonar-cta-section" id="book" ref={sonarSectionRef}>
        <canvas ref={sonarCanvasRef} className="sonar-canvas" />
        <div className="sonar-scan-lines" />
        <div className="sonar-depth-markers">
          <span>0 ft</span>
          <span>20 ft</span>
          <span>40 ft</span>
          <span>60 ft</span>
          <span>80 ft</span>
        </div>
        <div className="sonar-readout">
          FREQ 200kHz
          <br />
          GAIN 82%
          <br />
          RNG AUTO
          <br />
          INBOX TUNA
        </div>
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
