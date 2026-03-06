import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/training", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/consulting", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/accreditation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/operational-excellence", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/ai-systems", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${siteUrl}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
