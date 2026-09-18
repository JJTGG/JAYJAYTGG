const projects = [
  {
    name: "AI Arena",
    description:
      "A multi-model AI workspace for running and comparing different AI providers.",
    href: "https://ai-arena-red.vercel.app/"
  },
  {
    name: "Trading Tools",
    description:
      "A trading decision-support platform built around calculators, risk tools, market data, and analytics.",
    href: "https://trading-tools-xi.vercel.app/"
  },
  {
    name: "AUREN",
    description:
      "A premium storefront concept exploring product presentation and ecommerce experiences.",
    href: "https://auren-store-delta.vercel.app/"
  },
  {
    name: "ClutchTopUp",
    description:
      "A gaming top-up platform built around game credits, ordering, and fulfilment.",
    href: "https://clutchtopup.wapka.top"
  }
];

export default function TGGHubPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            TGG HUB
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            The system behind the things I build.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            TGG HUB started as a name for the things I was building. It&apos;s
            becoming the system that connects them.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              The idea
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>
              I don&apos;t want every project to exist as a completely
              disconnected thing. Some ideas become products. Some become
              experiments. Some become tools that support other things.
            </p>

            <p>
              TGG HUB is the layer that gives those things a common home while
              leaving each project free to become what it needs to be.
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Inside the ecosystem
          </p>

          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-[var(--background)] p-6 transition-colors hover:bg-[#0b0f15] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <h2 className="text-xl font-semibold">
                    {project.name}
                  </h2>

                  <span className="text-[var(--muted)] transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 border border-[var(--line)] p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            Direction
          </p>

          <p className="mt-4 max-w-3xl text-xl font-medium leading-8 sm:text-2xl">
            The goal isn&apos;t to build a collection of unrelated projects.
            It&apos;s to gradually turn the things I build into an ecosystem.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://tgg-hub.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Visit TGG HUB ↗
          </a>
        </div>
      </section>
    </main>
  );
}