import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Markets",
  description:
    "Complete guide to setting up Shopify Markets for international selling. Learn about market configuration, pricing strategies, duties, domains, and localisation.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-markets",
  },
  openGraph: {
    title: "How to Set Up Shopify Markets",
    description: "Complete guide to setting up Shopify Markets for international selling.",
    url: "/guides/how-to-set-up-shopify-markets",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-shopify-markets", title: "What Is Shopify Markets", level: 2 },
  { id: "creating-markets", title: "Creating Markets", level: 2 },
  { id: "currency-and-pricing", title: "Currency and Pricing", level: 2 },
  { id: "domains-and-seo", title: "Domains and SEO", level: 2 },
  { id: "duties-and-taxes", title: "Duties and Taxes", level: 2 },
  { id: "market-customisation", title: "Market Customisation", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Markets",
  description: "Complete guide to setting up Shopify Markets for international selling.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-markets` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Markets", item: `${siteConfig.url}/guides/how-to-set-up-shopify-markets` },
  ],
};

export default function ShopifyMarketsGuidePage() {
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
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify Markets
            </h1>

            <p className="text-xl text-foreground mb-8">
              Shopify Markets is your central hub for international selling. This guide walks you through creating markets, configuring pricing, setting up domains, and managing duties.
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

              <section id="what-is-shopify-markets" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Shopify Markets</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Markets is Shopify&apos;s cross-border management tool. It allows you to create distinct selling regions with their own currencies, languages, pricing, and customs settings, all from a single store.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Before Markets, managing international sales required complex workarounds or multiple stores. Now you can serve global customers from one admin while providing localised experiences.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Markets Features</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Market-specific pricing</strong> with local currencies and price adjustments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Language translation</strong> for each market</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Duties and taxes</strong> calculated and collected at checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Local domains</strong> for SEO and trust (subfolders or ccTLDs)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product availability</strong> control per market</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="creating-markets" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating Markets</h2>
                <p className="text-lg text-foreground mb-4">
                  A market can be a single country or a group of countries. Group countries with similar characteristics (language, currency, shipping rates) for easier management.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step-by-Step Setup</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Markets</strong>
                      <p className="text-foreground mt-1">Go to Settings → Markets in your Shopify admin. You&apos;ll see your primary market (usually your home country) already set up.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Add a New Market</strong>
                      <p className="text-foreground mt-1">Click &quot;Add market&quot; and give it a name (e.g., &quot;European Union&quot; or &quot;United States&quot;).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Select Countries</strong>
                      <p className="text-foreground mt-1">Add the countries you want to include in this market. Search or browse the list.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Activate the Market</strong>
                      <p className="text-foreground mt-1">Toggle the market to &quot;Active&quot;. Customers from these countries can now shop on your store.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Market Grouping Tips</h4>
                  <p className="text-foreground">
                    Create separate markets for countries with unique requirements. For example, the US might warrant its own market due to volume, while European countries can be grouped together.
                  </p>
                </div>
              </section>

              <section id="currency-and-pricing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Currency and Pricing</h2>
                <p className="text-lg text-foreground mb-4">
                  Each market can have its own currency and pricing strategy. Shopify offers several options for managing international prices.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Pricing Options</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Automatic Conversion</h4>
                    <p className="text-foreground">Prices convert using real-time exchange rates. Simplest option but prices fluctuate with currency markets.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Price Adjustments</h4>
                    <p className="text-foreground">Add a percentage increase or decrease to converted prices. Useful for covering additional costs in specific markets.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Rounding Rules</h4>
                    <p className="text-foreground">Automatically round converted prices (e.g., to nearest .99 or whole number). Creates cleaner, more professional pricing.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Manual Pricing</h4>
                    <p className="text-foreground">Set fixed prices per market using price lists. Full control but requires manual updates as exchange rates change.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Configuring Currency</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Click on the market to edit it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Under &quot;Currency and pricing&quot;, select the currency to use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Choose your pricing strategy (automatic, adjusted, or manual)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Set rounding rules if using automatic conversion</span>
                  </li>
                </ol>
              </section>

              <section id="domains-and-seo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Domains and SEO</h2>
                <p className="text-lg text-foreground mb-4">
                  Markets can use subfolders (yourstore.com/de), subdomains (de.yourstore.com), or country-code domains (yourstore.de) for SEO and localisation.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Subfolders (Recommended)</h3>
                    <p className="text-foreground mb-2">yourstore.com/de-de/</p>
                    <p className="text-sm text-foreground">Easiest to set up. SEO authority stays with main domain. Good for most stores.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Subdomains</h3>
                    <p className="text-foreground mb-2">de.yourstore.com</p>
                    <p className="text-sm text-foreground">Requires DNS configuration. Each subdomain treated as separate site for SEO.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Country Domains (ccTLDs)</h3>
                    <p className="text-foreground mb-2">yourstore.de</p>
                    <p className="text-sm text-foreground">Strongest local SEO signal. Requires purchasing and managing separate domains.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">SEO Considerations</h4>
                  <p className="text-foreground">
                    Shopify automatically adds hreflang tags to indicate language and region variations to search engines. This helps Google show the right version to users in each market.
                  </p>
                </div>
              </section>

              <section id="duties-and-taxes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Duties and Taxes</h2>
                <p className="text-lg text-foreground mb-4">
                  Markets can collect duties and import taxes at checkout, giving customers transparency and avoiding surprise charges at delivery.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Enabling Duty Collection</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Edit Market Settings</strong>
                      <p className="text-foreground mt-1">Click on the market and scroll to &quot;Duties and import taxes&quot;.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Enable Collection</strong>
                      <p className="text-foreground mt-1">Toggle on &quot;Collect duties and import taxes at checkout&quot;.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Add HS Codes</strong>
                      <p className="text-foreground mt-1">Ensure your products have HS (Harmonised System) codes. These determine the duty rate for each product category.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Review Estimates</strong>
                      <p className="text-foreground mt-1">Shopify shows estimated duties at checkout. Review a test order to verify calculations are reasonable.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Duty Calculation</h3>
                  <p className="text-foreground">
                    Shopify calculates duties based on product value, HS codes, country of origin, and destination. Calculations are estimates and actual duties may vary slightly.
                  </p>
                </div>
              </section>

              <section id="market-customisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Market Customisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Beyond currency and duties, Markets offers additional customisation options for creating truly localised experiences.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Customisation Options</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product availability:</strong> Hide products that are not available or relevant in certain markets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Languages:</strong> Add translations for each market using Shopify Translate & Adapt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Payment methods:</strong> Enable local payment options (Klarna, iDEAL, etc.) per market</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shipping rates:</strong> Configure market-specific shipping zones and rates</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Markets Pro</h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify Markets Pro is an advanced tier that includes managed duties remittance, currency conversion with guaranteed exchange rates, and fraud protection. Available for stores on certain plans.
                </p>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices for a successful Markets implementation.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Markets Setup Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Start with high-potential markets:</strong> Focus on markets where you already see traffic or sales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Test thoroughly:</strong> Place test orders in each market to verify pricing, duties, and shipping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Add HS codes:</strong> Accurate HS codes are essential for proper duty calculations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Review analytics:</strong> Use Markets analytics to track performance by region</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Consider local marketing:</strong> Localised ads perform better in international markets</span>
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
                    <Link href="/guides/how-to-add-currency-converter-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Currency Converter →</h4>
                      <p className="text-sm text-foreground">Multi-currency setup</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Shopify Markets Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can configure Shopify Markets for your international expansion, including currency setup, duty collection, domain configuration, and localisation.
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
