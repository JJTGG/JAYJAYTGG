import { projects } from "../../lib/projects";

const workProjects = projects.filter(
  (project) => project.category === "work"
);

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
            Some started as ideas I couldn&apos;t leave alone. Building them
            was how I found out what they could become.
          </p>
        </div>

        <div className="mt-20">
          <div className="divide-y border-y border-[var(--line)]">
            {workProjects.map((project, index) => (
              <article key={project.name} className="py-10 sm:py-14">
                <div className="grid gap-8 md:grid-cols-[80px_1fr]">
                  <p className="text-sm font-medium text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                          {project.type}
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                          {project.name}
                        </h2>
                      </div>

                      <p className="text-sm text-[var(--muted)]">
                        {project.status}
                      </p>
                    </div>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-5 text-sm">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors hover:text-[var(--accent)]"
                        >
                          Live ↗
                        </a>
                      )}

                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                      >
                        Source ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Experiments
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