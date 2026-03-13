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
  title: "Magento to Shopify Migration Checklist",
  description:
    "Migrate complex Magento stores to Shopify with our 94-point checklist. Handle configurable products, extensions, integrations, and SEO preservation.",
  alternates: {
    canonical: "/checklists/magento-to-shopify-checklist",
  },
  openGraph: {
    title: "Magento to Shopify Migration Checklist",
    description: "Plan your Magento to Shopify migration with our comprehensive checklist.",
    url: "/checklists/magento-to-shopify-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Pre-Migration Audit",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Document current Magento version",
      "List all installed extensions",
      "Map custom module functionality",
      "Audit current database size",
      "Count products, variants, and categories",
      "Count customers and orders to migrate",
      "Document custom attributes",
      "Identify custom integrations (ERP, PIM, etc.)",
      "Review current hosting and performance",
    ],
  },
  {
    title: "Plan Your Shopify Store",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Choose Shopify plan (Basic, Shopify, Advanced, Plus)",
      "Assess Plus needs for complex requirements",
      "Plan theme selection or custom build",
      "Map Magento features to Shopify equivalents",
      "Identify Shopify apps to replace extensions",
      "Plan product structure and organisation",
      "Design collection/category mapping",
      "Plan customer segmentation approach",
    ],
  },
  {
    title: "Data Migration Planning",
    icon: "Settings",
    color: "#8b5cf6",
    items: [
      "Choose migration tool (LitExtension, Cart2Cart, custom)",
      "Map product data fields",
      "Plan variant structure conversion",
      "Map customer data fields",
      "Plan order history migration",
      "Decide on review migration approach",
      "Plan CMS page migration",
      "Document custom product attributes",
    ],
  },
  {
    title: "Product Data Migration",
    icon: "ShoppingCart",
    color: "#10b981",
    items: [
      "Export products from Magento",
      "Clean and validate product data",
      "Map product types (simple, configurable, bundle)",
      "Convert configurable products to variants",
      "Migrate product images",
      "Migrate product SEO data",
      "Set up collections to replace categories",
      "Migrate inventory levels",
      "Verify product data accuracy",
    ],
  },
  {
    title: "Customer & Order Migration",
    icon: "FileText",
    color: "#f59e0b",
    items: [
      "Export customer data from Magento",
      "Migrate customer account information",
      "Send password reset emails post-migration",
      "Migrate customer addresses",
      "Export order history",
      "Migrate orders with line items",
      "Preserve order numbers if possible",
      "Verify customer data integrity",
    ],
  },
  {
    title: "Theme & Design",
    icon: "Globe",
    color: "#ec4899",
    items: [
      "Choose Shopify theme or custom build",
      "Rebuild or adapt existing design",
      "Convert Magento templates to Liquid",
      "Recreate custom layouts",
      "Migrate static blocks to sections",
      "Rebuild mega menu navigation",
      "Convert CMS pages to Shopify pages",
      "Ensure mobile responsiveness",
    ],
  },
  {
    title: "Extension to App Replacement",
    icon: "Zap",
    color: "#64748b",
    items: [
      "Map each Magento extension to Shopify app",
      "Find alternatives for custom modules",
      "Set up email marketing (Klaviyo, etc.)",
      "Configure reviews app (Yotpo, Judge.me)",
      "Set up search/filter app if needed",
      "Configure loyalty/rewards programme",
      "Set up subscription functionality",
      "Configure advanced shipping if needed",
    ],
  },
  {
    title: "SEO Preservation",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Export all current URLs",
      "Map URL structure changes",
      "Create 301 redirect plan",
      "Set up redirects in Shopify",
      "Preserve meta titles and descriptions",
      "Maintain heading structure",
      "Preserve image alt tags",
      "Submit new sitemap to Google",
      "Update Google Search Console",
    ],
  },
  {
    title: "Integrations & Third Parties",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "Plan ERP integration migration",
      "Migrate payment gateway settings",
      "Set up shipping carrier integrations",
      "Connect accounting software",
      "Migrate PIM integration if used",
      "Set up analytics tracking",
      "Configure remarketing pixels",
      "Connect email service provider",
    ],
  },
  {
    title: "Testing & QA",
    icon: "Shield",
    color: "#8b5cf6",
    items: [
      "Verify all products migrated correctly",
      "Test product variant functionality",
      "Verify customer accounts work",
      "Test complete checkout flow",
      "Verify payment processing",
      "Test all shipping options",
      "Check all redirects work",
      "Test on multiple devices",
      "Verify email notifications",
    ],
  },
  {
    title: "Go-Live Preparation",
    icon: "Rocket",
    color: "#10b981",
    items: [
      "Choose migration date (avoid peak periods)",
      "Plan DNS change process",
      "Prepare team communication",
      "Create customer announcement plan",
      "Set up monitoring and alerts",
      "Prepare rollback plan if needed",
      "Brief customer service on changes",
      "Document new admin workflows",
    ],
  },
  {
    title: "Post-Migration",
    icon: "BarChart",
    color: "#f59e0b",
    items: [
      "Monitor site for errors",
      "Check orders processing correctly",
      "Verify analytics tracking",
      "Monitor search rankings",
      "Address any redirect issues",
      "Gather team feedback",
      "Document learnings",
      "Plan optimisation improvements",
      "Deprecate old Magento installation",
    ],
  },
];

const STORAGE_KEY = "magento-to-shopify-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How long does a Magento to Shopify migration take?",
    answer: "Magento to Shopify migrations typically take 4-12 weeks depending on complexity. Smaller Magento stores with standard functionality can migrate in 4-6 weeks. Large catalogues (10,000+ products), complex customisations, multiple integrations, or requirements for Shopify Plus extend timelines to 8-12 weeks. Plan for thorough testing regardless of size, as Magento and Shopify have fundamental architectural differences."
  },
  {
    question: "Can Magento configurable products be migrated to Shopify?",
    answer: "Yes, but the structure changes. Magento's configurable products become Shopify products with variants. Magento allows virtually unlimited options per configurable product; Shopify limits products to 3 options with 100 variant combinations. For products exceeding these limits, you may need to restructure as separate products, use variant extension apps, or implement custom solutions. Audit your configurables before migration to identify any requiring restructuring."
  },
  {
    question: "Will I need Shopify Plus coming from Magento?",
    answer: "Many Magento stores, particularly those on Magento Commerce (formerly Enterprise), benefit from Shopify Plus. Consider Plus if you need checkout customisation, Shopify Scripts for complex promotions, B2B functionality, multiple expansion stores, or advanced automation via Shopify Flow. Stores doing over 500k GBP monthly or with complex requirements typically find Plus features essential. Standard Shopify plans suffice for simpler stores."
  },
  {
    question: "How do I handle Magento extensions that have no Shopify equivalent?",
    answer: "First, assess whether the functionality is still needed. Many Magento extensions solve problems that Shopify handles natively. For genuinely unique requirements, explore the Shopify App Store for alternatives, consider custom app development, or evaluate whether Shopify Plus features (Scripts, Flow, Functions) can achieve the same outcome. Some functionality may not translate directly; be prepared to adapt workflows rather than replicate them exactly."
  },
  {
    question: "What happens to my Magento SEO when migrating?",
    answer: "With proper planning, SEO can be preserved. Create comprehensive 301 redirects from every Magento URL to its Shopify equivalent. Migrate all meta titles, descriptions, and heading structures. Note that Magento and Shopify use different URL structures by default, making redirects essential. Submit your new sitemap to Google Search Console immediately post-migration. Expect some temporary ranking fluctuation, but properly redirected sites typically recover within 2-6 weeks."
  },
  {
    question: "Should I migrate all historical orders and customers?",
    answer: "Migrating customer data is generally recommended for maintaining relationships and enabling features like customer accounts. For order history, consider how far back is useful. Many stores migrate 2-3 years of orders for customer service reference. Migrating all historical orders from a 10-year-old Magento installation adds complexity without clear benefit. Orders imported to Shopify are marked as such and cannot be edited like native orders."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Magento to Shopify Migration Checklist",
  description: "Plan your Magento to Shopify migration with our comprehensive checklist.",
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
    "@id": `${siteConfig.url}/checklists/magento-to-shopify-checklist`,
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
      name: "Magento to Shopify Migration",
      item: `${siteConfig.url}/checklists/magento-to-shopify-checklist`,
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

export default function MagentoToShopifyChecklistPage() {
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
            <span>22 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Magento to Shopify Migration Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Migrating from Magento to Shopify is a significant undertaking. Use this {totalItems}-point checklist to ensure nothing falls through the cracks.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Migrate from Magento?</h2>
          <p className="text-lg text-foreground">
            Migrating from Magento to Shopify represents a fundamental shift from self-hosted, highly customisable architecture to a managed, streamlined approach. Done well, this transition reduces technical overhead, improves site performance, and frees your team to focus on growth rather than infrastructure.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* Why Planning Matters */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Why Magento Migration Planning Matters
          </h2>
          <p className="text-lg text-foreground mb-6">
            Magento to Shopify migrations are among the most complex platform transitions in ecommerce. Magento's architecture allows for deep customisation that may not have direct Shopify equivalents. Extensions, custom modules, database customisations, and integrations all require careful analysis before migration.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Migration Complexity by Store Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">4-6 weeks</div>
              <div className="text-sm text-foreground">Standard store, &lt;5,000 products</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">6-8 weeks</div>
              <div className="text-sm text-foreground">Complex store, custom functionality</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">8-10 weeks</div>
              <div className="text-sm text-foreground">Enterprise, multiple integrations</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">10-12+ weeks</div>
              <div className="text-sm text-foreground">Magento Commerce to Shopify Plus</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Product Data Challenges</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Magento and Shopify handle products differently:</p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Magento allows unlimited product options; Shopify limits to 3 options with 100 variants
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Configurable products become variant products requiring restructuring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Custom attributes need mapping to Shopify metafields
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Bundle products may require app-based solutions
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Key Migration Considerations</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Extension Replacement</h4>
              <p className="text-foreground">Many Magento extensions solve problems Shopify handles natively. Audit what you actually use versus what you installed years ago.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Integration Rebuilding</h4>
              <p className="text-foreground">ERP, PIM, warehouse management, and other enterprise integrations need rebuilding for Shopify's architecture. Begin planning early.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">URL Structure Changes</h4>
              <p className="text-foreground">Magento and Shopify use fundamentally different URL structures. Comprehensive 301 redirects are mandatory for SEO preservation.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Do You Need Shopify Plus?</h4>
              <p className="text-foreground">Stores migrating from Magento Commerce often require Plus for checkout customisation, Scripts, Flow automation, and B2B features.</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Magento to Shopify App Replacements</h3>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <strong>Amasty/Mirasvit Extensions:</strong> Various Shopify apps depending on functionality
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <strong>Elastic Suite/Algolia:</strong> Searchanise, Algolia for Shopify, or native search
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <strong>Subscriptions:</strong> Recharge, Bold Subscriptions, or Shopify native (Plus)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <strong>Reviews:</strong> Yotpo, Judge.me, Loox, or Stamped
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <strong>Layered Navigation:</strong> Boost Product Filter, Smart Product Filter
            </li>
          </ul>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            Prepare your new Shopify store for success:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-plus-migration-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Shopify Plus Migration →</h3>
              <p className="text-sm text-foreground">Enterprise-specific migration considerations</p>
            </Link>
            <Link href="/checklists/shopify-seo-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist →</h3>
              <p className="text-sm text-foreground">Optimise your new store post-migration</p>
            </Link>
            <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist →</h3>
              <p className="text-sm text-foreground">Final checks before going live</p>
            </Link>
            <Link href="/checklists/woocommerce-to-shopify-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">WooCommerce Migration →</h3>
              <p className="text-sm text-foreground">Alternative migration from WooCommerce</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Migration Expertise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We have migrated dozens of stores from Magento to Shopify. Let our team handle your migration seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Migration Quote</Button>
            <Button href="/shopify-migration" variant="outline-light" size="lg" icon={false}>Learn About Migrations</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
