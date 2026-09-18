const footerLinks = [
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: "https://github.com/JJTGG" },
  { label: "X", href: "https://x.com/JAYJAYTGG" },
  { label: "Telegram", href: "https://t.me/JAYVORTEX_WEB3" }
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-semibold tracking-tight">JAYJAYTGG</p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Building ideas, systems, experiments, and whatever refuses to
              leave my head alone.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--muted)]">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} JAYJAYTGG
        </div>
      </div>
    </footer>
  );
}