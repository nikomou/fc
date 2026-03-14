import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "WooCommerce to Shopify Migration Checklist",
  description:
    "Migrate from WooCommerce to Shopify without losing SEO with our 70-point checklist. Master data migration, 301 redirects, testing, and launch planning.",
  alternates: {
    canonical: "/checklists/woocommerce-to-shopify-checklist",
  },
  openGraph: {
    title: "WooCommerce to Shopify Migration Checklist",
    description: "Everything you need to migrate from WooCommerce to Shopify successfully.",
    url: "/checklists/woocommerce-to-shopify-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Pre-Migration Planning",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Document all current WooCommerce plugins and their functions",
      "List all custom functionality that needs replicating",
      "Export and backup entire WooCommerce database",
      "Download all product images at full resolution",
      "Document current URL structure for redirects",
      "Note current SEO rankings for key pages",
      "Identify Shopify apps to replace WooCommerce plugins",
      "Choose migration timing (avoid peak sales periods)",
      "Set up staging/development Shopify store",
    ],
  },
  {
    title: "Data Export from WooCommerce",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Export all products with full details (CSV)",
      "Export all product images and media",
      "Export all product categories and tags",
      "Export customer accounts and addresses",
      "Export order history",
      "Export blog posts and pages",
      "Export reviews and ratings",
      "Document any custom product fields",
      "Export coupon codes and discount rules",
    ],
  },
  {
    title: "Shopify Store Setup",
    icon: "ShoppingCart",
    color: "#8b5cf6",
    items: [
      "Create Shopify account and choose plan",
      "Configure store settings (currency, units, timezone)",
      "Set up payment providers",
      "Configure tax settings",
      "Set up shipping zones and rates",
      "Configure checkout settings",
      "Set up email notifications",
      "Install necessary apps identified earlier",
    ],
  },
  {
    title: "Data Import to Shopify",
    icon: "Zap",
    color: "#10b981",
    items: [
      "Import products via CSV or migration app",
      "Verify all product data transferred correctly",
      "Upload and map product images",
      "Create collections to match categories",
      "Import customer accounts",
      "Import historical orders",
      "Recreate discount codes",
      "Import blog posts and pages",
      "Verify all data integrity",
    ],
  },
  {
    title: "Theme & Design",
    icon: "Globe",
    color: "#f59e0b",
    items: [
      "Choose or develop Shopify theme",
      "Match branding (colours, fonts, logo)",
      "Recreate homepage layout",
      "Set up navigation menus",
      "Configure product page layout",
      "Set up collection page design",
      "Create footer with links and info",
      "Test design on mobile devices",
      "Verify all pages render correctly",
    ],
  },
  {
    title: "SEO Preservation",
    icon: "Search",
    color: "#ec4899",
    items: [
      "Map all old URLs to new Shopify URLs",
      "Create 301 redirects for every page",
      "Migrate meta titles and descriptions",
      "Preserve heading structure (H1, H2, etc.)",
      "Maintain image alt text",
      "Update internal links to new URLs",
      "Submit new sitemap to Google Search Console",
      "Update Google Analytics property",
      "Set up Google Search Console for new domain",
    ],
  },
  {
    title: "Functionality Testing",
    icon: "TestTube",
    color: "#64748b",
    items: [
      "Test complete checkout process",
      "Verify all payment methods work",
      "Test discount codes",
      "Verify shipping calculations",
      "Test tax calculations",
      "Check email notifications send correctly",
      "Test customer account functionality",
      "Verify product search works",
      "Test filtering and sorting",
      "Check all forms submit correctly",
    ],
  },
  {
    title: "Go-Live Preparation",
    icon: "Rocket",
    color: "#ef436b",
    items: [
      "Plan go-live date and time",
      "Prepare DNS settings for domain transfer",
      "Brief team on new system",
      "Put WooCommerce store in maintenance mode",
      "Perform final data sync",
      "Point domain to Shopify",
      "Verify SSL certificate active",
      "Test everything post-switch",
      "Monitor for issues in first 24-48 hours",
      "Keep WooCommerce backup for 30+ days",
    ],
  },
];

const STORAGE_KEY = "woocommerce-to-shopify-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How long does a WooCommerce to Shopify migration take?",
    answer: "A typical WooCommerce to Shopify migration takes 2-6 weeks depending on store complexity. Simple stores with under 500 products and minimal customisation can migrate in 2-3 weeks. Complex stores with thousands of products, custom functionality, and extensive integrations may require 6-8 weeks. Allow extra time for testing, which should not be rushed regardless of store size."
  },
  {
    question: "Will I lose my SEO rankings when migrating to Shopify?",
    answer: "You can preserve your SEO rankings with proper planning. The key is creating 301 redirects from every old URL to its new Shopify equivalent. Migrate all meta titles, descriptions, and heading structures. Submit your new sitemap to Google Search Console promptly. Some temporary fluctuation is normal as Google reindexes, but properly executed migrations recover within 2-4 weeks. Skipping redirects, however, will cause significant ranking losses."
  },
  {
    question: "Can I migrate customer passwords from WooCommerce?",
    answer: "No, customer passwords cannot be migrated because they are encrypted differently in each platform. Customer accounts, addresses, and order history can be migrated, but customers will need to reset their passwords on first login to Shopify. Send a clear email explaining this before or immediately after migration, with an easy link to trigger password reset."
  },
  {
    question: "What WooCommerce plugins need replacing with Shopify apps?",
    answer: "Common replacements include: WooCommerce Subscriptions to Recharge or Bold Subscriptions; Yoast SEO (built into Shopify with additional apps available); Advanced Custom Fields to Shopify metafields; WooCommerce Points and Rewards to Smile.io or LoyaltyLion. Document every plugin's function before migration and identify Shopify equivalents. Some functionality may be built into Shopify natively, requiring no app."
  },
  {
    question: "Should I use a migration app or migrate manually?",
    answer: "For stores with more than 100 products, a migration app like LitExtension, Cart2Cart, or Matrixify (Excelify) typically provides better results than manual CSV import. These apps handle data mapping, image migration, and variant structures more reliably. For smaller stores with simple products, Shopify's native CSV import may suffice. Manual migration of complex data is error-prone and time-consuming."
  },
  {
    question: "What happens to my orders and customer data during migration?",
    answer: "Order history and customer data can be migrated to Shopify, preserving your records and customer relationships. Orders imported to Shopify appear in your order history but are marked as imported. Customer accounts retain their purchase history and saved addresses. Take full backups before migration and verify data integrity after import. Keep your WooCommerce database accessible for at least 30 days post-migration as a reference."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce to Shopify Migration Checklist",
  description: "Everything you need to migrate from WooCommerce to Shopify successfully.",
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
    "@id": `${siteConfig.url}/checklists/woocommerce-to-shopify-checklist`,
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
      name: "WooCommerce to Shopify Migration",
      item: `${siteConfig.url}/checklists/woocommerce-to-shopify-checklist`,
    },
  ],
};
export default function WooCommerceToShopifyChecklistPage() {
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
            WooCommerce to Shopify Migration Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Migrating from WooCommerce to Shopify? This {totalItems}-point checklist ensures nothing gets lost in the move: data, SEO, or customers.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Migrate to Shopify?</h2>
          <p className="text-lg text-foreground">
            Migrating from WooCommerce to Shopify unlocks reduced maintenance burden, better uptime, superior checkout conversion, and access to Shopify's extensive app ecosystem. However, a poorly planned migration can result in lost data, damaged SEO rankings, and frustrated customers.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* Why Planning Matters */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Why Proper Migration Planning Matters
          </h2>
          <p className="text-lg text-foreground mb-6">
            Platform migrations are among the highest-stakes projects an ecommerce business undertakes. Unlike most website changes that can be easily reversed, a migration touches every aspect of your business: product data, customer records, order history, SEO rankings, integrations, and daily operations.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">What Is at Risk</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <strong>SEO Rankings:</strong> Years of accumulated organic search value
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <strong>Customer Data:</strong> Account information, purchase history, saved addresses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <strong>Product Information:</strong> Descriptions, images, variants, inventory levels
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <strong>Order History:</strong> Records needed for customer service and accounting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <strong>Revenue:</strong> Lost sales during poorly executed transition periods
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">SEO Preservation Is Critical</h3>
          <p className="text-lg text-foreground mb-4">
            Your organic search rankings represent years of accumulated value. Without proper 301 redirects mapping every old URL to its new location, that value disappears overnight. Google treats changed URLs without redirects as entirely new pages with no history. Search traffic can drop 50% or more from a careless migration.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Recommended Migration Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">2-3 weeks</div>
              <div className="text-sm text-foreground">Simple stores (&lt;500 products)</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">4-6 weeks</div>
              <div className="text-sm text-foreground">Medium stores (500-2,000 products)</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">6-8 weeks</div>
              <div className="text-sm text-foreground">Complex stores (custom functionality)</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">8-12 weeks</div>
              <div className="text-sm text-foreground">Enterprise migrations (Shopify Plus)</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Key Success Factors</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">1. Document Everything First</h4>
              <p className="text-foreground">List all plugins, custom functionality, and integrations before starting. Surprises during migration cause delays.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">2. Test in a Development Store</h4>
              <p className="text-foreground">Migrate to a staging environment first. Test everything before touching your live store.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">3. Plan Redirects in Advance</h4>
              <p className="text-foreground">Map every URL before migration day. Creating redirects retroactively means lost SEO value.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">4. Time It Right</h4>
              <p className="text-foreground">Avoid peak sales periods. Monday or Tuesday mornings give you the week to address issues.</p>
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
            Ensure your new Shopify store is set up for success:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist →</h3>
              <p className="text-sm text-foreground">Everything to verify before going live</p>
            </Link>
            <Link href="/checklists/shopify-seo-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist →</h3>
              <p className="text-sm text-foreground">Optimise your new store for search engines</p>
            </Link>
            <Link href="/checklists/shopify-plus-migration-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Shopify Plus Migration →</h3>
              <p className="text-sm text-foreground">Additional considerations for enterprise stores</p>
            </Link>
            <Link href="/checklists/magento-to-shopify-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Magento Migration →</h3>
              <p className="text-sm text-foreground">Alternative migration path from Magento</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-416778.webp"
        imageAlt="WooCommerce to Shopify migration checklist"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Migration Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Migrations are complex. Let our experts handle it while you focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Migration Quote</Button>
            <Button href="/shopify-migration" variant="outline-light" size="lg" icon={false}>Our Migration Service</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
