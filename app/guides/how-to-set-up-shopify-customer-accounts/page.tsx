import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Customer Accounts",
  description: "Complete guide to setting up customer accounts on Shopify. Compare new vs classic accounts, configure settings, and create a great customer experience.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-customer-accounts" },
  openGraph: {
    title: "How to Set Up Shopify Customer Accounts",
    description: "Complete guide to setting up customer accounts on Shopify.",
    url: "/guides/how-to-set-up-shopify-customer-accounts",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "account-types", title: "Account Types", level: 2 },
  { id: "new-customer-accounts", title: "New Customer Accounts", level: 2 },
  { id: "classic-accounts", title: "Classic Accounts", level: 2 },
  { id: "configuration", title: "Configuration", level: 2 },
  { id: "account-features", title: "Account Features", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Customer Accounts",
  description: "Complete guide to setting up customer accounts on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-customer-accounts` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Customer Accounts", item: `${siteConfig.url}/guides/how-to-set-up-shopify-customer-accounts` },
  ],
};

export default function CustomerAccountsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Store Setup</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Shopify Customer Accounts</h1>
            <p className="text-xl text-foreground mb-8">Customer accounts let shoppers track orders, save addresses, and view purchase history. This guide covers setup, configuration, and best practices.</p>
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="account-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Account Types</h2>
                <p className="text-lg text-foreground mb-4">Shopify offers two types of customer accounts: new customer accounts and classic customer accounts. Your choice affects login methods, features, and customer experience.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">New Customer Accounts</h3>
                    <p className="text-foreground text-sm">Passwordless login via email code. Modern, secure, and integrated with Shop app.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Classic Customer Accounts</h3>
                    <p className="text-foreground text-sm">Traditional email and password login. More customisable but requires password management.</p>
                  </div>
                </div>
              </section>

              <section id="new-customer-accounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">New Customer Accounts</h2>
                <p className="text-lg text-foreground mb-4">New customer accounts use passwordless authentication. Customers receive a one-time code via email to log in, eliminating password-related issues.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Benefits</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>No passwords to remember or reset</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>More secure (no password vulnerabilities)</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>Integrated with Shop app for order tracking</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>Faster login process</span></li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Limitations</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-red-500 font-bold">×</span><span>Less customisable than classic accounts</span></li>
                  <li className="flex items-start gap-3"><span className="text-red-500 font-bold">×</span><span>Some third-party apps may not fully support them</span></li>
                  <li className="flex items-start gap-3"><span className="text-red-500 font-bold">×</span><span>Customers need email access to log in</span></li>
                </ul>
              </section>

              <section id="classic-accounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Classic Accounts</h2>
                <p className="text-lg text-foreground mb-4">Classic accounts use traditional email and password authentication. They offer more customisation options but require customers to manage passwords.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">When to Use Classic</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>You need extensive account page customisation</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Third-party apps require classic account integration</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>B2B scenarios with specific login requirements</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Migrating from another platform with existing accounts</span></li>
                </ul>
              </section>

              <section id="configuration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Configuration</h2>
                <p className="text-lg text-foreground mb-4">Configure customer accounts via Settings → Customer accounts in your Shopify admin.</p>
                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div><strong className="text-foreground-dark">Choose account version</strong><p className="mt-1">Select new customer accounts or classic customer accounts.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div><strong className="text-foreground-dark">Set account requirements</strong><p className="mt-1">Choose optional, required, or disabled for checkout.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div><strong className="text-foreground-dark">Configure self-serve options</strong><p className="mt-1">Enable customers to request returns, edit orders, etc.</p></div>
                  </li>
                </ol>
              </section>

              <section id="account-features" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Account Features</h2>
                <p className="text-lg text-foreground mb-4">Customer accounts provide several features that improve the shopping experience.</p>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Order History</h3>
                    <p className="text-foreground">View past orders, track shipments, and reorder items.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Saved Addresses</h3>
                    <p className="text-foreground">Store multiple shipping addresses for faster checkout.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Wishlists</h3>
                    <p className="text-foreground">Save products for later (requires app or theme support).</p>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Keep accounts optional:</strong> Never force account creation at checkout.</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Highlight benefits:</strong> Explain why creating an account is valuable.</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Offer account creation post-purchase:</strong> Ask after the sale is complete.</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Test the experience:</strong> Create a test account and go through the full flow.</span></li>
                </ul>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-configure-shopify-checkout" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Configure Checkout →</h4>
                      <p className="text-sm text-foreground">Checkout settings guide</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Complete pre-launch guide</p>
                    </Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Account Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team can configure customer accounts and customise the experience for your store.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
