import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import Badge from "@/components/ui/Badge";
import CursorGlowSection from "@/components/ui/CursorGlowSection";
import { getImage } from "@/lib/imageBank";
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
      <CursorGlowSection>
        <Hero
          badge="About 2KO"
          headline="Built on process. Powered by systems."
          subheadline="2KO helps organisations build Lean Six Sigma capability and reinforce new operating standards with practical management systems."
          imageKey="aboutHero"
          imageAlt="Consulting team collaborating around operational planning"
          imagePosition="center 35%"
          ctas={[
            { label: "Work with us", href: "/contact", variant: "primary" },
            { label: "See our results", href: "/case-studies", variant: "outline" },
          ]}
        />
      </CursorGlowSection>

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
          <div className="relative h-72 sm:h-80 lg:h-full min-h-[20rem] rounded-3xl overflow-hidden border border-border">
            <Image
              src={getImage("aboutStory")}
              alt="Team planning sustainable operational improvements on a strategy board"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              style={{ objectPosition: "center 34%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
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
