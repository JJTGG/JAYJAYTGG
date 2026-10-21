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

const showcaseExperiment =
  experiments.find((project) => project.slug === "auren") ?? experiments[0];

const supportingExperiments = experiments.filter(
  (project) => project.slug !== showcaseExperiment?.slug
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

const ecosystemPaths = [
  {
    number: "01",
    label: "Products",
    description: "Ideas developed into things people can use.",
    href: "#selected-work"
  },
  {
    number: "02",
    label: "Systems",
    description: "The foundations behind longer-term work.",
    href: "#systems"
  },
  {
    number: "03",
    label: "Experiments",
    description: "Questions worth testing before drawing conclusions.",
    href: "#experiments"
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

      {/* Selected products — editorial lead and supporting work */}
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
                      className="pointer-events-none absolute inset-0 z-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                        backgroundSize: "32px 32px"
                      }}
                    />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                        Lead project
                      </span>
                      <span className="font-mono text-xs text-[var(--muted)]">
                        01 / {String(featuredProjects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative z-10 py-8">
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

                    <p className="relative z-10 max-w-xs text-sm leading-6 text-[var(--muted)]">
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

      {/* TGG HUB — an ecosystem, not another product card */}
      <section
        aria-labelledby="tgg-hub-heading"
        className="border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
              <div className="flex flex-col justify-between gap-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    The wider direction / 02
                  </p>

                  <h2
                    id="tgg-hub-heading"
                    className="mt-5 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-5xl md:text-6xl"
                  >
                    Separate projects.
                    <span className="block text-[var(--muted)]">
                      Shared direction.
                    </span>
                  </h2>
                </div>

                <p className="max-w-lg text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                  TGG HUB is the wider ecosystem taking shape around
                  independent products, experiments and connected systems.
                  The projects keep their own purposes; the wider direction
                  gives them room to connect over time.
                </p>
              </div>

              <div className="group relative isolate overflow-hidden border-y border-[var(--line)] bg-[var(--surface)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                  }}
                />

                <div className="relative z-10 flex h-full flex-col justify-between gap-9 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                      An independent ecosystem
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      TGG / 02
                    </span>
                  </div>

                  <div
                    aria-label="TGG HUB"
                    className="select-none py-2 text-[clamp(5.5rem,14vw,10rem)] font-semibold leading-[0.78] tracking-[-0.12em]"
                  >
                    <span className="block">TGG</span>
                    <span className="block pl-[0.16em] text-[var(--accent)] transition-transform duration-500 ease-out group-hover:translate-x-2">
                      HUB<span className="text-[var(--foreground)]">.</span>
                    </span>
                  </div>

                  <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                      One wider direction. Different projects, purposes and
                      stages of development.
                    </p>

                    <div className="flex shrink-0 flex-col items-start gap-4">
                      <Link
                        href="/tgg-hub"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
                      >
                        Understand the ecosystem
                        <span className="motion-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </Link>

                      <a
                        href="https://tgg-hub.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                      >
                        Visit TGG HUB
                        <span className="motion-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid border-y border-[var(--line)] md:grid-cols-3 md:divide-x md:divide-[var(--line)]">
            {ecosystemPaths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                className="group relative flex min-h-[132px] flex-col justify-between gap-5 border-b border-[var(--line)] p-5 transition-colors duration-200 hover:bg-[var(--surface)] last:border-b-0 md:border-b-0 md:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {path.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="motion-arrow text-sm text-[var(--muted)] group-hover:text-[var(--accent)]"
                  >
                    ↗
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] transition-transform duration-200 ease-out group-hover:translate-x-1">
                    {path.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {path.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Developing systems — ordered, transparent and in progress */}
      <section
        id="systems"
        className="scroll-mt-8 border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <ScrollReveal>
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  In development / 03
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl md:text-6xl">
                  The foundations are part of the work.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                Not everything is ready to present as a finished product.
                These systems are at different stages of development, and
                the underlying work deserves to be shown honestly.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 border-y border-[var(--line)]">
            {developingSystems.map((project, index) => (
              <ScrollReveal key={project.slug} delayMs={index * 60}>
                <article className="group relative isolate grid grid-cols-[42px_minmax(0,1fr)] gap-x-3 gap-y-5 overflow-hidden border-b border-[var(--line)] py-7 transition-colors duration-300 last:border-b-0 hover:bg-[var(--surface)] focus-within:bg-[var(--surface)] sm:gap-x-5 sm:py-9 md:grid-cols-[64px_minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-6 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[3px] before:origin-top before:scale-y-0 before:bg-[var(--accent)] before:transition-transform before:duration-500 before:ease-out before:content-[''] group-hover:before:scale-y-100 group-focus-within:before:scale-y-100">
                  <span className="relative z-10 pt-1 pl-2 font-mono text-sm text-[var(--accent)] transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 sm:pl-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 min-w-0">
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                      {project.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] transition-all duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)] sm:text-3xl">
                      {project.name}
                    </h3>

                    <div className="mt-4">
                      <StatusLabel status={project.status} />
                    </div>
                  </div>

                  <div className="relative z-10 col-start-2 min-w-0 md:col-start-auto">
                    <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
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

      {/* Experiments — one lead exploration and smaller supporting entries */}
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

                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl md:text-6xl">
                  Not everything needs to become a product.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                  Experiments are a place to test an idea, explore an
                  interface or learn something without pretending every
                  attempt is a finished offering.
                </p>
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

          {showcaseExperiment && (
            <div className="mt-12 grid items-stretch gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10">
              <ScrollReveal delayMs={80} className="h-full">
                <article className="group relative isolate flex h-full min-h-[430px] flex-col overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] p-6 sm:min-h-[500px] sm:p-8 lg:p-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                      backgroundSize: "32px 32px"
                    }}
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 top-1/2 z-0 -translate-y-1/2 select-none text-[clamp(15rem,32vw,25rem)] font-semibold leading-none tracking-[-0.14em] text-[var(--line)] transition-transform duration-500 ease-out group-hover:-translate-y-[53%] group-hover:translate-x-2"
                  >
                    {showcaseExperiment.name.slice(0, 1)}.
                  </span>

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      01 / {showcaseExperiment.type}
                    </span>
                    <StatusLabel status={showcaseExperiment.status} />
                  </div>

                  <div className="relative z-10 my-auto py-12">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                      A closer look at the idea
                    </p>

                    <h3 className="mt-5 max-w-xl text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.08em] transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {showcaseExperiment.name}
                    </h3>

                    {showcaseExperiment.slug === "auren" && (
                      <p className="mt-5 text-sm font-medium uppercase tracking-[0.13em] text-[var(--accent)]">
                        The New Everyday
                      </p>
                    )}

                    <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                      {showcaseExperiment.description}
                    </p>

                    {showcaseExperiment.credit && (
                      <p className="mt-4 text-xs text-[var(--muted)]">
                        {showcaseExperiment.credit}
                      </p>
                    )}
                  </div>

                  <div className="relative z-10 border-t border-[var(--line)] pt-1">
                    <ProjectLinks project={showcaseExperiment} />
                  </div>
                </article>
              </ScrollReveal>

              {supportingExperiments.length > 0 && (
                <div className="flex min-w-0 flex-col border-y border-[var(--line)]">
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] px-4 py-4 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                      Other experiments
                    </p>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      02—{String(experiments.length).padStart(2, "0")}
                    </span>
                  </div>

                  {supportingExperiments.map((project, index) => (
                    <ScrollReveal
                      key={project.slug}
                      delayMs={(index + 1) * 80}
                      className="h-full"
                    >
                      <article className="group relative isolate flex h-full flex-col overflow-hidden border-b border-[var(--line)] p-5 transition-colors duration-300 last:border-b-0 hover:bg-[var(--surface)] focus-within:bg-[var(--surface)] sm:p-6 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[2px] before:origin-top before:scale-y-0 before:bg-[var(--accent)] before:transition-transform before:duration-300 before:ease-out before:content-[''] group-hover:before:scale-y-100 group-focus-within:before:scale-y-100">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="font-mono text-xs text-[var(--accent)]">
                            {String(index + 2).padStart(2, "0")} / {project.type}
                          </span>
                          <StatusLabel status={project.status} />
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.045em] transition-all duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)] sm:text-3xl">
                          {project.name}
                        </h3>

                        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                          {project.shortDescription}
                        </p>

                        {project.credit && (
                          <p className="mt-3 text-xs text-[var(--muted)]">
                            {project.credit}
                          </p>
                        )}

                        <ProjectLinks project={project} />
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Collaborations — separate from personal products, with clear attribution */}
      <section
        id="collaborations"
        className="scroll-mt-8 border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-28">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-16">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Work built for others / 05
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl md:text-6xl">
                  Sometimes the story isn&apos;t mine to tell.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div>
                <p className="text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                  Collaboration means making room for someone else&apos;s
                  vision and contributing the implementation that helps it
                  reach people. The ownership of the idea and the story
                  should remain clear.
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
            <article className="group relative isolate mt-12 grid overflow-hidden border-y border-[var(--line)] md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
              <div className="flex min-w-0 flex-col py-7 sm:py-9 md:py-11 md:pr-10 lg:pr-14">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    01 / Website development
                  </span>
                  <span className="text-xs text-[var(--muted)]">
                    Beyond the Page
                  </span>
                </div>

                <h3 className="mt-8 text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[0.94] tracking-[-0.075em] transition-transform duration-500 ease-out group-hover:translate-x-1">
                  Beyond the Page
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  A digital scrapbook documenting Sofiyah Bakare&apos;s
                  journey through the World Literacy Foundation&apos;s Youth
                  Power in Action programme.
                </p>

                <div className="mt-7 border-l-2 border-[var(--accent)] pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--muted)]">
                    Project owner and storyteller
                  </p>

                  <a
                    href="https://www.instagram.com/sofiyah_bakare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-base font-medium text-[var(--foreground)] hover:text-[var(--accent)]"
                  >
                    Sofiyah Bakare
                    <span className="motion-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>

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

              <div className="relative isolate flex min-h-[320px] flex-col justify-between overflow-hidden border-t border-[var(--line)] bg-[var(--surface)] p-6 sm:min-h-[360px] sm:p-8 md:border-l md:border-t-0 lg:p-10">
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
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    The distinction
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    BTP / 01
                  </span>
                </div>

                <div className="relative z-10 py-8">
                  <span className="block text-[clamp(5rem,12vw,8rem)] font-semibold leading-[0.8] tracking-[-0.12em] text-[var(--accent)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    BTP.
                  </span>

                  <h4 className="mt-8 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl">
                    Her story.
                    <span className="block text-[var(--muted)]">
                      My implementation.
                    </span>
                  </h4>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
                    Sofiyah&apos;s experiences and reflections remain hers.
                    My contribution was building the website that presents
                    her story.
                  </p>
                </div>

                <Link
                  href="/collaborations"
                  className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  View the collaboration index
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing / contact */}
      <section aria-labelledby="contact-heading">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-24 lg:py-32">
          <ScrollReveal>
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.65fr)] md:items-end md:gap-16">
              <div className="max-w-3xl">
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  <span
                    aria-hidden="true"
                    className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
                  />
                  End / Next conversation
                </p>

                <h2
                  id="contact-heading"
                  className="mt-5 text-[clamp(3rem,7.5vw,6.5rem)] font-semibold leading-[0.93] tracking-[-0.075em]"
                >
                  Have something
                  <span className="block text-[var(--accent)]">
                    worth exploring?
                  </span>
                </h2>
              </div>

              <div className="flex flex-col items-start gap-6">
                <p className="max-w-md text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                  A question about the work, a problem worth solving, or a
                  possible collaboration. Start a conversation and let&apos;s
                  see where it leads.
                </p>

                <Link
                  href="/contact"
                  className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
                >
                  Get in touch
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  Return to the work
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