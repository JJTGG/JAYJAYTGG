const projects = [
  {
    name: "AI Arena",
    type: "AI / Product",
    description:
      "A workspace for running and comparing different AI models.",
    href: "https://ai-arena-red.vercel.app/"
  },
  {
    name: "Trading Tools",
    type: "Trading / Product",
    description:
      "Tools for trading decisions, risk, market data, and analysis.",
    href: "https://trading-tools-xi.vercel.app/"
  },
  {
    name: "ClutchTopUp",
    type: "Gaming / Commerce",
    description:
      "A gaming top-up service I'm rebuilding from the ground up.",
    href: null
  },
  {
    name: "AUREN",
    type: "Storefront / Experiment",
    description:
      "A storefront experiment exploring product presentation and ecommerce experiences.",
    href: "https://auren-store-delta.vercel.app/"
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
            The system taking shape around the things I build.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Some projects stand on their own. Others support, connect, or grow
            alongside them. TGG HUB is where those things can belong to the
            same ecosystem.
          </p>
        </div>

        <div className="mt-20 border-t border-[var(--line)] pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            The ecosystem
          </p>

          <div className="mt-8 divide-y border-y border-[var(--line)]">
            {projects.map((project, index) => {
              const content = (
                <>
                  <div className="flex items-start gap-6">
                    <span className="text-sm text-[var(--muted)]">
                      0{index + 1}
                    </span>

                    <div className="flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <h2 className="text-2xl font-semibold">
                          {project.name}
                        </h2>

                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                          {project.type}
                        </p>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                        {project.description}
                      </p>
                    </div>

                    {project.href && (
                      <span className="text-[var(--muted)] transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    )}
                  </div>
                </>
              );

              return project.href ? (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-7 transition-colors hover:bg-[#0b0f15] sm:py-8"
                >
                  {content}
                </a>
              ) : (
                <div key={project.name} className="py-7 sm:py-8">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Different things. Same ecosystem.
              </p>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              TGG HUB isn&apos;t meant to make every project the same. It&apos;s
              the layer around them — a place for products, experiments, and
              systems to develop without having to become one thing.
            </p>
          </div>

          <a
            href="https://tgg-hub.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Visit TGG HUB ↗
          </a>
        </div>
      </section>
    </main>
  );
}