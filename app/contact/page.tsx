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
      "See the code, projects, and experiments behind the work."
  }
];

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyDetail(label: string, detail: string) {
    try {
      await navigator.clipboard.writeText(detail);
      setCopied(label);

      window.setTimeout(() => {
        setCopied(null);
      }, 1600);
    } catch {
      setCopied(null);
    }
  }

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Contact
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Have something worth building or exploring?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            If you want to talk about something I&apos;m building, a project,
            an idea, or something worth figuring out, reach out.
          </p>
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            Direct
          </p>

          <div className="border border-[var(--line)]">
            {directLinks.map((link, index) => (
              <div
                key={link.href}
                className={`group ${
                  index !== directLinks.length - 1
                    ? "border-b border-[var(--line)]"
                    : ""
                }`}
              >
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block p-6 transition-colors hover:bg-[#0b0f15]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <p className="font-medium">{link.label}</p>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                        {link.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </a>

                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() => copyDetail(link.label, link.detail)}
                    className="text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {copied === link.label ? "Copied" : link.copyLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            Elsewhere
          </p>

          <div className="border border-[var(--line)]">
            {elsewhereLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-[#0b0f15] ${
                  index !== elsewhereLinks.length - 1
                    ? "border-b border-[var(--line)]"
                    : ""
                }`}
              >
                <div>
                  <p className="font-medium">{link.label}</p>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                    {link.description}
                  </p>
                </div>

                <span className="shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-2xl border-t border-[var(--line)] pt-6">
          <p className="text-sm leading-6 text-[var(--muted)]">
            Not sure where to start? Use whichever channel feels natural.
          </p>
        </div>
      </section>
    </main>
  );
}