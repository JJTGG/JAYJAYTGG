const navigation = [
  { label: "Work", href: "/work" },
  { label: "TGG HUB", href: "/tgg-hub" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="/" className="font-semibold tracking-tight">
            JAYJAYTGG
          </a>

          <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-5 py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Builder / Developer / Experimenter
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl md:text-8xl">
            I build ideas into things that actually exist.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Developer, builder, and persistent experimenter. I turn ideas
            into products, systems, and whatever else refuses to leave my
            head alone.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/work"
              className="border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              See what I&apos;ve built
            </a>

            <a
              href="/about"
              className="border border-[var(--line)] px-5 py-3 text-sm text-[var(--muted)] transition-colors hover:border-[var(--muted)] hover:text-[var(--foreground)]"
            >
              About me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}