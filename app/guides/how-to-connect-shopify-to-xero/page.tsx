import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Connect Shopify to Xero",
  description: "Learn how to connect Shopify to Xero for automated accounting. Covers the official Xero app, third-party connectors, data syncing, VAT handling, and troubleshooting.",
  alternates: { canonical: "/guides/how-to-connect-shopify-to-xero" },
  openGraph: {
    title: "How to Connect Shopify to Xero",
    description: "Learn how to connect Shopify to Xero for automated accounting. Covers the official Xero app, third-party connectors, data syncing, VAT handling, and troubleshooting.",
    url: "/guides/how-to-connect-shopify-to-xero",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-connect-shopify-to-xero", title: "Why Connect to Xero", level: 2 },
  { id: "official-xero-app", title: "The Official Xero App", level: 2 },
  { id: "third-party-connectors", title: "Third-Party Connectors", level: 2 },
  { id: "data-that-syncs", title: "What Data Syncs", level: 2 },
  { id: "reconciliation", title: "Reconciliation", level: 2 },
  { id: "vat-handling", title: "VAT Handling", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Connect Shopify to Xero",
  description: "Learn how to connect Shopify to Xero for automated accounting. Covers the official Xero app, third-party connectors, data syncing, VAT handling, and troubleshooting.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-connect-shopify-to-xero` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Connect Shopify to Xero", item: `${siteConfig.url}/guides/how-to-connect-shopify-to-xero` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Connect Shopify to Xero</h1>
            <p className="text-xl text-foreground mb-8">Xero is the most widely used accounting platform for UK small and medium ecommerce businesses. Connecting it to Shopify automates your bookkeeping and ensures your financial reports reflect real-time trading activity.</p>
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
              <section id="why-connect-shopify-to-xero" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Connect to Xero</h2>
                <p className="text-lg text-foreground mb-4">Manual bookkeeping for an active Shopify store is time-consuming and error-prone. Connecting the two systems means your accountant always has up-to-date data, VAT returns are easier to prepare, and you have real-time visibility into margins and cash flow.</p>
                <p className="text-lg text-foreground mb-4">The connection also makes bank reconciliation faster: Shopify payouts appear in Xero and can be matched to bank transactions with minimal manual work.</p>
              </section>
              <section id="official-xero-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">The Official Xero App</h2>
                <p className="text-lg text-foreground mb-4">Xero offers a direct Shopify integration in the Shopify App Store. Install the Xero app, connect it to your Xero organisation, and configure which data to sync. The official app syncs daily sales summaries to Xero rather than individual invoices, which is simpler for high-volume stores.</p>
                <p className="text-lg text-foreground mb-4">The daily summary approach records total sales, refunds, fees, and taxes for each day as a single invoice. This is sufficient for most merchants but does not support per-order reporting in Xero.</p>
              </section>
              <section id="third-party-connectors" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Third-Party Connectors</h2>
                <p className="text-lg text-foreground mb-4">For per-order Xero invoicing or more complex requirements, third-party connectors offer more control. Amaka, A2X, and Synder are popular options. A2X is widely used by Shopify accountants in the UK for its clean handling of Shopify Payments payouts and fees.</p>
                <p className="text-lg text-foreground mb-4">A2X matches Shopify payouts to their constituent orders and fees, making bank reconciliation in Xero much simpler. It costs £19-£79 per month depending on order volume.</p>
              </section>
              <section id="data-that-syncs" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Data Syncs</h2>
                <p className="text-lg text-foreground mb-4">Sales invoices or daily summaries, refund credit notes, Shopify Payments fees (appearing as expense transactions), and gift card redemptions all sync from Shopify to Xero. Customer contact records may also sync depending on your configuration.</p>
                <p className="text-lg text-foreground mb-4">Configure tax mapping carefully: Shopify&apos;s 20% VAT needs to map to the correct Xero tax rate for accurate VAT returns.</p>
              </section>
              <section id="reconciliation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Reconciliation</h2>
                <p className="text-lg text-foreground mb-4">Shopify payouts are deposited to your bank account on a rolling 2-day basis for most UK merchants. In Xero, match these deposits to the corresponding Shopify Payments payouts recorded by your integration. A2X handles this automatically; the official app requires manual matching.</p>
              </section>
              <section id="vat-handling" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">VAT Handling</h2>
                <p className="text-lg text-foreground mb-4">Ensure your Xero integration correctly separates VAT from gross sales. A common issue is integrations that record gross sales amounts, requiring manual VAT calculation. Verify that your Xero tax reports after integration match your Shopify VAT report for the same period.</p>
              </section>
              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Troubleshooting</h2>
                <p className="text-lg text-foreground mb-4">Common issues: missing transactions (usually orders placed during integration downtime), duplicate invoices (caused by orders syncing twice), and VAT mismatches (due to incorrect tax rate mapping). Check your integration&apos;s error log and reconcile Shopify and Xero totals monthly to catch discrepancies early.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-integrate-shopify-with-sage" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Integrate with Sage</h4><p className="text-sm text-foreground">Alternative accounting integration</p></Link>
                    <Link href="/guides/how-to-read-shopify-analytics" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Analytics</h4><p className="text-sm text-foreground">Understand your financial data</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need a Shopify-Xero Integration?</h2>
          <p className="text-xl text-gray-300 mb-8">We set up and configure Shopify-Xero integrations with correct VAT handling, payout reconciliation, and ongoing monitoring.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
