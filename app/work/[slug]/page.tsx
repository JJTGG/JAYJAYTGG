import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectShowcase from "../../../components/ProjectShowcase";
import ScrollReveal from "../../components/ScrollReveal";
import { projects, type PortfolioSection } from "../../../lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

const collectionLabels: Record<PortfolioSection, string> = {
  featured: "Selected work",
  systems: "Developing systems",
  experiments: "Experiments"
};

function getCollectionHref(section: PortfolioSection) {
  return section === "experiments" ? "/experiments" : "/work";
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const title = `${project.name} — Project Record`;
  const description = project.shortDescription;
  const url = `https://jayjaytgg.vercel.app/work/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${project.name} — JAYJAYTGG`,
      description,
      url,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: `${project.name} — JAYJAYTGG`,
      description
    }
  };
}

function RecordRow({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[minmax(88px,0.7fr)_minmax(0,1.3fr)] gap-4 border-t border-[var(--line)] py-3">
      <dt className="text-xs text-[var(--muted)]">{label}</dt>
      <dd className="min-w-0 text-right text-xs font-medium leading-5">
        {children}
      </dd>
    </div>
  );
}

export default async function ProjectDetailPage({
  params
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : undefined;

  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : undefined;

  const collectionLabel = collectionLabels[project.portfolioSection];
  const collectionHref = getCollectionHref(project.portfolioSection);
  const projectNumber = String(projectIndex + 1).padStart(2, "0");
  const totalProjects = String(projects.length).padStart(2, "0");

  return (
    <main>
      {/* Project identity and record */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href={collectionHref}
              className="inline-flex min-h-10 items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <span aria-hidden="true">←</span>
              Back to {collectionLabel.toLowerCase()}
            </Link>

            <span className="font-mono text-xs text-[var(--muted)]">
              PROJECT / {projectNumber} OF {totalProjects}
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-16">
            <ScrollReveal>
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  <span>{collectionLabel}</span>
                  <span aria-hidden="true">/</span>
                  <span className="text-[var(--muted)]">{project.type}</span>
                </p>

                <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.93] tracking-[-0.075em]">
                  {project.name}
                  <span className="text-[var(--accent)]">.</span>
                </h1>

                <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                  {project.description}
                </p>

                {project.credit && (
                  <p className="mt-5 text-sm text-[var(--muted)]">
                    {project.credit}
                  </p>
                )}

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                    >
                      Open live project
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
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[var(--line)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Inspect source code
                      <span className="motion-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                </div>

                {!project.live && (
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    No live deployment is listed for this project. Check the
                    available showcase and source repository to explore the
                    work.
                  </p>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <aside className="group relative isolate overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7 lg:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                  }}
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Project record
                  </p>

                  <span className="font-mono text-xs text-[var(--muted)]">
                    {projectNumber} / {totalProjects}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="relative z-10 py-9 text-[clamp(8rem,18vw,13rem)] font-semibold leading-[0.78] tracking-[-0.13em] text-[var(--accent)] transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  {project.name.slice(0, 1)}.
                </div>

                <dl className="relative z-10">
                  <RecordRow label="Collection">{collectionLabel}</RecordRow>

                  <RecordRow label="Classification">{project.type}</RecordRow>

                  <RecordRow label="Current status">
                    {project.status}
                  </RecordRow>

                  <RecordRow label="Live website">
                    {project.live ? "URL available" : "Not listed"}
                  </RecordRow>

                  <RecordRow label="Source code">
                    {project.source ? "Repository available" : "Not listed"}
                  </RecordRow>
                </dl>

                <p className="relative z-10 mt-5 text-xs leading-6 text-[var(--muted)]">
                  Project status and available links describe this portfolio
                  entry. A listed website does not imply that every feature
                  is finished.
                </p>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live website or interactive demonstration */}
      <section aria-labelledby="showcase-heading">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="mb-9 flex flex-col gap-5 border-b border-[var(--line)] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Explore / {projectNumber}
                </p>

                <h2
                  id="showcase-heading"
                  className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl"
                >
                  The work, up close.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                Inspect the available implementation directly. Where a
                project has a purpose-built demonstration, you can switch
                between the demo and its live website.
              </p>
            </div>
          </ScrollReveal>

          <ProjectShowcase key={project.slug} project={project} />
        </div>
      </section>

      {/* Navigate the wider body of work */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-10 sm:py-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Continue exploring
            </p>

            <Link
              href={collectionHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
            >
              All {collectionLabel.toLowerCase()}
              <span className="motion-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

          <div className="grid border-y border-[var(--line)] sm:grid-cols-2 sm:divide-x sm:divide-[var(--line)]">
            {previousProject ? (
              <Link
                href={`/work/${previousProject.slug}`}
                className="group flex min-h-[128px] flex-col justify-between gap-5 border-b border-[var(--line)] p-5 transition-colors hover:bg-[var(--surface)] sm:border-b-0 sm:pr-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-[var(--muted)]">
                    Previous project
                  </span>
                  <span
                    aria-hidden="true"
                    className="motion-arrow text-sm text-[var(--muted)] group-hover:text-[var(--accent)]"
                  >
                    ←
                  </span>
                </div>

                <div>
                  <p className="text-xs text-[var(--muted)]">
                    {previousProject.type}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-[var(--accent)]">
                    {previousProject.name}
                  </h3>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" aria-hidden="true" />
            )}

            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex min-h-[128px] flex-col justify-between gap-5 p-5 transition-colors hover:bg-[var(--surface)] sm:pl-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-[var(--muted)]">
                    Next project
                  </span>
                  <span
                    aria-hidden="true"
                    className="motion-arrow text-sm text-[var(--muted)] group-hover:text-[var(--accent)]"
                  >
                    →
                  </span>
                </div>

                <div>
                  <p className="text-xs text-[var(--muted)]">
                    {nextProject.type}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-[var(--accent)]">
                    {nextProject.name}
                  </h3>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" aria-hidden="true" />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}