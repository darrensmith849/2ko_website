type ImageMode = "pinned" | "query";

const DEFAULT_FALLBACK_QUERY = "abstract technology operations";

const pinnedImages: Record<string, string> = {
  homeHero:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  servicesHero:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
  operationalExcellenceHero:
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80",
  aiSystemsHero:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80",
  caseStudiesHero:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
  faqHero:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
  aboutHero:
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1920&q=80",
  contactHero:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
  aboutStory:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  caseStudiesSection:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  contactSection:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
};

const queryImages: Record<string, string> = {
  homeHero: "abstract technology operations team collaboration",
  servicesHero: "minimal office strategy workshop",
  operationalExcellenceHero: "industrial manufacturing operations line",
  aiSystemsHero: "clean data visualization technology",
  caseStudiesHero: "enterprise operations leadership team",
  faqHero: "modern workplace collaborative discussion",
  aboutHero: "professional consulting team workspace",
  contactHero: "business consultation conversation",
  aboutStory: "operations planning whiteboard team",
  caseStudiesSection: "warehouse logistics operations team",
  contactSection: "meeting room consulting conversation",
};

const imageMode: ImageMode =
  process.env.NEXT_PUBLIC_IMAGE_MODE === "query" ? "query" : "pinned";

function queryUrl(query: string) {
  return `https://source.unsplash.com/1920x1200/?${encodeURIComponent(query)}`;
}

export function getImage(key: string) {
  if (imageMode === "pinned") {
    const pinned = pinnedImages[key];
    if (pinned) {
      return pinned;
    }
  }

  const query = queryImages[key] ?? DEFAULT_FALLBACK_QUERY;
  return queryUrl(query);
}
