type ImageMode = "pinned" | "query";

const DEFAULT_FALLBACK_QUERY = "abstract technology operations";

const pinnedImages: Record<string, string> = {
  homeHero:
    "https://source.unsplash.com/1920x1200/?operations-team-collaboration,modern-office&sig=101",
  servicesHero:
    "https://source.unsplash.com/1920x1200/?strategic-workshop,business-team&sig=102",
  operationalExcellenceHero:
    "https://source.unsplash.com/1920x1200/?manufacturing-line,industrial-operations&sig=103",
  aiSystemsHero:
    "https://source.unsplash.com/1920x1200/?data-visualization,technology-dashboard&sig=104",
  caseStudiesHero:
    "https://source.unsplash.com/1920x1200/?enterprise-team,meeting-room&sig=105",
  faqHero:
    "https://source.unsplash.com/1920x1200/?modern-office,collaboration-space&sig=106",
  aboutHero:
    "https://source.unsplash.com/1920x1200/?professional-team,workspace&sig=107",
  contactHero:
    "https://source.unsplash.com/1920x1200/?consulting-conversation,office-lounge&sig=108",
  aboutStory:
    "https://source.unsplash.com/1400x1000/?operations-team,planning-board&sig=109",
  caseStudiesSection:
    "https://source.unsplash.com/1400x1000/?logistics-operations,warehouse-team&sig=110",
  contactSection:
    "https://source.unsplash.com/1400x1000/?business-conversation,glass-office&sig=111",
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

