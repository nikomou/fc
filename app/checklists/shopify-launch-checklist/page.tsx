import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Launch Checklist: 60+ Pre-Launch Steps",
  description:
    "Launch your Shopify store with confidence. 60-point checklist covering payments, shipping, SEO, legal policies and testing. Avoid costly mistakes at launch.",
  alternates: {
    canonical: "/checklists/shopify-launch-checklist",
  },
  openGraph: {
    title: "The Complete Shopify Launch Checklist",
    description:
      "Everything you need to check before launching your Shopify store. A comprehensive 50+ point checklist.",
    url: "/checklists/shopify-launch-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Store Settings",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Store name and legal business name configured",
      "Store address and contact information added",
      "Store currency and unit system set correctly",
      "Time zone configured for your location",
      "Customer account settings configured (optional vs required)",
      "Checkout settings reviewed and customised",
      "Order processing workflow set up",
      "Staff accounts created with appropriate permissions",
    ],
  },
  {
    title: "Payments",
    icon: "CreditCard",
    color: "#8b5cf6",
    items: [
      "Shopify Payments activated (if available in your region)",
      "Alternative payment methods added (PayPal, Apple Pay, etc.)",
      "Test transactions completed successfully",
      "Payment capture settings configured (automatic vs manual)",
      "Billing information and VAT details added",
      "Payout schedule reviewed",
    ],
  },
  {
    title: "Shipping",
    icon: "Truck",
    color: "#0ea5e9",
    items: [
      "Shipping zones created for all delivery areas",
      "Shipping rates configured (flat rate, weight-based, or calculated)",
      "Free shipping thresholds set (if applicable)",
      "Local delivery/pickup options configured",
      "Shipping origin address verified",
      "Packaging dimensions and weights added to products",
      "Carrier accounts connected (Royal Mail, DPD, etc.)",
      "International shipping and duties settings reviewed",
    ],
  },
  {
    title: "Legal & Policies",
    icon: "FileText",
    color: "#10b981",
    items: [
      "Privacy policy created and published",
      "Terms of service/conditions created",
      "Refund and returns policy written",
      "Shipping policy documented",
      "Cookie consent banner configured (GDPR compliance)",
      "Contact information clearly visible",
      "Company registration number displayed (if required)",
      "VAT number displayed (if VAT registered)",
    ],
  },
  {
    title: "SEO & Marketing",
    icon: "Search",
    color: "#f59e0b",
    items: [
      "Homepage title and meta description optimised",
      "All product titles and descriptions written",
      "Product meta descriptions added",
      "Collection pages have descriptions",
      "Image alt text added to all images",
      "URL handles are clean and descriptive",
      "Google Analytics 4 connected",
      "Google Search Console verified",
      "Facebook Pixel installed (if using Facebook ads)",
      "Sitemap submitted to Google",
      "Robots.txt reviewed",
    ],
  },
  {
    title: "Security & Trust",
    icon: "Shield",
    color: "#64748b",
    items: [
      "SSL certificate active (automatic with Shopify)",
      "Two-factor authentication enabled for all staff",
      "Trust badges displayed (payment icons, security seals)",
      "Customer reviews or testimonials added",
      "About us page with company story",
      "Contact page with multiple contact methods",
      "Social media links added and working",
    ],
  },
  {
    title: "Testing",
    icon: "TestTube",
    color: "#ec4899",
    items: [
      "Complete test order placed (use Shopify Bogus Gateway)",
      "All payment methods tested",
      "Discount codes tested",
      "Email notifications received and reviewed",
      "Mobile responsiveness checked on real devices",
      "All links tested (no 404 errors)",
      "Forms tested (contact, newsletter signup)",
      "Cross-browser testing completed (Chrome, Safari, Firefox)",
      "Page speed tested (aim for under 3 seconds)",
      "Checkout flow tested from start to finish",
    ],
  },
  {
    title: "Pre-Launch Final Checks",
    icon: "Rocket",
    color: "#ef436b",
    items: [
      "Remove password protection when ready",
      "Custom domain connected and SSL active",
      "Favicon uploaded",
      "404 page customised",
      "Inventory levels accurate",
      "Product prices double-checked",
      "Email templates customised with branding",
      "Abandoned cart emails configured",
      "Order confirmation emails tested",
      "Notify customers feature ready (if launching with fanfare)",
    ],
  },
];

const STORAGE_KEY = "shopify-launch-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How long does it take to launch a Shopify store?",
    answer: "With this checklist, you can launch a basic Shopify store in 1-2 weeks if you work consistently. More complex stores with custom features, large product catalogues, or extensive integrations may take 4-6 weeks. The key is methodically working through each section rather than rushing to go live."
  },
  {
    question: "Can I launch my Shopify store without completing every item on this checklist?",
    answer: "While technically possible, we strongly recommend completing all items before launch. Skipping steps in areas like payments, shipping, or legal policies can result in order fulfilment issues, customer complaints, or even legal problems. The items marked as critical (payments, shipping, legal policies) are absolute must-haves before removing your password page."
  },
  {
    question: "What's the most common mistake when launching a Shopify store?",
    answer: "The most common mistake is inadequate testing. Many store owners rush to launch without placing test orders, testing all payment methods, or checking the mobile experience on real devices. Always complete at least 3-5 test orders using different payment methods and devices before going live."
  },
  {
    question: "Do I need to complete SEO tasks before launching?",
    answer: "Yes. It's much harder to fix SEO issues after launch than to set things up correctly from the start. Google will index your pages immediately after launch, so ensure your titles, meta descriptions, and URL structure are optimised beforehand. Changing URLs post-launch can hurt your search rankings."
  },
  {
    question: "Should I launch with all my products or start small?",
    answer: "For most stores, we recommend launching with your full catalogue if you have under 100 products. For larger catalogues (500+ products), consider launching with your best-selling or most profitable products first, then adding more over time. This allows you to refine your processes without being overwhelmed."
  },
  {
    question: "How do I know if my store is ready to launch?",
    answer: "Your store is ready when you can honestly tick every box in this checklist, you've completed multiple test orders without issues, you've had at least 2-3 people unfamiliar with your store navigate it successfully, and you feel confident in your ability to fulfil orders. If you're unsure, consider a soft launch to friends and family first."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Shopify Launch Checklist",
  description:
    "Everything you need to check before launching your Shopify store. A comprehensive 50+ point checklist covering settings, payments, shipping, SEO, and more.",
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
    "@id": `${siteConfig.url}/checklists/shopify-launch-checklist`,
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
      name: "Shopify Launch Checklist",
      item: `${siteConfig.url}/checklists/shopify-launch-checklist`,
    },
  ],
};
export default function ShopifyLaunchChecklistPage() {
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
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/checklists"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>10 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            The Complete Shopify Launch Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Launching a Shopify store? Don&apos;t miss a thing. This {totalItems}-point
            checklist covers everything from store settings to SEO, ensuring
            your store is ready to start selling.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Before You Launch</h2>
          <p className="text-lg text-foreground">
            This checklist covers eight critical areas: store settings, payments, shipping, legal compliance, SEO fundamentals, security, testing, and pre-launch checks. Work through each section methodically and you will go live with confidence.
          </p>
        </div>
      </Section>

      {/* Checklist */}
      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Cost of Poor Launch Preparation */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Cost of Poor Launch Preparation
          </h2>
          <p className="text-lg text-foreground mb-6">
            Every year, thousands of Shopify stores launch with preventable issues: missing shipping zones, untested payment gateways, broken checkout flows, or non-compliant legal policies. These oversights directly impact revenue, search rankings, and brand reputation from day one.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Launch Failures</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Payment processing failures</strong> that prevent customers from completing orders</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Missing shipping zones</strong> that show no delivery options at checkout</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Poor SEO setup</strong> that makes your store invisible to search engines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Missing legal policies</strong> that create compliance risks with GDPR</span>
            </li>
          </ul>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground-dark mb-3">Why Launch Preparation Matters</h3>
            <p className="text-foreground mb-4">
              Your launch sets the foundation for everything that follows. Search engines index your store immediately after you remove the password page. Your initial SEO setup becomes a permanent part of your digital footprint.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Changing URLs post-launch creates redirect issues and harms rankings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                First customers form lasting impressions based on checkout experience
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Fixing issues under pressure of real orders is stressful and damaging
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Critical Launch Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">3-5</div>
              <div className="text-sm text-foreground">Test orders minimum</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-foreground">Payment methods tested</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">&lt;3s</div>
              <div className="text-sm text-foreground">Page load time target</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Last-Minute Launch Checks
          </h2>
          <p className="text-lg text-foreground mb-6">
            If you are short on time, prioritise these essential items:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Complete a test purchase</h3>
              <p className="text-foreground">Place a real order through your entire checkout flow using Shopify&apos;s Bogus Gateway. Verify the order confirmation email arrives correctly.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Check mobile experience</h3>
              <p className="text-foreground">Over 70% of traffic is mobile. Test your store on real phones, not just browser emulators.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Verify shipping zones</h3>
              <p className="text-foreground">Ensure all your delivery areas have shipping rates configured. Missing zones mean customers cannot checkout.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Publish legal policies</h3>
              <p className="text-foreground">Privacy policy, terms of service, and returns policy are legally required in most jurisdictions.</p>
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
            Complement your launch preparation with these resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist →</h3>
              <p className="text-sm text-foreground">Comprehensive SEO setup for search visibility</p>
            </Link>
            <Link href="/checklists/shopify-security-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Security Checklist →</h3>
              <p className="text-sm text-foreground">Protect your store and customer data</p>
            </Link>
            <Link href="/checklists/shopify-gdpr-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">GDPR Compliance →</h3>
              <p className="text-sm text-foreground">Meet EU and UK data protection requirements</p>
            </Link>
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Ensure fast load times from day one</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      {/* Summary */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Launch?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Once you&apos;ve ticked off every item on this checklist, you&apos;re ready
            to remove your password page and start selling. Good luck with your
            launch!
          </p>
          <p className="text-gray-400 mb-8">
            Need help getting your store launch-ready? Our team can audit your
            store and ensure everything is perfect before you go live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Launch Support
            </Button>
            <Button href="/shopify-store-audit" variant="outline-light" size="lg" icon={false}>
              Book a Store Audit
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
