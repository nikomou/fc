import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Gift Wrapping to Shopify",
  description:
    "Learn how to add a gift wrapping option to your Shopify store. Covers app vs manual approaches, gift note fields, charging for gift wrap, and order fulfilment.",
  alternates: { canonical: "/guides/how-to-create-shopify-gift-wrapping" },
  openGraph: {
    title: "How to Add Gift Wrapping to Shopify",
    description: "Add gift wrapping options to your Shopify store with this step-by-step guide.",
    url: "/guides/how-to-create-shopify-gift-wrapping",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "gift-wrapping-options", title: "Gift Wrapping Options", level: 2 },
  { id: "app-vs-manual", title: "App vs Manual Approach", level: 2 },
  { id: "adding-gift-note-option", title: "Adding a Gift Note Option", level: 2 },
  { id: "charging-for-gift-wrap", title: "Charging for Gift Wrap", level: 2 },
  { id: "order-fulfilment", title: "Order Fulfilment", level: 2 },
  { id: "customer-experience", title: "Customer Experience", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Gift Wrapping to Shopify",
  description: "Add gift wrapping options to your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-create-shopify-gift-wrapping` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Gift Wrapping to Shopify", item: `${siteConfig.url}/guides/how-to-create-shopify-gift-wrapping` },
  ],
};

export default function GiftWrappingGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Products &amp; Collections</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Gift Wrapping to Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Gift wrapping is a simple upsell that increases average order value and improves customer satisfaction, especially during peak gifting seasons. This guide explains the best approaches for adding it to your Shopify store.
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

              <section id="gift-wrapping-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Gift Wrapping Options</h2>
                <p className="text-lg text-foreground mb-4">
                  There are several ways to offer gift wrapping, from a simple free option to a premium paid service with multiple wrapping styles. The right approach depends on your products, margins, and operational capacity.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Free Gift Wrapping</h4>
                    <p className="text-foreground">A checkbox at checkout offering complimentary gift wrapping. Good for gifting-heavy brands where it is expected. Build the cost into your product pricing.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Paid Gift Wrapping Add-on</h4>
                    <p className="text-foreground">A checkbox that adds a fixed price (typically £3-£5) to the order. Works best for brands with higher-value products where customers are already spending significantly.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Multiple Wrapping Styles</h4>
                    <p className="text-foreground">Offer several options at different price points, such as a standard paper wrap at £3 and a luxury box at £8. Requires more operational setup but generates more revenue.</p>
                  </div>
                </div>
              </section>

              <section id="app-vs-manual" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App vs Manual Approach</h2>
                <p className="text-lg text-foreground mb-4">
                  There are two main ways to implement gift wrapping on Shopify. Each has trade-offs around complexity, cost, and reliability.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Using an App</h4>
                    <p className="text-foreground">Apps like Wrapr, Gift Wrap Plus, and Giftit handle the entire flow: the checkbox on the product or cart page, note capture, and order tagging. They typically cost £5-£15 per month. This is the easiest option for merchants without development resources.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Manual via Product + Cart Attributes</h4>
                    <p className="text-foreground">Create a &quot;Gift Wrapping&quot; product priced at your desired cost. Add it to the cart via a theme checkbox using JavaScript. Use cart attributes to store the gift note. This avoids an app but requires theme development skills.</p>
                  </div>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Recommendation</h4>
                  <p className="text-foreground">
                    For most merchants, a £10/month app is the better investment versus development time. However, if you want the gift wrap option deeply integrated into your theme design, a custom implementation gives more control.
                  </p>
                </div>
              </section>

              <section id="adding-gift-note-option" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Adding a Gift Note Option</h2>
                <p className="text-lg text-foreground mb-4">
                  A gift note field lets customers add a personal message to be included with the order. This is separate from gift wrapping and can be offered independently.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Many Shopify themes include a built-in cart note field. This is a generic notes field that appears at the cart page. It works for gift notes but is not specifically labelled as one. To add a dedicated gift note field, either use an app or add a cart attribute field via theme editing.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Gift note content is stored in the order and visible in your admin. Include it in your packing slip template so it is printed and included in the parcel.
                </p>
              </section>

              <section id="charging-for-gift-wrap" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Charging for Gift Wrap</h2>
                <p className="text-lg text-foreground mb-4">
                  When charging for gift wrap, the amount should reflect your actual materials cost plus labour. For a typical small parcel, tissue paper, a ribbon, and 3-4 minutes of wrapping time costs around £1.50-£2.50. Charging £3.95-£4.95 gives a reasonable margin.
                </p>
                <p className="text-lg text-foreground mb-4">
                  VAT applies to gift wrapping services in the UK at the standard 20% rate. Ensure your pricing is VAT-inclusive when displayed to consumers.
                </p>
              </section>

              <section id="order-fulfilment" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Order Fulfilment</h2>
                <p className="text-lg text-foreground mb-4">
                  Gift wrapping adds a step to your fulfilment process. To keep operations smooth, consider the following:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Tag all gift wrap orders in Shopify so they appear as a filtered list in your orders view</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Customise your packing slip to include the gift note prominently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Allocate extra time per gift order in your fulfilment capacity planning, especially in November and December</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Consider a cut-off deadline for gift wrapping during peak periods</span>
                  </li>
                </ul>
              </section>

              <section id="customer-experience" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Experience</h2>
                <p className="text-lg text-foreground mb-4">
                  The best gift wrapping implementations make the option easy to find and clearly explain what the customer will receive. Avoid burying the option deep in the cart page or making it unclear whether the note is included in the price.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Include a photo of your gift wrapping on the product page and cart page. Customers who can see what they are buying are more likely to add it. For premium brands, gift presentation photography can be a strong conversion driver.
                </p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-upsells" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Upsells</h4>
                      <p className="text-sm text-foreground">Increase average order value</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-gift-cards" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Gift Cards</h4>
                      <p className="text-sm text-foreground">Sell gift cards alongside gift wrap</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Improve Your Gifting Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can implement gift wrapping, gift notes, and personalisation features that delight customers and increase order value.
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
