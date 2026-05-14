"use client";

import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  href: string;
  accent?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  bullets,
  href,
  accent = false,
}: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl border flex flex-col gap-6 p-7 md:p-8 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: accent
          ? "var(--accent-soft)"
          : "var(--color-surface)",
        borderColor: hovered
          ? "var(--accent-border)"
          : accent
          ? "var(--accent-border)"
          : "var(--color-border)",
        boxShadow: hovered ? "var(--shadow-glow-accent)" : "var(--shadow-card)",
      }}
    >
      {/* Radial green wash on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background:
            "radial-gradient(120% 60% at 0% 0%, color-mix(in srgb, var(--color-accent) 8%, transparent), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="text-3xl mb-4" aria-hidden="true">
          {icon}
        </div>
        <p
          className="text-[11px] font-semibold uppercase text-[var(--color-muted2)] mb-2"
          style={{ letterSpacing: "var(--tracking-eyebrow)" }}
        >
          {tagline}
        </p>
        <h3
          className="text-[var(--color-text)] font-semibold"
          style={{
            fontSize: "var(--text-title)",
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          {title}
        </h3>
        <p className="mt-3 text-[var(--color-muted)] text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <ul className="relative flex flex-col gap-2 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
            <span className="mt-0.5 text-[var(--color-accent)] flex-shrink-0" aria-hidden="true">
              ✓
            </span>
            {b}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="relative text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent2)] transition-colors group-hover:underline underline-offset-2"
        aria-label={`Learn more about ${title}`}
      >
        Learn more →
      </Link>
    </div>
  );
}
