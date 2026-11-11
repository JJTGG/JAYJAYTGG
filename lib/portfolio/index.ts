import { projectRecords } from "./projects";

export { projectRecords } from "./projects";
export { contributions } from "./contributions";
export { collaborations } from "./collaborations";
export { partners } from "./partners";

export type * from "./types";

export const publicProjectRecords = projectRecords.filter(
  (project) =>
    project.publicationLevel !== "Archive / Private" &&
    project.availability !== "Private" &&
    project.availability !== "Internal"
);

export const featuredProjectRecords = publicProjectRecords.filter(
  (project) => project.publicationLevel === "Featured"
);

export function getProjectBySlug(slug: string) {
  return publicProjectRecords.find(
    (project) => project.slug === slug
  );
}