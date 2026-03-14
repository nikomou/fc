import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Black Friday Shopify Checklist: BFCM Preparation",
  description:
    "Prepare for Black Friday & Cyber Monday with our 77-point Shopify BFCM checklist. Master inventory planning, site performance, marketing, and sales strategies.",
  alternates: {
    canonical: "/checklists/shopify-black-friday-checklist",
  },
  openGraph: {
    title: "Shopify Black Friday & BFCM Checklist",
    description: "Prepare your Shopify store for Black Friday and Cyber Monday with our complete checklist.",
    url: "/checklists/shopify-black-friday-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Planning & Strategy (8+ Weeks Out)",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Set revenue and conversion targets for BFCM",
      "Review last year's performance and learnings",
      "Plan discount strategy (percentage, fixed, bundles)",
      "Identify hero products for promotion",
      "Create BFCM marketing calendar",
      "Plan email sequence (teaser, launch, reminder, last chance)",
      "Allocate advertising budget across channels",
      "Brief creative team on assets needed",
    ],
  },
  {
    title: "Inventory & Fulfilment",
    icon: "Truck",
    color: "#0ea5e9",
    items: [
      "Forecast demand based on planned promotions",
      "Order sufficient stock with buffer for bestsellers",
      "Confirm supplier lead times and delivery dates",
      "Brief fulfilment team on expected volumes",
      "Stock up on packaging materials",
      "Test pick and pack process for efficiency",
      "Set up backorder or pre-order options if needed",
      "Prepare overflow storage if necessary",
      "Confirm courier capacity and collection times",
    ],
  },
  {
    title: "Site Performance & Stability",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Run load testing to simulate traffic spikes",
      "Optimise images and compress files",
      "Enable lazy loading for images",
      "Remove unused apps and scripts",
      "Test checkout flow under load",
      "Review and optimise third-party apps",
      "Enable Shopify's CDN (automatic)",
      "Set up uptime monitoring and alerts",
      "Have developer on standby for issues",
      "Test on mobile devices thoroughly",
    ],
  },
  {
    title: "Promotions & Discounts Setup",
    icon: "CreditCard",
    color: "#10b981",
    items: [
      "Create discount codes in Shopify",
      "Test all discount codes before going live",
      "Set up automatic discounts where appropriate",
      "Create gift with purchase offers",
      "Set up bundle deals and BOGOs",
      "Schedule discounts to go live at right time",
      "Set discount end dates to create urgency",
      "Prepare VIP/early access codes for email list",
    ],
  },
  {
    title: "Website Updates",
    icon: "Globe",
    color: "#f59e0b",
    items: [
      "Create BFCM landing page",
      "Update homepage hero banner",
      "Add countdown timer to create urgency",
      "Create BFCM collection for easy browsing",
      "Update navigation to highlight sale",
      "Add announcement bar with offer details",
      "Update product badges (Sale, Best Seller)",
      "Review and update product descriptions",
      "Check all links and buttons work",
      "Prepare 'Sale Ended' page for after event",
    ],
  },
  {
    title: "Email Marketing",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "Segment email list (VIPs, recent buyers, browsers)",
      "Create teaser email (1 week before)",
      "Create early access email for VIPs",
      "Create main launch email",
      "Create reminder email (mid-sale)",
      "Create last chance/hours email",
      "Set up abandoned cart email with BFCM urgency",
      "Create post-purchase thank you email",
      "Test all emails on desktop and mobile",
      "Schedule all emails in advance",
    ],
  },
  {
    title: "Paid Advertising",
    icon: "BarChart",
    color: "#64748b",
    items: [
      "Increase Facebook/Meta ad budgets",
      "Create BFCM-specific ad creatives",
      "Set up retargeting audiences",
      "Prepare Google Shopping campaigns",
      "Update Google Merchant Center feed",
      "Schedule ad launches and bid adjustments",
      "Create lookalike audiences from best customers",
      "Plan TikTok/Pinterest campaigns if relevant",
      "Set up conversion tracking correctly",
    ],
  },
  {
    title: "Customer Service Preparation",
    icon: "Shield",
    color: "#ef436b",
    items: [
      "Update FAQ page with BFCM-specific questions",
      "Prepare response templates for common queries",
      "Extend customer service hours if possible",
      "Set up live chat with extended availability",
      "Brief team on current promotions and policies",
      "Update returns policy page if needed",
      "Prepare for increased enquiry volume",
      "Set up auto-responders for out-of-hours",
    ],
  },
  {
    title: "Final Pre-Launch Checks",
    icon: "Rocket",
    color: "#0ea5e9",
    items: [
      "Complete full test purchase",
      "Verify all discount codes work",
      "Check site on multiple devices",
      "Confirm all tracking pixels firing",
      "Brief entire team on launch plan",
      "Set up real-time analytics dashboard",
      "Prepare social media posts for launch",
      "Have contingency plan for issues",
      "Get a good night's sleep!",
    ],
  },
];

const STORAGE_KEY = "shopify-black-friday-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "When should I start preparing for Black Friday and Cyber Monday?",
    answer: "Start preparation at least 8 weeks before BFCM. This gives you time to order stock, create marketing assets, test your site under load, and set up all your promotions. Many successful merchants begin planning in September for the November sales period. Rushed preparation leads to stockouts, site crashes, and missed revenue opportunities."
  },
  {
    question: "How much traffic increase should I expect during BFCM?",
    answer: "Most Shopify stores see traffic increases of 3-10x during BFCM compared to normal days. High-growth brands can see even larger spikes, especially during flash sale windows. Run load testing to simulate at least 5x your normal traffic, and ensure your checkout can handle the volume. Shopify's infrastructure handles most scaling automatically, but third-party apps and custom code can create bottlenecks."
  },
  {
    question: "Should I offer discounts or risk devaluing my brand?",
    answer: "BFCM customers expect offers, but you do not have to discount heavily. Consider alternatives like gift with purchase, bundle deals, free shipping thresholds, or exclusive early access for email subscribers. If you do discount, protect your margins by excluding new arrivals or limiting quantities. Many premium brands offer their only discount of the year during BFCM without harming brand perception."
  },
  {
    question: "What's the most common BFCM mistake Shopify stores make?",
    answer: "The most common mistake is inadequate inventory planning. Stores either under-order and sell out too quickly (losing sales), or over-order and are stuck with excess stock. Use last year's data, your marketing plans, and industry benchmarks to forecast demand. Build a 20-30% buffer for your bestsellers. Also have a plan for items that do not sell, whether that is post-BFCM discounting or return to regular pricing."
  },
  {
    question: "How do I handle customer service during the BFCM rush?",
    answer: "Prepare extensively before the weekend begins. Update your FAQ page with BFCM-specific questions (delivery times, return windows, discount stacking). Create response templates for common queries. Consider extending support hours or using a chatbot for simple questions. Set realistic response time expectations in your auto-responders. Brief your entire team on current promotions so anyone can help customers accurately."
  },
  {
    question: "What should I do if something goes wrong during BFCM?",
    answer: "Have a contingency plan ready. Know who to contact if your site goes down (Shopify support, your developer, app providers). Keep your developer on standby during peak hours. If a discount code breaks, have backup codes ready. If you oversell, communicate proactively with customers about delays. Most importantly, stay calm and document issues so you can prevent them next year."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Black Friday & BFCM Checklist",
  description: "Prepare your Shopify store for Black Friday and Cyber Monday with our complete checklist.",
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
    "@id": `${siteConfig.url}/checklists/shopify-black-friday-checklist`,
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
      name: "Black Friday Checklist",
      item: `${siteConfig.url}/checklists/shopify-black-friday-checklist`,
    },
  ],
};
export default function ShopifyBlackFridayChecklistPage() {
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
            <span>20 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Black Friday & BFCM Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Black Friday and Cyber Monday can make or break your year. This {totalItems}-point checklist ensures your store is ready for the biggest shopping weekend.
          </p>

          <div className="flex items-center gap-4 text-sm text-foreground">
            <ChecklistProgress storageKey={STORAGE_KEY} totalItems={totalItems} />
            <span className="px-3 py-1 bg-gray-100 text-foreground-dark rounded-full font-medium">
              {checklistSections.length} sections
            </span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Start Preparing Now</h2>
          <p className="text-lg text-foreground">
            For many Shopify stores, this four-day period generates more revenue than entire months of normal trading. The difference between a record-breaking weekend and a disappointing one comes down to preparation.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* Why BFCM Preparation Matters */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Why BFCM Preparation Matters
          </h2>
          <p className="text-lg text-foreground mb-6">
            Customer expectations are elevated, competition is fierce, and concentrated traffic creates stress on every system in your business. Stores that prepare thoroughly capture disproportionate share of consumer spending.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">The Cost of Poor Preparation</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Site crashes</strong> during peak traffic send customers to competitors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Stockouts</strong> on bestsellers mean missing 3+ days of peak sales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Broken discount codes</strong> frustrate customers and create support chaos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Slow response times</strong> lose sales to faster competitors</span>
            </li>
          </ul>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground-dark mb-3">BFCM Traffic Expectations</h3>
            <p className="text-foreground mb-4">
              Most Shopify stores see traffic increases of 3-10x during BFCM. Your site, checkout, and fulfilment must handle this volume without breaking.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">3-10x</div>
                <div className="text-sm text-foreground">Traffic increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">5x</div>
                <div className="text-sm text-foreground">Load test minimum</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">8 weeks</div>
                <div className="text-sm text-foreground">Preparation time</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Critical Success Factors</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">1</span>
              <span className="text-foreground"><strong>Site performance</strong> tested under at least 5x normal load</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">2</span>
              <span className="text-foreground"><strong>Inventory planning</strong> with 20-30% buffer on bestsellers</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">3</span>
              <span className="text-foreground"><strong>Customer service</strong> prepared with templates and extended hours</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">4</span>
              <span className="text-foreground"><strong>Contingency plans</strong> for when things go wrong</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Last-Minute Priorities
          </h2>
          <p className="text-lg text-foreground mb-6">
            If you are short on time, focus on these essentials:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Test your discount codes</h3>
              <p className="text-foreground">Place test orders with every discount code. Broken codes cause support chaos and lost sales.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Check stock levels</h3>
              <p className="text-foreground">Verify inventory is accurate and you have buffer stock on hero products. Overselling creates customer service nightmares.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Remove unnecessary apps</h3>
              <p className="text-foreground">Each app adds load time. Remove anything not essential for the sale period to maximise site speed.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Update FAQ page</h3>
              <p className="text-foreground">Add BFCM-specific questions about delivery times, returns, and discount stacking to reduce support load.</p>
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
            Complete your BFCM preparation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-flash-sale-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Flash Sale Checklist →</h3>
              <p className="text-sm text-foreground">Run time-limited offers during BFCM</p>
            </Link>
            <Link href="/checklists/shopify-holiday-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Holiday Season Checklist →</h3>
              <p className="text-sm text-foreground">Continue momentum through December</p>
            </Link>
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Ensure your site handles the traffic</p>
            </Link>
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing →</h3>
              <p className="text-sm text-foreground">Maximise email revenue during BFCM</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3184360.webp"
        imageAlt="Shopify Black Friday sale preparation checklist"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need BFCM Support?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Do not leave your biggest sales period to chance. Our team can help prepare your store for maximum performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get BFCM Ready</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
