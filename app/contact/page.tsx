const contactLinks = [
  {
    label: "Telegram",
    value: "@JAYVORTEX_WEB3",
    href: "https://t.me/JAYVORTEX_WEB3"
  },
  {
    label: "X",
    value: "@JAYJAYTGG",
    href: "https://x.com/JAYJAYTGG"
  },
  {
    label: "GitHub",
    value: "JJTGG",
    href: "https://github.com/JJTGG"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Contact
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Let&apos;s talk.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            If you want to talk about something I&apos;m building, a project,
            or an idea worth exploring, you can find me here.
          </p>
        </div>

        <div className="mt-20 max-w-2xl border border-[var(--line)]">
          {contactLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-[#0b0f15] ${
                index !== contactLinks.length - 1
                  ? "border-b border-[var(--line)]"
                  : ""
              }`}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                  {link.label}
                </p>

                <p className="mt-2 font-medium">
                  {link.value}
                </p>
              </div>

              <span className="text-[var(--muted)] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}