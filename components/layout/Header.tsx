"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/training", label: "Training" },
  { href: "/consulting", label: "Consulting" },
  { href: "/services/ai-systems", label: "AI Systems" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border-subtle)]"
      style={{
        height: "var(--topbar-h)",
        background: "var(--color-topbar-bg)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <Link
          href="/"
          className="text-[var(--color-text)] font-semibold text-lg tracking-tight hover:text-[var(--color-accent)] transition-colors"
        >
          2KO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-[var(--color-accent)] font-medium"
                  : "text-[var(--color-text)]/70 hover:text-[var(--color-text)]"
              }`}
              style={{ letterSpacing: "-0.005em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent2)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
            style={{
              letterSpacing: "-0.005em",
              boxShadow: "0 8px 20px -10px rgba(22,163,74,0.6)",
            }}
          >
            Get started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex flex-col gap-1.5 p-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-5 bg-[var(--color-text)] transition-all duration-200 origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--color-text)] transition-all duration-200 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-[var(--color-text)] transition-all duration-200 origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-[var(--color-accent)] font-medium"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
