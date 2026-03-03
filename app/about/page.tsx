import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import Badge from "@/components/ui/Badge";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "2KO has been making operational improvement permanent since 1998. Learn about our story, our methodology, and the entities that make up the 2KO group.",
  "/about"
);

const entities = [
  {
    name: "2KO Africa",
    role: "Training & Improvement Delivery",
    description:
      "The primary delivery vehicle for Lean Six Sigma belt programmes and live improvement projects across sub-Saharan Africa. Over 200 client organisations trained since 1998.",
  },
  {
    name: "SSSA",
    role: "Standards & Accreditation",
    description:
      "The South African Six Sigma Association — the accreditation body that ensures our programmes meet international quality and curriculum standards.",
  },
  {
    name: "Impart",
    role: "AI Systems & Technology",
    description:
      "The technology arm of the group, building the AI-powered management monitoring systems that complement our training engagements and sustain the gains.",
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
      <Hero
        badge="About 2KO"
        headline="Built on process. Powered by systems."
        subheadline="Since 1998, 2KO has trained more than 30,000 professionals and delivered improvement projects across 200+ organisations in South Africa and beyond."
        ctas={[
          { label: "Work with us", href: "/contact", variant: "primary" },
          { label: "See our results", href: "/case-studies", variant: "outline" },
        ]}
      />

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
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
              Over 25 years, that focus has shaped everything we do: how we design
              programmes, how we measure outcomes, and how we use AI to give our clients&apos;
              management teams the visibility they need to lead proactively rather than
              reactively.
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
              <p className="text-muted text-sm leading-relaxed">{entity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof numbers */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { value: "200+", label: "Client organisations" },
            { value: "1998", label: "Year founded" },
            { value: "30k+", label: "Professionals trained" },
            { value: "9.6/10", label: "Average satisfaction" },
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
