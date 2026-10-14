
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "../lib/projects";

type Filter = "all" | "featured" | "systems";

type ProjectExplorerProps = {
  projects: Project[];
};

const filters: { label: string; value: Filter }[] = [
  { label: "All work", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "Systems", value: "systems" }
];

export default function ProjectExplorer({
  projects
}: ProjectExplorerProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

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

  function resetFilters() {
    setQuery("");
    setFilter("all");
  }

  return (
    <section aria-label="Project explorer">
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
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, technologies, or status..."
            autoComplete="off"
            className="min-h-12 w-full min-w-0 rounded-md border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />

          {(query || filter !== "all") && (
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-12 shrink-0 rounded-md border border-[var(--line)] px-4 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Clear filters
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
              const selected = filter === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(option.value)}
                  className={`min-h-10 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    selected
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

      {filteredProjects.length > 0 ? (
        <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="py-7 sm:py-9"
            >
              <div className="grid gap-4 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6">
                <span className="font-mono text-xs text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                        {project.type}
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                        {project.name}
                      </h2>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    {project.shortDescription}
                  </p>

                  {project.credit && (
                    <p className="mt-3 text-xs text-[var(--muted)]">
                      {project.credit}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-medium text-[var(--accent)] transition-colors hover:underline"
                    >
                      Explore preview ↗
                    </Link>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium transition-colors hover:text-[var(--accent)]"
                      >
                        Open live site ↗
                      </a>
                    )}

                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                      >
                        Source code ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-[var(--line)] px-5 py-12 text-center">
          <h2 className="text-lg font-semibold tracking-tight">
            No matching projects
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
            Try another search term or remove the section filter to see more
            of the catalogue.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 text-sm font-medium text-[var(--accent)] hover:underline"
          >
            Show all work
          </button>
        </div>
      )}
    </section>
  );
}
