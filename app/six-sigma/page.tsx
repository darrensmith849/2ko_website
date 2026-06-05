import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DMAICLoop from "@/components/motifs/DMAICLoop";
import CTABand from "@/components/sections/CTABand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Six Sigma South Africa — Training & Accreditation",
  "The 2KO Group's training and accreditation arm. CSSC-accredited Lean Six Sigma belts, delivered with live improvement projects, across six African cities.",
  "/six-sigma",
);

const PILLARS = [
  {
    eyebrow: "Belt programmes",
    title: "Yellow, Green, Black",
    body: "Cohort-based belt training where every belt culminates in a live project with measurable ROI — never a theoretical pass.",
  },
  {
    eyebrow: "Accreditation",
    title: "CSSC-recognised",
    body: "Certifications recognised internationally, eligible for South African SETA Skills Development Levy claims.",
  },
  {
    eyebrow: "Delivery",
    title: "Six African cities",
    body: "Johannesburg, Cape Town, Pretoria, Nairobi, Lusaka, Dar es Salaam — plus on-site delivery anywhere across the continent.",
  },
];

const NUMBERS = [
  { value: 1000, suffix: "+", label: "Companies trained" },
  { value: 28,   suffix: "",  label: "Years operating" },
  { value: 6,    suffix: "",  label: "Cities of delivery" },
];

export default function SixSigmaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Training & Accreditation"
        title="Six Sigma, taught from scars."
        subtitle="Africa's CSSC-accredited Lean and Six Sigma training body. Our trainers have run the real improvement programmes they teach about — fifteen years of practitioner experience in the room."
        ctas={[
          { label: "Visit Six Sigma SA", href: "https://sixsigmasouthafrica.co.za", external: true },
          { label: "Talk to the group", href: "/contact", variant: "outline" },
        ]}
        motif={<DMAICLoop className="w-full max-w-md mx-auto" />}
      />

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              data-delay={i + 1}
              className="card-shimmer rounded-2xl border border-fg/10 bg-fg/[0.02] p-7"
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

      {/* Stat strip */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {NUMBERS.map((n) => (
            <div key={n.label}>
              <dd
                data-counter
                data-counter-target={n.value}
                data-counter-suffix={n.suffix}
                className="text-4xl font-semibold tracking-tight"
                style={{ color: "var(--tint)" }}
              >
                0
              </dd>
              <dt className="mt-2 text-sm text-muted">{n.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <CTABand
        headline="Train your team to operate at a different bar."
        subheadline="Six Sigma South Africa runs the cohorts. Talk to us about your next intake."
        primaryCTA={{ label: "Visit Six Sigma SA", href: "https://sixsigmasouthafrica.co.za" }}
        secondaryCTA={{ label: "Talk to the group", href: "/contact" }}
      />
    </main>
  );
}
