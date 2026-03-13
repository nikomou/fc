import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Email Marketing Checklist: Complete Guide",
  description:
    "Master email marketing with our 72-point Shopify checklist. Set up automated flows, abandoned cart recovery, and Klaviyo campaigns that drive serious revenue.",
  alternates: {
    canonical: "/checklists/shopify-email-marketing-checklist",
  },
  openGraph: {
    title: "Shopify Email Marketing Checklist",
    description: "Master email marketing for your Shopify store with our comprehensive checklist.",
    url: "/checklists/shopify-email-marketing-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Email Platform Setup",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Choose email platform (Klaviyo, Shopify Email, Mailchimp)",
      "Connect email platform to Shopify",
      "Verify data sync (customers, orders, products)",
      "Set up custom sending domain",
      "Configure SPF, DKIM, DMARC records",
      "Create branded email templates",
      "Set default sender name and email",
      "Upload brand assets (logo, colours, fonts)",
      "Configure unsubscribe settings",
    ],
  },
  {
    title: "List Building",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Add newsletter signup to footer",
      "Create popup for new visitors (with offer)",
      "Set popup timing and triggers",
      "Add signup to checkout process",
      "Create dedicated landing page for signups",
      "Offer incentive for subscribing (discount, free shipping)",
      "Enable double opt-in for GDPR compliance",
      "Create welcome series for new subscribers",
      "Segment list by signup source",
    ],
  },
  {
    title: "Essential Automation Flows",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Welcome series (3-5 emails)",
      "Abandoned cart recovery (3 emails)",
      "Browse abandonment",
      "Post-purchase thank you",
      "Product review request",
      "Win-back series for lapsed customers",
      "VIP/loyalty recognition",
      "Birthday/anniversary emails",
      "Back-in-stock notifications",
      "Price drop alerts",
    ],
  },
  {
    title: "Abandoned Cart Emails",
    icon: "ShoppingCart",
    color: "#10b981",
    items: [
      "First email within 1 hour",
      "Second email at 24 hours",
      "Third email at 48-72 hours",
      "Include cart contents with images",
      "Show product prices clearly",
      "Include direct link back to cart",
      "Add urgency (limited stock, expiring cart)",
      "Consider discount in later emails",
      "Include trust badges and guarantees",
      "A/B test subject lines",
    ],
  },
  {
    title: "Welcome Series",
    icon: "Globe",
    color: "#f59e0b",
    items: [
      "Email 1: Immediate welcome + discount code",
      "Email 2: Brand story and values",
      "Email 3: Best sellers or popular products",
      "Email 4: Social proof and reviews",
      "Email 5: Final reminder on welcome offer",
      "Personalise based on signup source",
      "Include clear CTAs in each email",
      "Set appropriate delays between emails",
    ],
  },
  {
    title: "Campaign Best Practices",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "Establish consistent sending schedule",
      "Segment audiences for relevance",
      "Write compelling subject lines (under 50 chars)",
      "Use preview text strategically",
      "Include clear single CTA",
      "Optimise for mobile viewing",
      "Use dynamic product recommendations",
      "A/B test regularly",
      "Monitor engagement metrics",
      "Clean list of unengaged subscribers",
    ],
  },
  {
    title: "Deliverability",
    icon: "Shield",
    color: "#64748b",
    items: [
      "Authenticate domain (SPF, DKIM, DMARC)",
      "Warm up new sending domain gradually",
      "Monitor bounce rates (keep under 2%)",
      "Monitor spam complaints (keep under 0.1%)",
      "Remove hard bounces immediately",
      "Re-engage or remove inactive subscribers",
      "Avoid spam trigger words",
      "Include physical address in emails",
      "Make unsubscribe easy and visible",
      "Check email against spam filters before sending",
    ],
  },
  {
    title: "Analytics & Optimisation",
    icon: "BarChart",
    color: "#ef436b",
    items: [
      "Track open rates by campaign",
      "Track click-through rates",
      "Track conversion rates and revenue",
      "Monitor unsubscribe rates",
      "Track revenue per email",
      "Track revenue per subscriber",
      "Compare flow vs campaign performance",
      "A/B test subject lines and content",
      "Review and optimise underperforming flows",
      "Set up regular reporting schedule",
    ],
  },
];

const STORAGE_KEY = "shopify-email-marketing-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "Should I use Klaviyo or Shopify Email?",
    answer: "Klaviyo is the industry standard for Shopify email marketing due to its deep Shopify integration, powerful segmentation, and robust automation capabilities. Shopify Email is simpler and more affordable, suitable for smaller stores or those just starting with email. If you anticipate growing beyond basic email campaigns, starting with Klaviyo avoids migration pain later. For stores doing over 100k GBP annually, Klaviyo typically delivers positive ROI through better automation and segmentation."
  },
  {
    question: "How many emails per week should I send?",
    answer: "Quality matters more than quantity, but most successful ecommerce brands send 2-4 campaigns per week in addition to automated flows. Start conservatively (1-2 per week) and increase based on engagement metrics. If open rates decline or unsubscribes increase, reduce frequency. Segment your most engaged subscribers for more frequent communication whilst sending less to less active subscribers. Always prioritise relevance over reach."
  },
  {
    question: "What is a good open rate for ecommerce emails?",
    answer: "Ecommerce email open rates typically range from 15-25%. However, Apple Mail Privacy Protection has made open rates less reliable as a metric. Focus instead on click-through rates (2-5% is good) and, most importantly, revenue generated. Automated flows (welcome, abandoned cart) typically outperform campaigns significantly. Compare your performance against your own historical data rather than industry benchmarks, as every audience is different."
  },
  {
    question: "When should the first abandoned cart email be sent?",
    answer: "Send your first abandoned cart email within 1-2 hours of abandonment. This catches customers while your store is still fresh in their mind, and before they have purchased elsewhere. The first email should be a simple reminder without a discount. Follow up at 24 hours with social proof and addressing objections. Reserve any discount offer for a third email at 48-72 hours. This sequence typically recovers 5-15% of abandoned carts."
  },
  {
    question: "How do I improve email deliverability?",
    answer: "Start with technical authentication: configure SPF, DKIM, and DMARC records for your sending domain. Warm up new domains gradually by starting with your most engaged subscribers. Monitor bounce rates (keep under 2%) and spam complaints (keep under 0.1%). Remove hard bounces immediately and regularly clean inactive subscribers. Avoid spam trigger words, include your physical address, and make unsubscribing easy. Test emails through deliverability checkers before major campaigns."
  },
  {
    question: "What is the most important email automation to set up first?",
    answer: "Abandoned cart recovery is typically the highest-impact automation to implement first. It recovers revenue that would otherwise be lost, often generating 5-15% recovery rates. Set up a 3-email sequence before moving to your welcome series, which converts new subscribers into first-time buyers. Once these two core flows are running, add post-purchase and browse abandonment flows. These four automations form the foundation that generates revenue automatically whilst you build out campaigns."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Email Marketing Checklist",
  description: "Master email marketing for your Shopify store with our comprehensive checklist.",
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
    "@id": `${siteConfig.url}/checklists/shopify-email-marketing-checklist`,
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
      name: "Email Marketing Checklist",
      item: `${siteConfig.url}/checklists/shopify-email-marketing-checklist`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ShopifyEmailMarketingChecklistPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>16 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Email Marketing Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Email delivers the highest ROI of any marketing channel. Use this {totalItems}-point checklist to build an email programme that drives serious revenue.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Email Marketing?</h2>
          <p className="text-lg text-foreground">
            Email delivers 35-45x ROI on average. Unlike paid advertising where costs grow with scale, email becomes more profitable as your list grows. Automation flows generate revenue around the clock whilst you sleep.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Email Advantage */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Power of Email for Ecommerce
          </h2>
          <p className="text-lg text-foreground mb-6">
            Email marketing is unique among marketing channels because you own your audience. Algorithm changes cannot reduce your reach. Platform fees do not eat into margins. Your subscriber list is an asset that compounds in value.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Email ROI Example</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">For a store with 10,000 email subscribers:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Email platform cost: ~£150/month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Average revenue per subscriber/month: £3-5
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Monthly email revenue: £30,000-50,000
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                ROI: 200-300x on platform costs
              </li>
            </ul>
            <p className="text-foreground">
              As your list grows, costs increase slowly while <strong className="text-foreground-dark">revenue scales proportionally</strong>.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Essential Email Flows</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">1.</span>
              <span><strong>Abandoned cart:</strong> Recovers 5-15% of lost sales. Sends 3 emails starting within 1 hour of abandonment.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">2.</span>
              <span><strong>Welcome series:</strong> Converts new subscribers into first-time buyers. 3-5 emails introducing your brand and products.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">3.</span>
              <span><strong>Post-purchase:</strong> Builds loyalty and drives reviews. Thanks customers and introduces complementary products.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">4.</span>
              <span><strong>Win-back:</strong> Re-engages lapsed customers. Triggers after 60-90 days of inactivity with special offers.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Target Benchmarks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">15-25%</div>
              <div className="text-sm text-foreground">Open rate</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">2-5%</div>
              <div className="text-sm text-foreground">Click-through rate</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">5-15%</div>
              <div className="text-sm text-foreground">Cart recovery rate</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Quick Wins for Immediate Impact
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these high-impact automations first:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Set up abandoned cart emails</h3>
              <p className="text-foreground">This single flow typically recovers 5-15% of abandoned carts. Send the first email within 1 hour. No discount needed in email one.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Create a welcome series</h3>
              <p className="text-foreground">New subscribers are most engaged immediately after signup. A 5-email welcome series converts far better than a single welcome email.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Authenticate your domain</h3>
              <p className="text-foreground">Set up SPF, DKIM, and DMARC records. Without these, emails may go to spam. Technical setup once, benefits forever.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Segment your list</h3>
              <p className="text-foreground">Even basic segmentation (purchased vs. not, recent vs. inactive) dramatically improves engagement and reduces unsubscribes.</p>
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
            Email works best alongside these other strategies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-abandoned-cart-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Abandoned Cart Recovery</h3>
              <p className="text-sm text-foreground">Deep dive into cart recovery strategies</p>
            </Link>
            <Link href="/checklists/shopify-conversion-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation</h3>
              <p className="text-sm text-foreground">Convert more of the traffic email drives</p>
            </Link>
            <Link href="/checklists/shopify-launch-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist</h3>
              <p className="text-sm text-foreground">Set up email from day one</p>
            </Link>
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist</h3>
              <p className="text-sm text-foreground">Drive organic traffic to capture as subscribers</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Email Marketing Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up and optimise your email marketing for maximum revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Email Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
