import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Shopify Product Bundles",
  description:
    "Complete guide to creating product bundles on Shopify. Learn about bundle types, pricing strategies, apps, and how to increase average order value.",
  alternates: {
    canonical: "/guides/how-to-create-shopify-product-bundles",
  },
  openGraph: {
    title: "How to Create Shopify Product Bundles",
    description: "Complete guide to creating product bundles on Shopify.",
    url: "/guides/how-to-create-shopify-product-bundles",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-product-bundles", title: "What Are Product Bundles", level: 2 },
  { id: "bundle-types", title: "Bundle Types", level: 2 },
  { id: "native-bundles", title: "Native Bundles Feature", level: 2 },
  { id: "bundle-apps", title: "Bundle Apps", level: 2 },
  { id: "pricing-strategies", title: "Pricing Strategies", level: 2 },
  { id: "inventory-management", title: "Inventory Management", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Shopify Product Bundles",
  description: "Complete guide to creating product bundles on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-create-shopify-product-bundles` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Create Shopify Product Bundles", item: `${siteConfig.url}/guides/how-to-create-shopify-product-bundles` },
  ],
};

export default function ShopifyProductBundlesGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Products</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Shopify Product Bundles
            </h1>

            <p className="text-xl text-foreground mb-8">
              Product bundles are one of the most effective ways to increase average order value. This guide covers everything from bundle types to implementation strategies that drive more revenue.
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

              <section id="what-are-product-bundles" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Are Product Bundles</h2>
                <p className="text-lg text-foreground mb-4">
                  Product bundles combine multiple items into a single purchasable unit, typically at a discounted price compared to buying each item separately. They&apos;re a proven strategy for increasing average order value and moving inventory.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Bundles work because they provide perceived value to customers while increasing your revenue per transaction. When done well, they create a win-win situation for both you and your customers.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Bundle Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Higher AOV</strong> with customers spending more per transaction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Inventory clearance</strong> by pairing slow-movers with popular items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Simplified decisions</strong> for customers overwhelmed by choice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product discovery</strong> introducing customers to new items</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="bundle-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Bundle Types</h2>
                <p className="text-lg text-foreground mb-4">
                  Different bundle types suit different products and customer needs. Understanding each type helps you choose the right approach for your store.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Fixed Bundles</h3>
                    <p className="text-foreground">Pre-set combinations that customers cannot modify. Examples include starter kits, gift sets, and curated collections. These are the simplest to manage.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Mix and Match Bundles</h3>
                    <p className="text-foreground">Customers choose from a selection of products to build their own bundle. &quot;Pick any 3 for £50&quot; promotions are a common example.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Volume Bundles</h3>
                    <p className="text-foreground">Discounts based on quantity purchased. Buy 2 get 10% off, buy 3 get 15% off. Great for consumable products.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Frequently Bought Together</h3>
                    <p className="text-foreground">Suggest complementary products based on purchase data. The classic &quot;customers also bought&quot; approach.</p>
                  </div>
                </div>
              </section>

              <section id="native-bundles" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Native Bundles Feature</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify introduced native bundle support in 2023, allowing merchants to create fixed bundles without third-party apps. This feature is available on all Shopify plans.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Creating a Native Bundle</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Create a New Product</strong>
                      <p className="text-foreground mt-1">Go to Products → Add product. This will be your bundle product.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Add Bundle Components</strong>
                      <p className="text-foreground mt-1">In the product editor, scroll to the &quot;Bundle&quot; section and click &quot;Add products&quot;. Select the products to include.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Set Bundle Price</strong>
                      <p className="text-foreground mt-1">Set the bundle price. This should be lower than the sum of individual product prices to incentivise purchase.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Inventory</strong>
                      <p className="text-foreground mt-1">Native bundles automatically track component inventory. When a component sells out, the bundle becomes unavailable.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Limitations</h4>
                  <p className="text-foreground">
                    Native bundles are fixed only. For mix-and-match, volume discounts, or advanced customisation, you&apos;ll need a third-party app.
                  </p>
                </div>
              </section>

              <section id="bundle-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Bundle Apps</h2>
                <p className="text-lg text-foreground mb-4">
                  For advanced bundling features, the Shopify App Store offers several powerful options. Here are the most popular choices.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify Bundles (Free)</h3>
                    <p className="text-foreground">Shopify&apos;s own app extends native bundle functionality with a better interface and more options. Good starting point for most stores.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Bundle Builder</h3>
                    <p className="text-foreground">Allows customers to build their own bundles with step-by-step selection. Great for subscription boxes and gift sets.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Bundler</h3>
                    <p className="text-foreground">Offers volume discounts, mix-and-match, and combo bundles. Includes analytics to track bundle performance.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">PickyStory</h3>
                    <p className="text-foreground">Advanced bundle builder with AI recommendations. Includes upsell widgets for product pages and cart.</p>
                  </div>
                </div>
              </section>

              <section id="pricing-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Pricing Strategies</h2>
                <p className="text-lg text-foreground mb-4">
                  The right pricing strategy can make or break your bundle&apos;s success. Consider these approaches when setting bundle prices.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Common Pricing Models</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Percentage discount:</strong> 10-20% off the combined price. Easy to communicate and understand.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Fixed discount:</strong> Save £10 when you buy together. Works well for higher-priced bundles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Free item:</strong> Buy X, get Y free. Psychologically powerful because &quot;free&quot; is compelling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Tiered pricing:</strong> Bigger discount for larger bundles. Encourages customers to buy more.</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Pricing Example</h3>
                  <div className="space-y-2 text-foreground">
                    <p><strong>Individual prices:</strong> Product A (£30) + Product B (£25) + Product C (£20) = £75</p>
                    <p><strong>15% bundle discount:</strong> £63.75 (customer saves £11.25)</p>
                    <p><strong>Your margin:</strong> If products cost £40 total, margin drops from £35 to £23.75, but you&apos;ve sold 3 items instead of potentially 1.</p>
                  </div>
                </div>
              </section>

              <section id="inventory-management" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Management</h2>
                <p className="text-lg text-foreground mb-4">
                  Bundle inventory can be complex because it involves multiple products. Here&apos;s how to manage it effectively.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Inventory Approaches</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Component-based:</strong> Bundle availability based on lowest component stock. Native Shopify bundles work this way.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Separate SKU:</strong> Bundle has its own inventory, independent of components. Requires manual reconciliation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Virtual bundle:</strong> No separate stock. Components are picked and packed individually from existing inventory.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    For most stores, component-based inventory is best. It prevents overselling and doesn&apos;t require separate stock management for bundles.
                  </p>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices to maximise your bundle strategy&apos;s effectiveness.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Bundle Success Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Logical pairings:</strong> Bundle products that naturally go together. Customers should immediately understand the value.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Clear savings:</strong> Show the comparison price and savings prominently. &quot;Save £15&quot; is more compelling than just showing the bundle price.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Quality images:</strong> Create bundle-specific images showing all products together. This helps customers visualise what they&apos;re getting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Test and iterate:</strong> Monitor which bundles sell and which don&apos;t. Adjust pricing and composition based on data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Seasonal bundles:</strong> Create limited-time bundles for holidays and events to create urgency.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-product-page-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Page Checklist →</h4>
                      <p className="text-sm text-foreground">Optimise product pages</p>
                    </Link>
                    <Link href="/guides/how-to-manage-shopify-inventory" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Inventory Management →</h4>
                      <p className="text-sm text-foreground">Stock tracking guide</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Product Bundles?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can implement custom bundle solutions, integrate apps, and optimise your bundle strategy to maximise average order value.
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
