import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Shopping Setup Checklist for Shopify",
  description:
    "Launch high-converting Google Shopping campaigns with our 76-point checklist. Master Merchant Center, product feeds, and Performance Max for maximum ROAS.",
  alternates: {
    canonical: "/checklists/shopify-google-shopping-checklist",
  },
  openGraph: {
    title: "Shopify Google Shopping Setup Checklist",
    description: "Set up Google Shopping for your Shopify store with our comprehensive checklist.",
    url: "/checklists/shopify-google-shopping-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Google Account Setup",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Create or access Google account",
      "Set up Google Merchant Center account",
      "Verify and claim your website URL",
      "Create Google Ads account",
      "Link Merchant Center to Google Ads",
      "Set up billing in Google Ads",
      "Configure account access for team members",
      "Enable conversion tracking",
    ],
  },
  {
    title: "Shopify Integration",
    icon: "ShoppingCart",
    color: "#0ea5e9",
    items: [
      "Install Google & YouTube app from Shopify",
      "Connect Google account to Shopify",
      "Verify domain ownership",
      "Sync product catalogue",
      "Enable automatic updates",
      "Configure shipping settings",
      "Set up tax information",
      "Review sync status for errors",
    ],
  },
  {
    title: "Product Feed Optimisation",
    icon: "FileText",
    color: "#8b5cf6",
    items: [
      "Ensure all products have unique titles",
      "Write detailed product descriptions",
      "Include primary keywords in titles",
      "Add brand name to products",
      "Set correct product categories (Google taxonomy)",
      "Include GTIN/barcode where available",
      "Add MPN for manufacturer products",
      "Set product condition (new, refurbished, used)",
    ],
  },
  {
    title: "Product Images",
    icon: "Globe",
    color: "#10b981",
    items: [
      "Use high-quality product images",
      "Main image on white background",
      "No watermarks or promotional text on images",
      "Correct image dimensions (min 100x100, ideally 800x800+)",
      "Show product clearly (no lifestyle shots for main)",
      "Multiple images per product",
      "Images match the specific variant",
      "No placeholder images",
    ],
  },
  {
    title: "Pricing & Availability",
    icon: "CreditCard",
    color: "#f59e0b",
    items: [
      "Prices match website exactly",
      "Currency set correctly",
      "Sale prices configured properly",
      "Availability status accurate",
      "Shipping costs configured",
      "Tax settings correct for your region",
      "Price competitiveness reviewed",
      "No price discrepancies between feed and site",
    ],
  },
  {
    title: "Policy Compliance",
    icon: "Shield",
    color: "#ec4899",
    items: [
      "Contact information visible on site",
      "Refund policy page exists and is linked",
      "Shipping policy page exists",
      "Privacy policy page exists",
      "Terms and conditions page exists",
      "Secure checkout (HTTPS)",
      "No prohibited products in feed",
      "Products comply with Google policies",
    ],
  },
  {
    title: "Campaign Setup",
    icon: "BarChart",
    color: "#64748b",
    items: [
      "Choose campaign type (Performance Max, Standard Shopping)",
      "Set realistic daily budget",
      "Define target ROAS or CPA",
      "Select target countries",
      "Configure language settings",
      "Set up campaign priorities if multiple campaigns",
      "Create product groups for bidding",
      "Add negative keywords if using Standard Shopping",
    ],
  },
  {
    title: "Performance Max Setup",
    icon: "Zap",
    color: "#ef436b",
    items: [
      "Upload brand assets (logos, images)",
      "Write compelling headlines (up to 5)",
      "Create descriptions (up to 5)",
      "Add long headlines",
      "Upload video assets if available",
      "Set audience signals",
      "Configure final URL expansion",
      "Review auto-generated assets",
    ],
  },
  {
    title: "Tracking & Analytics",
    icon: "BarChart",
    color: "#0ea5e9",
    items: [
      "Install Google Analytics 4",
      "Set up enhanced ecommerce tracking",
      "Configure conversion tracking in Google Ads",
      "Link Google Analytics to Google Ads",
      "Set up conversion value tracking",
      "Enable auto-tagging",
      "Verify conversion data is recording",
      "Set up custom reports",
    ],
  },
  {
    title: "Launch & Optimisation",
    icon: "Rocket",
    color: "#8b5cf6",
    items: [
      "Review Merchant Center for errors",
      "Fix any disapproved products",
      "Start with modest budget to test",
      "Monitor first 2 weeks closely",
      "Review search terms report",
      "Adjust bids based on performance",
      "Exclude poor-performing products",
      "Scale budget on winning products",
    ],
  },
];

const STORAGE_KEY = "shopify-google-shopping-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How long does it take for products to appear on Google Shopping?",
    answer: "After setting up your feed and Merchant Center account, products typically take 24-72 hours to be reviewed and approved. However, some products may take longer if they require additional review. Once approved, your products will start appearing in Google Shopping results when your campaigns are active and your bids are competitive."
  },
  {
    question: "What is the difference between Performance Max and Standard Shopping campaigns?",
    answer: "Standard Shopping campaigns give you granular control over bids, product groups, and targeting, but only show ads on Google Shopping and Search. Performance Max campaigns use machine learning to automatically optimise across all Google channels including Shopping, Search, Display, YouTube, Gmail, and Discover. For most Shopify stores, Google now recommends Performance Max as it typically delivers better results with less manual management."
  },
  {
    question: "Why are my products being disapproved in Merchant Center?",
    answer: "Common reasons for disapprovals include mismatched prices between your feed and website, missing or incorrect GTIN/barcode information, images with promotional overlays or watermarks, policy violations, or missing required attributes. Check your Merchant Center diagnostics tab for specific error messages. The most frequent fix is ensuring your product data matches exactly what appears on your website."
  },
  {
    question: "What budget should I start with for Google Shopping?",
    answer: "We recommend starting with a minimum daily budget of 20-50 pounds for testing. This allows you to gather enough data to make informed decisions about performance. After 2-4 weeks, you can identify winning products and scale budgets accordingly. Starting too low means your ads will not show often enough to generate meaningful data."
  },
  {
    question: "How do I improve my Google Shopping ROAS?",
    answer: "Focus on product feed quality first. Optimise titles with relevant keywords, use high-quality images on white backgrounds, and ensure pricing is competitive. Review your search terms report regularly to add negative keywords. Segment products by performance and allocate more budget to winners. Consider using target ROAS bidding once you have sufficient conversion data, typically after 30 or more conversions."
  },
  {
    question: "Do I need to use the Shopify Google app or can I manage feeds separately?",
    answer: "While you can manage feeds separately through third-party apps or manual uploads, the official Google and YouTube app from Shopify offers the simplest integration. It automatically syncs your products, keeps prices and availability updated, and reduces the risk of feed errors. For most stores, the built-in integration is sufficient. Larger stores with complex requirements may benefit from dedicated feed management tools."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Google Shopping Setup Checklist",
  description: "Set up Google Shopping for your Shopify store with our comprehensive checklist covering Merchant Center, product feeds, and campaign optimisation.",
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
    "@id": `${siteConfig.url}/checklists/shopify-google-shopping-checklist`,
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
      name: "Google Shopping Checklist",
      item: `${siteConfig.url}/checklists/shopify-google-shopping-checklist`,
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

export default function ShopifyGoogleShoppingChecklistPage() {
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
            <span>20 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Google Shopping Setup Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Google Shopping puts your products in front of high-intent buyers. Use this {totalItems}-point checklist to set up and optimise your campaigns.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Google Shopping Matters</h2>
          <p className="text-lg text-foreground">
            Google Shopping ads appear at the top of search results with product images, prices, and your store name. They capture shoppers with high purchase intent, often delivering better ROAS than text ads alone.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* Why Google Shopping Matters */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Google Shopping Advantage
          </h2>
          <p className="text-lg text-foreground mb-6">
            When someone searches for a specific product on Google, they are typically further along the buying journey than social media audiences. Shopping ads capture these ready-to-buy customers by showing them exactly what they are searching for.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Why Shopping Ads Outperform Text Ads</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Visual pre-qualification</strong> lets shoppers see the product before clicking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Price transparency</strong> reduces unqualified clicks from budget-mismatched visitors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Higher search placement</strong> at the very top of results pages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Clear expectations</strong> mean visitors know what they will find when they click</span>
            </li>
          </ul>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground-dark mb-3">Product Feed is Everything</h3>
            <p className="text-foreground mb-4">
              Your product feed is the foundation of Google Shopping success. Google uses your feed data to match products to search queries, so titles, descriptions, and attributes directly impact when and where your products appear.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Poorly optimised feeds mean wasted budget on irrelevant searches
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Missing attributes cause product disapprovals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Price mismatches between feed and site suspend your account
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Performance Max vs Standard Shopping</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="font-semibold text-foreground-dark mb-2">Performance Max</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Automated across all Google channels</li>
                <li>• Less manual control required</li>
                <li>• Google's recommended option</li>
                <li>• Best for most Shopify stores</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="font-semibold text-foreground-dark mb-2">Standard Shopping</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Granular bid control</li>
                <li>• Shopping and Search only</li>
                <li>• Manual optimisation needed</li>
                <li>• Better for experienced advertisers</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Product Feed Quick Wins
          </h2>
          <p className="text-lg text-foreground mb-6">
            These feed optimisations have the biggest impact on performance:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Optimise product titles</h3>
              <p className="text-foreground">Include brand, product type, key attributes (colour, size, material). Front-load the most important keywords.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Use white background images</h3>
              <p className="text-foreground">Clean product shots on white backgrounds perform better than lifestyle images for the main image.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Add GTINs where possible</h3>
              <p className="text-foreground">Products with barcodes get preferential treatment in Shopping results. Add them to maximise visibility.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Set correct product categories</h3>
              <p className="text-foreground">Use Google's product taxonomy to categorise items correctly. This helps Google match your products to relevant searches.</p>
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
            Combine Google Shopping with a complete marketing strategy:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist →</h3>
              <p className="text-sm text-foreground">Align organic and paid strategies</p>
            </Link>
            <Link href="/checklists/shopify-facebook-ads-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Facebook Ads Checklist →</h3>
              <p className="text-sm text-foreground">Complete paid media strategy</p>
            </Link>
            <Link href="/checklists/shopify-product-page-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Product Page Checklist →</h3>
              <p className="text-sm text-foreground">Convert the traffic you drive</p>
            </Link>
            <Link href="/checklists/shopify-analytics-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Analytics Checklist →</h3>
              <p className="text-sm text-foreground">Track and measure performance</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Google Shopping Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up and manage your Google Shopping campaigns for maximum ROAS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
