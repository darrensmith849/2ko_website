export interface CaseStudy {
  id: string;
  industry: string;
  company: string;
  problem: string;
  approach: string;
  result: string;
  tags: ("training" | "systems" | "consulting")[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    industry: "Banking",
    company: "Major South African Bank",
    problem: "Loan processing cycle time averaging 18 days, well above the 5-day target, causing customer churn and competitive disadvantage.",
    approach: "Green Belt cohort deployed on DMAIC project targeting the five highest-variance sub-processes. Root-cause analysis revealed three rework loops caused by incomplete upfront documentation.",
    result: "Cycle time reduced to 6 days within 90 days of project close. Rework rate dropped 74%. Improvement sustained over 18 months with AI-monitored dashboards.",
    tags: ["training", "systems"],
  },
  {
    id: "cs-02",
    industry: "Mining",
    company: "Gold Mining Operation",
    problem: "Equipment downtime costing approximately R12m per month. Maintenance team responding reactively; no predictive framework in place.",
    approach: "Black Belt-led project combined FMEA analysis with IoT sensor integration to create a predictive maintenance scoring model.",
    result: "Unplanned downtime reduced by roughly 62% in the first operating quarter. Annualised savings in the multi-million rand range were reviewed with finance stakeholders.",
    tags: ["training", "systems"],
  },
  {
    id: "cs-03",
    industry: "Logistics",
    company: "National Freight Carrier",
    problem: "On-time delivery performance at 71% against a contractual 95% SLA, risking key contract renewal.",
    approach: "Rapid Yellow Belt deployment across 40 depot supervisors. Process mapping identified handover failures as the primary cause. New handover protocol designed and embedded.",
    result: "OTD performance reached 93% within 60 days. Contract renewed. Protocol now forms part of onboarding for all new depot staff.",
    tags: ["training", "consulting"],
  },
  {
    id: "cs-04",
    industry: "Manufacturing",
    company: "Automotive Components Manufacturer",
    problem: "First-pass yield at 81% on a high-volume line, generating significant scrap and customer warranty claims.",
    approach: "Six Sigma Green Belt project using statistical process control to identify the three variables responsible for 80% of defect variation.",
    result: "First-pass yield improved to 96.4%. Scrap costs reduced by R6.2m annually. Two operators promoted to internal Six Sigma champions.",
    tags: ["training"],
  },
  {
    id: "cs-05",
    industry: "Insurance",
    company: "Short-Term Insurance Provider",
    problem: "Claims processing backlog growing 15% month-on-month. Staff overtime at maximum capacity with no throughput improvement.",
    approach: "Value-stream mapping revealed 40% of processing time was non-value-adding waiting. AI-assisted workflow routing implemented to prioritise claims by complexity.",
    result: "Backlog cleared within 45 days of going live. Processing throughput increased 38% with no additional headcount.",
    tags: ["consulting", "systems"],
  },
  {
    id: "cs-06",
    industry: "Utilities",
    company: "Regional Water Authority",
    problem: "Customer complaint rate 3x industry benchmark. Root causes dispersed across multiple departments, with no single owner.",
    approach: "Cross-functional Black Belt project with executive sponsor. Complaint classification revealed billing errors and response-time failures accounted for 78% of complaints.",
    result: "Complaint rate reduced 67% in six months. Billing accuracy now tracked via an AI dashboard reviewed weekly by the COO.",
    tags: ["training", "systems"],
  },
  {
    id: "cs-07",
    industry: "Retail",
    company: "FMCG Retail Chain",
    problem: "Stock-out rate of 8.3% on top-selling SKUs, directly suppressing revenue and customer satisfaction scores.",
    approach: "Lean project combined inventory flow analysis with demand-signal modelling. Reorder logic rebuilt using actual consumption data rather than periodic ordering.",
    result: "Stock-out rate reduced to 1.9%. Working capital tied up in slow-moving inventory reduced by R4.1m.",
    tags: ["consulting"],
  },
  {
    id: "cs-08",
    industry: "Healthcare",
    company: "Private Hospital Group",
    problem: "Theatre utilisation at 61%, well below the 85% target. Scheduling inefficiencies and late starts identified as key contributors.",
    approach: "Six Sigma project with a team of theatre managers, anaesthetists, and scheduling staff. Time-trap analysis revealed consistent patterns in late equipment delivery.",
    result: "Theatre utilisation increased to 82% within four months. Procedure capacity expanded by 340 cases per month with no capital expenditure.",
    tags: ["training", "consulting"],
  },
  {
    id: "cs-09",
    industry: "Telecommunications",
    company: "Mobile Network Operator",
    problem: "Network fault resolution time averaging 4.2 hours, contributing to materially lower customer satisfaction.",
    approach: "AI-assisted fault-classification system implemented to route incidents to the correct specialist team automatically. Green Belt cohort trained on the NOC floor.",
    result: "Mean time to resolve dropped to 1.8 hours. NPS improved by 14 points over the following quarter.",
    tags: ["training", "systems"],
  },
  {
    id: "cs-10",
    industry: "Agriculture",
    company: "Commercial Farming Operation",
    problem: "Post-harvest losses running at 19%, significantly above the 7% industry norm, eroding margin.",
    approach: "Lean value-stream analysis traced loss points across harvest, sorting, cold-chain, and distribution. Three systemic failure modes identified.",
    result: "Post-harvest losses reduced to 8.1%. Estimated annual margin recovery of R3.8m. Process standards now enforced via a custom AI monitoring dashboard.",
    tags: ["consulting", "systems"],
  },
  {
    id: "cs-11",
    industry: "Government",
    company: "Provincial Government Department",
    problem: "Document processing turnaround time of 47 days against a regulatory target of 21 days. Facing audit findings and public scrutiny.",
    approach: "Full Yellow Belt cohort deployment across 60 officials. DMAIC project identified handoff failures and approval bottlenecks as root causes.",
    result: "Turnaround time reduced to 19 days, beating the regulatory target. The department passed its next audit without major findings related to processing time.",
    tags: ["training", "consulting"],
  },
  {
    id: "cs-12",
    industry: "Energy",
    company: "Independent Power Producer",
    problem: "Safety incident rate 40% above sector benchmark. Investigations repeatedly identified procedural non-compliance as the root cause.",
    approach: "Black Belt project integrating behavioural safety analysis with operational procedure redesign. AI monitoring system flagged deviations from high-risk procedures in real time.",
    result: "Safety incident rate reduced by around 58% in the first year. No lost-time injuries were reported in the 12 months following implementation.",
    tags: ["training", "systems"],
  },
];
