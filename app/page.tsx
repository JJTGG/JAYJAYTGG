const navigation = [
  { label: "Work", href: "/work" },
  { label: "TGG HUB", href: "/tgg-hub" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const currentWork = [
  {
    name: "AI Arena",
    description: "A multi-model AI workspace for running and comparing different AI providers.",
    href: "https://ai-arena-red.vercel.app/"
  },
  {
    name: "Trading Tools",
    description: "A trading decision-support platform built around calculators, risk tools, market data, and analytics.",
    href: "https://trading-tools-xi.vercel.app/"
  },
  {
    name: "TGG HUB",
    description: "The ecosystem connecting the products, experiments, and systems I'm building.",
    href: "https://tgg-hub.vercel.app/"
  }
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

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Current work
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Things I&apos;m building.
              </h2>
            </div>

            <a
              href="/work"
              className="hidden text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] sm:block"
            >
              View all work →
            </a>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {currentWork.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-[var(--background)] p-6 transition-colors hover:bg-[#0b0f15]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">
                    {project.name}
                  </h3>

                  <span className="text-[var(--muted)] transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>
              </a>
            ))}
          </div>

          <a
            href="/work"
            className="mt-6 inline-block text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)] sm:hidden"
          >
            View all work →
          </a>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                TGG HUB
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                The system behind the things I build.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[var(--muted)]">
                TGG HUB started as a name for the things I was building.
                It&apos;s becoming the system that connects them.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Projects can stand on their own while still belonging to a
                larger ecosystem. Some are products, some are experiments,
                and some exist simply because I wanted to see if an idea
                could work.
              </p>

              <a
                href="https://tgg-hub.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--muted)]"
              >
                Explore TGG HUB ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}