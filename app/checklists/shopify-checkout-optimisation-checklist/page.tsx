import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Checkout Optimization: Reduce Abandonment",
  description:
    "Reduce cart abandonment with our checkout optimization checklist. Covers payment options, trust signals, guest checkout and mobile UX. Boost conversions now.",
  alternates: {
    canonical: "/checklists/shopify-checkout-optimisation-checklist",
  },
  openGraph: {
    title: "Shopify Checkout Optimisation Checklist",
    description: "Reduce checkout abandonment and increase conversions with our Shopify checkout optimisation checklist.",
    url: "/checklists/shopify-checkout-optimisation-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Payment Options",
    icon: "CreditCard",
    color: "#ef436b",
    items: [
      "Shopify Payments enabled for lowest fees",
      "Credit/debit cards accepted (Visa, Mastercard, Amex)",
      "Shop Pay enabled for express checkout",
      "Apple Pay enabled",
      "Google Pay enabled",
      "PayPal available as option",
      "Buy now, pay later option (Klarna, Clearpay)",
      "Payment method icons visible on product pages",
      "Local payment methods for international customers",
    ],
  },
  {
    title: "Checkout Flow",
    icon: "ShoppingCart",
    color: "#0ea5e9",
    items: [
      "Guest checkout enabled (not forcing account creation)",
      "Progress indicator showing checkout steps",
      "Single-page checkout enabled (Shopify default)",
      "Form fields minimised to essentials only",
      "Autofill and address autocomplete enabled",
      "Clear error messages for invalid inputs",
      "Keyboard navigation works properly",
      "Tab order is logical",
      "Return to cart option available",
    ],
  },
  {
    title: "Trust & Security",
    icon: "Shield",
    color: "#8b5cf6",
    items: [
      "SSL padlock visible in browser",
      "Security badges displayed",
      "Payment method logos shown",
      "Money-back guarantee mentioned",
      "Customer service contact visible",
      "Privacy policy linked",
      "Secure checkout messaging",
      "PCI compliance badge (if applicable)",
    ],
  },
  {
    title: "Order Summary",
    icon: "FileText",
    color: "#10b981",
    items: [
      "Product images visible in summary",
      "Product names clearly shown",
      "Quantities displayed",
      "Individual prices shown",
      "Subtotal clearly visible",
      "Shipping cost shown (or free shipping message)",
      "Tax/VAT shown separately",
      "Discount applied clearly shown",
      "Order total prominent",
      "Edit cart option available",
    ],
  },
  {
    title: "Shipping Options",
    icon: "Truck",
    color: "#f59e0b",
    items: [
      "Multiple shipping options offered",
      "Delivery timeframes clearly stated",
      "Free shipping threshold shown if applicable",
      "Express/next-day delivery option",
      "Click and collect if applicable",
      "International shipping clearly explained",
      "Shipping costs calculated before final step",
    ],
  },
  {
    title: "Discount Codes",
    icon: "Zap",
    color: "#ec4899",
    items: [
      "Discount code field visible but not prominent",
      "Clear success message when code applied",
      "Clear error message for invalid codes",
      "Discount amount shown in order summary",
      "Auto-apply discounts where possible",
      "Gift card field separate from discount codes",
    ],
  },
  {
    title: "Mobile Checkout",
    icon: "Globe",
    color: "#64748b",
    items: [
      "Touch targets large enough (44px minimum)",
      "Numeric keyboard for phone/card fields",
      "Form fields appropriately sized",
      "Express checkout buttons prominent",
      "No horizontal scrolling",
      "Order summary expandable/collapsible",
      "Easy to correct mistakes",
    ],
  },
  {
    title: "Post-Purchase",
    icon: "Rocket",
    color: "#ef436b",
    items: [
      "Clear order confirmation page",
      "Order number prominently displayed",
      "Confirmation email sent immediately",
      "Estimated delivery date shown",
      "Order tracking information provided",
      "Easy way to contact support",
      "Social sharing option (optional)",
      "Account creation prompt (if guest checkout)",
    ],
  },
];

const STORAGE_KEY = "shopify-checkout-optimisation-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "Why is my checkout abandonment rate so high?",
    answer: "Average cart abandonment rates hover around 70% across ecommerce. Common causes include unexpected shipping costs (60% of abandonments), forced account creation (35%), complicated checkout process (27%), security concerns (19%), and limited payment options (13%). Use analytics to identify where specifically in your checkout users drop off, then address those friction points systematically."
  },
  {
    question: "Should I require account creation or allow guest checkout?",
    answer: "Always allow guest checkout. Forcing account creation increases abandonment rates by 25-40%. Many customers want to buy quickly without commitment. However, do offer optional account creation after purchase ('Save your details for faster checkout next time'). This captures the benefit (returning customers with saved information) without the friction (additional form fields and perceived commitment)."
  },
  {
    question: "How many payment options should I offer?",
    answer: "Offer at minimum: credit/debit cards, PayPal, and one express checkout option (Shop Pay or Apple Pay). Add buy-now-pay-later (Klarna, Clearpay) if your average order value exceeds 50 pounds. International stores should add local payment methods for key markets. More options reduce abandonment, but too many creates decision paralysis. Six to eight payment methods hits the sweet spot for most stores."
  },
  {
    question: "Can I customise Shopify's checkout?",
    answer: "Shopify Plus merchants can extensively customise checkout using checkout extensibility (apps, custom fields, branding). Standard Shopify merchants have more limited customisation. You can add branding, configure settings, and use Shopify Scripts (if on Advanced Shopify), but cannot modify the checkout's core structure or layout. For most stores, focusing on the controllable elements in this checklist delivers better ROI than upgrading to Plus solely for checkout customisation."
  },
  {
    question: "Should I show shipping costs before checkout?",
    answer: "Absolutely. Unexpected shipping costs are the leading cause of cart abandonment. Display shipping cost estimates on product pages and cart pages. If you offer free shipping over a threshold, prominently display how much more customers need to spend ('Add 15 pounds more for free shipping!'). Shopify's shipping calculator widget helps customers see costs before committing to checkout."
  },
  {
    question: "How do I reduce mobile checkout abandonment?",
    answer: "Mobile checkout abandonment runs even higher than desktop, often 75-85%. Critical improvements: enable express checkout options (Shop Pay, Apple Pay, Google Pay) that reduce form filling, ensure form fields trigger appropriate keyboards (numeric for card numbers), make touch targets large (44px minimum), show progress indicators, enable autofill, and test extensively on real devices. Mobile users want speed and simplicity above all."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Checkout Optimisation Checklist",
  description: "Reduce checkout abandonment and increase conversions with our Shopify checkout optimisation checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-16",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-checkout-optimisation-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Checkout Optimisation", item: `${siteConfig.url}/checklists/shopify-checkout-optimisation-checklist` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ShopifyCheckoutOptimisationChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>12 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Checkout Optimisation Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            70% of online shopping carts are abandoned. Use this {totalItems}-point checklist to optimise your checkout and recover lost revenue.
          </p>

          <div className="flex items-center gap-4 text-sm text-foreground">
            <ChecklistProgress storageKey={STORAGE_KEY} totalItems={totalItems} />
            <span className="px-3 py-1 bg-gray-100 text-foreground-dark rounded-full font-medium">
              {checklistSections.length} sections
            </span>
          </div>
        </div>
      </section>

      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Checkout Matters</h2>
          <p className="text-lg text-foreground">
            Your checkout is the final step where transactions either complete or collapse. This checklist examines eight critical areas including payment options, checkout flow, trust signals, and mobile experience.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Revenue Impact */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Revenue Impact of Checkout Optimisation
          </h2>
          <p className="text-lg text-foreground mb-6">
            A store completing 1,000 monthly orders from 3,300 cart additions at 60 pounds average order value generates 60,000 pounds monthly revenue. Reducing abandonment from 70% to 65% yields an additional 9,300 pounds monthly, achieved without increasing traffic or marketing spend.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Top Causes of Checkout Abandonment</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Unexpected shipping costs</span>
                <span className="font-bold text-accent">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Forced account creation</span>
                <span className="font-bold text-accent">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Complicated checkout</span>
                <span className="font-bold text-accent">27%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '27%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Security concerns</span>
                <span className="font-bold text-accent">19%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '19%' }}></div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Why Checkout Affects All Traffic</h3>
          <p className="text-lg text-foreground mb-6">
            Checkout optimisation uniquely benefits all traffic sources simultaneously. Better checkout increases conversion rates for organic search, paid advertising, email marketing, social media, and direct traffic equally. Every marketing pound becomes more effective when checkout conversion rates improve.
          </p>

          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Improved ad ROI</strong> as more paid clicks convert to purchases</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Higher email revenue</strong> without growing your list</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Better organic performance</strong> through improved engagement signals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Increased customer lifetime value</strong> from smoother first purchases</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Quick Wins for Immediate Impact
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these high-impact improvements first:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Enable guest checkout</h3>
              <p className="text-foreground">Forced account creation increases abandonment by 25-40%. Let customers buy without registering.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Add express payment options</h3>
              <p className="text-foreground">Shop Pay, Apple Pay, and Google Pay dramatically reduce form-filling friction, especially on mobile.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Show shipping costs early</h3>
              <p className="text-foreground">Display shipping estimates on product and cart pages. Unexpected costs are the top abandonment cause.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Display trust badges</h3>
              <p className="text-foreground">Security badges, payment icons, and money-back guarantees reduce security concerns at the critical moment.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            Checkout optimisation works best alongside other conversion improvements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-cro-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">CRO Checklist →</h3>
              <p className="text-sm text-foreground">Broader conversion rate optimisation strategies</p>
            </Link>
            <Link href="/checklists/shopify-abandoned-cart-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Abandoned Cart Recovery →</h3>
              <p className="text-sm text-foreground">Win back customers who leave at checkout</p>
            </Link>
            <Link href="/checklists/shopify-mobile-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Mobile Optimisation →</h3>
              <p className="text-sm text-foreground">Improve the entire mobile shopping experience</p>
            </Link>
            <Link href="/checklists/shopify-product-page-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Product Page Checklist →</h3>
              <p className="text-sm text-foreground">Get more visitors to add items to cart</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Checkout Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Shopify Plus merchants can access checkout extensibility for advanced customisation. Let us help you maximise conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Optimise My Checkout</Button>
            <Button href="/shopify-plus" variant="outline-light" size="lg" icon={false}>Shopify Plus Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
