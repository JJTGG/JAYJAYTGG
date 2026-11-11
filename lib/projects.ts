import { projectRecords } from "./portfolio/projects";
import type {
  ProjectCategory,
  ProjectRecord
} from "./portfolio/types";

export type PortfolioSection =
  | "featured"
  | "systems"
  | "experiments";

export type Project = {
  name: string;
  slug: string;
  type: string;
  description: string;
  shortDescription: string;
  status: string;
  live?: string;
  source?: string;
  category: "work" | "experiment" | "system";
  portfolioSection: PortfolioSection;
  featuredInHub: boolean;
  credit?: string;
};

function getLegacyCategory(
  category: ProjectCategory
): Project["category"] {
  switch (category) {
    case "Experiments":
      return "experiment";

    case "Learning & Knowledge":
    case "Research & Engineering":
      return "system";

    case "Products & Platforms":
    case "Tools & Utilities":
      return "work";
  }
}

function getPortfolioSection(
  project: ProjectRecord
): PortfolioSection {
  if (project.publicationLevel === "Featured") {
    return "featured";
  }

  if (project.category === "Experiments") {
    return "experiments";
  }

  return "systems";
}

function toLegacyProject(
  project: ProjectRecord
): Project {
  return {
    name: project.name,
    slug: project.slug,
    type: project.typeLabel,
    description: project.description,
    shortDescription: project.shortDescription,
    status: project.statusLabel,

    live: project.websiteUrl,
    source: project.repositoryUrl,

    category: getLegacyCategory(project.category),
    portfolioSection: getPortfolioSection(project),

    featuredInHub: project.tggHubEcosystem,
    credit: project.credit
  };
}

export const projects: Project[] = projectRecords
  .filter(
    (project) =>
      project.publicationLevel !== "Archive / Private"
  )
  .map(toLegacyProject);