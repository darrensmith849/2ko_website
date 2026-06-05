import Link from "next/link";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
  tint?: "six-sigma" | "systems" | "sigmafy";
};

const divisions: FooterLink[] = [
  { href: "/six-sigma", label: "Six Sigma South Africa", tint: "six-sigma" },
  { href: "/systems",   label: "2KO Systems",            tint: "systems" },
  { href: "/sigmafy",   label: "Sigmafy",                tint: "sigmafy" },
];

const group: FooterLink[] = [
  { href: "/about",         label: "About the group" },
  { href: "/case-studies",  label: "Case studies" },
  { href: "/contact",       label: "Contact" },
];

const visitSites: FooterLink[] = [
  { href: "https://sixsigmasouthafrica.co.za", label: "sixsigmasouthafrica.co.za", external: true },
  { href: "https://2kosystems.co.za",          label: "2kosystems.co.za",          external: true },
  { href: "https://sigmafy.com",               label: "sigmafy.com",               external: true },
];

function LinkItem({ link }: { link: FooterLink }) {
  const classes = `text-muted text-sm transition-colors ${
    link.tint
      ? "hover:text-tint"
      : "hover:text-text"
  }`;
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {link.label}
        <span aria-hidden className="ml-1 text-muted2">↗</span>
      </a>
    );
  }
  return (
    <Link href={link.href} className={classes}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Link
            href="/"
            className="text-text font-semibold text-lg mb-3 block hover:text-accent transition-colors"
          >
            2KO Africa
          </Link>
          <p className="text-muted text-sm max-w-xs leading-relaxed">
            The umbrella group behind Six Sigma South Africa, 2KO Systems and Sigmafy. Operational excellence, made permanent — across Africa, since 1998.
          </p>
        </div>

        <div>
          <p className="text-muted2 text-xs font-semibold uppercase tracking-widest mb-4">
            Divisions
          </p>
          <ul className="flex flex-col gap-3">
            {divisions.map((link) => (
              <li key={link.href} data-tint={link.tint}>
                <LinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-muted2 text-xs font-semibold uppercase tracking-widest mb-4">
            The group
          </p>
          <ul className="flex flex-col gap-3">
            {group.map((link) => (
              <li key={link.href}>
                <LinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-muted2 text-xs font-semibold uppercase tracking-widest mb-4">
            Visit a site
          </p>
          <ul className="flex flex-col gap-3">
            {visitSites.map((link) => (
              <li key={link.href}>
                <LinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted2 text-sm">
            &copy; {new Date().getFullYear()} The 2KO Group. All rights reserved.
          </p>
          <a
            href="mailto:contact@2ko.co.za"
            className="text-muted text-sm hover:text-accent transition-colors"
          >
            contact@2ko.co.za
          </a>
        </div>
      </div>
    </footer>
  );
}
