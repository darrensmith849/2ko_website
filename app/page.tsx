import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import ProofBlock from "@/components/sections/ProofBlock";
import Stepper from "@/components/sections/Stepper";
import CTABand from "@/components/sections/CTABand";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "2KO — Operational Excellence & AI Systems",
  description:
    "2KO makes operational improvement permanent through Lean Six Sigma mastery and AI-powered management systems. 200+ blue-chip clients. Since 1998.",
};

const proofMetrics = [
  { value: "200+", label: "Blue-chip clients", sublabel: "across Africa and beyond" },
  { value: "1998", label: "Founded", sublabel: "25+ years in practice" },
  { value: "30k+", label: "Professionals trained", sublabel: "Yellow to Black Belt" },
  { value: "9.6", label: "Avg satisfaction score", sublabel: "out of 10" },
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

const clientLogos = [
  { name: "Standard Bank", file: "standard-bank.svg" },
  { name: "Sappi", file: "sappi.svg" },
  { name: "DHL", file: "dhl.svg" },
  { name: "Toyota", file: "toyota.svg" },
  { name: "SARS", file: "sars.svg" },
  { name: "Transnet", file: "transnet.svg" },
  { name: "Nedbank", file: "nedbank.svg" },
  { name: "Anglo American", file: "anglo-american.svg" },
  { name: "John Deere", file: "john-deere.svg" },
  { name: "Chevron", file: "chevron.svg" },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        badge="Since 1998"
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
          Trusted by organisations including
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-40 hover:opacity-70 transition-opacity"
            >
              <Image
                src={`/logos/${logo.file}`}
                alt={logo.name}
                width={120}
                height={32}
                className="h-8 w-auto"
              />
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
