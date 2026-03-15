import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Upsells on Shopify",
  description: "Learn how to set up upsells on Shopify to increase average order value. Covers placement strategies, native options, apps, copywriting, and measuring revenue impact.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-upsells" },
  openGraph: {
    title: "How to Set Up Upsells on Shopify",
    description: "Learn how to set up upsells on Shopify to increase average order value. Covers placement strategies, native options, apps, copywriting, and measuring revenue impact.",
    url: "/guides/how-to-set-up-shopify-upsells",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "upsell-vs-cross-sell", title: "Upsell vs Cross-Sell", level: 2 },
  { id: "where-to-place-upsells", title: "Where to Place Upsells", level: 2 },
  { id: "native-shopify-options", title: "Native Shopify Options", level: 2 },
  { id: "app-options", title: "App Options", level: 2 },
  { id: "writing-upsell-copy", title: "Writing Upsell Copy", level: 2 },
  { id: "measuring-upsell-revenue", title: "Measuring Upsell Revenue", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Upsells on Shopify",
  description: "Learn how to set up upsells on Shopify to increase average order value. Covers placement strategies, native options, apps, copywriting, and measuring revenue impact.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-upsells` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Upsells on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-upsells` },
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
                <span>14 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Upsells on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Upsells are one of the highest-ROI tactics available to Shopify merchants. Done well, they increase average order value without adding acquisition cost. This guide covers how to set them up correctly.
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

              <section id="upsell-vs-cross-sell" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Upsell vs Cross-Sell</h2>
                <p className="text-lg text-foreground mb-4">An upsell encourages a customer to buy a higher-value version of what they are already purchasing. A cross-sell suggests a complementary product. Both increase order value but work differently.</p>
                <p className="text-lg text-foreground mb-4">For a customer buying a leather wallet, an upsell would be a premium version with extra card slots at £10 more. A cross-sell would be a matching card holder or belt. Understanding this distinction helps you place the right offer at the right moment.</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">When Each Works Best</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Upsells:</strong> Best on product pages before add to cart, when customers are still deciding which version to buy</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Cross-sells:</strong> Best on cart page or post-purchase, when the primary purchase decision is already made</span></li>
                  </ul>
                </div>
              </section>
              <section id="where-to-place-upsells" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Where to Place Upsells</h2>
                <p className="text-lg text-foreground mb-4">Placement has a significant impact on upsell conversion rates. The four primary locations are: product page (before add to cart), cart page (before checkout), in-checkout (for Shopify Plus), and post-purchase (after payment).</p>
                <p className="text-lg text-foreground mb-4">Product page upsells perform well for version upgrades and bundles. Cart page upsells work for add-ons that complement the cart contents. Post-purchase upsells have the highest acceptance rate because no payment friction is involved: the customer adds to their existing order without re-entering payment details.</p>
              </section>
              <section id="native-shopify-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Native Shopify Options</h2>
                <p className="text-lg text-foreground mb-4">Shopify&apos;s native product recommendations API can display related products on product pages. It uses purchase history and product similarity to suggest relevant items. Enable it via your theme settings under the product page template.</p>
                <p className="text-lg text-foreground mb-4">For more targeted upsells, you need an app. The native recommendations are good for cross-sells but do not support the kind of configured upsell funnels that drive the most revenue.</p>
              </section>
              <section id="app-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Options</h2>
                <p className="text-lg text-foreground mb-4">The leading upsell apps for UK Shopify merchants are ReConvert (post-purchase), CartHook (in-checkout for Plus), and Frequently Bought Together (product page bundles). ReConvert is the most widely used, with strong post-purchase upsell flows that typically add 3-7% to revenue.</p>
              </section>
              <section id="writing-upsell-copy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Writing Upsell Copy</h2>
                <p className="text-lg text-foreground mb-4">Upsell copy needs to answer one question: why should I add this? Focus on the benefit, not the product. &quot;Complete the set and save 15%&quot; outperforms &quot;You might also like&quot; every time.</p>
                <p className="text-lg text-foreground mb-4">Keep upsell headlines to 5-7 words. Use social proof where possible: &quot;83% of customers also take this&quot; is a compelling nudge. State the discount or saving clearly.</p>
              </section>
              <section id="measuring-upsell-revenue" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Measuring Upsell Revenue</h2>
                <p className="text-lg text-foreground mb-4">Track upsell acceptance rate (percentage of customers who take the offer) and incremental revenue per order. Most upsell apps provide this data in their dashboards. A good post-purchase upsell acceptance rate is 8-15%.</p>
                <p className="text-lg text-foreground mb-4">Compare average order value in the period before and after implementing upsells, controlling for seasonal variation. This gives you the clearest picture of impact.</p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-add-shopify-product-recommendations" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Recommendations</h4><p className="text-sm text-foreground">Add automated product suggestions</p></Link>
                    <Link href="/guides/how-to-improve-shopify-checkout-conversion" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Conversion</h4><p className="text-sm text-foreground">Reduce drop-off at checkout</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Increase Your Average Order Value?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team sets up upsell flows, product recommendation engines, and post-purchase offers that generate measurable revenue lifts.
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
