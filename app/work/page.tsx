import type { Metadata } from "next";
import Link from "next/link";
import ProjectExplorer from "../../components/ProjectExplorer";
import ScrollReveal from "../components/ScrollReveal";
import { projects } from "../../lib/projects";

const pageTitle = "Projects & Systems";

const pageDescription =
  "Explore products and developing systems built by JAYJAYTGG. Search the catalogue, inspect project details, and open available live previews.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: `${pageTitle} — JAYJAYTGG`,
    description: pageDescription,
    url: "https://jayjaytgg.vercel.app/work"
  },
  twitter: {
    title: `${pageTitle} — JAYJAYTGG`,
    description: pageDescription
  }
};

const workProjects = projects.filter(
  (project) =>
    project.portfolioSection === "featured" ||
    project.portfolioSection === "systems"
);

const featuredCount = workProjects.filter(
  (project) => project.portfolioSection === "featured"
).length;

const systemsCount = workProjects.filter(
  (project) => project.portfolioSection === "systems"
).length;

const experimentCount = projects.filter(
  (project) => project.portfolioSection === "experiments"
).length;

export default function WorkPage() {
  return (
    <main>
      {/* Editorial introduction */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] md:items-end md:gap-16 md:py-28 lg:py-32">
          <ScrollReveal>
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                <span
                  aria-hidden="true"
                  className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
                />
                Work index / 01
              </p>

              <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
                Look closer at
                <span className="block text-[var(--accent)]">
                  what exists.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                Products and systems at different stages of development.
                Explore what each project does, understand its current
                status, and follow the links to its working implementation
                or source code.
              </p>

              <a
                href="#project-explorer"
                className="motion-lift mt-8 inline-flex min-h-12 items-center gap-3 border-b border-[var(--accent)] py-3 text-sm font-semibold text-[var(--foreground)]"
              >
                Enter the project index
                <span className="motion-arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <aside className="relative isolate overflow-hidden border-y border-[var(--line)] py-6 sm:py-8 md:mb-1 md:px-6 lg:px-8">
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
                    The catalogue
                  </p>

                  <span className="font-mono text-xs text-[var(--muted)]">
                    TGG / WORK
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8">
                  <div>
                    <p className="font-mono text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">
                      {String(featuredCount).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      Selected products
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">
                      {String(systemsCount).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      Developing systems
                    </p>
                  </div>

                  <div className="col-span-2 border-t border-[var(--line)] pt-5">
                    <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                      A project is more than its name. Inspect the context,
                      status and available links before deciding where to
                      explore further.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--line)] pt-5 text-sm">
                  <Link
                    href="/experiments"
                    className="inline-flex items-center gap-2 font-medium text-[var(--accent)] hover:underline"
                  >
                    {experimentCount} experiments
                    <span className="motion-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>

                  <Link
                    href="/tgg-hub"
                    className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)]"
                  >
                    TGG HUB
                    <span className="motion-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Searchable catalogue */}
      <section
        aria-labelledby="catalogue-heading"
        className="scroll-mt-8"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="mb-8 flex flex-col gap-4 border-b border-[var(--line)] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Search / Filter / Inspect
                </p>

                <h2
                  id="catalogue-heading"
                  className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl"
                >
                  Browse the catalogue.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                Search by project name, topic or status. Select an entry to
                inspect its details and any available live demonstration.
              </p>
            </div>
          </ScrollReveal>

          <div id="project-explorer" className="scroll-mt-8">
            <ProjectExplorer projects={workProjects} />
          </div>

          {/* Continue exploring */}
          <ScrollReveal>
            <div className="mt-20 border-t border-[var(--line)] pt-8 sm:mt-24 sm:pt-10">
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.75fr)] md:items-end md:gap-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Beyond the project index
                  </p>

                  <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">
                    Some ideas are worth exploring without becoming products.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    Smaller builds and technical explorations have their own
                    collection. Their unfinished status is part of the
                    context, not something to hide.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 md:justify-end">
                  <Link
                    href="/experiments"
                    className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                  >
                    Explore experiments
                    <span className="motion-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex min-h-12 items-center gap-2 border border-[var(--line)] px-4 py-3 text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Back home
                    <span className="motion-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}