import type { Metadata } from "next";

export const siteUrl = "https://2ko.co.za";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2KO — Operational Excellence & AI Systems",
    template: "%s | 2KO",
  },
  description:
    "2KO makes operational improvement permanent through Lean Six Sigma mastery and AI-powered management systems. 200+ blue-chip clients. Since 1998.",
  openGraph: {
    siteName: "2KO",
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "2KO — Operational Excellence & AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
    },
  };
}
