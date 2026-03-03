import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import ProofBlock from "@/components/sections/ProofBlock";
import Stepper from "@/components/sections/Stepper";
import CTABand from "@/components/sections/CTABand";
import { services } from "@/lib/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "2KO — Operational Excellence & AI Systems",
  "2KO makes operational improvement permanent through Lean Six Sigma mastery and AI-powered management systems for complex organisations.",
  "/"
);

const proofMetrics = [
  { value: "Cross-Sector", label: "Enterprise programmes", sublabel: "banking, industry, logistics, and public services" },
  { value: "Practitioner-Led", label: "Delivery model", sublabel: "consultants who have run live improvement programmes" },
  { value: "System-Embedded", label: "How change sticks", sublabel: "standards embedded in routines, not only training" },
  { value: "Outcome-Focused", label: "How we measure", sublabel: "operational outcomes over presentation metrics" },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    description: "We quantify the gap between your current state and the standard you need to operate at.",
  },
  {
    number: "02",
    title: "Design",
    description: "We co-design the training programme and project selection with your leadership team.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Belt cohorts run alongside live improvement projects so learning is applied immediately.",
  },
  {
    number: "04",
    title: "Embed",
    description: "New standards are written into SOPs, KPIs, and management routines — not just slide decks.",
  },
  {
    number: "05",
    title: "Sustain",
    description: "An AI management layer monitors adherence and flags drift before it compounds into regression.",
  },
];

const clientSectors = [
  "Tier-1 Bank",
  "Global Insurer",
  "National Logistics Carrier",
  "Industrial Manufacturer",
  "Public Infrastructure Operator",
  "Energy Producer",
  "Healthcare Network",
  "Large-Scale Retailer",
  "Telecommunications Provider",
  "Government Department",
];

export default function HomePage() {
  return (
    <main>
      <Hero
        badge="Operational Excellence + AI"
        headline="We make operational improvement permanent."
        subheadline="2KO trains your people in Lean Six Sigma and builds the AI-powered management systems that stop your gains from slipping back."
        ctas={[
          { label: "Start the conversation", href: "/contact", variant: "primary" },
          { label: "See case studies", href: "/case-studies", variant: "outline" },
        ]}
      />

      {/* Client logo strip */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-center text-muted2 text-xs font-semibold uppercase tracking-widest mb-8">
          Sectors we support
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {clientSectors.map((sector) => (
            <div
              key={sector}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* Dual-pillar cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
            Two disciplines. One outcome.
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Lean Six Sigma builds the capability. AI systems lock in the standard. Together, they make improvement that lasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              bullets={service.bullets.slice(0, 4)}
              href={`/services/${service.slug}`}
              accent={i === 0}
            />
          ))}
        </div>
      </section>

      <ProofBlock metrics={proofMetrics} />

      <Stepper
        headline="How we work"
        subheadline="A five-phase engagement model designed to build capability and then protect it."
        steps={processSteps}
      />

      <CTABand
        headline="Ready to make improvement stick?"
        subheadline="Start with a 30-minute diagnostic conversation. No charge, no obligation."
        primaryCTA={{ label: "Start the conversation", href: "/contact" }}
        secondaryCTA={{ label: "Explore our services", href: "/services" }}
      />
    </main>
  );
}
