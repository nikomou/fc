import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify App Audit Checklist: Cut Costs & Boost Speed",
  description:
    "Audit Shopify apps with our 78-point checklist. Identify redundant apps, reduce costs, improve site speed, and optimize your app stack for better performance.",
  alternates: {
    canonical: "/checklists/shopify-app-audit-checklist",
  },
  openGraph: {
    title: "Shopify App Audit Checklist",
    description: "Audit your Shopify apps for performance, security, and cost with our comprehensive checklist.",
    url: "/checklists/shopify-app-audit-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "App Inventory",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "List all installed apps",
      "Document what each app does",
      "Note monthly cost of each app",
      "Calculate total monthly app spend",
      "Identify app owners/contacts in your team",
      "Check which apps are actively used",
      "Note apps installed but never configured",
      "Identify trial apps that expired",
    ],
  },
  {
    title: "Usage Assessment",
    icon: "Search",
    color: "#0ea5e9",
    items: [
      "Review each app's actual usage",
      "Check analytics/reporting from apps",
      "Identify apps with overlapping features",
      "Find apps with unused features",
      "Check if built-in Shopify features replace apps",
      "Review apps not used in 3+ months",
      "Identify apps used only for specific campaigns",
      "Document apps essential to operations",
    ],
  },
  {
    title: "Performance Impact",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Test site speed with all apps enabled",
      "Disable non-essential apps and re-test",
      "Identify apps adding significant scripts",
      "Check for apps loading on every page",
      "Review theme.liquid for app code",
      "Check for multiple analytics/tracking apps",
      "Identify apps causing layout shifts",
      "Test mobile performance impact",
    ],
  },
  {
    title: "Script Audit",
    icon: "Settings",
    color: "#10b981",
    items: [
      "Review all scripts in theme.liquid",
      "Check for orphaned code from uninstalled apps",
      "Identify apps loading external resources",
      "Check for duplicate jQuery or libraries",
      "Review app scripts in checkout (Plus only)",
      "Look for inline scripts that should be deferred",
      "Check for render-blocking resources",
      "Document scripts loaded per page type",
    ],
  },
  {
    title: "Cost Analysis",
    icon: "CreditCard",
    color: "#f59e0b",
    items: [
      "Calculate cost per feature used",
      "Compare app costs to alternatives",
      "Identify apps with usage-based pricing",
      "Check for cheaper alternatives",
      "Review annual vs monthly pricing options",
      "Calculate ROI of revenue-generating apps",
      "Identify free alternatives for basic needs",
      "Check for bundled app deals",
    ],
  },
  {
    title: "Security Review",
    icon: "Shield",
    color: "#ec4899",
    items: [
      "Check app permissions granted",
      "Review apps with full store access",
      "Identify apps accessing customer data",
      "Check app developer reputation",
      "Review recent app reviews for issues",
      "Verify apps are from trusted developers",
      "Check for apps no longer maintained",
      "Review data processing agreements",
    ],
  },
  {
    title: "Integration Health",
    icon: "Settings",
    color: "#64748b",
    items: [
      "Test critical app functionality",
      "Check for sync errors or failures",
      "Review webhook configurations",
      "Verify API connections are active",
      "Test backup and recovery procedures",
      "Check for authentication issues",
      "Review integration logs for errors",
      "Verify data flow between apps",
    ],
  },
  {
    title: "Redundancy Check",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Identify apps with duplicate features",
      "Check for multiple review apps",
      "Review multiple email marketing apps",
      "Identify overlapping SEO apps",
      "Check for multiple popup/modal apps",
      "Review multiple countdown timer apps",
      "Identify multiple shipping/fulfilment apps",
      "Consolidate where possible",
    ],
  },
  {
    title: "Cleanup Actions",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "Uninstall unused apps",
      "Remove orphaned app code from theme",
      "Cancel unused app subscriptions",
      "Update outdated app configurations",
      "Migrate data before removing apps",
      "Document removal decisions",
      "Test site after each removal",
      "Monitor for issues post-cleanup",
    ],
  },
  {
    title: "Ongoing Management",
    icon: "FileText",
    color: "#8b5cf6",
    items: [
      "Schedule quarterly app audits",
      "Set app installation approval process",
      "Document app decisions and rationale",
      "Monitor app update notifications",
      "Review new app installations promptly",
      "Track app spend monthly",
      "Stay informed of new Shopify features",
      "Maintain app inventory document",
    ],
  },
];

const STORAGE_KEY = "shopify-app-audit-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How many apps is too many for a Shopify store?",
    answer: "There is no magic number, but most successful stores operate with 10-15 essential apps. The issue is not the count but the cumulative impact. Each app potentially adds scripts, API calls, and complexity. Focus on removing apps that are not actively contributing to revenue or operations. Some stores run efficiently with 20+ apps while others struggle with 5 poorly chosen ones."
  },
  {
    question: "How do apps affect my store's loading speed?",
    answer: "Apps impact speed primarily through JavaScript files loaded on your storefront. Each app may add scripts to your theme.liquid file that load on every page. Some apps also make external API calls that delay rendering. Testing your speed with apps disabled versus enabled reveals their true impact. Tools like Google PageSpeed Insights and Shopify's own web performance dashboard help identify slow-loading resources."
  },
  {
    question: "What happens to my data when I uninstall a Shopify app?",
    answer: "Data handling varies by app. Some apps delete all associated data upon uninstallation, while others retain it for a period. Before uninstalling, export any data you need to keep, such as reviews, customer segments, or analytics. Check the app's documentation or contact support to understand their data retention policy. Critical data should be backed up independently."
  },
  {
    question: "Why is orphaned code left behind after uninstalling apps?",
    answer: "Many apps inject code directly into your theme files during installation. When uninstalled, the app cannot always cleanly remove this code, especially if you have customised your theme since installation. This orphaned code continues loading, wasting resources and potentially causing conflicts. A developer should periodically review your theme.liquid and other template files to remove defunct app code."
  },
  {
    question: "How do I know if an app is worth the cost?",
    answer: "Calculate the return on investment. For revenue-generating apps like upsell or email marketing tools, track attributable sales versus subscription cost. For operational apps, consider time saved and error reduction. If an app costs 50 pounds monthly but saves 5 hours of manual work or generates 500 pounds in additional revenue, it is clearly worthwhile. Apps with unclear or minimal value are prime candidates for removal."
  },
  {
    question: "Should I conduct app audits regularly?",
    answer: "Yes, quarterly audits are recommended for active stores. Needs change over time: an app essential during a promotion may be unnecessary afterwards. New Shopify features sometimes replace functionality you previously needed apps for. Regular audits also catch unused apps from departed team members, expired trials still charging, and apps no longer maintained by their developers."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify App Audit Checklist",
  description: "Audit your Shopify apps for performance, security, and cost with our comprehensive checklist for identifying redundant apps and optimisation opportunities.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-15",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-app-audit-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "App Audit Checklist", item: `${siteConfig.url}/checklists/shopify-app-audit-checklist` },
  ],
};
export default function ShopifyAppAuditChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>16 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify App Audit Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Too many apps slow your store and drain your budget. Use this {totalItems}-point checklist to audit, optimise, and streamline your app stack.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Audit Your Apps</h2>
          <p className="text-lg text-foreground">
            The average Shopify store accumulates apps over time. What starts as essential tools often grows into a bloated collection of overlapping functionality, unused features, and forgotten trials. Each app adds performance overhead, security considerations, and monthly costs.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Impact of App Bloat */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The True Cost of App Bloat
          </h2>
          <p className="text-lg text-foreground mb-6">
            App bloat is one of the most common and preventable problems affecting Shopify store performance. Every app installed is a potential liability.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Hidden Costs of Too Many Apps</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Consider a store with 25 installed apps:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Average subscription cost: £32/month per app
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Total monthly spend: £800
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Typical audit reveals: 8-10 apps providing minimal value
              </li>
            </ul>
            <p className="text-foreground">
              Removing those 8-10 apps saves <strong className="text-foreground-dark">£250-320 monthly or £3,000-3,840 annually</strong>, plus improved site speed.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Performance Impact</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">•</span>
              <span>Each app adds 50-200KB of JavaScript on average</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">•</span>
              <span>Scripts often load on every page, not just where needed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">•</span>
              <span>External API calls add latency to page rendering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">•</span>
              <span>Uninstalled apps often leave orphaned code behind</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Warning Signs of App Bloat</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Multiple apps doing similar things</strong> (3 popup apps, 2 SEO apps)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Apps you cannot remember installing</strong> or why</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Trial apps still charging</strong> after evaluation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Apps from departed team members</strong> no one uses</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Audit Process */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The App Audit Process
          </h2>
          <p className="text-lg text-foreground mb-6">
            Follow this process to systematically evaluate your app stack:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Create a complete inventory</h3>
              <p className="text-foreground">List every installed app with its cost, purpose, and who owns it. You cannot optimise what you have not documented.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Test speed with apps disabled</h3>
              <p className="text-foreground">Run PageSpeed tests with apps enabled and disabled to measure their true performance impact. Focus on the biggest offenders first.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Identify redundancies</h3>
              <p className="text-foreground">Look for overlapping functionality. Two review apps, three popup tools, or multiple analytics trackers all add cost without additional value.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Remove and monitor</h3>
              <p className="text-foreground">Uninstall apps one at a time, test after each removal, and check for orphaned code left in your theme files.</p>
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
            Combine your app audit with these complementary improvements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Comprehensive performance improvements beyond apps</p>
            </Link>
            <Link href="/checklists/shopify-security-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Security Checklist →</h3>
              <p className="text-sm text-foreground">Protect your store from app-related security risks</p>
            </Link>
            <Link href="/checklists/shopify-launch-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist →</h3>
              <p className="text-sm text-foreground">Ensure app stack is optimised before going live</p>
            </Link>
            <Link href="/checklists/shopify-cro-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">CRO Checklist →</h3>
              <p className="text-sm text-foreground">Evaluate if conversion apps are delivering ROI</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Your App Stack?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your apps and recommend optimisations for better performance and lower costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Audit Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
