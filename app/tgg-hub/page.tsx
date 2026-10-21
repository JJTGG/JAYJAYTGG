import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { projects, type Project } from "../../lib/projects";

const pageTitle = "TGG HUB — The Wider Ecosystem";

const pageDescription =
  "Explore the products, systems, and experiments connected to TGG HUB, an evolving ecosystem of independently developed projects.";

const pageUrl = "https://jayjaytgg.vercel.app/tgg-hub";
const hubUrl = "https://tgg-hub.vercel.app/";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: `${pageTitle} — JAYJAYTGG`,
    description: pageDescription,
    siteName: "JAYJAYTGG"
  },
  twitter: {
    card: "summary",
    title: `${pageTitle} — JAYJAYTGG`,
    description: pageDescription
  }
};

const hubProjects = projects.filter((project) => project.featuredInHub);

function getProjectClassification(project: Project) {
  if (project.portfolioSection === "featured") {
    return "Selected product";
  }

  if (project.portfolioSection === "systems") {
    return "Developing system";
  }

  return "Experiment";
}

function StatusLabel({ status }: { status: string }) {
  return (
    <span className="inline-flex w-fit max-w-full items-center rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
      {status}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
      <Link
        href={`/work/${project.slug}`}
        className="inline-flex min-h-10 items-center gap-2 font-medium text-[var(--accent)] hover:underline"
      >
        Project record
        <span className="motion-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 font-medium transition-colors hover:text-[var(--accent)]"
        >
          Live project
          <span className="motion-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      )}

      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          Source code
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

export default function TGGHubPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-end md:gap-16 md:py-28 lg:py-32">
          <ScrollReveal>
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                <span
                  aria-hidden="true"
                  className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
                />
                TGG HUB / Ecosystem
              </p>

              <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.93] tracking-[-0.075em]">
                Independent work.
                <span className="block text-[var(--accent)]">
                  A wider home.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                TGG HUB brings selected products, systems, and experiments
                into a wider ecosystem. Each project has its own purpose,
                audience, and development stage. The connection is the wider
                direction—not a requirement to make everything the same.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <a
                  href={hubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                >
                  Visit TGG HUB
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <Link
                  href="/work"
                  className="inline-flex min-h-12 items-center gap-2 border border-[var(--line)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Browse the work
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <aside className="relative isolate overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 md:p-7 lg:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                  backgroundSize: "32px 32px"
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Ecosystem index
                  </p>

                  <span className="font-mono text-xs text-[var(--accent)]">
                    TGG / HUB
                  </span>
                </div>

                <p
                  aria-hidden="true"
                  className="mt-8 text-6xl font-semibold leading-[0.85] tracking-[-0.09em] sm:text-7xl lg:text-8xl"
                >
                  TGG
                  <span className="text-[var(--accent)]">.</span>
                </p>

                <p className="mt-4 text-sm text-[var(--muted)]">
                  An evolving collection of independent work
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[var(--line)] pt-6">
                  <div>
                    <p className="font-mono text-4xl font-semibold tracking-[-0.07em]">
                      {String(hubProjects.length).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                      Connected projects
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-4xl font-semibold tracking-[-0.07em]">
                      {String(
                        hubProjects.filter((project) => project.live).length
                      ).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                      With listed live links
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="connected-projects"
        aria-labelledby="connected-projects-heading"
        className="scroll-mt-8"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid gap-5 border-b border-[var(--line)] pb-7 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  01 / Connected projects
                </p>

                <h2
                  id="connected-projects-heading"
                  className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-5xl"
                >
                  Different work. Distinct identities.
                </h2>
              </div>

              <p className="text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                These are the projects currently marked as part of TGG HUB.
                Their descriptions and status labels come from the project
                catalogue, rather than implying they are all finished.
              </p>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-[var(--line)]">
            {hubProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delayMs={index * 70}>
                <article className="group relative isolate grid gap-5 py-8 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8 sm:py-10 lg:grid-cols-[64px_minmax(0,1fr)_minmax(100px,0.35fr)] lg:gap-10">
                  <span className="pt-1 font-mono text-xs text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                          {project.type}
                        </p>

                        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.055em] transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-4xl">
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

                  <div className="flex items-start lg:justify-end">
                    <p className="border-l border-[var(--line)] pl-4 text-xs uppercase leading-6 tracking-[0.1em] text-[var(--muted)] sm:ml-[72px] lg:ml-0 lg:border-l-0 lg:border-r lg:pr-4 lg:pl-0 lg:text-right">
                      {getProjectClassification(project)}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="ecosystem-boundary-heading"
        className="border-y border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / The distinction
              </p>

              <h2
                id="ecosystem-boundary-heading"
                className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-5xl"
              >
                Connected doesn&apos;t mean identical.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                TGG HUB is the wider umbrella. It does not turn every project
                into a single product, erase their separate purposes, or
                mean that every project is at the same stage.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            <ScrollReveal>
              <article className="h-full bg-[var(--background)] p-6 sm:p-8 lg:p-10">
                <p className="font-mono text-xs text-[var(--accent)]">
                  A / THE CONNECTION
                </p>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                  Shared direction.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  TGG HUB provides a wider identity for selected work and a
                  place to discover projects that belong to that ecosystem.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <article className="h-full bg-[var(--background)] p-6 sm:p-8 lg:p-10">
                <p className="font-mono text-xs text-[var(--accent)]">
                  B / THE BOUNDARY
                </p>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                  Separate realities.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  Each project retains its own description, links, development
                  status, and needs. The ecosystem should not make unfinished
                  work appear complete or independent projects appear to be
                  one integrated application.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="explore-heading">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  03 / Continue exploring
                </p>

                <h2
                  id="explore-heading"
                  className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-5xl"
                >
                  Follow the work itself.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  Explore the full catalogue, look through smaller experiments,
                  or return to the portfolio to understand the work in context.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  href="/work"
                  className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                >
                  Projects & systems
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/experiments"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--line)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Experiments
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}