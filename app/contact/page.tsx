import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import ContactForm from "./ContactForm";
import CursorGlowSection from "@/components/ui/CursorGlowSection";
import { getImage } from "@/lib/imageBank";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Start a conversation with 2KO. Tell us your operational challenge and we'll come back within one business day.",
  "/contact"
);

export default function ContactPage() {
  return (
    <main>
      <CursorGlowSection>
        <Hero
          badge="Get in touch"
          headline="Start the conversation."
          subheadline="Tell us your biggest operational challenge. We'll respond within one business day with an honest view of how — or whether — we can help."
          imageKey="contactHero"
          imageAlt="Business leaders in a focused consultation meeting"
          imagePosition="center 33%"
          ctas={[]}
        />
      </CursorGlowSection>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden border border-border">
              <Image
                src={getImage("contactSection")}
                alt="Consulting conversation in a modern office setting"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                style={{ objectPosition: "center 32%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
            </div>
            <div>
              <h2 className="text-text font-semibold text-lg mb-4">What to expect</h2>
              <ul className="flex flex-col gap-4">
                {[
                  {
                    step: "1",
                    title: "We read your message",
                    body: "A senior consultant reviews every enquiry — not a sales team.",
                  },
                  {
                    step: "2",
                    title: "We respond within one business day",
                    body: "With an honest initial view of whether 2KO is a good fit for your situation.",
                  },
                  {
                    step: "3",
                    title: "We schedule a 30-minute diagnostic call",
                    body: "No pitch. Just a structured conversation about your problem and what a solution might look like.",
                  },
                  {
                    step: "4",
                    title: "We send you a scoped proposal",
                    body: "With clear deliverables, indicative investment, and expected outcomes.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <span className="text-accent font-semibold text-xs">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-text font-medium text-sm">{item.title}</p>
                      <p className="text-muted text-sm mt-0.5">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-surface border border-border p-7">
              <h3 className="text-text font-semibold mb-4">Contact details</h3>
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <p className="text-muted2 text-xs uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:info@2ko.co.za"
                    className="text-text hover:text-accent transition-colors"
                  >
                    info@2ko.co.za
                  </a>
                </div>
                <div>
                  <p className="text-muted2 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-muted">South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
