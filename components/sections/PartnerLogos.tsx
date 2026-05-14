import { PARTNER_NAMES } from "@/lib/data/partners";

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-[var(--color-bg-2)]">
      <p
        className="text-center text-[11px] font-semibold uppercase text-[var(--color-muted2)] mb-10"
        style={{ letterSpacing: "var(--tracking-eyebrow)" }}
      >
        Trusted across the 2KO group by leading organisations
      </p>

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
                  className="text-[var(--color-muted)] text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p
        className="text-center text-[var(--color-muted2)] text-xs md:text-sm mt-10 tracking-wide"
      >
        And over 5,000 more across the 2KO group.
      </p>
    </section>
  );
}
