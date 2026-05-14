import { type ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { getImage } from "@/lib/imageBank";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface HeroProps {
  badge?: string;
  headline: ReactNode;
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
    <div
      className={`relative ${imageUrl ? "min-h-[56vh] sm:min-h-[60vh]" : ""}`}
    >
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
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.72) 100%)",
            }}
          />
        </>
      )}

      <div
        className={`relative max-w-6xl mx-auto px-6 text-center ${
          imageUrl ? "pt-24 sm:pt-28 pb-20 sm:pb-24" : "pt-28 pb-24"
        }`}
      >
        {badge && (
          <div className="mb-6 flex justify-center">
            <span className="reveal-up eyebrow-rule on-dark">{badge}</span>
          </div>
        )}
        <h1
          className="reveal-up reveal-stagger-1 font-semibold text-white max-w-4xl mx-auto"
          style={{
            fontSize: "clamp(36px, 4.4vw, 60px)",
            letterSpacing: "var(--tracking-display)",
            lineHeight: 1.04,
          }}
        >
          {headline}
        </h1>
        <p
          className="reveal-up reveal-stagger-2 mt-6 text-white/85 max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(15px, 1.15vw, 17px)",
            letterSpacing: "var(--tracking-tight)",
            lineHeight: 1.55,
          }}
        >
          {subheadline}
        </p>
        {ctas.length > 0 && (
          <div className="reveal-up reveal-stagger-3 mt-11 flex flex-wrap gap-3 justify-center">
            {ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant ?? "primary"} size="lg">
                {cta.label}
              </Button>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
