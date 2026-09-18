export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            About
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            What sits behind the work.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I tend to follow an idea far enough that it stops being just an
            idea. The interesting part is figuring out what it needs to become,
            what can be tested, and what happens when it has to work in the
            real world.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              What keeps getting built
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>
              The ideas that hold my attention tend to grow beyond a single
              page or feature. They become products, tools, experiments, or
              systems depending on what the idea actually needs.
            </p>

            <p>
              I&apos;m interested in taking something that mostly exists as a
              thought and working out what it looks like when the pieces have
              to connect, the assumptions get tested, and someone could
              actually use the result.
            </p>

            <p>
              Not every idea needs to become a product. Sometimes building it
              is simply the quickest way to find out what the idea really is.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-16 border-t border-[var(--line)] pt-20 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              How I think
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>
              I think in systems. A project is rarely just a page or an
              interface to me. I&apos;m usually thinking about how the pieces
              connect, what the underlying system should do, what happens when
              something changes, and whether the whole thing actually holds
              together.
            </p>

            <p>
              I like starting with constraints rather than waiting for ideal
              conditions. If an idea can be tested with very little, I&apos;d
              rather test it first. That makes it easier to find out what
              matters, what can wait, and whether there is enough substance in
              the idea to justify putting more into it.
            </p>

            <p>
              I also prefer working from questions that I actually want
              answered. I&apos;d rather take an idea that keeps bothering me
              and work out what it could become than simply execute someone
              else&apos;s specification from beginning to end.
            </p>

            <p className="text-[var(--foreground)]">
              The implementation can change completely. The way I approach the
              problem is usually what stays.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-16 border-t border-[var(--line)] pt-20 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Why TGG HUB
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>
              TGG HUB started as a name for the things I was building. As more
              of those things began to take shape, it became useful as
              something larger than a name for individual projects.
            </p>

            <p>
              Some of what I build can stand on its own. Other things make
              more sense when they connect to something else. TGG HUB is the
              structure around that — a place where products, experiments, and
              systems can belong to the same ecosystem without having to become
              the same thing.
            </p>

            <p>
              That connection is part of what I&apos;m working out through the
              projects themselves.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}