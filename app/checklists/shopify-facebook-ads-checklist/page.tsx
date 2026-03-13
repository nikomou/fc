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
  title: "Facebook Ads Checklist for Shopify Stores",
  description:
    "Run profitable Meta campaigns with our 88-point Facebook & Instagram ads checklist. Master pixel setup, lookalike audiences, and retargeting for 3-5x ROAS.",
  alternates: {
    canonical: "/checklists/shopify-facebook-ads-checklist",
  },
  openGraph: {
    title: "Shopify Facebook Ads Checklist",
    description: "Run profitable Facebook and Instagram ads for your Shopify store with our comprehensive checklist.",
    url: "/checklists/shopify-facebook-ads-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Account Setup",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Create Facebook Business Manager account",
      "Set up Facebook Page for your brand",
      "Create Instagram Business account",
      "Link Instagram to Facebook Page",
      "Create Ad Account in Business Manager",
      "Add payment method",
      "Set account spending limits",
      "Add team members with appropriate roles",
    ],
  },
  {
    title: "Pixel & Tracking",
    icon: "BarChart",
    color: "#0ea5e9",
    items: [
      "Install Facebook Pixel on Shopify",
      "Use Facebook & Instagram app from Shopify",
      "Verify pixel is firing correctly",
      "Set up Conversions API for server-side tracking",
      "Configure standard events (ViewContent, AddToCart, Purchase)",
      "Test events using Facebook Pixel Helper",
      "Verify purchase values are tracking correctly",
      "Set up custom conversions if needed",
    ],
  },
  {
    title: "Product Catalogue",
    icon: "ShoppingCart",
    color: "#8b5cf6",
    items: [
      "Connect product catalogue to Facebook",
      "Sync products through Shopify integration",
      "Review products for errors or rejections",
      "Ensure product images meet requirements",
      "Check product descriptions are complete",
      "Verify pricing is accurate",
      "Set up product sets for targeting",
      "Enable dynamic product ads",
    ],
  },
  {
    title: "Audience Building",
    icon: "FileText",
    color: "#10b981",
    items: [
      "Create custom audience from website visitors",
      "Create audience from customer list",
      "Build audience from video viewers",
      "Create Instagram engagement audience",
      "Build Facebook Page engagement audience",
      "Create purchase lookalike audiences (1%, 2%, 5%)",
      "Create add-to-cart lookalike audiences",
      "Segment audiences by recency (30, 60, 180 days)",
    ],
  },
  {
    title: "Campaign Structure",
    icon: "Settings",
    color: "#f59e0b",
    items: [
      "Choose campaign objective (Sales, Traffic, etc.)",
      "Structure campaigns by funnel stage",
      "Separate prospecting from retargeting",
      "Use Advantage+ Shopping for broad targeting",
      "Set appropriate campaign budgets",
      "Choose between CBO and ad set budgets",
      "Set bid strategy (lowest cost, cost cap, etc.)",
      "Define optimisation events",
    ],
  },
  {
    title: "Ad Creative",
    icon: "Globe",
    color: "#ec4899",
    items: [
      "Create multiple ad formats (single image, carousel, video)",
      "Use high-quality product images",
      "Include lifestyle imagery",
      "Create video content (15-30 seconds ideal)",
      "Write compelling headlines",
      "Craft benefit-focused primary text",
      "Include clear call-to-action",
      "Test different creative angles",
    ],
  },
  {
    title: "Ad Copy Best Practices",
    icon: "FileText",
    color: "#64748b",
    items: [
      "Lead with customer benefit",
      "Address pain points",
      "Include social proof",
      "Create urgency where appropriate",
      "Keep mobile viewing in mind (short text)",
      "Use emojis sparingly and appropriately",
      "Include your unique selling proposition",
      "Match copy to funnel stage",
    ],
  },
  {
    title: "Targeting Strategy",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Start with lookalike audiences",
      "Test interest-based targeting",
      "Use broad targeting with Advantage+",
      "Layer demographics if needed",
      "Exclude existing customers from prospecting",
      "Exclude recent purchasers from retargeting",
      "Test different geographic targeting",
      "Review audience overlap",
    ],
  },
  {
    title: "Retargeting Setup",
    icon: "Zap",
    color: "#0ea5e9",
    items: [
      "Retarget all website visitors (180 days)",
      "Retarget product viewers (30 days)",
      "Retarget add-to-cart abandoners (14 days)",
      "Create dynamic product ads",
      "Show viewed products in ads",
      "Offer incentive for cart abandoners",
      "Sequence ads based on actions",
      "Exclude recent purchasers",
    ],
  },
  {
    title: "Testing & Optimisation",
    icon: "BarChart",
    color: "#8b5cf6",
    items: [
      "A/B test creative regularly",
      "Test different headlines",
      "Test different audiences",
      "Test video vs static images",
      "Review performance daily initially",
      "Allow learning phase to complete",
      "Scale winning ad sets gradually",
      "Pause underperformers after sufficient data",
    ],
  },
  {
    title: "Reporting & Analysis",
    icon: "BarChart",
    color: "#10b981",
    items: [
      "Set up custom columns for key metrics",
      "Track ROAS by campaign",
      "Monitor cost per purchase",
      "Review frequency to avoid ad fatigue",
      "Check attribution settings",
      "Compare 1-day vs 7-day attribution",
      "Export data for deeper analysis",
      "Create automated rules for alerts",
    ],
  },
];

const STORAGE_KEY = "shopify-facebook-ads-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How much should I spend on Facebook ads for my Shopify store?",
    answer: "We recommend starting with a minimum of 30-50 pounds per day for testing. This budget allows your campaigns to exit the learning phase and gather enough data for optimisation. Once you identify winning audiences and creatives, you can scale budgets gradually. A good rule of thumb is to have enough budget to generate at least 50 conversion events per week for optimal algorithm learning."
  },
  {
    question: "What is the Facebook Pixel and why do I need it?",
    answer: "The Facebook Pixel is a piece of code that tracks visitor actions on your Shopify store and sends that data back to Facebook. It enables you to measure conversions, build retargeting audiences, and create lookalike audiences of your best customers. Without proper pixel tracking, Facebook cannot optimise your campaigns effectively. The Conversions API provides additional server-side tracking that improves accuracy as browser restrictions increase."
  },
  {
    question: "Should I use Advantage+ Shopping campaigns or manual campaign setup?",
    answer: "Advantage+ Shopping campaigns work well for stores with established conversion data and broad product catalogues. They use machine learning to automate audience targeting and creative selection. For new stores or niche products, manual campaign setup gives you more control to test specific audiences and messaging. Many successful advertisers use both: Advantage+ for scale and manual campaigns for testing new angles."
  },
  {
    question: "How do I create effective lookalike audiences?",
    answer: "Start with your best source audiences: purchasers, high-value customers, or engaged visitors. Upload customer lists or create audiences from pixel events. Begin with 1% lookalikes in your target country for the closest match to your source audience, then test 2% and 5% for broader reach. Lookalike audiences based on purchase events typically outperform those based on page views or add-to-carts."
  },
  {
    question: "Why are my Facebook ads not converting?",
    answer: "Common reasons include targeting the wrong audience, weak creative that does not stand out, landing pages that do not match ad messaging, prices that are not competitive, and insufficient social proof. Check your pixel is tracking correctly, ensure your landing page loads quickly on mobile, and test different creative angles. Often, the issue is asking cold audiences to purchase immediately rather than warming them up first."
  },
  {
    question: "How long should I run a campaign before making changes?",
    answer: "Allow campaigns to complete the learning phase, which typically requires around 50 conversion events. For most budgets, this takes 7-14 days. Avoid making significant changes during learning, as this resets the optimisation process. After the learning phase, review performance weekly rather than daily. Only pause underperformers once you have statistically significant data, usually after at least 1,000-2,000 pounds in spend per ad set."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Facebook Ads Checklist",
  description: "Run profitable Facebook and Instagram ads for your Shopify store with our comprehensive checklist covering pixel setup, audiences, and campaign optimisation.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-15",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-facebook-ads-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Facebook Ads Checklist", item: `${siteConfig.url}/checklists/shopify-facebook-ads-checklist` },
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

export default function ShopifyFacebookAdsChecklistPage() {
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
            <span>22 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Facebook Ads Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Facebook and Instagram ads remain one of the most powerful channels for ecommerce. Use this {totalItems}-point checklist to run profitable campaigns.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Facebook Ads Matter</h2>
          <p className="text-lg text-foreground">
            Meta's advertising platform reaches over 3 billion people across Facebook, Instagram, Messenger, and the Audience Network. This checklist covers everything from pixel setup to campaign scaling.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Power of Facebook Advertising */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Building a Profitable Facebook Ads Strategy
          </h2>
          <p className="text-lg text-foreground mb-6">
            Unlike search advertising where you capture existing demand, Facebook ads allow you to create demand by reaching people who match your ideal customer profile but may not yet know your brand exists.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">The Three Pillars of Success</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">1.</span>
              <span><strong>Accurate tracking</strong> through pixel and Conversions API setup for proper attribution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">2.</span>
              <span><strong>Quality audiences</strong> built from customer data and lookalike modelling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">3.</span>
              <span><strong>Compelling creative</strong> that stops the scroll and drives action</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Key Metrics to Track</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">3-5x</div>
              <div className="text-sm text-foreground">Target ROAS for most ecommerce</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">&lt;2%</div>
              <div className="text-sm text-foreground">Healthy frequency (retargeting)</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-foreground">Weekly conversions for learning</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Mistakes to Avoid</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>No Conversions API</strong> means missing 20-40% of attribution data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Changing campaigns during learning</strong> resets the algorithm</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Only one creative angle</strong> leads to rapid ad fatigue</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>No audience exclusions</strong> wastes budget showing ads to recent buyers</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Campaign Structure */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Recommended Campaign Structure
          </h2>
          <p className="text-lg text-foreground mb-6">
            Structure your campaigns by funnel stage for clearer optimisation:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">Prospecting Campaigns</h3>
              <p className="text-foreground">Target lookalike audiences and interest-based segments. Use broad creative that introduces your brand and products. Expect lower ROAS but focus on efficient new customer acquisition.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">Retargeting Campaigns</h3>
              <p className="text-foreground">Target website visitors, cart abandoners, and email subscribers. Use dynamic product ads showing items they viewed. Expect higher ROAS with more direct conversion messaging.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">Retention Campaigns</h3>
              <p className="text-foreground">Target past purchasers with new products, restocks, and loyalty offers. Exclude recent purchasers (7-30 days). Focus on increasing lifetime value.</p>
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
            Maximise your advertising investment with these complementary resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-google-shopping-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Google Shopping →</h3>
              <p className="text-sm text-foreground">Capture high-intent search traffic with Shopping ads</p>
            </Link>
            <Link href="/checklists/shopify-cro-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation →</h3>
              <p className="text-sm text-foreground">Convert more of your paid traffic into customers</p>
            </Link>
            <Link href="/checklists/shopify-product-page-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Product Pages →</h3>
              <p className="text-sm text-foreground">Optimise the landing pages for your ads</p>
            </Link>
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing →</h3>
              <p className="text-sm text-foreground">Build owned audiences to reduce ad dependency</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Facebook Ads Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up and manage your Facebook and Instagram advertising for maximum ROAS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
