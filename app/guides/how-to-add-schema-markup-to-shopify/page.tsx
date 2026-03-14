import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Schema Markup to Shopify",
  description:
    "Complete guide to implementing schema markup on your Shopify store. Learn about Product, Organisation, and FAQ schema for rich snippets in search results.",
  alternates: {
    canonical: "/guides/how-to-add-schema-markup-to-shopify",
  },
  openGraph: {
    title: "How to Add Schema Markup to Shopify",
    description: "Complete guide to implementing schema markup on your Shopify store.",
    url: "/guides/how-to-add-schema-markup-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-schema-markup", title: "What Is Schema Markup", level: 2 },
  { id: "why-schema-matters", title: "Why Schema Matters for SEO", level: 2 },
  { id: "product-schema", title: "Product Schema", level: 2 },
  { id: "organisation-schema", title: "Organisation Schema", level: 2 },
  { id: "breadcrumb-schema", title: "Breadcrumb Schema", level: 2 },
  { id: "faq-schema", title: "FAQ Schema", level: 2 },
  { id: "testing-schema", title: "Testing Your Schema", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Schema Markup to Shopify",
  description: "Complete guide to implementing schema markup on your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-schema-markup-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Schema Markup to Shopify", item: `${siteConfig.url}/guides/how-to-add-schema-markup-to-shopify` },
  ],
};

export default function SchemaMarkupGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Technical SEO</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>18 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Schema Markup to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Schema markup helps search engines understand your content and can unlock rich snippets in search results. This guide covers everything you need to implement it correctly.
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

              <section id="what-is-schema-markup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Schema Markup</h2>
                <p className="text-lg text-foreground mb-4">
                  Schema markup is a standardised vocabulary of tags (microdata) that you add to your HTML to help search engines understand your content better. It&apos;s like providing a translation guide for search engine crawlers.
                </p>
                <p className="text-lg text-foreground mb-6">
                  When you add schema markup to your Shopify store, you&apos;re explicitly telling Google what your content means, not just what it says. This removes ambiguity and helps search engines display your content more accurately in search results.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Schema Types for Ecommerce</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product</strong> for individual product pages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Organisation</strong> for your business information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>BreadcrumbList</strong> for navigation paths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>FAQPage</strong> for frequently asked questions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Review</strong> and <strong>AggregateRating</strong> for customer reviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>LocalBusiness</strong> for physical store locations</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="why-schema-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Schema Matters for SEO</h2>
                <p className="text-lg text-foreground mb-4">
                  Schema markup doesn&apos;t directly improve your rankings, but it can significantly increase your click-through rate from search results. Rich snippets stand out visually and provide more information to searchers.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Rich Snippet Benefits</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Star Ratings</h4>
                    <p className="text-foreground">Product review ratings displayed directly in search results. Studies show star ratings can increase CTR by up to 35%.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Price and Availability</h4>
                    <p className="text-foreground">Show your product price and stock status before users click through. This pre-qualifies traffic and reduces bounce rates.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">FAQ Dropdowns</h4>
                    <p className="text-foreground">Expandable FAQ sections in search results take up more space and provide immediate answers to common questions.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Breadcrumb Navigation</h4>
                    <p className="text-foreground">Shows your site hierarchy in search results, helping users understand your store structure before clicking.</p>
                  </div>
                </div>
              </section>

              <section id="product-schema" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Schema</h2>
                <p className="text-lg text-foreground mb-4">
                  Product schema is the most important schema type for Shopify stores. It enables rich product information in search results, including price, availability, and reviews.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Required Properties</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>name</strong> - The product title</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>image</strong> - At least one product image URL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>description</strong> - Product description text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>offers</strong> - Price and availability information</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Example Product Schema</h3>
                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-sm text-gray-100"><code>{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blue Wool Jumper",
  "image": "https://yourstore.com/jumper.jpg",
  "description": "Premium merino wool jumper...",
  "brand": {
    "@type": "Brand",
    "name": "Your Brand"
  },
  "sku": "BWJ-001",
  "offers": {
    "@type": "Offer",
    "url": "https://yourstore.com/products/jumper",
    "priceCurrency": "GBP",
    "price": "89.00",
    "availability": "https://schema.org/InStock"
  }
}`}</code></pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Shopify Theme Implementation</h4>
                  <p className="text-foreground">
                    Most modern Shopify themes include basic product schema. Check your theme&apos;s product.liquid or main-product.liquid file. If schema is missing or incomplete, add it within a script tag with type=&quot;application/ld+json&quot;.
                  </p>
                </div>
              </section>

              <section id="organisation-schema" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Organisation Schema</h2>
                <p className="text-lg text-foreground mb-4">
                  Organisation schema tells search engines about your business. It appears in your Knowledge Panel and helps establish brand authority.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Key Properties</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>name</strong> - Your business name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>url</strong> - Your website URL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>logo</strong> - Your business logo URL</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>sameAs</strong> - Array of social media profile URLs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>contactPoint</strong> - Customer service contact details</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Where to Add It</h3>
                <p className="text-lg text-foreground mb-4">
                  Add Organisation schema to your theme.liquid file so it appears on every page. Place it just before the closing body tag.
                </p>
              </section>

              <section id="breadcrumb-schema" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Breadcrumb Schema</h2>
                <p className="text-lg text-foreground mb-4">
                  Breadcrumb schema helps search engines understand your site hierarchy and can display breadcrumb trails in search results instead of the raw URL.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Example Structure</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-foreground mb-4">For a product page, your breadcrumb might be:</p>
                  <code className="text-accent">Home → Clothing → Knitwear → Blue Wool Jumper</code>
                </div>

                <p className="text-lg text-foreground mb-4">
                  Each item in the BreadcrumbList needs a position, name, and item (URL). The last item typically doesn&apos;t need a URL since it represents the current page.
                </p>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Implementation Tip</h4>
                  <p className="text-foreground">
                    If your theme already displays breadcrumbs visually, add the schema markup to match that structure. Consistency between visible breadcrumbs and schema is important for search engines.
                  </p>
                </div>
              </section>

              <section id="faq-schema" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">FAQ Schema</h2>
                <p className="text-lg text-foreground mb-4">
                  FAQ schema can display expandable question and answer pairs directly in search results. This is particularly valuable for product pages and category pages.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">When to Use FAQ Schema</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Product pages with common questions about sizing, materials, or care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Category pages answering questions about the product type</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Dedicated FAQ pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Service pages explaining what&apos;s included</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Example FAQ Schema</h3>
                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-sm text-gray-100"><code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What sizes are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our jumpers are available in XS, S, M, L, and XL."
      }
    },
    {
      "@type": "Question",
      "name": "How do I care for this product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hand wash cold or machine wash on delicate cycle."
      }
    }
  ]
}`}</code></pre>
                </div>
              </section>

              <section id="testing-schema" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Your Schema</h2>
                <p className="text-lg text-foreground mb-4">
                  Always test your schema markup before and after implementation. Google provides free tools to validate your markup.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Testing Tools</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Google Rich Results Test</h4>
                    <p className="text-foreground">The primary tool for testing schema. Enter a URL or paste code directly. Shows which rich results your page is eligible for.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Schema Markup Validator</h4>
                    <p className="text-foreground">Schema.org&apos;s official validator. More strict than Google&apos;s tool and catches additional errors.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Google Search Console</h4>
                    <p className="text-foreground">Monitor your schema performance over time. See which rich results are showing and any errors Google encounters.</p>
                  </div>
                </div>
              </section>

              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Mistakes</h2>
                <p className="text-lg text-foreground mb-4">
                  Avoid these common schema implementation errors that can prevent rich results from appearing.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Missing Required Properties</h3>
                    <p className="text-foreground">Each schema type has required properties. Missing even one can invalidate the entire markup.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Mismatched Data</h3>
                    <p className="text-foreground">Schema data must match visible page content. If your schema shows a different price than the page, Google may ignore it.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Invalid JSON Syntax</h3>
                    <p className="text-foreground">A single missing comma or bracket breaks the entire schema block. Always validate JSON syntax.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Duplicate Schema</h3>
                    <p className="text-foreground">Having multiple Product schemas on the same page confuses search engines. Ensure only one primary schema per type.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-seo-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">SEO Checklist →</h4>
                      <p className="text-sm text-foreground">Complete technical SEO guide</p>
                    </Link>
                    <Link href="/guides/how-to-optimise-shopify-product-pages-for-seo" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Page SEO →</h4>
                      <p className="text-sm text-foreground">Optimise your product pages</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Schema Implementation Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your existing schema, implement missing markup, and ensure your store is eligible for all relevant rich snippets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-seo" variant="outline-light" size="lg" icon={false}>Our SEO Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
