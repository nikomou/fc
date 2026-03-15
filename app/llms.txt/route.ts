import { blogPosts } from "@/lib/blog";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getDirectorySlugs(segment: string): string[] {
  const dir = path.join(process.cwd(), "app", segment);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function GET() {
  const BASE = "https://flexcommerce.co.uk";

  const lines: string[] = [
    `# Flex Commerce`,
    `> Shopify Plus agency based in Manchester and Liverpool. We design, build and grow Shopify stores for ambitious ecommerce brands across the UK.`,
    ``,
    `## Core Services`,
    ``,
    `- [Shopify Services](${BASE}/shopify-services)`,
    `- [Shopify Plus](${BASE}/shopify-plus)`,
    `- [Theme Development](${BASE}/shopify-theme-development)`,
    `- [App Development](${BASE}/shopify-app-development)`,
    `- [Integrations](${BASE}/shopify-integrations)`,
    `- [Migration](${BASE}/shopify-migration)`,
    `- [Shopify SEO](${BASE}/shopify-seo)`,
    `- [Speed Optimisation](${BASE}/shopify-speed-optimisation)`,
    `- [Store Audit](${BASE}/shopify-store-audit)`,
    `- [Ongoing Support](${BASE}/shopify-support)`,
    `- [Maintenance](${BASE}/shopify-maintenance)`,
    ``,
    `## Migration Services`,
    ``,
    `- [WooCommerce to Shopify](${BASE}/woocommerce-to-shopify-migration)`,
    `- [Magento to Shopify](${BASE}/magento-to-shopify-migration)`,
    `- [BigCommerce to Shopify](${BASE}/bigcommerce-to-shopify-migration)`,
    `- [Squarespace to Shopify](${BASE}/squarespace-to-shopify-migration)`,
    `- [Webflow to Shopify](${BASE}/webflow-to-shopify-migration)`,
    `- [Salesforce to Shopify](${BASE}/salesforce-to-shopify-migration)`,
    ``,
    `## Locations`,
    ``,
    `- [Shopify Agency Manchester](${BASE}/shopify-agency-manchester)`,
    `- [Shopify Agency Liverpool](${BASE}/shopify-agency-liverpool)`,
    `- [Shopify Agency London](${BASE}/shopify-agency-london)`,
    `- [Shopify Agency Birmingham](${BASE}/shopify-agency-birmingham)`,
    `- [Shopify Agency Leeds](${BASE}/shopify-agency-leeds)`,
    `- [Shopify Agency Bristol](${BASE}/shopify-agency-bristol)`,
    `- [Shopify Agency Edinburgh](${BASE}/shopify-agency-edinburgh)`,
    `- [Shopify Agency Glasgow](${BASE}/shopify-agency-glasgow)`,
    `- [Shopify Agency Newcastle](${BASE}/shopify-agency-newcastle)`,
    `- [Shopify Agency Cambridge](${BASE}/shopify-agency-cambridge)`,
    ``,
    `## Company`,
    ``,
    `- [About](${BASE}/about)`,
    `- [Our Work](${BASE}/work)`,
    `- [Pricing](${BASE}/pricing)`,
    `- [Partners](${BASE}/partners)`,
    `- [Contact](${BASE}/contact)`,
    `- [Get a Quote](${BASE}/quote)`,
    ``,
    `## Resources`,
    ``,
    `- [All Resources](${BASE}/resources)`,
    `- [Guides](${BASE}/guides)`,
    `- [Checklists](${BASE}/checklists)`,
    `- [Articles](${BASE}/articles)`,
    ``,
  ];

  // Guides
  const guideSlugs = getDirectorySlugs("guides");
  if (guideSlugs.length > 0) {
    lines.push(`## Shopify Guides`);
    lines.push(``);
    for (const slug of guideSlugs) {
      const title = slug
        .replace(/^how-to-/, "How to ")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/^How To /, "How to ");
      lines.push(`- [${title}](${BASE}/guides/${slug})`);
    }
    lines.push(``);
  }

  // Checklists
  const checklistSlugs = getDirectorySlugs("checklists");
  if (checklistSlugs.length > 0) {
    lines.push(`## Shopify Checklists`);
    lines.push(``);
    for (const slug of checklistSlugs) {
      const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      lines.push(`- [${title}](${BASE}/checklists/${slug})`);
    }
    lines.push(``);
  }

  // Articles
  if (blogPosts.length > 0) {
    lines.push(`## Articles`);
    lines.push(``);
    for (const post of blogPosts) {
      lines.push(`- [${post.title}](${BASE}/articles/${post.slug})`);
    }
    lines.push(``);
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
