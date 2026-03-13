import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Run Shopify Flash Sales",
  description:
    "Learn how to plan and execute successful flash sales on Shopify. Covers timing, discounts, inventory management, and marketing strategies for maximum revenue.",
  alternates: {
    canonical: "/guides/how-to-run-shopify-flash-sales",
  },
  openGraph: {
    title: "How to Run Shopify Flash Sales",
    description: "Learn how to plan and execute successful flash sales on Shopify.",
    url: "/guides/how-to-run-shopify-flash-sales",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-a-flash-sale", title: "What Is a Flash Sale", level: 2 },
  { id: "planning-your-sale", title: "Planning Your Sale", level: 2 },
  { id: "setting-up-discounts", title: "Setting Up Discounts", level: 2 },
  { id: "creating-urgency", title: "Creating Urgency", level: 2 },
  { id: "marketing-your-sale", title: "Marketing Your Sale", level: 2 },
  { id: "inventory-management", title: "Inventory Management", level: 2 },
  { id: "post-sale-analysis", title: "Post-Sale Analysis", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Run Shopify Flash Sales",
  description: "Learn how to plan and execute successful flash sales on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-run-shopify-flash-sales` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Run Shopify Flash Sales", item: `${siteConfig.url}/guides/how-to-run-shopify-flash-sales` },
  ],
};

export default function FlashSalesGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Promotions</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Run Shopify Flash Sales
            </h1>

            <p className="text-xl text-foreground mb-8">
              Flash sales can generate massive revenue in short periods when executed well. This guide shows you how to plan, promote, and profit from limited-time promotions.
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

              <section id="what-is-a-flash-sale" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is a Flash Sale</h2>
                <p className="text-lg text-foreground mb-4">
                  A flash sale is a short-term promotion offering significant discounts for a limited time, typically 24-72 hours. The limited timeframe creates urgency that drives immediate purchasing decisions.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Unlike general sales that may run for weeks, flash sales leverage scarcity and time pressure to accelerate buying behaviour. Customers who might normally wait or comparison shop are compelled to act quickly before the opportunity expires.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Benefits of Flash Sales</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Rapid revenue generation:</strong> Compress weeks of sales into hours or days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Inventory clearance:</strong> Move slow-selling stock quickly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Customer acquisition:</strong> Attract new customers with compelling offers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Email list growth:</strong> Promote early access to build subscribers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Brand awareness:</strong> Generate buzz and social sharing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">The Risk of Overuse</h4>
                  <p className="text-foreground">
                    Flash sales lose effectiveness if used too frequently. Customers learn to wait for sales rather than buying at full price. Limit flash sales to 4-6 times per year for maximum impact.
                  </p>
                </div>
              </section>

              <section id="planning-your-sale" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Planning Your Sale</h2>
                <p className="text-lg text-foreground mb-4">
                  Successful flash sales require careful planning. Rushing into a sale without preparation often leads to disappointing results or operational problems.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Planning Checklist</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Define Your Goals</strong>
                      <p className="text-foreground mt-1">Is this about revenue, clearing inventory, acquiring new customers, or growing your email list? Your goal shapes your strategy.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Choose Your Products</strong>
                      <p className="text-foreground mt-1">Decide whether to discount your entire store or specific items. Often, featuring a few hero products with deep discounts works better than small discounts on everything.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Set Your Discount Level</strong>
                      <p className="text-foreground mt-1">Flash sales typically offer 20-50% off. Calculate your margins to ensure profitability. A high-volume sale with slim margins beats a low-volume sale with better margins.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Choose Timing</strong>
                      <p className="text-foreground mt-1">Consider your audience&apos;s behaviour. When are they most likely to shop? Payday weekends, lunch hours, and evenings often perform well.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Set Duration</strong>
                      <p className="text-foreground mt-1">24-48 hours is optimal for most flash sales. Longer sales reduce urgency; shorter ones may not give customers enough time to discover and shop.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="setting-up-discounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Up Discounts</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify offers several ways to apply flash sale discounts. Choose the method that best fits your promotion structure.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Discount Methods</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Automatic Discounts</h4>
                    <p className="text-foreground mb-2">Applied automatically at checkout without a code. Best for sitewide sales where you want zero friction.</p>
                    <p className="text-sm text-foreground"><strong>Setup:</strong> Discounts → Create discount → Automatic discount</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Discount Codes</h4>
                    <p className="text-foreground mb-2">Customers enter a code at checkout. Better for tracking specific campaigns or offering exclusive deals.</p>
                    <p className="text-sm text-foreground"><strong>Setup:</strong> Discounts → Create discount → Discount code</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Compare at Prices</h4>
                    <p className="text-foreground mb-2">Show original and sale prices on product pages. Creates visual impact showing the discount.</p>
                    <p className="text-sm text-foreground"><strong>Setup:</strong> Edit product → Compare at price field</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Scheduling Discounts</h4>
                  <p className="text-foreground">
                    Set start and end dates when creating discounts. This ensures your sale activates and deactivates automatically, even if you forget or are unavailable.
                  </p>
                </div>
              </section>

              <section id="creating-urgency" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating Urgency</h2>
                <p className="text-lg text-foreground mb-4">
                  Urgency is what makes flash sales work. Without time pressure, customers delay purchases and may never return. Implement multiple urgency signals throughout your store.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Urgency Elements</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Countdown timer:</strong> Add to homepage, product pages, and cart showing time until sale ends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Announcement bar:</strong> Persistent banner announcing the sale and countdown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Stock warnings:</strong> Show limited stock levels for popular items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Email reminders:</strong> Send &quot;last chance&quot; emails as the sale ending approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Social proof:</strong> Show real-time purchases with apps like Fomo or Sales Pop</span>
                  </li>
                </ul>

                <p className="text-lg text-foreground">
                  For more urgency strategies, see our <Link href="/guides/how-to-create-urgency-on-shopify" className="text-accent hover:underline">complete guide to creating urgency</Link>.
                </p>
              </section>

              <section id="marketing-your-sale" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Marketing Your Sale</h2>
                <p className="text-lg text-foreground mb-4">
                  A flash sale is only effective if people know about it. Create a marketing plan that builds anticipation before the sale and drives traffic during it.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Pre-Sale Marketing</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Tease the Sale (1 Week Before)</strong>
                      <p className="text-foreground mt-1">Send an email announcing the upcoming sale without full details. Build anticipation and create a reason to check back.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">VIP Early Access (Day Before)</strong>
                      <p className="text-foreground mt-1">Give email subscribers or loyalty members early access. This rewards loyalty and creates exclusivity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Launch Announcement (Sale Start)</strong>
                      <p className="text-foreground mt-1">Send your main email at the exact moment the sale begins. Include your best offers prominently.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">During the Sale</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Social Media</h4>
                    <p className="text-foreground">Post regularly throughout the sale. Show bestsellers, share customer purchases (with permission), countdown updates.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Reminder Emails</h4>
                    <p className="text-foreground">Send midway reminders and &quot;last hours&quot; emails. Many purchases happen in the final hours when urgency peaks.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Retargeting Ads</h4>
                    <p className="text-foreground">Increase retargeting budgets during the sale to capture visitors who did not purchase immediately.</p>
                  </div>
                </div>
              </section>

              <section id="inventory-management" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Management</h2>
                <p className="text-lg text-foreground mb-4">
                  Flash sales can quickly deplete inventory. Poor inventory management leads to overselling, cancelled orders, and damaged customer relationships.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Inventory Best Practices</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Audit stock before the sale:</strong> Know exactly what you have and in what quantities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Set stock limits:</strong> Reserve some inventory in case of overselling issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Monitor in real-time:</strong> Watch inventory levels throughout the sale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Have backup options:</strong> Plan what happens if a popular item sells out</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Fulfilment Planning</h4>
                  <p className="text-foreground">
                    Ensure you have the capacity to fulfil increased orders quickly. Late deliveries after a sale create negative impressions. Consider warning customers of potential delays during high-volume periods.
                  </p>
                </div>
              </section>

              <section id="post-sale-analysis" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Post-Sale Analysis</h2>
                <p className="text-lg text-foreground mb-4">
                  After the sale ends, analyse performance to improve future promotions. What worked? What could be better? Data-driven improvements compound over time.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Metrics to Track</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-foreground">Total revenue</span>
                      <span className="font-semibold text-foreground-dark">Compare to goals and previous sales</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-foreground">Conversion rate</span>
                      <span className="font-semibold text-foreground-dark">Typically 2-3x normal during sales</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-foreground">Average order value</span>
                      <span className="font-semibold text-foreground-dark">May drop with discounts</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-foreground">New vs returning customers</span>
                      <span className="font-semibold text-foreground-dark">Sales often attract new buyers</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Email performance</span>
                      <span className="font-semibold text-foreground-dark">Opens, clicks, conversions per email</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Questions to Answer</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Which products performed best and worst?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Which marketing channels drove the most revenue?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>What was the traffic pattern throughout the sale?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Were there any technical issues or customer complaints?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>What would you do differently next time?</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-create-urgency-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Creating Urgency →</h4>
                      <p className="text-sm text-foreground">Psychology and tactics</p>
                    </Link>
                    <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Optimisation →</h4>
                      <p className="text-sm text-foreground">Maximise sale conversions</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Your Promotions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can plan and execute flash sales, create urgency elements, and build marketing campaigns that drive record-breaking revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/ecommerce-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
