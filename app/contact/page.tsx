
"use client";

import { useState } from "react";

const directLinks = [
  {
    label: "WhatsApp",
    detail: "+2348154841438",
    href: "https://wa.me/2348154841438",
    description:
      "For direct conversations, project enquiries, or anything easier to discuss in real time.",
    copyLabel: "Copy number"
  },
  {
    label: "Email",
    detail: "kidjayjaytgg@gmail.com",
    href: "mailto:kidjayjaytgg@gmail.com",
    description:
      "For project details, longer context, proposals, or sending files.",
    copyLabel: "Copy address"
  },
  {
    label: "Telegram",
    detail: "@JAYVORTEX_WEB3",
    href: "https://t.me/JAYVORTEX_WEB3",
    description:
      "For direct conversations, ideas, or simply reaching out.",
    copyLabel: "Copy handle"
  }
];

const elsewhereLinks = [
  {
    label: "X",
    href: "https://x.com/JAYJAYTGG",
    description:
      "Follow what I'm building and join the public conversation."
  },
  {
    label: "GitHub",
    href: "https://github.com/JJTGG",
    description:
      "Explore the code, projects, and experiments behind the work."
  }
];

type CopyStatus = {
  label: string;
  state: "copied" | "failed";
} | null;

export default function ContactPage() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>(null);

  async function copyDetail(label: string, detail: string) {
    try {
      await navigator.clipboard.writeText(detail);
      setCopyStatus({ label, state: "copied" });
    } catch {
      setCopyStatus({ label, state: "failed" });
    }

    window.setTimeout(() => {
      setCopyStatus(null);
    }, 2000);
  }

  return (
    <main>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-20 sm:py-28 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Contact / Get in touch
          </p>

          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
            Have something worth building or exploring?
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            Reach out about a project, an idea, something I&apos;m building,
            or a problem worth figuring out. Use whichever channel works
            best for you.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              01 / Direct contact
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Start a conversation.
            </h2>

            <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {directLinks.map((link, index) => (
                <article key={link.href} className="py-6 sm:py-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-lg font-semibold">
                          {link.label}
                        </h3>
                      </div>

                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-3 inline-flex max-w-full break-all text-sm font-medium transition-colors hover:text-[var(--accent)] sm:text-base"
                      >
                        {link.detail}
                        <span className="ml-2 shrink-0" aria-hidden="true">
                          ↗
                        </span>
                      </a>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
                        {link.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyDetail(link.label, link.detail)}
                      aria-live="polite"
                      className="inline-flex w-fit shrink-0 items-center gap-2 border border-[var(--line)] px-4 py-2.5 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      {copyStatus?.label === link.label &&
                      copyStatus.state === "copied" ? (
                        <>
                          <span aria-hidden="true">✓</span>
                          Copied
                        </>
                      ) : copyStatus?.label === link.label &&
                        copyStatus.state === "failed" ? (
                        "Copy unavailable"
                      ) : (
                        <>
                          <span aria-hidden="true">↗</span>
                          {link.copyLabel}
                        </>
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-4 text-xs leading-6 text-[var(--muted)]">
              If copying is unavailable in your browser, select the
              displayed contact detail and copy it manually.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / Work together
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Looking to hire me?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Explore my Contra profile for professional opportunities
                and project enquiries.
              </p>
            </div>

            <a
              href="https://contra.com/jayjaytgg_tiuk6n8t?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=jayjaytgg_tiuk6n8t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Find me on Contra
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              03 / Elsewhere
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Follow the work.
            </h2>

            <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {elsewhereLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-6 transition-colors sm:py-7"
                >
                  <div>
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 font-semibold">{link.label}</h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">
                      {link.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-[1240px] px-[var(--page-gutter)] py-12 sm:py-16">
          <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            No complicated starting point needed. A clear message about
            what you have in mind is enough to begin.
          </p>
        </div>
      </section>
    </main>
  );
}
