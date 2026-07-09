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
    <section
      // When the hero has an image background, scope it to data-theme="dark"
      // so all theme tokens (text-text, text-muted, border-border) resolve
      // to their light/dim values — matches the dark-overlay image showcase
      // regardless of the site-wide theme.
      data-theme={imageUrl ? "dark" : undefined}
      className={`relative overflow-hidden border-b border-border/60 ${
        imageUrl ? "min-h-[56vh] sm:min-h-[60vh]" : ""
      }`}
    >
      {imageUrl && (
        <>
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1920px"
              priority={imagePriority}
              fetchPriority={imagePriority ? "high" : undefined}
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
          {/* Image overlay: stays dark in both themes — the image-backed
              hero is a dark showcase strip with white text, so the gradient
              must NOT fade to --background (which flips to white in light
              mode and washes out the subheadline). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85"
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
      <div
        className={`relative max-w-6xl mx-auto px-6 text-center ${
          imageUrl ? "pt-24 sm:pt-28 pb-20 sm:pb-24" : "pt-28 pb-24"
        }`}
      >
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
