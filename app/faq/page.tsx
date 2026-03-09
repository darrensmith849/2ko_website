import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Accordion from "@/components/ui/Accordion";
import CTABand from "@/components/sections/CTABand";
import CursorGlowSection from "@/components/ui/CursorGlowSection";
import { faqs } from "@/lib/data/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "FAQ",
  "Straight answers to the questions organisations ask before working with 2KO — on methodology, timelines, ROI, certifications, and more.",
  "/faq"
);

export default function FAQPage() {
  return (
    <main>
      <CursorGlowSection>
        <Hero
          badge="FAQ"
          headline="Straight answers."
          subheadline="The questions we hear most often before an engagement starts — answered directly."
          imageKey="faqHero"
          imageAlt="Consulting discussion in a modern collaborative workspace"
          imagePosition="center 35%"
          ctas={[]}
        />
      </CursorGlowSection>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <Accordion items={faqs} />
      </section>

      <CTABand
        headline="Still have questions?"
        subheadline="Book a 30-minute call and ask us anything directly. No sales pitch, no obligation."
        primaryCTA={{ label: "Book a call", href: "/contact" }}
        secondaryCTA={{ label: "Read case studies", href: "/case-studies" }}
      />
    </main>
  );
}
