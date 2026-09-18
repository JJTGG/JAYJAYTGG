const footerLinks = [
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

          <div className="flex gap-5 text-sm text-[var(--muted)]">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>JAYJAYTGG</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}