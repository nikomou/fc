import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Holiday Season Shopify Checklist: Christmas Sales",
  description:
    "Maximize holiday sales with our 76-point Shopify Christmas checklist. Master inventory planning, gift wrapping, shipping deadlines, and seasonal promotions.",
  alternates: {
    canonical: "/checklists/shopify-holiday-checklist",
  },
  openGraph: {
    title: "Shopify Holiday Season Checklist",
    description: "Prepare your Shopify store for the holiday shopping season with our comprehensive checklist.",
    url: "/checklists/shopify-holiday-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Planning (8+ Weeks Before)",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Set holiday revenue and sales targets",
      "Review last year's holiday performance",
      "Identify key dates (Black Friday, Cyber Monday, Christmas)",
      "Plan promotional calendar",
      "Create marketing budget allocation",
      "Brief team on holiday strategy",
      "Coordinate with suppliers on lead times",
      "Plan hiring if additional staff needed",
    ],
  },
  {
    title: "Inventory & Stock",
    icon: "ShoppingCart",
    color: "#0ea5e9",
    items: [
      "Forecast demand for top sellers",
      "Order stock well in advance",
      "Build safety stock for bestsellers",
      "Set up low stock alerts",
      "Plan for backorders if needed",
      "Prepare gift sets or bundles",
      "Stock packaging and supplies",
      "Organise warehouse for efficiency",
      "Plan inventory count before season",
    ],
  },
  {
    title: "Website & Store",
    icon: "Globe",
    color: "#8b5cf6",
    items: [
      "Create holiday-themed homepage banner",
      "Build gift guide collection pages",
      "Add gift wrapping option if available",
      "Enable gift messages on orders",
      "Create \"Gifts Under £X\" collections",
      "Update navigation for easy gift browsing",
      "Add countdown timers for promotions",
      "Display shipping deadlines prominently",
      "Test site performance under load",
      "Ensure mobile experience is flawless",
    ],
  },
  {
    title: "Shipping & Delivery",
    icon: "Truck",
    color: "#10b981",
    items: [
      "Confirm shipping deadlines with carriers",
      "Display last order dates prominently",
      "Offer express shipping options",
      "Consider free shipping promotions",
      "Prepare for click and collect if available",
      "Set up shipping deadline reminders",
      "Brief fulfilment team on volume",
      "Have backup carrier options ready",
      "Consider extended returns for gifts",
    ],
  },
  {
    title: "Promotions & Discounts",
    icon: "Zap",
    color: "#f59e0b",
    items: [
      "Plan discount strategy for each key date",
      "Create discount codes in advance",
      "Test all codes before going live",
      "Schedule discounts to activate/deactivate",
      "Create VIP early access offers",
      "Plan tiered discounts (spend more, save more)",
      "Prepare flash sale mechanics",
      "Consider charity/giving back promotion",
    ],
  },
  {
    title: "Email Marketing",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "Plan holiday email calendar",
      "Create gift guide emails",
      "Build anticipation with teaser emails",
      "Prepare sale announcement emails",
      "Update abandoned cart emails for urgency",
      "Plan shipping deadline reminder emails",
      "Create last-minute gift card promotion",
      "Prepare post-holiday sale emails",
      "Segment list for personalised messages",
    ],
  },
  {
    title: "Paid Advertising",
    icon: "BarChart",
    color: "#64748b",
    items: [
      "Increase ad budgets for holiday period",
      "Create holiday-specific ad creatives",
      "Set up remarketing campaigns",
      "Prepare for higher CPCs",
      "Schedule ads to match promotions",
      "Create urgency-focused ad copy",
      "Set up conversion tracking",
      "Plan budget allocation by day/week",
    ],
  },
  {
    title: "Customer Service",
    icon: "Shield",
    color: "#ef436b",
    items: [
      "Extend customer service hours",
      "Prepare response templates for FAQs",
      "Update FAQ page with holiday info",
      "Set up auto-responders with shipping info",
      "Brief team on promotions and policies",
      "Plan for increased enquiry volume",
      "Have escalation process for complaints",
      "Prepare for post-holiday returns",
    ],
  },
  {
    title: "Final Pre-Season Checks",
    icon: "Rocket",
    color: "#0ea5e9",
    items: [
      "Complete full test purchase",
      "Verify all promotions work correctly",
      "Check gift features function properly",
      "Test site on mobile devices",
      "Confirm shipping options display correctly",
      "Verify inventory levels are accurate",
      "Set up monitoring and alerts",
      "Ensure team knows their roles",
      "Rest up before the rush!",
    ],
  },
];

const STORAGE_KEY = "shopify-holiday-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "When should I start preparing my Shopify store for the holiday season?",
    answer: "Begin preparation at least 8-10 weeks before the holiday season starts. This means starting in September for the November-December peak period. Early preparation allows time for ordering stock, creating marketing assets, setting up promotions, and testing everything thoroughly. Last-minute preparation almost always leads to stockouts, errors, and missed opportunities."
  },
  {
    question: "What are the most important shipping deadlines to communicate?",
    answer: "Display clear last-order dates for guaranteed Christmas delivery. In the UK, Royal Mail typically sets deadlines in mid-December for standard delivery and later for express options. Create a dedicated shipping deadlines page, add banners to your homepage, and send email reminders as each deadline approaches. Nothing frustrates holiday shoppers more than ordering a gift that arrives late."
  },
  {
    question: "How should I handle gift wrapping and gift messages?",
    answer: "Enable gift messaging in Shopify checkout settings at minimum. For gift wrapping, you can offer it as a product customers add to cart, use an app like Gift Wrap Plus, or handle it manually for orders with gift notes. Clearly display gift options throughout the shopping experience, not just at checkout. Many customers specifically seek out stores offering gift services during the holidays."
  },
  {
    question: "Should I offer extended returns for holiday purchases?",
    answer: "Extended holiday returns are strongly recommended. Offer returns until mid-January for purchases made from November onwards. This removes a major barrier for gift buyers who worry about recipients being unable to return unsuitable gifts. Clearly communicate your extended policy on product pages, at checkout, and in confirmation emails. The slight increase in returns is typically offset by increased sales."
  },
  {
    question: "How can I create urgency without being pushy?",
    answer: "Use factual urgency rather than manufactured pressure. Display genuine shipping deadlines, show real stock levels for popular items, and highlight when promotions genuinely end. Countdown timers work well when tied to real events like shipping cutoffs or sale endings. Avoid fake urgency tactics like perpetual 'ending soon' sales, which erode trust and can harm your brand reputation."
  },
  {
    question: "What should I do about post-holiday returns and exchanges?",
    answer: "Prepare for January returns by briefing your customer service team, ensuring your returns process is smooth, and having packaging ready for exchanges. Consider sending a post-Christmas email to gift recipients explaining your exchange process. January returns are an opportunity to convert one-time gift recipients into loyal customers through excellent service and perhaps a small incentive for their next purchase."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Holiday Season Checklist",
  description: "Prepare your Shopify store for the holiday shopping season with our comprehensive checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-15",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-holiday-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Holiday Season Checklist", item: `${siteConfig.url}/checklists/shopify-holiday-checklist` },
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

export default function ShopifyHolidayChecklistPage() {
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
            <span>18 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Holiday Season Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            The holiday season can account for 30%+ of annual revenue. Use this {totalItems}-point checklist to maximise sales during the most important time of year.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Holiday Preparation Matters</h2>
          <p className="text-lg text-foreground">
            The holiday shopping season compresses significant purchasing intent into a short window. Customers are actively seeking gifts with firm deadlines. Brands that prepare thoroughly capture their share; those that do not leave money on the table.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* Holiday Success Factors */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Key Success Factors for Holiday Retail
          </h2>
          <p className="text-lg text-foreground mb-6">
            Gift-giving fundamentally changes the shopping dynamic. Customers are buying for others, which means they need confidence in your products, clear sizing information, gift options, and flexible return policies.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Holiday Revenue Impact</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">For many retailers, the November-December period represents:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                30-40% of annual revenue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                2-3x normal daily order volumes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Higher average order values (gift bundles)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                New customer acquisition opportunity
              </li>
            </ul>
            <p className="text-foreground">
              <strong className="text-foreground-dark">Stores that prepare early and execute well often see 50%+ higher holiday revenue compared to those who wing it.</strong>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Critical Holiday Elements</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">1.</span>
              <span><strong>Stock availability</strong> for bestsellers throughout the season</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">2.</span>
              <span><strong>Clear shipping deadlines</strong> prominently displayed everywhere</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">3.</span>
              <span><strong>Gift-ready options</strong> including wrapping and personalised messages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">4.</span>
              <span><strong>Extended returns</strong> to give gift buyers confidence</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Holiday Mistakes</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Running out of stock</strong> on bestsellers during peak demand</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Unclear shipping deadlines</strong> leading to disappointed customers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Website crashes</strong> under increased traffic load</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Overwhelmed customer service</strong> with no prepared responses</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Holiday Preparation Timeline
          </h2>
          <p className="text-lg text-foreground mb-6">
            Follow this timeline to ensure nothing gets missed:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">8-10 Weeks Before (September)</h3>
              <p className="text-foreground">Set targets, review last year's data, finalise stock orders, plan promotional calendar, and brief your team on strategy.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4-6 Weeks Before (October)</h3>
              <p className="text-foreground">Build gift guides, create email campaigns, set up discount codes, prepare ad creatives, and test all systems.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2 Weeks Before (Early November)</h3>
              <p className="text-foreground">Final testing, complete stock check, brief customer service, set up monitoring, and prepare backup plans.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">During Peak Season</h3>
              <p className="text-foreground">Monitor daily, respond quickly to issues, update stock levels, send shipping deadline reminders, and manage customer enquiries.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Checklists */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            Combine holiday preparation with these event-specific resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-black-friday-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Black Friday Checklist →</h3>
              <p className="text-sm text-foreground">Specific preparation for the biggest shopping weekend</p>
            </Link>
            <Link href="/checklists/shopify-flash-sale-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Flash Sale Checklist →</h3>
              <p className="text-sm text-foreground">Run time-limited promotions effectively</p>
            </Link>
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing →</h3>
              <p className="text-sm text-foreground">Build effective holiday email campaigns</p>
            </Link>
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Ensure your site handles peak traffic</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Holiday Support?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help prepare your store for the holiday rush. Do not leave your biggest season to chance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Holiday Ready</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
