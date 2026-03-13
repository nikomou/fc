import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Optimise Shopify Product Pages for SEO",
  description:
    "Learn how to optimise your Shopify product pages for search engines. Covers titles, descriptions, URLs, images, and structured data for better rankings.",
  alternates: {
    canonical: "/guides/how-to-optimise-shopify-product-pages-for-seo",
  },
  openGraph: {
    title: "How to Optimise Shopify Product Pages for SEO",
    description: "Learn how to optimise your Shopify product pages for search engines.",
    url: "/guides/how-to-optimise-shopify-product-pages-for-seo",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-product-seo-matters", title: "Why Product SEO Matters", level: 2 },
  { id: "product-titles", title: "Product Titles", level: 2 },
  { id: "product-descriptions", title: "Product Descriptions", level: 2 },
  { id: "url-handles", title: "URL Handles", level: 2 },
  { id: "image-optimisation", title: "Image Optimisation", level: 2 },
  { id: "meta-tags", title: "Meta Tags", level: 2 },
  { id: "structured-data", title: "Structured Data", level: 2 },
  { id: "internal-linking", title: "Internal Linking", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Optimise Shopify Product Pages for SEO",
  description: "Learn how to optimise your Shopify product pages for search engines.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-optimise-shopify-product-pages-for-seo` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Optimise Shopify Product Pages for SEO", item: `${siteConfig.url}/guides/how-to-optimise-shopify-product-pages-for-seo` },
  ],
};

export default function OptimiseProductPagesSEOGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">SEO</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Optimise Shopify Product Pages for SEO
            </h1>

            <p className="text-xl text-foreground mb-8">
              Your product pages are where conversions happen. This guide shows you how to optimise every element for search engines whilst maintaining a great user experience.
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

              <section id="why-product-seo-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Product SEO Matters</h2>
                <p className="text-lg text-foreground mb-4">
                  Product pages are the most valuable pages on your Shopify store. They capture high-intent traffic from people actively searching for products to buy. When someone searches for &quot;blue wool jumper size medium&quot;, they&apos;re ready to purchase.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Unlike category pages or blog posts, product pages target specific, long-tail keywords with clear commercial intent. Ranking for these terms means capturing customers at the bottom of the funnel, where conversion rates are highest.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Statistics</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>39% of ecommerce traffic</strong> comes from organic search</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product searches convert 2-3x higher</strong> than category searches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>The first result captures 28%</strong> of all clicks on average</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Long-tail keywords</strong> account for 70% of all search traffic</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="product-titles" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Titles</h2>
                <p className="text-lg text-foreground mb-4">
                  Your product title is the single most important on-page SEO element. It appears in search results, browser tabs, and social shares. Get this right, and you&apos;re halfway to ranking.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Title Structure Formula</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <code className="text-accent">[Brand] + [Product Name] + [Key Feature] + [Size/Colour/Variant]</code>
                  <p className="text-foreground mt-4">Example: &quot;Patagonia Better Sweater Fleece Jacket - Navy Blue - Men&apos;s Large&quot;</p>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Best Practices</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Keep titles under 60 characters</strong> to avoid truncation in search results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Put the primary keyword first</strong> when possible for better visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Include differentiators</strong> like colour, size, or material when relevant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Avoid keyword stuffing</strong> as this hurts both rankings and user trust</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use Google Search Console to see how your titles appear in search results. If they&apos;re being rewritten by Google, it often means they&apos;re too long or don&apos;t match search intent.
                  </p>
                </div>
              </section>

              <section id="product-descriptions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Descriptions</h2>
                <p className="text-lg text-foreground mb-4">
                  Product descriptions serve dual purposes: they help search engines understand your product and persuade customers to buy. The best descriptions do both simultaneously.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Description Structure</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Opening Hook</strong>
                      <p className="text-foreground mt-1">Lead with the main benefit or unique selling point. Answer the question: why should someone buy this?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Features and Specifications</strong>
                      <p className="text-foreground mt-1">List technical details using bullet points. Include dimensions, materials, and care instructions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Use Cases</strong>
                      <p className="text-foreground mt-1">Help customers visualise using the product. When and where would they use it?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Social Proof</strong>
                      <p className="text-foreground mt-1">Mention awards, reviews, or notable customers if applicable.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Minimum Word Count</h4>
                  <p className="text-foreground">
                    Aim for at least 300 words per product description. This gives search engines enough content to understand and rank the page. However, quality matters more than quantity.
                  </p>
                </div>
              </section>

              <section id="url-handles" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">URL Handles</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify automatically generates URL handles from your product titles, but these often need manual optimisation. Clean URLs improve both SEO and user experience.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">URL Best Practices</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Keep URLs Short</h4>
                    <p className="text-foreground mb-2">Use 3-5 words maximum. Remove unnecessary words like &quot;the&quot;, &quot;and&quot;, &quot;for&quot;.</p>
                    <div className="text-sm">
                      <span className="text-red-500">Bad:</span> /products/the-amazing-blue-wool-jumper-for-men<br />
                      <span className="text-green-500">Good:</span> /products/blue-wool-jumper-mens
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Include Primary Keyword</h4>
                    <p className="text-foreground">Your main keyword should appear in the URL. This is a confirmed ranking factor.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Use Hyphens</h4>
                    <p className="text-foreground">Separate words with hyphens, not underscores. Google treats hyphens as word separators.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Warning</h4>
                  <p className="text-foreground">
                    Changing URLs on existing products will break any links pointing to the old URL. Always set up 301 redirects when changing URLs. See our <Link href="/guides/how-to-create-shopify-redirects" className="text-accent hover:underline">redirects guide</Link> for details.
                  </p>
                </div>
              </section>

              <section id="image-optimisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Image Optimisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Product images affect both rankings and conversions. Properly optimised images load faster, appear in Google Images, and improve accessibility.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Alt Text Guidelines</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Describe the image accurately</strong> as if explaining it to someone who cannot see it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Include the product name</strong> and key visual details like colour or style</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Keep it under 125 characters</strong> as screen readers may cut off longer text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Avoid keyword stuffing</strong> as this creates poor user experience for screen readers</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">File Naming</h3>
                <p className="text-lg text-foreground mb-4">
                  Name your image files descriptively before uploading. Use hyphens between words.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <span className="text-red-500">Bad:</span> IMG_2847.jpg<br />
                  <span className="text-green-500">Good:</span> blue-wool-jumper-front-view.jpg
                </div>

                <p className="text-lg text-foreground">
                  For detailed image optimisation strategies, see our <Link href="/guides/how-to-optimise-shopify-product-images" className="text-accent hover:underline">complete image optimisation guide</Link>.
                </p>
              </section>

              <section id="meta-tags" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Meta Tags</h2>
                <p className="text-lg text-foreground mb-4">
                  Meta titles and descriptions appear in search results. Whilst meta descriptions don&apos;t directly affect rankings, they significantly impact click-through rates.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Meta Title vs Product Title</h3>
                <p className="text-lg text-foreground mb-4">
                  In Shopify, you can set a separate SEO title that differs from your product title. Use this to create more compelling search listings.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Example</h4>
                  <p className="text-foreground mb-2"><strong>Product Title:</strong> Classic Blue Wool Jumper</p>
                  <p className="text-foreground"><strong>Meta Title:</strong> Classic Blue Wool Jumper | Free UK Delivery | Brand Name</p>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Meta Description Formula</h3>
                <p className="text-lg text-foreground mb-4">
                  Write descriptions between 150-160 characters that include your keyword naturally and end with a call to action.
                </p>

                <p className="text-lg text-foreground">
                  For more on writing effective meta descriptions, see our <Link href="/guides/how-to-write-shopify-meta-descriptions" className="text-accent hover:underline">meta description guide</Link>.
                </p>
              </section>

              <section id="structured-data" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Structured Data</h2>
                <p className="text-lg text-foreground mb-4">
                  Structured data helps search engines understand your product information and can enable rich snippets in search results, including star ratings, prices, and availability.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Essential Product Schema</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Product name and description</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Price and currency</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Availability status</strong> (in stock, out of stock, pre-order)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Brand name</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>SKU or product identifier</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Review ratings</strong> (if you have reviews)</span>
                  </li>
                </ul>

                <p className="text-lg text-foreground">
                  For implementation details, see our <Link href="/guides/how-to-add-schema-markup-to-shopify" className="text-accent hover:underline">complete schema markup guide</Link>.
                </p>
              </section>

              <section id="internal-linking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Internal Linking</h2>
                <p className="text-lg text-foreground mb-4">
                  Internal links help search engines discover and understand the relationship between your pages. They also keep customers browsing your store longer.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Internal Linking Strategies</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Related Products</h4>
                    <p className="text-foreground">Link to complementary products within descriptions. &quot;Pair this jumper with our matching wool scarf for a complete look.&quot;</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Category Links</h4>
                    <p className="text-foreground">Reference the parent collection. &quot;Browse all items in our Winter Knitwear collection.&quot;</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Content Links</h4>
                    <p className="text-foreground">Link to relevant blog posts or guides. &quot;Learn how to care for wool garments in our care guide.&quot;</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-seo-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">SEO Checklist →</h4>
                      <p className="text-sm text-foreground">Complete SEO audit guide</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Pre-launch SEO essentials</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Product Page SEO Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your product pages, implement technical SEO improvements, and create a strategy to improve your organic traffic and rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-seo" variant="outline-light" size="lg" icon={false}>Our SEO Services</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
