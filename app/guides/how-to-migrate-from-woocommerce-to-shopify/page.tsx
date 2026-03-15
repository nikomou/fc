import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Migrate from WooCommerce to Shopify",
  description:
    "Complete guide to migrating your WooCommerce store to Shopify. Learn about data migration, URL redirects, SEO preservation, and avoiding common migration mistakes.",
  alternates: {
    canonical: "/guides/how-to-migrate-from-woocommerce-to-shopify",
  },
  openGraph: {
    title: "How to Migrate from WooCommerce to Shopify",
    description: "Complete guide to migrating your WooCommerce store to Shopify.",
    url: "/guides/how-to-migrate-from-woocommerce-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-migrate", title: "Why Migrate to Shopify", level: 2 },
  { id: "pre-migration-planning", title: "Pre-Migration Planning", level: 2 },
  { id: "exporting-woocommerce-data", title: "Exporting WooCommerce Data", level: 2 },
  { id: "importing-to-shopify", title: "Importing to Shopify", level: 2 },
  { id: "url-redirects", title: "URL Redirects and SEO", level: 2 },
  { id: "testing-migration", title: "Testing Your Migration", level: 2 },
  { id: "go-live-checklist", title: "Go-Live Checklist", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Migrate from WooCommerce to Shopify",
  description: "Complete guide to migrating your WooCommerce store to Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-migrate-from-woocommerce-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Migrate from WooCommerce to Shopify", item: `${siteConfig.url}/guides/how-to-migrate-from-woocommerce-to-shopify` },
  ],
};

export default function WooCommerceToShopifyGuidePage() {
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
                <span>20 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Migrate from WooCommerce to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Moving from WooCommerce to Shopify can transform your ecommerce operations. This guide covers the entire migration process to ensure a smooth transition.
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

              <section id="why-migrate" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Migrate to Shopify</h2>
                <p className="text-lg text-foreground mb-4">
                  WooCommerce is flexible but requires significant maintenance. Many merchants switch to Shopify for reduced complexity, better reliability, and lower total cost of ownership.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Common Reasons for Migration</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Security concerns:</strong> WordPress and plugin vulnerabilities require constant updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Performance issues:</strong> Slow WooCommerce sites often need expensive hosting or optimisation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Plugin conflicts:</strong> Updating one plugin breaks another</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Hosting headaches:</strong> Managing servers, SSL, backups, and scaling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Checkout limitations:</strong> Shopify&apos;s checkout converts better and is more customisable</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">When to Stay on WooCommerce</h4>
                  <p className="text-foreground">
                    WooCommerce may still be right if you need deep WordPress integration, specific plugin functionality not available on Shopify, or have very custom business logic that would be expensive to recreate.
                  </p>
                </div>
              </section>

              <section id="pre-migration-planning" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Pre-Migration Planning</h2>
                <p className="text-lg text-foreground mb-4">
                  Thorough planning prevents problems during migration. Take time to audit your current store and define your requirements.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Data Audit</h3>
                <p className="text-lg text-foreground mb-4">
                  Document what needs to be migrated:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Products:</strong> Count total products, variants, and product types (simple, variable, grouped)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Categories:</strong> Your taxonomy structure and category hierarchy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Customers:</strong> Customer accounts, addresses, and order history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Orders:</strong> Historical orders for reporting and customer lookups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Content:</strong> Blog posts, pages, and media files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Reviews:</strong> Product reviews and ratings</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Functionality Mapping</h3>
                <p className="text-lg text-foreground mb-4">
                  List all WooCommerce plugins you use and find Shopify equivalents:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="space-y-3 text-foreground">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span><strong>WooCommerce Subscriptions</strong></span>
                      <span>→ Recharge, Bold Subscriptions</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span><strong>YITH Wishlist</strong></span>
                      <span>→ Wishlist Plus, Growave</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span><strong>WooCommerce Bookings</strong></span>
                      <span>→ BookThatApp, Sesami</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span><strong>Advanced Custom Fields</strong></span>
                      <span>→ Shopify Metafields</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="exporting-woocommerce-data" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Exporting WooCommerce Data</h2>
                <p className="text-lg text-foreground mb-4">
                  Export your data from WooCommerce in formats that can be imported to Shopify.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Product Export</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Use Native Export</strong>
                      <p className="text-foreground mt-1">Go to Products → All Products → Export. Select all columns and export as CSV.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Include Variations</strong>
                      <p className="text-foreground mt-1">For variable products, ensure all variations export with parent product links. Use plugins like &quot;Product Import Export&quot; if native export misses data.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Download Images</strong>
                      <p className="text-foreground mt-1">Export product images separately or ensure image URLs in your CSV are publicly accessible for Shopify to download.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Customer and Order Export</h3>
                <p className="text-lg text-foreground mb-4">
                  Export customers and orders using WooCommerce&apos;s built-in tools or plugins like Customer/Order CSV Export. Include:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Customer email, name, addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Order IDs, dates, totals, line items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Order status and fulfilment information</span>
                  </li>
                </ul>
              </section>

              <section id="importing-to-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Importing to Shopify</h2>
                <p className="text-lg text-foreground mb-4">
                  You have several options for importing data to Shopify, from manual CSV import to automated migration tools.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Migration Tools</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Shopify Store Importer</h4>
                    <p className="text-foreground">Free built-in tool that imports from WooCommerce. Handles products, customers, and orders. Go to Apps → Import Store.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Cart2Cart</h4>
                    <p className="text-foreground">Paid migration service that handles complex migrations with more data types, including blog posts, reviews, and custom fields.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Matrixify</h4>
                    <p className="text-foreground">Powerful import/export app for Shopify. Use CSV exports from WooCommerce and transform them to Shopify format with Excel mapping.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Manual CSV Import</h3>
                <p className="text-lg text-foreground mb-4">
                  For smaller stores, manual import may be sufficient:
                </p>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Download Shopify templates</strong>
                      <p className="text-foreground mt-1">Get the product CSV template from Shopify to understand required columns and format.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Transform your data</strong>
                      <p className="text-foreground mt-1">Map WooCommerce columns to Shopify columns. Handle differences like how variants are structured.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Import in batches</strong>
                      <p className="text-foreground mt-1">Import products via Products → Import. For customers and orders, use apps like Matrixify.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="url-redirects" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">URL Redirects and SEO</h2>
                <p className="text-lg text-foreground mb-4">
                  Preserving your SEO during migration is critical. Without proper redirects, you&apos;ll lose search rankings and traffic.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Common URL Differences</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="space-y-3 text-foreground font-mono text-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 pb-2">
                      <span><strong>WooCommerce:</strong> /product/product-name/</span>
                      <span className="mt-1 md:mt-0">→ <strong>Shopify:</strong> /products/product-name</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 pb-2">
                      <span><strong>WooCommerce:</strong> /product-category/name/</span>
                      <span className="mt-1 md:mt-0">→ <strong>Shopify:</strong> /collections/name</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <span><strong>WooCommerce:</strong> /shop/</span>
                      <span className="mt-1 md:mt-0">→ <strong>Shopify:</strong> /collections/all</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Creating Redirects</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Export all WooCommerce URLs</strong>
                      <p className="text-foreground mt-1">Crawl your WooCommerce site with Screaming Frog or similar to get all product and category URLs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Create mapping spreadsheet</strong>
                      <p className="text-foreground mt-1">Map each old URL to its new Shopify equivalent. Include products, collections, pages, and blog posts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Import redirects</strong>
                      <p className="text-foreground mt-1">Go to Online Store → Navigation → URL Redirects. Import your redirect CSV or add manually.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Domain Timing</h4>
                  <p className="text-foreground">
                    Keep your old WooCommerce site running until redirects are tested. Point your domain to Shopify only after confirming everything works. Consider keeping WooCommerce accessible on a subdomain for reference.
                  </p>
                </div>
              </section>

              <section id="testing-migration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Your Migration</h2>
                <p className="text-lg text-foreground mb-4">
                  Thorough testing before going live prevents customer-facing issues.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Product verification</h3>
                    <p className="text-foreground">Check a sample of products for correct titles, descriptions, prices, images, variants, and inventory levels.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Checkout testing</h3>
                    <p className="text-foreground">Place test orders for various product types. Test shipping calculations, tax, and payment processing.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Customer accounts</h3>
                    <p className="text-foreground">Test customer login and account functionality. Verify order history displays correctly.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Redirect testing</h3>
                    <p className="text-foreground">Test a sample of old URLs to confirm they redirect to the correct new pages with 301 status codes.</p>
                  </div>
                </div>
              </section>

              <section id="go-live-checklist" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Go-Live Checklist</h2>
                <p className="text-lg text-foreground mb-4">
                  Final steps before pointing your domain to Shopify.
                </p>

                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>All products imported and verified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Collections/categories created and assigned</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Customer accounts imported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Historical orders imported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>URL redirects in place and tested</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Payment gateway configured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Shipping rates configured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Tax settings configured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Email notifications customised</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>Analytics and tracking set up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">□</span>
                    <span>SSL certificate active</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-create-shopify-redirects" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Create Shopify Redirects →</h4>
                      <p className="text-sm text-foreground">Preserve SEO rankings after migration</p>
                    </Link>
                    <Link href="/guides/how-to-migrate-to-shopify-plus" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Plus Upgrade →</h4>
                      <p className="text-sm text-foreground">Consider Plus for larger stores</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Migration Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team has migrated hundreds of WooCommerce stores to Shopify. We handle the complexity so you can focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
