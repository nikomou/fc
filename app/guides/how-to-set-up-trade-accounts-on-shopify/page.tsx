import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Trade Accounts on Shopify",
  description:
    "Learn how to create and manage trade accounts on Shopify. Covers application forms, approval workflows, customer verification, and trade account features.",
  alternates: {
    canonical: "/guides/how-to-set-up-trade-accounts-on-shopify",
  },
  openGraph: {
    title: "How to Set Up Trade Accounts on Shopify",
    description:
      "Learn how to create and manage trade accounts on Shopify with application forms and approval workflows.",
    url: "/guides/how-to-set-up-trade-accounts-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-trade-accounts", title: "What Are Trade Accounts?", level: 2 },
  { id: "application-forms", title: "Application Forms", level: 2 },
  { id: "verification-process", title: "Verification Process", level: 2 },
  { id: "approval-workflow", title: "Approval Workflow", level: 2 },
  { id: "account-setup", title: "Account Setup", level: 2 },
  { id: "trade-account-features", title: "Trade Account Features", level: 2 },
  { id: "managing-trade-accounts", title: "Managing Trade Accounts", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Trade Accounts on Shopify",
  description:
    "Learn how to create and manage trade accounts on Shopify with application forms and approval workflows.",
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
    "@id": `${siteConfig.url}/guides/how-to-set-up-trade-accounts-on-shopify`,
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
      name: "How to Set Up Trade Accounts on Shopify",
      item: `${siteConfig.url}/guides/how-to-set-up-trade-accounts-on-shopify`,
    },
  ],
};

export default function TradeAccountsGuidePage() {
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
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Trade Accounts on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Trade accounts let you offer wholesale pricing to verified business customers.
              This guide covers the entire workflow from application to approval and ongoing
              management.
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
              {/* What Are Trade Accounts? */}
              <section id="what-are-trade-accounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  What Are Trade Accounts?
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Trade accounts are special customer accounts for verified businesses that
                  grant access to wholesale pricing, payment terms, and B2B-specific features.
                  Unlike regular customer accounts, trade accounts require approval before
                  the customer can place orders.
                </p>
                <p className="text-lg text-foreground mb-6">
                  A well-designed trade account system protects your wholesale pricing from
                  being accessed by consumers, while making it easy for legitimate trade
                  customers to do business with you.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Trade Account Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>For merchants:</strong> Verified customers, protected pricing, streamlined ordering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>For buyers:</strong> Easy access to wholesale prices, payment terms, order history</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Operational:</strong> Automated workflows reduce manual account management</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The goal is to strike a balance between accessibility and protection. Make
                  it easy for genuine trade customers to apply while filtering out consumers
                  trying to access wholesale pricing.
                </p>
              </section>

              {/* Application Forms */}
              <section id="application-forms" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Application Forms
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The application form is the gateway to your trade programme. It collects
                  the information you need to verify applicants and set up their accounts.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Essential Form Fields
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Business name:</strong> Registered company name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Contact details:</strong> Name, email, phone of primary contact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Business address:</strong> Registered and shipping addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Business type:</strong> Retailer, distributor, designer, etc.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>VAT/Tax number:</strong> For verification and tax-exempt status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Company registration:</strong> Companies House number or equivalent</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Optional Fields
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Website URL:</strong> To verify the business exists and assess fit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Social media:</strong> Instagram or other relevant profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Estimated order volume:</strong> To assess account tier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>How did you hear about us:</strong> Marketing attribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Trade references:</strong> For credit checking</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Keep the form as short as possible while collecting essential information.
                    Every additional field reduces completion rates. You can always request
                    more details after initial approval.
                  </p>
                </div>
              </section>

              {/* Verification Process */}
              <section id="verification-process" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Verification Process
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Verification confirms that applicants are genuine businesses that meet your
                  criteria. The level of verification depends on your risk tolerance and the
                  value of your wholesale pricing.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Verification Methods
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Light Verification</h4>
                    <p className="text-foreground mb-2">
                      Check the company exists via Companies House, verify their website,
                      confirm their VAT number. Takes minutes.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Lower-value wholesale, higher volume applications
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Standard Verification</h4>
                    <p className="text-foreground mb-2">
                      All light verification plus a phone call to confirm the application,
                      review of their retail presence, and possibly a credit check.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> Mid-value wholesale, payment terms requests
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Full Verification</h4>
                    <p className="text-foreground mb-2">
                      Standard verification plus trade references, credit checks through
                      agencies, and possibly a physical visit or video call.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Best for:</strong> High-value accounts, extended payment terms
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Verification Checklist
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Company exists on Companies House or equivalent registry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>VAT number is valid (check via VIES or HMRC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Website matches the business type claimed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Business address can be verified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Contact email matches business domain (not gmail/hotmail)</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Red Flags</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Personal email address with business application</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Company registration less than 6 months old</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>No online presence whatsoever</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Residential address only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Claimed business type does not match your products</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Approval Workflow */}
              <section id="approval-workflow" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Approval Workflow
                </h2>
                <p className="text-lg text-foreground mb-4">
                  A well-defined approval workflow ensures consistent decisions and timely
                  responses. Speed matters because applicants often approach multiple
                  suppliers simultaneously.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Workflow Steps
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Application received</strong>
                      <p className="text-foreground mt-1">Send automated acknowledgement with expected timeline (e.g., &quot;We review applications within 48 hours&quot;).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Initial review</strong>
                      <p className="text-foreground mt-1">Check for obvious issues. Reject spam, incomplete applications, or clear mismatches.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Verification</strong>
                      <p className="text-foreground mt-1">Perform your standard verification checks based on the application tier.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Decision</strong>
                      <p className="text-foreground mt-1">Approve, reject, or request additional information.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Communication</strong>
                      <p className="text-foreground mt-1">Notify the applicant with clear next steps.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong>Account setup</strong>
                      <p className="text-foreground mt-1">For approved applications, create the B2B account with appropriate pricing.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Response Times
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Set clear SLAs for your team:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Acknowledgement:</strong> Immediate (automated)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Initial review:</strong> Within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Final decision:</strong> Within 48-72 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Account activation:</strong> Same day as approval</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Automate as much as possible. Use Zapier or Flow to trigger notifications,
                    create tasks for your team, and update application status. Manual processes
                    slow down and introduce inconsistency.
                  </p>
                </div>
              </section>

              {/* Account Setup */}
              <section id="account-setup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Account Setup
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Once approved, you need to create the customer&apos;s B2B account with the
                  correct pricing, payment terms, and access permissions.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Shopify Plus B2B Setup
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Create the company</strong>
                      <p className="text-foreground mt-1">Go to Customers → Companies and add a new company with their business details.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Add location(s)</strong>
                      <p className="text-foreground mt-1">Add their billing and shipping addresses. Each location can have different settings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Add contacts</strong>
                      <p className="text-foreground mt-1">Create user accounts for people who will place orders.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Assign price list</strong>
                      <p className="text-foreground mt-1">Link the appropriate price list based on their tier.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Set payment terms</strong>
                      <p className="text-foreground mt-1">Configure their payment options (upfront, Net 30, etc.).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong>Send login details</strong>
                      <p className="text-foreground mt-1">Invite the contact to set up their password and access the account.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Welcome Communication
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Send a welcome email that includes:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Login instructions and link to set password</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Their assigned pricing tier and any minimums</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Payment terms (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Key contact for account support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Links to line sheets, catalogues, or ordering guides</span>
                  </li>
                </ul>
              </section>

              {/* Trade Account Features */}
              <section id="trade-account-features" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Trade Account Features
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Beyond pricing, trade accounts can offer features that make wholesale
                  buying easier and encourage repeat orders.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Quick Order Forms</h4>
                    <p className="text-foreground">
                      Let trade customers enter SKUs and quantities directly without browsing
                      product pages. Essential for repeat orders and large catalogues.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Saved Order Templates</h4>
                    <p className="text-foreground">
                      Customers can save frequently ordered combinations and reorder with one
                      click. Reduces friction for regular buyers.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Multiple Ship-To Addresses</h4>
                    <p className="text-foreground">
                      Retailers with multiple locations can ship different items to different
                      addresses within a single order.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Order History and Tracking</h4>
                    <p className="text-foreground">
                      Full visibility of past orders, invoices, and shipment tracking. Makes
                      reordering and accounts reconciliation easy.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Downloadable Assets</h4>
                    <p className="text-foreground">
                      Provide trade customers with product images, marketing materials, and
                      line sheets they can use in their own sales.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Survey your trade customers about what features would help them order
                    more frequently. Often small friction points (like having to re-enter
                    details each time) significantly impact order frequency.
                  </p>
                </div>
              </section>

              {/* Managing Trade Accounts */}
              <section id="managing-trade-accounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Managing Trade Accounts
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Trade accounts require ongoing management to maintain accurate information,
                  appropriate pricing, and healthy customer relationships.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Regular Reviews
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Quarterly:</strong> Review order volumes against tier requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Annually:</strong> Verify company details, contact information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ongoing:</strong> Monitor payment performance for credit terms</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Tier Upgrades and Downgrades
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Create clear criteria for moving customers between tiers:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground-dark mb-3">Upgrade Triggers</h4>
                      <ul className="space-y-2 text-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">↑</span>
                          <span>Consistent ordering above threshold</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">↑</span>
                          <span>On-time payment history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">↑</span>
                          <span>Annual spend milestones</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-dark mb-3">Downgrade Triggers</h4>
                      <ul className="space-y-2 text-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">↓</span>
                          <span>Orders below minimum for 2+ quarters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">↓</span>
                          <span>Late payment issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">↓</span>
                          <span>Business closure/change</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Account Deactivation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Sometimes you need to close trade accounts. Have a clear process:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Communicate the reason and any path to reinstatement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Give notice period for non-urgent cases (30 days)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Settle any outstanding orders or payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Remove B2B access while keeping order history</span>
                  </li>
                </ul>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Ready to set up your trade account system? Here is how to proceed:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Define your criteria</strong>
                      <p className="text-foreground mt-1">What makes someone eligible for a trade account? Document your requirements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Create your application</strong>
                      <p className="text-foreground mt-1">Build or configure your trade application form with essential fields.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Document workflows</strong>
                      <p className="text-foreground mt-1">Write down your verification and approval process for team consistency.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Set up automation</strong>
                      <p className="text-foreground mt-1">Configure automated emails, notifications, and status updates.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-shopify-b2b"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify B2B Setup Guide →</h4>
                      <p className="text-sm text-foreground">Complete B2B implementation</p>
                    </Link>
                    <Link
                      href="/guides/how-to-create-wholesale-pricing-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Wholesale Pricing Guide →</h4>
                      <p className="text-sm text-foreground">Pricing strategies and setup</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Trade Accounts?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We can help you design and implement a complete trade account system that
            streamlines onboarding while protecting your wholesale pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/shopify-plus" variant="outline-light" size="lg" icon={false}>
              Our Shopify Plus Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
