import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Collaborations";
const pageDescription =
  "Websites and digital experiences I've built for other people, with clear project ownership and attribution.";

const pageUrl = "https://jayjaytgg.vercel.app/collaborations";

const projectUrl = "https://beyond-the-page-two.vercel.app";
const sofiyahInstagram = "https://www.instagram.com/sofiyah_bakare";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    type: "website",
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

export default function CollaborationsPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Selected work / Collaborations
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            Built for someone else&apos;s story.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            Not everything I build is my own product or idea. This
            collection documents websites and digital experiences I develop
            for other people, while keeping their work, stories, and
            ownership distinct from my own.
          </p>
        </div>
      </section>

      {/* Collaboration catalogue */}
      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-24">
          <article className="overflow-hidden rounded-xl border border-[var(--line)]">
            <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
              <div className="flex flex-col p-6 sm:p-9 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    01 / Website development
                  </span>

                  <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                    Published
                  </span>
                </div>

                <h2 className="mt-8 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl md:text-5xl">
                  Beyond the Page
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  A personal digital scrapbook documenting Sofiyah
                  Bakare&apos;s six-week journey through the World Literacy
                  Foundation&apos;s Youth Power in Action programme.
                </p>

                <p className="mt-5 text-sm text-[var(--muted)]">
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

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8 text-sm">
                  <Link
                    href="/collaborations/beyond-the-page"
                    className="font-medium text-[var(--accent)] hover:underline"
                  >
                    Read the case study ↗
                  </Link>

                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    Visit website ↗
                  </a>
                </div>
              </div>

              <div className="flex min-h-[280px] flex-col justify-between border-t border-[var(--line)] bg-[var(--surface)] p-7 sm:p-9 md:border-l md:border-t-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    The distinction
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    Her story. My implementation.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    Sofiyah owns the story and personal reflections. My
                    contribution is the website built to present them.
                    Both deserve clear attribution.
                  </p>
                </div>

                <div className="mt-10 border-t border-[var(--line)] pt-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    My role
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    Website development and implementation
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Return to the portfolio */}
          <div className="mt-16 border-t border-[var(--line)] pt-8 sm:mt-20 sm:pt-10">
            <p className="text-sm leading-7 text-[var(--muted)]">
              These collaborations sit alongside my independent products,
              systems, and experiments—not inside their catalogue.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link
                href="/work"
                className="font-medium text-[var(--accent)] hover:underline"
              >
                Explore my projects ↗
              </Link>

              <Link
                href="/experiments"
                className="font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Explore my experiments ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}