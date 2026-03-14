import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Abandoned Cart Recovery Checklist: Shopify Sales",
  description:
    "Recover lost sales with our 81-point abandoned cart checklist. Master email sequences, checkout optimization, incentives, and proven recovery strategies.",
  alternates: {
    canonical: "/checklists/shopify-abandoned-cart-checklist",
  },
  openGraph: {
    title: "Shopify Abandoned Cart Recovery Checklist",
    description: "Recover lost sales with our comprehensive abandoned cart recovery checklist.",
    url: "/checklists/shopify-abandoned-cart-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Understanding Cart Abandonment",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Review current abandonment rate (industry avg: 70%)",
      "Analyse where customers drop off",
      "Identify top abandoned products",
      "Check abandonment by device type",
      "Review abandonment by traffic source",
      "Analyse time spent before abandoning",
      "Survey recent abandoners if possible",
      "Set recovery rate improvement goals",
    ],
  },
  {
    title: "Email Recovery Sequence",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "First email within 1 hour of abandonment",
      "Second email at 24 hours",
      "Third email at 48-72 hours",
      "Compelling subject lines that stand out",
      "Personalised with customer name",
      "Show abandoned products with images",
      "Include direct link back to cart",
      "Clear, prominent CTA button",
      "Mobile-optimised email design",
    ],
  },
  {
    title: "Email Content Strategy",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Email 1: Simple reminder (no discount)",
      "Email 2: Address objections, add social proof",
      "Email 3: Incentive if appropriate",
      "Include product reviews/ratings",
      "Add urgency (limited stock, expiring cart)",
      "Show trust badges and guarantees",
      "Include customer service contact",
      "Add FAQ or objection handling",
    ],
  },
  {
    title: "Incentive Strategy",
    icon: "CreditCard",
    color: "#10b981",
    items: [
      "Decide if/when to offer discounts",
      "Test discount amount (5%, 10%, 15%)",
      "Consider free shipping instead of discount",
      "Use time-limited offers for urgency",
      "Ensure margin still profitable",
      "Prevent discount abuse with limits",
      "Track which incentives convert best",
      "A/B test different offers",
    ],
  },
  {
    title: "Checkout Optimisation",
    icon: "ShoppingCart",
    color: "#f59e0b",
    items: [
      "Enable guest checkout",
      "Minimise form fields required",
      "Show progress indicator",
      "Display total cost upfront (no surprises)",
      "Show shipping costs early",
      "Offer multiple payment options",
      "Enable express checkout (Shop Pay, Apple Pay)",
      "Add trust badges near payment",
      "Show money-back guarantee",
    ],
  },
  {
    title: "Remove Friction Points",
    icon: "Settings",
    color: "#ec4899",
    items: [
      "Eliminate account creation requirement",
      "Use address autocomplete",
      "Enable autofill on forms",
      "Show security badges clearly",
      "Display accepted payment methods",
      "Offer live chat support at checkout",
      "Show clear return policy",
      "Display customer service number",
    ],
  },
  {
    title: "Exit Intent & On-Site Recovery",
    icon: "Globe",
    color: "#64748b",
    items: [
      "Exit intent popup with offer",
      "Save cart for logged-in users",
      "Cart persistence for returning visitors",
      "Show recently viewed products",
      "Add urgency messaging on cart page",
      "Display low stock warnings",
      "Show how many others are viewing",
      "Sticky add-to-cart button",
    ],
  },
  {
    title: "Alternative Recovery Channels",
    icon: "Zap",
    color: "#ef436b",
    items: [
      "SMS recovery messages",
      "Push notifications (if enabled)",
      "Retargeting ads on Facebook/Instagram",
      "Google remarketing campaigns",
      "Web push notifications",
      "Direct mail for high-value carts",
      "Phone follow-up for B2B/high value",
      "Messenger/WhatsApp recovery",
    ],
  },
  {
    title: "Segment & Personalise",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Segment by cart value",
      "Segment by customer type (new vs returning)",
      "Segment by product category",
      "Personalise messaging by segment",
      "Different offers for different values",
      "VIP treatment for high-value customers",
      "Exclude recent purchasers",
      "Exclude serial abandoners from discounts",
    ],
  },
  {
    title: "Measure & Optimise",
    icon: "BarChart",
    color: "#8b5cf6",
    items: [
      "Track recovery email open rates",
      "Track click-through rates",
      "Measure conversion by email number",
      "Calculate revenue recovered",
      "Track recovery rate over time",
      "A/B test subject lines",
      "A/B test email content",
      "A/B test send times",
      "Review and optimise monthly",
    ],
  },
];

const STORAGE_KEY = "shopify-abandoned-cart-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "What is a good cart abandonment recovery rate?",
    answer: "A well-optimised abandoned cart recovery programme typically recovers 5-15% of abandoned carts. This varies by industry, price point, and how well your recovery sequence is optimised. Starting from nothing, implementing basic abandoned cart emails often yields 3-5% recovery immediately. With proper segmentation, multi-channel recovery, and ongoing optimisation, 10-15% is achievable for most stores."
  },
  {
    question: "Should I offer a discount to recover abandoned carts?",
    answer: "Discounting should be strategic, not automatic. Start with a reminder email without discount, as many abandoners simply got distracted. Reserve discounts for later emails in your sequence. Consider offering free shipping before percentage discounts, as it often converts better without training customers to expect price reductions. If you discount, 10% is usually sufficient. Segment so high-intent abandoners do not receive unnecessary discounts."
  },
  {
    question: "How quickly should the first abandoned cart email be sent?",
    answer: "Send the first email within 1-2 hours of abandonment. This timing catches customers whilst your store is still fresh in their mind and before they have purchased elsewhere. Waiting longer than 4 hours significantly reduces recovery rates. The first email should be a simple, helpful reminder rather than a hard sell. Urgency and incentives are more appropriate for later emails in the sequence."
  },
  {
    question: "How many abandoned cart emails should I send?",
    answer: "A 3-email sequence is standard and effective. Email 1 at 1 hour is a simple reminder. Email 2 at 24 hours addresses objections and includes social proof. Email 3 at 48-72 hours may include an incentive and creates final urgency. Some stores add a fourth email at 7 days, but returns diminish after the third. Monitor unsubscribe rates to ensure you are not being too aggressive."
  },
  {
    question: "Why do customers abandon their carts?",
    answer: "Research consistently shows the top reasons: unexpected costs at checkout (shipping, taxes), requirement to create an account, complicated checkout process, concerns about payment security, and simply getting distracted. Address these systematically: show total costs early, enable guest checkout, simplify forms, display trust badges, and use cart recovery emails. Also audit your checkout for device-specific issues that may cause technical abandonment."
  },
  {
    question: "Should I use SMS for cart recovery?",
    answer: "SMS cart recovery is highly effective, with recovery rates often exceeding email. However, it requires explicit consent and costs more per message. Use SMS for high-value carts where the margin justifies the cost. Time SMS carefully to avoid appearing intrusive. SMS works well as a complement to email, particularly for time-sensitive recovery (final hours of a sale). Always provide easy opt-out and comply with regulations."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Abandoned Cart Recovery Checklist",
  description: "Recover lost sales with our comprehensive abandoned cart recovery checklist.",
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
  datePublished: "2024-01-15",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/checklists/shopify-abandoned-cart-checklist`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Checklists",
      item: `${siteConfig.url}/checklists`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Abandoned Cart Recovery",
      item: `${siteConfig.url}/checklists/shopify-abandoned-cart-checklist`,
    },
  ],
};
export default function ShopifyAbandonedCartChecklistPage() {
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
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>18 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Abandoned Cart Recovery Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            70% of online shopping carts are abandoned. Use this {totalItems}-point checklist to recover lost sales and boost revenue.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Cart Recovery?</h2>
          <p className="text-lg text-foreground">
            Cart abandonment represents one of the largest revenue leaks in ecommerce. A store doing £100k monthly with 70% abandonment has £230k worth of abandoned carts. Recovering just 10% adds £23k to monthly revenue.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Recovery Opportunity */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Understanding Cart Abandonment
          </h2>
          <p className="text-lg text-foreground mb-6">
            Abandoned carts represent customers who demonstrated clear purchase intent. The hard work of getting them interested is done. Recovery simply helps them complete what they started.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Recovery Revenue Example</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">For a store with:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                £100,000 monthly revenue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                70% cart abandonment rate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                = £233,000 in abandoned carts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                10% recovery = £23,300 extra monthly revenue
              </li>
            </ul>
            <p className="text-foreground">
              That is <strong className="text-foreground-dark">£280,000 annually</strong> from a single automated flow.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Why Customers Abandon</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">1.</span>
              <span><strong>Unexpected costs:</strong> Shipping, taxes, or fees revealed at checkout. Show costs early to prevent this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">2.</span>
              <span><strong>Account required:</strong> Forced registration kills conversions. Enable guest checkout.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">3.</span>
              <span><strong>Complicated checkout:</strong> Too many form fields or steps. Simplify ruthlessly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">4.</span>
              <span><strong>Security concerns:</strong> Missing trust signals. Add badges and guarantees visibly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">5.</span>
              <span><strong>Just browsing:</strong> Not ready to buy yet. Recovery emails help when they are ready.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Recovery Benchmarks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">5-15%</div>
              <div className="text-sm text-foreground">Typical recovery rate</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">1-2 hrs</div>
              <div className="text-sm text-foreground">Optimal first email timing</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">3 emails</div>
              <div className="text-sm text-foreground">Standard sequence length</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The 3-Email Recovery Sequence
          </h2>
          <p className="text-lg text-foreground mb-6">
            This proven sequence recovers the most carts with minimal effort:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">Email 1: Within 1-2 hours</h3>
              <p className="text-foreground">Simple reminder. Show their cart, direct link back. No discount needed. Subject: "You left something behind"</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">Email 2: At 24 hours</h3>
              <p className="text-foreground">Address objections. Add product reviews, trust badges, and FAQs. Still no discount. Subject: "Still thinking it over?"</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">Email 3: At 48-72 hours</h3>
              <p className="text-foreground">Final urgency. Consider a small incentive (free shipping or 10% off). Time-limited offer. Subject: "Last chance: Your cart expires soon"</p>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-semibold text-foreground-dark mb-2">Tip: Do not train discount seekers</h3>
            <p className="text-foreground">If you always offer discounts in cart recovery emails, customers learn to abandon carts on purpose. Start without discounts and only add them for later emails after testing.</p>
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
            Cart recovery is part of a broader conversion strategy:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing Checklist</h3>
              <p className="text-sm text-foreground">Complete email strategy beyond cart recovery</p>
            </Link>
            <Link href="/checklists/shopify-conversion-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation</h3>
              <p className="text-sm text-foreground">Reduce abandonment in the first place</p>
            </Link>
            <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Checkout Optimisation</h3>
              <p className="text-sm text-foreground">Fix checkout issues causing abandonment</p>
            </Link>
            <Link href="/checklists/shopify-mobile-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Mobile Optimisation</h3>
              <p className="text-sm text-foreground">Mobile has higher abandonment rates</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-1181467.webp"
        imageAlt="Shopify abandoned cart recovery strategy"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Cart Recovery Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up and optimise your abandoned cart recovery flows for maximum revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Recovery Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
