import { PARTNER_NAMES } from "@/lib/data/partners";

/**
 * Text-only partner trust strip.
 *
 * Dark background · centred header · single row of subtle grey names ·
 * centred footer line. No logos, boxes, pills, or borders.
 */
export default function PartnerLogos() {
  return (
    <section className="py-16">
      {/* Header */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-10">
        Trusted across the 2KO group by leading organisations
      </p>

      {/* Partner names — single centred row */}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 md:px-12">
        {PARTNER_NAMES.map((name) => (
          <span
            key={name}
            className="text-white/50 text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-white/30 text-xs md:text-sm mt-10 tracking-wide">
        And over 5,000 more across the 2KO group.
      </p>
    </section>
  );
}
