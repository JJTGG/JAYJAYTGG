
export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            About / Approach
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            What sits behind the work.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            I build ideas into things that actually exist. The interesting
            part is figuring out what an idea needs to become, how its pieces
            should connect, and what happens when it has to work beyond the
            original thought.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / What I build
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                The idea determines the form.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              <p>
                The ideas that hold my attention tend to grow beyond a single
                page or feature. Depending on what they need, they become
                products, tools, experiments, or systems.
              </p>

              <p>
                I&apos;m interested in taking something that mostly exists as
                a thought and working out what it looks like when the pieces
                have to connect, assumptions get tested, and someone could
                actually use the result.
              </p>

              <p>
                Not every idea needs to become a product. Sometimes building
                it is simply the quickest way to find out what the idea
                really is.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16 sm:mt-24 sm:pt-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / How I think
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Systems, not just surfaces.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              <p>
                A project is rarely just a page or an interface to me.
                I&apos;m thinking about how its parts connect, what the
                underlying system should do, what happens when something
                changes, and whether the whole thing holds together.
              </p>

              <p>
                That means looking beyond the first visible result:
                considering the workflow, the data, the failure cases, and
                the experience of using the thing once the novelty wears off.
              </p>

              <p>
                The implementation can change completely. Understanding the
                problem and how its pieces fit together is what guides the
                work.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16 sm:mt-24 sm:pt-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                03 / How I work
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Start with what can be tested.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              <p>
                I work independently and prefer to build from questions I
                actually want answered. I&apos;d rather take an idea that
                keeps bothering me and work out what it could become than
                simply execute someone else&apos;s specification from
                beginning to end.
              </p>

              <p>
                Constraints are part of the process, not a reason to wait for
                ideal conditions. If something can be tested with very
                little, I&apos;d rather test it first, learn what matters,
                and build from evidence.
              </p>

              <p>
                That approach helps separate what the idea needs now from
                what can wait. It also makes it easier to challenge an
                assumption before it becomes a much larger problem.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-16 sm:mt-24 sm:pt-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                04 / The wider ecosystem
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                An ecosystem I&apos;m currently building.
              </h2>
            </div>

            <div>
              <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
                <p>
                  TGG HUB is an ecosystem I&apos;m currently building around
                  a connected set of projects and ideas. It provides room
                  for related work to grow together without requiring every
                  independent project to belong to it.
                </p>

                <p>
                  Some projects stand on their own. Others become more
                  useful when they connect to something else. I&apos;m
                  working out those relationships through the systems
                  themselves, rather than assuming every idea needs the
                  same structure.
                </p>
              </div>

              <a
                href="/tgg-hub"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
              >
                Explore TGG HUB <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Further in
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                The work is the evidence.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Explore the projects, systems, and experiments at their
                actual stages of development.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm">
              <a
                href="/work"
                className="font-medium transition-colors hover:text-[var(--accent)]"
              >
                Projects and systems ↗
              </a>

              <a
                href="/experiments"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Experiments ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
