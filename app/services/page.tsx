import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import CTABand from "@/components/sections/CTABand";
import { services } from "@/lib/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Services",
  "2KO delivers Lean Six Sigma training, continuous improvement consulting, and AI-powered management systems — three disciplines that work together to make operational improvement permanent.",
  "/services"
);

export default function ServicesPage() {
  return (
    <main>
      <Hero
        badge="Our services"
        headline="Two disciplines. One outcome."
        subheadline="Lean Six Sigma builds the capability. AI systems enforce the standard. Together, they make improvement that sticks."
        imageKey="servicesHero"
        imageAlt="Consulting team in a focused strategy session"
        imagePosition="center 34%"
        ctas={[
          { label: "Start the conversation", href: "/contact", variant: "primary" },
        ]}
      />

      {/* Services detail */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              bullets={service.bullets}
              href={`/services/${service.slug}`}
              accent={i === 0}
            />
          ))}
        </div>
      </section>

      {/* Additional services */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text tracking-tight">
            More from the 2KO group
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Training, consulting, and accreditation — each reinforcing the other.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Training & Certification",
              description: "White to Black Belt programmes delivered online, virtually, or in the classroom.",
              href: "/training",
            },
            {
              title: "CI Consulting",
              description: "Diagnostic, deployment, and coaching engagements that produce results during the programme.",
              href: "/consulting",
            },
            {
              title: "Accreditation & Standards",
              description: "Internationally recognised certification backed by the CSSC and structured for SETA claims.",
              href: "/accreditation",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl bg-surface border border-border p-7 hover:border-accent/30 transition-colors group"
            >
              <h3 className="text-text font-semibold group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed mt-2">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-4">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How they connect */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-text tracking-tight mb-6">
            Why both disciplines matter
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Training without a sustaining system produces results that fade within
            12-18 months as new behaviours fail to become the default. AI systems
            without trained people produce dashboards that nobody acts on.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            The combination is different: people who understand the methodology,
            supported by systems that make it easy to comply and hard to regress.
            That&apos;s what makes improvement permanent.
          </p>
        </div>
      </section>

      <CTABand
        headline="Not sure which service fits your situation?"
        subheadline="Book a diagnostic call and we'll tell you honestly what we think you need — even if it's not us."
        primaryCTA={{ label: "Book a diagnostic call", href: "/contact" }}
        secondaryCTA={{ label: "Read case studies", href: "/case-studies" }}
      />
    </main>
  );
}
