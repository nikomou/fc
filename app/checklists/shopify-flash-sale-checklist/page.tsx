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
  title: "Shopify Flash Sale Checklist: Run Profitable Sales",
  description:
    "Run high-converting flash sales with our 86-point Shopify checklist. Master discount strategy, inventory control, email sequences, and site performance.",
  alternates: {
    canonical: "/checklists/shopify-flash-sale-checklist",
  },
  openGraph: {
    title: "Shopify Flash Sale Checklist",
    description: "Run successful flash sales on Shopify with our comprehensive checklist.",
    url: "/checklists/shopify-flash-sale-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Planning & Strategy",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "Define flash sale goals (revenue, new customers, clear stock)",
      "Choose sale duration (2-24 hours typical)",
      "Select products to include",
      "Decide discount depth (20-50% common)",
      "Set start and end times",
      "Calculate margin impact",
      "Plan exclusive access (VIP, email list)",
      "Brief team on sale details",
    ],
  },
  {
    title: "Inventory Preparation",
    icon: "ShoppingCart",
    color: "#0ea5e9",
    items: [
      "Audit stock levels for sale items",
      "Set aside inventory for flash sale",
      "Configure low stock alerts",
      "Plan for overselling scenarios",
      "Prepare backorder messaging if needed",
      "Update inventory quantities",
      "Hide out-of-stock variants",
      "Coordinate with warehouse/fulfilment",
    ],
  },
  {
    title: "Discount Setup",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Create discount codes or automatic discounts",
      "Test discount codes work correctly",
      "Set usage limits if required",
      "Configure start and end times",
      "Set up tiered discounts if using",
      "Exclude certain products if needed",
      "Ensure discount stacking rules are clear",
      "Prepare backup codes if primary fails",
    ],
  },
  {
    title: "Website Preparation",
    icon: "Globe",
    color: "#10b981",
    items: [
      "Create dedicated flash sale landing page",
      "Update homepage with sale banner",
      "Add countdown timer",
      "Create sale collection page",
      "Update navigation for sale access",
      "Add urgency messaging (limited time/stock)",
      "Test site on mobile",
      "Ensure checkout handles high traffic",
    ],
  },
  {
    title: "Email Marketing",
    icon: "FileText",
    color: "#f59e0b",
    items: [
      "Schedule teaser email (1-2 days before)",
      "Prepare launch announcement email",
      "Create reminder email (mid-sale)",
      "Prepare last chance email (final hours)",
      "Segment list for VIP early access",
      "A/B test subject lines",
      "Ensure emails are mobile optimised",
      "Set up abandoned cart recovery",
    ],
  },
  {
    title: "Social Media & Ads",
    icon: "Globe",
    color: "#ec4899",
    items: [
      "Create social media countdown posts",
      "Prepare announcement graphics",
      "Schedule posts across platforms",
      "Set up paid ads for flash sale",
      "Create retargeting audiences",
      "Update ad creative with sale messaging",
      "Prepare Instagram Stories/Reels",
      "Plan live content if appropriate",
    ],
  },
  {
    title: "SMS & Push Notifications",
    icon: "Zap",
    color: "#64748b",
    items: [
      "Prepare SMS announcement",
      "Schedule push notifications",
      "Segment by engagement level",
      "Create urgency-focused messaging",
      "Set up last chance notifications",
      "Ensure opt-in compliance",
      "Test notifications before sending",
      "Plan notification timing carefully",
    ],
  },
  {
    title: "Customer Service",
    icon: "Shield",
    color: "#ef436b",
    items: [
      "Brief support team on sale details",
      "Prepare FAQ responses",
      "Update chatbot with sale info",
      "Extend support hours if needed",
      "Prepare for increased enquiries",
      "Create response templates",
      "Set expectations on shipping times",
      "Plan for complaints/issues",
    ],
  },
  {
    title: "Technical Preparation",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "Test site under load",
      "Check server capacity",
      "Optimise page speed",
      "Test checkout flow end-to-end",
      "Verify payment processing works",
      "Set up monitoring and alerts",
      "Have tech support on standby",
      "Prepare rollback plan if issues arise",
    ],
  },
  {
    title: "During the Sale",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Monitor site performance",
      "Track sales in real-time",
      "Watch inventory levels",
      "Respond to customer issues quickly",
      "Post social updates on sale progress",
      "Send mid-sale reminder emails",
      "Adjust ads based on performance",
      "Document any issues for later review",
    ],
  },
  {
    title: "Post-Sale Follow-Up",
    icon: "FileText",
    color: "#10b981",
    items: [
      "Send order confirmation emails",
      "Remove sale messaging from site",
      "Analyse sale performance",
      "Review what worked and what didn't",
      "Send thank you email to purchasers",
      "Follow up with abandoned carts",
      "Restock popular items",
      "Plan next flash sale improvements",
    ],
  },
];

const STORAGE_KEY = "shopify-flash-sale-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How long should a flash sale last?",
    answer: "Most successful flash sales run between 4 and 24 hours. Shorter durations (2-6 hours) create maximum urgency but require your audience to be available during that window. 24-hour sales give everyone a chance to participate but reduce urgency. Test different durations to find what works for your audience. Weekend flash sales often perform well as customers have more time to browse and purchase."
  },
  {
    question: "What discount percentage works best for flash sales?",
    answer: "Flash sale discounts typically range from 20% to 50%. The right level depends on your margins, your usual pricing strategy, and customer expectations. A brand that never discounts might see strong results from 20% off, whilst a brand that regularly runs promotions may need 40-50% to drive action. Always calculate your margin impact before committing to discount levels, and consider offering tiered discounts based on spend."
  },
  {
    question: "How do I prevent my site from crashing during a flash sale?",
    answer: "Prepare your site before the sale by optimising images, removing unnecessary apps, and testing checkout under load. Shopify handles most scaling automatically, but third-party apps can create bottlenecks. Consider temporarily disabling non-essential apps during peak periods. Set up monitoring and alerts, and have a developer on standby. If you expect massive traffic, warn Shopify support in advance."
  },
  {
    question: "Should I offer VIP early access for flash sales?",
    answer: "VIP early access is highly effective for building email list engagement and rewarding loyal customers. Give your best customers 2-4 hours of access before the general sale. This creates exclusivity, ensures your VIPs get first choice of stock, and generates early revenue that builds momentum. Promote VIP access as a benefit of joining your email list to grow your subscriber base."
  },
  {
    question: "How can I prevent discount code abuse during flash sales?",
    answer: "Use automatic discounts where possible instead of codes that can be shared widely. If using codes, set usage limits per customer. Monitor orders in real-time for suspicious patterns. Exclude serial discount abusers from your most generous offers. For significant discounts, consider requiring email verification or account creation. Balance fraud prevention against the friction it creates for legitimate customers."
  },
  {
    question: "What should I do if I oversell during a flash sale?",
    answer: "Communicate immediately with affected customers. Send a personal email explaining the situation and offer options: wait for restock, receive a different product, or get a full refund plus a small discount code for their trouble. Most customers will understand if you communicate promptly and make it right. The worst outcome is customers discovering the issue themselves. Turn the mistake into an opportunity to demonstrate excellent service."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Flash Sale Checklist",
  description: "Run successful flash sales on Shopify with our comprehensive checklist.",
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
    "@id": `${siteConfig.url}/checklists/shopify-flash-sale-checklist`,
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
      name: "Flash Sale Checklist",
      item: `${siteConfig.url}/checklists/shopify-flash-sale-checklist`,
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

export default function ShopifyFlashSaleChecklistPage() {
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
            <span>18 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Flash Sale Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Flash sales create urgency and drive quick revenue. Use this {totalItems}-point checklist to plan and execute a successful flash sale.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Flash Sales Work</h2>
          <p className="text-lg text-foreground">
            Flash sales generate concentrated bursts of revenue by creating genuine urgency through limited time and stock. A well-executed flash sale can deliver a significant portion of monthly revenue in just a few hours, but success requires thorough preparation across inventory, marketing, and technical infrastructure.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Impact of Flash Sales */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Why Flash Sale Preparation Matters
          </h2>
          <p className="text-lg text-foreground mb-6">
            Flash sales compress significant purchasing activity into a narrow window. The urgency that drives customers to buy immediately is the same urgency that means problems cannot be fixed later. A broken discount code or crashed checkout during a 6-hour flash sale can cost you the entire event.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Traffic Spike Reality</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Flash sales can generate extreme traffic patterns:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                10-20x normal traffic within the first hour
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Checkout load increases even more dramatically
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Third-party apps often become the bottleneck
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Email opens spike simultaneously with site visits
              </li>
            </ul>
            <p className="text-foreground">
              Shopify handles scaling automatically, but apps, custom code, and poorly optimised themes can create bottlenecks that turn excited customers into frustrated ones.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Flash Sale Mistakes</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">1.</span>
              <span><strong>Untested discount codes</strong> that fail at checkout or apply incorrectly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">2.</span>
              <span><strong>Inventory miscounts</strong> leading to overselling and disappointed customers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">3.</span>
              <span><strong>Email delays</strong> from overloaded systems sending notifications late</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">4.</span>
              <span><strong>Missing countdown timers</strong> that eliminate the urgency element</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">5.</span>
              <span><strong>Poor customer service preparation</strong> leading to slow responses during peak enquiries</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Ideal Flash Sale Timeline</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">2-3 weeks before</h4>
              <p className="text-foreground">Choose products, calculate margins, plan discount levels, and book any external support needed.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">1 week before</h4>
              <p className="text-foreground">Set up discount codes, create marketing assets, prepare email sequences, and test everything.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">1-2 days before</h4>
              <p className="text-foreground">Send teaser emails, publish countdown content, brief customer service, and final technical checks.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Sale day</h4>
              <p className="text-foreground">Monitor actively, respond quickly to issues, and send scheduled reminder communications.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            Flash sales work best with solid foundations in place:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-black-friday-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">BFCM Checklist →</h3>
              <p className="text-sm text-foreground">Extended preparation for peak season sales</p>
            </Link>
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Ensure your site handles traffic spikes smoothly</p>
            </Link>
            <Link href="/checklists/shopify-conversion-optimisation-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation →</h3>
              <p className="text-sm text-foreground">Maximise revenue from every flash sale visitor</p>
            </Link>
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing →</h3>
              <p className="text-sm text-foreground">Build the email list that powers your flash sales</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Planning a Flash Sale?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you prepare your store for high-traffic sales events.
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
