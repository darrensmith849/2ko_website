import Link from "next/link";

const footerLinks = {
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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/" className="text-text font-semibold text-lg mb-3 block hover:text-accent transition-colors">
            2KO
          </Link>
          <p className="text-muted text-sm max-w-xs leading-relaxed">
            Making operational improvement permanent through Six Sigma mastery and AI-powered management systems.
          </p>
        </div>
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <p className="text-muted2 text-xs font-semibold uppercase tracking-widest mb-4">
              {section}
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted2 text-sm">
            © {new Date().getFullYear()} 2KO. All rights reserved.
          </p>
          <a
            href="mailto:info@2ko.co.za"
            className="text-muted text-sm hover:text-accent transition-colors"
          >
            info@2ko.co.za
          </a>
        </div>
      </div>
    </footer>
  );
}
