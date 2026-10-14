import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectShowcase from "../../../components/ProjectShowcase";
import { projects } from "../../../lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
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

  const title = `${project.name} — Project Preview`;
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

export default async function ProjectDetailPage({
  params
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <span aria-hidden="true">←</span>
            Back to projects
          </Link>

          <div className="mt-12 flex flex-col gap-5 sm:mt-16 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {project.type}
              </p>

              <h1 className="mt-5 max-w-4xl text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
                {project.name}
              </h1>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[var(--line)] px-3 py-2 text-xs text-[var(--muted)]">
              {project.status}
            </span>
          </div>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            {project.description}
          </p>

          {project.credit && (
            <p className="mt-4 text-sm text-[var(--muted)]">
              {project.credit}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] hover:underline"
              >
                Open live project ↗
              </a>
            )}

            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Inspect source code ↗
              </a>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
          <ProjectShowcase project={project} />
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5 px-[var(--page-gutter)] py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Keep exploring
            </p>

            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              See how this project fits into the wider body of work.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
          >
            Explore projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}