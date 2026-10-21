"use client";

import { useState } from "react";
import type { Project } from "../lib/projects";
import DecisionDemos from "./DecisionDemos";
import ProjectExperiences from "./ProjectExperiences";
import ProjectPreview from "./ProjectPreview";

type ProjectShowcaseProps = {
  project: Pick<Project, "slug" | "name" | "live" | "source">;
};

type ShowcaseMode = "website" | "demo";

function hasCustomExperience(slug: string) {
  return slug === "meayu" || slug === "clutchtopup";
}

function hasDecisionDemo(slug: string) {
  return slug === "ai-arena" || slug === "trading-tools";
}

function getShowcaseDescription(
  mode: ShowcaseMode,
  hasDemo: boolean,
  hasLiveWebsite: boolean
) {
  if (mode === "demo" && hasDemo) {
    return "Explore a purpose-built demonstration of this project's concepts or workflows.";
  }

  if (hasLiveWebsite) {
    return "The live website is loaded below when embedding is permitted by the destination.";
  }

  return "No live website is configured for this entry. Any available demonstration or source link is shown below.";
}

export default function ProjectShowcase({
  project
}: ProjectShowcaseProps) {
  const hasDemo =
    hasCustomExperience(project.slug) || hasDecisionDemo(project.slug);

  const initialMode: ShowcaseMode = project.live ? "website" : "demo";

  const [mode, setMode] = useState<ShowcaseMode>(initialMode);

  const showDemo = mode === "demo" && hasDemo;
  const showWebsite = mode === "website" && Boolean(project.live);

  const description = getShowcaseDescription(
    mode,
    hasDemo,
    Boolean(project.live)
  );

  return (
    <div
      aria-label={`${project.name} interactive showcase`}
      className="space-y-5"
    >
      <div className="border-y border-[var(--line)] py-5 sm:py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Showcase controls
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
              {project.name}
            </h3>

            <p
              className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]"
              aria-live="polite"
              aria-atomic="true"
            >
              {description}
            </p>
          </div>

          {project.live && hasDemo && (
            <div
              role="group"
              aria-label="Choose showcase mode"
              className="flex w-full flex-wrap gap-2 sm:w-auto sm:shrink-0"
            >
              <button
                type="button"
                aria-pressed={mode === "website"}
                onClick={() => setMode("website")}
                className={`min-h-11 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                  mode === "website"
                    ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)]"
                    : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                }`}
              >
                Live website
              </button>

              <button
                type="button"
                aria-pressed={mode === "demo"}
                onClick={() => setMode("demo")}
                className={`min-h-11 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                  mode === "demo"
                    ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)]"
                    : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                }`}
              >
                Interactive demo
              </button>
            </div>
          )}
        </div>
      </div>

      {showDemo && hasDecisionDemo(project.slug) ? (
        <DecisionDemos slug={project.slug} />
      ) : showDemo && hasCustomExperience(project.slug) ? (
        <ProjectExperiences slug={project.slug} />
      ) : showWebsite ? (
        <ProjectPreview
          projectName={project.name}
          liveUrl={project.live}
          sourceUrl={project.source}
        />
      ) : (
        <ProjectPreview
          projectName={project.name}
          sourceUrl={project.source}
        />
      )}
    </div>
  );
}