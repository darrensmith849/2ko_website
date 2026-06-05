import type { Metadata } from "next";
import InteractiveHeroShell from "@/components/hero/InteractiveHeroShell";
import UmbrellaHero from "@/components/sections/UmbrellaHero";
import DivisionCards from "@/components/sections/DivisionCards";
import PartnerLogos from "@/components/sections/PartnerLogos";
import GroupTimeline from "@/components/sections/GroupTimeline";
import ProofBlock from "@/components/sections/ProofBlock";
import Stepper from "@/components/sections/Stepper";
import CTABand from "@/components/sections/CTABand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "2KO Africa — The umbrella group for operational excellence",
  "Twenty-eight years of Lean Six Sigma training, custom operational systems, and the SaaS that runs improvement projects end-to-end. Three disciplines, one group, across Africa.",
  "/",
);

const proofMetrics = [
  {
    value: "Cross-Sector",
    label: "Enterprise programmes",
    sublabel: "banking, mining, manufacturing, logistics, public services",
  },
  {
    value: "Practitioner-Led",
    label: "Delivery model",
    sublabel: "consultants who have run live improvement programmes",
  },
  {
    value: "System-Embedded",
    label: "How change sticks",
    sublabel: "standards embedded in routines, not only training",
  },
  {
    value: "Outcome-Focused",
    label: "How we measure",
    sublabel: "operational outcomes over presentation metrics",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We quantify the gap between your current state and the standard you need to operate at.",
  },
  {
    number: "02",
    title: "Train",
    description:
      "Six Sigma South Africa runs the belt cohorts that build your improvement capability.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Live projects deliver the saving — every belt culminates in measurable ROI, not a slide deck.",
  },
  {
    number: "04",
    title: "Systemise",
    description:
      "2KO Systems embeds the new standards into workflows, dashboards, and approvals that run themselves.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "Sigmafy keeps the loop closed — projects, charts, certifications, and copilots in one place.",
  },
];

export default function HomePage() {
  return (
    <main>
      <InteractiveHeroShell>
        <UmbrellaHero />
      </InteractiveHeroShell>

      <PartnerLogos />

      <div id="divisions">
        <DivisionCards />
      </div>

      <GroupTimeline />

      <ProofBlock metrics={proofMetrics} />

      <Stepper
        headline="How the group fits together"
        subheadline="Five phases. Each phase is owned by the division best built for it — but the outcome is one continuous operating loop."
        steps={processSteps}
      />

      <CTABand
        headline="Not sure where to start?"
        subheadline="Tell us what's brittle in your operation. We'll point you at the right division — training, systems, or platform — and book the right conversation."
        primaryCTA={{ label: "Start the conversation", href: "/contact" }}
        secondaryCTA={{ label: "View case studies", href: "/case-studies" }}
      />
    </main>
  );
}
