
import Link from "next/link";
import { projects, type Project } from "../../lib/projects";

const experiments = projects.filter(
  (project) => project.portfolioSection === "experiments"
);

function ExperimentLinks({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
      <Link
        href={`/work/${project.slug}`}
        className="font-medium text-[var(--accent)] transition-colors hover:underline"
      >
        Explore preview ↗
      </Link>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-colors hover:text-[var(--accent)]"
        >
          View experiment ↗
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

export default function ExperimentsPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Experiments / Explorations
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            Things I build to find out.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            Not every idea needs to become a product. Some experiments explore
            an interface, some test a technical approach, and others exist
            simply to make an idea real.
          </p>

          <p className="mt-9 text-sm text-[var(--muted)]">
            {experiments.length} experiments in the catalogue
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-24">
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {experiments.map((experiment, index) => (
              <article key={experiment.slug} className="py-9 sm:py-12">
                <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                          {experiment.type}
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                          {experiment.name}
                        </h2>
                      </div>

                      <StatusLabel status={experiment.status} />
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
                      {experiment.description}
                    </p>

                    {experiment.credit && (
                      <p className="mt-4 text-xs text-[var(--muted)]">
                        {experiment.credit}
                      </p>
                    )}

                    <ExperimentLinks project={experiment} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 border-t border-[var(--line)] pt-10 sm:mt-24 sm:pt-14">
            <p className="max-w-3xl text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
              Some experiments become products. Others remain experiments.
              Both can move an idea forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm">
              <Link
                href="/work"
                className="font-medium transition-colors hover:text-[var(--accent)]"
              >
                Explore projects and systems ↗
              </Link>

              <Link
                href="/tgg-hub"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                About TGG HUB ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
