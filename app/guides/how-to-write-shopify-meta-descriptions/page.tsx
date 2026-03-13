import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Write Shopify Meta Descriptions",
  description:
    "Learn how to write compelling meta descriptions for your Shopify store that improve click-through rates and drive more organic traffic.",
  alternates: {
    canonical: "/guides/how-to-write-shopify-meta-descriptions",
  },
  openGraph: {
    title: "How to Write Shopify Meta Descriptions",
    description:
      "Learn how to write compelling meta descriptions that improve click-through rates.",
    url: "/guides/how-to-write-shopify-meta-descriptions",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-meta-descriptions", title: "What Are Meta Descriptions", level: 2 },
  { id: "why-they-matter", title: "Why They Matter", level: 2 },
  { id: "anatomy-of-a-great-meta-description", title: "Anatomy of a Great Meta Description", level: 2 },
  { id: "writing-product-meta-descriptions", title: "Writing Product Meta Descriptions", level: 2 },
  { id: "writing-collection-meta-descriptions", title: "Writing Collection Meta Descriptions", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
  { id: "adding-meta-descriptions-in-shopify", title: "Adding Meta Descriptions in Shopify", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write Shopify Meta Descriptions",
  description:
    "Learn how to write compelling meta descriptions that improve click-through rates.",
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
    "@id": `${siteConfig.url}/guides/how-to-write-shopify-meta-descriptions`,
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
      name: "How to Write Shopify Meta Descriptions",
      item: `${siteConfig.url}/guides/how-to-write-shopify-meta-descriptions`,
    },
  ],
};

export default function MetaDescriptionsGuidePage() {
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
                <span>13 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Write Shopify Meta Descriptions
            </h1>

            <p className="text-xl text-foreground mb-8">
              Meta descriptions are your first impression in search results. This guide shows you
              how to write descriptions that compel searchers to click through to your store.
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
              {/* What Are Meta Descriptions */}
              <section id="what-are-meta-descriptions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  What Are Meta Descriptions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  A meta description is an HTML element that provides a brief summary of a web page.
                  Search engines like Google display the meta description in search results beneath
                  the page title and URL. It's typically 150-160 characters long and serves as
                  advertising copy for your page.
                </p>
                <p className="text-lg text-foreground mb-6">
                  When someone searches for something on Google, they see your page title, URL, and
                  meta description. The meta description is your opportunity to tell searchers why
                  they should click on your result instead of the nine other options on the page.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Search Result Anatomy</h3>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-blue-600 text-lg hover:underline cursor-pointer">Blue Leather Crossbody Bag | Your Store Name</p>
                    <p className="text-green-700 text-sm">yourstore.com › products › blue-leather-crossbody-bag</p>
                    <p className="text-foreground text-sm mt-1">Handcrafted Italian leather crossbody bag with adjustable strap. Perfect for everyday use. Free UK delivery on orders over £50. Shop now.</p>
                  </div>
                  <p className="text-sm text-foreground mt-4">
                    <strong>The last line is the meta description</strong> - your 160-character sales pitch.
                  </p>
                </div>

                <p className="text-lg text-foreground">
                  Note that Google sometimes chooses to display a different snippet from your page
                  content if it better matches the search query. However, a well-written meta
                  description gives you the best chance of controlling what appears in results.
                </p>
              </section>

              {/* Why They Matter */}
              <section id="why-they-matter" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why They Matter
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Meta descriptions don't directly affect your search rankings. Google confirmed this
                  years ago. However, they have a powerful indirect effect through click-through rate
                  (CTR). A compelling meta description can significantly increase the percentage of
                  searchers who click on your result.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The CTR Impact</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Higher CTR = More traffic</strong> from the same ranking position</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>CTR is a ranking signal</strong> - pages with higher CTR may rank better over time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Better qualified traffic</strong> - clear descriptions attract the right visitors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Brand impression</strong> - every search result is a mini advertisement</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground mb-4">
                  Consider this: if you rank in position 5 for a keyword with 1,000 monthly searches,
                  improving your CTR from 3% to 5% means an extra 20 visitors per month. Across
                  hundreds of keywords, this adds up to significant traffic gains.
                </p>
                <p className="text-lg text-foreground">
                  For ecommerce, the quality of clicks matters too. A meta description that accurately
                  describes what you're selling attracts visitors who are genuinely interested in
                  buying, leading to better conversion rates.
                </p>
              </section>

              {/* Anatomy of a Great Meta Description */}
              <section id="anatomy-of-a-great-meta-description" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Anatomy of a Great Meta Description
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Every effective meta description shares certain characteristics. Understanding these
                  elements helps you craft descriptions that stand out in search results.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Essential Elements
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Target keyword (early in the description)</strong>
                      <p className="text-foreground mt-1">Include your primary keyword naturally. Google bolds keywords that match the search query, making your result more eye-catching.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Unique value proposition</strong>
                      <p className="text-foreground mt-1">What makes your product or page different? Free delivery, handmade, organic, exclusive - highlight what sets you apart.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Call to action</strong>
                      <p className="text-foreground mt-1">Tell people what to do: "Shop now", "Discover our range", "Find your perfect fit". Active language drives clicks.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Accurate representation</strong>
                      <p className="text-foreground mt-1">The description must match the page content. Misleading descriptions lead to high bounce rates and hurt rankings.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Length Guidelines
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ideal length:</strong> 150-160 characters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Maximum before truncation:</strong> Approximately 155-160 characters on desktop, 120 on mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Minimum:</strong> At least 70 characters - shorter descriptions waste valuable space</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Front-load your most important information. If Google truncates your description,
                    the crucial selling points should already be visible. Put keywords and value
                    propositions in the first 120 characters.
                  </p>
                </div>
              </section>

              {/* Writing Product Meta Descriptions */}
              <section id="writing-product-meta-descriptions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Writing Product Meta Descriptions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Product pages are where meta descriptions matter most for ecommerce. Every product
                  needs a unique, compelling description that highlights its key features and
                  benefits.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Product Description Formula
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-foreground font-medium mb-4">
                    [Product Type] + [Key Feature/Material] + [Benefit] + [USP] + [CTA]
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Example 1 - Fashion:</strong></p>
                      <p className="text-sm bg-white p-3 rounded border border-gray-200">
                        "Premium Italian leather crossbody bag with adjustable strap. Handcrafted with solid brass hardware. Free UK delivery and 2-year guarantee. Shop now."
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Example 2 - Beauty:</strong></p>
                      <p className="text-sm bg-white p-3 rounded border border-gray-200">
                        "Organic vitamin C serum with hyaluronic acid for brighter, firmer skin. Vegan and cruelty-free. Visible results in 4 weeks. Free samples with every order."
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Example 3 - Home:</strong></p>
                      <p className="text-sm bg-white p-3 rounded border border-gray-200">
                        "Solid oak dining table seats 6-8 people. Handmade in England with a 25-year guarantee. Free white glove delivery. View our full collection."
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Elements to Include
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Product name/type:</strong> Include early for keyword matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Key material or feature:</strong> Leather, organic, handmade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Primary benefit:</strong> What problem does it solve?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Trust signals:</strong> Guarantees, free delivery, reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Call to action:</strong> Shop now, discover, explore</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  What to Avoid
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Prices (they change and cause mismatches)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Vague descriptions ("high quality product")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Duplicate descriptions across products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>ALL CAPS or excessive punctuation!!!</span>
                  </li>
                </ul>
              </section>

              {/* Writing Collection Meta Descriptions */}
              <section id="writing-collection-meta-descriptions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Writing Collection Meta Descriptions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Collection pages often rank for broader, higher-volume keywords. Their meta
                  descriptions need to convey the breadth of products available while highlighting
                  what makes your collection worth browsing.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Collection Description Formula
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-foreground font-medium mb-4">
                    [Category] + [Range/Variety] + [Quality/Feature] + [Brand USP] + [CTA]
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Example 1 - Women's Dresses:</strong></p>
                      <p className="text-sm bg-white p-3 rounded border border-gray-200">
                        "Shop women's dresses for every occasion. From casual day dresses to elegant evening wear. Ethically made in the UK. Free returns on all orders. Find your perfect dress."
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Example 2 - Running Shoes:</strong></p>
                      <p className="text-sm bg-white p-3 rounded border border-gray-200">
                        "Men's running shoes from top brands including Nike, Adidas and New Balance. Expert advice and free gait analysis in-store. Next day delivery available. Shop now."
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Example 3 - Kitchen Appliances:</strong></p>
                      <p className="text-sm bg-white p-3 rounded border border-gray-200">
                        "Kitchen appliances for the modern home. Blenders, mixers, coffee machines and more. Price match guarantee and 2-year warranty on all items. Browse our range."
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Collection-Specific Tips
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Mention product variety:</strong> "Over 200 styles", "From casual to formal"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Include brand names if relevant:</strong> Especially for stores selling multiple brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Highlight filtering options:</strong> "Filter by size, colour and price"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Add seasonal relevance:</strong> Update for key shopping periods</span>
                  </li>
                </ul>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Mistakes
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Many Shopify stores make the same meta description mistakes. Avoiding these
                  issues puts you ahead of most competitors.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Leaving Descriptions Empty</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> Google will pull random text from your page, often resulting in incomplete sentences or irrelevant content.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Write unique descriptions for every important page, starting with your top products and collections.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Using Duplicate Descriptions</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> Copying the same description across products wastes the opportunity to rank for specific search terms.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Each product should have a unique description highlighting its specific features.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Keyword Stuffing</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> "Buy blue bags, blue handbags, blue leather bags, blue crossbody bags" reads poorly and can hurt rankings.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Write naturally. Use your primary keyword once or twice and focus on compelling copy.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Being Too Short</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> "Blue leather bag for sale" wastes 100+ characters of valuable real estate.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Use the full 150-160 characters to include benefits, USPs, and calls to action.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Forgetting the Call to Action</h3>
                    <p className="text-foreground mb-2">
                      <strong>The problem:</strong> Describing your product without telling people what to do next.
                    </p>
                    <p className="text-foreground">
                      <strong>The fix:</strong> Always end with an action: "Shop now", "Discover more", "Browse our collection".
                    </p>
                  </div>
                </div>
              </section>

              {/* Adding Meta Descriptions in Shopify */}
              <section id="adding-meta-descriptions-in-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Adding Meta Descriptions in Shopify
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify makes it easy to add and edit meta descriptions for all page types.
                  Here's how to do it for each.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  For Products
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
                    <span>Enter your meta description (up to 320 characters, but keep it under 160)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Save the product</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  For Collections
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Products → Collections → select your collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll down to "Search engine listing"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click "Edit" and enter your description</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Save the collection</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  For Pages
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Online Store → Pages → select your page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll down to "Search engine listing"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click "Edit" and enter your description</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Save the page</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use the Shopify bulk editor to update meta descriptions across multiple products
                    at once. Go to Products, select multiple products, then click "Edit products"
                    to access the bulk editor. Add "SEO description" as a column to edit efficiently.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Now that you understand how to write effective meta descriptions, here's how to
                  implement them systematically across your store.
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Prioritise your pages</strong>
                      <p className="text-foreground mt-1">Start with your homepage, top collections, and best-selling products. These have the most impact.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Create templates</strong>
                      <p className="text-foreground mt-1">Develop formulas for different product types that you can customise for each item.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Monitor performance</strong>
                      <p className="text-foreground mt-1">Use Google Search Console to track click-through rates. Rewrite descriptions for pages with low CTR.</p>
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
                      <p className="text-sm text-foreground">Optimise your Shopify URLs</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With SEO?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can write compelling meta descriptions for your entire store and implement
            a comprehensive SEO strategy to drive more organic traffic.
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

      <CTASection />
    </>
  );
}
