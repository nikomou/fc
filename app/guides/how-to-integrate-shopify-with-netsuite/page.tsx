import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Integrate Shopify with NetSuite",
  description: "Learn how to integrate Shopify with NetSuite ERP. Covers use cases, integration approaches, order-to-cash flow, inventory management, and implementation timelines.",
  alternates: { canonical: "/guides/how-to-integrate-shopify-with-netsuite" },
  openGraph: {
    title: "How to Integrate Shopify with NetSuite",
    description: "Learn how to integrate Shopify with NetSuite ERP. Covers use cases, integration approaches, order-to-cash flow, inventory management, and implementation timelines.",
    url: "/guides/how-to-integrate-shopify-with-netsuite",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "when-netsuite-makes-sense", title: "When NetSuite Makes Sense", level: 2 },
  { id: "integration-approaches", title: "Integration Approaches", level: 2 },
  { id: "order-to-cash-flow", title: "Order-to-Cash Flow", level: 2 },
  { id: "inventory-management", title: "Inventory Management", level: 2 },
  { id: "customer-sync", title: "Customer Sync", level: 2 },
  { id: "implementation-timeline", title: "Implementation Timeline", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Integrate Shopify with NetSuite",
  description: "Learn how to integrate Shopify with NetSuite ERP. Covers use cases, integration approaches, order-to-cash flow, inventory management, and implementation timelines.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-integrate-shopify-with-netsuite` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Integrate Shopify with NetSuite", item: `${siteConfig.url}/guides/how-to-integrate-shopify-with-netsuite` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>16 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Integrate Shopify with NetSuite</h1>
            <p className="text-xl text-foreground mb-8">NetSuite is the ERP of choice for many growing UK ecommerce brands, providing financial management, inventory, and order management in a single platform. Integrating it with Shopify requires careful planning but delivers significant operational benefits.</p>
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
              <section id="when-netsuite-makes-sense" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">When NetSuite Makes Sense</h2>
                <p className="text-lg text-foreground mb-4">NetSuite typically becomes relevant for Shopify merchants when: annual revenue exceeds £5-10M, you need consolidated multi-entity financial reporting, your inventory management requires lot tracking or advanced warehouse management, or your finance team needs the full suite of NetSuite&apos;s financial tools.</p>
                <p className="text-lg text-foreground mb-4">Below this scale, Xero or QuickBooks combined with a specialist inventory app is usually more cost-effective than NetSuite&apos;s implementation and licence costs.</p>
              </section>
              <section id="integration-approaches" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Integration Approaches</h2>
                <p className="text-lg text-foreground mb-4">There are three main approaches: native connectors (Celigo and Boomi both offer pre-built Shopify-NetSuite integrations), middleware platforms (iPaaS), and custom API integration.</p>
                <p className="text-lg text-foreground mb-4">Celigo&apos;s Shopify-NetSuite connector is widely used and includes pre-built flows for orders, products, inventory, customers, and returns. It reduces implementation time significantly versus a custom build.</p>
              </section>
              <section id="order-to-cash-flow" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Order-to-Cash Flow</h2>
                <p className="text-lg text-foreground mb-4">A typical order-to-cash integration flow: Shopify order created triggers a sales order in NetSuite, NetSuite creates a cash sale or invoice, fulfilment in NetSuite creates a Shopify fulfilment notification, and Shopify Payments payouts are reconciled to cash receipts in NetSuite.</p>
                <p className="text-lg text-foreground mb-4">The complexity lies in handling refunds, partial fulfilments, multi-currency orders, and Shopify Payments settlements. Map these edge cases before implementation.</p>
              </section>
              <section id="inventory-management" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Management</h2>
                <p className="text-lg text-foreground mb-4">For merchants using NetSuite as their inventory system of record, sync inventory levels from NetSuite to Shopify in near-real-time. When Shopify orders reduce inventory in NetSuite, the updated levels must flow back to Shopify before the next order.</p>
                <p className="text-lg text-foreground mb-4">For high-velocity products, consider pushing inventory reservations to NetSuite at order time rather than waiting for fulfilment. This prevents overselling when multiple orders arrive simultaneously.</p>
              </section>
              <section id="customer-sync" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Sync</h2>
                <p className="text-lg text-foreground mb-4">Sync customer records from Shopify to NetSuite for accurate CRM data and revenue reporting by customer. Match on email address to avoid duplicates. Configure whether Shopify guest checkout customers create records in NetSuite or are treated as anonymous transactions.</p>
              </section>
              <section id="implementation-timeline" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Implementation Timeline</h2>
                <p className="text-lg text-foreground mb-4">A typical Shopify-NetSuite integration project takes 8-16 weeks from requirement gathering to go-live. Budget for: integration platform setup and configuration (4-8 weeks), data mapping and testing (2-4 weeks), user acceptance testing (2-4 weeks), and go-live support.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-integrate-shopify-with-erp" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">ERP Integration</h4><p className="text-sm text-foreground">Broader ERP integration guide</p></Link>
                    <Link href="/guides/how-to-integrate-shopify-with-sage" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Integrate with Sage</h4><p className="text-sm text-foreground">Sage integration alternative</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need a Shopify-NetSuite Integration?</h2>
          <p className="text-xl text-gray-300 mb-8">We build and maintain Shopify-NetSuite integrations for growing brands, from initial scoping through to go-live and ongoing support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
