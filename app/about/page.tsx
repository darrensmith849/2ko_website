import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import ProcessPipeline from "@/components/motifs/ProcessPipeline";
import CTABand from "@/components/sections/CTABand";
import Badge from "@/components/ui/Badge";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "Learn how 2KO approaches operational excellence, systems design, and long-term improvement sustainability.",
  "/about"
);

const entities = [
  {
    name: "2KO Africa",
    role: "Training & Improvement Delivery",
    description:
      "The primary delivery vehicle for Lean Six Sigma belt programmes and live improvement projects across sub-Saharan Africa.",
    href: "/training",
  },
  {
    name: "Six Sigma South Africa",
    role: "Accreditation & CI Consulting",
    description:
      "A recognised provider of Six Sigma accreditation and certification in Africa, backed by international quality standards including the CSSC.",
    href: "/accreditation",
  },
  {
    name: "2KO AI Systems",
    role: "AI Systems & Technology",
    description:
      "The technology capability of the group, building the AI-powered management systems that embed operational standards into daily workflows.",
    href: "/services/ai-systems",
  },
];

const values = [
  {
    title: "Results, not reports",
    description:
      "Every engagement is measured by outcomes validated by your finance team — not slides, not satisfaction surveys. If it didn't move the number, it didn't work.",
  },
  {
    title: "Permanence over performance",
    description:
      "A spectacular six-month result that fades is worth less than a modest improvement that holds for five years. We design for the second outcome.",
  },
  {
    title: "Honest scope",
    description:
      "We will tell you if we're not the right fit for your problem. We'd rather lose a short engagement than build a relationship on misaligned expectations.",
  },
  {
    title: "Method over magic",
    description:
      "Our results come from rigorous application of proven methodology, not from being uniquely clever. The tools work. The discipline is applying them consistently.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About 2KO"
        title="Built on process. Powered by systems."
        subtitle="2KO helps organisations build Lean Six Sigma capability and reinforce new operating standards with practical management systems."
        ctas={[
          { label: "Work with us", href: "/contact" },
          { label: "See our results", href: "/case-studies", variant: "outline" },
        ]}
        motif={<ProcessPipeline className="w-full max-w-lg mx-auto" />}
      />

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-6">
              Our story
            </h2>
            <div className="flex flex-col gap-5 text-muted text-lg leading-relaxed">
              <p>
                2KO was founded on a simple observation: organisations invest in improvement
                programmes, get real results, and then watch those results erode as the new
                behaviours fail to become default operating procedure.
              </p>
              <p>
                We set out to solve the sustainability problem — not by training harder or
                longer, but by designing management systems that make it structurally easier
                to maintain the new standard than to drift back to the old one.
              </p>
              <p>
                That focus shapes everything we do: how we design
                programmes, how we measure outcomes, and how we use AI to give our clients&apos;
                management teams the visibility they need to lead proactively rather than
                reactively.
              </p>
            </div>
          </div>
          <div className="relative h-72 sm:h-80 lg:h-full min-h-[20rem] rounded-3xl overflow-hidden border border-border bg-surface p-6 flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-1">
              Improvement curves
            </p>
            <h3 className="text-text font-semibold tracking-tight mb-5">
              Why we design for permanence
            </h3>
            <svg viewBox="0 0 320 200" className="w-full flex-1" role="img" aria-label="Sustained vs faded improvement comparison">
              <defs>
                <linearGradient id="about-good" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent, #16a34a)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--color-accent, #16a34a)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="about-bad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              {/* Baseline */}
              <line x1="20" y1="160" x2="300" y2="160" stroke="rgba(255,255,255,0.18)" strokeDasharray="3 5" />
              <text x="20" y="178" fill="rgba(255,255,255,0.45)" fontFamily="var(--font-geist-mono, monospace)" fontSize="9" letterSpacing="0.12em">BASELINE</text>
              {/* Faded improvement — rises then falls */}
              <path d="M 20 160 Q 90 100 140 70 T 220 80 T 300 150"
                    fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"
                    strokeDasharray="4 3" />
              <path d="M 20 160 Q 90 100 140 70 T 220 80 T 300 150 L 300 160 L 20 160 Z"
                    fill="url(#about-bad)" opacity="0.5" />
              <text x="246" y="142" fill="rgba(255,255,255,0.65)"
                    fontFamily="var(--font-geist-sans, sans-serif)" fontSize="10" fontWeight="600">Typical</text>
              {/* Sustained improvement — rises and HOLDS */}
              <path d="M 20 160 Q 80 110 130 70 T 220 50 L 300 50"
                    fill="none" stroke="var(--color-accent, #16a34a)" strokeWidth="2.6"
                    strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 20 160 Q 80 110 130 70 T 220 50 L 300 50 L 300 160 L 20 160 Z"
                    fill="url(#about-good)" />
              <circle cx="300" cy="50" r="5" fill="var(--color-accent, #16a34a)" />
              <circle cx="300" cy="50" r="11" fill="var(--color-accent, #16a34a)" opacity="0.22" className="pulse-soft" style={{ transformOrigin: "300px 50px" }} />
              <text x="246" y="42" fill="var(--color-accent, #16a34a)"
                    fontFamily="var(--font-geist-sans, sans-serif)" fontSize="10" fontWeight="700">2KO model</text>
              {/* X-axis labels */}
              <text x="20" y="195" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-mono, monospace)" fontSize="8" letterSpacing="0.12em">M0</text>
              <text x="155" y="195" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-mono, monospace)" fontSize="8" letterSpacing="0.12em">M12</text>
              <text x="295" y="195" textAnchor="end" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-mono, monospace)" fontSize="8" letterSpacing="0.12em">M36</text>
            </svg>
            <p className="text-muted text-xs leading-relaxed mt-4">
              Most programmes peak in year one, then erode. We design the management
              system at the same time as the improvement — so the new standard becomes
              the easier path to maintain.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-semibold text-text tracking-tight mb-12 text-center">
          How we think
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-surface border border-border p-7">
              <h3 className="text-text font-semibold mb-3">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Entities */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-semibold text-text tracking-tight mb-4 text-center">
          The 2KO group
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Three entities. One mission: making operational improvement permanent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entities.map((entity) => (
            <div key={entity.name} className="rounded-2xl bg-surface border border-border p-7 flex flex-col gap-4">
              <div>
                <h3 className="text-text font-semibold text-lg">{entity.name}</h3>
                <Badge variant="accent" className="mt-2">{entity.role}</Badge>
              </div>
              <p className="text-muted text-sm leading-relaxed flex-1">{entity.description}</p>
              <Link
                href={entity.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Proof numbers */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { value: "Cross-Industry", label: "Operational contexts served" },
            { value: "Leadership-Aligned", label: "Executive-sponsored delivery" },
            { value: "People + Systems", label: "Integrated transformation model" },
            { value: "Sustainability-First", label: "Designed to prevent regression" },
          ].map((m) => (
            <div key={m.label} className="bg-surface px-8 py-10 text-center">
              <div className="text-4xl font-semibold text-accent">{m.value}</div>
              <div className="text-sm text-muted mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        headline="Ready to work with us?"
        subheadline="Start with a 30-minute conversation about your operational challenge."
        primaryCTA={{ label: "Get in touch", href: "/contact" }}
        secondaryCTA={{ label: "Read our FAQ", href: "/faq" }}
      />
    </main>
  );
}
