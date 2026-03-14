import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify B2B",
  description:
    "Complete guide to setting up B2B ecommerce on Shopify. Learn about company accounts, customer-specific pricing, payment terms, and wholesale functionality.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-b2b",
  },
  openGraph: {
    title: "How to Set Up Shopify B2B",
    description:
      "Complete guide to setting up B2B ecommerce on Shopify. Learn about company accounts, customer-specific pricing, and wholesale functionality.",
    url: "/guides/how-to-set-up-shopify-b2b",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-shopify-b2b", title: "What is Shopify B2B?", level: 2 },
  { id: "b2b-requirements", title: "B2B Requirements", level: 2 },
  { id: "setting-up-companies", title: "Setting Up Companies", level: 2 },
  { id: "price-lists", title: "Creating Price Lists", level: 2 },
  { id: "payment-terms", title: "Payment Terms", level: 2 },
  { id: "b2b-checkout", title: "B2B Checkout Experience", level: 2 },
  { id: "catalogues", title: "Product Catalogues", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify B2B",
  description:
    "Complete guide to setting up B2B ecommerce on Shopify. Learn about company accounts, customer-specific pricing, and wholesale functionality.",
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
    "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-b2b`,
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
      name: "How to Set Up Shopify B2B",
      item: `${siteConfig.url}/guides/how-to-set-up-shopify-b2b`,
    },
  ],
};

export default function ShopifyB2BGuidePage() {
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
                <span>18 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify B2B
            </h1>

            <p className="text-xl text-foreground mb-8">
              Shopify&apos;s native B2B features let you sell to wholesale customers directly from your
              existing store. This guide covers everything from company accounts to custom pricing.
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
              {/* What is Shopify B2B? */}
              <section id="what-is-shopify-b2b" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  What is Shopify B2B?
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify B2B is a suite of native features that enables merchants to sell wholesale
                  alongside their direct-to-consumer business. Rather than running separate stores
                  or relying on third-party apps, you can manage both B2C and B2B sales from a
                  single Shopify admin.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Introduced in 2022 and significantly expanded since, Shopify B2B provides
                  enterprise-grade wholesale functionality that was previously only available
                  through expensive custom solutions or complex app stacks.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key B2B Features</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Company accounts</strong> with multiple buyers and locations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Custom price lists</strong> with percentage or fixed discounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Payment terms</strong> including net 15, 30, 60, and custom terms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product catalogues</strong> to control what each company can see and purchase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Quantity rules</strong> for minimum orders, increments, and case packs</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The advantage of native B2B is seamless integration. Your inventory stays synced,
                  orders flow through the same fulfilment process, and you can switch between B2C
                  and B2B views without leaving your admin.
                </p>
              </section>

              {/* B2B Requirements */}
              <section id="b2b-requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  B2B Requirements
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before diving into setup, you need to understand what Shopify plan you require.
                  B2B features are available on different plans with varying capabilities.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify Plus</h3>
                    <p className="text-foreground mb-2">
                      Full B2B functionality including unlimited companies, advanced payment terms,
                      custom catalogues, and the ability to run B2B and DTC from the same storefront
                      (blended store).
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Established wholesalers, brands with significant B2B revenue
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify (Standard Plans)</h3>
                    <p className="text-foreground mb-2">
                      Limited B2B features through apps like Wholesale Club or B2B/Wholesale Solution.
                      These work well for smaller wholesale operations but lack the depth of native B2B.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Small wholesale operations, testing B2B viability
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Planning Your B2B Setup
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Before enabling B2B, map out your requirements:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>How many wholesale customers</strong> will you serve? This affects pricing and structure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>What pricing tiers</strong> do you need? Most businesses have 2-4 wholesale tiers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Payment terms</strong> you can offer. Net 30 is standard, but your cash flow matters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Minimum order values</strong> that make wholesale profitable for you.</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Start with a simple structure. You can always add complexity later, but removing
                    tiers or changing terms with existing customers is awkward. Begin with 2-3 price
                    tiers and standard payment terms.
                  </p>
                </div>
              </section>

              {/* Setting Up Companies */}
              <section id="setting-up-companies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Setting Up Companies
                </h2>
                <p className="text-lg text-foreground mb-4">
                  In Shopify B2B, companies are the foundation. A company represents a business
                  customer and can have multiple locations (ship-to addresses) and contacts
                  (buyers who can place orders).
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating Your First Company
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Navigate to Customers → Companies</strong>
                      <p className="text-foreground mt-1">In your Shopify admin, go to Customers and select the Companies tab.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Add company details</strong>
                      <p className="text-foreground mt-1">Enter the company name, and optionally add their external ID if you use one in your accounting system.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Add a location</strong>
                      <p className="text-foreground mt-1">Each company needs at least one location. This is the billing/shipping address and determines tax calculations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Add contacts</strong>
                      <p className="text-foreground mt-1">Contacts are the people who can log in and place orders. Add their email and set their permissions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Assign a catalogue and price list</strong>
                      <p className="text-foreground mt-1">Determine what products this company can see and what prices they pay.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Company Structure Best Practices
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Use consistent naming conventions. &quot;ABC Corp Ltd&quot; and &quot;ABC Corporation&quot; will create confusion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Add external IDs that match your accounting software for easier reconciliation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>For large companies with multiple buyers, designate one as the main contact.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Use company notes to record relationship details, credit limits, or special arrangements.</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Contact Permissions</h4>
                  <p className="text-foreground mb-3">
                    Each contact can have different permission levels:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Order only:</strong> Can browse and place orders at their assigned location</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Location admin:</strong> Can manage orders for their location</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Admin:</strong> Can manage all locations and contacts within the company</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Price Lists */}
              <section id="price-lists" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Creating Price Lists
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Price lists are how you offer different pricing to different customers. You can
                  create as many price lists as needed and assign them to specific company locations.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Types of Pricing Adjustments
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Percentage Discount</h4>
                    <p className="text-foreground">
                      Apply a blanket percentage off your retail prices. For example, &quot;Gold tier&quot;
                      customers get 40% off all products. This is the simplest approach and works
                      well when your margins are consistent across products.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Fixed Prices</h4>
                    <p className="text-foreground">
                      Set specific prices for individual products. More work to maintain but gives
                      you precise control. Useful when margins vary significantly or you have
                      negotiated pricing with specific customers.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Volume Pricing</h4>
                    <p className="text-foreground">
                      Offer better prices at higher quantities. For example, 1-11 units at full
                      price, 12-47 units at 20% off, 48+ units at 35% off. Encourages larger orders.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up a Price List
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to Products → Price lists</strong>
                      <p className="text-foreground mt-1">Create a new price list and give it a descriptive name like &quot;Gold Tier - 40% Off&quot;.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Set your pricing method</strong>
                      <p className="text-foreground mt-1">Choose percentage off all products, or switch to fixed pricing for granular control.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Configure currency</strong>
                      <p className="text-foreground mt-1">Select which currency this price list uses. You can have different price lists for different currencies.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Assign to company locations</strong>
                      <p className="text-foreground mt-1">Link the price list to the company locations that should receive this pricing.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use a naming convention that makes sense at scale. Instead of &quot;Tier 1&quot;, use
                    &quot;Wholesale 30%&quot; or &quot;Premium Partner 45%&quot;. When you have 50+ price lists,
                    you will thank yourself.
                  </p>
                </div>
              </section>

              {/* Payment Terms */}
              <section id="payment-terms" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Payment Terms
                </h2>
                <p className="text-lg text-foreground mb-4">
                  One of the most valuable B2B features is the ability to offer payment terms.
                  Instead of requiring payment at checkout, you can extend credit to trusted
                  wholesale customers.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Available Payment Terms
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Due on fulfilment:</strong> Payment required when order ships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Net 7/15/30/60/90:</strong> Payment due within specified days of invoice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Due on receipt:</strong> Payment due immediately upon receiving invoice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Custom terms:</strong> Define your own payment schedule</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Payment Terms
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Navigate to Settings → Payments</strong>
                      <p className="text-foreground mt-1">Enable B2B payment terms in your payment settings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Create payment term templates</strong>
                      <p className="text-foreground mt-1">Define the terms you want to offer, such as Net 30 or Net 60.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Assign to company locations</strong>
                      <p className="text-foreground mt-1">Different locations can have different payment terms based on their creditworthiness.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Managing Credit Risk</h4>
                  <p className="text-foreground mb-3">
                    Extending credit always involves risk. Protect yourself by:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Starting new customers on shorter terms (Net 15) and extending as they prove reliable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Setting credit limits per company location</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Running credit checks before approving large credit lines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Monitoring overdue payments and adjusting terms accordingly</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* B2B Checkout */}
              <section id="b2b-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  B2B Checkout Experience
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The B2B checkout differs from standard checkout in several ways. Understanding
                  these differences helps you optimise the experience for your wholesale customers.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Key Differences
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>No guest checkout:</strong> B2B customers must log in to see their pricing and place orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Location selection:</strong> Customers with multiple locations choose which one they are ordering for</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Payment options:</strong> May include payment on terms rather than immediate payment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Purchase order numbers:</strong> B2B customers can add PO numbers to orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Vaulted payment methods:</strong> Save payment methods for faster future ordering</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Optimising the B2B Experience
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Quick Order Form</h4>
                    <p className="text-foreground">
                      B2B customers often know exactly what they want. Enable quick order forms that
                      let them enter SKUs and quantities directly, bypassing product page browsing.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Order Templates</h4>
                    <p className="text-foreground">
                      Allow customers to save and reorder from templates. A cafe that orders the same
                      coffee beans monthly should not have to rebuild their cart each time.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Draft Orders</h4>
                    <p className="text-foreground">
                      Use draft orders for large or complex orders. Your sales team can build the
                      order, apply any special discounts, and send it to the customer for approval.
                    </p>
                  </div>
                </div>
              </section>

              {/* Catalogs */}
              <section id="catalogues" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Product Catalogues
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Catalogues control which products different B2B customers can see and purchase.
                  This is essential when you have products only available to certain customer
                  tiers, or when you want to hide consumer products from wholesale buyers.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Catalogue Use Cases
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Wholesale-only products:</strong> Products only available in bulk quantities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Region-specific products:</strong> Products licensed for sale in specific territories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Partner exclusives:</strong> Products only available to specific retail partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Pre-release products:</strong> New products visible only to select customers before launch</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating Catalogues
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to Products → Catalogues</strong>
                      <p className="text-foreground mt-1">Create a new catalogue with a descriptive name.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Add products or collections</strong>
                      <p className="text-foreground mt-1">Choose specific products or entire collections to include in the catalogue.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Link to price list</strong>
                      <p className="text-foreground mt-1">Associate the catalogue with a price list to determine pricing for these products.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Assign to company locations</strong>
                      <p className="text-foreground mt-1">Determine which B2B customers have access to this catalogue.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Think of catalogues and price lists as separate layers. A catalogue controls
                    visibility (what they can see), while a price list controls pricing (what they
                    pay). The same catalogue can be used with different price lists for different
                    customer tiers.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  You now have the foundation for a complete Shopify B2B setup. Here is how to
                  move forward:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Start small</strong>
                      <p className="text-foreground mt-1">Set up 3-5 existing wholesale customers first. Work out the kinks before scaling.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Get feedback</strong>
                      <p className="text-foreground mt-1">Ask your test customers about their experience. What is confusing? What is missing?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Document your process</strong>
                      <p className="text-foreground mt-1">Create internal documentation for onboarding new wholesale customers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Scale gradually</strong>
                      <p className="text-foreground mt-1">Once confident, migrate remaining customers and open applications for new wholesale accounts.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-create-wholesale-pricing-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Wholesale Pricing Guide →</h4>
                      <p className="text-sm text-foreground">Advanced pricing strategies</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Setting Up B2B?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team specialises in Shopify Plus B2B implementations. From simple wholesale
            setups to complex multi-tier pricing, we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a B2B Quote
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
