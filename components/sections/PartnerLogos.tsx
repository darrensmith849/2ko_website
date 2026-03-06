import Image from "next/image";
import { PARTNERS } from "@/lib/data/partners";

function PartnerLogo({ name, src }: { name: string; src: string }) {
  const base =
    "h-20 md:h-24 w-auto object-contain grayscale opacity-95 brightness-110 contrast-110";
  const wrapper = "flex items-center justify-center shrink-0";

  if (src.toLowerCase().endsWith(".svg")) {
    return (
      <div className={wrapper} style={{ width: 320 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          loading="lazy"
          className={base}
          style={{ maxWidth: 320 }}
        />
      </div>
    );
  }

  return (
    <div className={wrapper} style={{ width: 320 }}>
      <Image
        src={src}
        alt={name}
        width={320}
        height={120}
        className={base}
        priority={false}
      />
    </div>
  );
}

/**
 * Infinite right-to-left logo marquee.
 *
 * The track contains two identical copies of the logo list placed
 * side-by-side. A CSS animation translates the track leftward by
 * exactly 50 % (one copy's width), then resets — creating a seamless
 * infinite loop with no jump.
 *
 * `prefers-reduced-motion` pauses the animation.
 */
export default function PartnerLogos() {
  return (
    <section className="pt-6 pb-14 overflow-hidden">
      <p className="text-center text-muted2 text-xs font-semibold uppercase tracking-widest mb-8">
        Trusted by leading organisations
      </p>

      {/* Outer mask — fades edges for a premium feel */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
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

      <p className="text-center text-white/50 text-xs md:text-sm mt-8">
        And over 5,000 more!
      </p>
    </section>
  );
}
