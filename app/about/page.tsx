import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const pageTitle = "About — JAYJAYTGG";
const pageDescription =
  "Meet JAYJAYTGG, an independent builder working on products, practical tools, experiments, and systems through implementation, testing, and iteration.";
const pageUrl = "https://jayjaytgg.vercel.app/about";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "JAYJAYTGG"
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription
  }
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-[var(--page-gutter)] py-16 sm:py-20 md:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] md:items-end md:gap-16 md:py-28 lg:py-32">
          <ScrollReveal>
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                <span
                  aria-hidden="true"
                  className="motion-pulse h-2 w-2 rounded-full bg-[var(--accent)]"
                />
                About / How I work
              </p>

              <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.93] tracking-[-0.075em]">
                I build to find out what an idea can become.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                I&apos;m an independent builder. I work on products,
                practical tools, experiments, and systems that begin with
                an idea, a question I want to answer, or a problem I want
                to understand.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                I learn by making things, testing what I believe should
                work, and improving them when reality disagrees with the
                plan. The result matters, but so does understanding how
                it works.
              </p>

              <a
                href="#approach"
                className="motion-lift mt-8 inline-flex min-h-12 items-center gap-3 border-b border-[var(--accent)] py-3 text-sm font-semibold"
              >
                How I approach the work
                <span className="motion-arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
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
                    Working principle
                  </p>

                  <span className="font-mono text-xs text-[var(--accent)]">
                    JJTGG / 01
                  </span>
                </div>

                <p className="mt-10 text-4xl font-semibold leading-[0.98] tracking-[-0.07em] sm:text-5xl">
                  Investigate.
                  <span className="block text-[var(--muted)]">
                    Build.
                  </span>
                  <span className="block text-[var(--accent)]">
                    Find out.
                  </span>
                </p>

                <p className="mt-7 max-w-sm text-sm leading-7 text-[var(--muted)]">
                  Start with the question. Understand the constraints.
                  Build something testable. Let what happens inform
                  what comes next.
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="approach"
        aria-labelledby="what-i-build-heading"
        className="scroll-mt-8"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  01 / What I build
                </p>

                <h2
                  id="what-i-build-heading"
                  className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.055em] sm:text-4xl"
                >
                  Different ideas need different solutions.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                <p>
                  Some ideas become products people can use. Others become
                  tools that solve a specific problem, experiments that test
                  an approach, or larger systems that connect several
                  moving parts.
                </p>

                <p>
                  I don&apos;t assume every idea needs to become a business,
                  and I don&apos;t treat every experiment as a finished
                  product. Sometimes a small working version is enough to
                  reveal whether an idea deserves more attention.
                </p>

                <p>
                  The projects here are at different stages. The presentation
                  should reflect that honestly: what exists, what is still
                  being built, and what remains unfinished.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 sm:mt-24 sm:pt-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  02 / How I think
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                  Understand the system behind the screen.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                <p>
                  An interface is only one part of a product. I also think
                  about the data behind it, the steps a user takes, how its
                  components communicate, and what happens when something
                  goes wrong.
                </p>

                <p>
                  A feature can look complete and still fail because an
                  underlying workflow is incomplete, an assumption is wrong,
                  or an important case was overlooked.
                </p>

                <p>
                  That is why I care about the implementation as well as the
                  experience. Both have to make sense for the whole thing
                  to work.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 sm:mt-24 sm:pt-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  03 / How I work
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                  Test assumptions. Learn. Adjust.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                <p>
                  I work independently and prefer to understand a problem
                  before committing to a solution. I break ideas down,
                  identify what can be tested, and work from there.
                </p>

                <p>
                  I also build within real constraints. I cannot always
                  start with ideal resources, infrastructure, or conditions,
                  so I look for practical ways to make progress without
                  pretending those limitations do not exist.
                </p>

                <p>
                  When something fails, the next step is to find out why.
                  I would rather verify an assumption and correct the
                  approach than keep adding complexity to something
                  that does not work.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="backendvert-title"
        className="border-y border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-10 sm:py-14">
          <ScrollReveal>
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Personal note / Unofficial classification
                </p>

                <h2
                  id="backendvert-title"
                  className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl"
                >
                  The Backendvert.
                </h2>

                <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                  A personality type currently under development.
                </p>
              </div>

              <div className="text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                <p className="font-medium text-[var(--foreground)]">
                  Introvert by nature. Infrastructure-minded by choice.
                </p>

                <p className="mt-3">
                  I build systems designed to face the world while preferring
                  to work behind the scenes. My projects can have the
                  spotlight; I do not necessarily need it.
                </p>

                <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 font-medium text-[var(--foreground)]">
                  Public products. Private developer. API connections
                  preferred.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="ecosystem-heading">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  04 / The wider ecosystem
                </p>

                <h2
                  id="ecosystem-heading"
                  className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.055em] sm:text-4xl"
                >
                  Connections without losing independence.
                </h2>
              </div>

              <div>
                <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                  <p>
                    TGG HUB is an ecosystem I am building around selected
                    projects and their useful connections. It gives related
                    work room to develop together without making every
                    project part of the same product.
                  </p>

                  <p>
                    Each project can keep its own identity, purpose, and
                    direction. Where connections are useful, I can develop
                    them deliberately instead of forcing everything into
                    one structure.
                  </p>
                </div>

                <Link
                  href="/tgg-hub"
                  className="motion-lift mt-8 inline-flex min-h-10 items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                >
                  Explore TGG HUB
                  <span className="motion-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Further in
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                  The projects show the approach in practice.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  Explore the actual work, see where each project stands,
                  or get in touch about something worth discussing.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm">
                <Link
                  href="/work"
                  className="font-medium transition-colors hover:text-[var(--accent)]"
                >
                  Projects and systems ↗
                </Link>

                <Link
                  href="/experiments"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  Browse experiments ↗
                </Link>

                <Link
                  href="/contact"
                  className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  Get in touch ↗
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}