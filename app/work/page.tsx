
import type { Metadata } from "next";
import Link from "next/link";
import ProjectExplorer from "../../components/ProjectExplorer";
import { projects } from "../../lib/projects";

const pageTitle = "Projects & Systems";

const pageDescription =
  "Explore products and developing systems built by JAYJAYTGG, search the catalogue, and open interactive project previews.";

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

export default function WorkPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Projects / Work explorer
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            Things I&apos;ve actually built.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            Products and systems at different stages of development. Search
            the work, narrow the catalogue, then open a project to explore its
            live preview, current status, and supporting links.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
            <span className="rounded-full border border-[var(--line)] px-3 py-2">
              {featuredCount} featured products
            </span>

            <span className="rounded-full border border-[var(--line)] px-3 py-2">
              {systemsCount} developing systems
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
          <ProjectExplorer projects={workProjects} />

          <div className="mt-16 flex flex-col gap-5 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Beyond products and systems
              </p>

              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                Explore the experiments.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">
                Smaller builds and technical explorations have their own
                collection, with direct access to their project previews.
              </p>
            </div>

            <Link
              href="/experiments"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
            >
              View experiments
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
