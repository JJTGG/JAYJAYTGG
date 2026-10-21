import type { Metadata } from "next";
import Link from "next/link";
import ProjectPreview from "../../../components/ProjectPreview";
import ScrollReveal from "../../components/ScrollReveal";

const projectName = "Beyond the Page";
const projectUrl = "https://beyond-the-page-two.vercel.app";
const sourceUrl = "https://github.com/JJTGG/beyond-the-page";
const sofiyahInstagram = "https://www.instagram.com/sofiyah_bakare";

const pageTitle = `${projectName} — Collaboration Case Study`;
const pageDescription =
  "A website development case study covering the digital scrapbook built for Sofiyah Bakare's Youth Power in Action journey, with clear project ownership and implementation attribution.";

const pageUrl =
  "https://jayjaytgg.vercel.app/collaborations/beyond-the-page";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    type: "article",
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

const implementationAreas = [
  {
    number: "01",
    title: "Chapter-based reading",
    description:
      "A structure that gives the story room to unfold in chapters rather than presenting the experience as one uninterrupted page."
  },
  {
    number: "02",
    title: "Supporting interface",
    description:
      "The interface components that organise the content and make the reading experience usable."
  },
  {
    number: "03",
    title: "Reader interactions",
    description:
      "Interactive reader features that give the website more than a purely static presentation."
  }
];

function ExternalLink({
  href,
  children,
  subtle = false
}: {
  href: string;
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-10 items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)] ${
        subtle ? "text-[var(--muted)]" : "text-[var(--accent)]"
      }`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function RecordRow({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 py-4 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-5">
      <dt className="text-sm text-[var(--muted)]">{label}</dt>
      <dd className="min-w-0 text-sm leading-7">{children}</dd>
    </div>
  );
}

export default function BeyondThePageCaseStudy() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
          <Link
            href="/collaborations"
            className="inline-flex min-h-10 items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <span aria-hidden="true">←</span>
            Collaborations
          </Link>

          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)] md:items-end md:gap-16">
            <ScrollReveal>
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  <span
                    aria-hidden="true"
                    className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
                  />
                  Collaboration / Case study
                </p>

                <h1 className="mt-6 max-w-4xl text-[clamp(3.3rem,9vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.08em]">
                  Beyond
                  <span className="block text-[var(--accent)]">
                    the Page.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
                  A digital scrapbook documenting Sofiyah Bakare&apos;s
                  six-week journey through the World Literacy Foundation&apos;s
                  Youth Power in Action programme.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  <ExternalLink href={projectUrl}>
                    Visit the website
                  </ExternalLink>

                  <ExternalLink href={sourceUrl} subtle>
                    Source repository
                  </ExternalLink>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <aside className="relative isolate overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
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
                      Project record
                    </p>

                    <span className="font-mono text-xs text-[var(--accent)]">
                      BTP / 01
                    </span>
                  </div>

                  <p className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.065em] sm:text-5xl">
                    Her story.
                    <span className="block text-[var(--muted)]">
                      My implementation.
                    </span>
                  </p>

                  <dl className="mt-8 divide-y divide-[var(--line)] border-t border-[var(--line)]">
                    <RecordRow label="Project owner">
                      <a
                        href={sofiyahInstagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[var(--accent)] hover:underline"
                      >
                        Sofiyah Bakare ↗
                      </a>
                    </RecordRow>

                    <RecordRow label="My contribution">
                      Website development and implementation
                    </RecordRow>

                    <RecordRow label="Format">
                      Personal storytelling website
                    </RecordRow>

                    <RecordRow label="Availability">
                      Published website with an interactive preview
                    </RecordRow>
                  </dl>
                </div>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="story-heading"
        className="border-b border-[var(--line)]"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20 lg:py-24">
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / The story
              </p>

              <h2
                id="story-heading"
                className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-5xl"
              >
                A personal journey deserves its own space.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div>
              <p className="text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                Beyond the Page follows Sofiyah&apos;s experiences across
                learning, teaching, literacy advocacy, conversations, and
                the ideas she hopes to carry forward after the programme.
                The website gives those experiences a place to unfold
                chapter by chapter.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                The important distinction is that the website presents
                someone else&apos;s personal story. Its design and
                implementation support that story without claiming
                ownership of the experiences or reflections behind it.
              </p>

              <div className="mt-8 border-l-2 border-[var(--accent)] pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Story and project ownership
                </p>

                <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                  Sofiyah Bakare
                </p>

                <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                  Project owner and storyteller
                </p>

                <a
                  href={sofiyahInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  Find Sofiyah on Instagram
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="implementation-heading"
        className="border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid gap-6 border-b border-[var(--line)] pb-8 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  02 / Implementation
                </p>

                <h2
                  id="implementation-heading"
                  className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-5xl"
                >
                  Building the place for the story.
                </h2>
              </div>

              <p className="text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                My role was to build the website and its supporting
                experience. The implementation is the contribution being
                documented here—not authorship of the underlying story.
              </p>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-[var(--line)]">
            {implementationAreas.map((area, index) => (
              <ScrollReveal key={area.number} delayMs={index * 80}>
                <article className="grid gap-4 py-7 sm:grid-cols-[64px_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-9">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {area.number}
                  </span>

                  <h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                    {area.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    {area.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-7 max-w-3xl text-xs leading-6 text-[var(--muted)]">
            These areas describe the implementation at a high level; this
            case study does not imply that every possible feature or future
            enhancement is complete.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="preview-heading"
        className="border-b border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="mb-8 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  03 / Live preview
                </p>

                <h2
                  id="preview-heading"
                  className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-5xl"
                >
                  Explore the implementation.
                </h2>
              </div>

              <p className="text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                Inspect the available preview, change its viewport, or open
                the published website directly.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <ProjectPreview
              projectName={projectName}
              liveUrl={projectUrl}
              sourceUrl={sourceUrl}
            />
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="closing-heading">
        <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12 lg:py-24">
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                04 / Attribution
              </p>

              <h2
                id="closing-heading"
                className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl md:text-5xl"
              >
                One website. Two distinct contributions.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                Sofiyah&apos;s experiences and personal reflections remain
                hers. My contribution is the website built to present them.
                Both belong in the project record.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/collaborations"
                className="motion-lift inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
              >
                All collaborations
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/work"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--line)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Independent work
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}