export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            About
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            I&apos;m JAYJAYTGG.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m a builder and developer interested in turning ideas into
            real things — especially ideas that become systems, products, or
            experiments.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              How it started
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>
              I started building websites on Wapka using a small button phone.
              Later, I moved to Code Studio on a phone and kept learning
              through HTML, CSS, and JavaScript.
            </p>

            <p>
              Eventually I moved into GitHub, Vercel, Next.js, TypeScript, and
              more serious development workflows. The tools changed, but the
              basic habit stayed the same: think of something, build it, and
              see what happens.
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
              connect, what the underlying system should do, and whether the
              idea survives contact with reality.
            </p>

            <p>
              I also like starting with very little. If an idea can be tested
              without spending money, I&apos;d rather prove it first and spend
              later when there&apos;s something worth investing in.
            </p>

            <p className="text-[var(--foreground)]">
              I&apos;d rather build something I dreamed up myself than execute
              someone else&apos;s spec.
            </p>
          </div>
        </div>

        <div className="mt-24 border border-[var(--line)] p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            Current direction
          </p>

          <p className="mt-4 max-w-3xl text-xl font-medium leading-8 sm:text-2xl">
            Building products, systems, and experiments — and gradually
            connecting them into something bigger.
          </p>
        </div>
      </section>
    </main>
  );
}