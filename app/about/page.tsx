import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            About / How I work
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            I build to find out what an idea can become.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            I'm an independent builder. I work on products, practical
            tools, experiments, and systems that begin with an idea,
            a question I want to answer, or a problem I want to understand.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            I learn by making things, testing what I believe should work,
            and improving them when reality disagrees with the plan.
            The result matters, but so does understanding how it works.
          </p>
        </div>
      </section>

      {/* What I build */}
      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / What I build
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
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
                I don't assume every idea needs to become a business,
                and I don't treat every experiment as a finished product.
                Sometimes a small working version is enough to reveal
                whether an idea deserves more attention.
              </p>

              <p>
                The projects on this site are at different stages.
                I want the presentation to reflect that honestly:
                what exists, what is still being built, and what remains
                unfinished.
              </p>
            </div>
          </div>

          {/* How I think */}
          <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 sm:mt-24 sm:pt-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / How I think
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Understand the system behind the screen.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              <p>
                An interface is only one part of a product. I'm also
                thinking about the data behind it, the steps a user
                takes, how its components communicate, and what happens
                when something goes wrong.
              </p>

              <p>
                I want to understand how the pieces fit together.
                A feature can look complete and still fail because
                the underlying workflow is incomplete, an assumption
                is wrong, or an important case was overlooked.
              </p>

              <p>
                That is why I care about the implementation as well
                as the experience. Both have to make sense for the
                whole thing to work.
              </p>
            </div>
          </div>

          {/* How I work */}
          <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 sm:mt-24 sm:pt-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                03 / How I work
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
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
                I also build within real constraints. I can't always
                start with the ideal resources, infrastructure, or
                conditions, so I look for practical ways to make progress
                without pretending those limitations don't exist.
              </p>

              <p>
                When something fails, the next step is to find out why.
                I would rather verify an assumption and correct the
                approach than keep adding complexity to something
                that doesn't work.
              </p>
            </div>
          </div>

          {/* TGG HUB */}
          <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 sm:mt-24 sm:pt-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                04 / The wider ecosystem
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Connections without losing independence.
              </h2>
            </div>

            <div>
              <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                <p>
                  TGG HUB is an ecosystem I'm building around selected
                  projects and the connections between them. It gives
                  related work room to develop together without making
                  every project part of the same product.
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
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
              >
                Explore TGG HUB
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Continue exploring */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Further in
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                The projects show the approach in practice.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Explore the actual work, see where each project stands,
                or get in touch about something worth discussing.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm">
              <Link
                href="/work"
                className="font-medium transition-colors hover:text-[var(--accent)]"
              >
                Explore projects and systems ↗
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
        </div>
      </section>
    </main>
  );
}