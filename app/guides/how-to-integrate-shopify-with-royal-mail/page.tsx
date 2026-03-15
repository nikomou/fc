import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Integrate Shopify with Royal Mail",
  description: "Learn how to integrate Shopify with Royal Mail. Covers Click and Drop, third-party integrations, label printing, tracking, and managing returns.",
  alternates: { canonical: "/guides/how-to-integrate-shopify-with-royal-mail" },
  openGraph: {
    title: "How to Integrate Shopify with Royal Mail",
    description: "Learn how to integrate Shopify with Royal Mail. Covers Click and Drop, third-party integrations, label printing, tracking, and managing returns.",
    url: "/guides/how-to-integrate-shopify-with-royal-mail",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "royal-mail-shopify-options", title: "Integration Options", level: 2 },
  { id: "click-and-drop", title: "Click and Drop", level: 2 },
  { id: "third-party-integrations", title: "Third-Party Integrations", level: 2 },
  { id: "label-printing", title: "Label Printing", level: 2 },
  { id: "tracking", title: "Tracking", level: 2 },
  { id: "managing-returns", title: "Managing Returns", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Integrate Shopify with Royal Mail",
  description: "Learn how to integrate Shopify with Royal Mail. Covers Click and Drop, third-party integrations, label printing, tracking, and managing returns.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-integrate-shopify-with-royal-mail` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Integrate Shopify with Royal Mail", item: `${siteConfig.url}/guides/how-to-integrate-shopify-with-royal-mail` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Integrate Shopify with Royal Mail</h1>
            <p className="text-xl text-foreground mb-8">Royal Mail is the most widely used carrier for UK Shopify merchants. Getting your Shopify integration right saves time on label creation, reduces errors, and improves the post-purchase experience for your customers.</p>
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
              <section id="royal-mail-shopify-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Integration Options</h2>
                <p className="text-lg text-foreground mb-4">There are three main ways to connect Shopify to Royal Mail: Royal Mail&apos;s own Click and Drop platform, third-party multi-carrier shipping software, or custom API integration. The right choice depends on your daily order volume and carrier mix.</p>
                <p className="text-lg text-foreground mb-4">For merchants shipping exclusively with Royal Mail at under 500 parcels per day, Click and Drop is free and sufficient. Above that volume, or if you use multiple carriers, a third-party platform gives better efficiency.</p>
              </section>
              <section id="click-and-drop" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Click and Drop</h2>
                <p className="text-lg text-foreground mb-4">Royal Mail&apos;s Click and Drop is a free web platform that connects to Shopify via a direct integration. Once connected, your Shopify orders appear automatically in Click and Drop. You select the service (First Class, Tracked 24, Tracked 48, etc.) and print labels directly.</p>
                <p className="text-lg text-foreground mb-4">To connect: create a Click and Drop account, go to Settings in Click and Drop, select Channel Integration, add Shopify, and enter your store credentials. Orders sync automatically within minutes of being placed.</p>
              </section>
              <section id="third-party-integrations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Third-Party Integrations</h2>
                <p className="text-lg text-foreground mb-4">ShipStation, Shiptheory, and Linnworks are the most popular third-party platforms used by UK Shopify merchants for Royal Mail integration. These platforms support multiple carriers, automate service selection based on rules, and handle batch label printing.</p>
                <p className="text-lg text-foreground mb-4">Shiptheory is particularly popular in the UK for its Royal Mail Tracked integration and automated shipping rules. Linnworks suits larger merchants needing order management and inventory sync alongside shipping.</p>
              </section>
              <section id="label-printing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Label Printing</h2>
                <p className="text-lg text-foreground mb-4">Print thermal labels on a 4x6 or 4x4 inch format compatible with your label printer. Zebra, Dymo, and Rollo are the most common thermal label printers used by UK ecommerce businesses. Thermal printing is faster and cheaper per label than inkjet.</p>
                <p className="text-lg text-foreground mb-4">Batch print labels for all orders in a fulfilment run rather than printing one at a time. Both Click and Drop and third-party platforms support batch printing.</p>
              </section>
              <section id="tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking</h2>
                <p className="text-lg text-foreground mb-4">Royal Mail Tracked 24 and Tracked 48 provide tracking updates that Shopify can display to customers. Once your labels are generated and manifested, Royal Mail provides tracking numbers. Most integrations automatically write these back to the Shopify order, triggering Shopify&apos;s shipping notification email to the customer.</p>
                <p className="text-lg text-foreground mb-4">Check that your integration is correctly updating Shopify order status to &quot;Fulfilled&quot; and writing the tracking number to the fulfilment. Customers receive automated tracking emails when this data is present.</p>
              </section>
              <section id="managing-returns" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Managing Returns</h2>
                <p className="text-lg text-foreground mb-4">Royal Mail&apos;s returns solution for ecommerce is Royal Mail Returns. You can add a pre-paid returns label to outbound parcels or allow customers to generate returns labels online.</p>
                <p className="text-lg text-foreground mb-4">Shopify allows you to generate return shipping labels from an order. If you use Royal Mail Returns, you can configure this in your Shopify shipping settings to generate Royal Mail return labels directly from the admin.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-handle-shopify-returns" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Handle Returns</h4><p className="text-sm text-foreground">Manage the returns process</p></Link>
                    <Link href="/guides/how-to-set-up-shopify-order-tracking" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Order Tracking</h4><p className="text-sm text-foreground">Set up customer order tracking</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Shipping Integration?</h2>
          <p className="text-xl text-gray-300 mb-8">We integrate Shopify with Royal Mail, DPD, DHL, and other UK carriers, and configure automated shipping rules to save time on every order.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
