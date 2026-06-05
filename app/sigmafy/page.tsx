import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ChartGrow from "@/components/motifs/ChartGrow";
import CTABand from "@/components/sections/CTABand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Sigmafy — The Six Sigma & Lean SaaS platform",
  "The 2KO Group's purpose-built platform for running Lean Six Sigma projects end-to-end: DMAIC tooling, statistical process control, training cohorts, and AI evaluation in one workspace.",
  "/sigmafy",
);

const PILLARS = [
  {
    eyebrow: "DMAIC tooling",
    title: "Every charter, in one place",
    body: "Charter, SIPOC, process map, 5-Whys, fishbone — the toolkit a project needs, threaded together with audit trail.",
  },
  {
    eyebrow: "Statistical process control",
    title: "Charts that hold up",
    body: "I-MR, X-bar/R, P, NP, C, U charts. Cp, Cpk, Pp, Ppk. Real statistical rigour, not Excel ceremony.",
  },
  {
    eyebrow: "Training & certification",
    title: "Cohorts, exams, certificates",
    body: "Run belt cohorts, evaluate solutions with AI plus trainer override, issue branded certificates. Same workspace.",
  },
];

export default function SigmafyPage() {
  return (
    <main>
      <PageHero
        eyebrow="SaaS Platform"
        title="The workspace that runs Six Sigma."
        subtitle="DMAIC projects, control charts, training cohorts, AI evaluation, certificates — all in the platform the 2KO Group built because nothing else did the job."
        ctas={[
          { label: "Visit Sigmafy", href: "https://sigmafynew.vercel.app", external: true },
          { label: "Talk to the group", href: "/contact", variant: "outline" },
        ]}
        motif={<ChartGrow className="w-full max-w-xl mx-auto" />}
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              data-delay={i + 1}
              className="card-shimmer rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >
              <p
                className="text-[11px] uppercase tracking-[0.22em] mb-3"
                style={{ color: "var(--tint)" }}
              >
                {p.eyebrow}
              </p>
              <h3 className="text-text font-semibold text-xl tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        headline="Run improvement like a product."
        subheadline="Sigmafy is currently in pilot with selected enterprise customers."
        primaryCTA={{ label: "Visit Sigmafy", href: "https://sigmafynew.vercel.app" }}
        secondaryCTA={{ label: "Talk to the group", href: "/contact" }}
      />
    </main>
  );
}
