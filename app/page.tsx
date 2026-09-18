const currentWork = [
  {
    name: "AI Arena",
    description:
      "A workspace for running and comparing different AI models.",
    href: "https://ai-arena-red.vercel.app/"
  },
  {
    name: "Trading Tools",
    description:
      "Tools for trading decisions, risk, market data, and analysis.",
    href: "https://trading-tools-xi.vercel.app/"
  },
  {
    name: "TGG HUB",
    description:
      "The system taking shape around the things I'm building.",
    href: "/tgg-hub"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-5 py-24">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl md:text-8xl">
            I build ideas into things that actually exist.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I think in systems, build the ideas that won&apos;t leave me
            alone, and keep pushing until they work.
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
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              What I&apos;m building
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {currentWork.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http") ? "noreferrer" : undefined
                }
                className="group bg-[var(--background)] p-6 transition-colors hover:bg-[#0b0f15] sm:p-7"
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
            className="mt-6 inline-block text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            See all work →
          </a>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                TGG HUB
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                The things I&apos;m building don&apos;t have to stay separate.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[var(--muted)]">
                TGG HUB is the structure forming around them.
              </p>

              <a
                href="/tgg-hub"
                className="mt-6 inline-flex text-sm font-medium transition-colors hover:text-[var(--accent)]"
              >
                Explore TGG HUB →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                EXPERIMENTS
              </p>

              <p className="mt-3 text-lg text-[var(--muted)]">
                Not everything I build needs to become a product.
              </p>
            </div>

            <a
              href="/experiments"
              className="shrink-0 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Explore the experiments →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}