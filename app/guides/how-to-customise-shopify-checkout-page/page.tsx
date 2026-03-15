import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Customise the Shopify Checkout Page",
  description: "Learn how to customise the Shopify checkout page. Covers branding basics, custom fields, checkout scripts for Plus, checkout extensibility, and testing changes.",
  alternates: { canonical: "/guides/how-to-customise-shopify-checkout-page" },
  openGraph: {
    title: "How to Customise the Shopify Checkout Page",
    description: "Learn how to customise the Shopify checkout page. Covers branding basics, custom fields, checkout scripts for Plus, checkout extensibility, and testing changes.",
    url: "/guides/how-to-customise-shopify-checkout-page",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "checkout-customisation-limits", title: "Customisation Limits", level: 2 },
  { id: "branding-your-checkout", title: "Branding Your Checkout", level: 2 },
  { id: "adding-custom-fields", title: "Adding Custom Fields", level: 2 },
  { id: "checkout-scripts-plus", title: "Checkout Scripts (Plus)", level: 2 },
  { id: "checkout-extensibility", title: "Checkout Extensibility", level: 2 },
  { id: "testing-changes", title: "Testing Changes", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Customise the Shopify Checkout Page",
  description: "Learn how to customise the Shopify checkout page. Covers branding basics, custom fields, checkout scripts for Plus, checkout extensibility, and testing changes.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-customise-shopify-checkout-page` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Customise the Shopify Checkout Page", item: `${siteConfig.url}/guides/how-to-customise-shopify-checkout-page` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Theme &amp; Design</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Customise the Shopify Checkout Page</h1>
            <p className="text-xl text-foreground mb-8">The checkout is where revenue is made or lost. Shopify controls most of the checkout experience for good reason: consistency builds trust. But within those constraints, there is meaningful room to customise. This guide covers what you can change and how.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
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
              <section id="checkout-customisation-limits" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customisation Limits</h2>
                <p className="text-lg text-foreground mb-4">Shopify restricts checkout customisation significantly on standard plans. You can change colours, fonts, and add a logo. You cannot change the checkout layout, add custom JavaScript, or modify form fields on standard plans.</p>
                <p className="text-lg text-foreground mb-4">Shopify Plus merchants have access to checkout.liquid (legacy) and checkout extensibility (current), which allow significantly more customisation including custom UI components, additional fields, and post-purchase pages.</p>

              </section>
              <section id="branding-your-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Branding Your Checkout</h2>
                <p className="text-lg text-foreground mb-4">Even on standard plans, you can apply your brand colours, logo, and typography to the checkout. Go to Settings, then Checkout, and scroll to Style. Upload your logo, set your brand colour, and choose whether to use a background image or colour.</p>
                <p className="text-lg text-foreground mb-4">Use your primary brand colour as the checkout accent colour (the colour of buttons and links). Ensure there is sufficient contrast with white text for accessibility compliance.</p>

              </section>
              <section id="adding-custom-fields" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Adding Custom Fields</h2>
                <p className="text-lg text-foreground mb-4">Shopify Plus merchants can add custom fields to the checkout using checkout extensibility. Common use cases: a gift message field, a company name field for B2B orders, a delivery preference field, or a &apos;how did you hear about us&apos; survey question.</p>
                <p className="text-lg text-foreground mb-4">Custom fields data is stored as order attributes and is visible in the order detail view in your admin.</p>

              </section>
              <section id="checkout-scripts-plus" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Scripts (Plus)</h2>
                <p className="text-lg text-foreground mb-4">Shopify Scripts (available on Plus) allow custom Ruby scripts to modify line item prices, shipping options, and payment methods. These are being deprecated in favour of Shopify Functions. If you are currently using Scripts, plan your migration to Functions.</p>
                <p className="text-lg text-foreground mb-4">Common script uses: tiered discount logic, B2B pricing rules, hiding payment methods for specific customer groups, and shipping rate filtering.</p>

              </section>
              <section id="checkout-extensibility" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Extensibility</h2>
                <p className="text-lg text-foreground mb-4">Checkout Extensibility is the modern Plus customisation system using checkout UI extensions. Extensions are React components that render within defined extension points in the checkout. They can display custom content, collect additional information, and respond to checkout state changes.</p>
                <p className="text-lg text-foreground mb-4">Key extension points: above the order summary, below the shipping method, above and below the payment section, and the post-purchase page.</p>

              </section>
              <section id="testing-changes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Changes</h2>
                <p className="text-lg text-foreground mb-4">Use a test payment gateway (Bogus Gateway in developer settings) to place test orders and verify your checkout changes display correctly. Test with and without discount codes, with multiple items, and with different shipping regions.</p>
                <p className="text-lg text-foreground mb-4">For Plus merchants using checkout extensions, use Shopify&apos;s checkout preview functionality to test extensions before publishing them to live traffic.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-improve-shopify-checkout-conversion" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Improve Checkout Conversion</h4><p className="text-sm text-foreground">Convert more checkout visitors</p></Link>
                    <Link href="/guides/how-to-customise-shopify-plus-checkout" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Plus Checkout Customisation</h4><p className="text-sm text-foreground">Advanced Plus checkout options</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need a Customised Checkout?</h2>
          <p className="text-xl text-gray-300 mb-8">We build custom checkout experiences for Shopify Plus brands, from branded styling to custom fields and post-purchase pages.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
