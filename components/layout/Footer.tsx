import Link from "next/link";

const footerLinks = {
  Training: [
    { href: "/training", label: "Course Catalogue" },
    { href: "/accreditation", label: "Accreditation" },
    { href: "/consulting", label: "CI Consulting" },
  ],
  Services: [
    { href: "/services", label: "Overview" },
    { href: "/services/operational-excellence", label: "Operational Excellence" },
    { href: "/services/ai-systems", label: "AI Systems" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4
        className="mb-5 text-[11px] font-semibold uppercase text-white/95"
        style={{ letterSpacing: "var(--tracking-eyebrow)" }}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[14px] text-white/80 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, var(--accent-hero-bg) 0%, var(--accent-hero-bg-2) 100%)",
      }}
    >
      {/* Stippled dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.75) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10 lg:pt-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-12">
          {/* Brand block — spans 2 cols on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-white font-semibold text-xl tracking-tight hover:text-white/80 transition-colors"
            >
              2KO
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/75">
              Making operational improvement permanent through Six Sigma training, CI consulting, and AI-powered management systems.
            </p>
            <span
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase text-white/85"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              SETA-Aligned
            </span>
          </div>

          <FooterColumn title="Training" links={footerLinks.Training} />
          <FooterColumn title="Services" links={footerLinks.Services} />
          <FooterColumn title="Company" links={footerLinks.Company} />

          {/* Get in Touch */}
          <div>
            <h4
              className="mb-4 text-[11px] font-semibold uppercase text-white/95"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:info@2ko.co.za"
                  className="text-[14px] font-medium text-[var(--accent-highlight)] hover:text-white transition-colors"
                >
                  info@2ko.co.za
                </a>
              </li>
              <li>
                <span className="text-[14px] text-white/70">South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-[12px] text-white/65">
            &copy; {new Date().getFullYear()} 2KO. All rights reserved.
          </p>
          <a
            href="mailto:info@2ko.co.za"
            className="text-[12px] text-white/65 hover:text-white transition-colors"
          >
            info@2ko.co.za
          </a>
        </div>
      </div>
    </footer>
  );
}
