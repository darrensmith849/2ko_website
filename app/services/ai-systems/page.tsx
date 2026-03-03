import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stepper from "@/components/sections/Stepper";
import CTABand from "@/components/sections/CTABand";
import { getService } from "@/lib/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "AI Systems",
  "Custom AI-powered management systems that monitor your operational standards, surface deviations in real time, and make it harder to slip backwards.",
  "/services/ai-systems"
);

const capabilities = [
  {
    title: "Real-time monitoring",
    description:
      "We connect to your existing data sources — ERP, MES, HRIS, IoT sensors — and build a monitoring layer that surfaces the metrics that matter most to your operation.",
  },
  {
    title: "Anomaly detection",
    description:
      "Statistical models identify deviations from your defined operational standards and send targeted alerts to the people who can act on them.",
  },
  {
    title: "Automated reporting",
    description:
      "Management reporting that used to take hours each week is generated automatically, freeing your team to focus on the issues rather than assembling the data.",
  },
  {
    title: "Explainable outputs",
    description:
      "Every alert, flag, and recommendation includes the data that drove it. No black-box outputs. Your managers understand why the system is flagging something before they act.",
  },
];

export default function AISystemsPage() {
  const service = getService("ai-systems");
  if (!service) return null;

  return (
    <main>
      <Hero
        badge="AI Systems"
        headline="Systems that enforce the standard."
        subheadline="We build AI-powered management layers that monitor your operational standards, surface deviations in real time, and make it structurally harder to regress."
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
              Training raises the bar. Systems keep people at it.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              The problem with relying on people to self-enforce standards is that people
              are busy, distracted, and optimistic about small deviations. Systems aren&apos;t.
              A well-designed AI management layer provides the consistent attention that
              no human manager can sustain.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              We build these systems around your specific operational standards — not
              generic dashboards, but tools designed around the decisions your managers
              actually need to make.
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

      {/* Capabilities */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-semibold text-text tracking-tight mb-4 text-center">
          What the system does
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Every system is custom-built. These are the capabilities we assemble for each client.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="rounded-2xl bg-surface border border-border p-7">
              <h3 className="text-text font-semibold mb-3">{cap.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech approach */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-text tracking-tight mb-8 text-center">
            Our technical approach
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Data security first",
                body: "We design for data minimisation and can deploy entirely within your infrastructure — on-premise or private cloud. Your operational data never leaves your environment unless you choose otherwise.",
              },
              {
                title: "Integration, not replacement",
                body: "We build on top of your existing systems, not instead of them. The monitoring layer integrates with what you already have — SAP, Oracle, custom MES platforms, spreadsheet exports — wherever your data lives.",
              },
              {
                title: "Built for your people",
                body: "Every interface is designed for the person who will use it — not the data scientist who built it. If your floor managers won't look at it, it won't change anything.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-surface border border-border p-6">
                <h3 className="text-text font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
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
          headline="Implementation process"
          subheadline="From audit to full deployment — a structured five-phase approach."
          steps={service.process.map((p, i) => ({
            number: String(i + 1).padStart(2, "0"),
            title: p.title,
            description: p.description,
          }))}
        />
      )}

      <CTABand
        headline="Ready to make your standards self-enforcing?"
        subheadline="Let&apos;s talk about what your data looks like and what the system could do."
        primaryCTA={{ label: "Book a diagnostic call", href: "/contact" }}
        secondaryCTA={{ label: "See the training side", href: "/services/operational-excellence" }}
      />
    </main>
  );
}
