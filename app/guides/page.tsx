import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowUpRight, BookOpen, Users, RefreshCw, CheckCircle, Sparkles, Target } from "lucide-react";
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
      { title: "How to Set Up Gift Cards on Shopify", href: "/guides/how-to-set-up-shopify-gift-cards", readTime: "12 min" },
      { title: "How to Set Up Subscriptions on Shopify", href: "/guides/how-to-set-up-shopify-subscriptions", readTime: "16 min" },
      { title: "How to Set Up Digital Downloads on Shopify", href: "/guides/how-to-set-up-shopify-digital-downloads", readTime: "10 min" },
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
      { title: "How to Set Up Shopify Metafields", href: "/guides/how-to-set-up-shopify-metafields", readTime: "14 min" },
      { title: "How to Add Gift Wrapping to Shopify", href: "/guides/how-to-create-shopify-gift-wrapping", readTime: "10 min" },
      { title: "How to Set Up Product Personalisation on Shopify", href: "/guides/how-to-set-up-product-personalisation-on-shopify", readTime: "14 min" },
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
      { title: "How to Do Keyword Research for Shopify", href: "/guides/how-to-do-shopify-keyword-research", readTime: "18 min" },
      { title: "How to Build Backlinks for Your Shopify Store", href: "/guides/how-to-build-backlinks-for-shopify", readTime: "16 min" },
      { title: "How to Fix Duplicate Content on Shopify", href: "/guides/how-to-fix-shopify-duplicate-content", readTime: "14 min" },
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
      { title: "How to Reduce JavaScript on Shopify", href: "/guides/how-to-reduce-shopify-javascript", readTime: "16 min" },
      { title: "How to Use Lazy Loading on Shopify", href: "/guides/how-to-use-shopify-lazy-loading", readTime: "12 min" },
      { title: "How to Audit Shopify App Performance", href: "/guides/how-to-audit-shopify-app-performance", readTime: "14 min" },
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
      { title: "How to Set Up Upsells on Shopify", href: "/guides/how-to-set-up-shopify-upsells", readTime: "14 min" },
      { title: "How to Add Product Recommendations to Shopify", href: "/guides/how-to-add-shopify-product-recommendations", readTime: "12 min" },
      { title: "How to Improve Shopify Checkout Conversion", href: "/guides/how-to-improve-shopify-checkout-conversion", readTime: "18 min" },
      { title: "How to Set Up a Wishlist on Shopify", href: "/guides/how-to-set-up-shopify-wishlists", readTime: "10 min" },
      { title: "How to Add a Size Guide to Shopify", href: "/guides/how-to-add-size-guide-to-shopify", readTime: "10 min" },
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
      { title: "How to Set Up TikTok Pixel on Shopify", href: "/guides/how-to-set-up-tiktok-pixel-on-shopify", readTime: "12 min" },
      { title: "How to Run an Affiliate Programme on Shopify", href: "/guides/how-to-run-shopify-affiliate-programme", readTime: "16 min" },
      { title: "How to Set Up Google Shopping on Shopify", href: "/guides/how-to-set-up-google-shopping-on-shopify", readTime: "16 min" },
      { title: "How to Use Shopify Flow", href: "/guides/how-to-use-shopify-flow", readTime: "14 min" },
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
      { title: "How to Add Video to Shopify Product Pages", href: "/guides/how-to-add-video-to-shopify-product-pages", readTime: "12 min" },
      { title: "How to Create a Mega Menu on Shopify", href: "/guides/how-to-create-shopify-mega-menu", readTime: "14 min" },
      { title: "How to Add a Countdown Timer to Shopify", href: "/guides/how-to-add-countdown-timer-to-shopify", readTime: "10 min" },
      { title: "How to Add an Instagram Feed to Shopify", href: "/guides/how-to-add-instagram-feed-to-shopify", readTime: "10 min" },
      { title: "How to Customise the Shopify Checkout Page", href: "/guides/how-to-customise-shopify-checkout-page", readTime: "14 min" },
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
      { title: "How to Set Up Click and Collect on Shopify", href: "/guides/how-to-set-up-shopify-click-and-collect", readTime: "12 min" },
      { title: "How to Integrate Shopify with Royal Mail", href: "/guides/how-to-integrate-shopify-with-royal-mail", readTime: "14 min" },
      { title: "How to Set Up Dropshipping on Shopify", href: "/guides/how-to-set-up-shopify-dropshipping", readTime: "18 min" },
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
      { title: "How to Set Up Duty and Tax Calculations on Shopify", href: "/guides/how-to-set-up-duty-and-tax-calculations-on-shopify", readTime: "14 min" },
      { title: "How to Manage Multi-Location Inventory on Shopify", href: "/guides/how-to-manage-shopify-multi-location", readTime: "14 min" },
    ],
  },
  {
    name: "B2B & Wholesale",
    description: "Configure B2B functionality, wholesale pricing tiers, and trade accounts to serve business customers alongside retail shoppers.",
    guides: [
      { title: "How to Set Up Shopify B2B", href: "/guides/how-to-set-up-shopify-b2b", readTime: "18 min" },
      { title: "How to Create Wholesale Pricing on Shopify", href: "/guides/how-to-create-wholesale-pricing-on-shopify", readTime: "14 min" },
      { title: "How to Set Up Trade Accounts on Shopify", href: "/guides/how-to-set-up-trade-accounts-on-shopify", readTime: "12 min" },
      { title: "How to Set Up Minimum Order Quantities on Shopify", href: "/guides/how-to-set-up-minimum-order-quantities-on-shopify", readTime: "10 min" },
      { title: "How to Create B2B Price Lists on Shopify", href: "/guides/how-to-create-shopify-b2b-price-lists", readTime: "14 min" },
    ],
  },
  {
    name: "Security & Compliance",
    description: "Protect your store and customer data with security best practices, GDPR compliance, and cookie consent implementation.",
    guides: [
      { title: "How to Secure Your Shopify Store", href: "/guides/how-to-secure-your-shopify-store", readTime: "15 min" },
      { title: "How to Make Shopify GDPR Compliant", href: "/guides/how-to-make-shopify-gdpr-compliant", readTime: "16 min" },
      { title: "How to Add Cookie Consent to Shopify", href: "/guides/how-to-add-cookie-consent-to-shopify", readTime: "12 min" },
      { title: "How to Set Up Two-Factor Authentication on Shopify", href: "/guides/how-to-set-up-shopify-two-factor-authentication", readTime: "8 min" },
      { title: "How to Add Age Verification to Shopify", href: "/guides/how-to-add-age-verification-to-shopify", readTime: "10 min" },
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
      { title: "How to Integrate Shopify with Sage", href: "/guides/how-to-integrate-shopify-with-sage", readTime: "14 min" },
      { title: "How to Connect Shopify to Xero", href: "/guides/how-to-connect-shopify-to-xero", readTime: "12 min" },
      { title: "How to Integrate Shopify with NetSuite", href: "/guides/how-to-integrate-shopify-with-netsuite", readTime: "16 min" },
      { title: "How to Connect Shopify to Mailchimp", href: "/guides/how-to-connect-shopify-to-mailchimp", readTime: "12 min" },
      { title: "How to Set Up Shopify Zapier Integration", href: "/guides/how-to-set-up-shopify-zapier-integration", readTime: "12 min" },
    ],
  },
  {
    name: "Customer Experience",
    description: "Build loyalty and improve customer satisfaction with live chat, loyalty programmes, referral schemes, and clear store policies.",
    guides: [
      { title: "How to Set Up Live Chat on Shopify", href: "/guides/how-to-set-up-shopify-live-chat", readTime: "12 min" },
      { title: "How to Create a Loyalty Programme on Shopify", href: "/guides/how-to-create-shopify-loyalty-programme", readTime: "16 min" },
      { title: "How to Set Up a Referral Programme on Shopify", href: "/guides/how-to-set-up-shopify-referral-programme", readTime: "14 min" },
      { title: "How to Write Shopify Store Policies", href: "/guides/how-to-write-shopify-store-policies", readTime: "12 min" },
      { title: "How to Use Shopify Inbox", href: "/guides/how-to-use-shopify-inbox", readTime: "10 min" },
    ],
  },
  {
    name: "Shopify Plus",
    description: "Unlock the full power of Shopify Plus with Launchpad, Scripts, checkout extensibility, advanced automations, and multi-store management.",
    guides: [
      { title: "How to Use Shopify Plus Launchpad", href: "/guides/how-to-use-shopify-plus-launchpad", readTime: "12 min" },
      { title: "How to Set Up Shopify Scripts (Plus)", href: "/guides/how-to-set-up-shopify-plus-scripts", readTime: "16 min" },
      { title: "How to Customise Shopify Plus Checkout", href: "/guides/how-to-customise-shopify-plus-checkout", readTime: "18 min" },
      { title: "How to Set Up Shopify Flow Automations", href: "/guides/how-to-set-up-shopify-flow-automations", readTime: "14 min" },
      { title: "How to Use the Shopify Plus Organisation Admin", href: "/guides/how-to-use-shopify-plus-organisation-admin", readTime: "12 min" },
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
        background="blue"
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
            16 categories
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
                    <ArrowUpRight className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform text-accent" />
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

      <FAQSection
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
        image="/images/articles/pexels-3183153.webp"
        imageAlt="Ecommerce guides and resources for Shopify merchants"
        overlayColor="linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)"
      />
    </>
  );
}
