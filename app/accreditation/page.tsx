import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Accreditation & Standards",
  "Internationally recognised Six Sigma accreditation backed by the Council for Six Sigma Certification (CSSC) and structured for SETA skills development levy claims.",
  "/accreditation"
);

const standards = [
  {
    title: "Council for Six Sigma Certification (CSSC)",
    description:
      "Our Lean Six Sigma programmes are accredited through the CSSC — an internationally recognised certification body that sets the standard for Six Sigma education and professional credentials globally.",
  },
  {
    title: "SETA-structured programmes",
    description:
      "Our courses are structured to enable companies to claim training costs from their Skills Development Levies through the relevant SETA. This makes investment in Six Sigma capability recoverable for qualifying organisations.",
  },
  {
    title: "Internationally aligned curriculum",
    description:
      "Our belt programmes follow the internationally recognised DMAIC methodology and align with global quality frameworks. Graduates receive credentials that carry weight with employers across industries and geographies.",
  },
];

const recognitionFeatures = [
  {
    title: "Recognition of Prior Learning (RPL)",
    description:
      "For experienced practitioners who have already applied Six Sigma methodology in the field, we offer RPL pathways to formal certification. Your existing competence is assessed against our standards — you do not have to start from scratch.",
  },
  {
    title: "Evidence-led certification",
    description:
      "Certification is earned through demonstrated application, not just exam performance. Belt candidates complete live improvement projects and submit evidence of measurable outcomes as part of their assessment.",
  },
  {
    title: "Benchmarking & standards advisory",
    description:
      "Beyond certification, we help organisations benchmark their CI maturity against industry standards and design governance frameworks that align with ISO and regulatory requirements.",
  },
];

export default function AccreditationPage() {
  return (
    <main>
      <Hero
        badge="Accreditation & Standards"
        headline="Credentials that carry weight."
        subheadline="Our Six Sigma programmes are backed by international accreditation, structured for SETA levy claims, and designed so your certification is recognised wherever your career takes you."
        imageKey="accreditationHero"
        imageAlt="Professional standards and accreditation documentation"
        imagePosition="center 40%"
        ctas={[
          { label: "View courses", href: "/training", variant: "primary" },
          { label: "Ask about RPL", href: "/contact", variant: "outline" },
        ]}
      />

      {/* Standards & accreditation */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
            Accreditation & certification standards
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            We hold ourselves to international standards because your certification should open doors, not raise questions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((s) => (
            <div key={s.title} className="rounded-2xl bg-surface border border-border p-7 flex flex-col gap-3">
              <h3 className="text-text font-semibold">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are in the space */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-text tracking-tight mb-6 text-center">
            Our position in Africa
          </h2>
          <div className="flex flex-col gap-5 text-muted text-lg leading-relaxed">
            <p>
              The 2KO group — through Six Sigma South Africa and 2KO Africa — has established
              itself as a leading authority for Six Sigma accreditation and certification
              on the African continent.
            </p>
            <p>
              We set the curriculum standards for our programmes, maintain alignment with
              international quality frameworks, and provide the governance layer that ensures
              our graduates meet a consistent, externally validated benchmark.
            </p>
            <p>
              Our commitment is straightforward: certification from 2KO should be a credential
              that employers, partners, and regulatory bodies trust without reservation.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition features */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text tracking-tight">
            Recognition pathways
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Multiple routes to certification — whether you are starting fresh or formalising years of experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recognitionFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl bg-surface border border-border p-7 flex flex-col gap-3">
              <h3 className="text-text font-semibold">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Belt pathway summary */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-text tracking-tight mb-6">
            The certification pathway
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Each belt level builds on the last. Start with a free White Belt and progress through to Black Belt as your capability and impact grow.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { belt: "White Belt", note: "Free" },
              { belt: "Yellow Belt", note: "2 days" },
              { belt: "Green Belt", note: "5 days" },
              { belt: "Black Belt", note: "10+ days" },
            ].map((b, i) => (
              <div key={b.belt} className="flex items-center gap-2">
                <div className="rounded-full bg-accent/10 border border-accent/20 px-4 py-2">
                  <span className="text-text text-sm font-medium">{b.belt}</span>
                  <span className="text-muted2 text-xs ml-2">{b.note}</span>
                </div>
                {i < 3 && (
                  <span className="text-muted2 hidden sm:inline">&rarr;</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/training"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
            >
              View full course catalogue &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        headline="Questions about accreditation or RPL?"
        subheadline="Get in touch and we'll walk you through the certification pathway that fits your experience."
        primaryCTA={{ label: "Contact us", href: "/contact" }}
        secondaryCTA={{ label: "View training programmes", href: "/training" }}
      />
    </main>
  );
}
