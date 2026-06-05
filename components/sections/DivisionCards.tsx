import Link from "next/link";
import DMAICLoop from "@/components/motifs/DMAICLoop";
import ConsoleMesh from "@/components/motifs/ConsoleMesh";
import ChartGrow from "@/components/motifs/ChartGrow";
import type { ReactNode } from "react";

type Division = {
  tint: "six-sigma" | "systems" | "sigmafy";
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  ctaLabel: string;
  motif: ReactNode;
};

const DIVISIONS: Division[] = [
  {
    tint: "six-sigma",
    eyebrow: "Training & Accreditation",
    title: "Six Sigma South Africa",
    description:
      "Africa's accredited Six Sigma and Lean training body. White through Black Belt, delivered with live projects that pay for the programme.",
    bullets: [
      "CSSC-accredited certification",
      "Belt cohorts with real projects",
      "On-site delivery across six cities",
    ],
    href: "/six-sigma",
    ctaLabel: "Explore training",
    motif: <DMAICLoop className="w-full h-auto" />,
  },
  {
    tint: "systems",
    eyebrow: "Custom Software & AI",
    title: "2KO Systems",
    description:
      "Bespoke operational software. Workflow automation, dashboards, approvals, and AI copilots — built for operations teams, not generic SaaS.",
    bullets: [
      "Workflow automation & approvals",
      "Live operational dashboards",
      "SOP & knowledge copilots",
    ],
    href: "/systems",
    ctaLabel: "Build with us",
    motif: <ConsoleMesh className="w-full h-auto" />,
  },
  {
    tint: "sigmafy",
    eyebrow: "Six Sigma SaaS Platform",
    title: "Sigmafy",
    description:
      "The platform that runs improvement projects end-to-end. DMAIC tooling, SPC charts, training cohorts, certificates — all in one workspace.",
    bullets: [
      "DMAIC charters & toolkits",
      "Control charts & process capability",
      "Cohort management & certificates",
    ],
    href: "/sigmafy",
    ctaLabel: "See the product",
    motif: <ChartGrow className="w-full h-auto" />,
  },
];

export default function DivisionCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
      <div className="text-center mb-14" data-reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg/45 mb-4">
          Three disciplines, one group
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight max-w-2xl mx-auto">
          We train it, we systemise it, we run the platform that holds it together.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {DIVISIONS.map((d, i) => (
          <Link
            key={d.title}
            href={d.href}
            data-tint={d.tint}
            data-reveal
            data-delay={i + 1}
            className="group relative card-shimmer rounded-2xl border border-border bg-surface p-6 flex flex-col transition-[box-shadow,transform] hover:border-tint-28"
            data-card-shadow
            style={{ borderColor: undefined }}
          >
            {/* Motif preview — locked to dark scope so the bespoke
                dashboards stay on their signature dark canvas in
                both light and dark site themes. */}
            <div
              data-theme="dark"
              className="relative aspect-[5/4] mb-5 rounded-xl overflow-hidden bg-[#0a0c12] border border-white/[0.08]"
            >
              <div className="absolute inset-0 tint-radial-soft" />
              <div className="relative h-full w-full flex items-center justify-center p-4">
                {d.motif}
              </div>
            </div>

            <p
              className="text-[11px] uppercase tracking-[0.22em] text-tint mb-2"
              style={{ color: "var(--tint)" }}
            >
              {d.eyebrow}
            </p>
            <h3 className="text-text font-semibold text-xl tracking-tight">
              {d.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
              {d.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {d.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13px] text-muted">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1 w-1 rounded-full"
                    style={{ background: "var(--tint)" }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--tint)" }}>
              {d.ctaLabel}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
