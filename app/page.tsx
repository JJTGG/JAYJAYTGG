import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import { projects, type Project } from "../lib/projects";

const featuredProjects = projects.filter(
  (project) => project.portfolioSection === "featured"
);

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
  { number: "01", label: "Products", href: "#selected-work" },
  { number: "02", label: "Systems", href: "#systems" },
  { number: "03", label: "Experiments", href: "#experiments" },
  { number: "04", label: "Collaborations", href: "#collaborations" }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="w-full max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              <span
                aria-hidden="true"
                className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
              />
              Independent builder
            </p>

            <h1 className="max-w-3xl text-[clamp(3.1rem,6.8vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              I build ideas
              <span className="block">into things that</span>
              <span className="block text-[var(--accent)]">
                actually exist.
              </span>
            </h1>

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
        </div>

        {/* Direct paths into the portfolio */}
        <div className="border-t border-[var(--line)]">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-[var(--page-gutter)] py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Find your way in
            </p>

            <nav
              aria-label="Explore portfolio categories"
              className="flex flex-wrap gap-x-5 gap-y-3"
            >
              {workPaths.map((path) => (
                <a
                  key={path.href}
                  href={path.href}
                  className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                >
                  <span className="font-mono text-[10px] text-[var(--muted)]">
                    {path.number}
                  </span>

                  <span>{path.label}</span>

                  <span
                    className="motion-arrow text-[var(--muted)]"
                    aria-hidden="true"
                  >
                    ↘
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Featured products */}
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
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)]"
              >
                Browse all projects
                <span className="motion-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ScrollReveal
                key={project.slug}
                delayMs={Math.min(index * 80, 320)}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <article
                  className={`motion-lift group relative h-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--background)] hover:border-[var(--accent)] ${
                    index === 0
                      ? "md:grid md:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)]"
                      : ""
                  }`}
                >
                  <div className="flex h-full flex-col p-6 sm:p-8 md:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")} / {project.type}
                      </span>

                      <StatusLabel status={project.status} />
                    </div>

                    <h3 className="mt-8 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                      {project.name}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                      {project.shortDescription}
                    </p>

                    {index === 0 && (
                      <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                        A product built for a global audience, continuing
                        through the work of refinement after its public release.
                      </p>
                    )}

                    <div className="mt-auto">
                      {project.credit && (
                        <p className="mt-5 text-xs text-[var(--muted)]">
                          {project.credit}
                        </p>
                      )}

                      <ProjectLinks project={project} />
                    </div>
                  </div>

                  {index === 0 && (
                    <div className="relative hidden min-h-[320px] overflow-hidden border-l border-[var(--line)] bg-[var(--surface)] p-7 md:flex md:flex-col md:justify-between">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{
                          backgroundImage:
                            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                          backgroundSize: "32px 32px"
                        }}
                      />

                      <div className="relative flex items-start justify-between gap-3">
                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                          Social / Communication
                        </span>

                        <span className="motion-arrow text-sm text-[var(--accent)]">
                          ↗
                        </span>
                      </div>

                      <div className="relative">
                        <span className="block text-[clamp(5rem,10vw,9rem)] font-semibold leading-none tracking-[-0.09em] text-[var(--accent)] transition-transform duration-500 ease-out group-hover:-translate-y-2">
                          A.
                        </span>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted)]">
                          People first. Conversation at the center.
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
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
                <article className="group grid gap-5 py-7 sm:grid-cols-[64px_minmax(0,1fr)] sm:py-9">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                          {project.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-[var(--accent)]">
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
                <article className="motion-lift flex h-full flex-col rounded-xl border border-[var(--line)] p-6 hover:border-[var(--accent)] hover:bg-[var(--surface)] sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")} / {project.type}
                    </span>

                    <StatusLabel status={project.status} />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
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