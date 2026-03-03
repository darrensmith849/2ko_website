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
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-2xl bg-surface border border-border p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight max-w-2xl mx-auto">
          {headline}
        </h2>
        {subheadline && (
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto leading-relaxed">
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
