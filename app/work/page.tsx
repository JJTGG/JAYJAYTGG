const projects = [
  {
    name: "AI Arena",
    type: "AI / Product",
    description:
      "A multi-model AI workspace for running and comparing different AI providers.",
    live: "https://ai-arena-red.vercel.app/",
    github: "https://github.com/JJTGG/ai-arena"
  },
  {
    name: "Trading Tools",
    type: "Fintech / Tools",
    description:
      "A trading decision-support platform built around calculators, risk tools, market data, and analytics.",
    live: "https://trading-tools-xi.vercel.app/",
    github: "https://github.com/JJTGG/trading-tools"
  },
  {
    name: "TGG HUB",
    type: "Ecosystem",
    description:
      "The ecosystem connecting the products, experiments, and systems I'm building.",
    live: "https://tgg-hub.vercel.app/",
    github: "https://github.com/JJTGG/tgg-hub"
  },
  {
    name: "AUREN",
    type: "Storefront / Concept",
    description:
      "A premium storefront concept built to explore product presentation and ecommerce experiences.",
    live: "https://auren-store-delta.vercel.app/",
    github: "https://github.com/JJTGG/auren-store"
  },
  {
    name: "ClutchTopUp",
    type: "Gaming / Commerce",
    description:
      "A gaming top-up platform built around game credits, ordering, and manual fulfilment.",
    live: "https://clutchtopup.wapka.top"
  }
];

const experiments = [
  {
    name: "Fake OS",
    description:
      "A browser-based fake operating system built with vanilla HTML, CSS, and JavaScript.",
    live: "https://jjtgg.github.io/fake-os/",
    github: "https://github.com/JJTGG/fake-os"
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Work
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Things I&apos;ve actually built.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Products, systems, experiments, and ideas that made it far enough
            to become something real.
          </p>
        </div>

        <div className="mt-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Built
          </p>

          <div className="mt-6 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="bg-[var(--background)] p-6 sm:p-8"
              >
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                  {project.type}
                </p>

                <h2 className="mt-4 text-2xl font-semibold">
                  {project.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-5 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    Live ↗
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Experiments
          </p>

          <div className="mt-6 border border-[var(--line)]">
            {experiments.map((experiment) => (
              <article
                key={experiment.name}
                className="p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {experiment.name}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                      {experiment.description}
                    </p>
                  </div>

                  <div className="flex gap-5 text-sm">
                    <a
                      href={experiment.live}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-[var(--accent)]"
                    >
                      Live ↗
                    </a>

                    <a
                      href={experiment.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}