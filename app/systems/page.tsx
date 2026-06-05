import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ConsoleMesh from "@/components/motifs/ConsoleMesh";
import CTABand from "@/components/sections/CTABand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "2KO Systems — Custom operational software & AI",
  "The 2KO Group's systems arm. Workflow automation, operational dashboards, approval chains, and AI copilots — built for operations, not generic SaaS.",
  "/systems",
);

const PILLARS = [
  {
    eyebrow: "Workflow automation",
    title: "Standards, enforced by design",
    body: "Request-to-completion flows with approval chains and audit trails. The right thing becomes the easy thing.",
  },
  {
    eyebrow: "Operational dashboards",
    title: "Live, never assembled",
    body: "Status, throughput, and exceptions in a single view — no more chasing the weekly pack together by email.",
  },
  {
    eyebrow: "AI copilots",
    title: "SOPs at the point of work",
    body: "Procedures, references, and answers surfaced where your team works — not buried in a shared drive.",
  },
];

export default function SystemsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Custom software & AI"
        title="Operations software. Built for the way you actually work."
        subtitle="We design and build the operational layer your business already has — but in software instead of WhatsApp threads. Audit, scope, prototype, build, optimise."
        ctas={[
          { label: "Visit 2KO Systems", href: "https://www.2kosystems.com", external: true },
          { label: "Talk to the group", href: "/contact", variant: "outline" },
        ]}
        motif={<ConsoleMesh className="w-full max-w-lg mx-auto" />}
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              data-delay={i + 1}
              className="card-shimmer rounded-2xl border border-fg/10 bg-fg/[0.02] p-7"
            >
              <p
                className="text-[11px] uppercase tracking-[0.22em] mb-3"
                style={{ color: "var(--tint)" }}
              >
                {p.eyebrow}
              </p>
              <h3 className="text-text font-semibold text-xl tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        headline="The operating layer your team is missing."
        subheadline="Start with a Systems Opportunity Audit — we map the workflow that pays for the build."
        primaryCTA={{ label: "Visit 2KO Systems", href: "https://www.2kosystems.com" }}
        secondaryCTA={{ label: "Talk to the group", href: "/contact" }}
      />
    </main>
  );
}
