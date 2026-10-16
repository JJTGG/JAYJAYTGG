import Link from "next/link";
import ProjectPreview from "../../../components/ProjectPreview";

const projectUrl = "https://beyond-the-page-two.vercel.app";
const sourceUrl = "https://github.com/JJTGG/beyond-the-page";
const sofiyahInstagram = "https://www.instagram.com/sofiyah_bakare";

export default function BeyondThePageCaseStudy() {
  return (
    <main>
      {/* Introduction */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
          <Link
            href="/collaborations"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <span aria-hidden="true">←</span>
            Back to collaborations
          </Link>

          <div className="mt-12 max-w-5xl sm:mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Collaboration / Website development
            </p>

            <h1 className="mt-5 text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
              Beyond the Page
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              A digital scrapbook documenting Sofiyah Bakare&apos;s six-week
              journey through the World Literacy Foundation&apos;s Youth Power
              in Action programme.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              The website follows her experiences with learning, teaching,
              literacy advocacy, conversations, and the ideas she hopes to
              carry forward after the programme. It gives her story a place
              to unfold chapter by chapter.
            </p>

            <p className="mt-6 text-sm text-[var(--muted)]">
              Project owner and storyteller:{" "}
              <a
                href={sofiyahInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] hover:underline"
              >
                Sofiyah Bakare ↗
              </a>
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] hover:underline"
              >
                Visit the live website ↗
              </a>

              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                View source repository ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution and contribution */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              My contribution
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
              Building the place for the story.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              I built the website implementation for Beyond the Page,
              including its chapter-based reading experience, supporting
              interface components, and interactive reader features.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              The story, experiences, and personal reflections belong to
              Sofiyah. My contribution was building the website through
              which she presents them.
            </p>

            <dl className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              <div className="grid gap-1 py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-5">
                <dt className="text-sm text-[var(--muted)]">
                  Project owner
                </dt>
                <dd className="text-sm font-medium">
                  <a
                    href={sofiyahInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    Sofiyah Bakare ↗
                  </a>
                </dd>
              </div>

              <div className="grid gap-1 py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-5">
                <dt className="text-sm text-[var(--muted)]">
                  My role
                </dt>
                <dd className="text-sm font-medium">
                  Website development and implementation
                </dd>
              </div>

              <div className="grid gap-1 py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-5">
                <dt className="text-sm text-[var(--muted)]">
                  Project type
                </dt>
                <dd className="text-sm font-medium">
                  Personal storytelling website
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Live website */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Explore the experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
              Beyond the Page, in its own words.
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              Explore the deployed website below. You can change the preview
              viewport or open the website directly.
            </p>
          </div>

          <ProjectPreview
            projectName="Beyond the Page"
            liveUrl={projectUrl}
            sourceUrl={sourceUrl}
          />
        </div>
      </section>

      {/* External links and return path */}
      <section>
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 px-[var(--page-gutter)] py-16 sm:py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Follow the work
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              The story and the implementation.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              Read the original story on its own website, inspect the source
              code, or follow Sofiyah for more of her work and writing.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] hover:underline"
              >
                Beyond the Page ↗
              </a>

              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                GitHub repository ↗
              </a>

              <a
                href={sofiyahInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Sofiyah on Instagram ↗
              </a>
            </div>
          </div>

          <Link
            href="/collaborations"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-md border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] md:self-auto"
          >
            More collaborations <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}