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
      className={`rounded-2xl border p-8 flex flex-col gap-6 transition-colors group ${
        accent
          ? "bg-accent/5 border-accent/20 hover:border-accent/40"
          : "bg-surface border-border hover:border-border/60"
      }`}
    >
      <div>
        <div className="text-3xl mb-4" aria-hidden="true">
          {icon}
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted2 mb-2">
          {tagline}
        </p>
        <h3 className="text-xl font-semibold text-text">{title}</h3>
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
