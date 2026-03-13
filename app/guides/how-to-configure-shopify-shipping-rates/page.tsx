import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Configure Shopify Shipping Rates",
  description:
    "Complete guide to setting up shipping rates in Shopify. Learn about shipping zones, rate types, carrier-calculated rates, and free shipping thresholds.",
  alternates: {
    canonical: "/guides/how-to-configure-shopify-shipping-rates",
  },
  openGraph: {
    title: "How to Configure Shopify Shipping Rates",
    description:
      "Complete guide to setting up shipping rates in Shopify. Learn about shipping zones, rate types, and carrier integration.",
    url: "/guides/how-to-configure-shopify-shipping-rates",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-shipping-profiles", title: "Understanding Shipping Profiles", level: 2 },
  { id: "setting-up-shipping-zones", title: "Setting Up Shipping Zones", level: 2 },
  { id: "creating-shipping-rates", title: "Creating Shipping Rates", level: 2 },
  { id: "carrier-calculated-rates", title: "Carrier-Calculated Rates", level: 2 },
  { id: "free-shipping-strategies", title: "Free Shipping Strategies", level: 2 },
  { id: "local-delivery-and-pickup", title: "Local Delivery and Pickup", level: 2 },
  { id: "international-shipping", title: "International Shipping", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes to Avoid", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Configure Shopify Shipping Rates",
  description:
    "Complete guide to setting up shipping rates in Shopify. Learn about shipping zones, rate types, and carrier integration.",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-configure-shopify-shipping-rates`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Configure Shopify Shipping Rates",
      item: `${siteConfig.url}/guides/how-to-configure-shopify-shipping-rates`,
    },
  ],
};

export default function ShippingRatesGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                Guide
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Configure Shopify Shipping Rates
            </h1>

            <p className="text-xl text-foreground mb-8">
              Shipping configuration is one of the most critical aspects of running a Shopify store.
              Get it right to maximise conversions and maintain healthy margins.
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

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Understanding Shipping Profiles */}
              <section id="understanding-shipping-profiles" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding Shipping Profiles
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify uses shipping profiles to determine which shipping rates apply to which
                  products. By default, all products use the General shipping profile, but you can
                  create custom profiles for products that require different shipping rules.
                </p>
                <p className="text-lg text-foreground mb-6">
                  For example, you might have a separate profile for oversized items, fragile
                  products, or items that ship from a different location.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">When to Create Custom Profiles</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Different shipping origins</strong> - Products shipped from different warehouses or suppliers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Size or weight variations</strong> - Oversized items that cost more to ship</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Special handling</strong> - Fragile items or products requiring temperature control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Digital products</strong> - Items that do not require shipping (use "This is a digital product")</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Dropshipped items</strong> - Products fulfilled by third parties with different rates</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating a New Shipping Profile
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Settings → Shipping and delivery</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click <strong>Create new profile</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Name your profile descriptively (e.g., "Oversized Items")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Add products or collections to this profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Configure shipping zones and rates for this profile</span>
                  </li>
                </ol>
              </section>

              {/* Setting Up Shipping Zones */}
              <section id="setting-up-shipping-zones" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Setting Up Shipping Zones
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shipping zones define the geographical areas where you ship products and what
                  rates apply to each area. Most UK stores need at least three zones: UK, Europe,
                  and Rest of World.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Recommended Zone Structure for UK Stores
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Zone 1: United Kingdom</h4>
                    <p className="text-foreground mb-2">
                      Your domestic zone. Include England, Scotland, Wales, and Northern Ireland.
                      Consider whether to treat the Channel Islands and Isle of Man separately (they
                      are outside the UK VAT area).
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Typical rates:</strong> £3-5 standard, £6-8 express
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Zone 2: Europe</h4>
                    <p className="text-foreground mb-2">
                      Post-Brexit, EU shipping requires customs documentation. You may want separate
                      zones for EU countries and non-EU European countries (Switzerland, Norway).
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Typical rates:</strong> £8-15 standard, £15-25 express
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Zone 3: Rest of World</h4>
                    <p className="text-foreground mb-2">
                      A catch-all for other countries. Consider separate zones for USA, Canada,
                      Australia if these are significant markets with different shipping costs.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Typical rates:</strong> £15-30 standard, £30-60 express
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating a Shipping Zone
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In your shipping profile, click <strong>Create zone</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Name the zone (e.g., "United Kingdom")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Search for and select countries to include</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Click <strong>Done</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Add shipping rates to this zone</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Consider creating a separate zone for the Scottish Highlands and Islands if you
                    use couriers that charge extra for these postcodes. You can add specific postcode
                    prefixes to create more granular zones.
                  </p>
                </div>
              </section>

              {/* Creating Shipping Rates */}
              <section id="creating-shipping-rates" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Creating Shipping Rates
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Within each shipping zone, you can create multiple rates. Shopify supports several
                  types of rates, each suited to different business needs.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Types of Shipping Rates
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Flat Rate</h4>
                    <p className="text-foreground">
                      A fixed price regardless of order contents. Simple for customers to understand
                      but may not reflect actual shipping costs for varied orders.
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      <strong>Best for:</strong> Stores with similarly-sized products
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Weight-Based Rates</h4>
                    <p className="text-foreground">
                      Rates that change based on total order weight. Requires accurate product weights
                      in your inventory.
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      <strong>Best for:</strong> Stores with products of varying weights
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Price-Based Rates</h4>
                    <p className="text-foreground">
                      Rates that change based on order subtotal. Often used for free shipping thresholds.
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      <strong>Best for:</strong> Stores wanting to incentivise higher order values
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Carrier-Calculated Rates</h4>
                    <p className="text-foreground">
                      Real-time rates fetched from carriers like Royal Mail, DPD, or DHL. Requires
                      accurate product dimensions and weights.
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      <strong>Best for:</strong> Stores with varied products wanting accurate rates
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Weight-Based Rates
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Click <strong>Add rate</strong> in your shipping zone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Select <strong>Set up your own rates</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enter a rate name (e.g., "Standard Delivery")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Set the price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Click <strong>Add conditions</strong> and select <strong>Based on item weight</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Set minimum and maximum weights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">7.</span>
                    <span>Click <strong>Done</strong> and repeat for other weight brackets</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Example Weight-Based Structure</h4>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold text-foreground-dark">Weight Range</th>
                        <th className="text-left py-2 font-semibold text-foreground-dark">Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-foreground">0 - 500g</td>
                        <td className="py-2 text-foreground">£3.50</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-foreground">500g - 1kg</td>
                        <td className="py-2 text-foreground">£4.50</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-foreground">1kg - 2kg</td>
                        <td className="py-2 text-foreground">£5.50</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-foreground">2kg+</td>
                        <td className="py-2 text-foreground">£7.50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Carrier-Calculated Rates */}
              <section id="carrier-calculated-rates" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Carrier-Calculated Rates
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Carrier-calculated shipping shows customers real-time rates from your chosen
                  carriers at checkout. This ensures you are charging accurate amounts and gives
                  customers choice over delivery speed.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Requirements
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Shopify plan:</strong> Available on Shopify plan and above, or with a monthly fee on Basic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Accurate product data:</strong> All products must have weights, and ideally dimensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Shipping origin:</strong> Must be set correctly in your shipping settings</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Available Carriers (UK)
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground-dark">Royal Mail</h4>
                    <p className="text-sm text-foreground">Integrated via Shopify Shipping</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground-dark">DPD</h4>
                    <p className="text-sm text-foreground">Via third-party app</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground-dark">DHL</h4>
                    <p className="text-sm text-foreground">Available for international</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground-dark">UPS</h4>
                    <p className="text-sm text-foreground">Integrated via Shopify Shipping</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Carrier-Calculated Rates
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Ensure all products have accurate weights and dimensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Go to <strong>Settings → Shipping and delivery</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>In your shipping profile, click <strong>Add rate</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Select <strong>Use carrier or app to calculate rates</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Choose your carrier and select services to offer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Optionally add a handling fee or markup</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Add a small handling fee (5-10%) to carrier-calculated rates to cover packaging
                    materials and the time spent packing. This prevents shipping from eating into
                    your margins.
                  </p>
                </div>
              </section>

              {/* Free Shipping Strategies */}
              <section id="free-shipping-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Free Shipping Strategies
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Free shipping is a powerful conversion driver. Research shows that unexpected
                  shipping costs are the top reason for cart abandonment. However, "free" shipping
                  still has a cost that needs to be absorbed somewhere.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Option 1: Free Shipping Over a Threshold
                </h3>
                <p className="text-lg text-foreground mb-4">
                  The most common approach. Offer free shipping on orders above a certain amount.
                  This encourages customers to add more to their cart.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Setting Your Threshold</h4>
                  <p className="text-foreground mb-3">
                    Set your threshold 20-30% above your average order value. This encourages
                    customers to spend more without setting an unreachable target.
                  </p>
                  <p className="text-foreground">
                    <strong>Example:</strong> If your average order is £40, set free shipping at £50-55.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Option 2: Build Shipping Into Prices
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Increase product prices slightly and offer "free shipping" on everything. Works
                  best when your products have healthy margins.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Eliminates cart abandonment from shipping shock</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Simplifies the customer experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>May make prices seem higher than competitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Difficult with international shipping (varying costs)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Option 3: Free Shipping for Members
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Offer free shipping as a perk for loyalty program members or subscribers. This
                  builds customer retention while limiting the cost.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up a Free Shipping Threshold
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In your shipping zone, click <strong>Add rate</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Name it "Free Shipping" and set price to £0</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click <strong>Add conditions</strong> and select <strong>Based on order price</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Set minimum order value (e.g., £50)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Click <strong>Done</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Keep your standard shipping rate for orders below the threshold</span>
                  </li>
                </ol>
              </section>

              {/* Local Delivery and Pickup */}
              <section id="local-delivery-and-pickup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Local Delivery and Pickup
                </h2>
                <p className="text-lg text-foreground mb-4">
                  If you have a physical location, offering local delivery and click-and-collect
                  can differentiate you from online-only competitors and reduce shipping costs.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Local Pickup
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Settings → Shipping and delivery</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll to <strong>Local pickup</strong> and click <strong>Manage</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Toggle on the locations where customers can collect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Add collection instructions and expected ready time</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Local Delivery
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Settings → Shipping and delivery</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll to <strong>Local delivery</strong> and click <strong>Manage</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enable local delivery for your location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Set your delivery area by postcode or radius</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Set the delivery price (or free) and any minimum order requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Add delivery instructions for customers</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Offer free local delivery over a lower threshold than national free shipping.
                    For example, free local delivery over £30, free national shipping over £50.
                    This incentivises nearby customers to choose your store.
                  </p>
                </div>
              </section>

              {/* International Shipping */}
              <section id="international-shipping" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  International Shipping
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shipping internationally from the UK involves additional considerations around
                  customs, duties, and varying carrier costs. Getting this right prevents customer
                  complaints and lost parcels.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Customs and Duties
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Since Brexit, all shipments to the EU require customs documentation. You need to
                  include HS codes (commodity codes) for your products and accurate values.
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>HS codes:</strong> Add to products in Shopify under Customs information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Country of origin:</strong> Required for all international shipments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Value declaration:</strong> Must accurately reflect sale price</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  DDP vs DDU Shipping
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">DDU (Delivered Duty Unpaid)</h4>
                    <p className="text-foreground text-sm mb-2">
                      Customer pays any import duties on delivery. This is the default for most
                      carriers.
                    </p>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>✓ Lower upfront costs for you</li>
                      <li>× Surprise fees for customers</li>
                      <li>× Risk of refused deliveries</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">DDP (Delivered Duty Paid)</h4>
                    <p className="text-foreground text-sm mb-2">
                      You pay duties upfront. Customer receives package with no additional charges.
                    </p>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>✓ Better customer experience</li>
                      <li>✓ Fewer support issues</li>
                      <li>× Higher shipping costs</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  EU IOSS (One-Stop Shop)
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For goods under €150 to EU customers, registering for IOSS allows you to collect
                  VAT at checkout and remit it through a single EU country. This means customers
                  do not pay VAT on delivery.
                </p>
                <p className="text-lg text-foreground">
                  Consider IOSS registration if you have significant EU sales volume. Apps like
                  Zonos or Ship&co can help manage IOSS compliance.
                </p>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Mistakes to Avoid
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Missing Product Weights
                    </h3>
                    <p className="text-foreground mb-3">
                      Products without weights default to 0, which causes incorrect shipping
                      calculations for weight-based rates.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Audit all products and add accurate weights. Export your
                      products via CSV to identify any with missing weight data.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Overlapping Rate Conditions
                    </h3>
                    <p className="text-foreground mb-3">
                      If multiple rates could apply to an order, all matching rates are shown.
                      This confuses customers.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Ensure weight or price ranges do not overlap. Use
                      clear boundaries like 0-500g, 500g-1kg rather than 0-500g, 500g-1kg with
                      separate "500g" rates.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Not Testing Checkout
                    </h3>
                    <p className="text-foreground mb-3">
                      After setting up shipping, always test checkout with different addresses
                      and cart contents to verify rates appear correctly.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Use Shopify's Bogus Gateway for test orders, or place
                      real orders and refund them.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Forgetting Handling Time
                    </h3>
                    <p className="text-foreground mb-3">
                      Delivery estimates should include your processing time, not just carrier
                      transit time.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Set realistic processing times in Settings → Shipping.
                      Under-promising and over-delivering builds customer trust.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-shopify-taxes"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify Taxes →</h4>
                      <p className="text-sm text-foreground">Configure tax collection correctly</p>
                    </Link>
                    <Link
                      href="/guides/how-to-configure-shopify-checkout"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Configure Checkout →</h4>
                      <p className="text-sm text-foreground">Optimise your checkout experience</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Shipping?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you configure optimal shipping rates, integrate carriers, and
            set up automation to streamline your fulfilment process.
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
