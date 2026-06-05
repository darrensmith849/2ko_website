"use client";

import { useEffect, useRef, useState } from "react";

type Milestone = {
  year: string;
  title: string;
  body: string;
};

const MILESTONES: Milestone[] = [
  {
    year: "1998",
    title: "2KO founded",
    body: "Started as a small Six Sigma training practice serving South African manufacturers learning Lean from first principles.",
  },
  {
    year: "2004",
    title: "Belt programmes go national",
    body: "Yellow, Green, and Black Belt cohorts running in Johannesburg, Cape Town, Durban and Pretoria for banking and mining.",
  },
  {
    year: "2011",
    title: "Accreditation body established",
    body: "Six Sigma South Africa formalised as an accredited certifier, aligned to international CSSC standards.",
  },
  {
    year: "2017",
    title: "Continental footprint",
    body: "On-site delivery extended into Nairobi, Lusaka and Dar es Salaam — six operating cities, one curriculum.",
  },
  {
    year: "2021",
    title: "2KO Systems launches",
    body: "The systems arm spins up to build the custom software clients kept asking for — workflow automation, dashboards, copilots.",
  },
  {
    year: "2025",
    title: "Sigmafy enters pilot",
    body: "A purpose-built SaaS for running Six Sigma and Lean projects end-to-end. The platform that closes the loop on training.",
  },
  {
    year: "2026",
    title: "The 2KO Group today",
    body: "1,000+ companies served. Three disciplines under one umbrella. Operational improvement, made permanent.",
  },
];

export default function GroupTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const items = sectionRef.current?.querySelectorAll<HTMLElement>("[data-milestone]");
    if (!items) return;

    items.forEach((el, idx) => {
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActiveIndex(idx);
          }
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const progress = (activeIndex + 1) / MILESTONES.length;

  return (
    <section className="relative border-t border-border bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg/45 mb-4">
            Twenty-eight years in, still improving
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight max-w-2xl mx-auto">
            How the group grew from one training room into three disciplines.
          </h2>
        </div>

        {/* Timeline body — sticky rail on left, scrolling milestones on right */}
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16">
          {/* Sticky year + progress rail */}
          <div className="hidden md:block">
            <div className="sticky top-32">
              <p className="text-[11px] uppercase tracking-[0.22em] text-fg/45 mb-3">
                Current
              </p>
              <div
                className="text-6xl font-semibold tracking-tight transition-colors"
                style={{ color: "var(--tint)" }}
              >
                {MILESTONES[activeIndex].year}
              </div>
              <div className="mt-6 h-1 w-full rounded-full bg-fg/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-[width] duration-500"
                  style={{
                    width: `${progress * 100}%`,
                    background: "var(--tint)",
                  }}
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-fg/45">
                {activeIndex + 1} / {MILESTONES.length}
              </p>
            </div>
          </div>

          {/* Milestone list */}
          <ol className="relative space-y-12 md:space-y-16">
            {/* Vertical guide line */}
            <div aria-hidden className="absolute left-3 top-2 bottom-2 w-px bg-fg/10" />
            {MILESTONES.map((m, i) => (
              <li
                key={m.year}
                data-milestone
                className="relative pl-10"
              >
                <span
                  className={`absolute left-1.5 top-2 h-3 w-3 rounded-full timeline-dot transition-all ${
                    i === activeIndex ? "is-active" : ""
                  }`}
                  style={{
                    background: i <= activeIndex ? "var(--tint)" : "rgba(255,255,255,0.25)",
                  }}
                />
                <p className="md:hidden text-xs font-semibold uppercase tracking-[0.22em] mb-1.5" style={{ color: "var(--tint)" }}>
                  {m.year}
                </p>
                <h3 className="text-text font-semibold text-xl tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed max-w-xl">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
