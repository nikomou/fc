import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Payments",
  description:
    "Complete guide to setting up Shopify Payments for your store. Learn about requirements, activation, payment methods, and troubleshooting common issues.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-payments",
  },
  openGraph: {
    title: "How to Set Up Shopify Payments",
    description: "Complete guide to setting up Shopify Payments for your store.",
    url: "/guides/how-to-set-up-shopify-payments",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-shopify-payments", title: "What Is Shopify Payments", level: 2 },
  { id: "requirements", title: "Requirements", level: 2 },
  { id: "activation-steps", title: "Activation Steps", level: 2 },
  { id: "payment-methods", title: "Payment Methods", level: 2 },
  { id: "payout-settings", title: "Payout Settings", level: 2 },
  { id: "transaction-fees", title: "Transaction Fees", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Payments",
  description: "Complete guide to setting up Shopify Payments for your store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-payments` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Payments", item: `${siteConfig.url}/guides/how-to-set-up-shopify-payments` },
  ],
};

export default function ShopifyPaymentsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Payments</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify Payments
            </h1>

            <p className="text-xl text-foreground mb-8">
              Shopify Payments is the easiest way to accept payments on your store. This guide walks you through setup, configuration, and optimisation.
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="what-is-shopify-payments" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Shopify Payments</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Payments is Shopify&apos;s built-in payment processor, powered by Stripe. It allows you to accept credit cards, debit cards, and digital wallets directly on your store without needing a third-party payment gateway.
                </p>
                <p className="text-lg text-foreground mb-6">
                  The main advantage is simplicity. Everything is managed within your Shopify admin, including payouts, chargebacks, and reporting. You also avoid the additional transaction fees that Shopify charges when using external payment providers.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>No third-party fees</strong> on top of Shopify&apos;s transaction fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Unified dashboard</strong> for all payment management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Automatic fraud analysis</strong> built into every transaction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Quick payouts</strong> directly to your bank account</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Requirements</h2>
                <p className="text-lg text-foreground mb-4">
                  Before you can activate Shopify Payments, you need to meet several requirements. These vary slightly by country, but the core requirements are consistent.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Business Requirements</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Supported country:</strong> Your business must be located in a country where Shopify Payments is available (UK, US, Canada, Australia, and most of Europe)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Bank account:</strong> A business bank account in the same country as your store</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Business details:</strong> Registered business name, address, and tax identification number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Product compliance:</strong> Your products must comply with Shopify Payments terms of service</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Important Note</h4>
                  <p className="text-foreground">
                    Certain product categories are prohibited from using Shopify Payments, including CBD products, firearms, adult content, and some high-risk categories. Check Shopify&apos;s terms of service if you&apos;re unsure about your products.
                  </p>
                </div>
              </section>

              <section id="activation-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Activation Steps</h2>
                <p className="text-lg text-foreground mb-6">
                  Setting up Shopify Payments takes about 10-15 minutes. Follow these steps carefully to ensure smooth activation.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Access Payment Settings</strong>
                      <p className="text-foreground mt-1">Go to Settings → Payments in your Shopify admin. Click &quot;Activate Shopify Payments&quot; or &quot;Complete account setup&quot; if you see that option.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Enter Business Details</strong>
                      <p className="text-foreground mt-1">Provide your legal business name, business type (sole trader, limited company, etc.), and registered address. This must match your official business registration.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Add Personal Information</strong>
                      <p className="text-foreground mt-1">Enter details for the business owner or primary stakeholder. This includes name, date of birth, and sometimes ID verification for compliance purposes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Connect Bank Account</strong>
                      <p className="text-foreground mt-1">Enter your bank account details for payouts. In the UK, this is your sort code and account number. Verify the account belongs to the business.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Review and Submit</strong>
                      <p className="text-foreground mt-1">Double-check all information for accuracy. Incorrect details can delay activation or cause payout issues later. Click &quot;Complete account setup&quot; to finish.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="payment-methods" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Payment Methods</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Payments supports multiple payment methods out of the box. Enable the ones most relevant to your customers.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Credit and Debit Cards</h3>
                    <p className="text-foreground">Visa, Mastercard, American Express, and Discover. These are enabled by default and cover the vast majority of transactions.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Digital Wallets</h3>
                    <p className="text-foreground">Apple Pay, Google Pay, and Shop Pay. These provide faster checkout experiences, especially on mobile. Enable them in your Shopify Payments settings.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Buy Now, Pay Later</h3>
                    <p className="text-foreground">Shop Pay Instalments (US), Klarna, and Afterpay. These options can increase average order value by 20-30% for qualifying stores.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Enable Shop Pay for returning customers. It stores their payment and shipping details, reducing checkout friction and increasing conversion rates by up to 18%.
                  </p>
                </div>
              </section>

              <section id="payout-settings" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Payout Settings</h2>
                <p className="text-lg text-foreground mb-4">
                  Configure how and when you receive your money. Payout settings affect your cash flow, so choose options that work for your business.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Payout Schedule</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Daily:</strong> Receive payouts every business day (most common for established stores)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Weekly:</strong> Receive one payout per week on a specific day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Monthly:</strong> Receive one payout per month (useful for accounting purposes)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Payout Timing</h3>
                <p className="text-lg text-foreground mb-4">
                  In the UK, payouts typically take 2-3 business days to reach your bank account after the payout is initiated. New stores may have a longer initial hold period (7-14 days) while Shopify verifies your business.
                </p>
              </section>

              <section id="transaction-fees" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Transaction Fees</h2>
                <p className="text-lg text-foreground mb-6">
                  Shopify Payments fees vary by plan. Understanding these helps you price products appropriately and forecast costs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">2.0% + 25p</div>
                    <div className="text-sm text-foreground">Basic Shopify</div>
                    <div className="text-xs text-foreground mt-1">Online credit cards</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">1.7% + 25p</div>
                    <div className="text-sm text-foreground">Shopify</div>
                    <div className="text-xs text-foreground mt-1">Online credit cards</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">1.5% + 25p</div>
                    <div className="text-sm text-foreground">Advanced Shopify</div>
                    <div className="text-xs text-foreground mt-1">Online credit cards</div>
                  </div>
                </div>

                <p className="text-lg text-foreground">
                  Shopify Plus merchants receive custom rates, typically starting around 1.4% + 25p. Contact Shopify directly for Plus pricing.
                </p>
              </section>

              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Troubleshooting</h2>
                <p className="text-lg text-foreground mb-4">
                  Common issues and how to resolve them quickly.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Payouts on hold</h3>
                    <p className="text-foreground">Usually due to incomplete verification or high-risk flags. Check your email for requests from Shopify and submit any required documentation promptly.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Payment declined for customer</h3>
                    <p className="text-foreground">This is typically the customer&apos;s bank declining, not Shopify. Ask the customer to contact their bank or try a different payment method.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Account under review</h3>
                    <p className="text-foreground">Shopify periodically reviews accounts for compliance. Continue operating normally and respond to any documentation requests within 24 hours.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Complete pre-launch guide</p>
                    </Link>
                    <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Optimisation →</h4>
                      <p className="text-sm text-foreground">Reduce cart abandonment</p>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Guides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-shopify-taxes"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify Taxes for UK Stores</h4>
                      <p className="text-sm text-foreground">Configure VAT and tax rules correctly</p>
                    </Link>
                    <Link
                      href="/guides/how-to-configure-shopify-checkout"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Configure Shopify Checkout</h4>
                      <p className="text-sm text-foreground">Optimise your checkout settings</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Payment Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can configure your payment settings, enable all relevant payment methods, and ensure everything is optimised for conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
