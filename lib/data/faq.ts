export interface FAQ {
  question: string;
  answer: string;
  category?: "general" | "training" | "ai-systems" | "consulting";
}

export const faqs: FAQ[] = [
  // General
  {
    question: "What makes 2KO different from a standard training provider?",
    answer:
      "Most training providers deliver the curriculum and leave. We treat training as the beginning, not the end. We run live improvement projects alongside the belt programmes, embed new standards into your management system, and then add an AI monitoring layer to keep the gains from slipping. You get capability, results, and a system that sustains both.",
    category: "general",
  },
  {
    question: "Do we need to be a large organisation to work with you?",
    answer:
      "No. We work with organisations of different sizes, from smaller specialised operators to multi-divisional listed groups. The methodology scales to the problem. What we look for is leadership commitment and a willingness to address root causes rather than symptoms.",
    category: "general",
  },
  {
    question: "Do you work in industries outside manufacturing?",
    answer:
      "Extensively. Financial services, healthcare, logistics, government, agriculture, telecoms, energy — we have run projects across all of these. Lean Six Sigma applies wherever there are repeatable processes. The sector changes; the methodology does not.",
    category: "general",
  },
  // Training
  {
    question: "What belt levels do you offer?",
    answer:
      "We offer the full Lean Six Sigma pathway: White Belt (free, online), Yellow Belt (2 days), Green Belt (5 days + project), and Black Belt (10+ days + project). We also offer a specialist Root Cause Analysis module. All programmes except White Belt are available online, via live virtual sessions, or in the classroom.",
    category: "training",
  },
  {
    question: "Is the White Belt course really free?",
    answer:
      "Yes. The White Belt is a free, self-paced online course that introduces the Six Sigma framework and DMAIC methodology. It is the recommended starting point for anyone new to structured improvement and requires no prior experience.",
    category: "training",
  },
  {
    question: "Are your certifications internationally recognised?",
    answer:
      "Our Lean Six Sigma programmes are aligned with internationally recognised quality frameworks. Our courses have been accredited through bodies including the Council for Six Sigma Certification (CSSC). Employer recognition may vary by organisation and region.",
    category: "training",
  },
  {
    question: "Can we arrange corporate or enterprise training for our teams?",
    answer:
      "Yes. We regularly deliver belt programmes as dedicated corporate cohorts, tailored to your organisation's operational context. This includes customised project selection, internal case studies, and management-system integration. Contact us to discuss format, timing, and group pricing.",
    category: "training",
  },
  {
    question: "What happens if our trained belts leave the organisation?",
    answer:
      "This is exactly why we focus on management-system embedding, not just individual certification. When the standards are written into how the organisation operates — SOPs, KPIs, management routines, AI monitoring — the capability is not locked inside one person. It is institutional. Belt turnover hurts less when the system is the carrier.",
    category: "training",
  },
  // Consulting
  {
    question: "How long does a typical consulting engagement take?",
    answer:
      "It depends on the scope. A rapid diagnostic can be completed in two weeks. A full belt deployment with management-system embedding typically runs six to twelve weeks. Ongoing retainer support is available after the core engagement. We provide a project-specific timeline during scoping.",
    category: "consulting",
  },
  {
    question: "What ROI can we expect from a CI engagement?",
    answer:
      "ROI varies by baseline, scope, and execution discipline. During scoping, we define measurable operational and financial outcomes and agree how impact will be reviewed with your finance stakeholders. We measure by outcomes, not activity.",
    category: "consulting",
  },
  // AI Systems
  {
    question: "What if our data is messy or incomplete?",
    answer:
      "This is common. Part of our diagnostic phase is identifying what data you have, what you need, and where the gaps are. We design AI systems around your current data reality, with a roadmap to improve data quality as the system matures. We do not require perfect data to start.",
    category: "ai-systems",
  },
  {
    question: "Can we just do the training without the AI systems component?",
    answer:
      "Yes. The training and improvement projects stand on their own. Many clients start with belt programmes and add the AI layer later once the operational standard is established. There is no obligation to bundle services.",
    category: "ai-systems",
  },
  {
    question: "How do your AI systems handle sensitive operational data?",
    answer:
      "We design for data minimisation and security from the start. We can deploy within your existing infrastructure — on-premise or private cloud — based on your governance requirements. Systems are designed to support POPIA and, where relevant, GDPR obligations. Data governance is part of the architecture, not an afterthought.",
    category: "ai-systems",
  },
  {
    question: "Do you offer ongoing support after the engagement ends?",
    answer:
      "Yes. We offer retainer-based support for both the operational excellence work (coaching, project reviews, champion development) and the AI systems (monitoring, model updates, new KPI configuration). Most clients take a lighter-touch retainer once the system is embedded.",
    category: "general",
  },
  {
    question: "How do we get started?",
    answer:
      "The first step is a 30-minute diagnostic conversation with one of our consultants. We ask about your key operational challenges, what you have already tried, and where you want to be. From there, we put together a scope proposal with indicative investment and expected outcomes. There is no charge for the initial conversation.",
    category: "general",
  },
];
