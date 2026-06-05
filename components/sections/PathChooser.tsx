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
  const base =
    "group relative overflow-hidden rounded-2xl border bg-fg/[0.03] px-6 py-6 backdrop-blur transition-all duration-200";
  const border = "border-fg/10 hover:border-fg/20";
  const glow =
    variant === "primary"
      ? "shadow-[0_20px_70px_rgba(34,197,94,0.10)]"
      : "shadow-[0_20px_70px_rgba(0,0,0,0.35)]";

  const btn =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500"
      : "inline-flex items-center justify-center rounded-full border border-fg/15 bg-fg/5 px-5 py-3 text-sm font-semibold text-white hover:bg-fg/10";

  return (
    <div className={`${base} ${border} ${glow}`}>
      {/* soft sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fg/10 blur-3xl" />
      </div>

      <div className="text-xs uppercase tracking-[0.24em] text-fg/55">{kicker}</div>
      <div className="mt-2 text-xl font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-fg/65">{desc}</p>

      <div className="mt-5 flex items-center gap-3">
        <Link href={href} className={btn}>
          {cta} →
        </Link>
        <span className="text-xs text-fg/45">No obligation</span>
      </div>
    </div>
  );
}

export default function PathChooser() {
  return (
    <section className="mt-8">
      <div className="mb-3 text-xs uppercase tracking-[0.24em] text-fg/55">
        Choose your path
      </div>

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
          className="text-sm text-fg/65 underline decoration-white/20 underline-offset-4 hover:text-white"
        >
          Not sure which one? Start the conversation →
        </Link>
      </div>
    </section>
  );
}
