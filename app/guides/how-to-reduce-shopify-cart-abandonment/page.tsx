import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Reduce Shopify Cart Abandonment",
  description:
    "Learn proven strategies to reduce cart abandonment on your Shopify store. Covers checkout optimisation, trust signals, recovery emails, and exit-intent strategies.",
  alternates: {
    canonical: "/guides/how-to-reduce-shopify-cart-abandonment",
  },
  openGraph: {
    title: "How to Reduce Shopify Cart Abandonment",
    description:
      "Learn proven strategies to reduce cart abandonment and recover lost sales on Shopify.",
    url: "/guides/how-to-reduce-shopify-cart-abandonment",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-cart-abandonment", title: "Understanding Cart Abandonment", level: 2 },
  { id: "optimising-your-checkout", title: "Optimising Your Checkout", level: 2 },
  { id: "building-trust", title: "Building Trust", level: 2 },
  { id: "shipping-and-pricing", title: "Shipping and Pricing", level: 2 },
  { id: "recovery-emails", title: "Recovery Emails", level: 2 },
  { id: "exit-intent-strategies", title: "Exit-Intent Strategies", level: 2 },
  { id: "measuring-success", title: "Measuring Success", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Reduce Shopify Cart Abandonment",
  description:
    "Learn proven strategies to reduce cart abandonment and recover lost sales on Shopify.",
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
    "@id": `${siteConfig.url}/guides/how-to-reduce-shopify-cart-abandonment`,
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
      name: "How to Reduce Shopify Cart Abandonment",
      item: `${siteConfig.url}/guides/how-to-reduce-shopify-cart-abandonment`,
    },
  ],
};

export default function CartAbandonmentGuidePage() {
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
              How to Reduce Shopify Cart Abandonment
            </h1>

            <p className="text-xl text-foreground mb-8">
              Nearly 70% of online shopping carts are abandoned. This guide shows you how to
              reduce that number and recover lost sales with proven optimisation strategies.
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
              {/* Understanding Cart Abandonment */}
              <section id="understanding-cart-abandonment" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding Cart Abandonment
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Cart abandonment occurs when a customer adds items to their basket but leaves
                  without completing the purchase. The average ecommerce abandonment rate hovers
                  around 69-70%, meaning for every 10 customers who add items to their cart,
                  only 3 actually buy.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Understanding why customers abandon is the first step to reducing it. Research
                  consistently identifies the same key reasons:
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Top Reasons for Abandonment</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">48%</span>
                      <span>Extra costs too high (shipping, taxes, fees)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">26%</span>
                      <span>Site wanted them to create an account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">22%</span>
                      <span>Delivery too slow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">18%</span>
                      <span>Didn't trust the site with payment info</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">17%</span>
                      <span>Checkout was too complicated</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">13%</span>
                      <span>Website had errors</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The good news is that most of these reasons are within your control. By
                  systematically addressing each one, you can significantly reduce your
                  abandonment rate and increase revenue without spending more on advertising.
                </p>
              </section>

              {/* Optimising Your Checkout */}
              <section id="optimising-your-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Optimising Your Checkout
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The checkout process is where most abandonment happens. Every unnecessary step,
                  confusing element, or moment of friction gives customers a reason to leave.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Enable Guest Checkout
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Forcing account creation is one of the biggest conversion killers. Many
                  customers, especially first-time visitors, simply want to buy quickly.
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Settings → Checkout in your Shopify admin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Under "Customer accounts", select "Accounts are optional"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Save your changes</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Reduce Form Fields
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Every form field is friction. Review your checkout and remove anything that
                  isn't absolutely necessary:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use a single name field instead of separate first/last name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Auto-fill city and region based on postcode</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Make phone number optional unless required for delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Remove company name field unless B2B is significant</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Offer Multiple Payment Methods
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Different customers prefer different payment methods. At minimum, offer:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Credit/debit cards:</strong> The baseline option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>PayPal:</strong> Trusted by customers who don't want to enter card details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Shop Pay:</strong> Shopify's accelerated checkout, significantly faster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Apple Pay/Google Pay:</strong> One-tap mobile checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Buy Now Pay Later:</strong> Klarna or Clearpay for larger purchases</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Shop Pay users convert 1.72x more than regular checkouts. If you're on
                    Shopify, enabling Shop Pay is one of the highest-impact changes you can make
                    for checkout conversion.
                  </p>
                </div>
              </section>

              {/* Building Trust */}
              <section id="building-trust" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Building Trust
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Trust is essential for online purchases. Customers are handing over payment
                  details to a website they may have never seen before. Visual trust signals
                  throughout the purchase journey help overcome this hesitation.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Trust Elements to Display
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>SSL certificate:</strong> The padlock icon shows data is encrypted (Shopify includes this)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Payment badges:</strong> Display Visa, Mastercard, PayPal logos near checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Security badges:</strong> Norton, McAfee, or "Secure Checkout" messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Reviews and ratings:</strong> Show star ratings and review counts on product pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Contact information:</strong> Visible phone number and email builds confidence</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Clear Return Policy
                </h3>
                <p className="text-lg text-foreground mb-4">
                  A generous, clearly communicated return policy reduces purchase anxiety.
                  Display your policy:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>On product pages (near the add to cart button)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>In the cart sidebar or drawer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>At checkout before payment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>In the footer (link to full policy)</span>
                  </li>
                </ul>
              </section>

              {/* Shipping and Pricing */}
              <section id="shipping-and-pricing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Shipping and Pricing
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Unexpected costs at checkout are the number one reason for cart abandonment.
                  Customers hate surprises when they're about to pay.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Be Transparent About Shipping
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Show shipping costs on product pages, not just at checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Display estimated delivery times clearly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>If you offer free shipping over a threshold, show progress ("Add £15 for free shipping")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Be upfront about international shipping costs and customs</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Free Shipping Strategies
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Free shipping is the most powerful conversion tool in ecommerce. Consider these
                  approaches:
                </p>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Threshold-based free shipping</strong>
                      <p className="text-foreground mt-1">Free shipping over £50 (or your average order value) increases cart sizes while covering costs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Built into product prices</strong>
                      <p className="text-foreground mt-1">"Free shipping" is absorbed into your pricing. Customers prefer this even at higher prices.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Member-only free shipping</strong>
                      <p className="text-foreground mt-1">Incentivise account creation or newsletter signup with free shipping benefits.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Free Shipping Progress Bar Example</h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-foreground mb-2">Your basket: £35.00</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-sm text-accent font-medium">Add £15 more for FREE delivery!</p>
                  </div>
                </div>
              </section>

              {/* Recovery Emails */}
              <section id="recovery-emails" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Recovery Emails
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Cart recovery emails are one of the highest-ROI marketing channels. They target
                  people who have already shown purchase intent, making them far more likely to
                  convert than cold traffic.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Email Sequence Strategy
                </h3>
                <p className="text-lg text-foreground mb-4">
                  A three-email sequence typically works best:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground-dark">Email 1: Reminder</h4>
                      <span className="text-sm text-accent font-medium">1 hour after abandonment</span>
                    </div>
                    <p className="text-foreground">
                      Simple, helpful reminder. "You left something behind" with a clear image of
                      the products and a direct link back to cart. No discount yet.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground-dark">Email 2: Address Concerns</h4>
                      <span className="text-sm text-accent font-medium">24 hours after abandonment</span>
                    </div>
                    <p className="text-foreground">
                      Overcome objections. Highlight your return policy, shipping speed, customer
                      reviews. Answer common questions about the product.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground-dark">Email 3: Incentive</h4>
                      <span className="text-sm text-accent font-medium">48-72 hours after abandonment</span>
                    </div>
                    <p className="text-foreground">
                      Create urgency. Limited-time discount (10% off, free shipping) with an
                      expiration. This is your last attempt to recover the sale.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up in Shopify
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify has built-in abandoned checkout recovery:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Settings → Checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll to "Abandoned checkouts"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enable automatic emails and customise timing</span>
                  </li>
                </ol>
                <p className="text-lg text-foreground">
                  For more sophisticated sequences, consider Klaviyo, Omnisend, or Drip which
                  integrate with Shopify and offer better personalisation and automation.
                </p>
              </section>

              {/* Exit-Intent Strategies */}
              <section id="exit-intent-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Exit-Intent Strategies
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Exit-intent technology detects when a user is about to leave (mouse moving
                  toward the browser close button) and displays a last-chance offer. When used
                  thoughtfully, this can recover customers who would otherwise be lost.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Effective Exit-Intent Offers
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Discount code:</strong> "Wait! Here's 10% off your order" (use sparingly)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Free shipping:</strong> "Free delivery on your first order" (if not already offered)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Email capture:</strong> "Save your cart for later" in exchange for email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Live chat:</strong> "Have questions? Chat with us now" for high-value products</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Best Practices
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Only show to new visitors (don't annoy returning customers)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Limit to once per session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Make it easy to close (don't trap users)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Test different offers to find what works for your audience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Don't use aggressive or deceptive language</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    The "save your cart" approach is often more effective than discounts because
                    it captures the email without training customers to expect sales. You can
                    then follow up with recovery emails.
                  </p>
                </div>
              </section>

              {/* Measuring Success */}
              <section id="measuring-success" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Measuring Success
                </h2>
                <p className="text-lg text-foreground mb-4">
                  To improve cart abandonment, you need to measure it accurately. Here's how to
                  track the right metrics and benchmark your progress.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Key Metrics to Track
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Cart Abandonment Rate</h4>
                    <p className="text-foreground mb-2">
                      (Carts Created - Purchases) / Carts Created × 100
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Industry average:</strong> 69-70% | <strong>Target:</strong> Under 60%
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Checkout Abandonment Rate</h4>
                    <p className="text-foreground mb-2">
                      (Checkouts Started - Purchases) / Checkouts Started × 100
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Industry average:</strong> 50-60% | <strong>Target:</strong> Under 40%
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Recovery Email Performance</h4>
                    <p className="text-foreground mb-2">
                      Open rate, click rate, and recovered revenue per email sent.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Target:</strong> 40%+ open rate, 10%+ click rate, 5%+ conversion rate
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Where to Find This Data
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Shopify Analytics:</strong> Orders → Abandoned checkouts for basic data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Google Analytics:</strong> Enhanced ecommerce funnel reports for detailed analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Email platform:</strong> Klaviyo, Omnisend for recovery email metrics</span>
                  </li>
                </ul>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Reducing cart abandonment is an ongoing process. Start with the highest-impact
                  changes and work through systematically.
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Benchmark your current rate</strong>
                      <p className="text-foreground mt-1">Check your abandonment rate in Shopify Analytics before making changes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Enable recovery emails</strong>
                      <p className="text-foreground mt-1">The quickest win. Set up Shopify's built-in emails or install Klaviyo.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Add payment options</strong>
                      <p className="text-foreground mt-1">Enable Shop Pay, Apple Pay, and PayPal if not already active.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Display shipping costs early</strong>
                      <p className="text-foreground mt-1">Add shipping information to product pages and cart.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-add-trust-badges-to-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Trust Badges Guide →</h4>
                      <p className="text-sm text-foreground">Build customer confidence</p>
                    </Link>
                    <Link
                      href="/shopify-speed-optimisation"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Speed Optimisation →</h4>
                      <p className="text-sm text-foreground">Faster checkout = more conversions</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Reducing Abandonment?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your checkout process and implement conversion optimisation
            strategies that turn more browsers into buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>
              Talk to Us
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
