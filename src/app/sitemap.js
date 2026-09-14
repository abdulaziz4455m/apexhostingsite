import { allBlogArticles, caseStudiesList, allSitePages } from "@/data/sitemapData";

export default function sitemap() {
  const baseUrl = "https://www.apexhostpro.com";
  const today = new Date();

  // 1. Core static pages
  const staticPages = allSitePages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: today,
    changeFrequency: page.changefreq || "weekly",
    priority: parseFloat(page.priority) || 0.8,
  }));

  // 2. Case study pages (both primary and alt slugs)
  const caseStudyPages = [];
  caseStudiesList.forEach((cs) => {
    caseStudyPages.push({
      url: `${baseUrl}/case-study/${cs.slug}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    });
    if (cs.altSlug) {
      caseStudyPages.push({
        url: `${baseUrl}/case-study/${cs.altSlug}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  });

  // 3. Blog articles
  const blogPages = allBlogArticles.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
