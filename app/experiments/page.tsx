import { projects } from "../../lib/projects";

const experiments = projects.filter(
  (project) => project.category === "experiment"
);

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
          {experiments.map((experiment, index) => (
            <article key={experiment.name} className="py-10 sm:py-14">
              <div className="grid gap-8 md:grid-cols-[80px_1fr]">
                <p className="text-sm font-medium text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
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
                    {experiment.live && (
                      <a
                        href={experiment.live}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-[var(--accent)]"
                      >
                        Live ↗
                      </a>
                    )}

                    <a
                      href={experiment.source}
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