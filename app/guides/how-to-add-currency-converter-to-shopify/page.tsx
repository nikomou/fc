import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Currency Converter to Shopify",
  description:
    "Complete guide to adding multi-currency support to your Shopify store. Learn about Shopify Payments currencies, converters, geolocation, and pricing strategies.",
  alternates: {
    canonical: "/guides/how-to-add-currency-converter-to-shopify",
  },
  openGraph: {
    title: "How to Add Currency Converter to Shopify",
    description: "Complete guide to adding multi-currency support to your Shopify store.",
    url: "/guides/how-to-add-currency-converter-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "multi-currency-overview", title: "Multi-Currency Overview", level: 2 },
  { id: "shopify-payments-currencies", title: "Shopify Payments Currencies", level: 2 },
  { id: "enabling-currencies", title: "Enabling Currencies", level: 2 },
  { id: "currency-selector", title: "Currency Selector", level: 2 },
  { id: "geolocation", title: "Geolocation", level: 2 },
  { id: "pricing-strategies", title: "Pricing Strategies", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Currency Converter to Shopify",
  description: "Complete guide to adding multi-currency support to your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-currency-converter-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Currency Converter to Shopify", item: `${siteConfig.url}/guides/how-to-add-currency-converter-to-shopify` },
  ],
};

export default function ShopifyCurrencyConverterGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">International</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Currency Converter to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Showing prices in local currencies increases trust and conversion rates. This guide covers enabling multi-currency, adding selectors, and optimising your currency strategy.
            </p>

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

              <section id="multi-currency-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Multi-Currency Overview</h2>
                <p className="text-lg text-foreground mb-4">
                  Multi-currency allows customers to browse and pay in their local currency. This removes a major friction point for international shoppers who would otherwise need to mentally convert prices.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Shopify supports multi-currency natively through Shopify Payments and Markets. Customers see prices in their currency throughout the store and pay without needing to worry about exchange rate surprises.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Multi-Currency Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Higher conversion</strong> when customers see familiar currencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reduced cart abandonment</strong> from currency confusion at checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Improved trust</strong> with professional, localised experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>No chargebacks</strong> from exchange rate disputes</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="shopify-payments-currencies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify Payments Currencies</h2>
                <p className="text-lg text-foreground mb-4">
                  Multi-currency is powered by Shopify Payments. When enabled, you can accept payments in multiple currencies while receiving payouts in your default currency.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">How It Works</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Customer Pays in Their Currency</h4>
                    <p className="text-foreground">The customer sees prices and pays in EUR, USD, or another enabled currency. The exact amount is charged to their card.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Shopify Converts the Payment</h4>
                    <p className="text-foreground">Shopify handles the currency conversion behind the scenes using competitive exchange rates.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">You Receive Your Currency</h4>
                    <p className="text-foreground">You receive the payout in your default currency (GBP for UK stores). A small conversion fee (1-2%) is included in the rate.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Currency Fee</h4>
                  <p className="text-foreground">
                    Shopify charges a currency conversion fee (typically 1.5%) on top of standard processing fees. This is competitive compared to traditional payment gateways.
                  </p>
                </div>
              </section>

              <section id="enabling-currencies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Enabling Currencies</h2>
                <p className="text-lg text-foreground mb-4">
                  Currencies are enabled through Shopify Markets. Each market can have its own currency settings.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step-by-Step Setup</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Verify Shopify Payments</strong>
                      <p className="text-foreground mt-1">Multi-currency requires Shopify Payments. Go to Settings → Payments to confirm it&apos;s active.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Access Markets</strong>
                      <p className="text-foreground mt-1">Go to Settings → Markets. You&apos;ll see your primary market and any additional markets you&apos;ve created.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Edit Market Settings</strong>
                      <p className="text-foreground mt-1">Click on a market and scroll to &quot;Currency and pricing&quot;. Select the local currency for that market.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Conversion</strong>
                      <p className="text-foreground mt-1">Choose automatic conversion (exchange rate based) or manual pricing (fixed prices per currency).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Set Rounding Rules</strong>
                      <p className="text-foreground mt-1">Configure how converted prices are rounded (e.g., to .99 or .00) for cleaner pricing.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="currency-selector" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Currency Selector</h2>
                <p className="text-lg text-foreground mb-4">
                  A currency selector lets customers manually choose their preferred currency. Most modern Shopify themes include this built-in, or you can add it manually.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Theme Currency Selector</h3>
                <p className="text-lg text-foreground mb-4">
                  Check if your theme has a built-in currency selector:
                </p>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Online Store → Themes → Customise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Look in Header or Footer settings for &quot;Currency selector&quot; or &quot;Country/region selector&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enable it and configure display options</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Currency Selector Apps</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Shopify Geolocation App (Free)</h4>
                    <p className="text-foreground">Official Shopify app that detects customer location and suggests their local currency. Includes a customisable selector popup.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Currency Converter Plus</h4>
                    <p className="text-foreground">Third-party app with advanced styling options and flags. Shows converted prices alongside original if needed.</p>
                  </div>
                </div>
              </section>

              <section id="geolocation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Geolocation</h2>
                <p className="text-lg text-foreground mb-4">
                  Geolocation automatically detects the customer&apos;s location and presents the appropriate currency and language. This creates a seamless experience without requiring manual selection.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Geolocation Features</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Auto-detection:</strong> Identifies country from IP address</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Suggestion popup:</strong> Asks if customer wants to switch to their local version</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Auto-redirect:</strong> Automatically redirects to the appropriate market</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Remembers preference:</strong> Stores customer&apos;s choice for return visits</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Setting Up Geolocation</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Install the Geolocation app from the Shopify App Store</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Configure the popup design and behaviour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Choose between suggestion popup or auto-redirect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Test from different locations (use VPN or browserstack)</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use suggestion popups rather than auto-redirects. Auto-redirect can frustrate customers who intentionally want to shop in a different currency (e.g., expats, gift buyers).
                  </p>
                </div>
              </section>

              <section id="pricing-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Pricing Strategies</h2>
                <p className="text-lg text-foreground mb-4">
                  How you set international prices significantly impacts both margin and conversion. Consider these strategies.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Pure Exchange Rate</h3>
                    <p className="text-foreground mb-2">Let Shopify convert prices automatically based on live rates.</p>
                    <p className="text-sm text-foreground"><strong>Pros:</strong> Simple, always current. <strong>Cons:</strong> Prices fluctuate, may look odd (£43.27).</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Exchange Rate + Rounding</h3>
                    <p className="text-foreground mb-2">Auto-convert then round to attractive prices (.99, .00).</p>
                    <p className="text-sm text-foreground"><strong>Pros:</strong> Clean prices, minimal effort. <strong>Cons:</strong> Slight margin variance.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Exchange Rate + Adjustment</h3>
                    <p className="text-foreground mb-2">Auto-convert then add a percentage (e.g., +10%) to cover conversion fees and international costs.</p>
                    <p className="text-sm text-foreground"><strong>Pros:</strong> Protects margin. <strong>Cons:</strong> Higher prices in some markets.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Fixed Manual Pricing</h3>
                    <p className="text-foreground mb-2">Set specific prices for each currency using price lists.</p>
                    <p className="text-sm text-foreground"><strong>Pros:</strong> Full control, strategic pricing. <strong>Cons:</strong> Requires ongoing management.</p>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices for effective multi-currency implementation.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Currency Converter Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Prioritise key markets:</strong> Focus on currencies for your highest-volume markets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Use rounding:</strong> Clean prices look more professional and trustworthy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Test checkout:</strong> Verify the full checkout flow works correctly in each currency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Show currency symbol:</strong> Display the currency symbol clearly (£, $, €) not just the code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Consider duties:</strong> Factor in duties when setting international prices</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-sell-internationally-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">International Selling →</h4>
                      <p className="text-sm text-foreground">Complete international guide</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-markets" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Markets →</h4>
                      <p className="text-sm text-foreground">Detailed Markets setup</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Multi-Currency Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can configure multi-currency, implement currency selectors, set up geolocation, and optimise your international pricing strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
