import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Two-Factor Authentication on Shopify",
  description: "Learn how to set up two-factor authentication on Shopify to protect your store. Covers enabling 2FA, staff account security, recovery codes, and password policies.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-two-factor-authentication" },
  openGraph: {
    title: "How to Set Up Two-Factor Authentication on Shopify",
    description: "Learn how to set up two-factor authentication on Shopify to protect your store. Covers enabling 2FA, staff account security, recovery codes, and password policies.",
    url: "/guides/how-to-set-up-shopify-two-factor-authentication",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-2fa-matters", title: "Why 2FA Matters", level: 2 },
  { id: "enabling-2fa", title: "Enabling 2FA", level: 2 },
  { id: "staff-account-security", title: "Staff Account Security", level: 2 },
  { id: "recovery-codes", title: "Recovery Codes", level: 2 },
  { id: "customer-account-2fa", title: "Customer Account 2FA", level: 2 },
  { id: "password-policies", title: "Password Policies", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Two-Factor Authentication on Shopify",
  description: "Learn how to set up two-factor authentication on Shopify to protect your store. Covers enabling 2FA, staff account security, recovery codes, and password policies.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-two-factor-authentication` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Two-Factor Authentication on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-two-factor-authentication` },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/guides" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Security &amp; Compliance</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Two-Factor Authentication on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Your Shopify admin contains sensitive customer data, order details, and financial information. Two-factor authentication (2FA) is the single most effective step you can take to protect it from unauthorised access.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
              <span className="text-gray-300">•</span><span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="why-2fa-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why 2FA Matters</h2>
                <p className="text-lg text-foreground mb-4">Passwords alone are not sufficient protection for business accounts. Password breaches, phishing attacks, and credential stuffing attacks are common. 2FA adds a second verification step that attackers cannot complete even if they have your password.</p>
                <p className="text-lg text-foreground mb-4">Shopify admin accounts are high-value targets. A compromised admin account can expose customer data (triggering GDPR notification requirements), allow fraudulent orders, and enable changes to payment settings. 2FA prevents the vast majority of account compromises.</p>
              </section>
              <section id="enabling-2fa" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Enabling 2FA</h2>
                <p className="text-lg text-foreground mb-4">To enable 2FA on your own Shopify account: click your account avatar, go to Account Security, then under Two-step authentication, click Turn on. Choose your method: authenticator app (recommended), SMS, or security key.</p>
                <p className="text-lg text-foreground mb-4">Authenticator apps (Google Authenticator, Authy, 1Password) are more secure than SMS because they are not vulnerable to SIM-swapping attacks. Use an authenticator app wherever possible.</p>
              </section>
              <section id="staff-account-security" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Staff Account Security</h2>
                <p className="text-lg text-foreground mb-4">As a store owner, you can require 2FA for all staff accounts. Go to Settings, then Users and Permissions, and enable the requirement for all staff to use 2FA. When enabled, staff members who have not set up 2FA will be prompted to do so on their next login.</p>
                <p className="text-lg text-foreground mb-4">Review which staff members have admin access regularly. Remove access for team members who no longer need it. Apply the principle of least privilege: give staff only the permissions they need for their role.</p>
              </section>
              <section id="recovery-codes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Recovery Codes</h2>
                <p className="text-lg text-foreground mb-4">When you set up 2FA, Shopify generates recovery codes. These are one-time-use codes that let you access your account if you lose access to your 2FA device. Download and store these in a secure location such as a password manager or offline in a safe.</p>
                <p className="text-lg text-foreground mb-4">If you lose both your 2FA device and recovery codes, account recovery requires identity verification with Shopify Support, which can take several days.</p>
              </section>
              <section id="customer-account-2fa" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Account 2FA</h2>
                <p className="text-lg text-foreground mb-4">Shopify&apos;s new customer accounts (used with the new customer accounts feature, not classic customer accounts) support passkeys and other secure authentication methods. While you cannot enforce 2FA on customer accounts, encouraging customers to use passkeys or strong passwords reduces account takeover risk for your customer base.</p>
              </section>
              <section id="password-policies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Password Policies</h2>
                <p className="text-lg text-foreground mb-4">Encourage all staff to use a password manager and unique, strong passwords for their Shopify accounts. Prohibit sharing login credentials between staff: each team member should have their own account with appropriate permissions, not a shared account.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-secure-your-shopify-store" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Secure Your Store</h4><p className="text-sm text-foreground">Broader security practices</p></Link>
                    <Link href="/guides/how-to-make-shopify-gdpr-compliant" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">GDPR Compliance</h4><p className="text-sm text-foreground">Protect customer data</p></Link>
                  </div>
                </div>
              </section>
            </article>
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a Security Review of Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">We audit Shopify store security settings, staff permissions, and data handling practices to identify and close vulnerabilities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
