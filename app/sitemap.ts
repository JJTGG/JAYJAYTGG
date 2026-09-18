import type { MetadataRoute } from "next";

const baseUrl = "https://jayjaytgg.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/experiments",
    "/tgg-hub",
    "/about",
    "/contact"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}