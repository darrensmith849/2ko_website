export interface BeltCourse {
  slug: string;
  level: string;
  tagline: string;
  duration: string;
  delivery: string[];
  description: string;
  outcomes: string[];
  forWho: string;
  isFree?: boolean;
}

export const beltCourses: BeltCourse[] = [
  {
    slug: "white-belt",
    level: "White Belt",
    tagline: "Start here — free",
    duration: "Online, self-paced",
    delivery: ["Online (on-demand)"],
    description:
      "A free introductory course covering the fundamentals of Six Sigma and the DMAIC methodology. The ideal starting point for anyone new to structured improvement.",
    outcomes: [
      "Understand the Six Sigma framework and DMAIC cycle",
      "Identify the different belt levels and career pathways",
      "Recognise waste and variation in everyday processes",
      "Prepare for Yellow Belt certification",
    ],
    forWho: "Anyone — no prerequisites. Open to individuals and teams.",
    isFree: true,
  },
  {
    slug: "yellow-belt",
    level: "Yellow Belt",
    tagline: "Foundation awareness",
    duration: "2 days",
    delivery: ["Online", "Virtual (instructor-led)", "Classroom"],
    description:
      "Foundation-level awareness training for team members and managers. Covers the DMAIC framework, waste identification, and how to participate effectively in improvement projects.",
    outcomes: [
      "Apply the DMAIC framework to real workplace problems",
      "Identify and classify the 8 wastes in any process",
      "Contribute meaningfully to Green and Black Belt projects",
      "Build a personal improvement mindset",
    ],
    forWho: "Team members, supervisors, and managers who participate in or support improvement projects.",
  },
  {
    slug: "green-belt",
    level: "Green Belt",
    tagline: "Practitioner certification",
    duration: "5 days + project",
    delivery: ["Online", "Virtual (instructor-led)", "Classroom"],
    description:
      "Practitioner-level certification. Participants lead their own improvement project during the programme. Covers full DMAIC, statistical tools, root-cause analysis, and process capability techniques.",
    outcomes: [
      "Lead a full DMAIC improvement project from define to control",
      "Apply statistical analysis and root-cause analysis tools",
      "Use process mapping, capability analysis, and hypothesis testing",
      "Deliver measurable operational and financial outcomes",
    ],
    forWho: "Process owners, engineers, analysts, and mid-level managers who will lead improvement projects.",
  },
  {
    slug: "black-belt",
    level: "Black Belt",
    tagline: "Advanced leadership",
    duration: "10+ days + project",
    delivery: ["Virtual (instructor-led)", "Classroom"],
    description:
      "Advanced certification for operational leaders who will drive and coach multiple projects. Covers advanced statistics, design of experiments, programme management, and organisational change.",
    outcomes: [
      "Coach and mentor Green Belt candidates and project teams",
      "Design and manage multi-project improvement programmes",
      "Apply advanced statistical methods and design of experiments",
      "Drive organisational change and sustain gains at scale",
    ],
    forWho: "Senior managers, CI leaders, and operational directors who will own the improvement programme.",
  },
  {
    slug: "root-cause-analysis",
    level: "Root Cause Analysis",
    tagline: "Specialist module",
    duration: "2 days",
    delivery: ["Online", "Virtual (instructor-led)", "Classroom"],
    description:
      "A focused module on structured root-cause analysis techniques. Applicable as a standalone course or as a complement to any belt programme. Ideal for teams that need to stop treating symptoms and start solving problems permanently.",
    outcomes: [
      "Apply fishbone, 5-Why, fault tree, and Pareto analysis",
      "Distinguish between symptoms, proximate causes, and root causes",
      "Design corrective actions that prevent recurrence",
      "Build a root-cause culture within your team",
    ],
    forWho: "Quality managers, engineers, safety officers, and anyone responsible for incident investigation or corrective action.",
  },
];

export const deliveryModes = [
  {
    mode: "Online",
    description: "Self-paced, on-demand eLearning. Study at your own speed, anywhere.",
  },
  {
    mode: "Virtual (instructor-led)",
    description: "Live sessions via Teams or Zoom. Real-time interaction with expert facilitators.",
  },
  {
    mode: "Classroom",
    description: "In-person delivery in Johannesburg, Cape Town, Durban, Pretoria, and Port Elizabeth.",
  },
];

export const trainingLocations = [
  "Johannesburg",
  "Cape Town",
  "Durban",
  "Pretoria",
  "Port Elizabeth",
];
