import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stepper from "@/components/sections/Stepper";
import CTABand from "@/components/sections/CTABand";
import Badge from "@/components/ui/Badge";
import CursorGlowSection from "@/components/ui/CursorGlowSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Continuous Improvement Consulting",
  "CI advisory, deployment support, and coaching from practitioners who have led real improvement programmes. Diagnostic to governance in weeks, not months.",
  "/consulting"
);

const engagementFormats = [
  {
    title: "Rapid diagnostic",
    duration: "2 weeks",
    description:
      "We map your current state, quantify the gap, and deliver a prioritised improvement roadmap with estimated impact and resource requirements.",
  },
  {
    title: "Deployment programme",
    duration: "6–12 weeks",
    description:
      "A structured improvement programme: belt training, live project execution, management-system design, and KPI embedding. Designed to produce results during the engagement, not after.",
  },
  {
    title: "Coaching retainer",
    duration: "Ongoing",
    description:
      "Ongoing support for your internal CI team: project reviews, belt coaching, champion development, and governance check-ins. Lighter-touch but continuous.",
  },
];

const consultingProcess = [
  {
    number: "01",
    title: "Assess",
    description:
      "We review your current operational performance, existing CI maturity, and data infrastructure to identify where the biggest gains are available.",
  },
  {
    number: "02",
    title: "Prioritise",
    description:
      "We work with your leadership to select the projects and improvement levers that will deliver the highest impact relative to effort and risk.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We embed alongside your teams to run the improvement projects — training people on the methodology while delivering measurable results.",
  },
  {
    number: "04",
    title: "Standardise",
    description:
      "New standards are written into SOPs, management routines, and operating procedures. The improvement becomes the default, not an exception.",
  },
  {
    number: "05",
    title: "Govern",
    description:
      "We design the governance layer — review cadences, escalation triggers, and AI monitoring — that ensures standards hold after we step back.",
  },
];

const capabilities = [
  "Process mapping and value-stream analysis",
  "Lean waste elimination and flow optimisation",
  "Statistical process control and capability analysis",
  "Root-cause analysis and corrective action design",
  "Management-system design and SOP development",
  "KPI framework and measurement system design",
  "Change management and stakeholder alignment",
  "Internal CI team coaching and champion development",
];

export default function ConsultingPage() {
  return (
    <main>
      <CursorGlowSection>
        <Hero
          badge="CI Consulting"
          headline="Improvement that outlasts the consultant."
          subheadline="We deploy continuous improvement programmes designed to produce results during the engagement and sustain them after we leave. No dependency on us — that's the point."
          imageKey="consultingHero"
          imageAlt="Consulting team working with client on operational improvement"
          imagePosition="center 35%"
          ctas={[
            { label: "Book a diagnostic", href: "/contact", variant: "primary" },
            { label: "See results", href: "/case-studies", variant: "outline" },
          ]}
        />
      </CursorGlowSection>

      {/* What we do */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-4">
              We don&apos;t just advise. We deploy.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Most consulting produces recommendations. We produce results. Our consultants
              are practitioners who have led real improvement programmes in real operating
              environments — not analysts working from a template.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              We embed alongside your teams, train your people on the methodology while
              running live projects, and build the management systems that make the new
              standard the default operating procedure.
            </p>
          </div>
          <div className="rounded-2xl bg-surface border border-border p-8">
            <h3 className="text-text font-semibold text-lg mb-4">Advisory capabilities</h3>
            <ul className="flex flex-col gap-3">
              {capabilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">&#x2713;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement formats */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text tracking-tight">
            Engagement formats
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Start with a diagnostic. Scale to a full programme. Stay connected via a retainer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementFormats.map((ef) => (
            <div key={ef.title} className="rounded-2xl bg-surface border border-border p-7 flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-text font-semibold">{ef.title}</h3>
                  <Badge variant="accent">{ef.duration}</Badge>
                </div>
                <p className="text-muted text-sm leading-relaxed">{ef.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting process */}
      <Stepper
        headline="How a consulting engagement works"
        subheadline="From initial assessment to sustainable governance — a structured approach designed for permanence."
        steps={consultingProcess}
      />

      {/* Connection to training + AI */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-text tracking-tight mb-6">
            Consulting + Training + Systems
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-4">
            Our consulting work connects directly to our training programmes and AI systems.
            We train your people on the methodology while deploying it. Then we build the
            management systems that make the new standard self-enforcing.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            The result is improvement that does not depend on the consultant staying in the building.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/training"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
            >
              View training programmes &rarr;
            </a>
            <a
              href="/services/ai-systems"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
            >
              Learn about AI systems &rarr;
            </a>
          </div>
        </div>
      </section>

      <CTABand
        headline="Ready to move from diagnosis to results?"
        subheadline="Book a 30-minute diagnostic conversation. No charge, no obligation."
        primaryCTA={{ label: "Book a diagnostic", href: "/contact" }}
        secondaryCTA={{ label: "View case studies", href: "/case-studies" }}
      />
    </main>
  );
}
