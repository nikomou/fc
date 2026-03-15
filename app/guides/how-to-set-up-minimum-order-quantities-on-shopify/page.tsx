import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Minimum Order Quantities on Shopify",
  description: "Learn how to set up minimum order quantities on Shopify for B2B and wholesale. Covers app options, Liquid customisation, communicating MOQs, and handling exceptions.",
  alternates: { canonical: "/guides/how-to-set-up-minimum-order-quantities-on-shopify" },
  openGraph: {
    title: "How to Set Up Minimum Order Quantities on Shopify",
    description: "Learn how to set up minimum order quantities on Shopify for B2B and wholesale. Covers app options, Liquid customisation, communicating MOQs, and handling exceptions.",
    url: "/guides/how-to-set-up-minimum-order-quantities-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "moq-use-cases", title: "MOQ Use Cases", level: 2 },
  { id: "app-options", title: "App Options", level: 2 },
  { id: "liquid-customisation", title: "Liquid Customisation", level: 2 },
  { id: "b2b-minimum-orders", title: "B2B Minimum Orders", level: 2 },
  { id: "communicating-moqs", title: "Communicating MOQs", level: 2 },
  { id: "exceptions-and-edge-cases", title: "Exceptions and Edge Cases", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Minimum Order Quantities on Shopify",
  description: "Learn how to set up minimum order quantities on Shopify for B2B and wholesale. Covers app options, Liquid customisation, communicating MOQs, and handling exceptions.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-minimum-order-quantities-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Minimum Order Quantities on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-minimum-order-quantities-on-shopify` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">B2B &amp; Wholesale</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Minimum Order Quantities on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Minimum order quantities protect your margins on wholesale and B2B orders. Shopify does not support MOQs natively, but there are reliable approaches using apps and custom Liquid code. This guide covers the options.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
              <span className="text-gray-300">•</span><span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="moq-use-cases" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">MOQ Use Cases</h2>
                <p className="text-lg text-foreground mb-4">Minimum order quantities serve different purposes depending on your business model. For wholesale, they ensure orders are large enough to justify your wholesale pricing. For manufacturing or custom orders, they reflect production minimums. For perishables, they may reflect pack sizes.</p>
                <p className="text-lg text-foreground mb-4">Understanding your MOQ rationale helps you configure the right type of restriction: minimum quantity per variant, minimum quantity per product, minimum total order value, or a combination.</p>
              </section>
              <section id="app-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Options</h2>
                <p className="text-lg text-foreground mb-4">The leading MOQ apps for Shopify are Wholesale Helper, Wholesale Gorilla, and Order Limits MOQ. These allow you to set minimum quantities at product, variant, or collection level, with different rules for different customer groups (tagged as wholesale vs retail).</p>
                <p className="text-lg text-foreground mb-4">Wholesale Gorilla is widely used for B2B stores as it combines MOQs with wholesale pricing in a single app.</p>
              </section>
              <section id="liquid-customisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Liquid Customisation</h2>
                <p className="text-lg text-foreground mb-4">For a lightweight MOQ without an app, add JavaScript validation to your product form. Check the quantity input on add-to-cart and show an error if it is below the minimum. You can store the MOQ as a product metafield and reference it in your Liquid template.</p>
                <p className="text-lg text-foreground mb-4">This approach does not prevent adding to cart server-side, so consider adding a checkout validation script or using a Shopify Function to block checkout if quantity requirements are not met.</p>
              </section>
              <section id="b2b-minimum-orders" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">B2B Minimum Orders</h2>
                <p className="text-lg text-foreground mb-4">Shopify B2B (Plus) supports minimum order amounts and quantities natively via the B2B configuration. For each company, you can set a minimum order amount in GBP that must be reached before checkout is permitted.</p>
                <p className="text-lg text-foreground mb-4">For non-Plus merchants, enforce minimum order values using a discount code trick (a 100% discount that only works above a threshold) or a checkout validation app.</p>
              </section>
              <section id="communicating-moqs" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Communicating MOQs</h2>
                <p className="text-lg text-foreground mb-4">Display minimum order quantities clearly on product pages before customers add to cart. Use clear language: &quot;Minimum order: 12 units&quot; or &quot;Sold in multiples of 6&quot;. Unclear MOQ communication leads to cart abandonment when customers encounter restrictions at checkout.</p>
                <p className="text-lg text-foreground mb-4">Add MOQ information to your wholesale application page and any wholesale buyer guides.</p>
              </section>
              <section id="exceptions-and-edge-cases" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Exceptions and Edge Cases</h2>
                <p className="text-lg text-foreground mb-4">Consider how to handle mixed carts containing both products with different MOQs. If a customer can meet the MOQ for one product but not another, can they still check out for the products they have met the MOQ for?</p>
                <p className="text-lg text-foreground mb-4">Build your logic to handle these cases explicitly. The simplest approach is per-product MOQ validation with clear error messaging for each product that has not met its minimum.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-b2b" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify B2B</h4><p className="text-sm text-foreground">Full B2B configuration guide</p></Link>
                    <Link href="/guides/how-to-create-shopify-b2b-price-lists" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">B2B Price Lists</h4><p className="text-sm text-foreground">Set up wholesale pricing tiers</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With B2B Configuration?</h2>
          <p className="text-xl text-gray-300 mb-8">We build B2B wholesale portals with MOQs, tiered pricing, and custom ordering workflows for Shopify and Shopify Plus merchants.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
