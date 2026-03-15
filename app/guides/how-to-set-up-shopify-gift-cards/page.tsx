import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Gift Cards on Shopify",
  description:
    "Learn how to set up, sell, and manage gift cards on Shopify. Covers enabling gift cards, creating products, customising emails, and tracking usage.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-gift-cards",
  },
  openGraph: {
    title: "How to Set Up Gift Cards on Shopify",
    description:
      "Step-by-step guide to enabling and managing gift cards on your Shopify store.",
    url: "/guides/how-to-set-up-shopify-gift-cards",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-gift-cards", title: "What Are Gift Cards?", level: 2 },
  { id: "enabling-gift-cards", title: "Enabling Gift Cards", level: 2 },
  { id: "creating-gift-card-products", title: "Creating Gift Card Products", level: 2 },
  { id: "customising-gift-card-emails", title: "Customising Gift Card Emails", level: 2 },
  { id: "selling-digital-vs-physical", title: "Digital vs Physical Gift Cards", level: 2 },
  { id: "tracking-gift-card-usage", title: "Tracking Gift Card Usage", level: 2 },
  { id: "common-issues", title: "Common Issues", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Gift Cards on Shopify",
  description:
    "Learn how to set up, sell, and manage gift cards on Shopify.",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-gift-cards`,
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
      name: "How to Set Up Gift Cards on Shopify",
      item: `${siteConfig.url}/guides/how-to-set-up-shopify-gift-cards`,
    },
  ],
};

export default function GiftCardsGuidePage() {
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
                Store Setup
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Gift Cards on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Gift cards are one of the highest-margin products you can sell, and Shopify makes them straightforward to set up. This guide covers everything from enabling the feature to tracking redemptions and handling common edge cases.
            </p>

            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated January 2025</span>
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

              <section id="what-are-gift-cards" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Are Gift Cards?</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify gift cards are store credit vouchers that customers can purchase and send to others, or receive as a reward. They function as a payment method at checkout: the recipient enters a unique code and the value is deducted from their order total.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Unlike discount codes, gift cards carry a specific monetary value that depletes with each use. A customer with a £50 gift card can spend it across multiple orders until the balance reaches zero. Any unused balance stays on the card.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Gift cards are available on all Shopify plans. They are built natively into the platform, so you do not need a third-party app for basic functionality. More advanced features, such as physical card printing or branded card designs, may require additional apps.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Why Merchants Love Gift Cards</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Cash received upfront, fulfilment deferred until redemption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Around 20-30% of gift card value is typically never redeemed (breakage)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Recipients often spend more than the card value, increasing average order value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Strong gifting season performance at Christmas, birthdays, and Mother&apos;s Day</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="enabling-gift-cards" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Enabling Gift Cards</h2>
                <p className="text-lg text-foreground mb-4">
                  Gift cards are a product type in Shopify, not a setting. You enable them by creating your first gift card product. There is no toggle to flick in Settings.
                </p>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-foreground-dark">Go to Products in your Shopify admin</strong>
                      <p className="text-foreground mt-2">Click the Products section in the left-hand navigation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-foreground-dark">Click Gift Cards</strong>
                      <p className="text-foreground mt-2">You will see a Gift Cards tab alongside the main products list.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-foreground-dark">Click Add gift card product</strong>
                      <p className="text-foreground mt-2">This opens the gift card product editor. From here you configure denominations, descriptions, and images.</p>
                    </div>
                  </li>
                </ol>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Important Note on VAT</h4>
                  <p className="text-foreground">
                    Gift cards are not subject to VAT at the point of sale in the UK. VAT is collected when the card is redeemed on a taxable purchase. Shopify handles this automatically, but check with your accountant if you have unusual tax situations.
                  </p>
                </div>
              </section>

              <section id="creating-gift-card-products" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating Gift Card Products</h2>
                <p className="text-lg text-foreground mb-4">
                  Each gift card product can have multiple denominations set as variants. A single product called &quot;Gift Card&quot; with variants of £10, £25, £50, and £100 is the standard approach.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Title and Description</h4>
                    <p className="text-foreground">
                      Keep the title simple: &quot;Gift Card&quot; or &quot;[Brand Name] Gift Card&quot;. In the description, explain where it can be spent, whether it expires, and how to redeem it. UK consumer law requires you to display expiry terms clearly.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Denominations as Variants</h4>
                    <p className="text-foreground">
                      Add each value as a variant. The variant price sets the gift card value. A variant priced at £50 creates a £50 gift card. You can have as many denominations as needed.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Expiry Dates</h4>
                    <p className="text-foreground">
                      You can set gift cards to never expire or expire after a fixed period. UK regulations do not mandate a minimum validity period for commercial gift cards, but the Consumer Rights Act 2015 requires any conditions to be clearly stated. Most UK merchants opt for no expiry or a 2-5 year window.
                    </p>
                  </div>
                </div>
              </section>

              <section id="customising-gift-card-emails" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customising Gift Card Emails</h2>
                <p className="text-lg text-foreground mb-4">
                  When a digital gift card is purchased, Shopify sends an email to the recipient with the unique code. This email is one of the most important brand touchpoints for gift cards, yet many merchants leave it as the default.
                </p>
                <p className="text-lg text-foreground mb-4">
                  To customise the gift card email, go to Settings, then Notifications, and find the &quot;Gift card created&quot; template. You can edit the HTML directly or use the visual editor.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">What to Include</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Your logo and brand colours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>The gift card value prominently displayed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>A personalised message field if you have enabled one</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Clear instructions on how to redeem the code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Terms and conditions, including any expiry date</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>A direct link to your store</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="selling-digital-vs-physical" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Digital vs Physical Gift Cards</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify natively supports digital gift cards only. The code is emailed to the recipient, and that is where the native feature ends. Physical gift cards, the kind you print and put in an envelope or display in-store, require either a third-party printing service or a specialised app.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Digital Gift Cards</h4>
                    <p className="text-foreground">
                      Best for most online merchants. Zero cost to fulfil, instant delivery, and easy to manage. Allow customers to send directly to a recipient&apos;s email address or receive the code themselves.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Physical Gift Cards</h4>
                    <p className="text-foreground">
                      Suited to brands with a strong physical retail presence or high-end gifting occasions. Apps such as Govalo allow you to design and sell printed cards that are fulfilled as a physical product, with the unique code printed or activated separately.
                    </p>
                  </div>
                </div>
              </section>

              <section id="tracking-gift-card-usage" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking Gift Card Usage</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify provides basic gift card reporting under Analytics. You can see the total value issued, redeemed, and outstanding. For deeper analysis, you will need to export data or use a reporting app.
                </p>
                <p className="text-lg text-foreground mb-4">
                  To view individual gift cards, go to Products, then Gift Cards. You can search by code, see the balance remaining, view the purchase and redemption history, and manually adjust balances if needed. This is useful for handling customer service queries.
                </p>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Accounting Tip</h4>
                  <p className="text-foreground">
                    Gift card sales create a liability on your balance sheet until redeemed, not revenue. Ensure your accounting software is configured to handle this correctly. When connecting Shopify to Xero or QuickBooks, check how gift card transactions are being recorded.
                  </p>
                </div>
              </section>

              <section id="common-issues" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Issues</h2>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Gift card email not received</h3>
                    <p className="text-foreground mb-3">The most common cause is the email landing in a spam folder or the recipient address being entered incorrectly at purchase.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Go to the order in your admin, find the gift card, and resend the email from the gift card detail page. Consider improving email deliverability by setting up a custom sender domain.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Code not applying at checkout</h3>
                    <p className="text-foreground mb-3">Gift cards are entered in a different field to discount codes at checkout. Some customers confuse the two.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Add clear instructions to your gift card product page and in the confirmation email explaining that the code goes in the &quot;Gift card&quot; field, not the discount code field.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Gift cards not showing in checkout</h3>
                    <p className="text-foreground mb-3">If customers cannot apply a gift card code, it may be a theme issue with checkout scripts or an incompatible third-party checkout app.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Test with a fresh gift card on a test order. Check your checkout customisations for any scripts that modify the payment section.</p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-create-shopify-discount-codes" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Create Discount Codes</h4>
                      <p className="text-sm text-foreground">Set up and manage promotional discounts</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-customer-accounts" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Customer Accounts</h4>
                      <p className="text-sm text-foreground">Let customers track gift card balances</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Setting Up Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our Shopify experts can configure gift cards, subscriptions, and custom store features to maximise your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
