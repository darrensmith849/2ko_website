import Image from "next/image";
import { PARTNERS } from "@/lib/data/partners";

function PartnerLogo({ name, src }: { name: string; src: string }) {
  const base =
    "h-10 md:h-14 w-auto object-contain brightness-200 contrast-125 opacity-60 hover:opacity-100 transition-opacity duration-300";

  if (src.toLowerCase().endsWith(".svg")) {
    return (
      <div className="flex items-center shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          loading="lazy"
          className={base}
          style={{ maxWidth: 180 }}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center shrink-0">
      <Image
        src={src}
        alt={name}
        width={180}
        height={56}
        className={base}
        priority={false}
      />
    </div>
  );
}

/**
 * Infinite right-to-left logo marquee.
 *
 * Two copies of the logo strip sit side-by-side. A CSS animation
 * translates the track leftward by exactly 50 %, then resets —
 * creating a seamless infinite loop with no jump.
 *
 * `prefers-reduced-motion` pauses the animation.
 */
export default function PartnerLogos() {
  return (
    <section className="pt-8 pb-14 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-8">
        Trusted by leading organisations
      </p>

      {/* Outer mask — wide fade for a clean premium feel */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Scrolling track: two copies for seamless loop */}
        <div className="flex w-max animate-marquee motion-reduce:animate-none motion-reduce:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-16 px-8">
              {PARTNERS.map((p) => (
                <PartnerLogo key={`${copy}-${p.name}`} name={p.name} src={p.src} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-white/35 text-xs md:text-sm mt-8 tracking-wide">
        And over 5,000 more!
      </p>
    </section>
  );
}
