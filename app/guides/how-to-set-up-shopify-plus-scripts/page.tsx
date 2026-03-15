import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Scripts (Plus)",
  description: "Learn how to set up Shopify Scripts on Plus. Covers Script Editor, line item scripts, shipping scripts, payment scripts, testing, and migration to Shopify Functions.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-plus-scripts" },
  openGraph: {
    title: "How to Set Up Shopify Scripts (Plus)",
    description: "Learn how to set up Shopify Scripts on Plus. Covers Script Editor, line item scripts, shipping scripts, payment scripts, testing, and migration to Shopify Functions.",
    url: "/guides/how-to-set-up-shopify-plus-scripts",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-shopify-scripts", title: "What Are Shopify Scripts", level: 2 },
  { id: "script-editor-overview", title: "Script Editor Overview", level: 2 },
  { id: "line-item-scripts", title: "Line Item Scripts", level: 2 },
  { id: "shipping-scripts", title: "Shipping Scripts", level: 2 },
  { id: "payment-scripts", title: "Payment Scripts", level: 2 },
  { id: "testing-scripts", title: "Testing Scripts", level: 2 },
  { id: "scripts-vs-functions", title: "Scripts vs Functions", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Scripts (Plus)",
  description: "Learn how to set up Shopify Scripts on Plus. Covers Script Editor, line item scripts, shipping scripts, payment scripts, testing, and migration to Shopify Functions.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-plus-scripts` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Scripts (Plus)", item: `${siteConfig.url}/guides/how-to-set-up-shopify-plus-scripts` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shopify Plus</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>16 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Shopify Scripts (Plus)</h1>
            <p className="text-xl text-foreground mb-8">Shopify Scripts allow Plus merchants to write custom Ruby code that modifies prices, shipping options, and payment methods at checkout. They are being phased out in favour of Shopify Functions but remain in use across thousands of Plus stores.</p>
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
              <section id="what-are-shopify-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Are Shopify Scripts</h2>
                <p className="text-lg text-foreground mb-4">Shopify Scripts are small Ruby programs that run on Shopify&apos;s servers during the checkout process. They can modify the cart before the customer pays: applying discounts, filtering shipping options, hiding payment methods, or implementing complex promotional logic that standard discount codes cannot handle.</p>
                <p className="text-lg text-foreground mb-4">Scripts are exclusively available to Shopify Plus merchants via the Script Editor app.</p>
              </section>
              <section id="script-editor-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Script Editor Overview</h2>
                <p className="text-lg text-foreground mb-4">Install the Script Editor app from the Shopify App Store (it is free for Plus merchants). Scripts are organised by type: Line Item, Shipping, and Payment. Each checkout can run one active script of each type simultaneously.</p>
                <p className="text-lg text-foreground mb-4">The editor provides a code interface with Ruby syntax. Shopify provides starter templates for common use cases. You write the logic, test it with sample cart data, and publish it.</p>
              </section>
              <section id="line-item-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Line Item Scripts</h2>
                <p className="text-lg text-foreground mb-4">Line item scripts modify prices and discounts on individual cart items. Common uses: volume-based discounts (buy 3 get 10% off), tiered pricing for B2B customers (tagged customers get different prices), bundle discounts (buy product A and B together for 15% off), and free gift with purchase logic.</p>
                <p className="text-lg text-foreground mb-4">Example: a script that applies a 15% discount to all items in the cart when the total exceeds £150. This is more flexible than a standard automatic discount because you can apply it conditionally based on complex cart logic.</p>
              </section>
              <section id="shipping-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shipping Scripts</h2>
                <p className="text-lg text-foreground mb-4">Shipping scripts filter and modify shipping options shown to customers. Uses: hide certain shipping methods for products requiring special handling, show only click-and-collect for specific postcodes, rename shipping options to be more customer-friendly, or sort shipping options in a custom order.</p>
                <p className="text-lg text-foreground mb-4">Example: a script that hides standard post as an option when the cart contains a product tagged as &quot;fragile&quot;, ensuring fragile items always use tracked services.</p>
              </section>
              <section id="payment-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Payment Scripts</h2>
                <p className="text-lg text-foreground mb-4">Payment scripts show or hide payment methods based on cart or customer conditions. Uses: hide pay-later options for high-risk order patterns, show specific payment methods only for B2B customers, or hide cash on delivery for orders above a certain value.</p>
                <p className="text-lg text-foreground mb-4">Example: hide Klarna as a payment option when the cart total is below £50, as very small Klarna orders have poor repayment rates and high merchant fees.</p>
              </section>
              <section id="testing-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Scripts</h2>
                <p className="text-lg text-foreground mb-4">The Script Editor includes a test functionality where you can input sample cart data and see how the script transforms it. Test with multiple scenarios: empty cart, single item, bulk quantities, mixed product types, different customer tags.</p>
                <p className="text-lg text-foreground mb-4">Publish scripts to your development theme and test with real purchases before making them live on your production store.</p>
              </section>
              <section id="scripts-vs-functions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Scripts vs Functions</h2>
                <p className="text-lg text-foreground mb-4">Shopify is deprecating Script Editor in favour of Shopify Functions, a more performant and flexible system that runs at the edge rather than on Shopify&apos;s Ruby servers. If you are building new checkout customisations, use Shopify Functions.</p>
                <p className="text-lg text-foreground mb-4">If you have existing scripts, plan your migration to Functions. The logic is typically rewritable in Shopify Functions using JavaScript or TypeScript, but requires development resource.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-customise-shopify-plus-checkout" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Customise Plus Checkout</h4><p className="text-sm text-foreground">Other Plus customisation options</p></Link>
                    <Link href="/guides/how-to-set-up-shopify-flow-automations" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Flow Automations</h4><p className="text-sm text-foreground">Automate without scripts</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Shopify Scripts or Functions?</h2>
          <p className="text-xl text-gray-300 mb-8">Our Plus specialists write, test, and maintain Shopify Scripts and Functions for complex checkout customisation requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
