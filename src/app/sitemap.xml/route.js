import { allBlogArticles, caseStudiesList, allSitePages } from "@/data/sitemapData";

export async function GET() {
  const baseUrl = "https://www.apexhostpro.com";
  const today = new Date().toISOString().split("T")[0];

  const staticUrls = allSitePages.map((page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq || "weekly"}</changefreq>
    <priority>${page.priority || "0.8"}</priority>
  </url>`).join("");

  const caseStudyUrls = caseStudiesList.map((cs) => `
  <url>
    <loc>${baseUrl}/case-study/${cs.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/case-study/${cs.altSlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join("");

  const blogUrls = allBlogArticles.map((post) => `
  <url>
    <loc>${baseUrl}/blogs/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${caseStudyUrls}
${blogUrls}
</urlset>`;

  return new Response(xml.trim(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
