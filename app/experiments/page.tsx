const experiments = [
  {
    name: "Fake OS",
    type: "Browser experiment",
    description:
      "A browser-based fake operating system built with vanilla HTML, CSS, and JavaScript.",
    live: "https://jjtgg.github.io/fake-os/",
    github: "https://github.com/JJTGG/fake-os"
  }
];

export default function ExperimentsPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Experiments
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Things I build to see what happens.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Not everything needs to become a product. Some ideas are worth
            building simply to find out whether they can work.
          </p>
        </div>

        <div className="mt-20 border border-[var(--line)]">
          {experiments.map((experiment) => (
            <article
              key={experiment.name}
              className="p-6 sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                {experiment.type}
              </p>

              <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {experiment.name}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                    {experiment.description}
                  </p>
                </div>

                <div className="flex shrink-0 gap-5 text-sm">
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
      </section>
    </main>
  );
}