import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Integrate Shopify with ERP",
  description:
    "Learn how to connect your Shopify store with ERP systems like SAP, NetSuite, and Microsoft Dynamics. Covers integration methods, data mapping, and implementation best practices.",
  alternates: {
    canonical: "/guides/how-to-integrate-shopify-with-erp",
  },
  openGraph: {
    title: "How to Integrate Shopify with ERP",
    description:
      "Learn how to connect your Shopify store with ERP systems.",
    url: "/guides/how-to-integrate-shopify-with-erp",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-erp-integration", title: "Why ERP Integration", level: 2 },
  { id: "integration-approaches", title: "Integration Approaches", level: 2 },
  { id: "data-mapping", title: "Data Mapping", level: 2 },
  { id: "popular-erp-systems", title: "Popular ERP Systems", level: 2 },
  { id: "implementation-process", title: "Implementation Process", level: 2 },
  { id: "common-challenges", title: "Common Challenges", level: 2 },
  { id: "maintenance-and-monitoring", title: "Maintenance and Monitoring", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Integrate Shopify with ERP",
  description:
    "Learn how to connect your Shopify store with ERP systems.",
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
    "@id": `${siteConfig.url}/guides/how-to-integrate-shopify-with-erp`,
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
      name: "How to Integrate Shopify with ERP",
      item: `${siteConfig.url}/guides/how-to-integrate-shopify-with-erp`,
    },
  ],
};

export default function ERPIntegrationGuidePage() {
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
                <span>18 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Integrate Shopify with ERP
            </h1>

            <p className="text-xl text-foreground mb-8">
              Connecting your Shopify store with an ERP system eliminates manual data
              entry, reduces errors, and gives you a single source of truth for inventory,
              orders, and customer data. This guide covers everything you need to know.
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
              {/* Why ERP Integration */}
              <section id="why-erp-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why ERP Integration
                </h2>
                <p className="text-lg text-foreground mb-4">
                  As your ecommerce business grows, managing data across disconnected
                  systems becomes increasingly painful. Staff spend hours re-keying orders,
                  inventory counts drift out of sync, and financial reporting requires
                  manual reconciliation. An ERP integration solves these problems by
                  creating automated data flows between your systems.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Most growing Shopify merchants reach a point where manual processes
                  break down. The typical threshold is around 50 to 100 orders per day,
                  though this varies based on product complexity and operational needs.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Benefits of ERP Integration</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Real-time inventory sync</strong>: Prevent overselling and stockouts across all channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Automated order processing</strong>: Orders flow directly to fulfilment without manual entry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Accurate financial data</strong>: Revenue and costs sync automatically to your accounting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Single customer view</strong>: All customer interactions in one place</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reduced errors</strong>: Eliminate manual data entry mistakes</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The ROI of ERP integration typically comes from labour savings, error
                  reduction, and improved inventory management. Most businesses see payback
                  within 6 to 12 months of implementation.
                </p>
              </section>

              {/* Integration Approaches */}
              <section id="integration-approaches" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Integration Approaches
                </h2>
                <p className="text-lg text-foreground mb-6">
                  There are several ways to connect Shopify with your ERP system. Each
                  approach has trade-offs in terms of cost, complexity, and flexibility.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">Native Connectors</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Easiest</span>
                    </div>
                    <p className="text-foreground mb-4">
                      Pre-built integrations available in the Shopify App Store or your
                      ERP's marketplace. These are designed for common use cases and
                      require minimal configuration.
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">Best for:</h4>
                    <ul className="space-y-1 text-foreground mb-4">
                      <li>• Standard data flows (orders, inventory, products)</li>
                      <li>• Popular ERP systems with established connectors</li>
                      <li>• Businesses without unique requirements</li>
                    </ul>
                    <h4 className="font-medium text-foreground-dark mb-2">Limitations:</h4>
                    <ul className="space-y-1 text-foreground">
                      <li>• Limited customisation options</li>
                      <li>• May not support all data fields</li>
                      <li>• Dependent on connector vendor for updates</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">Integration Platforms (iPaaS)</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Flexible</span>
                    </div>
                    <p className="text-foreground mb-4">
                      Middleware platforms like Celigo, Jitterbit, or Boomi that connect
                      multiple systems using pre-built connectors and custom logic.
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">Best for:</h4>
                    <ul className="space-y-1 text-foreground mb-4">
                      <li>• Complex data transformations</li>
                      <li>• Connecting multiple systems beyond just Shopify and ERP</li>
                      <li>• Businesses needing custom workflows</li>
                    </ul>
                    <h4 className="font-medium text-foreground-dark mb-2">Limitations:</h4>
                    <ul className="space-y-1 text-foreground">
                      <li>• Higher ongoing costs</li>
                      <li>• Requires technical expertise to configure</li>
                      <li>• Another system to maintain</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">Custom API Integration</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Most Control</span>
                    </div>
                    <p className="text-foreground mb-4">
                      Bespoke integration built specifically for your systems and
                      requirements using Shopify's APIs and your ERP's APIs.
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">Best for:</h4>
                    <ul className="space-y-1 text-foreground mb-4">
                      <li>• Unique business processes</li>
                      <li>• High-volume operations needing optimal performance</li>
                      <li>• Integrating with legacy or unusual systems</li>
                    </ul>
                    <h4 className="font-medium text-foreground-dark mb-2">Limitations:</h4>
                    <ul className="space-y-1 text-foreground">
                      <li>• Higher upfront development cost</li>
                      <li>• Requires ongoing maintenance</li>
                      <li>• Longer implementation timeline</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Start with a native connector if one exists for your ERP. You can
                    always upgrade to a more sophisticated solution later if your needs
                    outgrow the basic integration.
                  </p>
                </div>
              </section>

              {/* Data Mapping */}
              <section id="data-mapping" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Data Mapping
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Data mapping defines how information translates between Shopify and
                  your ERP. Getting this right is critical for a successful integration.
                  Poor mapping leads to data errors, sync failures, and manual clean-up.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Key Data Entities
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Products</h3>
                    <p className="text-foreground mb-2">
                      <strong>Direction:</strong> Usually ERP to Shopify (ERP is master)
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Key fields:</strong> SKU, title, description, price, cost, weight, images
                    </p>
                    <p className="text-foreground">
                      <strong>Challenges:</strong> Variant structure differences, image handling, HTML formatting
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Inventory</h3>
                    <p className="text-foreground mb-2">
                      <strong>Direction:</strong> ERP to Shopify (real-time or scheduled)
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Key fields:</strong> SKU, quantity available, location
                    </p>
                    <p className="text-foreground">
                      <strong>Challenges:</strong> Multi-location sync, reserved stock handling, sync frequency
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Orders</h3>
                    <p className="text-foreground mb-2">
                      <strong>Direction:</strong> Shopify to ERP
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Key fields:</strong> Order number, line items, customer, shipping address, totals, taxes
                    </p>
                    <p className="text-foreground">
                      <strong>Challenges:</strong> Discount handling, gift cards, tax calculations, shipping methods
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Customers</h3>
                    <p className="text-foreground mb-2">
                      <strong>Direction:</strong> Bidirectional or Shopify to ERP
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Key fields:</strong> Email, name, addresses, phone, marketing consent
                    </p>
                    <p className="text-foreground">
                      <strong>Challenges:</strong> Duplicate detection, address formatting, GDPR compliance
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Mapping Decisions to Make
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Which system is master?</strong> For each data type, decide which system holds the authoritative record.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>How to handle conflicts?</strong> What happens when data differs between systems?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>What triggers sync?</strong> Real-time webhooks, scheduled batch jobs, or manual triggers?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>How to match records?</strong> By SKU, email, order number, or another identifier?</span>
                  </li>
                </ul>
              </section>

              {/* Popular ERP Systems */}
              <section id="popular-erp-systems" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Popular ERP Systems
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Here is an overview of Shopify integration options for the most common
                  ERP systems we encounter:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">NetSuite</h3>
                    <p className="text-foreground mb-3">
                      Oracle's cloud ERP with robust ecommerce capabilities. One of the
                      most common ERPs we integrate with Shopify.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Integration options:</strong> Celigo connector, custom SuiteScript integration, middleware platforms
                    </p>
                    <p className="text-foreground">
                      <strong>Typical timeline:</strong> 4 to 8 weeks for standard implementation
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">SAP Business One</h3>
                    <p className="text-foreground mb-3">
                      Popular mid-market ERP from SAP with strong manufacturing and
                      distribution features.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Integration options:</strong> APPSeCONNECT, custom B1if integration, middleware platforms
                    </p>
                    <p className="text-foreground">
                      <strong>Typical timeline:</strong> 6 to 10 weeks depending on complexity
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Microsoft Dynamics 365</h3>
                    <p className="text-foreground mb-3">
                      Microsoft's cloud ERP suite, including Business Central and
                      Finance and Operations.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Integration options:</strong> Shopify connector for Business Central, Power Automate, custom API
                    </p>
                    <p className="text-foreground">
                      <strong>Typical timeline:</strong> 4 to 8 weeks for Business Central, longer for F&O
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Sage</h3>
                    <p className="text-foreground mb-3">
                      Various Sage products from Sage 50 to Sage Intacct, widely used
                      in the UK market.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Integration options:</strong> Varies by Sage product, Patchworks connector, custom development
                    </p>
                    <p className="text-foreground">
                      <strong>Typical timeline:</strong> 4 to 12 weeks depending on Sage version
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Brightpearl</h3>
                    <p className="text-foreground mb-3">
                      Purpose-built retail ERP with native Shopify integration. Often
                      the easiest integration path.
                    </p>
                    <p className="text-foreground mb-2">
                      <strong>Integration options:</strong> Native connector built into Brightpearl
                    </p>
                    <p className="text-foreground">
                      <strong>Typical timeline:</strong> 2 to 4 weeks for standard setup
                    </p>
                  </div>
                </div>
              </section>

              {/* Implementation Process */}
              <section id="implementation-process" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Implementation Process
                </h2>
                <p className="text-lg text-foreground mb-6">
                  A successful ERP integration follows a structured process. Rushing
                  through these steps leads to problems that are expensive to fix later.
                </p>

                <ol className="space-y-6 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground-dark mb-2">Discovery and Requirements</h3>
                      <p className="text-foreground mb-2">
                        Document your current processes, data flows, and integration
                        requirements. Identify pain points and success criteria.
                      </p>
                      <p className="text-foreground">
                        <strong>Key outputs:</strong> Requirements document, process maps, stakeholder sign-off
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground-dark mb-2">Solution Design</h3>
                      <p className="text-foreground mb-2">
                        Design the integration architecture, data mappings, and workflow
                        logic. Document how each scenario will be handled.
                      </p>
                      <p className="text-foreground">
                        <strong>Key outputs:</strong> Technical design document, data mapping spreadsheet
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground-dark mb-2">Development and Configuration</h3>
                      <p className="text-foreground mb-2">
                        Build or configure the integration based on the design. This
                        includes setting up connections, mappings, and custom logic.
                      </p>
                      <p className="text-foreground">
                        <strong>Key outputs:</strong> Working integration in development environment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground-dark mb-2">Testing</h3>
                      <p className="text-foreground mb-2">
                        Thoroughly test all integration scenarios. This includes happy
                        paths, edge cases, error handling, and volume testing.
                      </p>
                      <p className="text-foreground">
                        <strong>Key outputs:</strong> Test results, issue log, performance benchmarks
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">5</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground-dark mb-2">Data Migration</h3>
                      <p className="text-foreground mb-2">
                        Load historical data if needed. This might include past orders,
                        customer records, or product data.
                      </p>
                      <p className="text-foreground">
                        <strong>Key outputs:</strong> Migrated data, validation report
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">6</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground-dark mb-2">Go-Live and Hypercare</h3>
                      <p className="text-foreground mb-2">
                        Switch to the live integration with close monitoring. The first
                        few weeks require rapid response to any issues.
                      </p>
                      <p className="text-foreground">
                        <strong>Key outputs:</strong> Production deployment, monitoring dashboards
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Plan your go-live for a low-volume period. Avoid launching before
                    Black Friday or during other peak trading periods. Give yourself
                    time to address issues before volume increases.
                  </p>
                </div>
              </section>

              {/* Common Challenges */}
              <section id="common-challenges" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Challenges
                </h2>
                <p className="text-lg text-foreground mb-6">
                  ERP integrations are complex projects. Here are the most common
                  challenges and how to address them:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">SKU Mismatches</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> Products in Shopify do not match products in the ERP.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Establish a single SKU strategy. Either use ERP SKUs
                      everywhere, or maintain a mapping table. Never allow free-form SKUs.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Inventory Sync Delays</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> Inventory updates take too long, leading to overselling.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Implement near real-time sync for high-velocity items.
                      Use safety stock buffers. Set up alerts for low inventory items.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Order Failures</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> Orders fail to sync to the ERP, requiring manual intervention.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Build robust error handling with retry logic. Create
                      alerts for failed orders. Maintain a queue of orders needing review.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Tax Calculation Differences</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> Tax amounts in Shopify do not match ERP calculations.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Decide which system is authoritative for tax. Either
                      sync Shopify amounts or recalculate in ERP. Never mix approaches.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">API Rate Limits</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> Integration hits Shopify API limits during peak periods.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Implement request queuing and backoff strategies. Use
                      bulk operations where available. Consider Shopify Plus for higher limits.
                    </p>
                  </div>
                </div>
              </section>

              {/* Maintenance and Monitoring */}
              <section id="maintenance-and-monitoring" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Maintenance and Monitoring
                </h2>
                <p className="text-lg text-foreground mb-6">
                  An integration is not a set-and-forget project. Ongoing maintenance
                  and monitoring are essential for reliability.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Monitoring Essentials
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Sync status dashboard</strong>: Visual overview of what is syncing and what is failing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Error alerts</strong>: Immediate notification when orders fail to sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Inventory variance reports</strong>: Regular comparison of counts between systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Performance metrics</strong>: Sync times, API usage, queue depths</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Regular Maintenance Tasks
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Weekly:</strong> Review error logs, clear any stuck items, check sync status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Monthly:</strong> Run inventory reconciliation, review performance metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Quarterly:</strong> Test disaster recovery, review API changes, assess capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Annually:</strong> Full integration review, update documentation, assess improvements</span>
                  </li>
                </ol>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Ready to integrate your Shopify store with your ERP? Here is how to
                  move forward:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Document your requirements</strong>
                      <p className="text-foreground mt-1">List what data needs to sync, in which direction, and how often.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Evaluate your options</strong>
                      <p className="text-foreground mt-1">Research native connectors for your ERP. Talk to integration specialists.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Plan your timeline</strong>
                      <p className="text-foreground mt-1">Allow adequate time for testing. Avoid going live during peak season.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-connect-shopify-to-accounting-software"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Accounting Integration Guide</h4>
                      <p className="text-sm text-foreground">Connect to Xero, QuickBooks, and more</p>
                    </Link>
                    <Link
                      href="/shopify-integrations"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Integration Services</h4>
                      <p className="text-sm text-foreground">Professional integration development</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need ERP Integration Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We have integrated Shopify with NetSuite, SAP, Dynamics, and more. Get
            expert help with your integration project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Discuss Your Integration
            </Button>
            <Button href="/shopify-integrations" variant="outline-light" size="lg" icon={false}>
              Our Integration Services
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
