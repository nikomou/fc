import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Make Shopify GDPR Compliant",
  description:
    "Complete GDPR compliance guide for Shopify stores. Learn about data collection, privacy policies, customer rights, cookie consent, and legal requirements.",
  alternates: {
    canonical: "/guides/how-to-make-shopify-gdpr-compliant",
  },
  openGraph: {
    title: "How to Make Shopify GDPR Compliant",
    description:
      "Complete GDPR compliance guide for Shopify stores. Data collection, privacy policies, and customer rights.",
    url: "/guides/how-to-make-shopify-gdpr-compliant",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-gdpr", title: "Understanding GDPR", level: 2 },
  { id: "data-collection-audit", title: "Data Collection Audit", level: 2 },
  { id: "privacy-policy", title: "Privacy Policy", level: 2 },
  { id: "customer-consent", title: "Customer Consent", level: 2 },
  { id: "data-subject-rights", title: "Data Subject Rights", level: 2 },
  { id: "third-party-processors", title: "Third-Party Processors", level: 2 },
  { id: "documentation", title: "Documentation", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Make Shopify GDPR Compliant",
  description:
    "Complete GDPR compliance guide for Shopify stores. Data collection, privacy policies, and customer rights.",
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
    "@id": `${siteConfig.url}/guides/how-to-make-shopify-gdpr-compliant`,
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
      name: "How to Make Shopify GDPR Compliant",
      item: `${siteConfig.url}/guides/how-to-make-shopify-gdpr-compliant`,
    },
  ],
};

export default function GDPRComplianceGuidePage() {
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
                <span>20 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Make Shopify GDPR Compliant
            </h1>

            <p className="text-xl text-foreground mb-8">
              GDPR compliance is mandatory for any Shopify store serving EU or UK customers.
              This guide walks you through every requirement, from privacy policies to
              handling data requests.
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
              {/* Understanding GDPR */}
              <section id="understanding-gdpr" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding GDPR
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The General Data Protection Regulation (GDPR) is a comprehensive data
                  protection law that applies to any business processing personal data of
                  EU residents. The UK has its own version (UK GDPR) that applies post-Brexit
                  and is nearly identical.
                </p>
                <p className="text-lg text-foreground mb-6">
                  If your Shopify store sells to customers in the EU or UK, GDPR applies to
                  you regardless of where your business is located. Non-compliance can result
                  in fines up to 4% of annual global turnover or €20 million, whichever is higher.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key GDPR Principles</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Lawfulness:</strong> You must have a legal basis for processing personal data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Transparency:</strong> Customers must know what data you collect and why</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Purpose limitation:</strong> Only use data for stated purposes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Data minimisation:</strong> Only collect what you actually need</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Accuracy:</strong> Keep personal data accurate and up to date</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Storage limitation:</strong> Do not keep data longer than necessary</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Security:</strong> Protect data from unauthorised access or loss</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  GDPR is not just about ticking boxes. It is about respecting customer privacy
                  and handling their data responsibly. Done well, compliance builds trust.
                </p>
              </section>

              {/* Data Collection Audit */}
              <section id="data-collection-audit" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Data Collection Audit
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The first step to GDPR compliance is understanding exactly what personal
                  data you collect, where it comes from, and where it goes. This is called
                  a data audit or data mapping exercise.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  What Counts as Personal Data
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Personal data is any information that can identify a person, directly or
                  indirectly. In ecommerce, this includes:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Names and email addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Postal addresses and phone numbers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Payment card details (last 4 digits)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>IP addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Cookie identifiers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Order history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Browsing behaviour on your store</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Conducting Your Audit
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>List all data collection points</strong>
                      <p className="text-foreground mt-1">Checkout, account creation, newsletter signup, contact forms, reviews, etc.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Document what data is collected at each point</strong>
                      <p className="text-foreground mt-1">Be specific. List every field and data type.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Identify the legal basis for each</strong>
                      <p className="text-foreground mt-1">Contract (order fulfilment), consent (marketing), legitimate interest (fraud prevention).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Map data flows</strong>
                      <p className="text-foreground mt-1">Where does data go? Shopify, email provider, analytics, shipping apps, etc.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Define retention periods</strong>
                      <p className="text-foreground mt-1">How long do you keep each type of data? This should be justified.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a spreadsheet documenting your data audit. You will need this for
                    your privacy policy, for responding to data requests, and potentially for
                    demonstrating compliance to regulators.
                  </p>
                </div>
              </section>

              {/* Privacy Policy */}
              <section id="privacy-policy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Privacy Policy
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Your privacy policy is a legal requirement under GDPR. It must clearly
                  explain what data you collect, why, and how it is used. It should be
                  written in plain language that customers can understand.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Required Elements
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Identity and contact details:</strong> Your business name, address, and contact information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Types of data collected:</strong> List all categories of personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Purposes of processing:</strong> Why you collect and use each type of data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Legal basis:</strong> The lawful basis for each processing activity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Data sharing:</strong> Who you share data with (Shopify, apps, shipping providers)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>International transfers:</strong> If data is transferred outside UK/EU</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Retention periods:</strong> How long you keep each type of data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Customer rights:</strong> Access, rectification, erasure, etc.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>How to contact you:</strong> For privacy queries or complaints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Right to complain:</strong> To the Information Commissioner&apos;s Office (ICO)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Adding Your Privacy Policy
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to Settings → Legal</strong>
                      <p className="text-foreground mt-1">Shopify provides a template you can customise.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Customise for your business</strong>
                      <p className="text-foreground mt-1">The template is a starting point. Add details specific to your data practices.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Link from footer and checkout</strong>
                      <p className="text-foreground mt-1">Make sure customers can find it easily.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Review regularly</strong>
                      <p className="text-foreground mt-1">Update whenever you change your data practices, add apps, or change processors.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Avoid These Mistakes</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Using a generic template without customisation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Overly complex legal language that customers cannot understand</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Failing to mention third-party apps and their data access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Not updating when you change your practices</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Customer Consent */}
              <section id="customer-consent" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Customer Consent
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Consent under GDPR must be freely given, specific, informed, and
                  unambiguous. Pre-ticked boxes or bundled consent are not valid. Customers
                  must actively opt in.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  When You Need Consent
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Marketing emails:</strong> Always requires explicit consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Non-essential cookies:</strong> Analytics, advertising, social media tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Remarketing:</strong> Using customer data for targeted advertising</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Sharing with third parties for their marketing:</strong> Rarely done, always needs consent</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  When Consent is Not Needed
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Processing orders:</strong> Legal basis is contract performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Order confirmations and shipping updates:</strong> Transactional, not marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Fraud prevention:</strong> Legal basis is legitimate interest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Tax records:</strong> Legal basis is legal obligation</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Implementing Consent in Shopify
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Newsletter Signup</h4>
                    <p className="text-foreground">
                      Use unchecked opt-in boxes. Do not pre-select marketing consent. Clearly
                      state what they are signing up for: &quot;Receive marketing emails about
                      new products and offers.&quot;
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Checkout Marketing Opt-in</h4>
                    <p className="text-foreground">
                      In Settings → Checkout, ensure the marketing opt-in checkbox is not
                      pre-selected. Customers must actively choose to receive marketing.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Cookie Consent</h4>
                    <p className="text-foreground">
                      See our separate guide on cookie consent. You need a proper consent
                      mechanism that blocks non-essential cookies until consent is given.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Keep records of consent. Shopify stores when customers opted in to
                    marketing, but ensure you can demonstrate consent if questioned. This
                    includes the date, time, and what they were told when consenting.
                  </p>
                </div>
              </section>

              {/* Data Subject Rights */}
              <section id="data-subject-rights" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Data Subject Rights
                </h2>
                <p className="text-lg text-foreground mb-4">
                  GDPR gives individuals rights over their personal data. You must be able
                  to respond to these requests within one month.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  The Eight Rights
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">1. Right to Be Informed</h4>
                    <p className="text-foreground">
                      Customers must know how you use their data. Your privacy policy fulfils this.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">2. Right of Access</h4>
                    <p className="text-foreground">
                      Customers can request a copy of all data you hold about them. In Shopify:
                      Customers → select customer → Request customer data.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">3. Right to Rectification</h4>
                    <p className="text-foreground">
                      Customers can ask you to correct inaccurate data. Update their record in
                      Shopify when requested.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">4. Right to Erasure (Right to Be Forgotten)</h4>
                    <p className="text-foreground">
                      Customers can request deletion of their data. In Shopify: Customers →
                      select customer → Erase personal data. Note: You can retain data needed
                      for legal obligations (tax records).
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">5. Right to Restrict Processing</h4>
                    <p className="text-foreground">
                      Customers can ask you to limit how you use their data while disputes are
                      resolved.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">6. Right to Data Portability</h4>
                    <p className="text-foreground">
                      Customers can request their data in a machine-readable format to transfer
                      to another service.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">7. Right to Object</h4>
                    <p className="text-foreground">
                      Customers can object to processing based on legitimate interests. For
                      marketing, they can unsubscribe at any time.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">8. Rights Related to Automated Decision Making</h4>
                    <p className="text-foreground">
                      Customers have rights regarding automated decisions that significantly
                      affect them. Rarely applies to standard ecommerce.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Handling Requests
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Verify identity</strong>
                      <p className="text-foreground mt-1">Ensure the request is from the actual customer. Ask for verification if unsure.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Acknowledge receipt</strong>
                      <p className="text-foreground mt-1">Confirm you received the request and will respond within one month.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Process the request</strong>
                      <p className="text-foreground mt-1">Use Shopify&apos;s built-in tools for data access and erasure requests.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Notify third parties</strong>
                      <p className="text-foreground mt-1">If you have shared data with apps or services, notify them of erasure requests.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Respond to the customer</strong>
                      <p className="text-foreground mt-1">Confirm what action you have taken within the one-month deadline.</p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Third-Party Processors */}
              <section id="third-party-processors" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Third-Party Processors
                </h2>
                <p className="text-lg text-foreground mb-4">
                  When you use apps, email services, or other tools that handle customer
                  data, you remain responsible for that data. You must ensure your processors
                  are GDPR compliant.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Shopify as a Processor
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify acts as a data processor on your behalf. They have a Data Processing
                  Addendum (DPA) that covers GDPR requirements. You can find this in your
                  Shopify admin under Settings → Legal.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  App Compliance
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Review app privacy policies:</strong> Check what data they collect and how they use it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Check for DPAs:</strong> Legitimate apps should have Data Processing Addendums available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Understand data transfers:</strong> Where does the app store data? If outside EU/UK, what safeguards exist?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Limit app permissions:</strong> Only grant the access apps actually need</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Common Third-Party Services
                </h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Email marketing:</strong> Klaviyo, Mailchimp, Omnisend (all have GDPR compliance features)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Analytics:</strong> Google Analytics (configure for GDPR, enable IP anonymisation)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reviews:</strong> Judge.me, Loox, Yotpo (check their GDPR documentation)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shipping:</strong> Your shipping provider also processes customer data</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Documentation */}
              <section id="documentation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Documentation
                </h2>
                <p className="text-lg text-foreground mb-4">
                  GDPR requires you to demonstrate compliance. This means keeping records
                  of your data processing activities, consent, and any data requests handled.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  What to Document
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Data audit:</strong> What data you collect, why, and where it goes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Legal bases:</strong> Your justification for each processing activity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Consent records:</strong> When and how consent was obtained</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Data subject requests:</strong> Log of all requests received and how you responded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Processor agreements:</strong> Copies of DPAs with apps and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Privacy policy versions:</strong> Keep dated copies when you update</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a simple compliance folder with your data audit spreadsheet, current
                    privacy policy, list of processors with their DPAs, and a log for data
                    requests. Review and update quarterly.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Implement GDPR compliance in this order:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Conduct your data audit</strong>
                      <p className="text-foreground mt-1">You cannot be compliant without knowing what data you process.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Update your privacy policy</strong>
                      <p className="text-foreground mt-1">Make it comprehensive and easy to understand.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Implement cookie consent</strong>
                      <p className="text-foreground mt-1">See our dedicated cookie consent guide for implementation details.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Review marketing consent</strong>
                      <p className="text-foreground mt-1">Ensure all opt-ins are explicit and unchecked by default.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-add-cookie-consent-to-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Cookie Consent Guide →</h4>
                      <p className="text-sm text-foreground">Implementation and best practices</p>
                    </Link>
                    <Link
                      href="/guides/how-to-secure-your-shopify-store"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Security Guide →</h4>
                      <p className="text-sm text-foreground">Protect customer data</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need GDPR Compliance Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your Shopify store for GDPR compliance and implement the
            necessary changes to protect your business and customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Compliance Audit
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
