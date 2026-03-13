import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowRight, BookOpen, Users, RefreshCw, CheckCircle, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Shopify Guides: Expert How-To Articles",
  description:
    "In-depth Shopify guides covering speed optimisation, SEO, conversion rate optimisation, and more. Learn from Shopify Plus experts.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Shopify Guides: Expert How-To Articles",
    description:
      "In-depth Shopify guides covering speed optimisation, SEO, conversion rate optimisation, and more.",
    url: "/guides",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const guideCategories = [
  {
    name: "Store Setup",
    description: "Everything you need to configure your Shopify store correctly from day one, including payments, shipping, taxes, and checkout settings.",
    guides: [
      { title: "How to Set Up Shopify Payments", href: "/guides/how-to-set-up-shopify-payments", readTime: "12 min" },
      { title: "How to Configure Shopify Shipping Rates", href: "/guides/how-to-configure-shopify-shipping-rates", readTime: "14 min" },
      { title: "How to Set Up Shopify Taxes", href: "/guides/how-to-set-up-shopify-taxes", readTime: "10 min" },
      { title: "How to Configure Shopify Checkout", href: "/guides/how-to-configure-shopify-checkout", readTime: "12 min" },
      { title: "How to Set Up Shopify Customer Accounts", href: "/guides/how-to-set-up-shopify-customer-accounts", readTime: "10 min" },
      { title: "How to Set Up Shopify Navigation Menus", href: "/guides/how-to-set-up-shopify-navigation-menus", readTime: "8 min" },
    ],
  },
  {
    name: "Products & Collections",
    description: "Master product management, from adding items and creating variants to organising collections and managing inventory efficiently.",
    guides: [
      { title: "How to Add Products to Shopify", href: "/guides/how-to-add-products-to-shopify", readTime: "12 min" },
      { title: "How to Create Shopify Collections", href: "/guides/how-to-create-shopify-collections", readTime: "10 min" },
      { title: "How to Set Up Shopify Product Variants", href: "/guides/how-to-set-up-shopify-product-variants", readTime: "12 min" },
      { title: "How to Create Shopify Product Bundles", href: "/guides/how-to-create-shopify-product-bundles", readTime: "14 min" },
      { title: "How to Import Products to Shopify", href: "/guides/how-to-import-products-to-shopify", readTime: "15 min" },
      { title: "How to Manage Shopify Inventory", href: "/guides/how-to-manage-shopify-inventory", readTime: "12 min" },
    ],
  },
  {
    name: "SEO & Search",
    description: "Optimise your store for Google and drive organic traffic with expert guidance on schema markup, meta descriptions, and technical SEO.",
    guides: [
      { title: "How to Optimise Shopify Product Pages for SEO", href: "/guides/how-to-optimise-shopify-product-pages-for-seo", readTime: "18 min" },
      { title: "How to Add Schema Markup to Shopify", href: "/guides/how-to-add-schema-markup-to-shopify", readTime: "15 min" },
      { title: "How to Create Shopify Redirects", href: "/guides/how-to-create-shopify-redirects", readTime: "10 min" },
      { title: "How to Write Shopify Meta Descriptions", href: "/guides/how-to-write-shopify-meta-descriptions", readTime: "12 min" },
      { title: "How to Structure Shopify URLs for SEO", href: "/guides/how-to-structure-shopify-urls-for-seo", readTime: "10 min" },
      { title: "How to Optimise Shopify Images for SEO", href: "/guides/how-to-optimise-shopify-images-for-seo", readTime: "12 min" },
    ],
  },
  {
    name: "Performance",
    description: "Speed up your Shopify store with proven techniques for image optimisation, code cleanup, and app management to improve conversion rates.",
    guides: [
      { title: "How to Optimise Your Shopify Store for Speed", href: "/guides/how-to-optimise-your-shopify-store-for-speed", readTime: "15 min" },
      { title: "How to Optimise Shopify Product Images", href: "/guides/how-to-optimise-shopify-product-images", readTime: "12 min" },
      { title: "How to Remove Unused Shopify App Code", href: "/guides/how-to-remove-unused-shopify-app-code", readTime: "10 min" },
      { title: "How to Choose Shopify Apps", href: "/guides/how-to-choose-shopify-apps", readTime: "14 min" },
    ],
  },
  {
    name: "Conversion Optimisation",
    description: "Increase your conversion rates and reduce cart abandonment with strategic improvements to trust signals, urgency, and product descriptions.",
    guides: [
      { title: "How to Reduce Shopify Cart Abandonment", href: "/guides/how-to-reduce-shopify-cart-abandonment", readTime: "18 min" },
      { title: "How to Add Trust Badges to Shopify", href: "/guides/how-to-add-trust-badges-to-shopify", readTime: "10 min" },
      { title: "How to Create Urgency on Shopify", href: "/guides/how-to-create-urgency-on-shopify", readTime: "12 min" },
      { title: "How to Add Reviews to Shopify", href: "/guides/how-to-add-reviews-to-shopify", readTime: "14 min" },
      { title: "How to Write Product Descriptions That Sell", href: "/guides/how-to-write-product-descriptions-that-sell", readTime: "15 min" },
    ],
  },
  {
    name: "Marketing & Analytics",
    description: "Track performance and drive sales with proper analytics setup, email marketing integration, and conversion tracking across all channels.",
    guides: [
      { title: "How to Set Up Facebook Pixel on Shopify", href: "/guides/how-to-set-up-facebook-pixel-on-shopify", readTime: "12 min" },
      { title: "How to Set Up Google Analytics 4 on Shopify", href: "/guides/how-to-set-up-google-analytics-4-on-shopify", readTime: "14 min" },
      { title: "How to Connect Shopify to Google Merchant Center", href: "/guides/how-to-connect-shopify-to-google-merchant-center", readTime: "15 min" },
      { title: "How to Set Up Klaviyo on Shopify", href: "/guides/how-to-set-up-klaviyo-on-shopify", readTime: "16 min" },
      { title: "How to Create Shopify Email Campaigns", href: "/guides/how-to-create-shopify-email-campaigns", readTime: "14 min" },
      { title: "How to Set Up Shopify Abandoned Cart Emails", href: "/guides/how-to-set-up-shopify-abandoned-cart-emails", readTime: "12 min" },
      { title: "How to Read Shopify Analytics", href: "/guides/how-to-read-shopify-analytics", readTime: "15 min" },
      { title: "How to Track Shopify Conversions", href: "/guides/how-to-track-shopify-conversions", readTime: "14 min" },
    ],
  },
  {
    name: "Promotions & Sales",
    description: "Run successful promotional campaigns with discount codes, flash sales, and eye-catching announcement bars to boost revenue.",
    guides: [
      { title: "How to Create Shopify Discount Codes", href: "/guides/how-to-create-shopify-discount-codes", readTime: "12 min" },
      { title: "How to Run Shopify Flash Sales", href: "/guides/how-to-run-shopify-flash-sales", readTime: "14 min" },
      { title: "How to Create Shopify Announcement Bars", href: "/guides/how-to-create-shopify-announcement-bars", readTime: "10 min" },
    ],
  },
  {
    name: "Theme & Design",
    description: "Customise your store's appearance with theme modifications, custom fonts, CSS styling, and landing page creation.",
    guides: [
      { title: "How to Customise Shopify Theme", href: "/guides/how-to-customise-shopify-theme", readTime: "18 min" },
      { title: "How to Add Custom Fonts to Shopify", href: "/guides/how-to-add-custom-fonts-to-shopify", readTime: "12 min" },
      { title: "How to Add Custom CSS to Shopify", href: "/guides/how-to-add-custom-css-to-shopify", readTime: "14 min" },
      { title: "How to Create Shopify Landing Pages", href: "/guides/how-to-create-shopify-landing-pages", readTime: "15 min" },
    ],
  },
  {
    name: "Shipping & Fulfilment",
    description: "Set up shipping options, local delivery, free shipping thresholds, and order tracking to deliver excellent customer experiences.",
    guides: [
      { title: "How to Set Up Shopify Local Delivery", href: "/guides/how-to-set-up-shopify-local-delivery", readTime: "12 min" },
      { title: "How to Offer Free Shipping on Shopify", href: "/guides/how-to-offer-free-shipping-on-shopify", readTime: "10 min" },
      { title: "How to Set Up Shopify Order Tracking", href: "/guides/how-to-set-up-shopify-order-tracking", readTime: "12 min" },
      { title: "How to Handle Shopify Returns", href: "/guides/how-to-handle-shopify-returns", readTime: "14 min" },
    ],
  },
  {
    name: "International & Multi-currency",
    description: "Expand globally with Shopify Markets, multi-currency support, and translation tools to reach international customers effectively.",
    guides: [
      { title: "How to Sell Internationally on Shopify", href: "/guides/how-to-sell-internationally-on-shopify", readTime: "18 min" },
      { title: "How to Set Up Shopify Markets", href: "/guides/how-to-set-up-shopify-markets", readTime: "16 min" },
      { title: "How to Add Currency Converter to Shopify", href: "/guides/how-to-add-currency-converter-to-shopify", readTime: "12 min" },
      { title: "How to Translate Your Shopify Store", href: "/guides/how-to-translate-your-shopify-store", readTime: "15 min" },
    ],
  },
  {
    name: "B2B & Wholesale",
    description: "Configure B2B functionality, wholesale pricing tiers, and trade accounts to serve business customers alongside retail shoppers.",
    guides: [
      { title: "How to Set Up Shopify B2B", href: "/guides/how-to-set-up-shopify-b2b", readTime: "18 min" },
      { title: "How to Create Wholesale Pricing on Shopify", href: "/guides/how-to-create-wholesale-pricing-on-shopify", readTime: "14 min" },
      { title: "How to Set Up Trade Accounts on Shopify", href: "/guides/how-to-set-up-trade-accounts-on-shopify", readTime: "12 min" },
    ],
  },
  {
    name: "Security & Compliance",
    description: "Protect your store and customer data with security best practices, GDPR compliance, and cookie consent implementation.",
    guides: [
      { title: "How to Secure Your Shopify Store", href: "/guides/how-to-secure-your-shopify-store", readTime: "15 min" },
      { title: "How to Make Shopify GDPR Compliant", href: "/guides/how-to-make-shopify-gdpr-compliant", readTime: "16 min" },
      { title: "How to Add Cookie Consent to Shopify", href: "/guides/how-to-add-cookie-consent-to-shopify", readTime: "12 min" },
    ],
  },
  {
    name: "Integrations",
    description: "Connect Shopify to your existing business systems including ERP, accounting software, POS systems, and reporting tools.",
    guides: [
      { title: "How to Integrate Shopify with ERP", href: "/guides/how-to-integrate-shopify-with-erp", readTime: "18 min" },
      { title: "How to Connect Shopify to Accounting Software", href: "/guides/how-to-connect-shopify-to-accounting-software", readTime: "14 min" },
      { title: "How to Set Up Shopify POS", href: "/guides/how-to-set-up-shopify-pos", readTime: "16 min" },
      { title: "How to Set Up Shopify Reports", href: "/guides/how-to-set-up-shopify-reports", readTime: "12 min" },
    ],
  },
  {
    name: "Migration",
    description: "Successfully migrate to Shopify from WooCommerce, Magento, or upgrade to Shopify Plus with step-by-step guidance.",
    guides: [
      { title: "How to Migrate from WooCommerce to Shopify", href: "/guides/how-to-migrate-from-woocommerce-to-shopify", readTime: "20 min" },
      { title: "How to Migrate from Magento to Shopify", href: "/guides/how-to-migrate-from-magento-to-shopify", readTime: "22 min" },
      { title: "How to Migrate to Shopify Plus", href: "/guides/how-to-migrate-to-shopify-plus", readTime: "18 min" },
    ],
  },
];

const totalGuides = guideCategories.reduce((acc, cat) => acc + cat.guides.length, 0);

export default function GuidesPage() {
  return (
    <>
      <PageHero
        badge={{ icon: BookOpen, text: "Expert Guides" }}
        title="Shopify Guides"
        description="In-depth tutorials from Shopify Plus experts covering setup, optimisation, marketing, and growth."
        shapeColors={{ topRight: "blue" }}
      >
        <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium text-sm">
            <BookOpen className="w-4 h-4 inline mr-2" />
            {totalGuides} guides
          </span>
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium text-sm">
            <Users className="w-4 h-4 inline mr-2" />
            14 categories
          </span>
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium text-sm">
            <RefreshCw className="w-4 h-4 inline mr-2" />
            Updated monthly
          </span>
        </div>
      </PageHero>

      {/* Guides by Category */}
      {guideCategories.map((category, index) => (
        <Section key={category.name} background={index % 2 === 0 ? "alt" : "white"}>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground-dark mb-3">{category.name}</h2>
            <p className="text-foreground mb-6">{category.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-accent hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-foreground-dark group-hover:text-accent transition-colors mb-2 leading-tight">
                    {guide.title.replace("How to ", "")}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{guide.readTime}</span>
                    <ArrowRight className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform text-accent" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Why Use Our Guides */}
      <Section background="white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-8 text-center">
            Why Use Our Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground-dark mb-2">Expert Written</h3>
              <p className="text-foreground text-sm">Written by Shopify Plus developers who work with leading UK brands every day.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground-dark mb-2">Actionable Advice</h3>
              <p className="text-foreground text-sm">Step-by-step instructions you can follow, not vague best practices.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground-dark mb-2">Battle Tested</h3>
              <p className="text-foreground text-sm">Based on real results from hundreds of Shopify stores we've built and optimised.</p>
            </div>
          </div>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-center">
            <p className="text-foreground">
              Want a structured approach? Try our{" "}
              <Link href="/checklists" className="text-accent hover:underline font-medium">
                Shopify checklists
              </Link>{" "}
              for launch preparation, peak trading, and store audits.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion
            faqs={[
              {
                question: "Are these guides free?",
                answer:
                  "Yes, completely free. No signup or email required.",
              },
              {
                question: "How often are they updated?",
                answer:
                  "Monthly, or immediately when Shopify releases major updates. Each guide shows the last updated date.",
              },
              {
                question: "Can I request a guide topic?",
                answer:
                  "Yes! Contact us with your suggestion. We prioritise topics based on community requests.",
              },
              {
                question: "Do I need Shopify Plus?",
                answer:
                  "No, most guides work for all Shopify plans. Plus-specific guides are clearly marked.",
              },
              {
                question: "Can you implement these for me?",
                answer:
                  "Yes. Our team handles everything from theme customisation to complex integrations. Get in touch to discuss.",
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
