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
      "A recognised provider of Six Sigma accreditation and certification in Africa, backed by international quality standards.",
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

/* ── Client / partner logos (used in the marquee) ── */

export type PartnerLogo = {
  name: string;
  src: string;
};

export const PARTNERS: PartnerLogo[] = [
  { name: "Anglo American", src: "/partners/anglo-american.png" },
  { name: "Worldnet Logistics", src: "/partners/worldnet-logistics.svg" },
  { name: "Transnet", src: "/partners/transnet.png" },
  { name: "Toyota", src: "/partners/toyota.png" },
  { name: "Standard Bank", src: "/partners/standard-bank.png" },
  { name: "South African Reserve Bank", src: "/partners/south-african-reserve-bank.png" },
  { name: "Nedbank", src: "/partners/nedbank.png" },
  { name: "John Deere", src: "/partners/john-deere.png" },
  { name: "Airports Company South Africa", src: "/partners/airports-company-sa.png" },
  { name: "Absa", src: "/partners/absa.png" },
  { name: "Valve", src: "/partners/valve.svg" },
];

/* ── Partner names (text-only trust strip) ── */

export const PARTNER_NAMES = [
  "Anglo American",
  "Toyota",
  "Standard Bank",
  "Nedbank",
  "John Deere",
  "Sasol",
  "Sappi",
  "Transnet",
  "Exxaro",
  "Implats",
];
