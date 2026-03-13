import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Structure Shopify URLs for SEO",
  description:
    "Learn how to optimise your Shopify URL structure for better search rankings. Covers product URLs, collection URLs, handles, and URL best practices.",
  alternates: {
    canonical: "/guides/how-to-structure-shopify-urls-for-seo",
  },
  openGraph: {
    title: "How to Structure Shopify URLs for SEO",
    description:
      "Learn how to optimise your Shopify URL structure for better search rankings.",
    url: "/guides/how-to-structure-shopify-urls-for-seo",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-url-structure-matters", title: "Why URL Structure Matters", level: 2 },
  { id: "shopify-url-structure", title: "Shopify URL Structure", level: 2 },
  { id: "optimising-product-urls", title: "Optimising Product URLs", level: 2 },
  { id: "optimising-collection-urls", title: "Optimising Collection URLs", level: 2 },
  { id: "url-best-practices", title: "URL Best Practices", level: 2 },
  { id: "handling-url-changes", title: "Handling URL Changes", level: 2 },
  { id: "common-url-mistakes", title: "Common URL Mistakes", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Structure Shopify URLs for SEO",
  description:
    "Learn how to optimise your Shopify URL structure for better search rankings.",
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
    "@id": `${siteConfig.url}/guides/how-to-structure-shopify-urls-for-seo`,
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
      name: "How to Structure Shopify URLs for SEO",
      item: `${siteConfig.url}/guides/how-to-structure-shopify-urls-for-seo`,
    },
  ],
};

export default function URLStructureGuidePage() {
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
              How to Structure Shopify URLs for SEO
            </h1>

            <p className="text-xl text-foreground mb-8">
              Your URL structure affects how search engines understand and rank your pages. This
              guide shows you how to create SEO-friendly URLs in Shopify that both users and
              Google will love.
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
              {/* Why URL Structure Matters */}
              <section id="why-url-structure-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why URL Structure Matters
                </h2>
                <p className="text-lg text-foreground mb-4">
                  URLs are one of the first things search engines analyse when crawling your site.
                  A well-structured URL tells Google what a page is about before it even looks at
                  the content. It also helps users understand where they are on your site and
                  makes links more shareable.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Consider these two URLs for the same product:
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Poor URL:</strong></p>
                      <code className="bg-white px-3 py-2 rounded border border-gray-200 block text-sm text-red-600">
                        yourstore.com/products/prod-12847-v2
                      </code>
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Good URL:</strong></p>
                      <code className="bg-white px-3 py-2 rounded border border-gray-200 block text-sm text-green-600">
                        yourstore.com/products/blue-leather-crossbody-bag
                      </code>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-foreground mb-4">
                  The second URL immediately tells both Google and users what the page contains.
                  This clarity provides several benefits:
                </p>

                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Keyword relevance:</strong> URLs containing keywords can rank better for those terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>User trust:</strong> Clear URLs look more professional and trustworthy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Click-through rate:</strong> Descriptive URLs in search results encourage clicks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Link sharing:</strong> People are more likely to share URLs that clearly describe the content</span>
                  </li>
                </ul>
              </section>

              {/* Shopify URL Structure */}
              <section id="shopify-url-structure" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Shopify URL Structure
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify uses a fixed URL structure that you cannot change. Understanding this
                  structure helps you optimise within its constraints.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Default URL Patterns
                </h3>
                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`Products:     yourstore.com/products/[handle]
Collections:  yourstore.com/collections/[handle]
Pages:        yourstore.com/pages/[handle]
Blog Posts:   yourstore.com/blogs/[blog-name]/[post-handle]
Cart:         yourstore.com/cart
Checkout:     yourstore.com/checkouts/[token]`}
                  </pre>
                </div>

                <p className="text-lg text-foreground mb-4">
                  The <strong>handle</strong> is the part you can customise. It's automatically
                  generated from your product or collection title but can be edited manually.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  What You Cannot Change
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>You cannot remove /products/, /collections/, or /pages/ from URLs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>You cannot create nested product URLs like /collections/bags/blue-bag</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>You cannot change the URL structure without significant custom development</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    While Shopify's fixed structure limits flexibility, it actually creates consistency
                    that search engines appreciate. Focus your efforts on optimising the handle portion
                    of each URL, which is where you have full control.
                  </p>
                </div>
              </section>

              {/* Optimising Product URLs */}
              <section id="optimising-product-urls" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Optimising Product URLs
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Product URLs should be descriptive, keyword-rich, and easy to read. Here's how
                  to create effective product handles.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Product URL Best Practices
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Include the primary keyword</strong>
                      <p className="text-foreground mt-1">If someone would search "blue leather bag", use that as the base of your handle.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Keep it concise</strong>
                      <p className="text-foreground mt-1">3-5 words is ideal. Long URLs get truncated in search results and are harder to remember.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Use hyphens to separate words</strong>
                      <p className="text-foreground mt-1">Hyphens are the standard word separator in URLs. Never use underscores or spaces.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Use lowercase letters</strong>
                      <p className="text-foreground mt-1">URLs are case-sensitive. Stick to lowercase to avoid confusion and duplicate content.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Avoid special characters</strong>
                      <p className="text-foreground mt-1">Stick to letters, numbers, and hyphens. Remove apostrophes, commas, and other punctuation.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Product URL Examples</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/products/SKU-BLU-001-LTH-BAG</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/products/blue-italian-genuine-leather-crossbody-shoulder-bag-with-gold-hardware</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/products/blue-leather-crossbody-bag</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/products/italian-leather-tote-navy</code>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Editing Product Handles
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Products → select your product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll down to "Search engine listing"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click "Edit" to expand the section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Edit the "URL handle" field</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Save the product (Shopify creates a redirect automatically)</span>
                  </li>
                </ol>
              </section>

              {/* Optimising Collection URLs */}
              <section id="optimising-collection-urls" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Optimising Collection URLs
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Collection URLs often target broader, higher-volume keywords. Getting these right
                  can drive significant organic traffic.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Collection URL Strategy
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Match search intent:</strong> Use the exact phrase people search for (e.g., "womens-summer-dresses" not "dresses-summer-women")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Keep it simple:</strong> One or two words is often enough ("handbags", "mens-shirts")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Be consistent:</strong> Use the same structure across all collections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Think about hierarchy:</strong> "summer-dresses" works better than "dresses-for-summer"</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Collection URL Examples</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/collections/all-our-beautiful-leather-bags-and-accessories</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/collections/cat-001</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/collections/leather-bags</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">/collections/womens-dresses</code>
                    </div>
                  </div>
                </div>
              </section>

              {/* URL Best Practices */}
              <section id="url-best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  URL Best Practices
                </h2>
                <p className="text-lg text-foreground mb-4">
                  These guidelines apply to all URLs on your Shopify store, from products to
                  pages to blog posts.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Keep URLs Short</h3>
                    <p className="text-foreground">
                      Shorter URLs are easier to remember, share, and display in search results. Aim for
                      under 60 characters for the entire URL path. Remove unnecessary words like "the",
                      "and", "for" when they don't add meaning.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Use Real Words</h3>
                    <p className="text-foreground">
                      URLs should be readable by humans. Avoid product codes, random numbers, or
                      abbreviations that don't make sense. "blue-dress" is better than "blu-drs-01".
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Include Your Target Keyword</h3>
                    <p className="text-foreground">
                      Put your primary keyword in the URL. If you're targeting "organic cotton t-shirt",
                      that phrase should appear in the URL handle. This helps Google understand relevance.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Be Consistent</h3>
                    <p className="text-foreground">
                      Use the same format across your store. If you use "mens-shirts", don't switch to
                      "shirts-for-men" elsewhere. Consistency helps users and search engines understand
                      your site structure.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Avoid Stop Words When Possible</h3>
                    <p className="text-foreground">
                      Words like "a", "the", "and", "of" add length without SEO value. "blue-leather-bag"
                      works better than "the-blue-leather-bag". Exception: keep them if removing them
                      makes the URL unclear.
                    </p>
                  </div>
                </div>
              </section>

              {/* Handling URL Changes */}
              <section id="handling-url-changes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Handling URL Changes
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Sometimes you need to change a URL after a page is already live and indexed.
                  This requires careful handling to preserve SEO value.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  When Shopify Creates Redirects Automatically
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify automatically creates a 301 redirect when you change a product or
                  collection handle through the admin. This preserves the SEO value of the old
                  URL and ensures customers with bookmarks or old links still reach your page.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  When You Need Manual Redirects
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Migrating from another platform with different URL structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Deleting products but wanting to redirect to similar items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Restructuring your collections entirely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Fixing URLs that were set up incorrectly</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Before changing URLs on established products, check Google Search Console to see
                    how much organic traffic they receive. High-traffic pages need extra care. Always
                    verify redirects are working after making changes.
                  </p>
                </div>
              </section>

              {/* Common URL Mistakes */}
              <section id="common-url-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common URL Mistakes
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Avoid these common mistakes that can hurt your SEO and create confusion.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Using Auto-Generated Handles</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> Shopify creates handles from product titles, which can result in URLs like "/products/super-soft-premium-100-cotton-t-shirt-mens-blue-size-m".
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Always review and optimise auto-generated handles before publishing.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Including Variant Information</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> URLs like "/products/t-shirt-blue-medium" create issues when variants change or you add new colours.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Use generic product URLs and let variants be handled by Shopify's variant system.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Changing URLs Without Redirects</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> If you delete and recreate a product with a new handle, there's no automatic redirect.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Edit existing products rather than deleting them. If you must delete, create manual redirects.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Inconsistent Naming Conventions</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> Having "mens-t-shirts" alongside "womens-tshirts" and "kids_shirts" confuses users and search engines.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Create a naming convention and apply it consistently across all URLs.
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
                  With your URLs optimised, here's how to continue improving your store's SEO
                  structure.
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Audit your existing URLs</strong>
                      <p className="text-foreground mt-1">Review all product and collection handles. Create a list of URLs that need optimisation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Create a naming convention</strong>
                      <p className="text-foreground mt-1">Document your URL structure rules so new products and collections follow the same pattern.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Check for redirect chains</strong>
                      <p className="text-foreground mt-1">If you've changed URLs multiple times, you may have chains (A→B→C). Consolidate them.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-create-shopify-redirects"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Redirects Guide →</h4>
                      <p className="text-sm text-foreground">Master Shopify redirects</p>
                    </Link>
                    <Link
                      href="/shopify-seo"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Our SEO Services →</h4>
                      <p className="text-sm text-foreground">Professional Shopify SEO</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With URL Structure?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your store's URL structure and implement SEO best practices
            to improve your search visibility.
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
