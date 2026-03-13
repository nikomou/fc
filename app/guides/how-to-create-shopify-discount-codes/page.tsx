import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Shopify Discount Codes",
  description:
    "Complete guide to creating discount codes in Shopify. Learn about percentage discounts, fixed amounts, free shipping, BOGO offers, and automatic discounts.",
  alternates: {
    canonical: "/guides/how-to-create-shopify-discount-codes",
  },
  openGraph: {
    title: "How to Create Shopify Discount Codes",
    description:
      "Complete guide to creating discount codes in Shopify. Learn about percentage discounts, fixed amounts, and promotional strategies.",
    url: "/guides/how-to-create-shopify-discount-codes",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-discounts", title: "Understanding Discounts", level: 2 },
  { id: "discount-types", title: "Discount Types", level: 2 },
  { id: "creating-discount-codes", title: "Creating Discount Codes", level: 2 },
  { id: "automatic-discounts", title: "Automatic Discounts", level: 2 },
  { id: "discount-strategies", title: "Discount Strategies", level: 2 },
  { id: "usage-limits", title: "Usage Limits and Conditions", level: 2 },
  { id: "tracking-performance", title: "Tracking Performance", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Shopify Discount Codes",
  description:
    "Complete guide to creating discount codes in Shopify. Learn about percentage discounts, fixed amounts, and promotional strategies.",
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
    "@id": `${siteConfig.url}/guides/how-to-create-shopify-discount-codes`,
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
      name: "How to Create Shopify Discount Codes",
      item: `${siteConfig.url}/guides/how-to-create-shopify-discount-codes`,
    },
  ],
};

export default function DiscountCodesGuidePage() {
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
                Promotions
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>13 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Shopify Discount Codes
            </h1>

            <p className="text-xl text-foreground mb-8">
              Discount codes are powerful tools for driving sales, clearing inventory, and rewarding
              loyal customers. This guide covers everything from basic codes to advanced promotional
              strategies.
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
              {/* Understanding Discounts */}
              <section id="understanding-discounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding Discounts
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify offers two main ways to offer discounts: discount codes that customers enter
                  at checkout, and automatic discounts that apply when conditions are met. Each has
                  different use cases and advantages.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Used strategically, discounts can increase average order value, drive urgency, and
                  convert hesitant shoppers. However, overuse can train customers to wait for sales
                  and erode your margins.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Discount Codes vs Automatic Discounts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground-dark mb-2">Discount Codes</h4>
                      <ul className="space-y-2 text-foreground text-sm">
                        <li>• Customer enters a code at checkout</li>
                        <li>• Can be shared and tracked easily</li>
                        <li>• Great for email campaigns and influencers</li>
                        <li>• Customers feel rewarded</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground-dark mb-2">Automatic Discounts</h4>
                      <ul className="space-y-2 text-foreground text-sm">
                        <li>• Applies automatically when conditions are met</li>
                        <li>• No code to remember or enter</li>
                        <li>• Shows discount in cart and checkout</li>
                        <li>• Better for site-wide promotions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Important Note</h4>
                  <p className="text-foreground">
                    By default, Shopify only allows one discount code per order. Customers cannot
                    stack codes. However, automatic discounts can combine with discount codes on
                    Shopify Plus plans.
                  </p>
                </div>
              </section>

              {/* Discount Types */}
              <section id="discount-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Discount Types
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify supports several types of discounts, each suited to different promotional
                  goals. Understanding these helps you choose the right type for your campaign.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Percentage Off</h3>
                    <p className="text-foreground mb-3">
                      A percentage discount on the order subtotal or specific products. Most versatile
                      and commonly used type.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Examples:</strong> 10% off your order, 25% off all dresses, 15% off your first order
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Fixed Amount Off</h3>
                    <p className="text-foreground mb-3">
                      A specific pound amount off the order or products. Works well for higher-value
                      promotions.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Examples:</strong> £10 off orders over £50, £5 off any candle, £20 off your next order
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Free Shipping</h3>
                    <p className="text-foreground mb-3">
                      Removes shipping costs. Highly effective as shipping is a top reason for cart
                      abandonment.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Examples:</strong> Free standard shipping, free shipping on orders over £30, free express upgrade
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Buy X Get Y (BOGO)</h3>
                    <p className="text-foreground mb-3">
                      Offers a discount when purchasing specific quantities or combinations. Great for
                      increasing units per order.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Examples:</strong> Buy 2 get 1 free, buy any shirt get 50% off trousers, buy 3 for £20
                    </p>
                  </div>
                </div>
              </section>

              {/* Creating Discount Codes */}
              <section id="creating-discount-codes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Creating Discount Codes
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Let us walk through creating a discount code step by step. We will create a 10%
                  off code as an example.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Discounts</strong>
                      <p className="text-foreground mt-2">
                        In your Shopify admin, go to <strong>Discounts</strong> in the left sidebar.
                        Click <strong>Create discount</strong>.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-foreground-dark">Choose Discount Type</strong>
                      <p className="text-foreground mt-2">
                        Select the discount type. For our example, choose <strong>Amount off products</strong>
                        or <strong>Amount off order</strong> depending on what you want to discount.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-foreground-dark">Enter the Code</strong>
                      <p className="text-foreground mt-2">
                        Enter your discount code. Keep it memorable and relevant. Example: SAVE10,
                        WELCOME15, SUMMER20. Click &quot;Generate random code&quot; if you want a unique code.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <strong className="text-foreground-dark">Set the Discount Value</strong>
                      <p className="text-foreground mt-2">
                        Choose percentage or fixed amount. Enter the value (e.g., 10 for 10% or £10).
                        Select whether it applies to all products or specific collections.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">5</span>
                    <div>
                      <strong className="text-foreground-dark">Set Minimum Requirements</strong>
                      <p className="text-foreground mt-2">
                        Choose whether a minimum purchase is required. Options: No minimum, minimum
                        purchase amount (e.g., £50), or minimum quantity of items.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">6</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Eligibility</strong>
                      <p className="text-foreground mt-2">
                        Set who can use the discount: all customers, specific customer segments, or
                        specific customers. Use segments for VIP-only codes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">7</span>
                    <div>
                      <strong className="text-foreground-dark">Set Usage Limits</strong>
                      <p className="text-foreground mt-2">
                        Limit total uses (e.g., first 100 customers) and uses per customer (e.g.,
                        one use per customer). Important for controlling costs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">8</span>
                    <div>
                      <strong className="text-foreground-dark">Set Active Dates</strong>
                      <p className="text-foreground mt-2">
                        Choose start and end dates. Leave end date empty for ongoing codes, or set
                        a deadline to create urgency.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">9</span>
                    <div>
                      <strong className="text-foreground-dark">Save the Discount</strong>
                      <p className="text-foreground mt-2">
                        Click <strong>Save discount</strong>. Your code is now active and ready
                        to share with customers.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Automatic Discounts */}
              <section id="automatic-discounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Automatic Discounts
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Automatic discounts apply without customers entering a code. They are ideal for
                  site-wide sales, tiered pricing, and BOGO offers where you want everyone to benefit.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating an Automatic Discount
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Discounts</strong> and click <strong>Create discount</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Select your discount type (Amount off, Free shipping, or Buy X get Y)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Under &quot;Method&quot;, select <strong>Automatic discount</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Enter a title that customers will see (e.g., &quot;Summer Sale: 20% Off&quot;)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Configure the discount value and conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Set active dates and save</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">When to Use Automatic Discounts</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Sitewide sales where everyone gets the same discount</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Tiered discounts (spend £50 get 10%, spend £100 get 20%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Buy X get Y offers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Free shipping thresholds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>When you need to track individual code performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Influencer or affiliate tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Automatic discounts show as a line item in the cart, so customers see the savings
                    as they shop. This can increase conversion by showing value before checkout.
                  </p>
                </div>
              </section>

              {/* Discount Strategies */}
              <section id="discount-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Discount Strategies
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Different promotional goals call for different discount approaches. Here are proven
                  strategies for common ecommerce objectives.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      First Purchase Conversion
                    </h3>
                    <p className="text-foreground mb-3">
                      Goal: Convert first-time visitors into customers.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended approach:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Offer 10-15% off or free shipping on first order</li>
                      <li>• Collect email in exchange for the code</li>
                      <li>• Use a welcome popup with exit intent</li>
                      <li>• Limit to one use per customer</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Increase Average Order Value
                    </h3>
                    <p className="text-foreground mb-3">
                      Goal: Get customers to spend more per order.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended approach:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Tiered discounts: 10% off £50+, 15% off £100+, 20% off £150+</li>
                      <li>• Free gift with orders over £75</li>
                      <li>• Free shipping threshold above current AOV</li>
                      <li>• Use automatic discounts so savings show in cart</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Clear Slow-Moving Inventory
                    </h3>
                    <p className="text-foreground mb-3">
                      Goal: Move products that are not selling well.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended approach:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Apply discount to specific collection (e.g., &quot;Clearance&quot;)</li>
                      <li>• Use steeper discounts (30-50%) to drive urgency</li>
                      <li>• Create time-limited flash sales</li>
                      <li>• Exclude from other promotions to protect margins</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Win Back Lapsed Customers
                    </h3>
                    <p className="text-foreground mb-3">
                      Goal: Re-engage customers who have not purchased recently.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended approach:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Create unique codes for each segment</li>
                      <li>• Offer meaningful discount (15-20%)</li>
                      <li>• Set short expiration (7-14 days) for urgency</li>
                      <li>• Send via email with personalised message</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Usage Limits */}
              <section id="usage-limits" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Usage Limits and Conditions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Proper limits prevent discount abuse and help you control promotional costs.
                  Always consider how customers might try to game your discounts.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Available Limits
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Total number of uses:</strong> Limit how many times the code can be used in total (e.g., first 100 customers)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>One use per customer:</strong> Prevents customers from using the code multiple times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Minimum purchase:</strong> Requires a minimum spend before discount applies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Minimum quantity:</strong> Requires a minimum number of items in cart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Customer eligibility:</strong> Restrict to specific customer segments or individuals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Product/collection scope:</strong> Apply only to certain products or collections</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Combining Conditions
                </h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Example: VIP Early Access Sale</h4>
                  <p className="text-foreground mb-3">Configure these settings:</p>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• <strong>Value:</strong> 20% off</li>
                    <li>• <strong>Applies to:</strong> Entire order</li>
                    <li>• <strong>Minimum purchase:</strong> £50</li>
                    <li>• <strong>Customer eligibility:</strong> VIP customer segment only</li>
                    <li>• <strong>Usage limit:</strong> One use per customer</li>
                    <li>• <strong>Active dates:</strong> 48 hours before general sale starts</li>
                  </ul>
                </div>
              </section>

              {/* Tracking Performance */}
              <section id="tracking-performance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Tracking Performance
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Measuring discount performance helps you understand what works and optimise future
                  promotions.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Viewing Discount Analytics
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Discounts</strong> in your Shopify admin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click on any discount to see its performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>View total uses, total discount amount, and when it was used</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Key Metrics to Track
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Usage Count</h4>
                    <p className="text-foreground">
                      How many times the code was used. Compare against how many were sent for
                      redemption rate.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Revenue Generated</h4>
                    <p className="text-foreground">
                      Total sales from orders using the discount. Use Reports to find this data.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Average Order Value</h4>
                    <p className="text-foreground">
                      Compare AOV of discounted orders vs regular orders. Discounts should not
                      dramatically lower AOV.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">New vs Returning Customers</h4>
                    <p className="text-foreground">
                      Track whether discounts are acquiring new customers or just discounting
                      customers who would buy anyway.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use UTM parameters when sharing codes via email or social. This lets you track
                    which channels drive the most discount redemptions in Google Analytics.
                  </p>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Mistakes
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Discounting Too Often
                    </h3>
                    <p className="text-foreground mb-3">
                      Constant sales train customers to wait for discounts. Your brand loses perceived
                      value.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Reserve discounts for specific occasions. Focus on value-adds
                      like free shipping or gifts instead of percentage off.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Not Setting Usage Limits
                    </h3>
                    <p className="text-foreground mb-3">
                      Unlimited codes can spread beyond your intended audience and cut into margins.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Always set &quot;one use per customer&quot; for codes. Consider total
                      usage limits for exclusive promotions.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Easily Guessable Codes
                    </h3>
                    <p className="text-foreground mb-3">
                      Codes like &quot;DISCOUNT10&quot; or &quot;SAVE20&quot; can be guessed by savvy shoppers who were
                      not meant to have them.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Add random characters or use Shopify&apos;s random code generator.
                      Example: SUMMER23-XK7 instead of SUMMER20.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Forgetting to Set End Dates
                    </h3>
                    <p className="text-foreground mb-3">
                      Codes without end dates stay active indefinitely and can resurface months later.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Always set an end date. Review and deactivate old codes
                      monthly.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Not Testing Before Launch
                    </h3>
                    <p className="text-foreground mb-3">
                      Discount logic errors can cost money (too much discount) or frustrate customers
                      (code not working).
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Always test new discounts by placing a test order before
                      sharing the code. Verify the discount applies correctly.
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
                      href="/guides/how-to-reduce-shopify-cart-abandonment"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Reduce Cart Abandonment</h4>
                      <p className="text-sm text-foreground">Use discounts to recover lost sales</p>
                    </Link>
                    <Link
                      href="/guides/how-to-set-up-klaviyo-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Klaviyo Setup Guide</h4>
                      <p className="text-sm text-foreground">Send discount codes via email</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Promotions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you plan promotional strategies, set up complex discount rules, and
            integrate discounts with your email marketing for maximum impact.
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
