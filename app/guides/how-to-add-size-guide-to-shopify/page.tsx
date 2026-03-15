import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add a Size Guide to Shopify",
  description: "Learn how to add a size guide to your Shopify product pages. Covers creating size guide content, popup vs inline display, international sizing, and reducing returns.",
  alternates: { canonical: "/guides/how-to-add-size-guide-to-shopify" },
  openGraph: {
    title: "How to Add a Size Guide to Shopify",
    description: "Learn how to add a size guide to your Shopify product pages. Covers creating size guide content, popup vs inline display, international sizing, and reducing returns.",
    url: "/guides/how-to-add-size-guide-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-size-guides-reduce-returns", title: "Why Size Guides Reduce Returns", level: 2 },
  { id: "creating-size-guide-content", title: "Creating Size Guide Content", level: 2 },
  { id: "adding-to-product-pages", title: "Adding to Product Pages", level: 2 },
  { id: "popup-vs-inline", title: "Popup vs Inline", level: 2 },
  { id: "international-sizing", title: "International Sizing", level: 2 },
  { id: "keeping-guides-updated", title: "Keeping Guides Updated", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add a Size Guide to Shopify",
  description: "Learn how to add a size guide to your Shopify product pages. Covers creating size guide content, popup vs inline display, international sizing, and reducing returns.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-size-guide-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add a Size Guide to Shopify", item: `${siteConfig.url}/guides/how-to-add-size-guide-to-shopify` },
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
                <span>10 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add a Size Guide to Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Size-related returns cost UK fashion retailers billions of pounds annually. A clear, accurate size guide on your product pages reduces returns, increases customer confidence, and improves conversion rates. This guide shows you how to implement one properly.
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

              <section id="why-size-guides-reduce-returns" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Size Guides Reduce Returns</h2>
                <p className="text-lg text-foreground mb-4">Size and fit is the number one reason for clothing returns in the UK, accounting for around 40% of all fashion returns. A customer who buys the wrong size is guaranteed to return the product, costing you postage both ways and processing time.</p>
                <p className="text-lg text-foreground mb-4">A well-designed size guide does more than list measurements. It helps customers understand how your sizing compares to other brands they know, explains fit variations (slim fit vs relaxed fit), and provides guidance on how to measure themselves correctly.</p>
              </section>
              <section id="creating-size-guide-content" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating Size Guide Content</h2>
                <p className="text-lg text-foreground mb-4">For each product category, create a size chart with specific measurements (chest, waist, hip, inseam) in centimetres and inches for each size. Include a &quot;how to measure&quot; diagram showing where to take each measurement.</p>
                <p className="text-lg text-foreground mb-4">Note whether your sizing runs true to size, small, or large. Include customer notes like &quot;most customers size up in this style&quot; if your data supports it. This kind of specific guidance significantly reduces sizing uncertainty.</p>
              </section>
              <section id="adding-to-product-pages" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Adding to Product Pages</h2>
                <p className="text-lg text-foreground mb-4">There are several ways to add a size guide to product pages. The simplest is a link in the product description to a dedicated /pages/size-guide page. More effective is a size guide directly on the product page, either inline below the size selector or in a popup modal triggered by a &quot;Size Guide&quot; link near the size selector.</p>
              </section>
              <section id="popup-vs-inline" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Popup vs Inline</h2>
                <p className="text-lg text-foreground mb-4">Popup size guides keep the product page clean and allow detailed size information without taking up space. They are easy to implement using Shopify&apos;s native popup functionality or a simple app like Kiwi Size Chart and Recommender.</p>
                <p className="text-lg text-foreground mb-4">Inline size guides are always visible without requiring an interaction. They work well for simpler sizing (S, M, L, XL) where a small table fits naturally on the page. For complex sizing with many measurements, a popup is usually cleaner.</p>
              </section>
              <section id="international-sizing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">International Sizing</h2>
                <p className="text-lg text-foreground mb-4">If you sell internationally, include sizing conversions for UK, EU, US, and AUS sizes. UK size 10 women&apos;s clothing is EU 38, US 6, AUS 10. These conversions vary by product type and brand, so always base them on your actual garment measurements rather than generic conversion charts.</p>
              </section>
              <section id="keeping-guides-updated" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Keeping Guides Updated</h2>
                <p className="text-lg text-foreground mb-4">Size guides must be updated whenever you change your sizing or introduce new products with different specifications. Outdated size information is worse than no size information, as it creates false confidence and guaranteed returns.</p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-improve-shopify-checkout-conversion" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Conversion</h4><p className="text-sm text-foreground">Reduce drop-off at payment</p></Link>
                    <Link href="/guides/how-to-add-reviews-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Reviews</h4><p className="text-sm text-foreground">Let customers share fit feedback</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Reduce Your Return Rate?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can implement size guides, fit recommendation tools, and returns analytics to identify and fix your biggest sources of returns.
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
