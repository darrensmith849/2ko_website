import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  href: string;
  accent?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  bullets,
  href,
  accent = false,
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-3xl border p-7 md:p-8 flex flex-col gap-6 transition-all duration-300 group ${
        accent
          ? "bg-accent/5 border-accent/25 hover:border-accent/45 hover:-translate-y-0.5"
          : "bg-surface/92 border-border hover:border-border/60 hover:-translate-y-0.5"
      }`}
    >
      <div>
        <div className="text-3xl mb-4" aria-hidden="true">
          {icon}
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted2 mb-2">
          {tagline}
        </p>
        <h3 className="text-xl font-semibold text-text tracking-tight">{title}</h3>
        <p className="mt-3 text-muted text-sm leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-col gap-2 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-0.5 text-accent flex-shrink-0" aria-hidden="true">
              ✓
            </span>
            {b}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`text-sm font-medium transition-colors ${
          accent ? "text-accent hover:text-accent2" : "text-muted hover:text-accent"
        } group-hover:underline underline-offset-2`}
        aria-label={`Learn more about ${title}`}
      >
        Learn more →
      </Link>
    </div>
  );
}
