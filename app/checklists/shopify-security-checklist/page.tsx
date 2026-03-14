import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Security Checklist: Protect Your Store",
  description:
    "Secure your Shopify store with our comprehensive security checklist. Covers 2FA, fraud prevention, app safety, GDPR compliance and threat protection.",
  alternates: {
    canonical: "/checklists/shopify-security-checklist",
  },
  openGraph: {
    title: "Shopify Security Checklist",
    description: "Secure your Shopify store against threats with our comprehensive checklist.",
    url: "/checklists/shopify-security-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Account Security",
    icon: "Shield",
    color: "#ef436b",
    items: [
      "Enable two-factor authentication (2FA) on owner account",
      "Use unique, strong password (16+ characters)",
      "Use password manager for credentials",
      "Set up backup authentication methods",
      "Review login history regularly",
      "Log out of unused sessions",
      "Use dedicated email for Shopify account",
      "Enable login notifications",
    ],
  },
  {
    title: "Staff Account Security",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Require 2FA for all staff accounts",
      "Use principle of least privilege",
      "Only grant permissions staff need",
      "Review staff permissions quarterly",
      "Remove accounts for departed staff immediately",
      "Use individual accounts (no shared logins)",
      "Audit staff account activity",
      "Document who has access to what",
    ],
  },
  {
    title: "App Security",
    icon: "Settings",
    color: "#8b5cf6",
    items: [
      "Only install apps from Shopify App Store",
      "Review app permissions before installing",
      "Check app developer reputation and reviews",
      "Remove unused apps",
      "Review apps with broad data access",
      "Check for apps accessing customer PII",
      "Verify apps have privacy policies",
      "Monitor for suspicious app behaviour",
    ],
  },
  {
    title: "API & Integration Security",
    icon: "Settings",
    color: "#10b981",
    items: [
      "Review all API access tokens",
      "Remove unused API credentials",
      "Use private apps only when necessary",
      "Limit API permissions to required scopes",
      "Rotate API keys periodically",
      "Monitor API usage for anomalies",
      "Document all integrations",
      "Secure webhook endpoints",
    ],
  },
  {
    title: "Fraud Prevention",
    icon: "Shield",
    color: "#f59e0b",
    items: [
      "Enable Shopify Fraud Analysis",
      "Set up fraud protection app if needed",
      "Configure high-risk order alerts",
      "Review orders from new customers",
      "Check mismatched billing/shipping addresses",
      "Verify large or unusual orders",
      "Set up address verification (AVS)",
      "Enable CVV verification",
    ],
  },
  {
    title: "Payment Security",
    icon: "CreditCard",
    color: "#ec4899",
    items: [
      "Use Shopify Payments or PCI-compliant gateway",
      "Never store card details outside Shopify",
      "Enable 3D Secure for high-risk regions",
      "Review payment method settings",
      "Set up chargeback alerts",
      "Monitor for unusual payment patterns",
      "Document payment disputes",
      "Train staff on payment security",
    ],
  },
  {
    title: "Data Protection",
    icon: "Shield",
    color: "#64748b",
    items: [
      "Understand what customer data you collect",
      "Only collect necessary data",
      "Have data retention policy",
      "Enable customer data request handling",
      "Secure any exported data",
      "Encrypt sensitive files",
      "Limit who can export data",
      "Securely dispose of old data",
    ],
  },
  {
    title: "Theme & Code Security",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Keep theme updated",
      "Review custom code for vulnerabilities",
      "Remove hardcoded credentials",
      "Validate all form inputs",
      "Use HTTPS for all resources",
      "Avoid inline scripts where possible",
      "Review third-party script sources",
      "Check for outdated JavaScript libraries",
    ],
  },
  {
    title: "Backup & Recovery",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Set up automated theme backups",
      "Export product data regularly",
      "Export customer data for backup",
      "Document recovery procedures",
      "Test restoration process",
      "Store backups securely off-platform",
      "Have incident response plan",
      "Know how to contact Shopify support urgently",
    ],
  },
  {
    title: "Monitoring & Alerts",
    icon: "Search",
    color: "#8b5cf6",
    items: [
      "Set up uptime monitoring",
      "Configure security alert notifications",
      "Monitor for unusual traffic patterns",
      "Check for brute force attempts",
      "Review Shopify security notifications",
      "Monitor domain for expiry",
      "Check SSL certificate status",
      "Review third-party service status",
    ],
  },
];

const STORAGE_KEY = "shopify-security-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "Is Shopify secure by default?",
    answer: "Shopify provides excellent baseline security. All stores automatically get SSL certificates, PCI DSS compliance for payments, and protection against common attacks like SQL injection and cross-site scripting. However, store owners remain responsible for account security, staff access management, app permissions, and fraud prevention. The platform is secure; the challenge is ensuring your configuration and practices do not create vulnerabilities."
  },
  {
    question: "How important is two-factor authentication for my Shopify account?",
    answer: "Two-factor authentication is essential. Your Shopify admin contains customer data, payment information, and complete control over your business. A compromised account could result in data theft, fraudulent orders, or complete loss of access. Enable 2FA for all accounts with admin access, not just the store owner. Use authenticator apps rather than SMS where possible, as SMS can be intercepted through SIM swapping attacks."
  },
  {
    question: "What permissions should I give staff accounts?",
    answer: "Apply the principle of least privilege: give each person only the access they need to do their job. A customer service representative needs order and customer access but not theme editing or app installation rights. Review permissions quarterly and remove access immediately when someone leaves. Never share login credentials between team members as this makes auditing impossible and creates security risks."
  },
  {
    question: "How do I protect my store from fraud?",
    answer: "Enable Shopify's built-in fraud analysis, which flags high-risk orders. Review flagged orders manually before fulfilment. Watch for warning signs: mismatched billing and shipping addresses, unusually large orders from new customers, multiple failed payment attempts, and orders from high-risk regions. Consider additional fraud protection apps for high-volume stores. Verify suspicious orders by phone before shipping."
  },
  {
    question: "Are Shopify apps safe to install?",
    answer: "Apps from the Shopify App Store undergo review, but this does not guarantee they are risk-free. Before installing, check the developer's reputation, read recent reviews, and carefully review requested permissions. Be wary of apps requesting broad access like customer data or order information if their function does not require it. Remove unused apps promptly. Regularly audit your installed apps as part of security maintenance."
  },
  {
    question: "What should I do if my Shopify store is compromised?",
    answer: "Act immediately. Change all passwords and revoke all API tokens. Remove any unfamiliar apps or staff accounts. Contact Shopify support through official channels to report the incident and get guidance. Review recent orders for fraud. Notify affected customers if their data may have been exposed. Document everything for potential legal or compliance requirements. After resolution, review how the breach occurred and implement measures to prevent recurrence."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Security Checklist",
  description: "Secure your Shopify store against threats with our comprehensive checklist covering account security, staff permissions, app safety, and fraud prevention.",
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
    "@id": `${siteConfig.url}/checklists/shopify-security-checklist`,
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
      name: "Security Checklist",
      item: `${siteConfig.url}/checklists/shopify-security-checklist`,
    },
  ],
};
export default function ShopifySecurityChecklistPage() {
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
            Shopify Security Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Protect your store, customers, and revenue. Use this {totalItems}-point checklist to secure your Shopify store against common threats.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Security Matters</h2>
          <p className="text-lg text-foreground">
            While Shopify provides robust platform-level security, store owners bear responsibility for account access, staff permissions, app choices, and fraud prevention. A single compromised staff account or malicious app can expose customer data, enable fraudulent transactions, or lock you out of your own business.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Real Cost of Security Failures */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Real Cost of Security Failures
          </h2>
          <p className="text-lg text-foreground mb-6">
            Security breaches in ecommerce are not abstract risks. They result in real financial losses, damaged customer relationships, and sometimes complete business failure. Understanding these consequences helps prioritise security measures.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Consequences of a Breach</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">1.</span>
              <span><strong>Stolen customer payment information</strong> leading to fraud and liability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">2.</span>
              <span><strong>Fraudulent orders shipped at your expense</strong> before detection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">3.</span>
              <span><strong>Hijacked accounts</strong> with attackers demanding ransom</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">4.</span>
              <span><strong>Regulatory penalties</strong> for data protection failures under GDPR</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">5.</span>
              <span><strong>Permanent reputation damage</strong> and lost customer trust</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Most Common Attack Vectors</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">The most common attacks are not sophisticated hacking but simple credential theft:</p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Weak passwords or passwords reused from other breached sites
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Phishing emails targeting staff with admin access
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Lack of two-factor authentication on admin accounts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Malicious apps requesting excessive permissions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Former staff retaining account access after departure
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Security Quick Wins</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Enable 2FA Everywhere</h4>
              <p className="text-foreground">Two-factor authentication on all admin accounts prevents most credential theft attacks immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Audit Staff Access Monthly</h4>
              <p className="text-foreground">Remove access for departed staff and review permissions for current team members.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Remove Unused Apps</h4>
              <p className="text-foreground">Every installed app is a potential vulnerability. If you are not using it, remove it.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Review Fraud Alerts Daily</h4>
              <p className="text-foreground">Catch fraudulent orders before shipping by reviewing Shopify's fraud analysis.</p>
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
            Security works alongside operational best practices:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-app-audit-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">App Audit →</h3>
              <p className="text-sm text-foreground">Review and secure your installed apps</p>
            </Link>
            <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist →</h3>
              <p className="text-sm text-foreground">Security settings to verify before going live</p>
            </Link>
            <Link href="/checklists/shopify-b2b-wholesale-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">B2B Wholesale →</h3>
              <p className="text-sm text-foreground">Additional security for business customers</p>
            </Link>
            <Link href="/checklists/shopify-gdpr-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">GDPR Compliance →</h3>
              <p className="text-sm text-foreground">Data protection and privacy requirements</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-905163.webp"
        imageAlt="Shopify store security and fraud prevention"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Security Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your store's security and implement best practices to protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Security Audit</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
