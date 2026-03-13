import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Migrate from Magento to Shopify",
  description:
    "Complete guide to migrating your Magento store to Shopify. Learn about data migration, handling complex Magento features, URL redirects, and enterprise-level considerations.",
  alternates: {
    canonical: "/guides/how-to-migrate-from-magento-to-shopify",
  },
  openGraph: {
    title: "How to Migrate from Magento to Shopify",
    description: "Complete guide to migrating your Magento store to Shopify.",
    url: "/guides/how-to-migrate-from-magento-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-migrate-from-magento", title: "Why Migrate from Magento", level: 2 },
  { id: "migration-planning", title: "Migration Planning", level: 2 },
  { id: "magento-specific-challenges", title: "Magento-Specific Challenges", level: 2 },
  { id: "data-export", title: "Data Export Process", level: 2 },
  { id: "importing-to-shopify", title: "Importing to Shopify", level: 2 },
  { id: "seo-and-redirects", title: "SEO and Redirects", level: 2 },
  { id: "go-live-process", title: "Go-Live Process", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Migrate from Magento to Shopify",
  description: "Complete guide to migrating your Magento store to Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-migrate-from-magento-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Migrate from Magento to Shopify", item: `${siteConfig.url}/guides/how-to-migrate-from-magento-to-shopify` },
  ],
};

export default function MagentoToShopifyGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Migration</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>22 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Migrate from Magento to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Magento migrations are complex but rewarding. This guide covers the unique challenges of moving from Magento to Shopify and how to handle them.
            </p>

            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated February 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="why-migrate-from-magento" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Migrate from Magento</h2>
                <p className="text-lg text-foreground mb-4">
                  Magento (now Adobe Commerce) is a powerful platform, but its complexity and cost drive many merchants to Shopify. The end of Magento 1 support and the expense of Magento 2 have accelerated this trend.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Common Migration Drivers</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>High operating costs:</strong> Magento requires expensive hosting, development, and maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Slow development:</strong> Even simple changes require specialist developers and take weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Performance issues:</strong> Magento sites often struggle with speed without extensive optimisation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Upgrade complexity:</strong> Major version upgrades can cost as much as building a new site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Talent scarcity:</strong> Good Magento developers are expensive and hard to find</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Magento 1 End of Life</h4>
                  <p className="text-foreground">
                    Magento 1 reached end of life in June 2020. If you&apos;re still on Magento 1, you&apos;re not receiving security updates. Migration is no longer optional but essential for security and PCI compliance.
                  </p>
                </div>
              </section>

              <section id="migration-planning" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Migration Planning</h2>
                <p className="text-lg text-foreground mb-4">
                  Magento migrations require more planning than typical platform migrations due to Magento&apos;s complexity and the amount of data usually involved.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Comprehensive Audit</h3>
                <p className="text-lg text-foreground mb-4">
                  Document everything in your current Magento installation:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Products:</strong> Simple, configurable, grouped, bundled, downloadable, virtual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Attributes:</strong> Custom product attributes and attribute sets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Categories:</strong> Category hierarchy and category-specific content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Customers:</strong> Customer accounts, groups, and segments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Orders:</strong> Historical orders, potentially millions of records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Extensions:</strong> Installed Magento extensions and their functionality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Integrations:</strong> ERP, PIM, WMS, and other connected systems</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Timeline Considerations</h3>
                <p className="text-lg text-foreground mb-4">
                  A typical Magento to Shopify migration takes 2-6 months depending on complexity. Plan for:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Discovery and planning: 2-4 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Data migration development: 2-4 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Theme development: 4-8 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Integration development: 2-6 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Testing and refinement: 2-4 weeks</span>
                  </li>
                </ul>
              </section>

              <section id="magento-specific-challenges" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Magento-Specific Challenges</h2>
                <p className="text-lg text-foreground mb-4">
                  Magento has features and data structures that don&apos;t map directly to Shopify. Understanding these helps plan the migration properly.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Configurable Products</h3>
                    <p className="text-foreground">Magento configurable products map well to Shopify variants, but complex configurations with many options may exceed Shopify&apos;s 100-variant or 3-option limits. Solutions include using apps like Infinite Options or restructuring products.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Bundle Products</h3>
                    <p className="text-foreground">Shopify doesn&apos;t have native bundle products. Use apps like Bundles or Bold Bundles, or create bundle products as single products with the components managed via inventory rules.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Customer Groups</h3>
                    <p className="text-foreground">Magento customer groups with different pricing map to Shopify Plus B2B features or require customer tagging and apps like Bold Custom Pricing for non-Plus stores.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Custom Attributes</h3>
                    <p className="text-foreground">Magento&apos;s EAV (Entity-Attribute-Value) model allows unlimited custom attributes. Map these to Shopify metafields, which now support rich content types and can be exposed in storefront APIs.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Multi-Store</h3>
                    <p className="text-foreground">Magento multi-store setups require careful thought. Options include Shopify Markets (for international), multiple Shopify stores (for distinct brands), or Shopify Plus expansion stores.</p>
                  </div>
                </div>
              </section>

              <section id="data-export" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Data Export Process</h2>
                <p className="text-lg text-foreground mb-4">
                  Exporting data from Magento requires careful attention to Magento&apos;s complex database structure.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Product Data</h3>
                <p className="text-lg text-foreground mb-4">
                  Magento&apos;s product data is spread across many tables. Export options include:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Magento&apos;s built-in export:</strong> System → Import/Export → Export. Limited but covers basics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Extensions:</strong> Tools like Mageworx or Firebear Import/Export offer more complete exports.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Direct database queries:</strong> For complete control, query the database directly with custom SQL.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>API extraction:</strong> Use Magento&apos;s REST or GraphQL APIs for programmatic extraction.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Customer and Order Data</h3>
                <p className="text-lg text-foreground mb-4">
                  Customer passwords cannot be migrated due to different hashing algorithms. Customers will need to reset passwords on Shopify. For orders, export:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Order IDs, dates, and status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Line items with product references</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Customer information and addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Payment and shipping information</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Large Data Volumes</h4>
                  <p className="text-foreground">
                    Magento stores often have hundreds of thousands of products and millions of orders. Plan for batch processing, run migrations during low-traffic periods, and consider importing only recent orders (e.g., last 2 years) with older data archived separately.
                  </p>
                </div>
              </section>

              <section id="importing-to-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Importing to Shopify</h2>
                <p className="text-lg text-foreground mb-4">
                  For Magento migrations, automated migration tools or custom scripts are typically necessary due to data volume and complexity.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Migration Options</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Migration Services</h4>
                    <p className="text-foreground">Services like Cart2Cart, LitExtension, and Migration Monster specialise in Magento migrations. They handle data transformation and can migrate while keeping Magento running.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Custom Scripts</h4>
                    <p className="text-foreground">For complex migrations, custom scripts using Shopify&apos;s Admin API provide maximum control. Transform data to Shopify&apos;s format and import via API with proper error handling.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Matrixify</h4>
                    <p className="text-foreground">Powerful Shopify app for bulk imports. Export Magento data to CSV, transform to Matrixify format, and import. Handles products, customers, orders, and more.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Data Mapping Considerations</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Map Magento SKUs to Shopify SKUs consistently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Preserve customer IDs for reference or create mapping table</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Convert Magento attribute options to Shopify variant options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Transform category paths to Shopify collection handles</span>
                  </li>
                </ul>
              </section>

              <section id="seo-and-redirects" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">SEO and Redirects</h2>
                <p className="text-lg text-foreground mb-4">
                  Magento stores often have significant SEO value built over years. Preserving this requires comprehensive redirect planning.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">URL Structure Differences</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="space-y-3 text-foreground font-mono text-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 pb-2">
                      <span><strong>Magento:</strong> /product-name.html</span>
                      <span className="mt-1 md:mt-0">→ <strong>Shopify:</strong> /products/product-name</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 pb-2">
                      <span><strong>Magento:</strong> /category/subcategory.html</span>
                      <span className="mt-1 md:mt-0">→ <strong>Shopify:</strong> /collections/subcategory</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <span><strong>Magento:</strong> /catalogsearch/result/?q=term</span>
                      <span className="mt-1 md:mt-0">→ <strong>Shopify:</strong> /search?q=term</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Redirect Strategy</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Crawl Magento for all URLs</strong>
                      <p className="text-foreground mt-1">Use Screaming Frog to crawl your entire Magento site. Export all product, category, and CMS page URLs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Create redirect mapping</strong>
                      <p className="text-foreground mt-1">Map each Magento URL to its Shopify equivalent. Use formulas to transform URL patterns automatically where possible.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Handle dynamic URLs</strong>
                      <p className="text-foreground mt-1">Magento generates many URL variations (with parameters). Ensure common variations redirect appropriately.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Import to Shopify</strong>
                      <p className="text-foreground mt-1">Use Shopify&apos;s URL redirect import or apps like Easy Redirects for bulk redirect management.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Layered Navigation URLs</h4>
                  <p className="text-foreground">
                    Magento layered navigation creates many filtered URLs that may be indexed. Redirect base category URLs and consider adding &quot;noindex&quot; to filtered pages in Shopify using apps.
                  </p>
                </div>
              </section>

              <section id="go-live-process" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Go-Live Process</h2>
                <p className="text-lg text-foreground mb-4">
                  Magento migrations typically involve a cutover period. Plan this carefully to minimise downtime and data loss.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Cutover Timeline</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Initial data migration (T-14 days)</strong>
                      <p className="text-foreground mt-1">Import all products, customers, and historical orders to Shopify development store.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Final testing (T-7 days)</strong>
                      <p className="text-foreground mt-1">Complete UAT, fix any issues, prepare cutover scripts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Freeze Magento orders (T-4 hours)</strong>
                      <p className="text-foreground mt-1">Optionally put Magento in maintenance mode or redirect to &quot;coming soon&quot; page.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Delta migration (T-3 hours)</strong>
                      <p className="text-foreground mt-1">Import orders and customer changes since initial migration.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Final verification (T-1 hour)</strong>
                      <p className="text-foreground mt-1">Spot check products, test checkout, verify integrations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong className="text-foreground-dark">DNS switch (T-0)</strong>
                      <p className="text-foreground mt-1">Point domain to Shopify. Monitor for issues.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-migrate-to-shopify-plus" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Plus Upgrade →</h4>
                      <p className="text-sm text-foreground">Enterprise features for Magento merchants</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Pre-launch verification</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Magento Migration Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team specialises in complex Magento to Shopify migrations. We handle data migration, custom development, and integrations to ensure a smooth transition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-plus" variant="outline-light" size="lg" icon={false}>Shopify Plus Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
