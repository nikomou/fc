import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Secure Your Shopify Store",
  description:
    "Complete security guide for Shopify stores. Learn how to protect customer data, secure admin access, prevent fraud, and maintain PCI compliance.",
  alternates: {
    canonical: "/guides/how-to-secure-your-shopify-store",
  },
  openGraph: {
    title: "How to Secure Your Shopify Store",
    description:
      "Complete security guide for Shopify stores. Protect customer data, secure admin access, and prevent fraud.",
    url: "/guides/how-to-secure-your-shopify-store",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-security-matters", title: "Why Security Matters", level: 2 },
  { id: "shopify-built-in-security", title: "Built-In Security", level: 2 },
  { id: "admin-access-security", title: "Admin Access Security", level: 2 },
  { id: "fraud-prevention", title: "Fraud Prevention", level: 2 },
  { id: "app-security", title: "App Security", level: 2 },
  { id: "customer-data-protection", title: "Customer Data Protection", level: 2 },
  { id: "security-monitoring", title: "Security Monitoring", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Secure Your Shopify Store",
  description:
    "Complete security guide for Shopify stores. Protect customer data, secure admin access, and prevent fraud.",
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
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-secure-your-shopify-store`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Secure Your Shopify Store",
      item: `${siteConfig.url}/guides/how-to-secure-your-shopify-store`,
    },
  ],
};

export default function SecurityGuidePage() {
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
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                Guide
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Secure Your Shopify Store
            </h1>

            <p className="text-xl text-foreground mb-8">
              Security is not optional in ecommerce. This guide covers everything you need
              to protect your Shopify store, your customers&apos; data, and your business from
              threats.
            </p>

            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated February 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Why Security Matters */}
              <section id="why-security-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why Security Matters
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Ecommerce stores are prime targets for cybercriminals. You handle payment
                  information, store customer data, and process financial transactions. A
                  security breach can devastate your business through lost sales, legal
                  liability, and destroyed customer trust.
                </p>
                <p className="text-lg text-foreground mb-6">
                  The good news is that Shopify handles much of the heavy lifting. But you
                  still need to configure your store correctly and follow security best
                  practices to stay protected.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The Risks</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Financial loss:</strong> Chargebacks, fraud, theft of funds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Data breach:</strong> Customer information exposed, GDPR fines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reputation damage:</strong> Lost customer trust is hard to rebuild</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Account takeover:</strong> Hackers controlling your admin access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Business disruption:</strong> Downtime while recovering from attacks</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  Prevention is always cheaper than recovery. The measures in this guide
                  take minimal time to implement but provide substantial protection.
                </p>
              </section>

              {/* Shopify Built-In Security */}
              <section id="shopify-built-in-security" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Built-In Security
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify provides enterprise-grade security out of the box. Understanding
                  what Shopify handles helps you focus on areas where you need to act.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  What Shopify Handles
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">SSL Certificates</h4>
                    <p className="text-foreground">
                      Every Shopify store gets free SSL encryption. All data between your
                      customers and your store is encrypted in transit. The padlock icon
                      appears automatically.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">PCI DSS Compliance</h4>
                    <p className="text-foreground">
                      Shopify is Level 1 PCI DSS compliant, the highest level. This means
                      payment card data is handled securely. You never actually touch credit
                      card numbers.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Server Security</h4>
                    <p className="text-foreground">
                      Shopify manages all server infrastructure, including DDoS protection,
                      firewalls, and intrusion detection. You do not need to worry about
                      server-level security.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Automatic Updates</h4>
                    <p className="text-foreground">
                      Security patches and updates are applied automatically. No waiting for
                      updates or worrying about vulnerabilities in outdated software.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Shopify&apos;s built-in security is one of the strongest reasons to use the
                    platform. Self-hosted solutions like WooCommerce or Magento require you
                    to manage all these security aspects yourself.
                  </p>
                </div>
              </section>

              {/* Admin Access Security */}
              <section id="admin-access-security" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Admin Access Security
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Your Shopify admin is the keys to your kingdom. If an attacker gains
                  admin access, they can steal customer data, redirect payments, or destroy
                  your store. Securing admin access is critical.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Enable Two-Factor Authentication
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Two-factor authentication (2FA) is non-negotiable. It ensures that even
                  if your password is compromised, attackers cannot access your account
                  without the second factor.
                </p>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to Settings → Users and permissions</strong>
                      <p className="text-foreground mt-1">Click on your name to access your account settings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Enable two-step authentication</strong>
                      <p className="text-foreground mt-1">Choose between authenticator app (recommended) or SMS.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Save recovery codes</strong>
                      <p className="text-foreground mt-1">Store these securely. You need them if you lose access to your authentication method.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Require 2FA for all staff</strong>
                      <p className="text-foreground mt-1">Go to Settings → Store security and enforce 2FA for everyone.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Strong Password Practices
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use a unique password for Shopify (not used anywhere else)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Minimum 12 characters with mix of letters, numbers, symbols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use a password manager (1Password, Bitwarden, LastPass)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Never share passwords via email or messaging</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Staff Account Management
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Principle of least privilege:</strong> Give each staff member only the permissions they need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Individual accounts:</strong> Never share login credentials. Each person gets their own account.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Regular audits:</strong> Review staff accounts quarterly. Remove access when people leave.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Limit owner accounts:</strong> Only essential people should have full owner access.</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Staff Permission Checklist</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Customer service staff: Orders, customers (read), no settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Marketing team: Products, blog, reports, no payments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Developers: Theme access, maybe apps, no financial data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Finance: Reports, payouts, orders, no theme editing</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Fraud Prevention */}
              <section id="fraud-prevention" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Fraud Prevention
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Payment fraud costs merchants billions annually. While Shopify provides
                  fraud analysis tools, you need to configure them properly and develop
                  processes for handling high-risk orders.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Shopify Fraud Protect
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Available with Shopify Payments, Fraud Protect uses machine learning to
                  analyse orders and flag potential fraud. For protected orders, Shopify
                  covers fraud-related chargebacks.
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Enable Fraud Protect in Settings → Payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Review high-risk orders before fulfilling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Set up order notifications for high fraud risk</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Manual Fraud Review Process
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For orders flagged as high risk, perform these checks before fulfilling:
                </p>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Verify billing and shipping address match</strong>
                      <p className="text-foreground mt-1">Different addresses are not always fraud, but warrant verification.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Check the email address</strong>
                      <p className="text-foreground mt-1">Random strings @gmail suggest fraud. Business emails are usually safer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Contact the customer</strong>
                      <p className="text-foreground mt-1">Call or email to verify the order. Fraudsters rarely respond.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Check IP location</strong>
                      <p className="text-foreground mt-1">Orders from IP addresses far from billing address may indicate fraud.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Red Flags for Fraud</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>First-time customer, high-value order, expedited shipping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Multiple failed payment attempts before success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Shipping to a freight forwarder address</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Customer insisting on immediate shipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Email address does not match customer name at all</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* App Security */}
              <section id="app-security" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  App Security
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Apps extend Shopify&apos;s functionality but also introduce potential security
                  risks. Each app you install has access to some of your store data. Poorly
                  coded or malicious apps can create vulnerabilities.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Choosing Secure Apps
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Check reviews and ratings:</strong> Look for apps with substantial review counts and high ratings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Review permissions:</strong> Does the app need all the access it requests?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Check the developer:</strong> Established companies are generally safer than unknown developers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Look for Built for Shopify badge:</strong> These apps meet Shopify&apos;s quality standards</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  App Audit Checklist
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Perform this audit at least quarterly:
                </p>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>List all installed apps</strong>
                      <p className="text-foreground mt-1">Go to Settings → Apps and sales channels.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Remove unused apps</strong>
                      <p className="text-foreground mt-1">If you have not used an app in 3 months, uninstall it.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Review permissions</strong>
                      <p className="text-foreground mt-1">Check what data each app can access. Is it still appropriate?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Check for updates</strong>
                      <p className="text-foreground mt-1">Apps that have not been updated recently may have security issues.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    When you uninstall an app, some leave code behind in your theme. Check
                    your theme files for orphaned snippets after removing apps, or ask your
                    developer to clean up.
                  </p>
                </div>
              </section>

              {/* Customer Data Protection */}
              <section id="customer-data-protection" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Customer Data Protection
                </h2>
                <p className="text-lg text-foreground mb-4">
                  You have a legal and ethical obligation to protect customer data. Under
                  GDPR, UK GDPR, and other regulations, mishandling customer data can result
                  in significant fines and reputational damage.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Data Minimisation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Only collect data you actually need:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Review checkout fields. Do you need all the information you collect?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Limit marketing data collection to what you will actually use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Delete customer data when requested (GDPR right to erasure)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Set data retention policies and stick to them</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Secure Data Handling
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Never export customer data unnecessarily:</strong> Exports create copies that must be secured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Encrypt any exported data:</strong> If you must export, use encrypted storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Limit who can view customer data:</strong> Not all staff need full customer access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Audit app data access:</strong> Review what customer data your apps can see</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Handling Data Subject Requests</h4>
                  <p className="text-foreground mb-3">
                    Under GDPR, customers can request their data or its deletion. Shopify provides tools for this:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Go to Customers → select customer → Request customer data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>For erasure, use the Erase personal data option</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Respond to requests within 30 days as required by law</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Security Monitoring */}
              <section id="security-monitoring" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Security Monitoring
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Security is not set-and-forget. Ongoing monitoring helps you detect
                  issues early and respond quickly to potential threats.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Activity Monitoring
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Check activity log regularly:</strong> Settings → Activity log shows all admin actions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Set up notifications:</strong> Get alerts for high-risk activities like payouts changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Monitor login attempts:</strong> Watch for failed login attempts or logins from unusual locations</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Regular Security Checklist
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Perform these checks monthly:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Review staff accounts and remove unnecessary access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Check all staff have 2FA enabled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Review installed apps and remove unused ones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Check activity log for suspicious activity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Review payout settings and authorised recipients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Test your fraud review process with recent orders</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a calendar reminder for your monthly security review. It only takes
                    15-20 minutes but significantly reduces your risk exposure.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Implement these security measures immediately:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Enable 2FA everywhere</strong>
                      <p className="text-foreground mt-1">Start with yourself, then enforce it for all staff accounts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Audit staff permissions</strong>
                      <p className="text-foreground mt-1">Review who has access to what and reduce permissions where possible.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Review your apps</strong>
                      <p className="text-foreground mt-1">Remove any apps you do not actively use.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Set up fraud alerts</strong>
                      <p className="text-foreground mt-1">Configure notifications for high-risk orders.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-make-shopify-gdpr-compliant"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">GDPR Compliance Guide →</h4>
                      <p className="text-sm text-foreground">Full GDPR implementation</p>
                    </Link>
                    <Link
                      href="/guides/how-to-add-cookie-consent-to-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Cookie Consent Guide →</h4>
                      <p className="text-sm text-foreground">Cookie compliance setup</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Security Audit?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can review your Shopify store&apos;s security configuration and provide
            a detailed report with recommendations for improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Security Audit
            </Button>
            <Button href="/shopify-support" variant="outline-light" size="lg" icon={false}>
              Ongoing Support
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
