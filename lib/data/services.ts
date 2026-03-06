export interface Service {
  slug: string;
  title: string;
  tagline: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  bullets: string[];
  forWho: string[];
  process?: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "operational-excellence",
    title: "Operational Excellence",
    shortTitle: "Op-Ex",
    tagline: "Six Sigma, applied.",
    icon: "⚙️",
    description:
      "We train your people in Lean Six Sigma, then embed the disciplines into how your organisation actually works — so gains don't slip back.",
    longDescription:
      "Most improvement programmes produce results, then fade. The gains are real but the new standard never becomes the default. 2KO works differently: we train your people to a certified standard, run live projects against your real operational problems, and then anchor the methodology into your management system so it sustains itself.",
    bullets: [
      "Lean Six Sigma Yellow, Green, and Black Belt certification",
      "Live improvement projects with measurable ROI",
      "Management-system design that embeds the gains",
      "Facilitator and champion development programmes",
      "ISO and standards-alignment support",
    ],
    forWho: [
      "Large manufacturers with persistent quality or yield problems",
      "Banks and insurers reducing process cycle times",
      "Logistics and supply-chain operations",
      "Any organisation where the same problems keep recurring",
    ],
    process: [
      {
        title: "Diagnose",
        description: "We map your current state and quantify the gap between what is and what should be.",
      },
      {
        title: "Design",
        description: "We co-create the training programme and project selection with your leadership.",
      },
      {
        title: "Deploy",
        description: "Belt programmes run alongside live improvement projects, so learning is immediately applied.",
      },
      {
        title: "Embed",
        description: "New standards are written into SOPs, KPIs, and management routines.",
      },
      {
        title: "Sustain",
        description: "An AI-assisted management layer monitors adherence and flags drift before it compounds.",
      },
    ],
  },
  {
    slug: "ai-systems",
    title: "AI Systems",
    shortTitle: "AI Systems",
    tagline: "Systems that enforce the standard.",
    icon: "🤖",
    description:
      "We build AI-powered management systems that embed your operational standards into daily workflows — so improvements hold and scale.",
    longDescription:
      "Training raises the bar. AI systems keep people at it. We design and implement custom AI-assisted management layers that sit on top of your existing processes — reading your data, surfacing anomalies, and prompting the right action from the right person at the right time.",
    bullets: [
      "Custom AI monitoring dashboards tailored to your KPIs",
      "Real-time anomaly detection and deviation alerts",
      "Automated reporting that replaces manual status updates",
      "Integration with ERP, MES, and HRIS platforms",
      "Explainable outputs — no black-box decision making",
    ],
    forWho: [
      "Organisations post Six Sigma training that want to lock in gains",
      "Operations leaders frustrated by manual reporting overhead",
      "Teams where the same issues recur despite corrective action",
      "Executives who need real-time operational visibility",
    ],
    process: [
      {
        title: "Audit",
        description: "We map your data sources, reporting gaps, and the management behaviours you want to reinforce.",
      },
      {
        title: "Architect",
        description: "We design the AI system around your actual workflows — not a generic template.",
      },
      {
        title: "Build",
        description: "We build the monitoring layer, integrate data feeds, and configure alerting logic.",
      },
      {
        title: "Pilot",
        description: "A controlled rollout with your team to validate signal quality and refine thresholds.",
      },
      {
        title: "Scale",
        description: "Full deployment with training for your managers and ongoing support.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
