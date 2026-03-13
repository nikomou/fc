import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Reports",
  description: "Complete guide to setting up and using Shopify reports. Learn about sales reports, custom reports, analytics, and data-driven decision making.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-reports" },
  openGraph: {
    title: "How to Set Up Shopify Reports",
    description: "Complete guide to setting up and using Shopify reports.",
    url: "/guides/how-to-set-up-shopify-reports",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "reports-overview", title: "Reports Overview", level: 2 },
  { id: "sales-reports", title: "Sales Reports", level: 2 },
  { id: "customer-reports", title: "Customer Reports", level: 2 },
  { id: "product-reports", title: "Product Reports", level: 2 },
  { id: "custom-reports", title: "Custom Reports", level: 2 },
  { id: "exporting-data", title: "Exporting Data", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Reports",
  description: "Complete guide to setting up and using Shopify reports.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-reports` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Reports", item: `${siteConfig.url}/guides/how-to-set-up-shopify-reports` },
  ],
};

export default function ShopifyReportsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Analytics</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Shopify Reports</h1>
            <p className="text-xl text-foreground mb-8">Shopify reports help you understand your business performance. This guide covers all report types and how to use data for better decisions.</p>
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
              <section id="reports-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Reports Overview</h2>
                <p className="text-lg text-foreground mb-4">Shopify provides built-in reports covering sales, customers, products, marketing, and more. Access reports via Analytics → Reports in your admin.</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Report Availability by Plan</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Basic:</strong> Basic reports and analytics dashboard</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Shopify:</strong> Professional reports with more detail</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Advanced:</strong> Custom report builder and advanced analytics</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Plus:</strong> All reports plus additional enterprise features</span></li>
                  </ul>
                </div>
              </section>

              <section id="sales-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Sales Reports</h2>
                <p className="text-lg text-foreground mb-4">Sales reports show revenue, orders, and transaction data over time.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Key Sales Reports</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Sales over time</h4>
                    <p className="text-foreground text-sm">Total sales by day, week, month, or custom period. Great for identifying trends.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Sales by channel</h4>
                    <p className="text-foreground text-sm">Compare online store, POS, and other sales channels.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Average order value</h4>
                    <p className="text-foreground text-sm">Track how much customers spend per order on average.</p>
                  </div>
                </div>
              </section>

              <section id="customer-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Reports</h2>
                <p className="text-lg text-foreground mb-4">Customer reports help you understand who buys from you and how often.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Useful Customer Metrics</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>First-time vs returning:</strong> Balance of new customer acquisition vs retention</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Customer lifetime value:</strong> Average revenue per customer over time</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Customers by location:</strong> Where your customers are based</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Purchase frequency:</strong> How often customers return to buy</span></li>
                </ul>
              </section>

              <section id="product-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Reports</h2>
                <p className="text-lg text-foreground mb-4">Product reports show which products sell best and which might need attention.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Key Product Reports</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Sales by product:</strong> Your bestsellers and underperformers</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Sales by variant:</strong> Which sizes, colours, etc. sell best</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Inventory levels:</strong> Stock levels across products</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Product views to purchase:</strong> Conversion by product</span></li>
                </ul>
              </section>

              <section id="custom-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Custom Reports</h2>
                <p className="text-lg text-foreground mb-4">On Advanced and Plus plans, you can build custom reports with specific dimensions and metrics.</p>
                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div><strong className="text-foreground-dark">Go to Analytics → Reports</strong><p className="mt-1">Click &quot;Create custom report&quot;</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div><strong className="text-foreground-dark">Choose a category</strong><p className="mt-1">Select sales, customers, products, etc.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div><strong className="text-foreground-dark">Add columns</strong><p className="mt-1">Select the metrics you want to see</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div><strong className="text-foreground-dark">Add filters</strong><p className="mt-1">Narrow down to specific data</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div><strong className="text-foreground-dark">Save the report</strong><p className="mt-1">Name it and access it anytime</p></div>
                  </li>
                </ol>
              </section>

              <section id="exporting-data" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Exporting Data</h2>
                <p className="text-lg text-foreground mb-4">Export reports to CSV for further analysis in Excel or Google Sheets.</p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Click &quot;Export&quot; on any report to download CSV</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Schedule automatic exports on Plus plans</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Use the Admin API for programmatic data access</span></li>
                </ul>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Review weekly:</strong> Set a regular time to check key reports</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Compare periods:</strong> Always compare to previous period or year</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Act on insights:</strong> Use data to inform decisions, not just observe</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Combine with GA4:</strong> Use Google Analytics for deeper traffic insights</span></li>
                </ul>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-read-shopify-analytics" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Read Shopify Analytics →</h4>
                      <p className="text-sm text-foreground">Understanding your data</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-google-analytics-4-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up GA4 →</h4>
                      <p className="text-sm text-foreground">Advanced analytics setup</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Analytics Help?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team can set up custom reports and dashboards to track the metrics that matter most to your business.</p>
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
