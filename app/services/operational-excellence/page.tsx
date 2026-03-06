import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stepper from "@/components/sections/Stepper";
import CTABand from "@/components/sections/CTABand";
import Badge from "@/components/ui/Badge";
import { getService } from "@/lib/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Operational Excellence",
  "Lean Six Sigma training and live improvement projects that build real capability — and management systems that keep the gains from slipping back.",
  "/services/operational-excellence"
);

const beltLevels = [
  {
    level: "Yellow Belt",
    duration: "2 days",
    description:
      "Foundation-level awareness training for team members and managers. Covers the DMAIC framework, waste identification, and how to participate effectively in improvement projects.",
  },
  {
    level: "Green Belt",
    duration: "5–6 days",
    description:
      "Practitioner-level certification. Participants lead their own improvement project during the programme. Covers full DMAIC, statistical tools, and root-cause analysis techniques.",
  },
  {
    level: "Black Belt",
    duration: "10+ days",
    description:
      "Advanced certification for operational leaders who will drive and coach multiple projects. Covers advanced statistics, programme management, and organisational change.",
  },
];

export default function OperationalExcellencePage() {
  const service = getService("operational-excellence");
  if (!service) return null;

  return (
    <main>
      <Hero
        badge="Operational Excellence"
        headline="Six Sigma, applied."
        subheadline="We train your people to a certified standard, run live improvement projects against your real problems, and then build the management system that makes the new standard the default."
        imageKey="operationalExcellenceHero"
        imageAlt="Industrial operations team reviewing production quality performance"
        imagePosition="center 38%"
        ctas={[
          { label: "Talk to us", href: "/contact", variant: "primary" },
          { label: "See results", href: "/case-studies", variant: "outline" },
        ]}
      />

      {/* What it is */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-4">
              Why most improvement programmes fail
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              The training is good. The projects deliver results. Then, over the next
              12–18 months, the gains quietly erode. The new behaviours never became
              habitual. The standards were never enforced. The same problems come back.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              2KO works differently. We design for permanence from day one — treating
              the management system, not the individual, as the carrier of the improvement.
            </p>
          </div>
          <div className="rounded-2xl bg-surface border border-border p-8">
            <h3 className="text-text font-semibold text-lg mb-4">What&apos;s included</h3>
            <ul className="flex flex-col gap-3">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Belt levels */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-semibold text-text tracking-tight mb-4 text-center">
          Belt programme structure
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          All programmes are delivered alongside live improvement projects. Theory is applied immediately.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beltLevels.map((belt) => (
            <div key={belt.level} className="rounded-2xl bg-surface border border-border p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-text font-semibold">{belt.level}</h3>
                <Badge variant="accent">{belt.duration}</Badge>
              </div>
              <p className="text-muted text-sm leading-relaxed">{belt.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-text tracking-tight mb-8 text-center">
            Who it&apos;s for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.forWho.map((item, i) => (
              <div key={i} className="rounded-xl bg-surface border border-border p-5 flex items-start gap-3">
                <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                <p className="text-muted text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {service.process && (
        <Stepper
          headline="Our engagement process"
          subheadline="Five phases from initial diagnostic to sustained operational standard."
          steps={service.process.map((p, i) => ({
            number: String(i + 1).padStart(2, "0"),
            title: p.title,
            description: p.description,
          }))}
        />
      )}

      <CTABand
        headline="Ready to build lasting capability?"
        subheadline="Start with a diagnostic conversation about your biggest operational challenge."
        primaryCTA={{ label: "Book a diagnostic call", href: "/contact" }}
        secondaryCTA={{ label: "View training programmes", href: "/training" }}
      />
    </main>
  );
}
