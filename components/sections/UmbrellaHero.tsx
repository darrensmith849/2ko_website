import Link from "next/link";
import AfricaMap from "@/components/motifs/AfricaMap";

/**
 * UmbrellaHero — the homepage hero for 2KO Africa (the group).
 *
 * Two-column on md+: copy left, animated AfricaMap right. The map
 * uses --tint (default green at root) and shows six "operating
 * cities" pulsing. Replaces what would normally be a stock photo.
 *
 * Designed to sit inside InteractiveHeroShell (cursor-trail bg).
 */
export default function UmbrellaHero() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 pt-24 sm:pt-28 pb-20 sm:pb-24 grid md:grid-cols-[1.05fr_1fr] gap-12 md:gap-16 items-center">
      <div>
        <div
          data-reveal
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fg/15 bg-fg/[0.04] mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-soft" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-fg/75">
            The 2KO Group · Established 1998
          </span>
        </div>

        <h1
          data-reveal
          data-delay="1"
          className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-tight leading-[1.04] text-white"
        >
          Operational excellence,
          <br />
          <span className="text-accent">across Africa.</span>
        </h1>

        <p
          data-reveal
          data-delay="2"
          className="mt-6 text-base sm:text-lg text-fg/65 leading-relaxed max-w-xl"
        >
          Twenty-eight years training Africa's biggest organisations to operate at a higher bar — and building the systems and platforms that keep them there. Three disciplines, one group, one outcome: improvement that holds.
        </p>

        <div data-reveal data-delay="3" className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#divisions"
            data-magnetic="8"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-medium rounded-full bg-accent text-white hover:bg-accent2 transition-colors"
          >
            Explore the group
          </Link>
          <Link
            href="/contact"
            data-magnetic="10"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-medium rounded-full border border-fg/15 text-white hover:bg-fg/5 transition-colors"
          >
            Start a conversation
          </Link>
        </div>

        {/* Inline group stats — bottom of hero copy column */}
        <dl
          data-reveal
          data-delay="4"
          className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-fg/10 pt-6"
        >
          {[
            { value: 1000, suffix: "+", label: "Companies" },
            { value: 28,   suffix: "",  label: "Years" },
            { value: 6,    suffix: "",  label: "Cities" },
          ].map((stat) => (
            <div key={stat.label}>
              <dd
                data-counter
                data-counter-target={stat.value}
                data-counter-suffix={stat.suffix}
                className="text-2xl sm:text-3xl font-semibold text-accent tracking-tight"
              >
                0
              </dd>
              <dt className="mt-1 text-[11px] uppercase tracking-[0.18em] text-fg/55">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      {/* AfricaMap motif — replaces stock hero photo */}
      <div data-reveal data-delay="2" className="relative">
        <AfricaMap className="w-full h-auto" />
      </div>
    </div>
  );
}
