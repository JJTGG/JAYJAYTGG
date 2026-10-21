import Link from "next/link";
import KineticHeading from "../components/KineticHeading";
import ScrollReveal from "./components/ScrollReveal";
import { projects, type Project } from "../lib/projects";

const featuredProjects = projects.filter(
  (project) => project.portfolioSection === "featured"
);

const leadProject = featuredProjects[0];
const supportingProjects = featuredProjects.slice(1);

const developingSystems = projects.filter(
  (project) => project.portfolioSection === "systems"
);

const experiments = projects.filter(
  (project) => project.portfolioSection === "experiments"
);

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
      <Link
        href={`/work/${project.slug}`}
        className="inline-flex items-center gap-2 font-medium text-[var(--accent)] hover:underline"
      >
        Explore preview <span aria-hidden="true">↗</span>
      </Link>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-[var(--foreground)] hover:text-[var(--accent)]"
        >
          View project <span aria-hidden="true">↗</span>
        </a>
      )}

      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          Source code <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function StatusLabel({ status }: { status: string }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
      {status}
    </span>
  );
}

const workPaths = [
  {
    number: "01",
    label: "Products",
    description: "Things people can explore and use",
    href: "#selected-work"
  },
  {
    number: "02",
    label: "Systems",
    description: "Infrastructure and work in progress",
    href: "#systems"
  },
  {
    number: "03",
    label: "Experiments",
    description: "Tests, questions and explorations",
    href: "#experiments"
  },
  {
    number: "04",
    label: "Collaborations",
    description: "Websites built for other people",
    href: "#collaborations"
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero / direct paths into the work */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)] md:items-center md:gap-10 md:py-24 lg:gap-16 lg:py-28">
          <div className="w-full min-w-0">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              <span
                aria-hidden="true"
                className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
              />
              Independent builder
            </p>

            <KineticHeading
              lines={[
                "I build ideas",
                "into things that",
                "actually exist."
              ]}
              accentLine={2}
            />

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              Products, tools, experiments and systems. I build to find out
              what an idea can become, what makes it work, and what happens
              when it meets reality.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#selected-work"
                className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
              >
                Explore the work
                <span className="motion-arrow" aria-hidden="true">
                  ↘
                </span>
              </a>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-[var(--line)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                How I think
                <span className="motion-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </div>

          <nav
            aria-label="Explore portfolio categories"
            className="border-t border-[var(--line)] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Find your way in
            </p>

            <div className="divide-y divide-[var(--line)]">
              {workPaths.map((path) => (
                <a
                  key={path.href}
                  href={path.href}
                  className="group relative isolate flex min-h-[76px] items-center gap-4 overflow-hidden px-3 py-4 transition-colors duration-200 hover:bg-[var(--surface)] focus-visible:bg-[var(--surface)] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-[2px] before:origin-top before:scale-y-0 before:bg-[var(--accent)] before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:before:scale-y-100 focus-visible:before:scale-y-100"
                >
                  <span className="w-6 shrink-0 font-mono text-[10px] text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                    {path.number}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold tracking-[-0.025em] transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1">
                      {path.label}
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                      {path.description}
                    </span>
                  </span>

                  <span
                    className="motion-arrow shrink-0 text-sm text-[var(--muted)] transition-colors group-hover:text-[var(--accent)] group-focus-visible:text-[var(--accent)]"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* Featured products — editorial lead and supporting work */}
      <section
        id="selected-work"
        className="scroll-mt-8 border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <ScrollReveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Selected work / 01
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl md:text-6xl">
                  Products in different stages of becoming.
                </h2>
              </div>

              <Link
                href="/work"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                Browse all projects
                <span className="motion-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {leadProject && (
            <ScrollReveal delayMs={80}>
              <article className="group relative isolate mt-12 overflow-hidden border-y border-[var(--line)]">
                <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
                  <div className="flex min-w-0 flex-col py-7 sm:py-9 md:py-11 md:pr-10 lg:pr-14">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs text-[var(--accent)]">
                        001 / {leadProject.type}
                      </span>
                      <StatusLabel status={leadProject.status} />
                    </div>

                    <h3 className="mt-8 text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.075em] transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {leadProject.name}
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                      {leadProject.description}
                    </p>

                    {leadProject.credit && (
                      <p className="mt-5 text-xs text-[var(--muted)]">
                        {leadProject.credit}
                      </p>
                    )}

                    <div className="mt-auto pt-7">
                      <ProjectLinks project={leadProject} />
                    </div>
                  </div>

                  <div className="relative isolate flex min-h-[260px] flex-col justify-between overflow-hidden border-t border-[var(--line)] bg-[var(--surface)] p-6 sm:min-h-[320px] sm:p-8 md:border-l md:border-t-0 lg:p-10">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                        backgroundSize: "32px 32px"
                      }}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                        Lead project
                      </span>
                      <span className="font-mono text-xs text-[var(--muted)]">
                        01 / {String(featuredProjects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="py-8">
                      <span className="block origin-bottom-left text-[clamp(7rem,17vw,12rem)] font-semibold leading-[0.8] tracking-[-0.12em] text-[var(--accent)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
                        {leadProject.name.slice(0, 1)}.
                      </span>

                      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-medium uppercase tracking-[0.13em] text-[var(--muted)] sm:gap-x-5">
                        <span>People</span>
                        <span aria-hidden="true">/</span>
                        <span>Content</span>
                        <span aria-hidden="true">/</span>
                        <span>Discovery</span>
                        <span aria-hidden="true">/</span>
                        <span>Communication</span>
                      </div>
                    </div>

                    <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">
                      A closer look at the thinking, trade-offs and systems
                      behind the product.
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          )}

          {supportingProjects.length > 0 && (
            <div className="mt-12">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  More selected work
                </p>
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  002—{String(featuredProjects.length).padStart(2, "0")}
                </span>
              </div>

              <div className="border-t border-[var(--line)]">
                {supportingProjects.map((project, index) => (
                  <ScrollReveal key={project.slug} delayMs={index * 70}>
                    <article className="group relative isolate grid gap-4 overflow-hidden border-b border-[var(--line)] py-6 transition-colors duration-300 hover:bg-[var(--surface)] focus-within:bg-[var(--surface)] sm:py-7 md:grid-cols-[52px_minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start md:gap-6 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[2px] before:origin-top before:scale-y-0 before:bg-[var(--accent)] before:transition-transform before:duration-300 before:ease-out before:content-[''] group-hover:before:scale-y-100 group-focus-within:before:scale-y-100">
                      <span className="pl-3 font-mono text-xs text-[var(--accent)] transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1">
                        {String(index + 2).padStart(3, "0")}
                      </span>

                      <div className="min-w-0 px-3 md:px-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                          {project.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] transition-all duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)] sm:text-3xl">
                          {project.name}
                        </h3>

                        <div className="mt-3">
                          <StatusLabel status={project.status} />
                        </div>
                      </div>

                      <div className="min-w-0 px-3 md:px-0">
                        <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                          {project.shortDescription}
                        </p>

                        {project.credit && (
                          <p className="mt-3 text-xs text-[var(--muted)]">
                            {project.credit}
                          </p>
                        )}

                        <ProjectLinks project={project} />
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TGG HUB — the wider ecosystem */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-[var(--page-gutter)] py-20 sm:py-24 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 lg:py-28">
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                The wider direction / 02
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                An ecosystem I&apos;m building.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="flex flex-col items-start justify-center">
              <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
                The projects I build do not all need to be the same thing
                or exist in isolation. TGG HUB is the wider ecosystem taking
                shape around products, experiments and connected systems.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                Each project keeps its own purpose. The ecosystem creates
                room for the connections between them to develop over time.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/tgg-hub"
                  className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[var(--line)] px-5 py-3 text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Understand the ecosystem
                  <span className="motion-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>

                <a
                  href="https://tgg-hub.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 px-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  Visit TGG HUB
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Developing systems */}
      <section
        id="systems"
        className="scroll-mt-8 border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                In development / 03
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                More ideas taking shape.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                Some work is still at the foundation stage. This is where
                I show what is being explored without presenting early work
                as a finished product.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {developingSystems.map((project, index) => (
              <ScrollReveal key={project.slug} delayMs={index * 60}>
                <article className="group relative isolate grid gap-5 overflow-hidden py-7 transition-colors duration-300 hover:bg-[var(--surface)] focus-within:bg-[var(--surface)] sm:grid-cols-[64px_minmax(0,1fr)] sm:py-9 before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[3px] before:origin-top before:scale-y-0 before:bg-[var(--accent)] before:transition-transform before:duration-500 before:ease-out before:content-[''] group-hover:before:scale-y-100 group-focus-within:before:scale-y-100">
                  <span className="relative z-0 pl-3 font-mono text-xs text-[var(--accent)] transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-0 pr-3">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                          {project.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] transition-all duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)]">
                          {project.name}
                        </h3>
                      </div>

                      <StatusLabel status={project.status} />
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                      {project.shortDescription}
                    </p>

                    <ProjectLinks project={project} />
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section
        id="experiments"
        className="scroll-mt-8 border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <ScrollReveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Independent explorations / 04
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                  Not everything needs to become a product.
                </h2>
              </div>

              <Link
                href="/experiments"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)]"
              >
                Explore experiments
                <span className="motion-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2">
            {experiments.map((project, index) => (
              <ScrollReveal
                key={project.slug}
                delayMs={index * 80}
                className="h-full"
              >
                <article className="motion-lift group relative isolate flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] p-6 transition-colors hover:border-[var(--accent)] hover:bg-[var(--surface)] focus-within:border-[var(--accent)] sm:p-8 before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-20 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-[var(--accent)] before:transition-transform before:duration-500 before:ease-out before:content-[''] group-hover:before:scale-x-100 group-focus-within:before:scale-x-100">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")} / {project.type}
                    </span>

                    <StatusLabel status={project.status} />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.045em] transition-all duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)] sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    {project.shortDescription}
                  </p>

                  {project.credit && (
                    <p className="mt-4 text-xs text-[var(--muted)]">
                      {project.credit}
                    </p>
                  )}

                  <ProjectLinks project={project} />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations — work built for other people */}
      <section
        id="collaborations"
        className="scroll-mt-8 border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-16">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Work built for others / 05
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                  Sometimes the story isn&apos;t mine to tell.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div>
                <p className="text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                  I also build websites for other people. In these
                  collaborations, ownership of the idea and story stays
                  clear alongside my contribution to bringing the website
                  to life.
                </p>

                <Link
                  href="/collaborations"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  Explore collaborations
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delayMs={100}>
            <article className="motion-lift mt-10 grid overflow-hidden rounded-xl border border-[var(--line)] hover:border-[var(--accent)] md:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)]">
              <div className="flex flex-col p-6 sm:p-8 md:p-9">
                <span className="font-mono text-xs text-[var(--accent)]">
                  01 / Website development
                </span>

                <h3 className="mt-7 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  Beyond the Page
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  A digital scrapbook documenting Sofiyah Bakare&apos;s
                  journey through the World Literacy Foundation&apos;s Youth
                  Power in Action programme.
                </p>

                <p className="mt-5 text-sm text-[var(--muted)]">
                  Project owner and storyteller:{" "}
                  <a
                    href="https://www.instagram.com/sofiyah_bakare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--accent)] hover:underline"
                  >
                    Sofiyah Bakare ↗
                  </a>
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8 text-sm">
                  <Link
                    href="/collaborations/beyond-the-page"
                    className="font-medium text-[var(--accent)] hover:underline"
                  >
                    Read the case study ↗
                  </Link>

                  <a
                    href="https://beyond-the-page-two.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
                  >
                    Visit website ↗
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between border-t border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 md:border-l md:border-t-0 md:p-9">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    The distinction
                  </p>

                  <h4 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    Her story. My implementation.
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    Sofiyah&apos;s experiences and reflections remain hers.
                    My role was to build the website that presents her story.
                  </p>
                </div>

                <Link
                  href="/collaborations"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  View the collaboration index
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <ScrollReveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  End / Next conversation
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl md:text-6xl">
                  Have something worth exploring?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  Questions about the work, an idea worth discussing, or
                  something interesting to investigate? Get in touch.
                </p>
              </div>

              <Link
                href="/contact"
                className="motion-lift inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)] md:self-auto"
              >
                Get in touch
                <span className="motion-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}