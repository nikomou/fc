import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Manage Multi-Location Inventory on Shopify",
  description: "Learn how to manage multi-location inventory on Shopify. Covers setting up locations, assigning stock, fulfilment priority, POS, and reporting by location.",
  alternates: { canonical: "/guides/how-to-manage-shopify-multi-location" },
  openGraph: {
    title: "How to Manage Multi-Location Inventory on Shopify",
    description: "Learn how to manage multi-location inventory on Shopify. Covers setting up locations, assigning stock, fulfilment priority, POS, and reporting by location.",
    url: "/guides/how-to-manage-shopify-multi-location",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "setting-up-locations", title: "Setting Up Locations", level: 2 },
  { id: "assigning-inventory", title: "Assigning Inventory", level: 2 },
  { id: "fulfilment-priority", title: "Fulfilment Priority", level: 2 },
  { id: "location-routing", title: "Location Routing", level: 2 },
  { id: "pos-and-locations", title: "POS and Locations", level: 2 },
  { id: "reporting-by-location", title: "Reporting by Location", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Manage Multi-Location Inventory on Shopify",
  description: "Learn how to manage multi-location inventory on Shopify. Covers setting up locations, assigning stock, fulfilment priority, POS, and reporting by location.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-manage-shopify-multi-location` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Manage Multi-Location Inventory on Shopify", item: `${siteConfig.url}/guides/how-to-manage-shopify-multi-location` },
  ],
};

export default function Page() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">International &amp; Multi-currency</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Manage Multi-Location Inventory on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Managing inventory across multiple warehouses, stores, or fulfilment centres requires careful Shopify configuration. This guide covers how to set up locations, manage stock levels across them, and configure how Shopify routes fulfilment.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
              <span className="text-gray-300">•</span><span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="setting-up-locations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Up Locations</h2>
                <p className="text-lg text-foreground mb-4">Shopify supports up to 1,000 locations depending on your plan. Go to Settings, then Locations, and add each location with a name and address. Locations can be warehouses, retail stores, fulfilment partners, or any physical point where stock is held.</p>
                <p className="text-lg text-foreground mb-4">Each location needs to be clearly named so your team can identify it easily in the admin. Use a naming convention like &quot;Warehouse - Manchester&quot; or &quot;Store - Liverpool&quot; to keep things clear.</p>
              </section>
              <section id="assigning-inventory" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Assigning Inventory</h2>
                <p className="text-lg text-foreground mb-4">Inventory is tracked per variant per location. After adding a location, go to your products and set the quantity available at each location for each variant. You can do this via the product editor, via a CSV import, or via the Inventory section in Shopify admin.</p>
                <p className="text-lg text-foreground mb-4">For new stock arrivals, update inventory at the specific location where the stock has been received. Use purchase orders in Shopify admin (or a third-party inventory management tool) to track incoming stock.</p>
              </section>
              <section id="fulfilment-priority" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Fulfilment Priority</h2>
                <p className="text-lg text-foreground mb-4">When an order is placed, Shopify automatically assigns it to a fulfilment location based on your priority settings. Go to Settings, then Shipping and Delivery, and configure your location priority order.</p>
                <p className="text-lg text-foreground mb-4">Set your primary fulfilment location first. If stock is unavailable there, Shopify looks to the next location in priority order. Configure this to match your operational preferences: typically your central warehouse first, then regional warehouses.</p>
              </section>
              <section id="location-routing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Location Routing</h2>
                <p className="text-lg text-foreground mb-4">For more sophisticated routing, Shopify Flow can direct orders to specific locations based on rules: orders from Scottish postcodes to your Glasgow warehouse, orders with next-day delivery to your nearest location to the customer, etc.</p>
                <p className="text-lg text-foreground mb-4">Third-party order management systems like Brightpearl and Linnworks offer more advanced location routing with distance-based logic and carrier selection per location.</p>
              </section>
              <section id="pos-and-locations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">POS and Locations</h2>
                <p className="text-lg text-foreground mb-4">Each Shopify POS device must be assigned to a location. Stock adjustments made via POS (sales, returns, stock counts) automatically update the inventory for that location.</p>
                <p className="text-lg text-foreground mb-4">Enable local pickup at retail store locations to allow customers to collect online orders in-store. Stock is reserved from the specific location when a click-and-collect order is placed.</p>
              </section>
              <section id="reporting-by-location" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Reporting by Location</h2>
                <p className="text-lg text-foreground mb-4">Shopify&apos;s inventory reports can be filtered by location. View current inventory levels, inventory history, and sell-through rates per location. This data helps you identify locations that are overstocked or understocked and optimise your stock distribution.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-click-and-collect" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Click and Collect</h4><p className="text-sm text-foreground">Let customers collect from your locations</p></Link>
                    <Link href="/guides/how-to-manage-shopify-inventory" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Manage Inventory</h4><p className="text-sm text-foreground">Core inventory management</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Multi-Location Inventory?</h2>
          <p className="text-xl text-gray-300 mb-8">We configure multi-location inventory, fulfilment routing, and POS integrations for merchants with complex stock management needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
