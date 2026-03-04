import { type ReactNode } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getImage } from "@/lib/imageBank";

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
  imageKey?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  imagePosition?: string;
  children?: ReactNode;
}

export default function Hero({
  badge,
  headline,
  subheadline,
  ctas = [],
  imageKey,
  imageAlt = "Business operations background",
  imagePriority = false,
  imagePosition = "center",
  children,
}: HeroProps) {
  const imageUrl = imageKey ? getImage(imageKey) : null;

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {imageUrl && (
        <>
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="100vw"
              priority={imagePriority}
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-background/95"
          />
        </>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 84% 52% at 50% -10%, rgba(22,163,74,0.16) 0%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        {badge && (
          <div className="mb-6 flex justify-center">
            <Badge variant="accent" className="px-4 py-1.5 text-[11px] uppercase tracking-widest">
              {badge}
            </Badge>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text leading-[1.05] max-w-4xl mx-auto">
          {headline}
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          {subheadline}
        </p>
        {ctas.length > 0 && (
          <div className="mt-11 flex flex-wrap gap-3 justify-center">
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
