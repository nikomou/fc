import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Offer Free Shipping on Shopify",
  description:
    "Complete guide to offering free shipping on Shopify. Learn about threshold strategies, shipping rates, profitability calculations, and conversion optimisation.",
  alternates: {
    canonical: "/guides/how-to-offer-free-shipping-on-shopify",
  },
  openGraph: {
    title: "How to Offer Free Shipping on Shopify",
    description: "Complete guide to offering free shipping on Shopify.",
    url: "/guides/how-to-offer-free-shipping-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "free-shipping-benefits", title: "Free Shipping Benefits", level: 2 },
  { id: "threshold-strategies", title: "Threshold Strategies", level: 2 },
  { id: "setting-up-free-shipping", title: "Setting Up Free Shipping", level: 2 },
  { id: "calculating-profitability", title: "Calculating Profitability", level: 2 },
  { id: "promoting-free-shipping", title: "Promoting Free Shipping", level: 2 },
  { id: "alternative-approaches", title: "Alternative Approaches", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Offer Free Shipping on Shopify",
  description: "Complete guide to offering free shipping on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-offer-free-shipping-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Offer Free Shipping on Shopify", item: `${siteConfig.url}/guides/how-to-offer-free-shipping-on-shopify` },
  ],
};

export default function ShopifyFreeShippingGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shipping</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>13 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Offer Free Shipping on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Free shipping is one of the most powerful conversion drivers in ecommerce. This guide covers how to implement it profitably, set the right thresholds, and promote it effectively.
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

              <section id="free-shipping-benefits" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Free Shipping Benefits</h2>
                <p className="text-lg text-foreground mb-4">
                  Free shipping addresses one of the biggest reasons for cart abandonment: unexpected costs at checkout. Research consistently shows that shipping costs are the primary reason customers abandon their carts.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Beyond reducing abandonment, free shipping can increase average order value when tied to a minimum spend threshold, driving customers to add more items to qualify.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Statistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">79%</div>
                      <div className="text-sm text-foreground">of shoppers say free shipping makes them more likely to buy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">48%</div>
                      <div className="text-sm text-foreground">abandon carts due to extra costs like shipping</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">24%</div>
                      <div className="text-sm text-foreground">higher AOV with free shipping thresholds</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="threshold-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Threshold Strategies</h2>
                <p className="text-lg text-foreground mb-4">
                  The most profitable approach to free shipping is using a minimum order threshold. This protects margins while encouraging larger orders.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Setting the Right Threshold</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Start with your AOV:</strong> Set the threshold 15-20% above your current average order value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Consider shipping costs:</strong> Ensure the threshold generates enough margin to cover typical shipping costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Test different levels:</strong> A/B test thresholds to find the optimal balance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Round to appealing numbers:</strong> £35, £50, £75 are more memorable than £47</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Example Calculation</h4>
                  <p className="text-foreground mb-3">
                    If your current AOV is £42 and average shipping cost is £4.99:
                  </p>
                  <ul className="text-foreground space-y-1">
                    <li>• Set threshold at £50 (19% above AOV)</li>
                    <li>• Extra £8 in order value covers the £4.99 shipping cost</li>
                    <li>• You gain margin on additional products sold</li>
                  </ul>
                </div>
              </section>

              <section id="setting-up-free-shipping" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Up Free Shipping</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify offers several ways to configure free shipping, from simple all-orders free shipping to conditional rules based on order value.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Method 1: Free Shipping Rate</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Access Shipping Settings</strong>
                      <p className="text-foreground mt-1">Go to Settings → Shipping and delivery → Manage rates for your shipping profile.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Add a New Rate</strong>
                      <p className="text-foreground mt-1">Click &quot;Add rate&quot; in the shipping zone where you want to offer free shipping.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Set Price to £0</strong>
                      <p className="text-foreground mt-1">Name the rate &quot;Free Shipping&quot; and set the price to 0.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Add Conditions (Optional)</strong>
                      <p className="text-foreground mt-1">Click &quot;Add conditions&quot; to set a minimum order value. Enter your threshold amount.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Method 2: Automatic Discount</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Create Automatic Discount</h4>
                    <p className="text-foreground">Go to Discounts → Create discount → Automatic discount → Free shipping. Set your minimum purchase requirement and eligible countries.</p>
                  </div>
                </div>
              </section>

              <section id="calculating-profitability" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Calculating Profitability</h2>
                <p className="text-lg text-foreground mb-4">
                  Before implementing free shipping, calculate whether it makes financial sense for your business. The maths needs to work.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Profitability Checklist</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Know your margins:</strong> You need sufficient margin to absorb shipping costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Calculate average shipping cost:</strong> What does shipping actually cost you per order?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Estimate AOV increase:</strong> Conservative estimate is 10-30% when using thresholds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Factor conversion lift:</strong> Expect 10-20% increase in conversion rate</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Example Analysis</h3>
                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <div className="space-y-2 text-foreground">
                    <p><strong>Current state:</strong> 1000 orders/month, £40 AOV, £5 shipping charged, 3% conversion</p>
                    <p><strong>With free shipping at £50:</strong></p>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• AOV increases to £48 (20% uplift)</li>
                      <li>• Conversion increases to 3.5%</li>
                      <li>• Orders increase to 1167/month</li>
                      <li>• Revenue: £56,000 vs £40,000 previous</li>
                      <li>• Shipping cost: £5,835 (absorbed)</li>
                      <li>• Net gain: £10,165/month</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="promoting-free-shipping" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Promoting Free Shipping</h2>
                <p className="text-lg text-foreground mb-4">
                  Free shipping only works if customers know about it. Promote it prominently across your store and marketing channels.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Where to Promote</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Announcement Bar</h4>
                    <p className="text-foreground">Add a sticky banner at the top of your site: &quot;Free UK delivery on orders over £50&quot;. This is visible on every page.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Product Pages</h4>
                    <p className="text-foreground">Display free shipping messaging near the add-to-cart button. Show how much more the customer needs to spend to qualify.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Cart Page</h4>
                    <p className="text-foreground">Show a progress bar: &quot;You&apos;re £12 away from free shipping!&quot; This encourages adding more items.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Email Marketing</h4>
                    <p className="text-foreground">Include free shipping messaging in all promotional emails and abandoned cart sequences.</p>
                  </div>
                </div>
              </section>

              <section id="alternative-approaches" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Alternative Approaches</h2>
                <p className="text-lg text-foreground mb-4">
                  If blanket free shipping is not viable, consider these alternative approaches that can still reduce friction.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Free Shipping on First Order</h3>
                    <p className="text-foreground">Offer free shipping to new customers only. This removes friction for first-time buyers and helps build your customer base.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Free Shipping Club/Membership</h3>
                    <p className="text-foreground">Charge an annual fee for unlimited free shipping. This creates recurring revenue and customer loyalty.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Free Shipping on Specific Products</h3>
                    <p className="text-foreground">Offer free shipping on high-margin items only. This lets you promote free shipping while protecting margins.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Flat Rate Shipping</h3>
                    <p className="text-foreground">If free shipping is not viable, consider a low flat rate (£2.99) that removes the uncertainty of variable shipping costs.</p>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices to maximise the impact of your free shipping offer.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Free Shipping Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Test thresholds:</strong> Start conservative and optimise based on data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Monitor margins:</strong> Track profitability monthly and adjust as needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Consider geography:</strong> You may need different thresholds for different regions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Build shipping into pricing:</strong> Slightly increase product prices if needed to offset shipping costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Negotiate carrier rates:</strong> Better shipping rates make free shipping more viable</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-local-delivery" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Local Delivery Guide →</h4>
                      <p className="text-sm text-foreground">Alternative to shipping</p>
                    </Link>
                    <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Optimisation →</h4>
                      <p className="text-sm text-foreground">Reduce cart abandonment</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Shipping Strategy Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can analyse your shipping costs, configure optimal free shipping thresholds, and implement conversion-boosting shipping promotions.
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
