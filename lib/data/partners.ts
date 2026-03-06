export interface Partner {
  name: string;
  tagline: string;
  description: string;
  cta: { label: string; href: string };
}

export const partners: Partner[] = [
  {
    name: "2KO Africa",
    tagline: "Training & Improvement Delivery",
    description:
      "The primary delivery vehicle for Lean Six Sigma belt programmes, live improvement projects, and management-system embedding across sub-Saharan Africa.",
    cta: { label: "View courses", href: "/training" },
  },
  {
    name: "Six Sigma South Africa",
    tagline: "Accreditation & CI Consulting",
    description:
      "Africa's recognised authority for Six Sigma accreditation and certification, backed by international quality standards.",
    cta: { label: "Accreditation", href: "/accreditation" },
  },
  {
    name: "2KO AI Systems",
    tagline: "AI Systems & Automation",
    description:
      "The technology capability building AI-powered management systems that embed operational standards into daily workflows.",
    cta: { label: "Build systems", href: "/services/ai-systems" },
  },
];
