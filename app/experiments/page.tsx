import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { projects, type Project } from "../../lib/projects";

const pageTitle = "Experiments & Explorations";

const pageDescription =
  "Explore independent experiments, technical explorations, and unfinished builds by JAYJAYTGG, with project records, live links, and source code.";

const pageUrl = "https://jayjaytgg.vercel.app/experiments";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: `${pageTitle} — JAYJAYTGG`,
    description: pageDescription,
    url: pageUrl,
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `${pageTitle} — JAYJAYTGG`,
    description: pageDescription
  }
};

const experiments = projects.filter(
  (project) => project.portfolioSection === "experiments"
);

const featuredExperiment =
  experiments.find((project) => project.slug === "auren") ?? experiments[0];

const supportingExperiments = experiments.filter(
  (project) => project.slug !== featuredExperiment?.slug
);

function StatusLabel({ status }: { status: string }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
      {status}
    </span>
  );
}

function ExperimentLinks({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
      <Link
        href={`/work/${project.slug}`}
        className="inline-flex items-center gap-2 font-medium text-[var(--accent)] hover:underline"
      >
        Read project record
        <span className="motion-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium transition-colors hover:text-[var(--accent)]"
        >
          {project.slug === "auren"
            ? "Visit storefront"
            : project.slug === "cv-generator"
              ? "Open unfinished build"
              : "Open live experiment"}
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
          className="inline-flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          Source code
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

export default function ExperimentsPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] md:items-end md:gap-16 md:py-28 lg:py-32">
          <ScrollReveal>
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                <span
                  aria-hidden="true"
                  className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
                />
                Experiments / Explorations
              </p>

              <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
                Things I build
                <span className="block text-[var(--accent)]">
                  to find out.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                Not every idea needs to become a product. Some builds explore
                an interface, some test a technical approach, and others
                simply turn a thought into something tangible.
              </p>

              <a
                href="#experiment-index"
                className="motion-lift mt-8 inline-flex min-h-12 items-center gap-3 border-b border-[var(--accent)] py-3 text-sm font-semibold"
              >
                Explore the collection
                <span className="motion-arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <aside className="relative isolate overflow-hidden border-y border-[var(--line)] py-6 sm:py-8 md:px-6 lg:px-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--line) 1px, transparent 1px)",
                  backgroundSize: "100% 36px"
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Collection index
                  </p>

                  <span className="font-mono text-xs text-[var(--muted)]">
                    TGG / LAB
                  </span>
                </div>

                <p className="mt-8 font-mono text-6xl font-semibold tracking-[-0.08em] sm:text-7xl">
                  {String(experiments.length).padStart(2, "0")}
                </p>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Experiments currently catalogued
                </p>

                <div className="mt-7 border-t border-[var(--line)] pt-5">
                  <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                    Each entry records what exists, its current status, and
                    where the available implementation or source can be found.
                  </p>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {featuredExperiment && (
        <section
          id="experiment-index"
          aria-labelledby="featured-experiment-heading"
          className="scroll-mt-8"
        >
          <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
            <ScrollReveal>
              <div className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    01 / Featured exploration
                  </p>

                  <h2
                    id="featured-experiment-heading"
                    className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl"
                  >
                    A closer look.
                  </h2>
                </div>

                <StatusLabel status={featuredExperiment.status} />
              </div>

              <article className="grid overflow-hidden border-y border-[var(--line)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="flex flex-col py-7 sm:py-10 lg:pr-12">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    {featuredExperiment.type}
                  </p>

                  <h3 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                    {featuredExperiment.name}
                    <span className="text-[var(--accent)]">.</span>
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                    {featuredExperiment.description}
                  </p>

                  {featuredExperiment.credit && (
                    <p className="mt-5 text-sm text-[var(--muted)]">
                      Attribution:{" "}
                      <span className="font-medium text-[var(--foreground)]">
                        {featuredExperiment.credit}
                      </span>
                    </p>
                  )}

                  <div className="mt-auto pt-8">
                    <ExperimentLinks project={featuredExperiment} />
                  </div>
                </div>

                <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden border-t border-[var(--line)] bg-[var(--surface)] p-6 sm:min-h-[350px] sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, var(--line) 1px, transparent 1px), linear-gradient(var(--line) 1px, transparent 1px)",
                      backgroundSize: "32px 32px"
                    }}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-[var(--muted)]">
                      FIELD NOTE / 01
                    </span>

                    <span className="font-mono text-xs text-[var(--accent)]">
                      {featuredExperiment.slug.toUpperCase()}
                    </span>
                  </div>

                  <div className="relative py-12 sm:py-16">
                    <p
                      aria-hidden="true"
                      className="break-words text-[clamp(3.5rem,11vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em]"
                    >
                      {featuredExperiment.name}
                    </p>

                    {featuredExperiment.slug === "auren" && (
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm">
                        The New Everyday
                      </p>
                    )}
                  </div>

                  <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-5">
                    <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">
                      A product presentation and interface exploration.
                    </p>

                    <span className="font-mono text-xs text-[var(--muted)]">
                      {String(experiments.length).padStart(2, "0")} / INDEX
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>
      )}

      {supportingExperiments.length > 0 && (
        <section
          aria-labelledby="supporting-experiments-heading"
          className="border-t border-[var(--line)]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
            <ScrollReveal>
              <div className="grid gap-4 border-b border-[var(--line)] pb-7 sm:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)] sm:items-end sm:gap-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    02 / Smaller studies
                  </p>

                  <h2
                    id="supporting-experiments-heading"
                    className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl"
                  >
                    Other things tried.
                  </h2>
                </div>

                <p className="text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  Different questions, different scales. These builds stay
                  visible with their unfinished or experimental status intact.
                </p>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-[var(--line)]">
              {supportingExperiments.map((experiment, index) => (
                <ScrollReveal key={experiment.slug} delayMs={index * 80}>
                  <article className="grid gap-5 py-8 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-8 sm:py-10 lg:grid-cols-[64px_minmax(0,1fr)_auto] lg:items-start">
                    <p className="font-mono text-xs text-[var(--accent)]">
                      {String(index + 2).padStart(2, "0")}
                    </p>

                    <div className="min-w-0">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                        <div>
                          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                            {experiment.type}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                            {experiment.name}
                          </h3>
                        </div>

                        <StatusLabel status={experiment.status} />
                      </div>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                        {experiment.description}
                      </p>

                      {experiment.credit && (
                        <p className="mt-3 text-xs text-[var(--muted)]">
                          {experiment.credit}
                        </p>
                      )}

                      <ExperimentLinks project={experiment} />
                    </div>

                    <div
                      aria-hidden="true"
                      className="hidden min-w-20 border-l border-[var(--line)] pl-5 pt-1 font-mono text-xs text-[var(--muted)] lg:block"
                    >
                      {experiment.slug === "fake-os"
                        ? "BROWSER"
                        : experiment.slug === "cv-generator"
                          ? "UTILITY"
                          : "STUDY"}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Beyond the experiments
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">
                  Some ideas become products. Others remain useful experiments.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  The distinction matters. Independent products and developing
                  systems have their own catalogue, separate from collaborative
                  work and exploratory builds.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
                  href="/tgg-hub"
                  className="inline-flex min-h-12 items-center gap-2 border border-[var(--line)] px-4 py-3 text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  TGG HUB
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