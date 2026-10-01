"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- These section links intentionally use native fragment navigation. Full-page links still use Next Link. */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow, Brand } from "./brand";
export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="Inbox Tuna home">
          <Brand />
        </Link>
        <button
          className="menu-toggle"
          ref={menuButton}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <a href="/#services" onClick={() => setOpen(false)}>
            Services
          </a>
          <a href="/#work" onClick={() => setOpen(false)}>
            Our work
          </a>
          <a href="/#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a
            className="button button-small"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Arrange a call <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}
