import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Read Shopify Analytics and Reports",
  description:
    "Complete guide to understanding Shopify Analytics. Learn how to interpret your store data, identify trends, and make data-driven decisions to grow your business.",
  alternates: {
    canonical: "/guides/how-to-read-shopify-analytics",
  },
  openGraph: {
    title: "How to Read Shopify Analytics and Reports",
    description: "Complete guide to understanding Shopify Analytics.",
    url: "/guides/how-to-read-shopify-analytics",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "analytics-overview", title: "Analytics Overview", level: 2 },
  { id: "key-metrics", title: "Key Metrics Explained", level: 2 },
  { id: "dashboard-reports", title: "Dashboard Reports", level: 2 },
  { id: "traffic-analysis", title: "Traffic Analysis", level: 2 },
  { id: "sales-reports", title: "Sales Reports", level: 2 },
  { id: "customer-insights", title: "Customer Insights", level: 2 },
  { id: "taking-action", title: "Taking Action on Data", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Read Shopify Analytics",
  description: "Complete guide to understanding Shopify Analytics.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-read-shopify-analytics` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Read Shopify Analytics", item: `${siteConfig.url}/guides/how-to-read-shopify-analytics` },
  ],
};

export default function ShopifyAnalyticsGuidePage() {
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
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Read Shopify Analytics
            </h1>

            <p className="text-xl text-foreground mb-8">
              Your Shopify analytics hold the key to understanding your business performance. This guide helps you interpret the data and turn insights into action.
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

              <section id="analytics-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Analytics Overview</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Analytics provides built-in reporting for every store. The depth of data available depends on your plan, with higher plans offering more detailed reports and longer data retention.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Access your analytics by clicking &quot;Analytics&quot; in the left sidebar of your Shopify admin. The overview dashboard shows your most important metrics at a glance, with detailed reports available in the &quot;Reports&quot; section.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Analytics by Plan</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Basic Shopify:</strong> Overview dashboard, finance reports, product analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shopify:</strong> All Basic reports plus professional reports (customers, orders, sales)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Advanced:</strong> All reports plus custom report builder and advanced filters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Plus:</strong> All Advanced features plus unlimited data history and API access</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="key-metrics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Key Metrics Explained</h2>
                <p className="text-lg text-foreground mb-4">
                  Understanding what each metric means is essential for making informed decisions. Here are the most important metrics you&apos;ll encounter.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Total Sales</h3>
                    <p className="text-foreground">The total value of orders placed, including taxes and shipping but before refunds. This is your top-line revenue figure.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Net Sales</h3>
                    <p className="text-foreground">Total sales minus discounts, returns, and refunds. This better represents your actual revenue.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Online Store Sessions</h3>
                    <p className="text-foreground">The number of visits to your store. A session ends after 30 minutes of inactivity or at midnight.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Conversion Rate</h3>
                    <p className="text-foreground">The percentage of sessions that resulted in an order. Calculated as (Orders / Sessions) x 100. Industry average is 1-3%.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Average Order Value (AOV)</h3>
                    <p className="text-foreground">The average amount spent per order. Calculated as Total Sales / Number of Orders. Higher AOV means more revenue per customer.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Returning Customer Rate</h3>
                    <p className="text-foreground">The percentage of orders from repeat customers. Higher rates indicate customer loyalty and satisfaction.</p>
                  </div>
                </div>
              </section>

              <section id="dashboard-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Dashboard Reports</h2>
                <p className="text-lg text-foreground mb-4">
                  The analytics dashboard provides a quick snapshot of your store&apos;s performance. Here&apos;s how to read each section.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Date Comparison</h3>
                <p className="text-lg text-foreground mb-4">
                  Always compare your metrics to a previous period. The percentage change shows whether you&apos;re improving or declining. Compare to:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Previous period:</strong> Last 7 days vs the 7 days before that</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Previous year:</strong> Same period last year (accounts for seasonality)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Live View</h3>
                <p className="text-lg text-foreground mb-4">
                  The live view shows real-time activity on your store: current visitors, their locations, and recent orders. Useful during promotions or high-traffic events.
                </p>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Export Your Data</h4>
                  <p className="text-foreground">
                    Click &quot;Export&quot; on any report to download a CSV file. This allows you to analyse data in spreadsheets, create custom visualisations, or share with your team.
                  </p>
                </div>
              </section>

              <section id="traffic-analysis" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Traffic Analysis</h2>
                <p className="text-lg text-foreground mb-4">
                  Understanding where your visitors come from helps you focus marketing efforts on the most effective channels.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Traffic Sources</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Direct:</strong> Visitors who typed your URL directly or used a bookmark</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Search:</strong> Organic traffic from search engines (Google, Bing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Social:</strong> Traffic from social media platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Email:</strong> Visitors from email marketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Referral:</strong> Traffic from other websites linking to you</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Acquisition Reports</h3>
                <p className="text-lg text-foreground mb-4">
                  Go to Analytics → Reports → Acquisition to see detailed breakdowns. Look at not just sessions, but conversion rate per channel. A channel with fewer visitors but higher conversion may be more valuable.
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">UTM Tracking</h4>
                  <p className="text-foreground">
                    Use UTM parameters on your marketing links to see exactly which campaigns drive traffic. Shopify automatically picks up UTM tags and shows them in acquisition reports.
                  </p>
                </div>
              </section>

              <section id="sales-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Sales Reports</h2>
                <p className="text-lg text-foreground mb-4">
                  Sales reports help you understand what&apos;s selling, when, and to whom.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Sales by Product</h3>
                <p className="text-lg text-foreground mb-4">
                  See which products generate the most revenue and units sold. Look for:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Top sellers to ensure stock availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Slow movers that might need promotion or discontinuation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Products with high views but low sales (potential conversion issues)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Sales by Time</h3>
                <p className="text-lg text-foreground mb-4">
                  Identify patterns in when customers buy. This informs when to send emails, run ads, or schedule promotions.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Sales by Location</h3>
                <p className="text-lg text-foreground mb-4">
                  See where your customers are located. This helps with:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Ad targeting by geography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Shipping carrier selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>International expansion opportunities</span>
                  </li>
                </ul>
              </section>

              <section id="customer-insights" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Insights</h2>
                <p className="text-lg text-foreground mb-4">
                  Customer reports reveal who your buyers are and how they behave over time.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Customer Cohorts</h3>
                <p className="text-lg text-foreground mb-4">
                  Cohort analysis groups customers by when they first purchased and tracks their behaviour over time. This shows customer retention and lifetime value trends.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">First-Time vs Returning</h3>
                <p className="text-lg text-foreground mb-4">
                  Track the balance between new customer acquisition and repeat purchases. A healthy business typically sees 20-40% of orders from returning customers.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Too few returning customers</h3>
                    <p className="text-foreground">May indicate product quality issues, poor post-purchase experience, or lack of retention marketing.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Too few new customers</h3>
                    <p className="text-foreground">Suggests acquisition efforts need improvement or market saturation in current channels.</p>
                  </div>
                </div>
              </section>

              <section id="taking-action" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Taking Action on Data</h2>
                <p className="text-lg text-foreground mb-4">
                  Data is only valuable if it leads to action. Here&apos;s how to turn insights into improvements.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Weekly Review Routine</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Check top-level metrics</strong>
                      <p className="text-foreground mt-1">Compare sales, sessions, and conversion rate to the previous week and same week last year.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Identify anomalies</strong>
                      <p className="text-foreground mt-1">Any significant increases or decreases? Investigate the cause.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Review traffic sources</strong>
                      <p className="text-foreground mt-1">Which channels performed best? Where should you increase investment?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Check inventory levels</strong>
                      <p className="text-foreground mt-1">Are top sellers in stock? Any products close to selling out?</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-track-shopify-conversions" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Conversion Tracking Guide →</h4>
                      <p className="text-sm text-foreground">Set up accurate tracking</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-reports" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify Reports →</h4>
                      <p className="text-sm text-foreground">Create custom dashboards and reports</p>
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
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up custom reports, create dashboards, and help you interpret your data to make better business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
