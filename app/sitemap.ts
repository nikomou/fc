import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

const BASE = "https://flexcommerce.co.uk";
const NOW = new Date().toISOString();

function getDirectorySlugs(segment: string): string[] {
  const dir = path.join(process.cwd(), "app", segment);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },

  // Core service pages
  { url: `${BASE}/shopify-services`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-plus`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-theme-development`,  lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-app-development`,    lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-integrations`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/shopify-migration`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-seo`,                lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-speed-optimisation`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/shopify-store-audit`,        lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/shopify-support`,            lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/shopify-maintenance`,        lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/shopify-ai`,                 lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/automations`,                lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/ecommerce-agency`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },

  // Migration pages
  { url: `${BASE}/woocommerce-to-shopify-migration`,  lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/magento-to-shopify-migration`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/bigcommerce-to-shopify-migration`,  lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/squarespace-to-shopify-migration`,  lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/webflow-to-shopify-migration`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/salesforce-to-shopify-migration`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

  // Location pages
  { url: `${BASE}/shopify-agency-manchester`,  lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-agency-liverpool`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-agency-london`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/shopify-agency-birmingham`,  lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/shopify-agency-leeds`,       lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/shopify-agency-bristol`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/shopify-agency-edinburgh`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/shopify-agency-glasgow`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/shopify-agency-newcastle`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/shopify-agency-cambridge`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

  // Company pages
  { url: `${BASE}/about`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/work`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/pricing`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/partners`,  lastModified: NOW, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/contact`,   lastModified: NOW, changeFrequency: "yearly",  priority: 0.6 },
  { url: `${BASE}/quote`,     lastModified: NOW, changeFrequency: "yearly",  priority: 0.8 },
  { url: `${BASE}/resources`, lastModified: NOW, changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE}/articles`,  lastModified: NOW, changeFrequency: "weekly",  priority: 0.8 },
  { url: `${BASE}/guides`,    lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/checklists`,lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/privacy`,   lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
  { url: `${BASE}/terms`,     lastModified: NOW, changeFrequency: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/articles/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const guideRoutes: MetadataRoute.Sitemap = getDirectorySlugs("guides").map((slug) => ({
    url: `${BASE}/guides/${slug}`,
    lastModified: NOW,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const checklistRoutes: MetadataRoute.Sitemap = getDirectorySlugs("checklists").map((slug) => ({
    url: `${BASE}/checklists/${slug}`,
    lastModified: NOW,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...guideRoutes, ...checklistRoutes, ...articleRoutes];
}
