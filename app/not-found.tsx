export default function NotFound() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            404
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            This page doesn&apos;t exist.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Whatever you were looking for isn&apos;t here.
          </p>

          <a
            href="/"
            className="mt-10 inline-flex border border-[var(--foreground)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Back home
          </a>
        </div>
      </section>
    </main>
  );
}