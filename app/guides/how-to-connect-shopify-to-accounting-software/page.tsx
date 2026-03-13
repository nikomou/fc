import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Connect Shopify to Accounting Software",
  description:
    "Learn how to integrate Shopify with Xero, QuickBooks, Sage, and other accounting software. Covers setup, data mapping, reconciliation, and best practices.",
  alternates: {
    canonical: "/guides/how-to-connect-shopify-to-accounting-software",
  },
  openGraph: {
    title: "How to Connect Shopify to Accounting Software",
    description:
      "Learn how to integrate Shopify with accounting software.",
    url: "/guides/how-to-connect-shopify-to-accounting-software",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-integrate-accounting", title: "Why Integrate Accounting", level: 2 },
  { id: "choosing-accounting-software", title: "Choosing Accounting Software", level: 2 },
  { id: "integration-methods", title: "Integration Methods", level: 2 },
  { id: "setting-up-xero", title: "Setting Up Xero", level: 2 },
  { id: "setting-up-quickbooks", title: "Setting Up QuickBooks", level: 2 },
  { id: "data-mapping-best-practices", title: "Data Mapping Best Practices", level: 2 },
  { id: "reconciliation", title: "Reconciliation", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Connect Shopify to Accounting Software",
  description:
    "Learn how to integrate Shopify with accounting software.",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-connect-shopify-to-accounting-software`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Connect Shopify to Accounting Software",
      item: `${siteConfig.url}/guides/how-to-connect-shopify-to-accounting-software`,
    },
  ],
};

export default function AccountingSoftwareGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                Guide
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Connect Shopify to Accounting Software
            </h1>

            <p className="text-xl text-foreground mb-8">
              Manual bookkeeping wastes hours every week and introduces errors.
              Connecting your Shopify store to accounting software automates the
              flow of financial data, giving you accurate books with minimal effort.
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

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Why Integrate Accounting */}
              <section id="why-integrate-accounting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why Integrate Accounting
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Many Shopify merchants start by manually exporting orders and
                  entering them into their accounting software. This works when you
                  have a handful of orders per day, but quickly becomes unsustainable.
                  A proper integration eliminates this manual work entirely.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Beyond time savings, integration improves accuracy. Manual data entry
                  inevitably introduces errors, whether from typos, missed orders, or
                  incorrect categorisation. Automated systems do not make these mistakes.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Benefits of Accounting Integration</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Save hours weekly</strong>: No more manual order entry or export/import cycles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Real-time visibility</strong>: See your financial position at any time, not just month-end</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Accurate VAT</strong>: Tax rates sync correctly, simplifying VAT returns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Better reporting</strong>: Understand profitability by product, channel, or period</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Easier audits</strong>: Clean, connected records make accountant review straightforward</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  For most growing businesses, the question is not whether to integrate,
                  but how to do it correctly. A poorly configured integration creates
                  more problems than it solves.
                </p>
              </section>

              {/* Choosing Accounting Software */}
              <section id="choosing-accounting-software" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Choosing Accounting Software
                </h2>
                <p className="text-lg text-foreground mb-6">
                  If you do not already have accounting software, or are considering
                  switching, here is how the main options compare for Shopify merchants:
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">Xero</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">UK Favourite</span>
                    </div>
                    <p className="text-foreground mb-3">
                      Cloud-based, user-friendly, and popular with UK businesses. Excellent
                      Shopify integration options and strong multi-currency support.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Best for:</strong> Small to medium businesses, UK-based companies, those wanting simplicity
                    </p>
                    <p className="text-foreground">
                      <strong>Pricing:</strong> From £15/month
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">QuickBooks Online</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">US Standard</span>
                    </div>
                    <p className="text-foreground mb-3">
                      Intuit's cloud accounting solution with native Shopify connector.
                      Well-established with extensive third-party integrations.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Best for:</strong> Businesses with US presence, those already using Intuit products
                    </p>
                    <p className="text-foreground">
                      <strong>Pricing:</strong> From £12/month
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">Sage Business Cloud</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Enterprise Ready</span>
                    </div>
                    <p className="text-foreground mb-3">
                      Traditional accounting vendor with cloud offerings. Good for
                      businesses needing more advanced features or using other Sage products.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Best for:</strong> Larger businesses, complex requirements, those already on Sage
                    </p>
                    <p className="text-foreground">
                      <strong>Pricing:</strong> From £12/month
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">FreeAgent</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Freelancer Friendly</span>
                    </div>
                    <p className="text-foreground mb-3">
                      Designed for freelancers and small businesses. Simple interface
                      with good UK tax compliance features.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Best for:</strong> Sole traders, very small businesses, those wanting simplicity
                    </p>
                    <p className="text-foreground">
                      <strong>Pricing:</strong> From £19/month (free with some banks)
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Before choosing, ask your accountant what they prefer. Most accountants
                    have expertise in specific platforms and can work more efficiently if
                    you are on software they know well.
                  </p>
                </div>
              </section>

              {/* Integration Methods */}
              <section id="integration-methods" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Integration Methods
                </h2>
                <p className="text-lg text-foreground mb-6">
                  There are several ways to connect Shopify with your accounting software.
                  The best method depends on your volume, complexity, and budget.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Native Connectors</h3>
                    <p className="text-foreground mb-2">
                      Both Xero and QuickBooks offer official Shopify connectors. These
                      are free or low-cost and handle basic sync requirements well.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Pros:</strong> Simple setup, low cost, officially supported
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Cons:</strong> Limited customisation, basic features only
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Third-Party Integration Apps</h3>
                    <p className="text-foreground mb-2">
                      Apps like A2X, Synder, or Bookkeep offer more sophisticated sync
                      with better handling of fees, refunds, and multi-currency.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Pros:</strong> Better data mapping, handles complexity, good support
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Cons:</strong> Monthly cost (typically £15 to £50), another vendor to manage
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Custom Integration</h3>
                    <p className="text-foreground mb-2">
                      Built specifically for your needs using Shopify and accounting APIs.
                      Full control over data mapping and timing.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Pros:</strong> Complete flexibility, handles any requirement
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Cons:</strong> Higher upfront cost, requires maintenance
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Which Method to Choose
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Under 100 orders/month:</strong> Native connector is usually sufficient</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>100 to 1,000 orders/month:</strong> Third-party app recommended for better accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Over 1,000 orders/month:</strong> Custom integration often makes sense</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Multi-currency or complex fees:</strong> Use A2X or similar specialist app</span>
                  </li>
                </ul>
              </section>

              {/* Setting Up Xero */}
              <section id="setting-up-xero" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Setting Up Xero
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Xero is the most popular accounting software among our UK clients.
                  Here is how to set up a proper Shopify integration:
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Using the Native Xero Connector
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Install the Xero app from Shopify App Store</strong>
                      <p className="text-foreground mt-1">Search for the official Xero app and install it on your store.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Connect your Xero account</strong>
                      <p className="text-foreground mt-1">Authorise the connection and select your Xero organisation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Map your accounts</strong>
                      <p className="text-foreground mt-1">Configure which Xero accounts receive sales, shipping, discounts, and fees.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Set tax rates</strong>
                      <p className="text-foreground mt-1">Map Shopify tax rates to Xero tax rates for correct VAT handling.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Configure sync settings</strong>
                      <p className="text-foreground mt-1">Choose when orders sync (daily, hourly) and what data to include.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Using A2X for Xero
                </h3>
                <p className="text-lg text-foreground mb-4">
                  A2X is recommended for stores with significant volume or complexity.
                  It handles payment processing fees, refunds, and multi-currency
                  situations more accurately than the native connector.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-2">A2X Account Mapping Example</h3>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`Revenue Accounts:
  Product Sales → Sales (4000)
  Shipping Income → Shipping Income (4100)
  Gift Cards Sold → Gift Card Liability (2200)

Expense Accounts:
  Shopify Fees → Payment Processing Fees (6100)
  Discounts → Discounts Given (4900)
  Refunds → Refunds (4950)

Asset Accounts:
  Shopify Payouts → Shopify Clearing Account (1200)`}
                  </pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a Shopify clearing account in Xero. This holds funds between
                    when orders are placed and when Shopify pays you. It makes bank
                    reconciliation much easier.
                  </p>
                </div>
              </section>

              {/* Setting Up QuickBooks */}
              <section id="setting-up-quickbooks" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Setting Up QuickBooks
                </h2>
                <p className="text-lg text-foreground mb-4">
                  QuickBooks Online has a native Shopify integration that works well
                  for basic needs. For more complex requirements, third-party apps
                  like Synder or A2X provide better control.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Native QuickBooks Integration
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Access the Shopify connector in QuickBooks</strong>
                      <p className="text-foreground mt-1">Go to Apps in QuickBooks and search for Shopify, or use the Shopify admin.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Connect and authorise</strong>
                      <p className="text-foreground mt-1">Sign in to your Shopify store and grant QuickBooks access.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Configure account mapping</strong>
                      <p className="text-foreground mt-1">Map sales, fees, and other transactions to appropriate QuickBooks accounts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Set up product sync</strong>
                      <p className="text-foreground mt-1">Decide whether to sync products as individual items or summarised by category.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Run initial sync</strong>
                      <p className="text-foreground mt-1">Start with a small date range to test, then expand once verified.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  QuickBooks Specific Considerations
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Sales receipts vs invoices:</strong> Use sales receipts for B2C orders, invoices for B2B</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Customer creation:</strong> Decide whether to create individual customers or use a generic Shopify customer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Class tracking:</strong> Use classes to separate online vs retail or by product category</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Location tracking:</strong> If using multiple locations, map to QuickBooks locations</span>
                  </li>
                </ul>
              </section>

              {/* Data Mapping Best Practices */}
              <section id="data-mapping-best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Data Mapping Best Practices
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Correct data mapping ensures your books accurately reflect what
                  happened in Shopify. Here are the key decisions to get right:
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Revenue Recognition</h3>
                    <p className="text-foreground mb-3">
                      When should revenue be recorded? Most businesses use one of these approaches:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Order date:</strong> Revenue recorded when order is placed (accrual basis)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Payment date:</strong> Revenue recorded when payment is received (cash basis)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Fulfilment date:</strong> Revenue recorded when order ships (conservative)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Handling Fees</h3>
                    <p className="text-foreground mb-3">
                      Payment processing fees should be recorded accurately:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Record Shopify Payments fees as an expense</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Record PayPal fees separately if using PayPal</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>Do not net fees against revenue</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Discounts and Refunds</h3>
                    <p className="text-foreground mb-3">
                      Track these separately to understand their impact:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Discounts:</strong> Record as contra-revenue or a separate discount account</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Refunds:</strong> Record as reduction of revenue in the period issued</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Partial refunds:</strong> Allocate proportionally across line items</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Gift Cards</h3>
                    <p className="text-foreground mb-3">
                      Gift cards require special treatment:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>When sold:</strong> Record as a liability, not revenue</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>When redeemed:</strong> Reduce liability and record as revenue</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Breakage:</strong> Unredeemed balances eventually become revenue</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Reconciliation */}
              <section id="reconciliation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Reconciliation
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Even with automated integration, regular reconciliation is essential.
                  This catches sync errors, configuration issues, and edge cases that
                  the integration might not handle correctly.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Monthly Reconciliation Process
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Compare gross sales</strong>
                      <p className="text-foreground mt-1">Shopify Analytics total vs accounting software sales account. Should match exactly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Verify refunds</strong>
                      <p className="text-foreground mt-1">Total refunds in Shopify should match refund account in accounting software.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Check payment processing fees</strong>
                      <p className="text-foreground mt-1">Compare Shopify Payments fees to expense account. Also verify any PayPal fees.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Reconcile payouts to bank</strong>
                      <p className="text-foreground mt-1">Shopify payouts should match deposits in your bank account.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Review VAT</strong>
                      <p className="text-foreground mt-1">VAT collected in Shopify should match VAT liability in accounting software.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Common Reconciliation Issues</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span><strong>Timing differences:</strong> Orders placed vs orders paid vs orders synced</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span><strong>Currency conversion:</strong> Exchange rate differences between systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span><strong>Rounding:</strong> Small differences from rounding calculations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span><strong>Sync failures:</strong> Orders that failed to sync and were not retried</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a reconciliation spreadsheet template. Each month, fill in the
                    numbers from both systems. This documentation is valuable for audits
                    and helps identify patterns in discrepancies.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Ready to connect your Shopify store to accounting software? Here is
                  your action plan:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Choose your accounting software</strong>
                      <p className="text-foreground mt-1">If not already decided, consult with your accountant and evaluate options.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Set up your chart of accounts</strong>
                      <p className="text-foreground mt-1">Ensure you have the right accounts for sales, fees, refunds, and other Shopify data.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Install and configure the integration</strong>
                      <p className="text-foreground mt-1">Follow the setup guides above for your chosen integration method.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Test with a small period</strong>
                      <p className="text-foreground mt-1">Sync a week of orders first, verify accuracy, then expand.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-integrate-shopify-with-erp"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">ERP Integration Guide</h4>
                      <p className="text-sm text-foreground">For larger system integrations</p>
                    </Link>
                    <Link
                      href="/shopify-integrations"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Integration Services</h4>
                      <p className="text-sm text-foreground">Professional integration help</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Accounting Integration Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We can set up and configure your accounting integration, ensuring
            accurate data flow from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Integration Help
            </Button>
            <Button href="/shopify-integrations" variant="outline-light" size="lg" icon={false}>
              Our Integration Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
