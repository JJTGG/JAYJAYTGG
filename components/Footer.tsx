
const internalLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/work" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "TGG HUB", href: "/tgg-hub" },
  { label: "Contact", href: "/contact" }
];

const externalLinks = [
  { label: "GitHub", href: "https://github.com/JJTGG" },
  { label: "X", href: "https://x.com/JAYJAYTGG" },
  { label: "Telegram", href: "https://t.me/JAYVORTEX_WEB3" }
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)]">
      <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <div className="max-w-md">
            <a
              href="/"
              aria-label="JAYJAYTGG home"
              className="inline-flex text-lg font-bold tracking-[-0.05em] transition-colors hover:text-[var(--accent)]"
            >
              JAYJAYTGG
            </a>

            <p className="mt-5 max-w-sm text-xl font-medium leading-8 tracking-tight sm:text-2xl">
              I build ideas into things that actually exist.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
              An independent collection of products, developing systems,
              and experiments at different stages of becoming real.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer site navigation">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Explore
              </h2>

              <ul className="mt-5 space-y-3">
                {internalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex text-sm transition-colors hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="External links">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Elsewhere
              </h2>

              <ul className="mt-5 space-y-3">
                {externalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs leading-6 text-[var(--muted)] sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JAYJAYTGG</p>

          <p>Built independently. Still taking shape.</p>
        </div>
      </div>
    </footer>
  );
}
