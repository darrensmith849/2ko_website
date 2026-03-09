import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import InteractiveHeroShell from "@/components/hero/InteractiveHeroShell";
import PathChooser from "@/components/sections/PathChooser";
import PartnerLogos from "@/components/sections/PartnerLogos";
import PartnerEngines from "@/components/sections/PartnerEngines";
import ProofBlock from "@/components/sections/ProofBlock";
import Stepper from "@/components/sections/Stepper";
import CTABand from "@/components/sections/CTABand";
import Badge from "@/components/ui/Badge";
import { beltCourses, deliveryModes } from "@/lib/data/training";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "2KO — Six Sigma Training, CI Consulting & AI Systems",
  "2KO makes operational improvement permanent through Lean Six Sigma training, continuous improvement consulting, and AI-powered management systems.",
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

const systemCategories = [
  {
    title: "Workflow automation",
    description: "Standardised processes embedded into digital workflows that enforce compliance by design.",
  },
  {
    title: "Dashboard & pack automation",
    description: "Management reporting generated automatically from live data — no more assembling slides.",
  },
  {
    title: "SOP & knowledge copilots",
    description: "AI-assisted tools that surface the right procedure, standard, or reference at the point of work.",
  },
  {
    title: "Governance & audit trails",
    description: "Automated approval routing, deviation logging, and compliance tracking that runs in the background.",
  },
];

export default function HomePage() {
  return (
    <main>
      <InteractiveHeroShell>
        <Hero
          badge="Six Sigma Training + CI Consulting + AI Systems"
          headline="We make operational improvement permanent."
          subheadline="2KO trains your people in Lean Six Sigma, deploys continuous improvement programmes, and builds AI-powered systems that help your improvements stick — and scale."
        >
          <PathChooser />
        </Hero>
      </InteractiveHeroShell>

      {/* Partner logos — immediately below hero CTAs, above the fold */}
      <PartnerLogos />

      {/* Partner Engines — the 2KO group entities */}
      <PartnerEngines />

      {/* Why we win */}
      <ProofBlock metrics={proofMetrics} />

      {/* Training pathways teaser */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
            Training pathways
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            From free White Belt fundamentals to advanced Black Belt leadership — delivered online, virtual, or in the classroom.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {beltCourses.map((course) => (
            <Link
              key={course.slug}
              href="/training"
              className="rounded-2xl bg-surface border border-border p-5 text-center hover:border-accent/30 transition-colors group"
            >
              <h3 className="text-text font-semibold text-sm group-hover:text-accent transition-colors">
                {course.level}
              </h3>
              <p className="text-muted2 text-xs mt-1">{course.duration}</p>
              {course.isFree && (
                <Badge variant="accent" className="mt-3 text-[10px]">
                  Free
                </Badge>
              )}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {deliveryModes.map((dm) => (
            <div key={dm.mode} className="flex items-center gap-2 text-sm text-muted">
              <span className="text-accent">&#x2713;</span>
              {dm.mode}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/training"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
          >
            View full course catalogue &rarr;
          </Link>
        </div>
      </section>

      {/* Systems that lock-in gains */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
            Systems that lock in gains
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Six Sigma defines the improvement. AI systems make it permanent by embedding standards into daily workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {systemCategories.map((cat) => (
            <div key={cat.title} className="rounded-2xl bg-surface border border-border p-7">
              <h3 className="text-text font-semibold mb-2">{cat.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services/ai-systems"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
          >
            Learn about AI systems &rarr;
          </Link>
        </div>
      </section>

      {/* How we work */}
      <Stepper
        headline="How we work"
        subheadline="A five-phase engagement model designed to build capability and then protect it."
        steps={processSteps}
      />

      <CTABand
        headline="Ready to make improvement stick?"
        subheadline="Start with a 30-minute diagnostic conversation. No charge, no obligation."
        primaryCTA={{ label: "Start the conversation", href: "/contact" }}
        secondaryCTA={{ label: "View case studies", href: "/case-studies" }}
      />
    </main>
  );
}
