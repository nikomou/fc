import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Abandoned Cart Emails",
  description:
    "Learn how to create high-converting abandoned cart email sequences for your Shopify store. Recover lost sales with proven strategies, timing, and copy templates.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-abandoned-cart-emails",
  },
  openGraph: {
    title: "How to Set Up Shopify Abandoned Cart Emails",
    description:
      "Learn how to create high-converting abandoned cart email sequences for your Shopify store.",
    url: "/guides/how-to-set-up-shopify-abandoned-cart-emails",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "cart-abandonment-overview", title: "Cart Abandonment Overview", level: 2 },
  { id: "why-people-abandon", title: "Why People Abandon Carts", level: 2 },
  { id: "email-sequence-structure", title: "Email Sequence Structure", level: 2 },
  { id: "email-one", title: "Email 1: The Reminder", level: 2 },
  { id: "email-two", title: "Email 2: Address Objections", level: 2 },
  { id: "email-three", title: "Email 3: Final Push", level: 2 },
  { id: "advanced-tactics", title: "Advanced Tactics", level: 2 },
  { id: "measuring-performance", title: "Measuring Performance", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Abandoned Cart Emails",
  description:
    "Learn how to create high-converting abandoned cart email sequences for your Shopify store.",
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
    "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-abandoned-cart-emails`,
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
      name: "How to Set Up Shopify Abandoned Cart Emails",
      item: `${siteConfig.url}/guides/how-to-set-up-shopify-abandoned-cart-emails`,
    },
  ],
};

export default function AbandonedCartGuidePage() {
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
              How to Set Up Shopify Abandoned Cart Emails
            </h1>

            <p className="text-xl text-foreground mb-8">
              Cart abandonment costs ecommerce stores billions in lost revenue. A well-crafted
              abandoned cart sequence can recover 10-15% of abandoned carts, turning lost sales
              into revenue.
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
              {/* Cart Abandonment Overview */}
              <section id="cart-abandonment-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Cart Abandonment Overview
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Cart abandonment happens when someone adds items to their shopping cart but
                  leaves without completing the purchase. The average abandonment rate across
                  ecommerce is around 70%, meaning only 3 in 10 carts convert to orders.
                </p>
                <p className="text-lg text-foreground mb-6">
                  This represents an enormous opportunity. These aren't random visitors. They've
                  already found products they want and shown purchase intent. A timely, well-crafted
                  email sequence can bring many of them back to complete their purchase.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The Numbers That Matter</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>70%</strong> average cart abandonment rate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>45%</strong> of abandoned cart emails are opened</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>21%</strong> of openers click through</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>10-15%</strong> recovery rate is achievable with a good sequence</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  Abandoned cart emails consistently have the highest revenue per recipient of
                  any email type. They're essential for any Shopify store serious about maximising
                  revenue.
                </p>
              </section>

              {/* Why People Abandon */}
              <section id="why-people-abandon" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why People Abandon Carts
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Understanding why people abandon helps you address their concerns in your
                  emails. The reasons fall into a few categories.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Cost-Related Reasons
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Unexpected shipping costs</strong> - The number one reason for abandonment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Total was higher than expected</strong> - Taxes, fees, or exchange rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Found a better price elsewhere</strong> - Price shopping before committing</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Trust and Confidence
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Security concerns</strong> - Worried about payment safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Unclear return policy</strong> - Not sure if they can return if it doesn't fit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>New to the brand</strong> - Haven't built trust yet</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Process and Timing
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Just browsing</strong> - Using cart as a wishlist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Complicated checkout</strong> - Too many steps or required account creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Got distracted</strong> - Planned to come back but forgot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Slow delivery</strong> - Needed it sooner than available</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Your abandoned cart emails should address the most common abandonment reasons.
                    Include free shipping thresholds, return policy highlights, security badges,
                    and social proof to overcome hesitation.
                  </p>
                </div>
              </section>

              {/* Email Sequence Structure */}
              <section id="email-sequence-structure" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Email Sequence Structure
                </h2>
                <p className="text-lg text-foreground mb-4">
                  A three-email sequence is the sweet spot for most stores. Fewer emails leaves
                  money on the table. More than three rarely improves recovery and risks annoying
                  customers.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Recommended Sequence</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                      <div>
                        <p className="font-medium text-foreground-dark">Email 1: 1-4 hours after abandonment</p>
                        <p className="text-foreground text-sm">Gentle reminder. Show cart contents. No discount.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                      <div>
                        <p className="font-medium text-foreground-dark">Email 2: 24 hours after abandonment</p>
                        <p className="text-foreground text-sm">Address objections. Add social proof. Consider small incentive.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                      <div>
                        <p className="font-medium text-foreground-dark">Email 3: 72 hours after abandonment</p>
                        <p className="text-foreground text-sm">Final push. Scarcity/urgency. Stronger incentive if offering.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Timing Considerations
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Don't send immediately</strong> - Give them time to complete naturally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>4 hours is the sweet spot</strong> - Still top of mind but not pushy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Space emails appropriately</strong> - 24-48 hours between emails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Stop if they purchase</strong> - Exit flow when conversion happens</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  To Discount or Not?
                </h3>
                <p className="text-lg text-foreground mb-4">
                  There's debate about whether abandoned cart emails should include discounts.
                  Here's a balanced approach:
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Email 1:</strong> No discount. Many will convert without one.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Email 2:</strong> Consider free shipping or small discount for first-time buyers only.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Email 3:</strong> Stronger incentive if offering, but make it time-limited.</span>
                  </li>
                </ul>
              </section>

              {/* Email One */}
              <section id="email-one" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Email 1: The Reminder
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The first email should be simple and helpful, not salesy. Many people genuinely
                  forgot or got distracted. A friendly reminder is often all they need.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Email 1 Structure
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Subject line</strong>
                      <p className="text-foreground mt-1">
                        Keep it simple and direct. "Did you forget something?" or "Your cart is waiting"
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Opening line</strong>
                      <p className="text-foreground mt-1">
                        Acknowledge they left items behind. Be helpful, not guilt-trippy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Cart contents</strong>
                      <p className="text-foreground mt-1">
                        Show images, names, and prices of abandoned items. Visual reminder is powerful.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Clear CTA</strong>
                      <p className="text-foreground mt-1">
                        One button: "Complete Your Order" or "Return to Cart"
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <p className="text-gray-400 text-sm mb-2">Subject Line Examples:</p>
                  <pre className="text-gray-100 text-sm">
{`• You left something behind
• Your cart misses you
• Still thinking it over?
• Don't let these slip away
• Complete your order`}
                  </pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Include a direct link to their cart with items already loaded. Don't make
                    them navigate back to products and add items again. Reduce friction at every
                    step.
                  </p>
                </div>
              </section>

              {/* Email Two */}
              <section id="email-two" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Email 2: Address Objections
                </h2>
                <p className="text-lg text-foreground mb-4">
                  By the second email, those who were simply distracted have likely already
                  converted. The remaining abandoners have specific concerns. Address them.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Email 2 Strategy
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Social proof:</strong> Add customer reviews or testimonials for the abandoned products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Trust signals:</strong> Highlight your return policy, guarantees, or security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Answer questions:</strong> Link to FAQ or offer to chat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Soft incentive:</strong> Free shipping or small discount for first-time buyers</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Email 2 Structure
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Acknowledge they haven't completed their order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Ask if they have questions (builds relationship)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Include 2-3 reviews for the abandoned products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Highlight key trust factors (free returns, secure checkout)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Show cart contents again</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>CTA to complete purchase</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Subject Line Examples</h4>
                  <ul className="text-foreground text-sm space-y-1">
                    <li>• "Still on the fence? Let us help"</li>
                    <li>• "Here's what others say about [product]"</li>
                    <li>• "Questions about your order?"</li>
                    <li>• "Your items are getting popular"</li>
                    <li>• "Not sure? Here's our promise to you"</li>
                  </ul>
                </div>
              </section>

              {/* Email Three */}
              <section id="email-three" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Email 3: Final Push
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The final email creates urgency. By now, only the most hesitant abandoners
                  remain. This email should give them a compelling reason to act now.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Urgency Tactics
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Cart expiration:</strong> "We can only hold these items for 24 more hours"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Limited stock:</strong> "Only 3 left in stock" (if true)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Expiring offer:</strong> "Your 10% discount expires at midnight"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Price increase:</strong> "Prices go up this Friday"</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Email 3 Structure
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Create urgency with time-limited element</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Offer strongest incentive (if using discounts)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Brief reminder of product benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Show cart contents one more time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Urgent CTA: "Complete Order Now"</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Subject Line Examples</h4>
                  <ul className="text-foreground text-sm space-y-1">
                    <li>• "Last chance: Your cart expires soon"</li>
                    <li>• "Final reminder about your order"</li>
                    <li>• "Your 15% off expires at midnight"</li>
                    <li>• "Going, going... almost gone"</li>
                    <li>• "We'll give you one more day"</li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Only use urgency tactics that are genuine. Fake scarcity erodes trust. If
                    you say items are limited, they should actually be limited. If the discount
                    expires, it should actually expire.
                  </p>
                </div>
              </section>

              {/* Advanced Tactics */}
              <section id="advanced-tactics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Advanced Tactics
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Once your basic sequence is working, these tactics can improve recovery rates
                  further.
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Segment by Cart Value
                    </h3>
                    <p className="text-foreground mb-3">
                      High-value carts justify more aggressive recovery efforts.
                    </p>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• Under 50 GBP: Standard sequence, no discount</li>
                      <li>• 50-150 GBP: Standard sequence, consider free shipping</li>
                      <li>• Over 150 GBP: Additional email, stronger incentive, possibly phone follow-up</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Segment by Customer Type
                    </h3>
                    <p className="text-foreground mb-3">
                      First-time visitors need different messaging than returning customers.
                    </p>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• New visitors: More trust-building, reviews, guarantee highlights</li>
                      <li>• Past purchasers: Remind them why they love you, loyalty incentive</li>
                      <li>• VIPs: Personal touch, exclusive offer, direct contact option</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Product-Specific Content
                    </h3>
                    <p className="text-foreground mb-3">
                      Dynamic content based on abandoned products improves relevance.
                    </p>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• Include specific product reviews for abandoned items</li>
                      <li>• Show product-specific FAQs or sizing guides</li>
                      <li>• Add cross-sell suggestions that complement cart items</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Add SMS to the Mix
                    </h3>
                    <p className="text-foreground mb-3">
                      SMS has higher open rates and adds another touchpoint.
                    </p>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• Send SMS 1 hour after email 1 if no open</li>
                      <li>• Keep SMS short and direct with cart link</li>
                      <li>• Only SMS those who have opted in for marketing texts</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Measuring Performance */}
              <section id="measuring-performance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Measuring Performance
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Track these metrics to understand and improve your abandoned cart performance.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Recovery Rate</h4>
                    <p className="text-foreground text-sm mb-2">
                      Percentage of abandoned carts that convert after receiving emails.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Benchmark:</strong> 5-15% is typical. Above 10% is good.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Revenue Per Recipient</h4>
                    <p className="text-foreground text-sm mb-2">
                      Total recovered revenue divided by emails sent.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Benchmark:</strong> Varies widely by AOV. Track trend over time.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Email Performance by Position</h4>
                    <p className="text-foreground text-sm mb-2">
                      Track open, click, and conversion rates for each email in the sequence.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Insight:</strong> Email 1 typically has highest open rate, Email 3 highest conversion rate.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Time to Conversion</h4>
                    <p className="text-foreground text-sm mb-2">
                      How long after abandonment do most recoveries happen?
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Use:</strong> Optimise email timing based on when conversions actually occur.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  A/B Testing Ideas
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Subject lines (biggest impact on open rates)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Timing of first email (1 hour vs 4 hours vs 24 hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Discount vs no discount in email 2</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Number of emails (2 vs 3 vs 4)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>CTA button copy and colour</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-klaviyo-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Klaviyo Setup Guide</h4>
                      <p className="text-sm text-foreground">Set up your email platform</p>
                    </Link>
                    <Link
                      href="/guides/how-to-create-shopify-email-campaigns"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Email Campaign Guide</h4>
                      <p className="text-sm text-foreground">Create effective email campaigns</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Recovering Lost Sales?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up high-converting abandoned cart sequences that recover revenue
            automatically. We've helped stores recover thousands in otherwise lost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/shopify-integrations" variant="outline-light" size="lg" icon={false}>
              Our Email Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
