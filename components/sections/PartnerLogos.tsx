import { PARTNER_NAMES } from "@/lib/data/partners";

/**
 * Text-only partner marquee.
 *
 * Infinite right-to-left scrolling inside a centred max-width container
 * with left/right edge fades — matching 2KO Systems.
 */
export default function PartnerLogos() {
  return (
    <section className="py-16">
      {/* Header */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-10">
        Trusted across the 2KO group by leading organisations
      </p>

      {/* Centred container with fade mask */}
      <div
        className="max-w-6xl mx-auto px-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-12 md:gap-16 px-6 md:px-8">
              {PARTNER_NAMES.map((name) => (
                <span
                  key={`${copy}-${name}`}
                  className="text-white/50 text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-white/30 text-xs md:text-sm mt-10 tracking-wide">
        And over 5,000 more across the 2KO group.
      </p>
    </section>
  );
}
