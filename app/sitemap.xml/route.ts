import { listProjects } from "@/lib/portfolio-store";
import { slugifyTitle } from "@/lib/utils";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://example.com";

function generateSitemap() {
  const urls = [
    `${SITE_URL}/`,
    ...listProjects().map(
      (project) => `${SITE_URL}/projects/${slugifyTitle(project.title)}`,
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (url) =>
          `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
      )
      .join("\n") +
    `\n</urlset>`;
}

export async function GET() {
  return new Response(generateSitemap(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
