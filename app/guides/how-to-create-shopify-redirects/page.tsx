import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Shopify Redirects",
  description:
    "Learn how to set up URL redirects in Shopify to preserve SEO value, fix broken links, and guide customers to the right pages. Complete guide with examples.",
  alternates: {
    canonical: "/guides/how-to-create-shopify-redirects",
  },
  openGraph: {
    title: "How to Create Shopify Redirects",
    description:
      "Learn how to set up URL redirects in Shopify to preserve SEO value and fix broken links.",
    url: "/guides/how-to-create-shopify-redirects",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-redirects-matter", title: "Why Redirects Matter", level: 2 },
  { id: "types-of-redirects", title: "Types of Redirects", level: 2 },
  { id: "creating-redirects-in-shopify", title: "Creating Redirects in Shopify", level: 2 },
  { id: "bulk-redirects", title: "Bulk Redirects", level: 2 },
  { id: "common-redirect-scenarios", title: "Common Redirect Scenarios", level: 2 },
  { id: "redirect-best-practices", title: "Redirect Best Practices", level: 2 },
  { id: "troubleshooting-redirects", title: "Troubleshooting Redirects", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Shopify Redirects",
  description:
    "Learn how to set up URL redirects in Shopify to preserve SEO value and fix broken links.",
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
    "@id": `${siteConfig.url}/guides/how-to-create-shopify-redirects`,
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
      name: "How to Create Shopify Redirects",
      item: `${siteConfig.url}/guides/how-to-create-shopify-redirects`,
    },
  ],
};

export default function ShopifyRedirectsGuidePage() {
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
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Shopify Redirects
            </h1>

            <p className="text-xl text-foreground mb-8">
              URL redirects are essential for maintaining SEO value and providing a smooth customer
              experience. This guide shows you how to set up and manage redirects in Shopify.
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
              {/* Why Redirects Matter */}
              <section id="why-redirects-matter" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why Redirects Matter
                </h2>
                <p className="text-lg text-foreground mb-4">
                  When you delete a product, change a URL, or migrate to Shopify from another platform,
                  the old URLs still exist in Google's index, in customer bookmarks, and in links from
                  other websites. Without proper redirects, these become broken links that hurt your
                  SEO and frustrate customers.
                </p>
                <p className="text-lg text-foreground mb-6">
                  A redirect tells browsers and search engines that a page has moved to a new location.
                  This preserves the SEO value (link equity) from the old URL and sends visitors to the
                  correct page instead of an error.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The Cost of Broken Links</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Lost SEO value</strong> from backlinks pointing to dead pages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Poor user experience</strong> when customers hit 404 errors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Lost sales</strong> from customers who leave instead of searching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Crawl budget waste</strong> as Google discovers more broken links</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  Properly implemented redirects solve all of these problems. They ensure that every
                  URL pointing to your store leads somewhere useful, whether it's from Google,
                  social media, email campaigns, or external websites.
                </p>
              </section>

              {/* Types of Redirects */}
              <section id="types-of-redirects" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Types of Redirects
                </h2>
                <p className="text-lg text-foreground mb-4">
                  There are several types of redirects, but two are most relevant for Shopify stores.
                  Understanding the difference is crucial for SEO.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Recommended</span>
                      <h3 className="font-semibold text-foreground-dark">301 Redirect (Permanent)</h3>
                    </div>
                    <p className="text-foreground mb-2">
                      A 301 redirect tells search engines that a page has permanently moved to a new location.
                      This passes approximately 90-99% of the link equity to the new URL.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Use for:</strong> Deleted products, changed URLs, platform migrations, restructuring collections
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Temporary</span>
                      <h3 className="font-semibold text-foreground-dark">302 Redirect (Temporary)</h3>
                    </div>
                    <p className="text-foreground mb-2">
                      A 302 redirect tells search engines that a page has temporarily moved. The original URL
                      retains its SEO value, and Google keeps it in the index.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Use for:</strong> Temporary sales pages, A/B testing, maintenance redirects
                    </p>
                  </div>
                </div>

                <p className="text-lg text-foreground mb-4">
                  Shopify creates 301 redirects by default, which is correct for most situations. If you
                  need a 302 redirect, you'll need to implement it at the theme level using Liquid code.
                </p>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    When in doubt, use a 301 redirect. The vast majority of redirect needs in ecommerce
                    are permanent. Using a 302 when you should use a 301 means search engines won't pass
                    the full SEO value to your new URL.
                  </p>
                </div>
              </section>

              {/* Creating Redirects in Shopify */}
              <section id="creating-redirects-in-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Creating Redirects in Shopify
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify makes it straightforward to create redirects through the admin panel. Here's
                  the step-by-step process for creating individual redirects.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Step-by-Step Instructions
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Navigate to URL Redirects</strong>
                      <p className="text-foreground mt-1">In your Shopify admin, go to Online Store → Navigation → View URL redirects (at the top of the page).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Click "Create URL redirect"</strong>
                      <p className="text-foreground mt-1">This opens the redirect creation form where you'll enter the old and new URLs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Enter the "Redirect from" path</strong>
                      <p className="text-foreground mt-1">Enter only the path, not the full URL. For example, use <code className="bg-gray-100 px-2 py-1 rounded">/products/old-product</code> not <code className="bg-gray-100 px-2 py-1 rounded">https://yourstore.com/products/old-product</code>.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Enter the "Redirect to" path</strong>
                      <p className="text-foreground mt-1">Enter the destination path. This can be a product, collection, page, or even an external URL.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Save the redirect</strong>
                      <p className="text-foreground mt-1">Click "Save redirect". It takes effect immediately. Test it by visiting the old URL.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Important URL Format Rules
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Always start paths with a forward slash: <code className="bg-gray-100 px-2 py-1 rounded">/products/example</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Don't include your domain name in the paths</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Paths are case-sensitive, so <code className="bg-gray-100 px-2 py-1 rounded">/Products/Example</code> is different from <code className="bg-gray-100 px-2 py-1 rounded">/products/example</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>You can redirect to external URLs by using the full URL as the destination</span>
                  </li>
                </ul>
              </section>

              {/* Bulk Redirects */}
              <section id="bulk-redirects" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Bulk Redirects
                </h2>
                <p className="text-lg text-foreground mb-4">
                  When migrating to Shopify or restructuring your store, you may need to create hundreds
                  or even thousands of redirects. Doing this one at a time would be incredibly tedious.
                  Fortunately, Shopify supports bulk redirect imports via CSV.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating Your CSV File
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Your CSV file needs two columns: "Redirect from" and "Redirect to". Here's an example:
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`Redirect from,Redirect to
/old-product-url,/products/new-product-url
/category/summer,/collections/summer-collection
/about-us.html,/pages/about
/articles/old-post,/blogs/news/new-post`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Importing the CSV
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to URL Redirects</strong>
                      <p className="text-foreground mt-1">Online Store → Navigation → View URL redirects</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Click "Import"</strong>
                      <p className="text-foreground mt-1">Select your CSV file from your computer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Review and confirm</strong>
                      <p className="text-foreground mt-1">Shopify will show you a preview. Check for any errors before confirming the import.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Before a migration, crawl your old site with a tool like Screaming Frog to get a
                    complete list of URLs. This ensures you don't miss any pages that need redirects.
                    Map each old URL to its new equivalent before launching.
                  </p>
                </div>
              </section>

              {/* Common Redirect Scenarios */}
              <section id="common-redirect-scenarios" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Redirect Scenarios
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Here are the most common situations where you'll need to create redirects, along with
                  the recommended approach for each.
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Deleted Products</h3>
                    <p className="text-foreground mb-4">
                      When you delete a product, redirect its URL to a similar product or the relevant
                      collection. This prevents customers from landing on a 404 page.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-mono text-foreground">
                        <span className="text-red-500">/products/summer-dress-blue</span> → <span className="text-green-600">/collections/summer-dresses</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Platform Migration</h3>
                    <p className="text-foreground mb-4">
                      When migrating from another platform, URL structures often change. Map every old URL
                      to its new Shopify equivalent to preserve SEO rankings.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="text-sm font-mono text-foreground">
                        <span className="text-red-500">/product/SKU123</span> → <span className="text-green-600">/products/product-name</span>
                      </p>
                      <p className="text-sm font-mono text-foreground">
                        <span className="text-red-500">/category/clothing</span> → <span className="text-green-600">/collections/clothing</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Collection Restructuring</h3>
                    <p className="text-foreground mb-4">
                      When reorganising your collections, redirect old collection URLs to their new
                      locations to maintain any SEO value they've built.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-mono text-foreground">
                        <span className="text-red-500">/collections/mens-clothing</span> → <span className="text-green-600">/collections/men</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">Changing Product Handles</h3>
                    <p className="text-foreground mb-4">
                      If you change a product's URL handle for SEO purposes, Shopify automatically creates
                      a redirect from the old URL to the new one. No manual action needed.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Note:</strong> This only works when editing the handle within Shopify. If you delete and recreate a product, you'll need to create the redirect manually.
                    </p>
                  </div>
                </div>
              </section>

              {/* Redirect Best Practices */}
              <section id="redirect-best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Redirect Best Practices
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices to ensure your redirects work effectively and don't cause
                  SEO problems.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Do's
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Redirect to relevant pages:</strong> A redirect from a deleted blue dress should go to similar dresses, not your homepage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Create redirects before deleting:</strong> Set up the redirect first, then delete the old page.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Test your redirects:</strong> After creating redirects, verify they work by visiting the old URL.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Keep a redirect log:</strong> Document all redirects for future reference.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Include query parameters if needed:</strong> If your old URLs had parameters, include them in your redirects.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Don'ts
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Avoid redirect chains:</strong> A → B → C wastes crawl budget and slows down users. Redirect A directly to C.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Don't create redirect loops:</strong> A → B → A will cause errors and broken pages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Don't redirect everything to the homepage:</strong> This provides poor user experience and minimal SEO benefit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Don't keep unnecessary redirects forever:</strong> After a year or two, most old URLs have lost their value. Clean up periodically.</span>
                  </li>
                </ul>
              </section>

              {/* Troubleshooting Redirects */}
              <section id="troubleshooting-redirects" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Troubleshooting Redirects
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Sometimes redirects don't work as expected. Here are common issues and how to resolve them.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Redirect Not Working</h3>
                    <p className="text-foreground mb-2">
                      <strong>Cause:</strong> Usually a formatting issue with the URL paths.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Check that both paths start with a forward slash and don't include the domain. Clear your browser cache and try again.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Redirect Chain Detected</h3>
                    <p className="text-foreground mb-2">
                      <strong>Cause:</strong> The destination URL has its own redirect, creating A → B → C.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Update the original redirect to point directly to the final destination.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Too Many Redirects Error</h3>
                    <p className="text-foreground mb-2">
                      <strong>Cause:</strong> A redirect loop exists where URLs redirect in a circle.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Search your redirects for the affected URL and fix the loop. Use a redirect checker tool to trace the full chain.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Redirect Works in Browser but Google Shows Old URL</h3>
                    <p className="text-foreground mb-2">
                      <strong>Cause:</strong> Google hasn't recrawled the page yet.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Use Google Search Console to request indexing of the new URL. It can take days or weeks for Google to update its index.
                    </p>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  With your redirects in place, here's how to maintain them and continue improving your
                  store's SEO health.
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Monitor for 404 errors</strong>
                      <p className="text-foreground mt-1">Use Google Search Console's Coverage report to identify pages returning 404 errors that need redirects.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Audit redirect chains quarterly</strong>
                      <p className="text-foreground mt-1">Use a tool like Screaming Frog to identify redirect chains and consolidate them.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Clean up old redirects</strong>
                      <p className="text-foreground mt-1">After 1-2 years, assess whether old redirects are still receiving traffic. Remove those that aren't.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-structure-shopify-urls-for-seo"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">URL Structure Guide →</h4>
                      <p className="text-sm text-foreground">Best practices for Shopify URLs</p>
                    </Link>
                    <Link
                      href="/guides/how-to-optimise-shopify-product-pages-for-seo"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Product Pages for SEO →</h4>
                      <p className="text-sm text-foreground">Rank higher with better on-page SEO</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Redirects?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're migrating platforms or restructuring your store, our team can handle
            your redirect strategy to preserve your SEO rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/shopify-seo" variant="outline-light" size="lg" icon={false}>
              Our SEO Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
