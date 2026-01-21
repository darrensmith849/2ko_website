// bootstrap.mjs
// One-file scaffold generator for the 2KO redesign.
// Safe by default: refuses to overwrite existing files unless you pass --force.
//
// Usage:
//   node bootstrap.mjs
//   node bootstrap.mjs --force
//
// Then:
//   npm install
//   npm run dev

import fs from "node:fs";
import path from "node:path";

const FORCE = process.argv.includes("--force");
const ROOT = process.cwd();

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(relPath, content) {
  const absPath = path.join(ROOT, relPath);
  const dir = path.dirname(absPath);
  ensureDir(dir);

  if (!FORCE && fs.existsSync(absPath)) {
    console.log(`SKIP (exists): ${relPath}`);
    return;
  }

  fs.writeFileSync(absPath, content, "utf8");
  console.log(`WRITE: ${relPath}`);
}

function json(obj) {
  return JSON.stringify(obj, null, 2) + "\n";
}

function main() {
  // --- Root files ---
  writeFile(
    "package.json",
    json({
      name: "2ko-website-redesign",
      private: true,
      version: "0.1.0",
      type: "module",
      scripts: {
        dev: "next dev --turbo",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        next: "16.1.4",
        react: "19.2.3",
        "react-dom": "19.2.3",
      },
      devDependencies: {
        "@types/node": "^22.0.0",
        "@types/react": "^19.0.0",
        "@types/react-dom": "^19.0.0",
        autoprefixer: "^10.4.20",
        eslint: "^9.0.0",
        "eslint-config-next": "16.1.4",
        postcss: "^8.4.49",
        tailwindcss: "^3.4.17",
        typescript: "^5.7.0",
      },
    })
  );

  writeFile(
    "README.md",
    `# 2KO Website Redesign (Next.js)

## Run locally
1. \`npm install\`
2. \`npm run dev\`
3. Open \`http://localhost:3000\`

## Content editing
Most copy + navigation lives in \`src/content/site.ts\`.
Replace placeholders with real stats and verified case studies before launch.

## Deployment
Railway/Vercel ready.
- Build: \`npm run build\`
- Start: \`npm run start\`
`
  );

  writeFile(
    "next.config.mjs",
    `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
`
  );

  writeFile(
    "tsconfig.json",
    `{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "types": ["node"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
`
  );

  writeFile(
    "postcss.config.mjs",
    `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`
  );

  writeFile(
    "tailwind.config.ts",
    `import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
`
  );

  writeFile(
    "next-env.d.ts",
    `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
`
  );

  // --- Styles ---
  writeFile(
    "src/app/globals.css",
    `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

body {
  @apply bg-white text-slate-900;
}

.container-page {
  @apply mx-auto w-full max-w-6xl px-4;
}

.link {
  @apply underline underline-offset-4 hover:opacity-80;
}
`
  );

  // --- Content ---
  writeFile(
    "src/content/site.ts",
    `export type NavItem = { label: string; href: string };

export const site = {
  name: "2KO Group",
  domain: "2ko.co.za",
  tagline: "Operational excellence + accredited capability + software delivery.",
  hero: {
    headline: "Build repeatable performance — and prove it.",
    subheadline:
      "2KO Africa is the accreditation body. Six Sigma South Africa delivers training and advisory. Impart Agency builds the systems and software that make improvements stick.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "View success", href: "/case-studies" },
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "What we do", href: "/what-we-do" },
    { label: "Accreditation", href: "/accreditation" },
    { label: "Success", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  pillars: [
    {
      title: "2KO Africa",
      eyebrow: "Accreditation body",
      description:
        "Internationally recognised Lean & Six Sigma accreditation and recognition of prior learning (RPL) across Africa.",
      href: "/accreditation",
      bullets: ["Accreditation & RPL", "Standards & governance", "Partner vetting"],
    },
    {
      title: "Six Sigma South Africa™",
      eyebrow: "Training + advisory partner",
      description:
        "The primary delivery partner for Lean & Six Sigma training and continuous improvement advisory on the continent.",
      href: "/six-sigma-south-africa",
      bullets: ["Training (belt pathways)", "Coaching + consulting", "Enterprise enablement"],
    },
    {
      title: "Impart Agency",
      eyebrow: "Digital delivery subsidiary",
      description:
        "Bespoke systems, software and automation to embed operational excellence into day-to-day work.",
      href: "/impart-agency",
      bullets: ["Internal tools", "Client portals", "Automation + reporting"],
    },
  ],
  proof: {
    headline: "Proven in complex environments",
    stats: [
      { label: "Blue-chip clients", value: "300+" },
      { label: "Delegates up-skilled", value: "50,000+" },
      { label: "Course catalogue", value: "50+" },
    ],
    clients: [
      "Standard Bank",
      "Sappi",
      "DHL",
      "Toyota",
      "Transnet",
      "SARS",
      "Chevron",
      "Nedbank",
    ],
  },
  contact: {
    email: "[email protected]",
    phone: "+27 21 527 0065",
  },
} as const;

export const placeholders = {
  caseStudies: [
    {
      title: "Example: Turnaround in a high-variation operation",
      industry: "Manufacturing",
      outcomes: ["-30% defects", "+18% throughput", "Payback < 90 days"],
      href: "/case-studies/example-turnaround",
    },
    {
      title: "Example: Finance process stabilisation",
      industry: "Financial services",
      outcomes: ["-40% rework", "-25% cycle time", "Improved auditability"],
      href: "/case-studies/example-finance",
    },
  ],
} as const;
`
  );

  // --- Components ---
  writeFile(
    "src/components/Section.tsx",
    `import type { ReactNode } from "react";

export function Section(props: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  const { eyebrow, title, description, children } = props;

  return (
    <section className="py-14">
      <div className="container-page">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold tracking-wide text-slate-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
          {description ? (
            <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
`
  );

  writeFile(
    "src/components/Card.tsx",
    `import Link from "next/link";
import type { ReactNode } from "react";

export function Card(props: {
  title: string;
  eyebrow?: string;
  description?: string;
  href?: string;
  children?: ReactNode;
}) {
  const { title, eyebrow, description, href, children } = props;

  const Wrapper = href ? Link : ("div" as any);
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300"
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-wide text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
      {href ? (
        <div className="mt-5 text-sm font-semibold text-slate-900">
          Learn more <span className="inline-block transition group-hover:translate-x-0.5">→</span>
        </div>
      ) : null}
    </Wrapper>
  );
}
`
  );

  writeFile(
    "src/components/Header.tsx",
    `import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
`
  );

  writeFile(
    "src/components/Footer.tsx",
    `import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{site.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/legal/privacy" className="hover:text-slate-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-slate-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              <a className="link" href={\`mailto:\${site.contact.email}\`}>
                {site.contact.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              <a className="link" href={\`tel:\${site.contact.phone.replace(/\\s+/g, "")}\`}>
                {site.contact.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
`
  );

  writeFile(
    "src/components/Hero.tsx",
    `import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-slate-500">
            {site.tagline}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {site.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={site.hero.primaryCta.href}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              {site.hero.primaryCta.label}
            </Link>
            <Link
              href={site.hero.secondaryCta.href}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400"
            >
              {site.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
`
  );

  writeFile(
    "src/components/Stats.tsx",
    `import { site } from "@/content/site";

export function Stats() {
  return (
    <section className="py-10">
      <div className="container-page">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-3">
          {site.proof.stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-semibold tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`
  );

  writeFile(
    "src/components/LogoCloud.tsx",
    `import { site } from "@/content/site";

export function LogoCloud() {
  return (
    <section className="py-10">
      <div className="container-page">
        <p className="text-sm font-semibold text-slate-500">Selected clients</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {site.proof.clients.map((name) => (
            <span
              key={name}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
`
  );

  // --- App Router layout + pages (Next.js app directory conventions) ---
  // Pages + layouts in App Router are created via /app segments with layout.tsx and page.tsx. :contentReference[oaicite:1]{index=1}
  writeFile(
    "src/app/layout.tsx",
    `import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: \`%s | \${site.name}\`,
  },
  description: site.tagline,
  metadataBase: new URL(\`https://\${site.domain}\`),
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: \`https://\${site.domain}\`,
    siteName: site.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`
  );

  writeFile(
    "src/app/page.tsx",
    `import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { site } from "@/content/site";
import { Stats } from "@/components/Stats";
import { LogoCloud } from "@/components/LogoCloud";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Clarity by design"
        title="One group. Three specialised engines."
        description="We separate standards, delivery, and technology — so your improvement journey stays credible, repeatable and measurable."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {site.pillars.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              eyebrow={p.eyebrow}
              description={p.description}
              href={p.href}
            >
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof"
        title={site.proof.headline}
        description="Swap placeholders with your actual audited metrics before launch."
      />
      <Stats />
      <LogoCloud />

      <Section
        eyebrow="Start here"
        title="Tell us what you’re trying to achieve"
        description="We’ll route you to the right team: accreditation, training/advisory, or software delivery."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Contact the group
          </a>
          <a
            href="/what-we-do"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400"
          >
            Explore services
          </a>
        </div>
      </Section>
    </>
  );
}
`
  );

  const pageTemplate = (eyebrow, title, description) => `import { Section } from "@/components/Section";

export default function Page() {
  return (
    <>
      <Section eyebrow="${eyebrow}" title="${title}" description="${description}" />

      <Section
        title="Content placeholders"
        description="Replace these sections with your final copy, proof points, and visuals."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Add page-specific hero image or illustration</li>
            <li>Add structured content blocks per the content plan</li>
            <li>Add CTA(s) relevant to this page</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
`;

  writeFile("src/app/about/page.tsx", pageTemplate(
    "About",
    "Who we are",
    "2KO Africa sets the standards. Six Sigma South Africa delivers training and advisory. Impart Agency builds the systems and software that embed the work."
  ));

  writeFile("src/app/what-we-do/page.tsx", pageTemplate(
    "What we do",
    "Outcomes-first improvement, delivered end-to-end",
    "Training, advisory and systems delivery — organised as clear, specialised tracks."
  ));

  writeFile("src/app/accreditation/page.tsx", pageTemplate(
    "Accreditation",
    "Accreditation that stands up to scrutiny",
    "Internationally recognised standards, evidence-based certification, and recognition of prior learning (RPL)."
  ));

  writeFile("src/app/six-sigma-south-africa/page.tsx", pageTemplate(
    "Six Sigma South Africa™",
    "Training + business advisory delivery partner",
    "Belt pathways, coaching and consulting — delivered by a specialist team aligned to 2KO’s standards."
  ));

  writeFile("src/app/impart-agency/page.tsx", pageTemplate(
    "Impart Agency",
    "Systems and software that make improvement stick",
    "Bespoke digital solutions: automation, reporting, internal tools and client-facing portals."
  ));

  writeFile(
    "src/app/case-studies/page.tsx",
    `import { Section } from "@/components/Section";
import { placeholders } from "@/content/site";
import { Card } from "@/components/Card";

export default function CaseStudiesPage() {
  return (
    <>
      <Section
        eyebrow="Success"
        title="Case studies"
        description="Replace these placeholders with your real client stories, verified outcomes, and deliverables."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {placeholders.caseStudies.map((cs) => (
            <Card
              key={cs.href}
              title={cs.title}
              eyebrow={cs.industry}
              description={cs.outcomes.join(" • ")}
              href={cs.href}
            />
          ))}
        </div>
      </Section>

      <Section
        title="How we’ll format every case study"
        description="Consistent structure makes the site feel premium, and makes proof scannable."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-600">
            <li>Context + constraints</li>
            <li>Baseline metrics</li>
            <li>Approach (method + governance)</li>
            <li>Delivered changes (process + tech)</li>
            <li>Results (before/after + timeframe)</li>
            <li>Evidence (sign-off / testimonial / audit-friendly artefacts)</li>
          </ol>
        </div>
      </Section>
    </>
  );
}
`
  );

  writeFile("src/app/case-studies/example-turnaround/page.tsx", pageTemplate(
    "Case study (placeholder)",
    "Turnaround in a high-variation operation",
    "Replace with the client, timeline, baseline, and quantified outcome."
  ));

  writeFile("src/app/case-studies/example-finance/page.tsx", pageTemplate(
    "Case study (placeholder)",
    "Finance process stabilisation",
    "Replace with the client, timeline, baseline, and quantified outcome."
  ));

  writeFile(
    "src/app/contact/page.tsx",
    `import { Section } from "@/components/Section";
import { site } from "@/content/site";

const enquiryTypes = [
  { label: "Accreditation & RPL", value: "accreditation" },
  { label: "Training / Advisory (Six Sigma South Africa)", value: "training_advisory" },
  { label: "Software / Systems (Impart Agency)", value: "software" },
  { label: "Partnership / Collaboration", value: "partner" },
  { label: "Other", value: "other" },
];

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Get in touch"
        description="This form uses mailto for now. For production, swap to a form endpoint or CRM API route."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            action={\`mailto:\${site.contact.email}\`}
            method="post"
            encType="text/plain"
          >
            <label className="block">
              <span className="text-sm font-semibold">Name</span>
              <input
                name="name"
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-semibold">Email</span>
              <input
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-semibold">Enquiry type</span>
              <select
                name="enquiry_type"
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              >
                {enquiryTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                name="message"
                rows={6}
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Send
            </button>

            <p className="mt-3 text-xs text-slate-500">
              Recommended: wire to Formspree or a Next.js route to avoid mailto limitations.
            </p>
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold">Direct contact</p>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              <a className="link" href={\`mailto:\${site.contact.email}\`}>
                {site.contact.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              <a className="link" href={\`tel:\${site.contact.phone.replace(/\\s+/g, "")}\`}>
                {site.contact.phone}
              </a>
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold">Routing rules (recommended)</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Accreditation → 2KO Africa</li>
                <li>Training/advisory → Six Sigma South Africa</li>
                <li>Systems/software → Impart Agency</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
`
  );

  writeFile("src/app/legal/privacy/page.tsx", pageTemplate(
    "Legal",
    "Privacy policy (placeholder)",
    "Replace with your actual privacy policy, POPIA compliance wording, and data handling disclosures."
  ));

  writeFile("src/app/legal/terms/page.tsx", pageTemplate(
    "Legal",
    "Terms of service (placeholder)",
    "Replace with your actual terms and conditions."
  ));

  console.log("\n✅ Scaffold complete.");
  console.log("Next steps:");
  console.log("  npm install");
  console.log("  npm run dev\n");
}

main();
