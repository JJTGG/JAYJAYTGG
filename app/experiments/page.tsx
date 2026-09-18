const experiments = [
  {
    number: "01",
    name: "AUREN",
    type: "Storefront / Concept",
    description:
      "A premium storefront concept built to explore product presentation, ecommerce interaction, and how a product experience can feel when the interface itself is part of the idea.",
    status: "Experiment",
    live: "https://auren-store-delta.vercel.app/",
    github: "https://github.com/JJTGG/auren-store"
  },
  {
    number: "02",
    name: "Fake OS",
    type: "Browser / Technical",
    description:
      "A browser experiment built around the idea of a tiny operating-system-like environment using only vanilla HTML, CSS, and JavaScript.",
    status: "Experiment",
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
            Things I build to find out.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Not every idea needs to become a product. Sometimes building the
            thing is the experiment.
          </p>
        </div>

        <div className="mt-20 divide-y border-y border-[var(--line)]">
          {experiments.map((experiment) => (
            <article key={experiment.name} className="py-10 sm:py-14">
              <div className="grid gap-8 md:grid-cols-[80px_1fr]">
                <p className="text-sm font-medium text-[var(--muted)]">
                  {experiment.number}
                </p>

                <div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                        {experiment.type}
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {experiment.name}
                      </h2>
                    </div>

                    <p className="text-sm text-[var(--muted)]">
                      {experiment.status}
                    </p>
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
                    {experiment.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-5 text-sm">
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
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-16">
          <p className="max-w-2xl text-xl font-medium leading-8 sm:text-2xl">
            Some experiments become products. Some stay experiments. Both are
            useful.
          </p>

          <a
            href="/work"
            className="mt-6 inline-flex text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            See the things that made it further →
          </a>
        </div>
      </section>
    </main>
  );
}