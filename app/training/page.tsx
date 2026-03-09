import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTABand from "@/components/sections/CTABand";
import Badge from "@/components/ui/Badge";
import CursorGlowSection from "@/components/ui/CursorGlowSection";
import { beltCourses, deliveryModes, trainingLocations } from "@/lib/data/training";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Training & Certification",
  "Lean Six Sigma training from White Belt to Black Belt — delivered online, virtually, or in the classroom across South Africa. Free White Belt available.",
  "/training"
);

export default function TrainingPage() {
  return (
    <main>
      <CursorGlowSection>
        <Hero
          badge="Training & Certification"
          headline="World-class Six Sigma training. Delivered your way."
          subheadline="From a free introductory White Belt to advanced Black Belt leadership — our internationally accredited programmes build real capability through live projects, not just theory."
          imageKey="trainingHero"
          imageAlt="Professional training session in a modern classroom environment"
          imagePosition="center 38%"
          ctas={[
            { label: "Start free White Belt", href: "/contact", variant: "primary" },
            { label: "Corporate training enquiry", href: "/contact", variant: "outline" },
          ]}
        />
      </CursorGlowSection>

      {/* Free White Belt banner */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-2xl bg-accent/10 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-semibold text-text">Start with a free White Belt</h2>
              <Badge variant="accent">Free</Badge>
            </div>
            <p className="text-muted text-sm max-w-xl">
              Our White Belt course is completely free, self-paced, and online. Learn the fundamentals of Six Sigma and the DMAIC methodology — no prerequisites, no credit card, no catch.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent2 transition-colors"
          >
            Enrol free
          </Link>
        </div>
      </section>

      {/* Course catalogue */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
            Course catalogue
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Each programme combines theory with live application. Belt candidates lead real improvement projects as part of their certification.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {beltCourses.map((course) => (
            <div
              key={course.slug}
              className="rounded-2xl bg-surface border border-border p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-text font-semibold text-xl">{course.level}</h3>
                    <Badge variant={course.isFree ? "accent" : "default"}>
                      {course.isFree ? "Free" : course.duration}
                    </Badge>
                  </div>
                  <p className="text-accent text-xs font-medium uppercase tracking-wider mb-3">
                    {course.tagline}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <p className="text-muted2 text-xs mb-4">
                    <span className="font-semibold text-muted">Who it&apos;s for:</span>{" "}
                    {course.forWho}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {course.delivery.map((d) => (
                      <span
                        key={d}
                        className="rounded-full bg-surface2 border border-border px-3 py-1 text-xs text-muted"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                        course.isFree
                          ? "bg-accent text-white hover:bg-accent2"
                          : "border border-accent/30 text-accent hover:bg-accent/10"
                      }`}
                    >
                      {course.isFree ? "Enrol free" : `Enquire about ${course.level}`} &rarr;
                    </Link>
                  </div>
                </div>
                <div className="lg:w-72 flex-shrink-0">
                  <p className="text-muted2 text-xs font-semibold uppercase tracking-widest mb-3">
                    What you&apos;ll achieve
                  </p>
                  <ul className="flex flex-col gap-2">
                    {course.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-accent mt-0.5 flex-shrink-0">&#x2713;</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery modes */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text tracking-tight">
            Delivery modes
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Choose the format that fits your team, schedule, and location.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveryModes.map((dm) => (
            <div key={dm.mode} className="rounded-2xl bg-surface border border-border p-7 text-center">
              <h3 className="text-text font-semibold mb-2">{dm.mode}</h3>
              <p className="text-muted text-sm leading-relaxed">{dm.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
        <p className="text-center text-muted2 text-xs font-semibold uppercase tracking-widest mb-6">
          Classroom locations
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {trainingLocations.map((loc) => (
            <div
              key={loc}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
            >
              {loc}
            </div>
          ))}
        </div>
      </section>

      {/* Accreditation strip */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
        <div className="rounded-2xl bg-surface border border-border p-8 text-center">
          <h2 className="text-xl font-semibold text-text mb-3">Accreditation & recognition</h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mx-auto mb-4">
            Our Lean Six Sigma programmes are accredited through internationally recognised bodies including the Council for Six Sigma Certification (CSSC). Courses are structured to enable skills development levy claims through the relevant SETA.
          </p>
          <Link
            href="/accreditation"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
          >
            Learn about accreditation &rarr;
          </Link>
        </div>
      </section>

      {/* Corporate training */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text tracking-tight mb-4">
              Corporate & enterprise training
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              We deliver dedicated belt programmes for organisations that want training tailored to their operational context — with project selection aligned to your real business priorities.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Customised case studies and project selection",
                "Dedicated facilitator for your cohort",
                "Management-system integration support",
                "Post-training coaching and project review",
                "Volume and multi-belt programme pricing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">&#x2713;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-surface border border-border p-8">
            <h3 className="text-text font-semibold text-lg mb-3">Typical corporate formats</h3>
            <div className="flex flex-col gap-4">
              {[
                { format: "Single belt cohort", detail: "One belt level, delivered to a team of 8-20 participants" },
                { format: "Multi-belt programme", detail: "Yellow + Green + Black deployed across functions over 3-6 months" },
                { format: "Executive awareness", detail: "Half-day session for leadership teams on Six Sigma and CI strategy" },
                { format: "Train-the-trainer", detail: "Develop internal facilitators to sustain your CI capability" },
              ].map((f) => (
                <div key={f.format} className="border-l-2 border-accent/30 pl-4">
                  <p className="text-text text-sm font-medium">{f.format}</p>
                  <p className="text-muted text-xs mt-0.5">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bridge to AI systems */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-text tracking-tight mb-6">
            Training is the start. Systems make it stick.
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-4">
            Belt programmes build the capability. But without a system to embed new standards
            into daily operations, improvements tend to fade. That is why many clients pair
            training with our AI-powered management systems — to make the new standard the
            default, not the exception.
          </p>
          <Link
            href="/services/ai-systems"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors"
          >
            Learn about AI systems &rarr;
          </Link>
        </div>
      </section>

      <CTABand
        headline="Ready to build capability in your team?"
        subheadline="Start with a free White Belt, or talk to us about a tailored corporate programme."
        primaryCTA={{ label: "Start the conversation", href: "/contact" }}
        secondaryCTA={{ label: "View case studies", href: "/case-studies" }}
      />
    </main>
  );
}
