import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Taxes",
  description:
    "Complete guide to configuring taxes in Shopify. Learn about UK VAT setup, international tax collection, tax-inclusive pricing, and exemptions.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-taxes",
  },
  openGraph: {
    title: "How to Set Up Shopify Taxes",
    description:
      "Complete guide to configuring taxes in Shopify. Learn about UK VAT setup, international tax collection, and exemptions.",
    url: "/guides/how-to-set-up-shopify-taxes",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-shopify-taxes", title: "Understanding Shopify Taxes", level: 2 },
  { id: "setting-up-uk-vat", title: "Setting Up UK VAT", level: 2 },
  { id: "tax-inclusive-pricing", title: "Tax-Inclusive Pricing", level: 2 },
  { id: "international-tax", title: "International Tax Collection", level: 2 },
  { id: "product-tax-overrides", title: "Product Tax Overrides", level: 2 },
  { id: "tax-exemptions", title: "Tax Exemptions", level: 2 },
  { id: "tax-reports", title: "Tax Reports and Filing", level: 2 },
  { id: "common-issues", title: "Common Issues", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Taxes",
  description:
    "Complete guide to configuring taxes in Shopify. Learn about UK VAT setup, international tax collection, and exemptions.",
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
    "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-taxes`,
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
      name: "How to Set Up Shopify Taxes",
      item: `${siteConfig.url}/guides/how-to-set-up-shopify-taxes`,
    },
  ],
};

export default function ShopifyTaxesGuidePage() {
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
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify Taxes
            </h1>

            <p className="text-xl text-foreground mb-8">
              Getting tax configuration right is essential for compliance and avoiding surprises
              at tax time. This guide covers UK VAT, international tax, and common scenarios.
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
              {/* Understanding Shopify Taxes */}
              <section id="understanding-shopify-taxes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding Shopify Taxes
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify can automatically calculate and collect taxes based on your store
                  location, customer location, and the products being sold. For most UK
                  businesses, this means collecting 20% VAT on domestic sales.
                </p>
                <p className="text-lg text-foreground mb-6">
                  However, tax configuration varies significantly based on your business
                  structure, VAT registration status, and where you sell. Understanding
                  these factors is essential before diving into settings.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-2">Important Disclaimer</h4>
                  <p className="text-red-700">
                    This guide provides general information about Shopify tax configuration.
                    It is not tax advice. Always consult a qualified accountant for guidance
                    on your specific tax obligations.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Concepts</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>VAT Registration Threshold</strong> - In the UK, you must register for VAT when turnover exceeds £85,000 in a 12-month period</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Tax-Inclusive Pricing</strong> - UK law requires prices shown to consumers to include VAT</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Place of Supply</strong> - Where tax is due depends on where the customer is located</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reverse Charge</strong> - In some B2B transactions, the buyer accounts for VAT instead of the seller</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Are You VAT Registered?
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Your VAT registration status determines how you configure Shopify:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Not VAT registered:</strong> You do not charge VAT. Leave tax collection disabled or set rates to 0%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>VAT registered:</strong> You must charge VAT on applicable sales and configure Shopify accordingly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Voluntarily registered:</strong> Same as above, even if below the threshold</span>
                  </li>
                </ul>
              </section>

              {/* Setting Up UK VAT */}
              <section id="setting-up-uk-vat" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Setting Up UK VAT
                </h2>
                <p className="text-lg text-foreground mb-4">
                  For VAT-registered UK businesses selling to UK customers, the standard
                  setup involves configuring 20% VAT with tax-inclusive pricing.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Step-by-Step Setup
                </h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Tax Settings</strong>
                      <p className="text-foreground mt-2">
                        Go to <strong>Settings → Taxes and duties</strong> in your Shopify admin.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-foreground-dark">Click on United Kingdom</strong>
                      <p className="text-foreground mt-2">
                        Your home country should appear first. Click to configure UK tax settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-foreground-dark">Enter Your VAT Number</strong>
                      <p className="text-foreground mt-2">
                        Add your VAT registration number (format: GB123456789). This appears on
                        invoices and confirms you are VAT registered.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Collection Settings</strong>
                      <p className="text-foreground mt-2">
                        Ensure "Charge tax on this region" is enabled. The default VAT rate of
                        20% should be pre-configured.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">5</span>
                    <div>
                      <strong className="text-foreground-dark">Check Shipping Tax</strong>
                      <p className="text-foreground mt-2">
                        In the UK, shipping charges are subject to VAT. Ensure "Charge VAT on
                        shipping rates" is enabled.
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Reduced Rate Products
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Some products in the UK qualify for reduced VAT rates:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-foreground-dark">Category</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-foreground-dark">VAT Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Children's clothing and footwear</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">0%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Books and publications</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Mobility aids for elderly</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">0%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Energy-saving materials</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Child car seats</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">5%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Domestic fuel and power</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg text-foreground">
                  If you sell products at reduced rates, you will need to set up product tax
                  overrides (covered below).
                </p>
              </section>

              {/* Tax-Inclusive Pricing */}
              <section id="tax-inclusive-pricing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Tax-Inclusive Pricing
                </h2>
                <p className="text-lg text-foreground mb-4">
                  In the UK, prices shown to consumers must include VAT. This means if you
                  sell a product for £24, the customer sees £24 at checkout, and £4 of that
                  is VAT (at 20% rate).
                </p>
                <p className="text-lg text-foreground mb-6">
                  Shopify supports this through the "Include tax in prices" setting, but
                  how it works depends on your setup.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Enabling Tax-Inclusive Pricing
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Settings → Taxes and duties</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll to <strong>Tax calculations</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enable <strong>Include tax in prices</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Save changes</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">How It Works</h4>
                  <p className="text-foreground mb-3">
                    When tax-inclusive pricing is enabled:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>You enter prices INCLUDING VAT when creating products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>UK customers see the price you entered</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>International customers may see adjusted prices if tax rates differ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Tax-exempt customers see the price minus VAT</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    When setting prices, work backwards from round numbers. If you want to
                    charge £24 including VAT, your net price is £20. If you want a nice round
                    £25 including VAT, your net price is £20.83.
                  </p>
                </div>
              </section>

              {/* International Tax */}
              <section id="international-tax" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  International Tax Collection
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Selling internationally adds complexity to tax collection. Since Brexit,
                  UK businesses selling to EU consumers face different rules than before.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Selling to EU Consumers
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For goods shipped from the UK to EU consumers:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Under €150:</strong> You can register for IOSS and collect VAT at the EU country's rate at checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Over €150:</strong> Customer pays import VAT and duties on delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Without IOSS:</strong> Customer pays import VAT on all orders</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up IOSS in Shopify
                </h3>
                <p className="text-lg text-foreground mb-4">
                  If you have an IOSS number (directly or through a fiscal representative):
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Settings → Taxes and duties</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click <strong>European Union</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enter your IOSS number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Enable <strong>Collect VAT</strong> for EU countries</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Selling to the USA
                </h3>
                <p className="text-lg text-foreground mb-4">
                  The USA does not have a national sales tax. Instead, sales tax is
                  managed at the state level, and rules vary significantly.
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>No physical presence:</strong> You may have no US sales tax obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Economic nexus:</strong> High sales volume to a state may trigger obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Marketplace facilitator:</strong> If selling through Amazon, they handle sales tax</span>
                  </li>
                </ul>
                <p className="text-lg text-foreground">
                  Most UK businesses with no US presence do not collect US sales tax.
                  Consult a US tax advisor if you have significant US sales.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Selling to Other Countries
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For exports outside the EU:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Sales are typically zero-rated for UK VAT (you do not charge UK VAT)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Customers may pay import duties and local taxes on arrival</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>You need proof of export for your VAT records</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Configuring Zero-Rate Exports</h4>
                  <p className="text-foreground">
                    In <strong>Settings → Taxes and duties</strong>, you can set tax rates for
                    different countries. For exports, set the rate to 0% or disable tax
                    collection for those regions.
                  </p>
                </div>
              </section>

              {/* Product Tax Overrides */}
              <section id="product-tax-overrides" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Product Tax Overrides
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Some products have different tax rates than the standard 20% VAT. Shopify
                  allows you to create tax overrides for specific products or collections.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating a Tax Override
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Settings → Taxes and duties</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click on <strong>United Kingdom</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click <strong>Add override</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Choose to override by <strong>Product</strong> or <strong>Collection</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Select the products or collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Enter the override rate (e.g., 0% for children's clothing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">7.</span>
                    <span>Save the override</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a collection called "Zero-Rate VAT Products" and add all qualifying
                    products to it. Then create a single override for this collection at 0%.
                    This is easier to manage than individual product overrides.
                  </p>
                </div>
              </section>

              {/* Tax Exemptions */}
              <section id="tax-exemptions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Tax Exemptions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Certain customers may be exempt from paying VAT, such as VAT-registered
                  businesses or charities. Shopify provides ways to handle these scenarios.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  B2B and VAT-Exempt Customers
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For VAT-registered business customers making purchases:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>UK B2B:</strong> You still charge VAT. The customer reclaims it through their VAT return</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>EU B2B:</strong> With a valid VAT number, sales may be zero-rated (reverse charge applies)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Customer Tax Exemptions
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Customers</strong> in your Shopify admin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click on the customer to edit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Scroll to <strong>Tax exemptions</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Click <strong>Manage</strong> and select applicable exemptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Save the customer</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  VAT Validation for EU Customers
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For EU B2B sales where the reverse charge applies:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Enable <strong>Collect VAT numbers at checkout</strong> in your tax settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Shopify validates the VAT number against the VIES database</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>If valid, no VAT is charged on the order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>The VAT number is stored on the order for your records</span>
                  </li>
                </ul>
              </section>

              {/* Tax Reports */}
              <section id="tax-reports" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Tax Reports and Filing
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify provides reports to help with your VAT returns, though you may
                  need additional tools for complex reporting requirements.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Accessing Tax Reports
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Analytics → Reports</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Search for "tax" in the reports filter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Select <strong>Taxes</strong> or <strong>Sales by tax rate</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Set your date range to match your VAT period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Export to CSV for your accountant</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Report Contents</h4>
                  <p className="text-foreground mb-3">Shopify's tax reports show:</p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Total taxable sales by region and rate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Total tax collected</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Breakdown by shipping vs product tax</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Exempt sales</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Making Tax Digital (MTD)
                </h3>
                <p className="text-lg text-foreground mb-4">
                  UK VAT-registered businesses must file VAT returns through MTD-compatible
                  software. Shopify's reports can be exported to accounting software like
                  Xero or QuickBooks, which handle the MTD submission.
                </p>
                <p className="text-lg text-foreground">
                  Consider apps like A2X or Sufio that bridge Shopify data to your accounting
                  software with proper tax categorisation.
                </p>
              </section>

              {/* Common Issues */}
              <section id="common-issues" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Issues
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Prices change at checkout for international customers
                    </h3>
                    <p className="text-foreground mb-3">
                      With tax-inclusive pricing, prices may adjust based on the customer's
                      location if tax rates differ.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Consider setting explicit prices per market using
                      Shopify Markets, or communicate that prices are UK-inclusive and may vary.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Tax not showing on invoices
                    </h3>
                    <p className="text-foreground mb-3">
                      Ensure your VAT number is entered in tax settings and that your invoice
                      template includes the tax breakdown.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Check Settings → Taxes → UK → VAT number. For
                      invoice formatting, use an invoicing app like Sufio.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Wrong tax rate being applied
                    </h3>
                    <p className="text-foreground mb-3">
                      Tax overrides may not be working, or products are in wrong collections.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Check that products are correctly assigned to
                      override collections. Test with a sample order to verify rates.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      EU VAT validation failing
                    </h3>
                    <p className="text-foreground mb-3">
                      The VIES database may be temporarily unavailable, or the VAT number
                      format is incorrect.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Verify the VAT number directly on the EC's VIES
                      website. If valid but Shopify rejects it, contact Shopify support.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-shopify-payments"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify Payments →</h4>
                      <p className="text-sm text-foreground">Configure payment processing</p>
                    </Link>
                    <Link
                      href="/guides/how-to-configure-shopify-shipping-rates"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Configure Shipping Rates →</h4>
                      <p className="text-sm text-foreground">Set up shipping including tax</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Tax Setup?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you configure taxes correctly for UK and international sales,
            ensuring compliance while optimising your customer experience.
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
