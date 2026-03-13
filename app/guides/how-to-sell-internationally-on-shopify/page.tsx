import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Sell Internationally on Shopify",
  description:
    "Complete guide to selling internationally on Shopify. Learn about multi-currency, international shipping, duties and taxes, localisation, and global expansion strategies.",
  alternates: {
    canonical: "/guides/how-to-sell-internationally-on-shopify",
  },
  openGraph: {
    title: "How to Sell Internationally on Shopify",
    description: "Complete guide to selling internationally on Shopify.",
    url: "/guides/how-to-sell-internationally-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "international-overview", title: "International Overview", level: 2 },
  { id: "shopify-markets", title: "Shopify Markets", level: 2 },
  { id: "multi-currency", title: "Multi-Currency Setup", level: 2 },
  { id: "international-shipping", title: "International Shipping", level: 2 },
  { id: "duties-and-taxes", title: "Duties and Taxes", level: 2 },
  { id: "localisation", title: "Localisation", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Sell Internationally on Shopify",
  description: "Complete guide to selling internationally on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-sell-internationally-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Sell Internationally on Shopify", item: `${siteConfig.url}/guides/how-to-sell-internationally-on-shopify` },
  ],
};

export default function ShopifyInternationalSellingGuidePage() {
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
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Sell Internationally on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Expanding internationally can significantly grow your revenue. This guide covers the essentials of multi-currency selling, international shipping, duties, and localisation on Shopify.
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

              <section id="international-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">International Overview</h2>
                <p className="text-lg text-foreground mb-4">
                  Selling internationally opens your store to billions of potential customers. With Shopify&apos;s built-in tools, you can manage currencies, shipping zones, and duties from a single dashboard.
                </p>
                <p className="text-lg text-foreground mb-6">
                  The key challenges are currency conversion, international shipping costs, customs duties, and creating a localised experience. Each requires careful planning but Shopify makes it manageable.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">International Selling Checklist</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Target markets:</strong> Identify which countries have demand for your products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Currency:</strong> Enable local currencies to remove conversion friction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shipping:</strong> Set up international shipping rates and carriers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Duties and taxes:</strong> Decide who pays and configure DDP or DAP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Localisation:</strong> Translate content and adapt for local markets</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="shopify-markets" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify Markets</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Markets is the central hub for managing international selling. It lets you create market-specific settings for pricing, currencies, domains, and duties.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Setting Up Markets</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Access Markets</strong>
                      <p className="text-foreground mt-1">Go to Settings → Markets in your Shopify admin.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Add a Market</strong>
                      <p className="text-foreground mt-1">Click &quot;Add market&quot; and select the countries you want to sell to. You can group countries into regions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Currency</strong>
                      <p className="text-foreground mt-1">Enable local currency for the market. Customers will see prices in their currency at checkout.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Set Pricing Strategy</strong>
                      <p className="text-foreground mt-1">Choose auto-conversion based on exchange rates, or set manual prices per market for more control.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Duties</strong>
                      <p className="text-foreground mt-1">Decide whether you or the customer pays duties. Configure tax collection for the market.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="multi-currency" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Multi-Currency Setup</h2>
                <p className="text-lg text-foreground mb-4">
                  Multi-currency allows customers to browse and pay in their local currency. This removes friction and increases conversion rates in international markets.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Automatic Currency Conversion</h3>
                    <p className="text-foreground">Shopify converts prices using real-time exchange rates. Simple to set up but rates change constantly, which can affect margins.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Manual Price Rounding</h3>
                    <p className="text-foreground">Apply rounding rules to converted prices (e.g., round to .99). Creates cleaner prices for customers.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Fixed Pricing</h3>
                    <p className="text-foreground">Set specific prices per currency. Full control over margins but requires manual management as exchange rates change.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Currency Selector</h4>
                  <p className="text-foreground">
                    Add a currency/country selector to your store so customers can choose their preferred currency. Most themes include this, or use an app like Geolocation.
                  </p>
                </div>
              </section>

              <section id="international-shipping" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">International Shipping</h2>
                <p className="text-lg text-foreground mb-4">
                  International shipping requires separate rates for different zones. Consider carrier options, delivery times, and whether to offer tracking.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Shipping Zones</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>European Union:</strong> Usually the easiest for UK sellers post-Brexit, though VAT registration may be needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>North America:</strong> Large market but customs duties apply over threshold values</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Australia/New Zealand:</strong> Strict customs but straightforward process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Rest of World:</strong> Varies significantly by country; research specific requirements</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Carrier Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Postal Services</h4>
                    <p className="text-foreground text-sm">Royal Mail International, cheaper for light items. Slower delivery but budget-friendly.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">International Couriers</h4>
                    <p className="text-foreground text-sm">DHL, FedEx, UPS. Faster, full tracking, but more expensive. Good for premium products.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Third-Party Logistics</h4>
                    <p className="text-foreground text-sm">Fulfilment partners with international warehouses. Stock closer to customers for faster delivery.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Aggregators</h4>
                    <p className="text-foreground text-sm">Easyship, ShipBob. Compare rates across carriers and manage customs documentation.</p>
                  </div>
                </div>
              </section>

              <section id="duties-and-taxes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Duties and Taxes</h2>
                <p className="text-lg text-foreground mb-4">
                  International orders may incur customs duties and import taxes. How you handle these significantly impacts the customer experience.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">DDP vs DAP</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">DAP (Delivered at Place)</h4>
                    <p className="text-foreground">Customer pays duties on delivery. Cheaper for you but can result in surprise charges and refused deliveries. Common approach but not ideal for customer experience.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">DDP (Delivered Duty Paid)</h4>
                    <p className="text-foreground">You collect duties at checkout and pay them on behalf of the customer. Better experience as there are no surprise charges. Requires Shopify&apos;s duty calculation feature.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Enabling Duty Collection</h4>
                  <p className="text-foreground">
                    In Shopify Markets, enable &quot;Collect duties and import taxes at checkout&quot; for markets where you want to offer DDP. Shopify calculates duties based on product HS codes.
                  </p>
                </div>
              </section>

              <section id="localisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Localisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Localisation goes beyond translation. It&apos;s about adapting your store for local markets, including language, imagery, and cultural considerations.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Localisation Elements</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Language:</strong> Translate key pages, product descriptions, and checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Currency:</strong> Display prices in local currency throughout the store</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Payment methods:</strong> Enable local payment options (iDEAL, Bancontact, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Sizing:</strong> Provide local size conversions where relevant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Customer support:</strong> Offer support in local languages and time zones</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Translation Options</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Shopify Translate & Adapt</h4>
                    <p className="text-foreground">Free Shopify app with auto-translation. Good starting point, but review translations for quality.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Langify/Weglot</h4>
                    <p className="text-foreground">Third-party apps with professional translation services. Better quality but have ongoing costs.</p>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices for successful international expansion.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">International Selling Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Start focused:</strong> Begin with 1-2 target markets rather than everywhere at once</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Research demand:</strong> Use Google Trends and existing traffic data to identify opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Test before scaling:</strong> Run paid ads to test market response before full localisation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Clear communication:</strong> Be transparent about shipping times and any potential duties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Local payment methods:</strong> Enable popular local payment options to maximise conversion</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-markets" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Markets Guide →</h4>
                      <p className="text-sm text-foreground">Detailed Markets setup</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need International Expansion Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can configure Shopify Markets, set up multi-currency, integrate international shipping, and create a localised experience for your target markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
