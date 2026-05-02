import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohamedelfankari.com";

  // Static pages
  const routes = [
    "",
    "/projects",
    "/about",
    "/contact",
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Example dynamic projects (replace with real data source later)
  const projects = [
    "quiz-master-ai-quiz-app-with-interactive-learning-features",
    "association-website-event-management-and-admin-operations",
    "smartshop-mobile-e-commerce-catalog-and-inventory-manager",
    "atlas-guardian-earthquake-alert-and-evacuation-assistant",
    "snapshot-tool-system-process-capture-and-restoration",
    "weball-match-organizer-android-app",
    "weball-sports-booking-android-app",
  ];

  const projectPages = projects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}