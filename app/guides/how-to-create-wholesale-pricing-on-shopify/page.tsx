import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Wholesale Pricing on Shopify",
  description:
    "Learn how to set up wholesale pricing on Shopify with tiered discounts, volume pricing, customer-specific rates, and price lists for B2B customers.",
  alternates: {
    canonical: "/guides/how-to-create-wholesale-pricing-on-shopify",
  },
  openGraph: {
    title: "How to Create Wholesale Pricing on Shopify",
    description:
      "Learn how to set up wholesale pricing on Shopify with tiered discounts, volume pricing, and customer-specific rates.",
    url: "/guides/how-to-create-wholesale-pricing-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "wholesale-pricing-basics", title: "Wholesale Pricing Basics", level: 2 },
  { id: "pricing-strategies", title: "Pricing Strategies", level: 2 },
  { id: "shopify-plus-price-lists", title: "Shopify Plus Price Lists", level: 2 },
  { id: "volume-pricing", title: "Volume Pricing", level: 2 },
  { id: "wholesale-apps", title: "Wholesale Apps", level: 2 },
  { id: "managing-margins", title: "Managing Margins", level: 2 },
  { id: "pricing-communication", title: "Communicating Pricing", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Wholesale Pricing on Shopify",
  description:
    "Learn how to set up wholesale pricing on Shopify with tiered discounts, volume pricing, and customer-specific rates.",
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
    "@id": `${siteConfig.url}/guides/how-to-create-wholesale-pricing-on-shopify`,
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
      name: "How to Create Wholesale Pricing on Shopify",
      item: `${siteConfig.url}/guides/how-to-create-wholesale-pricing-on-shopify`,
    },
  ],
};

export default function WholesalePricingGuidePage() {
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
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Wholesale Pricing on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Wholesale pricing requires balancing competitive rates for your trade customers
              while maintaining healthy margins. This guide covers strategies and implementation
              for Shopify wholesale pricing.
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
              {/* Wholesale Pricing Basics */}
              <section id="wholesale-pricing-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Wholesale Pricing Basics
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Wholesale pricing sits between your manufacturing cost and retail price. The
                  gap between wholesale and retail is what allows your trade customers to make
                  their margin while still offering competitive prices to end consumers.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Getting this balance right is crucial. Price too high and retailers cannot
                  compete. Price too low and you erode your own margins or undercut retailers
                  who sell your products.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The Pricing Stack</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Cost price:</strong> What it costs you to produce or acquire the product</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Wholesale price:</strong> What trade customers pay (typically 2-2.5x cost)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>RRP:</strong> Recommended retail price (typically 2-2.5x wholesale)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>MAP:</strong> Minimum advertised price (if you enforce one)</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  A product costing you £10 might wholesale at £22 and retail at £45-50. This
                  gives you a healthy 55% margin, while retailers make 50-55% on their sales.
                </p>
              </section>

              {/* Pricing Strategies */}
              <section id="pricing-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Pricing Strategies
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Different wholesale pricing strategies suit different business models. Choose
                  based on your products, customer base, and competitive landscape.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Flat Percentage Discount</h3>
                    <p className="text-foreground mb-2">
                      The simplest approach. All wholesale customers receive a fixed percentage
                      off retail prices, such as 40% or 50% off RRP.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Consistent margins across products, simple administration
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Tiered Pricing</h3>
                    <p className="text-foreground mb-2">
                      Different discount levels based on customer type or order volume. Small
                      retailers might get 35% off, while large chains get 50% off.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Diverse customer base, rewarding larger accounts
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Cost-Plus Pricing</h3>
                    <p className="text-foreground mb-2">
                      Set wholesale prices as a fixed markup on your cost. If a product costs
                      £10, you might set wholesale at cost + 100% (£20).
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Varying retail prices, guaranteed margins
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Negotiated Pricing</h3>
                    <p className="text-foreground mb-2">
                      Individual pricing agreements with each customer based on volume
                      commitments, payment terms, or strategic value.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> High-value accounts, key partnerships
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Most successful brands use a hybrid approach. A base tiered structure for
                    most customers, with negotiated rates for strategic accounts that meet
                    volume thresholds.
                  </p>
                </div>
              </section>

              {/* Shopify Plus Price Lists */}
              <section id="shopify-plus-price-lists" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Shopify Plus Price Lists
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Plus offers native price list functionality that makes implementing
                  wholesale pricing straightforward. Price lists let you create different
                  pricing structures and assign them to specific customer groups.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating a Price List
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Navigate to Products → Price lists</strong>
                      <p className="text-foreground mt-1">In your Shopify admin, find the price lists section under Products.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Create a new price list</strong>
                      <p className="text-foreground mt-1">Give it a clear name like &quot;Wholesale Tier 1 - 40% Off&quot; or &quot;Premium Partner Pricing&quot;.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Set pricing method</strong>
                      <p className="text-foreground mt-1">Choose between percentage adjustment (e.g., -40% from retail) or fixed prices per product.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Configure currency</strong>
                      <p className="text-foreground mt-1">Select which currency this price list uses. Create separate lists for different currencies.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Assign to company locations</strong>
                      <p className="text-foreground mt-1">Link the price list to the B2B customers who should receive this pricing.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Fixed vs Percentage Pricing
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground-dark mb-3">Percentage Discount</h4>
                      <ul className="space-y-2 text-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">+</span>
                          <span>Easy to maintain</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">+</span>
                          <span>Automatically adjusts with retail price changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">-</span>
                          <span>Less control over individual product margins</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-dark mb-3">Fixed Prices</h4>
                      <ul className="space-y-2 text-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">+</span>
                          <span>Precise control per product</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">+</span>
                          <span>Can optimise margins individually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">-</span>
                          <span>More work to maintain</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Volume Pricing */}
              <section id="volume-pricing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Volume Pricing
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Volume pricing offers better rates for larger quantities, encouraging
                  wholesale customers to place bigger orders. This benefits both parties:
                  they get better unit costs, you get higher order values and more efficient
                  fulfilment.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Quantity Breaks
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify Plus allows you to set quantity price breaks within price lists.
                  Here is an example structure:
                </p>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Example: Premium T-Shirt</h4>
                  <table className="w-full text-foreground">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Quantity</th>
                        <th className="text-left py-2">Unit Price</th>
                        <th className="text-left py-2">Discount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">1-11 units</td>
                        <td className="py-2">£18.00</td>
                        <td className="py-2">40% off RRP</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">12-47 units</td>
                        <td className="py-2">£15.00</td>
                        <td className="py-2">50% off RRP</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">48-95 units</td>
                        <td className="py-2">£13.50</td>
                        <td className="py-2">55% off RRP</td>
                      </tr>
                      <tr>
                        <td className="py-2">96+ units</td>
                        <td className="py-2">£12.00</td>
                        <td className="py-2">60% off RRP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Quantity Rules
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Beyond pricing, you can set quantity rules that control how products are sold:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Minimum order quantities:</strong> Require at least 12 units per SKU</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Quantity increments:</strong> Must order in multiples of 6 (case packs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Maximum quantities:</strong> Limit orders to prevent stock depletion</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Set quantity breaks at natural case pack sizes. If products ship in cases
                    of 12, set breaks at 12, 24, 48, 96. This simplifies warehouse operations
                    and makes it easier for buyers to order.
                  </p>
                </div>
              </section>

              {/* Wholesale Apps */}
              <section id="wholesale-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Wholesale Apps
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Not on Shopify Plus? Several apps provide wholesale pricing functionality
                  for standard Shopify plans. Each has different strengths.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Wholesale Club</h3>
                    <p className="text-foreground mb-2">
                      One of the most popular options. Offers customer tagging, percentage
                      discounts, net payment terms, and minimum order requirements.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Simple wholesale setups, small to medium B2B operations
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">B2B/Wholesale Solution</h3>
                    <p className="text-foreground mb-2">
                      Feature-rich app with custom pricing, quantity breaks, quick order forms,
                      and customer-specific catalogs.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> More complex requirements, multiple price tiers
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Bold Custom Pricing</h3>
                    <p className="text-foreground mb-2">
                      Allows different prices for different customer groups with automatic
                      price display and checkout integration.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Mixed B2C/B2B stores, customer-specific pricing
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">App Considerations</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Monthly costs add up. Factor app fees into your wholesale margin calculations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Some apps inject JavaScript that can slow your store. Test thoroughly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Check compatibility with your theme and other apps before committing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Consider migration path to Shopify Plus native B2B as you scale.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Managing Margins */}
              <section id="managing-margins" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Managing Margins
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Wholesale margins are typically thinner than retail. Careful management
                  ensures wholesale remains profitable while offering competitive pricing.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Margin Calculation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Always calculate your wholesale margin against landed cost, not just product
                  cost. Landed cost includes:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Product/manufacturing cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Shipping to your warehouse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Import duties and taxes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Warehousing and handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Payment processing fees</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Protecting Margins
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Set minimum order values</strong>
                      <p className="text-foreground mt-1">Small orders eat into margins with fixed costs. Require £250+ minimums.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Charge for shipping</strong>
                      <p className="text-foreground mt-1">Free shipping on wholesale erodes margins. Offer free shipping only above a threshold.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Review pricing regularly</strong>
                      <p className="text-foreground mt-1">Costs change. Review and adjust wholesale pricing at least annually.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Differentiate low-margin products</strong>
                      <p className="text-foreground mt-1">Some products may need different wholesale discounts to maintain acceptable margins.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a spreadsheet mapping each product&apos;s cost, wholesale price, and
                    resulting margin. Identify any products where wholesale margin drops below
                    your target (typically 40-50%) and adjust pricing accordingly.
                  </p>
                </div>
              </section>

              {/* Pricing Communication */}
              <section id="pricing-communication" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Communicating Pricing
                </h2>
                <p className="text-lg text-foreground mb-4">
                  How you communicate pricing affects customer perception and reduces support
                  queries. Clear pricing documentation prevents misunderstandings and builds
                  trust.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Pricing Documentation
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Line sheets:</strong> Product images, descriptions, and wholesale prices in a downloadable format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Price lists:</strong> Complete pricing including quantity breaks and minimums</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Terms and conditions:</strong> Payment terms, shipping policies, returns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Tier requirements:</strong> What customers need to qualify for better pricing</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  On-Site Pricing Display
                </h3>
                <p className="text-lg text-foreground mb-4">
                  When B2B customers log into your store, they should immediately see their
                  pricing. Consider:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Clearly show wholesale prices on product pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Display their tier or discount level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Show volume pricing breaks where applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Indicate minimum quantities clearly</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Price Change Communication</h4>
                  <p className="text-foreground mb-3">
                    When you need to adjust prices, communicate clearly:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Give 30-60 days notice before price increases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Explain the reason (costs, quality improvements, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Honour existing orders at old prices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Offer a window to order at current prices</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  With your pricing strategy defined, here is how to move forward:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Audit your current margins</strong>
                      <p className="text-foreground mt-1">Map cost, wholesale, and retail for your key products. Identify any margin issues.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Define your tiers</strong>
                      <p className="text-foreground mt-1">Decide how many pricing tiers you need and the discount level for each.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Set up price lists</strong>
                      <p className="text-foreground mt-1">Create your price lists in Shopify Plus or via your wholesale app.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Create documentation</strong>
                      <p className="text-foreground mt-1">Prepare line sheets and pricing documents for your wholesale customers.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-shopify-b2b"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify B2B Setup Guide →</h4>
                      <p className="text-sm text-foreground">Complete B2B implementation</p>
                    </Link>
                    <Link
                      href="/guides/how-to-set-up-trade-accounts-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Trade Accounts Guide →</h4>
                      <p className="text-sm text-foreground">Application and approval workflows</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Wholesale Pricing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you develop a wholesale pricing strategy that maximises
            margins while staying competitive in your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/shopify-plus" variant="outline-light" size="lg" icon={false}>
              Our Shopify Plus Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
