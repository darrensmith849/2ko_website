import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import CTABand from "@/components/sections/CTABand";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from 2KO engagements across banking, manufacturing, logistics, healthcare, and more. Structured by problem, approach, and outcome.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <Hero
        badge="Case Studies"
        headline="Results on record."
        subheadline="A selection of outcomes from 2KO engagements across industries. Every result was validated by the client's own finance or operations team."
        ctas={[
          { label: "Start your own engagement", href: "/contact", variant: "primary" },
        ]}
      />

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              industry={cs.industry}
              company={cs.company}
              problem={cs.problem}
              approach={cs.approach}
              result={cs.result}
            />
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="rounded-xl bg-surface border border-border p-6 text-center">
          <p className="text-muted text-sm leading-relaxed max-w-2xl mx-auto">
            Client identities are anonymised unless written consent to name them has been given.
            Full case-study documentation including validated financial impact reports is available
            on request during an engagement scoping conversation.
          </p>
        </div>
      </section>

      <CTABand
        headline="Want results like these in your organisation?"
        subheadline="Book a 30-minute diagnostic call to explore what&apos;s possible."
        primaryCTA={{ label: "Start the conversation", href: "/contact" }}
        secondaryCTA={{ label: "Explore our services", href: "/services" }}
      />
    </main>
  );
}
