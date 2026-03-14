import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "GDPR Compliance Shopify Checklist: Privacy Guide",
  description:
    "Ensure GDPR compliance with our 67-point Shopify checklist. Master cookie consent, privacy policies, data protection, and customer rights for EU/UK stores.",
  alternates: {
    canonical: "/checklists/shopify-gdpr-checklist",
  },
  openGraph: {
    title: "Shopify GDPR Compliance Checklist",
    description: "Ensure your Shopify store is GDPR compliant with our comprehensive checklist.",
    url: "/checklists/shopify-gdpr-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Privacy Policy",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "Privacy policy is accessible from every page",
      "Policy written in clear, plain language",
      "Explains what data is collected",
      "Explains why data is collected (legal basis)",
      "Lists all third parties data is shared with",
      "Explains how long data is retained",
      "Details customer rights (access, deletion, etc.)",
      "Includes contact information for data queries",
      "States if data is transferred outside EU/UK",
      "Policy is dated and version controlled",
    ],
  },
  {
    title: "Cookie Consent",
    icon: "Shield",
    color: "#0ea5e9",
    items: [
      "Cookie banner displayed to EU/UK visitors",
      "Banner blocks non-essential cookies until consent",
      "Clear options to accept or reject cookies",
      "Granular consent options (analytics, marketing, etc.)",
      "Easy way to change preferences later",
      "Cookie policy explains each cookie's purpose",
      "Consent recorded and auditable",
      "No pre-ticked consent boxes",
      "Essential cookies clearly identified",
    ],
  },
  {
    title: "Data Collection & Consent",
    icon: "Settings",
    color: "#8b5cf6",
    items: [
      "Only collect data that's necessary",
      "Marketing opt-in is separate from account creation",
      "Newsletter signup uses double opt-in",
      "Consent is freely given, specific, and informed",
      "Record of consent stored (timestamp, what agreed to)",
      "Checkout marketing opt-in is not pre-ticked",
      "Clear explanation of what subscribers will receive",
      "Easy unsubscribe in every marketing email",
    ],
  },
  {
    title: "Customer Rights",
    icon: "FileText",
    color: "#10b981",
    items: [
      "Process for customers to access their data",
      "Process for customers to correct their data",
      "Process for customers to delete their data",
      "Process for customers to export their data",
      "Respond to requests within 30 days",
      "Verify identity before fulfilling requests",
      "Document all data requests and responses",
      "Train staff on handling data requests",
    ],
  },
  {
    title: "Third-Party Apps & Services",
    icon: "Zap",
    color: "#f59e0b",
    items: [
      "Audit all apps that access customer data",
      "Ensure apps have GDPR-compliant privacy policies",
      "Have data processing agreements with vendors",
      "List all third parties in privacy policy",
      "Review data retention policies of third parties",
      "Understand where third parties store data",
      "Remove apps that don't need customer data",
      "Review app permissions regularly",
    ],
  },
  {
    title: "Email Marketing Compliance",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "Only email customers who have opted in",
      "Include unsubscribe link in every email",
      "Honour unsubscribe requests promptly",
      "Include physical address in emails",
      "Don't purchase email lists",
      "Segment by consent type",
      "Re-permission old lists if consent unclear",
      "Document consent for email subscribers",
    ],
  },
  {
    title: "Data Security",
    icon: "Shield",
    color: "#64748b",
    items: [
      "SSL certificate active (Shopify default)",
      "Strong passwords required for staff accounts",
      "Two-factor authentication enabled",
      "Staff access limited to necessary data only",
      "Regular review of who has data access",
      "Process for reporting data breaches",
      "Breach notification plan in place (72 hours)",
      "Data encrypted in transit and at rest",
    ],
  },
  {
    title: "Documentation & Training",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "Data processing activities documented",
      "Legal basis for each processing activity recorded",
      "Staff trained on GDPR requirements",
      "Data protection officer appointed (if required)",
      "Regular compliance reviews scheduled",
      "Keep records of compliance efforts",
      "Update policies when practices change",
      "Stay informed of regulatory updates",
    ],
  },
];

const STORAGE_KEY = "shopify-gdpr-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "Does GDPR apply to my Shopify store?",
    answer: "GDPR applies if you sell to customers in the EU or UK, regardless of where your business is located. If you ship to Europe, accept European payment methods, or advertise to European audiences, you must comply. Non-compliance can result in fines up to 20 million euros or 4% of annual global turnover, whichever is higher. Even small stores face enforcement risk, so compliance is essential."
  },
  {
    question: "What's the difference between essential and non-essential cookies?",
    answer: "Essential cookies are strictly necessary for your store to function (shopping cart, checkout, security, load balancing). These do not require consent. Non-essential cookies include analytics (Google Analytics), marketing (Facebook Pixel), personalisation, and third-party embeds. These require explicit consent before loading. Cookie consent banners must give users genuine choice to reject non-essential cookies."
  },
  {
    question: "Do I need a cookie consent banner if I'm not in Europe?",
    answer: "Yes, if you sell to EU or UK customers. GDPR applies based on where your customers are located, not where your business operates. A US-based store selling to UK customers must implement cookie consent for those visitors. Use geolocation to show consent banners only to EU/UK traffic if preferred, though many stores find universal consent banners simpler to maintain."
  },
  {
    question: "Can I use pre-ticked consent boxes for marketing emails?",
    answer: "No. GDPR requires active, explicit consent. Pre-ticked boxes do not constitute valid consent. Users must take deliberate action (ticking an empty box, clicking a button) to opt in to marketing. This applies at checkout, account creation, and newsletter signups. Document when and how consent was obtained for compliance audits. This requirement reduces list size but dramatically improves list quality and engagement."
  },
  {
    question: "What happens if a customer requests their data deletion?",
    answer: "You must delete their personal data within 30 days unless you have legitimate legal grounds to retain it (e.g., tax requirements, fraud prevention, defending legal claims). Shopify lets you redact customer data whilst preserving necessary business records. Inform the customer when deletion is complete. Also notify any third parties who received the data. Keep documentation of the request and your response."
  },
  {
    question: "Are Shopify apps GDPR compliant?",
    answer: "Not automatically. Each app's compliance depends on its developer. Before installing apps that access customer data, review their privacy policy, check for GDPR compliance statements, ensure they have data processing agreements (DPAs), and understand where they store data. Many reputable apps are compliant, but it is your responsibility to verify. List all data-processing apps in your privacy policy."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify GDPR Compliance Checklist",
  description: "Ensure your Shopify store is GDPR compliant with our comprehensive checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-11",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-gdpr-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "GDPR Compliance", item: `${siteConfig.url}/checklists/shopify-gdpr-checklist` },
  ],
};
export default function ShopifyGDPRChecklistPage() {
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
            <span>14 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify GDPR Compliance Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            GDPR compliance is not optional if you sell to EU or UK customers. Use this {totalItems}-point checklist to protect your customers and your business.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why GDPR Matters</h2>
          <p className="text-lg text-foreground">
            GDPR applies if you process data from EU or UK customers, regardless of where your business operates. Non-compliance carries fines up to 20 million euros or 4% of annual turnover. <strong>Important:</strong> This checklist provides general guidance, not legal advice. Consult privacy lawyers for advice specific to your circumstances.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* Beyond Compliance */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Beyond Compliance: GDPR as Competitive Advantage
          </h2>
          <p className="text-lg text-foreground mb-6">
            While many stores view GDPR as burdensome regulation, forward-thinking retailers recognise it as an opportunity. Research shows 86% of consumers report privacy concerns, and 78% consider a company's privacy practices when making purchase decisions.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">GDPR Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground-dark mb-2">Lawfulness</h4>
              <p className="text-sm text-foreground">You need legal basis for processing data</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground-dark mb-2">Transparency</h4>
              <p className="text-sm text-foreground">Customers must understand what you do with their data</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground-dark mb-2">Purpose Limitation</h4>
              <p className="text-sm text-foreground">Use data only for stated purposes</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground-dark mb-2">Data Minimisation</h4>
              <p className="text-sm text-foreground">Collect only what is necessary</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground-dark mb-3">The Business Case for Compliance</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <span><strong>Higher quality email lists</strong> from explicit consent requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <span><strong>Reduced tracking bloat</strong> from auditing which tools actually add value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <span><strong>Increased trust</strong> that improves conversion rates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <span><strong>Future-proofing</strong> against expanding global privacy regulations</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Key Penalties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-red-500 mb-1">20M euros</div>
              <div className="text-sm text-foreground">Maximum fine</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-red-500 mb-1">4%</div>
              <div className="text-sm text-foreground">Of annual global turnover</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Essential First Steps
          </h2>
          <p className="text-lg text-foreground mb-6">
            Start with these fundamental compliance requirements:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Install a cookie consent banner</h3>
              <p className="text-foreground">Block non-essential cookies until visitors consent. Many Shopify apps provide compliant solutions.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Update your privacy policy</h3>
              <p className="text-foreground">Clearly explain what data you collect, why, and who you share it with. Link it from every page.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Fix your email consent</h3>
              <p className="text-foreground">Remove pre-ticked marketing checkboxes at checkout and newsletter signups. Consent must be explicit.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Audit your apps</h3>
              <p className="text-foreground">List all apps that access customer data. Check their GDPR compliance and add them to your privacy policy.</p>
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
            Combine GDPR compliance with broader best practices:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-launch-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist →</h3>
              <p className="text-sm text-foreground">Include compliance from day one</p>
            </Link>
            <Link href="/checklists/shopify-security-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Security Checklist →</h3>
              <p className="text-sm text-foreground">Protect the data you collect</p>
            </Link>
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing →</h3>
              <p className="text-sm text-foreground">Compliant email practices</p>
            </Link>
            <Link href="/checklists/shopify-analytics-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Analytics Checklist →</h3>
              <p className="text-sm text-foreground">Privacy-compliant tracking setup</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Compliance Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We can help implement cookie consent, privacy policies, and GDPR-compliant processes on your Shopify store.
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
