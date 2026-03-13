import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Migrate to Shopify Plus",
  description:
    "Complete guide to upgrading from standard Shopify to Shopify Plus. Learn about the benefits, migration process, new features to implement, and how to maximise your Plus investment.",
  alternates: {
    canonical: "/guides/how-to-migrate-to-shopify-plus",
  },
  openGraph: {
    title: "How to Migrate to Shopify Plus",
    description: "Complete guide to upgrading from standard Shopify to Shopify Plus.",
    url: "/guides/how-to-migrate-to-shopify-plus",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "when-to-upgrade", title: "When to Upgrade", level: 2 },
  { id: "plus-exclusive-features", title: "Plus-Exclusive Features", level: 2 },
  { id: "upgrade-process", title: "The Upgrade Process", level: 2 },
  { id: "checkout-customisation", title: "Checkout Customisation", level: 2 },
  { id: "automation-with-flow", title: "Automation with Flow", level: 2 },
  { id: "b2b-setup", title: "B2B Setup", level: 2 },
  { id: "maximising-your-investment", title: "Maximising Your Investment", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Migrate to Shopify Plus",
  description: "Complete guide to upgrading from standard Shopify to Shopify Plus.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-migrate-to-shopify-plus` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Migrate to Shopify Plus", item: `${siteConfig.url}/guides/how-to-migrate-to-shopify-plus` },
  ],
};

export default function MigrateToShopifyPlusGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shopify Plus</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>18 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Migrate to Shopify Plus
            </h1>

            <p className="text-xl text-foreground mb-8">
              Upgrading to Shopify Plus unlocks enterprise features that can transform your ecommerce operations. This guide covers when to upgrade and how to make the most of Plus.
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

              <section id="when-to-upgrade" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">When to Upgrade</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Plus starts at $2,500/month (approximately £2,000), so it&apos;s important to upgrade at the right time. Consider Plus when you need its specific features or have outgrown standard Shopify.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Signs You&apos;re Ready for Plus</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Revenue over £1M/year:</strong> At this level, Plus often pays for itself in lower transaction fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Need B2B capabilities:</strong> Native B2B features like company accounts and custom pricing require Plus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Complex checkout requirements:</strong> Checkout customisation is Plus-only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>High-volume flash sales:</strong> Plus handles unlimited transactions per minute</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Multiple storefronts:</strong> Plus includes expansion stores for international markets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Enterprise integrations:</strong> Access to advanced APIs and higher rate limits</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Transaction Fee Savings</h4>
                  <p className="text-foreground">
                    Shopify Plus credit card rates start at 1.5% + 25p (compared to 1.7% on Advanced). If you process over £2M annually, the transaction fee savings alone can offset much of the Plus cost.
                  </p>
                </div>
              </section>

              <section id="plus-exclusive-features" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Plus-Exclusive Features</h2>
                <p className="text-lg text-foreground mb-4">
                  Understanding what Plus offers helps you plan which features to implement after upgrading.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Checkout Extensibility</h3>
                    <p className="text-foreground">Customise the checkout with apps and custom code. Add upsells, custom fields, delivery date pickers, loyalty points, and more directly in checkout.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify Functions</h3>
                    <p className="text-foreground">Custom backend logic for discounts, shipping, and payment customisation. Create complex discount rules, custom shipping rates, or payment method restrictions.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">B2B on Shopify</h3>
                    <p className="text-foreground">Native wholesale functionality with company accounts, custom price lists, payment terms, and B2B-specific checkout experiences.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify Flow</h3>
                    <p className="text-foreground">Powerful workflow automation. Automate inventory alerts, customer tagging, fraud review, order routing, and hundreds of other processes.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Launchpad</h3>
                    <p className="text-foreground">Schedule and automate product launches, flash sales, and campaigns. Change themes, prices, and visibility on a schedule.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Expansion Stores</h3>
                    <p className="text-foreground">Up to 9 additional stores included in Plus pricing. Perfect for international expansion, different brands, or B2B vs B2C separation.</p>
                  </div>
                </div>
              </section>

              <section id="upgrade-process" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">The Upgrade Process</h2>
                <p className="text-lg text-foreground mb-4">
                  Upgrading from standard Shopify to Plus is straightforward since you&apos;re staying on the same platform. Here&apos;s what to expect.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Pre-Upgrade Steps</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Contact Shopify Plus Sales</strong>
                      <p className="text-foreground mt-1">Reach out to discuss your needs and get a quote. Plus pricing is negotiable based on your volume and requirements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Review Your Current Setup</strong>
                      <p className="text-foreground mt-1">Document your current apps, integrations, and customisations. Some apps have Plus-specific versions or pricing.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Plan Feature Implementation</strong>
                      <p className="text-foreground mt-1">List which Plus features you want to implement and prioritise them. Some require development work.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">During Upgrade</h3>
                <p className="text-lg text-foreground mb-4">
                  The technical upgrade is handled by Shopify. Your store continues operating normally. After upgrade:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Access to Plus admin features is enabled immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>You&apos;re assigned a Merchant Success Manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Access to Shopify Plus Academy for training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Priority support channel opens</span>
                  </li>
                </ul>
              </section>

              <section id="checkout-customisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checkout Customisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Checkout customisation is one of the most valuable Plus features. It can significantly improve conversion rates and average order value.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">What You Can Customise</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Checkout branding:</strong> Full control over colours, fonts, and styling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Checkout UI extensions:</strong> Add custom components like upsells, banners, and trust badges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Post-purchase upsells:</strong> Show additional offers after payment but before thank you page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Custom fields:</strong> Collect additional information like gift messages or delivery instructions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Payment customisation:</strong> Reorder, rename, or hide payment methods based on conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Delivery customisation:</strong> Offer date selection, time slots, or custom delivery options</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Checkout Extensibility vs Scripts</h4>
                  <p className="text-foreground">
                    Shopify is transitioning from checkout.liquid scripts to Checkout Extensibility. New Plus stores should use Extensibility. Existing stores using scripts should plan migration, though scripts remain supported for now.
                  </p>
                </div>
              </section>

              <section id="automation-with-flow" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Automation with Flow</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Flow is an automation platform that can save hours of manual work daily. It uses triggers, conditions, and actions to create workflows.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">High-Impact Workflows</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Inventory management</h3>
                    <p className="text-foreground">Automatically tag products as &quot;low stock&quot; when inventory drops below threshold. Hide sold-out products from collections. Send reorder alerts to suppliers.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Customer segmentation</h3>
                    <p className="text-foreground">Tag customers based on behaviour: VIP after spending over £500, &quot;at-risk&quot; if no order in 90 days, &quot;wholesale-interest&quot; if they visit trade pages.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Fraud prevention</h3>
                    <p className="text-foreground">Flag orders for review based on risk indicators: mismatched billing/shipping, new customer high-value order, certain postcodes, etc.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Order routing</h3>
                    <p className="text-foreground">Route orders to different fulfilment locations based on SKU, customer location, or order value. Automatically split orders if needed.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Getting Started with Flow</h3>
                <p className="text-lg text-foreground mb-4">
                  Access Flow from Apps → Shopify Flow in your admin. Start with templates (pre-built workflows you can customise) before creating from scratch.
                </p>
              </section>

              <section id="b2b-setup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">B2B Setup</h2>
                <p className="text-lg text-foreground mb-4">
                  If you&apos;re upgrading to Plus for B2B capabilities, plan your B2B implementation carefully.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">B2B Configuration Steps</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Enable B2B</strong>
                      <p className="text-foreground mt-1">Go to Settings → B2B and enable the feature. Choose whether to run blended (B2B and DTC together) or dedicated B2B store.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Create Price Lists</strong>
                      <p className="text-foreground mt-1">Set up wholesale pricing tiers. Use percentage discounts for simplicity or fixed prices for precise control.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Payment Terms</strong>
                      <p className="text-foreground mt-1">Set default payment terms and determine which customers qualify for net 30, net 60, etc.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Set Up Companies</strong>
                      <p className="text-foreground mt-1">Create company accounts, add locations, and invite buyers. Assign price lists and payment terms to each location.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">B2B Resources</h4>
                  <p className="text-foreground mb-4">
                    For detailed B2B setup instructions, see our dedicated guides:
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href="/guides/how-to-set-up-shopify-b2b" className="text-accent hover:underline">How to Set Up Shopify B2B →</Link>
                    <Link href="/guides/how-to-create-wholesale-pricing-on-shopify" className="text-accent hover:underline">How to Create Wholesale Pricing →</Link>
                    <Link href="/guides/how-to-set-up-trade-accounts-on-shopify" className="text-accent hover:underline">How to Set Up Trade Accounts →</Link>
                  </div>
                </div>
              </section>

              <section id="maximising-your-investment" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Maximising Your Investment</h2>
                <p className="text-lg text-foreground mb-4">
                  To get the most from your Plus investment, use the features that directly impact revenue and efficiency.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Quick Wins After Upgrade</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Implement checkout upsells:</strong> Can increase AOV by 10-15%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Set up Flow automations:</strong> Start with inventory alerts and customer tagging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Customise checkout branding:</strong> Match checkout to your brand for improved trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Review transaction fees:</strong> Ensure you&apos;re on the best rate for your volume</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Ongoing Optimisation</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Regularly review Flow automations and add new ones as you identify repetitive tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Work with your Merchant Success Manager on growth strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Attend Shopify Plus Academy sessions for new features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Test checkout optimisations using A/B testing</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/shopify-plus" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Plus Services →</h4>
                      <p className="text-sm text-foreground">Our Plus development expertise</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Optimise your Plus store</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade to Plus?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team specialises in Shopify Plus implementations. We can help you upgrade, implement Plus-exclusive features, and maximise your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-plus" variant="outline-light" size="lg" icon={false}>Shopify Plus Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
