
import Link from "next/link";
import { projects, type Project } from "../../lib/projects";

const hubProjects = projects.filter((project) => project.featuredInHub);

function StatusLabel({ status }: { status: string }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
      {status}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
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

export default function TGGHubPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            TGG HUB / Ecosystem
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            An ecosystem I&apos;m currently building.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            TGG HUB brings selected products and ideas into a wider ecosystem.
            The projects can have different purposes, audiences, and stages of
            development without losing their individual identities.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
            <span className="rounded-full border border-[var(--line)] px-3 py-2">
              {hubProjects.length} connected projects
            </span>

            <span className="rounded-full border border-[var(--line)] px-3 py-2">
              Independently developed
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              01 / Connected projects
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Different products. A wider ecosystem.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              These projects are currently marked as part of TGG HUB.
              Each retains its own purpose and current development status.
            </p>
          </div>

          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {hubProjects.map((project, index) => (
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

                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                          {project.name}
                        </h3>
                      </div>

                      <StatusLabel status={project.status} />
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
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
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / The distinction
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Connected doesn&apos;t mean identical.
              </h2>
            </div>

            <div>
              <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  TGG HUB isn&apos;t intended to absorb every project or
                  make everything operate as one product. Some work belongs
                  to the ecosystem; other projects and experiments remain
                  independent.
                </p>

                <p>
                  The distinction matters. Each project should be able to
                  develop according to what it needs rather than being
                  forced into a shared identity or structure.
                </p>

                <p>
                  The ecosystem is still taking shape through the products
                  and systems being built.
                </p>
              </div>

              <a
                href="https://tgg-hub.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Visit TGG HUB ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Explore further
          </p>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Follow the work itself.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Browse the full project catalogue or explore the technical
                and creative experiments independently.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm">
              <Link
                href="/work"
                className="font-medium transition-colors hover:text-[var(--accent)]"
              >
                Projects and systems ↗
              </Link>

              <Link
                href="/experiments"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Experiments ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
