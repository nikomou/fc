import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Configure Shopify Checkout",
  description: "Complete guide to configuring your Shopify checkout for maximum conversions. Covers express checkout, guest checkout, customisation, and Shopify Plus options.",
  alternates: { canonical: "/guides/how-to-configure-shopify-checkout" },
  openGraph: {
    title: "How to Configure Shopify Checkout",
    description: "Complete guide to configuring your Shopify checkout for maximum conversions.",
    url: "/guides/how-to-configure-shopify-checkout",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "checkout-overview", title: "Checkout Overview", level: 2 },
  { id: "basic-settings", title: "Basic Settings", level: 2 },
  { id: "express-checkout", title: "Express Checkout", level: 2 },
  { id: "guest-checkout", title: "Guest Checkout", level: 2 },
  { id: "checkout-customisation", title: "Checkout Customisation", level: 2 },
  { id: "shopify-plus-options", title: "Shopify Plus Options", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Configure Shopify Checkout",
  description: "Complete guide to configuring your Shopify checkout for maximum conversions.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-configure-shopify-checkout` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Configure Shopify Checkout", item: `${siteConfig.url}/guides/how-to-configure-shopify-checkout` },
  ],
};

export default function ConfigureCheckoutGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Store Setup</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Configure Shopify Checkout</h1>
            <p className="text-xl text-foreground mb-8">Your checkout is where sales happen. This guide covers every setting and optimisation to maximise your conversion rate.</p>
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="checkout-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Overview</h2>
                <p className="text-lg text-foreground mb-4">Shopify&apos;s checkout is one of the most tested and optimised in e-commerce. It handles millions of transactions daily and is continuously improved based on conversion data from across the platform.</p>
                <p className="text-lg text-foreground mb-6">While you cannot completely redesign the checkout on standard Shopify plans, you have significant control over settings, branding, and the customer experience.</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">What You Can Configure</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Customer account requirements</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Express checkout options (Shop Pay, Apple Pay, etc.)</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Form fields and contact methods</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Branding, colours, and typography</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Order processing and fulfilment settings</span></li>
                  </ul>
                </div>
              </section>

              <section id="basic-settings" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Basic Settings</h2>
                <p className="text-lg text-foreground mb-4">Access checkout settings via Settings → Checkout in your Shopify admin. Here you configure the fundamental behaviour of your checkout.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Customer Contact Method</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Email only:</strong> Most common, works for all marketing integrations</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Phone or email:</strong> Good for SMS marketing, but adds friction</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Email and phone:</strong> Maximum data but highest friction</span></li>
                </ul>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Recommendation</h4>
                  <p className="text-foreground">Start with email only. You can always collect phone numbers through post-purchase surveys or marketing popups without adding checkout friction.</p>
                </div>
              </section>

              <section id="express-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Express Checkout</h2>
                <p className="text-lg text-foreground mb-4">Express checkout options let customers complete purchases in seconds using saved payment and shipping details. They dramatically improve mobile conversion rates.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shop Pay</h3>
                    <p className="text-foreground text-sm">Shopify&apos;s accelerated checkout. Stores payment details across all Shopify stores. 1.72x higher conversion rate on average.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Apple Pay</h3>
                    <p className="text-foreground text-sm">Essential for iOS users. Uses Face ID or Touch ID. Enable via Shopify Payments settings.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Google Pay</h3>
                    <p className="text-foreground text-sm">For Android users and Chrome users on desktop. Automatically enabled with Shopify Payments.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">PayPal</h3>
                    <p className="text-foreground text-sm">Still preferred by many customers. Shows as express option when PayPal is enabled.</p>
                  </div>
                </div>
              </section>

              <section id="guest-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Guest Checkout</h2>
                <p className="text-lg text-foreground mb-4">Requiring account creation is one of the top reasons for cart abandonment. 26% of customers abandon when forced to create an account.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Account Options</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span><strong>Accounts are optional:</strong> Best for conversion. Customers can checkout as guest or create account.</span></li>
                  <li className="flex items-start gap-3"><span className="text-red-500 font-bold">×</span><span><strong>Accounts are required:</strong> Only use if you have a strong reason (B2B, memberships, subscriptions).</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Accounts are disabled:</strong> No customer accounts at all. Rare, but simplifies some business models.</span></li>
                </ul>
              </section>

              <section id="checkout-customisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Customisation</h2>
                <p className="text-lg text-foreground mb-4">Customise your checkout&apos;s appearance to match your brand. Go to Settings → Checkout → Customise checkout.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Branding Options</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Logo:</strong> Appears at the top of checkout. Use a high-resolution version.</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Colours:</strong> Accent colour for buttons and links. Background colours for different sections.</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Typography:</strong> Choose from available font options or use system fonts.</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Favicon:</strong> Shows in browser tab during checkout.</span></li>
                </ul>
              </section>

              <section id="shopify-plus-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify Plus Options</h2>
                <p className="text-lg text-foreground mb-4">Shopify Plus merchants get additional checkout customisation capabilities through checkout extensibility.</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Plus-Only Features</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Custom checkout UI extensions</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Shopify Functions for custom discounts and shipping</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Post-purchase upsells</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Custom payment and delivery options</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Advanced B2B checkout flows</span></li>
                  </ul>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div><strong className="text-foreground-dark">Enable all express checkout options</strong><p className="mt-1">More options means more customers can use their preferred method.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div><strong className="text-foreground-dark">Keep guest checkout available</strong><p className="mt-1">Never force account creation unless absolutely necessary.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div><strong className="text-foreground-dark">Minimise form fields</strong><p className="mt-1">Only collect information you truly need.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div><strong className="text-foreground-dark">Match your brand</strong><p className="mt-1">Consistent branding builds trust through the checkout process.</p></div>
                  </li>
                </ol>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-improve-shopify-checkout-conversion" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Improve Checkout Conversion →</h4>
                      <p className="text-sm text-foreground">Increase purchase completion rates</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-payments" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify Payments →</h4>
                      <p className="text-sm text-foreground">Payment configuration guide</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Checkout Help?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team can optimise your checkout for maximum conversions and implement advanced customisations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
