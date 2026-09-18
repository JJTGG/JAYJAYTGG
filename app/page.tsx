const currentWork = [
  {
    name: "AI Arena",
    description:
      "Comparing AI models in one workspace without turning the workflow into a mess.",
    href: "https://ai-arena-red.vercel.app/"
  },
  {
    name: "Trading Tools",
    description:
      "Tools for thinking through trading decisions, risk, and market data.",
    href: "https://trading-tools-xi.vercel.app/"
  },
  {
    name: "TGG HUB",
    description:
      "The ecosystem these products, experiments, and systems are gradually becoming part of.",
    href: "/tgg-hub"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-5 py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Builder / Developer / Experimenter
          </p>

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

          <p className="mt-16 text-sm text-[var(--muted)]">
            Started building websites on a button phone. Still building.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Currently building
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              What has my attention right now.
            </h2>
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
            See everything I&apos;ve built →
          </a>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                TGG HUB
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                More than a collection of projects.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[var(--muted)]">
                TGG HUB started as a name for the things I was building.
                It&apos;s becoming the system that connects them.
              </p>

              <a
                href="/tgg-hub"
                className="mt-7 inline-flex text-sm font-medium transition-colors hover:text-[var(--accent)]"
              >
                See how it fits together →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Experiments
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Things I build to see what happens.
              </h2>

              <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                Small systems, strange ideas, and technical challenges that
                don&apos;t necessarily need to become products.
              </p>
            </div>

            <a
              href="/experiments"
              className="shrink-0 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              View experiments →
            </a>
          </div>

          <div className="mt-10 border border-[var(--line)]">
            <a
              href="https://jjtgg.github.io/fake-os/"
              target="_blank"
              rel="noreferrer"
              className="group block p-6 transition-colors hover:bg-[#0b0f15] sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                    Browser experiment
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    Fake OS
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                    A browser-based fake operating system built with vanilla
                    HTML, CSS, and JavaScript.
                  </p>
                </div>

                <span className="text-[var(--muted)] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                How I think
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                An idea is only the beginning.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[var(--muted)]">
                Most of what I build starts as an idea, then turns into a
                system, then gets reduced to something people can actually
                use. The implementation changes; the underlying thinking
                stays the same.
              </p>

              <p className="mt-6 text-base leading-7 text-[var(--muted)]">
                I&apos;d rather build something I dreamed up myself than
                execute someone else&apos;s spec.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Contact
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Have something worth building?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Tell me what you&apos;re thinking.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              Talk to me →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}