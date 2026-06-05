import type { ReactNode } from "react";
import Button from "@/components/ui/Button";

interface PageHeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctas?: PageHeroCTA[];
  motif?: ReactNode;
  /** When true, motif renders below copy (mobile-style) at all sizes. */
  stack?: boolean;
}

/**
 * PageHero — the tint-aware hero used by every division bridge page
 * and any internal page that wants the umbrella's signature treatment.
 *
 *  • Reads `--tint` from the nearest [data-tint] scope (or default green).
 *  • Two-column on md+ (copy left, motif right). One-column on mobile.
 *  • Backdrops: grid mask + radial tint glow + drifting orbs.
 *  • No stock image. The motif slot is where the bespoke "wow" lives.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  ctas = [],
  motif,
  stack = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-fg/10">
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute inset-0 tint-radial-glow" />
        <div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl orb-drift-a"
          style={{ background: "var(--tint-12)" }}
        />
        <div
          className="absolute -bottom-32 right-0 h-96 w-96 rounded-full blur-3xl orb-drift-b"
          style={{ background: "var(--tint-12)" }}
        />
      </div>

      {/* Tint underline at bottom of hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px tint-underline"
      />

      <div
        className={`relative max-w-6xl mx-auto px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 ${
          motif && !stack
            ? "grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            : ""
        }`}
      >
        <div className={motif && stack ? "text-center max-w-3xl mx-auto" : ""}>
          {eyebrow && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border bg-fg/[0.03]"
              style={{ borderColor: "var(--tint-28)" }}
              data-reveal
            >
              <span
                className="h-1.5 w-1.5 rounded-full pulse-soft"
                style={{ background: "var(--tint)" }}
              />
              <span className="text-[11px] uppercase tracking-[0.22em] text-fg/75">
                {eyebrow}
              </span>
            </div>
          )}

          <h1
            className="text-4xl sm:text-5xl md:text-[3.4rem] font-semibold text-text tracking-tight leading-[1.05]"
            data-reveal
            data-delay="1"
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl"
              data-reveal
              data-delay="2"
            >
              {subtitle}
            </p>
          )}

          {ctas.length > 0 && (
            <div
              className="mt-10 flex flex-wrap gap-3"
              data-reveal
              data-delay="3"
            >
              {ctas.map((cta) =>
                cta.external ? (
                  <a
                    key={cta.href}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic="8"
                    className={
                      cta.variant === "outline"
                        ? "inline-flex items-center gap-2 px-7 py-3.5 text-base font-medium rounded-full border border-fg/15 text-text hover:bg-fg/5 transition-colors"
                        : "inline-flex items-center gap-2 px-7 py-3.5 text-base font-medium rounded-full bg-accent text-white hover:bg-accent2 transition-colors"
                    }
                  >
                    {cta.label}
                    <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span key={cta.href} data-magnetic="8" className="inline-flex">
                    <Button href={cta.href} variant={cta.variant ?? "primary"} size="lg">
                      {cta.label}
                    </Button>
                  </span>
                ),
              )}
            </div>
          )}
        </div>

        {motif && !stack && (
          <div className="relative" data-reveal data-delay="2">
            {motif}
          </div>
        )}

        {motif && stack && (
          <div className="relative mt-12" data-reveal data-delay="3">
            {motif}
          </div>
        )}
      </div>
    </section>
  );
}
