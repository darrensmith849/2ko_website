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
      <div className="rounded-3xl border border-border/80 p-10 md:p-16 text-center bg-[linear-gradient(180deg,rgba(17,17,19,0.96),rgba(13,13,15,0.94))] shadow-[0_24px_64px_-40px_rgba(0,0,0,0.8)]">
        <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight leading-tight max-w-3xl mx-auto">
          {headline}
        </h2>
        {subheadline && (
          <p className="mt-5 text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed">
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
