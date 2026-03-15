import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose Shopify Apps: What to Look For",
  description:
    "Learn how to evaluate and choose the right Shopify apps for your store. Covers review analysis, performance impact, security, pricing, and essential app categories.",
  alternates: {
    canonical: "/guides/how-to-choose-shopify-apps",
  },
  openGraph: {
    title: "How to Choose Shopify Apps: What to Look For",
    description:
      "Learn how to evaluate and choose the right Shopify apps for your store.",
    url: "/guides/how-to-choose-shopify-apps",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-app-selection-matters", title: "Why App Selection Matters", level: 2 },
  { id: "evaluating-app-quality", title: "Evaluating App Quality", level: 2 },
  { id: "performance-considerations", title: "Performance Considerations", level: 2 },
  { id: "security-and-permissions", title: "Security and Permissions", level: 2 },
  { id: "pricing-models", title: "Pricing Models", level: 2 },
  { id: "essential-app-categories", title: "Essential App Categories", level: 2 },
  { id: "when-to-avoid-apps", title: "When to Avoid Apps", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose Shopify Apps",
  description:
    "Learn how to evaluate and choose the right Shopify apps for your store.",
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
    "@id": `${siteConfig.url}/guides/how-to-choose-shopify-apps`,
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
      name: "How to Choose Shopify Apps",
      item: `${siteConfig.url}/guides/how-to-choose-shopify-apps`,
    },
  ],
};

export default function ChooseAppsGuidePage() {
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
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Choose Shopify Apps
            </h1>

            <p className="text-xl text-foreground mb-8">
              The Shopify App Store has over 8,000 apps. Choosing the wrong ones can
              slow your store, create security risks, and waste money. This guide
              teaches you how to evaluate apps properly.
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
              {/* Why App Selection Matters */}
              <section id="why-app-selection-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why App Selection Matters
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Apps extend Shopify's functionality in powerful ways. From email
                  marketing to inventory management, the right apps can transform your
                  store's capabilities. However, each app you install comes with trade-offs
                  that many merchants overlook.
                </p>
                <p className="text-lg text-foreground mb-6">
                  We regularly audit stores with 30 or more apps installed. Most of these
                  stores suffer from slow load times, conflicting functionality, and
                  monthly costs that exceed what they would pay for custom development.
                  The solution is not to avoid apps entirely, but to choose them wisely.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The Hidden Costs of Apps</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Performance impact</strong>: Each app adds JavaScript, CSS, and server requests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Monthly fees</strong>: 15 apps at £15/month = £2,700 per year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Data fragmentation</strong>: Customer data split across multiple platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Maintenance burden</strong>: More apps means more updates and potential conflicts</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The goal is to install only the apps that provide clear value and to
                  choose the best option in each category. Quality over quantity applies
                  strongly to Shopify apps.
                </p>
              </section>

              {/* Evaluating App Quality */}
              <section id="evaluating-app-quality" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Evaluating App Quality
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before installing any app, run through this evaluation checklist. It
                  takes five minutes and can save you hours of troubleshooting later.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Review Analysis
                </h3>
                <p className="text-lg text-foreground mb-4">
                  App store ratings can be misleading. Here is how to read them properly:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Look at recent reviews</strong>: An app can have 5 stars from 2019 but recent 1-star reviews. Sort by newest first.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Read the negative reviews</strong>: These reveal common problems. If multiple people mention the same issue, it is likely real.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Check review volume</strong>: An app with 500 reviews at 4.5 stars is more reliable than 10 reviews at 5 stars.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Look for detailed reviews</strong>: Generic praise ("Great app!") is less useful than specific feedback about features.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Developer Reputation
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Check Their Portfolio</h3>
                    <p className="text-foreground">
                      Click the developer name to see their other apps. Established developers
                      with multiple successful apps are generally more reliable than newcomers
                      with a single product.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Support Response Time</h3>
                    <p className="text-foreground">
                      Look at reviews mentioning support. How quickly does the developer
                      respond? Do they fix issues or make excuses? Good support is essential
                      when things go wrong.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Update Frequency</h3>
                    <p className="text-foreground">
                      Check when the app was last updated. Apps that have not been updated
                      in over a year may have compatibility issues or be abandoned.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Search for the app name plus "problems" or "issues" in Google. You will
                    find forum discussions and Reddit threads that reveal real-world
                    experiences the app store reviews might miss.
                  </p>
                </div>
              </section>

              {/* Performance Considerations */}
              <section id="performance-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Performance Considerations
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Every app you install affects your store's speed. Some apps are well
                  optimised and add minimal overhead. Others can add seconds to your
                  load time. Here is how to assess performance impact.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Before You Install
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Run a baseline speed test</strong>
                      <p className="text-foreground mt-1">Use Google PageSpeed Insights on your homepage, a collection page, and a product page. Record the scores.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Check app documentation</strong>
                      <p className="text-foreground mt-1">Good developers publish information about their app's performance. Look for mentions of lazy loading, async scripts, or performance optimisation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Search for performance reviews</strong>
                      <p className="text-foreground mt-1">Look for reviews that mention speed or performance. Slow apps often get called out.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  After Installation
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Run the same speed tests again</strong>
                      <p className="text-foreground mt-1">Compare to your baseline. If the score drops significantly, investigate.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Check the network waterfall</strong>
                      <p className="text-foreground mt-1">In browser developer tools, look at the Network tab. Does the app load large files or make many requests?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Test on mobile</strong>
                      <p className="text-foreground mt-1">Mobile performance is often worse than desktop. Test on an actual phone if possible.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">High-Impact App Categories</h4>
                  <p className="text-foreground mb-4">
                    These app types tend to have the biggest performance impact:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span>Live chat widgets (load large JavaScript bundles)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span>Review apps (often load on every page, even without reviews)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span>Pop-up and email capture apps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">!</span>
                      <span>Currency converters and translation apps</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Security and Permissions */}
              <section id="security-and-permissions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Security and Permissions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  When you install a Shopify app, you grant it access to your store data.
                  Some apps request more permissions than they need. Understanding what
                  you are granting access to is essential for security.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Understanding Permission Scopes
                </h3>
                <p className="text-lg text-foreground mb-4">
                  During installation, Shopify shows you what the app can access. Pay
                  attention to these warnings:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Low Risk Permissions</h3>
                    <ul className="space-y-1 text-foreground">
                      <li>• Read products and collections</li>
                      <li>• Read store content (pages, blogs)</li>
                      <li>• Read theme data</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Medium Risk Permissions</h3>
                    <ul className="space-y-1 text-foreground">
                      <li>• Modify products and collections</li>
                      <li>• Read customer data</li>
                      <li>• Modify theme files</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">High Risk Permissions</h3>
                    <ul className="space-y-1 text-foreground">
                      <li>• Modify customer data</li>
                      <li>• Access payment information</li>
                      <li>• Modify orders</li>
                      <li>• Access staff information</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Red Flags to Watch For
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Excessive permissions</strong>: A simple countdown timer should not need customer data access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Unknown developers</strong>: New apps from unverified developers with broad permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>No privacy policy</strong>: Legitimate apps have clear data handling policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Requests for admin credentials</strong>: Apps should never need your login details</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Regularly audit your installed apps in Settings, then Apps and sales
                    channels. Remove any you no longer use. Each installed app maintains
                    access to your store data until uninstalled.
                  </p>
                </div>
              </section>

              {/* Pricing Models */}
              <section id="pricing-models" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Pricing Models
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Understanding how apps charge helps you budget accurately and avoid
                  unexpected costs. Here are the common pricing models:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground-dark">Free Apps</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Best for testing</span>
                    </div>
                    <p className="text-foreground">
                      Truly free apps are rare. Most have limitations that push you to
                      upgrade. Good for basic needs but watch for feature restrictions.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground-dark">Flat Monthly Fee</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Predictable</span>
                    </div>
                    <p className="text-foreground">
                      Fixed monthly cost regardless of usage or revenue. Good for budgeting.
                      Check what is included in each tier before committing.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground-dark">Usage-Based Pricing</h3>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Variable</span>
                    </div>
                    <p className="text-foreground">
                      Charges based on orders processed, emails sent, or API calls. Can be
                      economical at low volume but expensive as you scale. Calculate your
                      expected costs before committing.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground-dark">Revenue Share</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Scales with you</span>
                    </div>
                    <p className="text-foreground">
                      Takes a percentage of sales or revenue generated. Common with upsell
                      and marketing apps. Calculate the long-term cost as your revenue grows.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Calculating True Cost
                </h3>
                <p className="text-lg text-foreground mb-4">
                  When evaluating pricing, consider the full picture:
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Annual cost vs monthly (most apps offer discounts for annual billing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Cost at your projected scale in 12 months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Hidden costs like transaction fees or premium support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Migration cost if you later switch to a different solution</span>
                  </li>
                </ul>
              </section>

              {/* Essential App Categories */}
              <section id="essential-app-categories" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Essential App Categories
                </h2>
                <p className="text-lg text-foreground mb-6">
                  While every store is different, these categories represent where apps
                  typically add the most value. You do not need one from each category,
                  but these are worth considering based on your business needs.
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Email Marketing</h3>
                    <p className="text-foreground mb-3">
                      The highest ROI marketing channel for most ecommerce stores. Look
                      for: abandoned cart flows, segmentation, templates, SMS integration.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Popular options:</strong> Klaviyo, Omnisend, Mailchimp
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Reviews and Social Proof</h3>
                    <p className="text-foreground mb-3">
                      Product reviews build trust and improve conversion rates. Look for:
                      photo reviews, review requests, SEO integration, import tools.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Popular options:</strong> Judge.me, Loox, Yotpo
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">SEO</h3>
                    <p className="text-foreground mb-3">
                      Help search engines find and rank your products. Look for: meta tag
                      management, structured data, broken link detection, sitemap control.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Popular options:</strong> Smart SEO, SEO Manager, Plug in SEO
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Shipping and Fulfilment</h3>
                    <p className="text-foreground mb-3">
                      Streamline order processing and improve delivery experience. Look
                      for: rate comparison, label printing, tracking pages, returns.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Popular options:</strong> ShipStation, Shippo, AfterShip
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Upselling and Cross-selling</h3>
                    <p className="text-foreground mb-3">
                      Increase average order value with product recommendations. Look for:
                      in-cart upsells, frequently bought together, post-purchase offers.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Popular options:</strong> ReConvert, Bold Upsell, Zipify OCU
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Analytics and Reporting</h3>
                    <p className="text-foreground mb-3">
                      Go beyond Shopify's built-in analytics. Look for: profit tracking,
                      cohort analysis, customer lifetime value, marketing attribution.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Popular options:</strong> Lifetimely, Triple Whale, BeProfit
                    </p>
                  </div>
                </div>
              </section>

              {/* When to Avoid Apps */}
              <section id="when-to-avoid-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  When to Avoid Apps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Sometimes the best app is no app at all. Here are situations where
                  custom development or alternative solutions make more sense:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">When Built-in Features Suffice</h3>
                    <p className="text-foreground">
                      Shopify adds new features regularly. Check if what you need is already
                      built into your plan or theme before installing an app. Many stores
                      have apps duplicating native functionality.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">When Monthly Costs Exceed Custom Development</h3>
                    <p className="text-foreground">
                      A £50/month app costs £600 per year. If a custom solution would cost
                      £500 one-time and provide exactly what you need, the maths favour
                      custom development.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">When You Only Need 10% of Features</h3>
                    <p className="text-foreground">
                      Installing a comprehensive app when you only need one feature adds
                      unnecessary bloat. A simple custom snippet might do the job better.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">When Apps Create Conflicts</h3>
                    <p className="text-foreground">
                      Some app combinations cause problems. Multiple apps modifying the
                      same parts of your theme, for example, can break functionality.
                      Sometimes consolidating to fewer, more capable apps is the answer.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Before installing a new app, ask: "Can I achieve this with theme
                    customisation, Shopify Flow, or a simple code snippet?" Often the
                    answer is yes, and you avoid adding another dependency.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Ready to make better app decisions? Here is your action plan:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Audit your current apps</strong>
                      <p className="text-foreground mt-1">List all installed apps. For each, note: what it does, monthly cost, and when you last used it.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Identify redundancies</strong>
                      <p className="text-foreground mt-1">Look for overlapping functionality. Could one app replace two? Are any unused?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Test removing apps</strong>
                      <p className="text-foreground mt-1">Uninstall one app at a time and monitor for issues. Run speed tests after each removal.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Create an app policy</strong>
                      <p className="text-foreground mt-1">Before installing future apps, require that they pass your evaluation checklist.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-remove-unused-shopify-app-code"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Remove Unused App Code</h4>
                      <p className="text-sm text-foreground">Clean up leftover app code</p>
                    </Link>
                    <Link
                      href="/guides/how-to-optimise-your-shopify-store-for-speed"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Speed Optimisation Guide</h4>
                      <p className="text-sm text-foreground">Make your store faster</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Your App Stack?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We audit stores daily and know which apps perform best. Get expert
            recommendations for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Store Audit
            </Button>
            <Button href="/shopify-store-audit" variant="outline-light" size="lg" icon={false}>
              Our Audit Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
