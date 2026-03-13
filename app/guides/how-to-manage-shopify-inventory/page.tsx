import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Manage Shopify Inventory",
  description:
    "Complete guide to managing inventory in Shopify. Learn about stock tracking, multi-location inventory, low stock alerts, and inventory best practices.",
  alternates: {
    canonical: "/guides/how-to-manage-shopify-inventory",
  },
  openGraph: {
    title: "How to Manage Shopify Inventory",
    description: "Complete guide to managing inventory in Shopify effectively.",
    url: "/guides/how-to-manage-shopify-inventory",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "inventory-basics", title: "Inventory Basics", level: 2 },
  { id: "tracking-stock-levels", title: "Tracking Stock Levels", level: 2 },
  { id: "multi-location-inventory", title: "Multi-Location Inventory", level: 2 },
  { id: "low-stock-alerts", title: "Low Stock Alerts", level: 2 },
  { id: "inventory-adjustments", title: "Inventory Adjustments", level: 2 },
  { id: "inventory-reports", title: "Inventory Reports", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Manage Shopify Inventory",
  description: "Complete guide to managing inventory in Shopify effectively.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-manage-shopify-inventory` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Manage Shopify Inventory", item: `${siteConfig.url}/guides/how-to-manage-shopify-inventory` },
  ],
};

export default function ShopifyInventoryGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Inventory</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Manage Shopify Inventory
            </h1>

            <p className="text-xl text-foreground mb-8">
              Effective inventory management prevents overselling, reduces carrying costs, and keeps your customers happy. This guide covers everything from basic stock tracking to multi-location inventory strategies.
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

              <section id="inventory-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Basics</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify&apos;s inventory system tracks stock quantities for each product variant across all your sales channels and locations. When a customer purchases an item, the inventory count automatically decreases.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Understanding how Shopify handles inventory is crucial for avoiding overselling and maintaining accurate stock levels across your entire operation.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Inventory Concepts</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Available quantity</strong> is stock that can be sold to customers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Committed quantity</strong> is stock reserved for unfulfilled orders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>On hand quantity</strong> is the total physical stock at a location</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Incoming quantity</strong> is stock expected from purchase orders</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="tracking-stock-levels" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking Stock Levels</h2>
                <p className="text-lg text-foreground mb-4">
                  To enable inventory tracking for a product, you need to configure it in the product settings. This can be done individually or in bulk.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Enable Inventory Tracking</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Products</strong>
                      <p className="text-foreground mt-1">Go to Products in your Shopify admin and select the product you want to track.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Find Inventory Section</strong>
                      <p className="text-foreground mt-1">Scroll to the Inventory section and check &quot;Track quantity&quot; for each variant.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Set Initial Quantity</strong>
                      <p className="text-foreground mt-1">Enter your current stock quantity for each location where you hold inventory.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Selling Behaviour</strong>
                      <p className="text-foreground mt-1">Decide whether to &quot;Continue selling when out of stock&quot; or stop selling when inventory reaches zero.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Enable &quot;Continue selling when out of stock&quot; only for products you can quickly restock or dropship items. For limited stock products, keep this disabled to prevent overselling.
                  </p>
                </div>
              </section>

              <section id="multi-location-inventory" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Multi-Location Inventory</h2>
                <p className="text-lg text-foreground mb-4">
                  If you store products in multiple warehouses, retail locations, or fulfilment centres, Shopify&apos;s multi-location inventory feature keeps track of stock at each location independently.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Setting Up Locations</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Add locations:</strong> Go to Settings → Locations and add each warehouse or store</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Set fulfilment priority:</strong> Drag locations to set the order Shopify uses when fulfilling orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Assign inventory:</strong> Specify which products are available at each location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Configure apps:</strong> Enable third-party fulfilment apps for specific locations</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Location Limits by Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">10</div>
                      <div className="text-sm text-foreground">Basic Shopify</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">10</div>
                      <div className="text-sm text-foreground">Shopify</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">10</div>
                      <div className="text-sm text-foreground">Advanced</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground mt-4 text-center">Shopify Plus supports up to 200 locations</p>
                </div>
              </section>

              <section id="low-stock-alerts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Low Stock Alerts</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify does not include built-in low stock email alerts by default, but there are several ways to monitor inventory levels and get notified when stock runs low.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Inventory Reports</h3>
                    <p className="text-foreground">Use the &quot;Percent of inventory sold&quot; report in Analytics to identify fast-moving products that need restocking.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Third-Party Apps</h3>
                    <p className="text-foreground">Apps like Stocky, Stock Sync, or Low Stock Alert can send email or Slack notifications when inventory drops below a threshold.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify Flow</h3>
                    <p className="text-foreground">Shopify Plus merchants can use Flow to create automated workflows that trigger notifications or actions based on inventory levels.</p>
                  </div>
                </div>
              </section>

              <section id="inventory-adjustments" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Adjustments</h2>
                <p className="text-lg text-foreground mb-4">
                  Regular inventory adjustments ensure your Shopify stock counts match physical inventory. This is essential after stocktakes, receiving shipments, or accounting for damaged goods.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">How to Adjust Inventory</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Go to Inventory</strong>
                      <p className="text-foreground mt-1">Navigate to Products → Inventory in your Shopify admin.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Filter by Location</strong>
                      <p className="text-foreground mt-1">Select the location where you need to adjust stock.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Make Adjustments</strong>
                      <p className="text-foreground mt-1">Click on the quantity and enter the new number, or use the adjustment column to add or remove units.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Add Adjustment Reason</strong>
                      <p className="text-foreground mt-1">Select a reason (correction, damage, received, etc.) to maintain accurate records.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="inventory-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Reports</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify provides several inventory reports to help you analyse stock performance and make informed purchasing decisions.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Month-End Inventory Snapshot</h3>
                    <p className="text-foreground">Shows inventory quantities and values at the end of each month. Essential for accounting and tax purposes.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Percent of Inventory Sold</h3>
                    <p className="text-foreground">Identifies your fastest and slowest moving products. Use this to optimise purchasing and identify dead stock.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Average Inventory Sold Per Day</h3>
                    <p className="text-foreground">Helps calculate reorder points and forecast when stock will run out based on current sales velocity.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">ABC Inventory Analysis</h3>
                    <p className="text-foreground">Categorises products by sales contribution. A items are high-value, B items are moderate, C items are low priority.</p>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Following these inventory management best practices will help you maintain accurate stock levels and optimise your operations.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Inventory Management Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Regular stocktakes:</strong> Conduct physical counts at least quarterly to reconcile Shopify with actual inventory</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Safety stock:</strong> Maintain buffer stock for best-sellers to prevent stockouts during demand spikes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>SKU system:</strong> Use consistent SKU naming conventions that include product, size, and colour information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reorder points:</strong> Set reorder levels based on lead time and average daily sales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Dead stock review:</strong> Regularly review slow-moving items and plan clearance sales</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Complete pre-launch guide</p>
                    </Link>
                    <Link href="/guides/how-to-import-products-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Import Products →</h4>
                      <p className="text-sm text-foreground">Bulk product import guide</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Inventory Management Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up advanced inventory workflows, integrate with your warehouse systems, and implement automated stock management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
