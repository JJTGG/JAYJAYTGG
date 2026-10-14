
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "../lib/projects";
import ProjectPreview from "./ProjectPreview";
import ProjectExperiences from "./ProjectExperiences";

type Filter = "all" | "featured" | "systems";

type ProjectExplorerProps = {
  projects: Project[];
};

const filters: { label: string; value: Filter }[] = [
  { label: "All work", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "Systems", value: "systems" }
];

function hasCustomExperience(slug: string) {
  return slug === "meayu" || slug === "clutchtopup";
}

export default function ProjectExplorer({
  projects
}: ProjectExplorerProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedSlug, setSelectedSlug] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        filter === "all" || project.portfolioSection === filter;

      const searchableText = [
        project.name,
        project.type,
        project.description,
        project.shortDescription,
        project.status
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [projects, query, filter]);

  const selectedProject = filteredProjects.find(
    (project) => project.slug === selectedSlug
  );

  function resetFilters() {
    setQuery("");
    setFilter("all");
    setSelectedSlug("");
  }

  return (
    <section aria-label="Interactive project explorer">
      <div className="rounded-xl border border-[var(--line)] p-4 sm:p-6">
        <label
          htmlFor="project-search"
          className="block text-sm font-medium"
        >
          Search the work
        </label>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedSlug("");
            }}
            placeholder="Search projects, topics, or status..."
            autoComplete="off"
            className="min-h-12 w-full min-w-0 rounded-md border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />

          {(query || filter !== "all" || selectedSlug) && (
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-12 shrink-0 rounded-md border border-[var(--line)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Reset explorer
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs text-[var(--muted)]">
            Browse by
          </span>

          <div
            role="group"
            aria-label="Filter projects by section"
            className="flex flex-wrap gap-2"
          >
            {filters.map((option) => {
              const active = filter === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setFilter(option.value);
                    setSelectedSlug("");
                  }}
                  className={`min-h-10 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)]"
                      : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <p
          className="mt-5 text-xs text-[var(--muted)]"
          aria-live="polite"
          aria-atomic="true"
        >
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"} found
        </p>
      </div>

      <div className="mt-6 grid items-start gap-6 md:grid-cols-[minmax(250px,0.75fr)_minmax(0,1.25fr)]">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-3 pb-3">
            <h2 className="text-sm font-semibold">Project index</h2>
            <span className="text-xs text-[var(--muted)]">
              Select to inspect
            </span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {filteredProjects.map((project, index) => {
                const active = project.slug === selectedSlug;

                return (
                  <article key={project.slug} className="py-1">
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedSlug(project.slug)}
                      className={`w-full rounded-lg p-4 text-left transition-colors ${
                        active
                          ? "bg-[var(--surface)]"
                          : "hover:bg-[var(--surface)]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 font-mono text-xs text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-semibold tracking-tight">
                              {project.name}
                            </h3>

                            <span
                              aria-hidden="true"
                              className={`text-sm ${
                                active
                                  ? "text-[var(--accent)]"
                                  : "text-[var(--muted)]"
                              }`}
                            >
                              {active ? "●" : "↗"}
                            </span>
                          </div>

                          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                            {project.type}
                          </p>

                          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                            {project.shortDescription}
                          </p>

                          <span className="mt-3 inline-flex max-w-full rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </button>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 px-4 pb-4 pl-11 text-xs">
                      <Link
                        href={`/work/${project.slug}`}
                        className="font-medium text-[var(--accent)] hover:underline"
                      >
                        Full project page ↗
                      </Link>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--muted)] hover:text-[var(--foreground)]"
                        >
                          Open original ↗
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-[var(--line)] p-6">
              <p className="font-medium">No matching projects</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Try a different search term or reset the explorer.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Show all work
              </button>
            </div>
          )}
        </div>

        <div
          aria-label="Selected project preview"
          className="min-w-0"
        >
          {selectedProject ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-[var(--line)] p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                      Selected project
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      {selectedProject.name}
                    </h2>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                    {selectedProject.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {selectedProject.description}
                </p>

                {selectedProject.credit && (
                  <p className="mt-3 text-xs text-[var(--muted)]">
                    {selectedProject.credit}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                  <Link
                    href={`/work/${selectedProject.slug}`}
                    className="font-medium text-[var(--accent)] hover:underline"
                  >
                    Open full project page ↗
                  </Link>

                  {selectedProject.source && (
                    <a
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--foreground)]"
                    >
                      Inspect source ↗
                    </a>
                  )}
                </div>
              </div>

              {selectedProject.live ? (
                <ProjectPreview
                  projectName={selectedProject.name}
                  liveUrl={selectedProject.live}
                  sourceUrl={selectedProject.source}
                />
              ) : hasCustomExperience(selectedProject.slug) ? (
                <ProjectExperiences slug={selectedProject.slug} />
              ) : (
                <ProjectPreview
                  projectName={selectedProject.name}
                  sourceUrl={selectedProject.source}
                />
              )}
            </div>
          ) : (
            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-dashed border-[var(--line)] px-6 py-12 text-center sm:min-h-[480px]">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--line)] text-xl text-[var(--accent)]"
              >
                ↗
              </span>

              <h2 className="mt-5 text-xl font-semibold tracking-tight">
                Explore a project
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Select an entry from the project index to load its live
                website or interactive demonstration here.
              </p>

              <p className="mt-4 max-w-sm text-xs leading-5 text-[var(--muted)]">
                Live websites load only after you select a project.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
