import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Improve Shopify Checkout Conversion",
  description: "Learn how to improve checkout conversion on Shopify. Covers payment options, trust signals, express checkout, abandoned cart recovery, and Plus customisation.",
  alternates: { canonical: "/guides/how-to-improve-shopify-checkout-conversion" },
  openGraph: {
    title: "How to Improve Shopify Checkout Conversion",
    description: "Learn how to improve checkout conversion on Shopify. Covers payment options, trust signals, express checkout, abandoned cart recovery, and Plus customisation.",
    url: "/guides/how-to-improve-shopify-checkout-conversion",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "checkout-conversion-benchmarks", title: "Checkout Conversion Benchmarks", level: 2 },
  { id: "reducing-form-fields", title: "Reducing Form Fields", level: 2 },
  { id: "payment-options", title: "Payment Options", level: 2 },
  { id: "trust-signals-at-checkout", title: "Trust Signals at Checkout", level: 2 },
  { id: "express-checkout", title: "Express Checkout", level: 2 },
  { id: "abandoned-checkout-recovery", title: "Abandoned Checkout Recovery", level: 2 },
  { id: "plus-checkout-customisation", title: "Plus Checkout Customisation", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Improve Shopify Checkout Conversion",
  description: "Learn how to improve checkout conversion on Shopify. Covers reducing form fields, payment options, trust signals, express checkout, abandoned checkout recovery, and Plus customisation.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-improve-shopify-checkout-conversion` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Improve Shopify Checkout Conversion", item: `${siteConfig.url}/guides/how-to-improve-shopify-checkout-conversion` },
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
                <span>18 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Improve Shopify Checkout Conversion
            </h1>
            <p className="text-xl text-foreground mb-8">
              The average Shopify checkout abandonment rate is 70%. Small improvements to your checkout flow can recover significant revenue. This guide covers every lever you can pull to increase the percentage of customers who complete their purchase.
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

              <section id="checkout-conversion-benchmarks" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Conversion Benchmarks</h2>
                <p className="text-lg text-foreground mb-4">A typical Shopify checkout converts at 15-30% of sessions that reach it. Top-performing stores achieve 35-45%. The gap is usually explained by payment options, trust signals, and friction in the form.</p>
                <p className="text-lg text-foreground mb-4">UK-specific benchmarks vary by sector. Fashion averages around 20-25% checkout conversion. Beauty and health products typically convert better at 28-35%, partly because purchases are more intentional. Electronics and high-ticket items often convert lower at 12-18% due to longer consideration periods.</p>
              </section>
              <section id="reducing-form-fields" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Reducing Form Fields</h2>
                <p className="text-lg text-foreground mb-4">Every additional field in your checkout form increases abandonment. Shopify&apos;s standard checkout requires name, email, address, and payment details. You cannot remove these, but you can minimise friction around them.</p>
                <p className="text-lg text-foreground mb-4">Enable address autocomplete by ensuring your theme and checkout settings support it. Shopify&apos;s checkout uses Google&apos;s address API for autocomplete on supported plans. This reduces the number of keystrokes required and prevents address errors that lead to failed deliveries.</p>
                <p className="text-lg text-foreground mb-4">Remove the &apos;Company name&apos; field if you do not need it for B2B. Remove &apos;Address line 2&apos; or make it less prominent. These fields are rarely used and add visual clutter.</p>
              </section>
              <section id="payment-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Payment Options</h2>
                <p className="text-lg text-foreground mb-4">Offering the right payment methods is one of the highest-impact checkout improvements. UK shoppers expect: credit and debit card, PayPal, Apple Pay, Google Pay, and buy now pay later (Klarna or Clearpay).</p>
                <p className="text-lg text-foreground mb-4">Buy now pay later adoption in the UK reached 17% of online purchases in 2024. Offering Klarna or Clearpay can convert customers who would otherwise abandon due to budget constraints, particularly for purchases over £50.</p>
              </section>
              <section id="trust-signals-at-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Trust Signals at Checkout</h2>
                <p className="text-lg text-foreground mb-4">Customers are sharing payment details at checkout, so trust signals matter more here than anywhere else on your store. Key trust elements include: SSL padlock (automatic with Shopify), payment provider logos, security badges, and a clear returns policy summary.</p>
                <p className="text-lg text-foreground mb-4">On Shopify Plus, you can add custom content to the checkout via checkout extensions. Use this to add a short reassurance message, free shipping reminder, or returns guarantee near the payment section.</p>
              </section>
              <section id="express-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Express Checkout</h2>
                <p className="text-lg text-foreground mb-4">Express checkout options (Shop Pay, Apple Pay, Google Pay) allow customers to complete a purchase in two taps, skipping the full form. Enable these in Shopify Settings under Payments. Displaying them on the product page as well as the cart reduces steps to purchase.</p>
                <p className="text-lg text-foreground mb-4">Shop Pay, Shopify&apos;s own express checkout, has the highest conversion rate of any accelerated checkout option. Customers who have used Shop Pay elsewhere have their details pre-filled, reducing checkout to a single confirmation step.</p>
              </section>
              <section id="abandoned-checkout-recovery" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Abandoned Checkout Recovery</h2>
                <p className="text-lg text-foreground mb-4">Shopify sends automated abandoned checkout emails for customers who start checkout and do not complete it. Enable this under Settings, then Checkout, then Order Processing. The default timing is 10 hours after abandonment.</p>
                <p className="text-lg text-foreground mb-4">A three-email recovery sequence performs better than a single email: send at 1 hour (reminder), 24 hours (reminder with social proof), and 72 hours (optional small discount). A well-configured abandonment sequence typically recovers 5-15% of abandoned checkouts.</p>
              </section>
              <section id="plus-checkout-customisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Plus Checkout Customisation</h2>
                <p className="text-lg text-foreground mb-4">Shopify Plus merchants have access to checkout extensibility, which allows adding custom fields, UI components, and branding elements to the checkout. This includes custom delivery instructions fields, loyalty point displays, and custom upsells.</p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-reduce-shopify-cart-abandonment" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Reduce Cart Abandonment</h4><p className="text-sm text-foreground">Recover more abandoned carts</p></Link>
                    <Link href="/guides/how-to-add-trust-badges-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Trust Badges</h4><p className="text-sm text-foreground">Build customer confidence</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need to Improve Your Checkout Conversion?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our CRO team audits your checkout flow and implements evidence-based improvements that recover revenue from drop-off.
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
