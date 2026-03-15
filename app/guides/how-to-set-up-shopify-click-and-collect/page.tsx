import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Click and Collect on Shopify",
  description: "Learn how to set up click and collect on Shopify. Covers enabling local pickup, multiple locations, customer notifications, managing pickup orders, and combining with delivery.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-click-and-collect" },
  openGraph: {
    title: "How to Set Up Click and Collect on Shopify",
    description: "Learn how to set up click and collect on Shopify. Covers enabling local pickup, multiple locations, customer notifications, managing pickup orders, and combining with delivery.",
    url: "/guides/how-to-set-up-shopify-click-and-collect",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "click-and-collect-basics", title: "Click and Collect Basics", level: 2 },
  { id: "enabling-local-pickup", title: "Enabling Local Pickup", level: 2 },
  { id: "multiple-locations", title: "Multiple Locations", level: 2 },
  { id: "customer-notifications", title: "Customer Notifications", level: 2 },
  { id: "managing-pickup-orders", title: "Managing Pickup Orders", level: 2 },
  { id: "combining-with-delivery", title: "Combining with Delivery", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Click and Collect on Shopify",
  description: "Learn how to set up click and collect on Shopify. Covers enabling local pickup, multiple locations, customer notifications, managing pickup orders, and combining with delivery.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-click-and-collect` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Click and Collect on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-click-and-collect` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shipping &amp; Fulfilment</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Click and Collect on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Click and collect bridges your online and physical retail presence, reducing shipping costs and giving customers the flexibility to collect at their convenience. Shopify supports it natively via the Local Pickup feature. This guide walks through setting it up correctly.</p>
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
              <section id="click-and-collect-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Click and Collect Basics</h2>
                <p className="text-lg text-foreground mb-4">Click and collect (also called BOPIS: Buy Online, Pick Up In Store) lets customers purchase online and collect from one of your physical locations. It reduces shipping costs for both you and the customer, and drives foot traffic to your stores.</p>
                <p className="text-lg text-foreground mb-4">For UK retailers, click and collect is particularly popular: 59% of UK shoppers used it in 2024. Offering it as an option at checkout can convert customers who prefer to avoid delivery fees or timeframes.</p>
              </section>
              <section id="enabling-local-pickup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Enabling Local Pickup</h2>
                <p className="text-lg text-foreground mb-4">In Shopify admin, go to Settings, then Shipping and Delivery. Scroll to Local Pickup. Click Manage for your location and enable &quot;Allow customers to pick up orders at this location&quot;. Set the expected pickup date or wait time: this shows at checkout so customers know when their order will be ready.</p>
                <p className="text-lg text-foreground mb-4">You can also add pickup instructions shown to customers after they place a click-and-collect order. Include your address, opening hours, what ID to bring, and any other relevant instructions.</p>
              </section>
              <section id="multiple-locations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Multiple Locations</h2>
                <p className="text-lg text-foreground mb-4">If you have multiple pickup locations, each needs to be set up separately in Settings, then Locations, then configured for Local Pickup. Customers select their preferred location at checkout from a list of your enabled pickup points.</p>
                <p className="text-lg text-foreground mb-4">Consider whether to show customers the stock availability at each location during checkout. If a product is out of stock at one location but available at another, this information prevents wasted journeys.</p>
              </section>
              <section id="customer-notifications" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Notifications</h2>
                <p className="text-lg text-foreground mb-4">Shopify sends automated notifications when a click-and-collect order is ready for pickup. Customise this email under Settings, then Notifications, then Ready for Pickup. Include your exact address, directions, opening hours, and what the customer needs to bring.</p>
                <p className="text-lg text-foreground mb-4">Consider also sending an SMS notification for orders ready for collection. SMS has much higher open rates than email for time-sensitive notifications.</p>
              </section>
              <section id="managing-pickup-orders" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Managing Pickup Orders</h2>
                <p className="text-lg text-foreground mb-4">Filter your orders view by fulfilment status to see which orders are awaiting collection. Use order tags to differentiate click-and-collect orders from standard delivery orders.</p>
                <p className="text-lg text-foreground mb-4">Create a process for marking orders as collected. In Shopify, this is done by marking the order as fulfilled after the customer has collected. Train your in-store team on this process to keep your records accurate.</p>
              </section>
              <section id="combining-with-delivery" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Combining with Delivery</h2>
                <p className="text-lg text-foreground mb-4">For orders that contain items requiring delivery (like heavy items that cannot be collected) alongside items available for collection, Shopify handles split fulfilment. Ensure your theme communicates this clearly at checkout so customers understand that some items will be shipped even for click-and-collect orders.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-local-delivery" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Local Delivery</h4><p className="text-sm text-foreground">Set up local delivery zones</p></Link>
                    <Link href="/guides/how-to-manage-shopify-multi-location" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Multi-Location Inventory</h4><p className="text-sm text-foreground">Manage stock across locations</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Setting Up Click and Collect?</h2>
          <p className="text-xl text-gray-300 mb-8">We configure click-and-collect workflows, multi-location inventory, and in-store fulfilment processes for omnichannel Shopify retailers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
