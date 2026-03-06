import Image from "next/image";
import { PARTNERS } from "@/lib/data/partners";

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
            <div key={copy} className="flex shrink-0 items-center gap-12 px-6">
              {PARTNERS.map((p) => (
                <div
                  key={`${copy}-${p.name}`}
                  className="flex-shrink-0 flex items-center justify-center h-10 w-[120px]"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={120}
                    height={40}
                    className="object-contain grayscale opacity-70 brightness-150 contrast-110 transition-all duration-300"
                    style={{ maxHeight: "40px", width: "auto" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-muted2 text-xs mt-8">
        And many more across Africa and beyond.
      </p>
    </section>
  );
}
