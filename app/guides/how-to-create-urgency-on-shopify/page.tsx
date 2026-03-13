import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Urgency on Shopify",
  description:
    "Learn proven techniques to create urgency on your Shopify store. Covers countdown timers, stock scarcity, limited-time offers, and ethical urgency tactics.",
  alternates: {
    canonical: "/guides/how-to-create-urgency-on-shopify",
  },
  openGraph: {
    title: "How to Create Urgency on Shopify",
    description: "Learn proven techniques to create urgency on your Shopify store.",
    url: "/guides/how-to-create-urgency-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "psychology-of-urgency", title: "Psychology of Urgency", level: 2 },
  { id: "countdown-timers", title: "Countdown Timers", level: 2 },
  { id: "stock-scarcity", title: "Stock Scarcity", level: 2 },
  { id: "limited-time-offers", title: "Limited-Time Offers", level: 2 },
  { id: "social-proof-urgency", title: "Social Proof Urgency", level: 2 },
  { id: "shipping-cutoffs", title: "Shipping Cutoffs", level: 2 },
  { id: "ethical-considerations", title: "Ethical Considerations", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Urgency on Shopify",
  description: "Learn proven techniques to create urgency on your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-create-urgency-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Create Urgency on Shopify", item: `${siteConfig.url}/guides/how-to-create-urgency-on-shopify` },
  ],
};

export default function CreateUrgencyGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Sales Psychology</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Urgency on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Urgency is one of the most powerful conversion drivers in ecommerce. This guide shows you how to implement it effectively and ethically on your Shopify store.
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

              <section id="psychology-of-urgency" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Psychology of Urgency</h2>
                <p className="text-lg text-foreground mb-4">
                  Urgency works because of a psychological principle called loss aversion. Research shows that people feel the pain of losing something about twice as strongly as they feel the pleasure of gaining something equivalent. When customers perceive they might miss out on a deal or product, that fear motivates action.
                </p>
                <p className="text-lg text-foreground mb-6">
                  This is why &quot;Sale ends tonight&quot; is more compelling than &quot;Sale on now&quot;. The first message implies potential loss; the second simply states availability. Effective urgency creates a clear reason to buy now rather than later.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Types of Urgency</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Time-based urgency:</strong> Deadlines, countdown timers, limited-time offers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Quantity-based urgency:</strong> Low stock warnings, limited editions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Exclusivity-based urgency:</strong> Members only, first access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Social urgency:</strong> &quot;23 people viewing this&quot;, recent purchases</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">The Key Principle</h4>
                  <p className="text-foreground">
                    Urgency only works when it is believable. Fake or constant urgency trains customers to ignore it. The most effective urgency is genuine, specific, and used sparingly.
                  </p>
                </div>
              </section>

              <section id="countdown-timers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Countdown Timers</h2>
                <p className="text-lg text-foreground mb-4">
                  Countdown timers are the most visible form of time-based urgency. They create a clear deadline that ticks down in real-time, making the urgency tangible and impossible to ignore.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">When to Use Countdown Timers</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Flash Sales</h4>
                    <p className="text-foreground">Short promotional periods (24-72 hours) work best with countdown timers. The deadline is real and creates genuine urgency.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Pre-Orders and Launches</h4>
                    <p className="text-foreground">Counting down to a product launch or the end of early-bird pricing creates anticipation and incentivises early action.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Seasonal Sales</h4>
                    <p className="text-foreground">Black Friday, Boxing Day, and summer sale countdowns give customers a clear deadline to act before prices return to normal.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Shopify Countdown Timer Apps</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Hextom Ultimate Sales Boost</strong> for multi-feature urgency tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Countdown Timer Bar</strong> for header announcement timers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Urgency, Scarcity &amp; FOMO</strong> for combined urgency features</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Timer Placement</h4>
                  <p className="text-foreground">
                    Place countdown timers where they will be seen at decision points: in announcement bars, on product pages near the add-to-cart button, and in cart drawers. Avoid placing them in popups that interrupt browsing.
                  </p>
                </div>
              </section>

              <section id="stock-scarcity" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Stock Scarcity</h2>
                <p className="text-lg text-foreground mb-4">
                  Stock-based urgency tells customers that a product is in limited supply. This triggers fear of missing out and encourages immediate purchase before the item sells out.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Displaying Stock Levels</h3>
                <p className="text-lg text-foreground mb-4">
                  Show stock levels when inventory is genuinely low. Most Shopify themes support inventory display, or you can use apps for more sophisticated implementations.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-4">Effective Stock Messages</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>&quot;Only 3 left in stock&quot; (specific number creates urgency)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>&quot;Low stock - selling fast&quot; (for moderate stock levels)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>&quot;Only 2 left in size Medium&quot; (variant-specific scarcity)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>&quot;Selling fast - 50 sold in the last 24 hours&quot; (combines scarcity with social proof)</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Implementation</h3>
                <p className="text-lg text-foreground mb-4">
                  In Shopify, you can display stock levels by enabling &quot;Show inventory quantity&quot; in your product settings. Most themes allow you to set a threshold (e.g., show only when stock is below 10 units).
                </p>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Authenticity Matters</h4>
                  <p className="text-foreground">
                    Only show genuine stock levels. If customers see &quot;Only 2 left&quot; for weeks without the product selling out, they will learn to distrust your scarcity messages.
                  </p>
                </div>
              </section>

              <section id="limited-time-offers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Limited-Time Offers</h2>
                <p className="text-lg text-foreground mb-4">
                  Limited-time offers combine discounts with deadlines. The discount provides the incentive, and the deadline provides the urgency to act now rather than later.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Types of Limited-Time Offers</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Flash Sales</strong>
                      <p className="text-foreground mt-1">Deep discounts for short periods (24-48 hours). Use sparingly for maximum impact. Announce via email and social media.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Early-Bird Discounts</strong>
                      <p className="text-foreground mt-1">Special pricing for the first X customers or first X hours of a sale. Rewards quick decision-making.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Expiring Discount Codes</strong>
                      <p className="text-foreground mt-1">Send personalised codes with clear expiry dates. &quot;Your 15% off code expires at midnight&quot; is more compelling than &quot;15% off&quot;.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Free Gift with Purchase</strong>
                      <p className="text-foreground mt-1">&quot;Free gift with orders over £50 while stocks last&quot; combines value with scarcity.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="social-proof-urgency" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Social Proof Urgency</h2>
                <p className="text-lg text-foreground mb-4">
                  Social proof urgency shows customers that others are interested in or buying the same products. This creates urgency through competition and validation.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Social Proof Techniques</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Live Viewer Count</h4>
                    <p className="text-foreground">&quot;15 people are viewing this product right now&quot; creates competition and suggests the product is in demand. Use apps like Sales Pop or Fomo.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Recent Purchase Notifications</h4>
                    <p className="text-foreground">Pop-up notifications showing &quot;Sarah from London just bought this item&quot; validate the buying decision and create a sense of activity.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Sales Velocity</h4>
                    <p className="text-foreground">&quot;32 sold in the last 24 hours&quot; combines social proof with implicit scarcity. If it is selling this fast, it might run out.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Cart Activity</h4>
                    <p className="text-foreground">&quot;7 people have this in their cart&quot; suggests competition for limited stock and can push hesitant buyers to complete their purchase.</p>
                  </div>
                </div>
              </section>

              <section id="shipping-cutoffs" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shipping Cutoffs</h2>
                <p className="text-lg text-foreground mb-4">
                  Shipping cutoffs create urgency by tying purchases to delivery dates. This is particularly effective around holidays and special occasions when customers need items by specific dates.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Effective Shipping Urgency Messages</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>&quot;Order in the next 2 hours 14 minutes for next-day delivery&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>&quot;Order by 2pm for same-day dispatch&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>&quot;Order before Friday for guaranteed Christmas delivery&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>&quot;Free express delivery on orders over £100 if ordered today&quot;</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Dynamic Shipping Messages</h4>
                  <p className="text-foreground">
                    Use apps that calculate and display dynamic shipping cutoff times based on the current time and day. These are more credible than static messages and update automatically.
                  </p>
                </div>
              </section>

              <section id="ethical-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Ethical Considerations</h2>
                <p className="text-lg text-foreground mb-4">
                  Urgency tactics can be powerful, but they must be used ethically. Deceptive urgency damages trust and can harm your brand in the long term.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">What to Avoid</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Fake Scarcity</h4>
                    <p className="text-foreground">Never show &quot;Only 2 left&quot; when you have hundreds in stock. Customers will notice when the product never sells out.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Perpetual Sales</h4>
                    <p className="text-foreground">Running a &quot;sale ending soon&quot; that never actually ends is deceptive and can violate consumer protection regulations.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Misleading Countdown Timers</h4>
                    <p className="text-foreground">Countdown timers that reset for each visitor or never actually expire are deceptive and erode trust.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Fake Social Proof</h4>
                    <p className="text-foreground">Made-up viewer counts, fake recent purchase notifications, or fabricated reviews are unethical and often illegal.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">The Golden Rule</h4>
                  <p className="text-foreground">
                    If your urgency tactics would not hold up to scrutiny or if you would be embarrassed explaining them to a customer, do not use them. Genuine urgency based on real deadlines and actual stock levels is both effective and ethical.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-run-shopify-flash-sales" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Flash Sales Guide →</h4>
                      <p className="text-sm text-foreground">Plan and execute promotions</p>
                    </Link>
                    <Link href="/guides/how-to-add-trust-badges-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Trust Badges →</h4>
                      <p className="text-sm text-foreground">Build customer confidence</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Increasing Conversions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can implement urgency tactics, optimise your conversion funnel, and create compelling campaigns that drive sales without compromising trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/ecommerce-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
