
import { projects, type Project } from "../../lib/projects";

const workProjects = projects.filter(
  (project) =>
    project.portfolioSection === "featured" ||
    project.portfolioSection === "systems"
);

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-colors hover:text-[var(--accent)]"
        >
          View project ↗
        </a>
      )}

      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          Source code ↗
        </a>
      )}
    </div>
  );
}

function StatusLabel({ status }: { status: string }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
      {status}
    </span>
  );
}

export default function WorkPage() {
  const featured = workProjects.filter(
    (project) => project.portfolioSection === "featured"
  );

  const systems = workProjects.filter(
    (project) => project.portfolioSection === "systems"
  );

  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Projects / Selected work
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            Things I&apos;ve actually built.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            Products, tools, and systems at different stages of development.
            Some are publicly available; others are still taking shape.
            Their status matters as much as the idea behind them.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
            <span className="rounded-full border border-[var(--line)] px-3 py-2">
              {featured.length} featured products
            </span>
            <span className="rounded-full border border-[var(--line)] px-3 py-2">
              {systems.length} developing systems
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              01 / Featured products
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              The work at the centre.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {featured.map((project, index) => (
              <article key={project.slug} className="py-8 sm:py-11">
                <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                          {project.type}
                        </p>

                        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                          {project.name}
                        </h3>
                      </div>

                      <StatusLabel status={project.status} />
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
                      {project.description}
                    </p>

                    {project.credit && (
                      <p className="mt-4 text-xs text-[var(--muted)]">
                        {project.credit}
                      </p>
                    )}

                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            02 / Developing systems
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
            Work still taking shape.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Early-stage projects belong in the catalogue too, provided their
            current stage is clear and their descriptions stay grounded in
            what actually exists.
          </p>

          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {systems.map((project, index) => (
              <article key={project.slug} className="py-8 sm:py-10">
                <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                          {project.type}
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                          {project.name}
                        </h3>
                      </div>

                      <StatusLabel status={project.status} />
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                      {project.description}
                    </p>

                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Experiments have their own space.
              </h3>

              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                Smaller explorations, technical experiments, and ideas that
                don&apos;t need to become full products.
              </p>
            </div>

            <a
              href="/experiments"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            >
              Explore experiments ↗
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              TGG HUB is the wider ecosystem I&apos;m currently building,
              not another product card in this catalogue.
            </p>

            <a
              href="/tgg-hub"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
            >
              About the ecosystem ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
