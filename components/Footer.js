import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/operator-review", label: "Operator Review" },
  { href: "/apply", label: "Apply for Onboarding" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-w section-pad !py-16 md:!py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-base font-semibold tracking-[0.04em] uppercase">
              We Clean ABA™
            </p>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted">
              Controlled environments for growing ABA organizations.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@wecleanaba.com"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-foreground">
              Credentials
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>AHE / CSCT-T</li>
              <li>Bloodborne Pathogens Training</li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>
                <a
                  href="tel:+1"
                  className="transition-colors hover:text-foreground"
                >
                  [Phone]
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@wecleanaba.com"
                  className="transition-colors hover:text-foreground"
                >
                  [Email]
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 We Clean ABA. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
