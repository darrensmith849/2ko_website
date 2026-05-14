import Link from "next/link";

type CardProps = {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  variant: "primary" | "secondary";
};

function PathCard({ kicker, title, desc, href, cta, variant }: CardProps) {
  const ctaClass =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(10,53,23,0.6)] transition-all duration-200 hover:bg-white hover:text-[var(--accent-deep)] active:scale-[0.98]"
      : "inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white/20";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-6 backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/[0.09]">
      {/* Hover sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <p
        className="text-[11px] uppercase text-white/55"
        style={{ letterSpacing: "var(--tracking-eyebrow)" }}
      >
        {kicker}
      </p>
      <p className="mt-2 text-xl font-semibold text-white" style={{ letterSpacing: "var(--tracking-tight)" }}>
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>

      <div className="mt-5 flex items-center gap-3">
        <Link href={href} className={ctaClass}>
          {cta} →
        </Link>
        <span className="text-xs text-white/45">No obligation</span>
      </div>
    </div>
  );
}

export default function PathChooser() {
  return (
    <section className="mt-8">
      <p
        className="mb-3 text-[11px] uppercase text-white/55"
        style={{ letterSpacing: "var(--tracking-eyebrow)" }}
      >
        Choose your path
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <PathCard
          kicker="Six Sigma"
          title="Train your team"
          desc="Belt programmes that build real capability through live projects — not just theory."
          href="/training"
          cta="Explore training"
          variant="primary"
        />
        <PathCard
          kicker="AI Systems"
          title="Build systems that lock in gains"
          desc="We standardise first, then build AI-powered management layers that keep people at the new bar."
          href="/services/ai-systems"
          cta="Build systems"
          variant="secondary"
        />
      </div>

      <div className="mt-4">
        <Link
          href="/contact"
          className="text-sm text-white/65 underline decoration-white/20 underline-offset-4 hover:text-white transition-colors"
        >
          Not sure which one? Start the conversation →
        </Link>
      </div>
    </section>
  );
}
