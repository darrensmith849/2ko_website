import Link from "next/link";
import { partners } from "@/lib/data/partners";

export default function PartnerEngines() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <p className="text-center text-muted2 text-xs font-semibold uppercase tracking-widest mb-6">
        The engines behind the group
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="rounded-2xl bg-surface border border-border p-6 flex flex-col gap-3 hover:border-accent/30 transition-colors"
          >
            <div>
              <h3 className="text-text font-semibold text-base">
                {partner.name}
              </h3>
              <p className="text-accent text-xs font-medium uppercase tracking-wider mt-1">
                {partner.tagline}
              </p>
            </div>
            <p className="text-muted text-sm leading-relaxed flex-1">
              {partner.description}
            </p>
            <Link
              href={partner.cta.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent2 transition-colors mt-1"
            >
              {partner.cta.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
