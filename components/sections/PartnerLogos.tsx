import { PARTNERS } from "@/lib/data/partners";

/**
 * Partner logo marquee.
 *
 * Infinite right-to-left scroll of client logos rendered as images in
 * a monochrome (grayscale) treatment, with a green overline + subtitle
 * and left/right edge fades. Mirrors the "Trusted by" strip on
 * sixsigmasouthafrica.co.za.
 *
 * The `.partner-logo` class (see globals.css) darkens the logos to
 * charcoal in light mode and lightens them in dark mode so they stay
 * legible against the near-black background.
 */
export default function PartnerLogos() {
  return (
    <section className="py-16 md:py-20">
      {/* Header — green overline + subtitle, centred */}
      <div className="mb-12 text-center px-6">
        <p className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-px w-8 bg-current opacity-60" aria-hidden />
          Trusted across the 2KO group
        </p>
        <p className="mt-3 text-[15px] text-fg/50">
          And over 5,000 more organisations across the continent
        </p>
      </div>

      {/* Marquee — centred container with edge fade mask */}
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
            <div
              key={copy}
              className="flex shrink-0 items-center gap-16 px-8"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {PARTNERS.map((partner) => (
                <div
                  key={`${copy}-${partner.name}`}
                  className="flex h-20 shrink-0 items-center md:h-24"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.src}
                    alt={partner.name}
                    loading="lazy"
                    className="partner-logo h-full w-auto max-w-[168px] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
