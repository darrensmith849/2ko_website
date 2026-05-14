import Button from "@/components/ui/Button";

interface CTABandProps {
  headline: string;
  subheadline?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTABand({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: CTABandProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div
        className="rounded-3xl border p-10 md:p-16 text-center"
        style={{
          background: "var(--color-bg-2)",
          borderColor: "var(--accent-border)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2
          className="font-semibold text-[var(--color-text)] max-w-3xl mx-auto"
          style={{
            fontSize: "var(--text-display-md)",
            letterSpacing: "var(--tracking-display)",
            lineHeight: 1.1,
          }}
        >
          {headline}
        </h2>
        {subheadline && (
          <p
            className="mt-5 text-[var(--color-muted)] max-w-xl mx-auto"
            style={{
              fontSize: "clamp(15px, 1.15vw, 17px)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.55,
            }}
          >
            {subheadline}
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button href={primaryCTA.href} size="lg">
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="outline" size="lg">
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
