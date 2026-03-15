import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Customise Shopify Plus Checkout",
  description: "Learn how to customise the Shopify Plus checkout. Covers checkout.liquid, checkout extensibility, branding, custom fields, post-purchase pages, and testing.",
  alternates: { canonical: "/guides/how-to-customise-shopify-plus-checkout" },
  openGraph: {
    title: "How to Customise Shopify Plus Checkout",
    description: "Learn how to customise the Shopify Plus checkout. Covers checkout.liquid, checkout extensibility, branding, custom fields, post-purchase pages, and testing.",
    url: "/guides/how-to-customise-shopify-plus-checkout",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "checkout-customisation-options", title: "Customisation Options", level: 2 },
  { id: "checkout-liquid", title: "Checkout Liquid", level: 2 },
  { id: "checkout-extensibility", title: "Checkout Extensibility", level: 2 },
  { id: "branding-checkout", title: "Branding Checkout", level: 2 },
  { id: "custom-fields", title: "Custom Fields", level: 2 },
  { id: "post-purchase-pages", title: "Post-Purchase Pages", level: 2 },
  { id: "testing-and-qa", title: "Testing and QA", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Customise Shopify Plus Checkout",
  description: "Learn how to customise the Shopify Plus checkout. Covers checkout.liquid, checkout extensibility, branding, custom fields, post-purchase pages, and testing.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-customise-shopify-plus-checkout` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Customise Shopify Plus Checkout", item: `${siteConfig.url}/guides/how-to-customise-shopify-plus-checkout` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>18 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Customise Shopify Plus Checkout</h1>
            <p className="text-xl text-foreground mb-8">Shopify Plus gives merchants unprecedented control over the checkout experience. From branded designs to custom fields and post-purchase upsells, this guide covers every customisation option available to Plus merchants.</p>
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
              <section id="checkout-customisation-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customisation Options</h2>
                <p className="text-lg text-foreground mb-4">Plus merchants have access to two checkout customisation systems: the legacy checkout.liquid (being deprecated), and the modern Checkout Extensibility platform. Shopify has announced that checkout.liquid will be sunset, so all new customisation work should use Checkout Extensibility.</p>
                <p className="text-lg text-foreground mb-4">Checkout Extensibility uses React-based UI extensions that render within defined extension points in the checkout, and checkout branding settings that apply visual customisation via the editor.</p>
              </section>
              <section id="checkout-liquid" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Liquid</h2>
                <p className="text-lg text-foreground mb-4">Checkout.liquid is a Liquid template file unique to Plus that allows full HTML and CSS modifications to the checkout. If you are currently using it, your customisations will continue to work until Shopify&apos;s sunset deadline, but no new development should be done in checkout.liquid.</p>
                <p className="text-lg text-foreground mb-4">Migrate existing checkout.liquid customisations to Checkout Extensibility. Most visual customisations (colours, fonts, logos) can be replicated via the Checkout Editor without code.</p>
              </section>
              <section id="checkout-extensibility" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Extensibility</h2>
                <p className="text-lg text-foreground mb-4">Checkout Extensibility is the current Plus checkout customisation platform. It consists of: checkout UI extensions (React components that add content to the checkout), post-purchase extensions (UI on the order confirmation page), and checkout branding settings (visual customisation via Shopify admin).</p>
                <p className="text-lg text-foreground mb-4">Extensions are deployed as Shopify app extensions. You can build them as a custom app for your store, or use third-party apps like ReConvert.</p>
              </section>
              <section id="branding-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Branding Checkout</h2>
                <p className="text-lg text-foreground mb-4">In Shopify admin, go to Settings, then Checkout, then Customise. The visual editor allows you to change: logo, colours, typography, and corner radius of UI elements.</p>
                <p className="text-lg text-foreground mb-4">A fully branded checkout that matches your store design increases trust and reduces abandonment by removing the jarring transition from your custom-designed store to a generic-looking checkout.</p>
              </section>
              <section id="custom-fields" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Custom Fields</h2>
                <p className="text-lg text-foreground mb-4">Use Checkout UI extensions to add custom fields: gift message field, business registration number, delivery instructions, or a &apos;how did you hear about us?&apos; survey. Custom field values are saved as order attributes and visible in the order detail.</p>
                <p className="text-lg text-foreground mb-4">Keep custom fields minimal. Every additional field adds friction.</p>
              </section>
              <section id="post-purchase-pages" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Post-Purchase Pages</h2>
                <p className="text-lg text-foreground mb-4">The post-purchase page (order confirmation) is a prime location for upsells and data collection. Shopify Plus merchants can add UI extensions to the thank you page: a one-click upsell offer, a survey, a loyalty programme enrolment prompt, or a referral programme share widget.</p>
                <p className="text-lg text-foreground mb-4">Post-purchase upsells on the thank you page have high acceptance rates because there is no additional payment friction.</p>
              </section>
              <section id="testing-and-qa" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing and QA</h2>
                <p className="text-lg text-foreground mb-4">Test all checkout customisations with real test orders using Shopify&apos;s Bogus Gateway payment method. Test edge cases: orders with discount codes, orders with multiple shipping zones, orders from B2B customers with different tax settings.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-plus-scripts" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Scripts</h4><p className="text-sm text-foreground">Checkout logic with Scripts</p></Link>
                    <Link href="/guides/how-to-improve-shopify-checkout-conversion" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Improve Checkout Conversion</h4><p className="text-sm text-foreground">Conversion optimisation for checkout</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Plus Checkout?</h2>
          <p className="text-xl text-gray-300 mb-8">We build Checkout Extensibility solutions for Shopify Plus brands, from branded designs to custom fields and post-purchase upsell flows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
