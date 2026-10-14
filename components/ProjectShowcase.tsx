
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

export default function ProjectShowcase({
  project
}: ProjectShowcaseProps) {
  const hasDemo =
    hasCustomExperience(project.slug) || hasDecisionDemo(project.slug);

  const initialMode: ShowcaseMode = project.live ? "website" : "demo";

  const [mode, setMode] = useState<ShowcaseMode>(initialMode);

  const showDemo = mode === "demo" && hasDemo;
  const showWebsite = mode === "website" && Boolean(project.live);

  return (
    <section
      aria-label={`${project.name} interactive showcase`}
      className="space-y-4"
    >
      <div className="flex flex-col gap-4 rounded-xl border border-[var(--line)] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
            Project showcase
          </p>

          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {showDemo
              ? "Explore a self-contained product demonstration."
              : project.live
                ? "Explore the actual deployed website."
                : "Explore the available project information."}
          </p>
        </div>

        {project.live && hasDemo && (
          <div
            role="group"
            aria-label="Choose showcase mode"
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              aria-pressed={mode === "website"}
              onClick={() => setMode("website")}
              className={`min-h-10 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                mode === "website"
                  ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)]"
                  : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Live website
            </button>

            <button
              type="button"
              aria-pressed={mode === "demo"}
              onClick={() => setMode("demo")}
              className={`min-h-10 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                mode === "demo"
                  ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)]"
                  : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Interactive demo
            </button>
          </div>
        )}
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
    </section>
  );
}
