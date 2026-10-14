
"use client";

import { useState } from "react";

type Viewport = "desktop" | "tablet" | "mobile";

type ProjectPreviewProps = {
  projectName: string;
  liveUrl?: string;
  sourceUrl?: string;
};

const viewportOptions: { label: string; value: Viewport }[] = [
  { label: "Desktop", value: "desktop" },
  { label: "Tablet", value: "tablet" },
  { label: "Mobile", value: "mobile" }
];

function normalizeHttpsUrl(value?: string): string | undefined {
  if (!value) return undefined;

  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" ? parsed.href : undefined;
  } catch {
    return undefined;
  }
}

export default function ProjectPreview({
  projectName,
  liveUrl,
  sourceUrl
}: ProjectPreviewProps) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [reloadKey, setReloadKey] = useState(0);

  const previewUrl = normalizeHttpsUrl(liveUrl);
  const repositoryUrl = normalizeHttpsUrl(sourceUrl);

  const previewWidth =
    viewport === "desktop"
      ? "100%"
      : viewport === "tablet"
        ? "768px"
        : "390px";

  return (
    <section
      aria-label={`${projectName} preview`}
      className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--background)]"
    >
      <div className="flex flex-col gap-4 border-b border-[var(--line)] p-4 sm:p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Project preview
          </p>

          <h2 className="mt-2 text-lg font-semibold tracking-tight">
            {projectName}
          </h2>
        </div>

        {previewUrl && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div
              aria-label="Preview viewport"
              className="flex flex-wrap gap-1"
              role="group"
            >
              {viewportOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={viewport === option.value}
                  onClick={() => setViewport(option.value)}
                  className={`min-h-9 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
                    viewport === option.value
                      ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)]"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <button
                type="button"
                onClick={() => setReloadKey((key) => key + 1)}
                className="font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Reload preview
              </button>

              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] hover:underline"
              >
                Open live project ↗
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="overflow-x-auto bg-[var(--surface)] p-3 sm:p-5">
        {previewUrl ? (
          <div
            className="mx-auto overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-sm"
            style={{
              width: previewWidth,
              maxWidth: viewport === "desktop" ? "100%" : "none"
            }}
          >
            <iframe
              key={`${previewUrl}-${reloadKey}`}
              title={`${projectName} live website`}
              src={previewUrl}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              className="block h-[560px] w-full border-0 sm:h-[680px]"
            />
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center gap-3 px-5 text-center">
            <p className="text-base font-medium">
              No live preview is configured
            </p>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              This project needs an approved HTTPS deployment URL or a separate
              interactive demonstration before a preview can appear here.
            </p>

            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Inspect source code ↗
              </a>
            )}
          </div>
        )}
      </div>

      {previewUrl && (
        <div className="border-t border-[var(--line)] px-4 py-3 sm:px-5">
          <p className="text-xs leading-5 text-[var(--muted)]">
            The preview loads the project website directly. Some sites prevent
            embedding in other websites. If this preview is blank or blocked,
            open the live project in a new tab instead.
          </p>

          {repositoryUrl && (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              View source code ↗
            </a>
          )}
        </div>
      )}
    </section>
  );
}
