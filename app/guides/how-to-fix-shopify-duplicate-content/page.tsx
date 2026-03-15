import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Fix Duplicate Content on Shopify",
  description: "Learn how to identify and fix duplicate content issues on Shopify. Covers canonical tags, collection/product URL duplication, pagination, and faceted navigation.",
  alternates: { canonical: "/guides/how-to-fix-shopify-duplicate-content" },
  openGraph: {
    title: "How to Fix Duplicate Content on Shopify",
    description: "Fix duplicate content issues on Shopify to protect your search rankings.",
    url: "/guides/how-to-fix-shopify-duplicate-content",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "causes-of-duplicate-content", title: "Causes of Duplicate Content", level: 2 },
  { id: "canonical-tags", title: "Canonical Tags", level: 2 },
  { id: "collection-product-urls", title: "Collection and Product URLs", level: 2 },
  { id: "pagination", title: "Pagination", level: 2 },
  { id: "faceted-navigation", title: "Faceted Navigation", level: 2 },
  { id: "checking-for-duplicates", title: "Checking for Duplicates", level: 2 },
  { id: "ongoing-monitoring", title: "Ongoing Monitoring", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Fix Duplicate Content on Shopify",
  description: "Fix duplicate content issues on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-fix-shopify-duplicate-content` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Fix Duplicate Content on Shopify", item: `${siteConfig.url}/guides/how-to-fix-shopify-duplicate-content` },
  ],
};

export default function DuplicateContentGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/guides" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">SEO &amp; Search</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Fix Duplicate Content on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Duplicate content is one of the most common Shopify SEO problems, and much of it is created by the platform itself. This guide explains where it comes from and how to fix it systematically.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="causes-of-duplicate-content" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Causes of Duplicate Content</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify creates several types of duplicate content by default. The most significant is the dual URL structure for products: a product can be accessed via its own URL (/products/item-name) and via a collection URL (/collections/category/products/item-name). Both URLs return identical content.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Other common causes include: pagination pages containing similar content to the main collection page, sort and filter parameters creating near-duplicate URLs, and tag pages that replicate collection content.
                </p>
              </section>

              <section id="canonical-tags" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Canonical Tags</h2>
                <p className="text-lg text-foreground mb-4">
                  Canonical tags tell Google which URL is the primary version of a page. Shopify automatically adds canonical tags to product pages pointing to the /products/ URL, not the /collections/products/ URL. This is the correct behaviour and handles the main product duplication issue automatically.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Check that your theme is not overriding these canonical tags. In your theme code, look for the canonical tag in your layout/theme.liquid file. It should use <code className="bg-gray-100 px-2 py-1 rounded text-sm">canonical_url</code> rather than a hardcoded URL.
                </p>
              </section>

              <section id="collection-product-urls" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Collection and Product URLs</h2>
                <p className="text-lg text-foreground mb-4">
                  The collection-scoped product URL (/collections/shoes/products/red-trainer) is a Shopify default that creates duplicate pages. Shopify canonicalises these to the main /products/ URL, but in practice not all crawlers respect this, and it can still dilute link equity.
                </p>
                <p className="text-lg text-foreground mb-4">
                  The safest fix is to ensure all internal links to products use the /products/ URL format, not the collection-scoped version. Audit your theme templates and update any hardcoded collection-scoped product links.
                </p>
              </section>

              <section id="pagination" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Pagination</h2>
                <p className="text-lg text-foreground mb-4">
                  Collection pages with many products use pagination (?page=2, ?page=3). These paginated pages contain different products from the main page, so they are not true duplicates, but they do dilute the main collection page&apos;s authority.
                </p>
                <p className="text-lg text-foreground mb-4">
                  The recommended approach is to ensure paginated pages are indexable but clearly differentiated from the root collection. Add rel="next" and rel="prev" tags if you are on an older Shopify theme, though Google has deprecated these and instead relies on canonical tags and site structure signals.
                </p>
              </section>

              <section id="faceted-navigation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Faceted Navigation</h2>
                <p className="text-lg text-foreground mb-4">
                  Faceted navigation (filters by size, colour, price) often creates thousands of URL combinations, most of which are near-duplicates of the base collection page. This is a significant issue for large catalogues.
                </p>
                <p className="text-lg text-foreground mb-4">
                  The cleanest solution is to use JavaScript-based filtering that does not change the URL. If URL parameters are generated (e.g., ?color=red), add these to your robots.txt or use noindex meta tags on filtered pages unless they have genuine SEO value.
                </p>
              </section>

              <section id="checking-for-duplicates" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checking for Duplicates</h2>
                <p className="text-lg text-foreground mb-4">
                  Use Screaming Frog to crawl your store and identify duplicate title tags, meta descriptions, and page content. Sort by page title to find identical titles across multiple URLs. Export the list and work through it systematically.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Google Search Console&apos;s Coverage report shows pages that Google has identified as duplicates. The &quot;Duplicate without user-selected canonical&quot; and &quot;Duplicate, Google chose different canonical than user&quot; entries are your highest priority items.
                </p>
              </section>

              <section id="ongoing-monitoring" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Ongoing Monitoring</h2>
                <p className="text-lg text-foreground mb-4">
                  New duplicate content can appear when you add new collections, install new apps, or update your theme. Schedule a monthly crawl with Screaming Frog or a similar tool to catch new issues before they impact rankings.
                </p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-add-schema-markup-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Schema Markup</h4>
                      <p className="text-sm text-foreground">Improve SEO with structured data</p>
                    </Link>
                    <Link href="/guides/how-to-create-shopify-redirects" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Create Redirects</h4>
                      <p className="text-sm text-foreground">Manage URL changes and redirects</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Technical SEO Audit?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team conducts full technical SEO audits covering duplicate content, canonical issues, crawlability, and structured data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
