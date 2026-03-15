import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Product Recommendations to Shopify",
  description: "Learn how to add product recommendations to Shopify. Covers native recommendations, personalisation apps, placement strategy, and measuring impact.",
  alternates: { canonical: "/guides/how-to-add-shopify-product-recommendations" },
  openGraph: {
    title: "How to Add Product Recommendations to Shopify",
    description: "Learn how to add product recommendations to Shopify. Covers native recommendations, personalisation apps, placement strategy, and measuring impact.",
    url: "/guides/how-to-add-shopify-product-recommendations",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "types-of-recommendations", title: "Types of Recommendations", level: 2 },
  { id: "native-shopify-recommendations", title: "Native Shopify Recommendations", level: 2 },
  { id: "personalisation-apps", title: "Personalisation Apps", level: 2 },
  { id: "placement-strategy", title: "Placement Strategy", level: 2 },
  { id: "recommendation-copy", title: "Recommendation Copy", level: 2 },
  { id: "measuring-impact", title: "Measuring Impact", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Product Recommendations to Shopify",
  description: "Learn how to add product recommendations to Shopify. Covers native recommendations, personalisation apps, placement strategy, and measuring impact.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-shopify-product-recommendations` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Product Recommendations to Shopify", item: `${siteConfig.url}/guides/how-to-add-shopify-product-recommendations` },
  ],
};

export default function Page() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Conversion Optimisation</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Product Recommendations to Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Product recommendations drive 35% of Amazon&apos;s revenue. For Shopify stores, well-placed recommendations increase both conversion rate and average order value. This guide covers every approach from native tools to AI-powered personalisation.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="types-of-recommendations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Types of Recommendations</h2>
                <p className="text-lg text-foreground mb-4">Not all product recommendations work the same way. Understanding the different recommendation types helps you choose the right approach for each location on your store.</p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5"><h4 className="font-semibold text-foreground-dark mb-2">Related Products</h4><p className="text-foreground">Products that are similar to or commonly bought alongside the current product. Based on purchase history or product metadata.</p></div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5"><h4 className="font-semibold text-foreground-dark mb-2">Recently Viewed</h4><p className="text-foreground">Products the current user has viewed in this session. Useful for bringing customers back to products they showed interest in.</p></div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5"><h4 className="font-semibold text-foreground-dark mb-2">Bestsellers</h4><p className="text-foreground">Your top-performing products by sales volume. A safe default recommendation that leverages social proof.</p></div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5"><h4 className="font-semibold text-foreground-dark mb-2">Personalised Recommendations</h4><p className="text-foreground">AI-powered suggestions based on the individual customer&apos;s browsing and purchase history. Requires a dedicated app and sufficient data to work well.</p></div>
                </div>
              </section>
              <section id="native-shopify-recommendations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Native Shopify Recommendations</h2>
                <p className="text-lg text-foreground mb-4">Shopify provides a product recommendations API that most modern themes support. Enable it in your theme settings on the product page template. The algorithm considers purchase history, product tags, and product type to generate suggestions automatically.</p>
                <p className="text-lg text-foreground mb-4">You can also manually set recommended products for specific items via metafields or by installing a simple app. Manual curation is worth doing for your top 20-30 products where you know exactly what pairs well.</p>
              </section>
              <section id="personalisation-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Personalisation Apps</h2>
                <p className="text-lg text-foreground mb-4">For larger catalogues and higher traffic stores, AI personalisation apps outperform static or algorithmic recommendations. LimeSpot and Rebuy are the two most used options in the UK market. Both use machine learning to adapt recommendations per visitor based on their behaviour.</p>
                <p className="text-lg text-foreground mb-4">These apps typically require 3-4 weeks of data to start personalising effectively. During that period, they fall back to bestseller-based recommendations.</p>
              </section>
              <section id="placement-strategy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Placement Strategy</h2>
                <p className="text-lg text-foreground mb-4">Product page recommendations should appear below the product description or after the add-to-cart button. Label them clearly: &quot;Frequently bought together&quot;, &quot;Complete the look&quot;, or &quot;You may also like&quot; all perform well depending on your product category.</p>
                <p className="text-lg text-foreground mb-4">Cart recommendations appear most effectively as the last item before the checkout button. Post-purchase recommendations, shown on the order confirmation page, have no checkout friction and can drive impulse additional orders.</p>
              </section>
              <section id="recommendation-copy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Recommendation Copy</h2>
                <p className="text-lg text-foreground mb-4">The section headline matters. Test different labels for your recommendation sections. &quot;Customers also bought&quot; leverages social proof. &quot;Complete your order&quot; creates a sense of incompleteness. &quot;People who bought this also bought&quot; is collaborative social proof.</p>
              </section>
              <section id="measuring-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Measuring Impact</h2>
                <p className="text-lg text-foreground mb-4">Track click-through rate on recommendation sections and the conversion rate and average order value of sessions that interact with them versus those that do not. Most recommendation apps provide this data natively. A well-configured recommendation engine should increase average order value by 5-15%.</p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-upsells" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Upsells</h4><p className="text-sm text-foreground">Configure upsell offers</p></Link>
                    <Link href="/guides/how-to-write-product-descriptions-that-sell" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Descriptions</h4><p className="text-sm text-foreground">Write descriptions that convert</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want Smarter Product Recommendations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team configures product recommendation engines and personalisation tools that drive measurable increases in average order value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
