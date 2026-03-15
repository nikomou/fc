import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Integrate Shopify with Sage",
  description: "Learn how to integrate Shopify with Sage accounting software. Covers integration options, data mapping, order and inventory sync, and troubleshooting.",
  alternates: { canonical: "/guides/how-to-integrate-shopify-with-sage" },
  openGraph: {
    title: "How to Integrate Shopify with Sage",
    description: "Learn how to integrate Shopify with Sage accounting software. Covers integration options, data mapping, order and inventory sync, and troubleshooting.",
    url: "/guides/how-to-integrate-shopify-with-sage",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "sage-shopify-use-cases", title: "Use Cases", level: 2 },
  { id: "integration-options", title: "Integration Options", level: 2 },
  { id: "data-mapping", title: "Data Mapping", level: 2 },
  { id: "order-sync", title: "Order Sync", level: 2 },
  { id: "inventory-sync", title: "Inventory Sync", level: 2 },
  { id: "common-issues", title: "Common Issues", level: 2 },
  { id: "choosing-an-integration-tool", title: "Choosing an Integration Tool", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Integrate Shopify with Sage",
  description: "Learn how to integrate Shopify with Sage accounting software. Covers integration options, data mapping, order sync, inventory sync, and troubleshooting common issues.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-integrate-shopify-with-sage` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Integrate Shopify with Sage", item: `${siteConfig.url}/guides/how-to-integrate-shopify-with-sage` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Integrations</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Integrate Shopify with Sage</h1>
            <p className="text-xl text-foreground mb-8">Connecting Shopify to Sage eliminates manual data entry between your ecommerce platform and accounting system, reduces errors, and gives you real-time financial visibility. This guide covers the key integration approaches and what to look for.</p>
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
              <section id="sage-shopify-use-cases" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Use Cases</h2>
                <p className="text-lg text-foreground mb-4">The primary reasons merchants integrate Shopify with Sage are: automating invoice creation from Shopify orders, synchronising stock levels between systems, keeping customer records consistent, and generating accurate VAT returns from combined data.</p>
                <p className="text-lg text-foreground mb-4">Sage 50 and Sage 200 are the most commonly used Sage products in UK SMEs. Sage Intacct and Sage X3 serve larger businesses. Integration approaches vary significantly by Sage version.</p>
              </section>
              <section id="integration-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Integration Options</h2>
                <p className="text-lg text-foreground mb-4">Direct integration apps in the Shopify App Store connect Shopify to Sage. Options include Sage Bridge by Amaka and Connex for Sage. These are simpler to set up but less flexible than middleware platforms.</p>
                <p className="text-lg text-foreground mb-4">Integration platforms like Patchworks, Celigo, and Boomi offer more robust Shopify-Sage integrations with greater control over data transformation and error handling. They are more expensive but essential for complex data requirements.</p>
                <p className="text-lg text-foreground mb-4">For custom requirements, Sage has an API (varies by version) and Shopify&apos;s Admin API allows direct integration development.</p>
              </section>
              <section id="data-mapping" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Data Mapping</h2>
                <p className="text-lg text-foreground mb-4">Before integration, document exactly which data needs to flow in which direction. Typical Shopify-to-Sage flows: orders to invoices, products to stock items, customers to sales ledger accounts.</p>
                <p className="text-lg text-foreground mb-4">Map Shopify fields to Sage fields carefully. Shopify&apos;s shipping address fields map to Sage&apos;s delivery address. Shopify&apos;s product variant SKU maps to Sage&apos;s product code. Mismatched mappings cause reconciliation problems.</p>
              </section>
              <section id="order-sync" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Order Sync</h2>
                <p className="text-lg text-foreground mb-4">Order sync creates invoices or sales transactions in Sage for each Shopify order. Configure whether to sync orders in real time (as they are placed) or in batches (e.g., end of day). Real-time sync is cleaner for financial reporting; batch sync reduces API calls.</p>
                <p className="text-lg text-foreground mb-4">Decide which Shopify order statuses trigger sync: typically fulfilled orders only, to avoid syncing cancelled or test orders.</p>
              </section>
              <section id="inventory-sync" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Sync</h2>
                <p className="text-lg text-foreground mb-4">If Sage is your system of record for inventory, sync stock levels from Sage to Shopify on a schedule. Any stock adjustments made in Sage (goods receipts, write-offs) automatically update Shopify availability.</p>
                <p className="text-lg text-foreground mb-4">Be careful with bi-directional inventory sync: Shopify decrements stock when orders are placed, and Sage decrements stock via goods issues. If both update each other simultaneously, you can get sync loops.</p>
              </section>
              <section id="common-issues" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Issues</h2>
                <p className="text-lg text-foreground mb-4">VAT mismatches: Shopify calculates VAT at the product level. Ensure your Sage tax codes match Shopify&apos;s tax configuration exactly.</p>
                <p className="text-lg text-foreground mb-4">Duplicate customers: When a customer has multiple orders, integrations sometimes create duplicate Sage ledger accounts. Set up matching logic based on email address.</p>
                <p className="text-lg text-foreground mb-4">Timing issues: Orders that are refunded or cancelled after syncing need to be handled via credit notes in Sage.</p>
              </section>
              <section id="choosing-an-integration-tool" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Choosing an Integration Tool</h2>
                <p className="text-lg text-foreground mb-4">For small volumes (under 100 orders per day), a simple app integration works well. For high volumes or complex requirements (multiple currencies, complex VAT, multi-warehouse), an integration platform gives better reliability and support.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-connect-shopify-to-xero" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Connect to Xero</h4><p className="text-sm text-foreground">Alternative accounting integration</p></Link>
                    <Link href="/guides/how-to-integrate-shopify-with-erp" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">ERP Integration</h4><p className="text-sm text-foreground">Broader ERP integration guide</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need a Shopify-Sage Integration?</h2>
          <p className="text-xl text-gray-300 mb-8">We build and maintain Shopify integrations with Sage 50, Sage 200, and Sage Intacct, including custom data mapping and error handling.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
