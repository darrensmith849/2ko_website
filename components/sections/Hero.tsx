import { type ReactNode } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface HeroProps {
  badge?: string;
  headline: string;
  subheadline: string;
  ctas?: HeroCTA[];
  children?: ReactNode;
}

export default function Hero({
  badge,
  headline,
  subheadline,
  ctas = [],
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(22,163,74,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        {badge && (
          <div className="mb-6 flex justify-center">
            <Badge variant="accent">{badge}</Badge>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text leading-tight max-w-3xl mx-auto">
          {headline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          {subheadline}
        </p>
        {ctas.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant ?? "primary"} size="lg">
                {cta.label}
              </Button>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
