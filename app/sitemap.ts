import type { MetadataRoute } from "next";
import { projects } from "../lib/projects";

const baseUrl = "https://jayjaytgg.vercel.app";

const staticRoutes = [
  "",
  "/work",
  "/experiments",
  "/tgg-hub",
  "/about",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map(
    (route) => ({
      url: `${baseUrl}${route}`
    })
  );

  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project) => ({
      url: `${baseUrl}/work/${project.slug}`
    })
  );

  return [...staticPages, ...projectPages];
}