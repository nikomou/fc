import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Duty and Tax Calculations on Shopify",
  description: "Learn how to set up duty and tax calculations on Shopify. Covers post-Brexit rules, Shopify Markets duties, DDP settings, threshold limits, and testing.",
  alternates: { canonical: "/guides/how-to-set-up-duty-and-tax-calculations-on-shopify" },
  openGraph: {
    title: "How to Set Up Duty and Tax Calculations on Shopify",
    description: "Learn how to set up duty and tax calculations on Shopify. Covers post-Brexit rules, Shopify Markets duties, DDP settings, threshold limits, and testing.",
    url: "/guides/how-to-set-up-duty-and-tax-calculations-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "post-brexit-duty-rules", title: "Post-Brexit Duty Rules", level: 2 },
  { id: "shopify-markets-duties", title: "Shopify Markets Duties", level: 2 },
  { id: "delivered-duty-paid", title: "Delivered Duty Paid", level: 2 },
  { id: "threshold-limits", title: "Threshold Limits", level: 2 },
  { id: "vat-moss-for-digital", title: "VAT for Digital Products", level: 2 },
  { id: "testing-checkout", title: "Testing Checkout", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Duty and Tax Calculations on Shopify",
  description: "Learn how to set up duty and tax calculations on Shopify for international orders. Covers post-Brexit rules, Shopify Markets duties, DDP, threshold limits, and testing.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-duty-and-tax-calculations-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Duty and Tax Calculations on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-duty-and-tax-calculations-on-shopify` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">International &amp; Multi-currency</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Duty and Tax Calculations on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Since Brexit, selling internationally from the UK involves navigating import duties, VAT rules, and customs thresholds that were not relevant before 2021. This guide explains how to configure Shopify correctly for compliant cross-border selling.</p>
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
              <section id="post-brexit-duty-rules" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Post-Brexit Duty Rules</h2>
                <p className="text-lg text-foreground mb-4">When selling from the UK to EU customers, UK-origin goods may attract import duties depending on the product type and rules of origin. The UK-EU Trade and Cooperation Agreement provides zero tariffs for goods that meet the Rules of Origin requirements, meaning they are manufactured in the UK.</p>
                <p className="text-lg text-foreground mb-4">Goods that do not meet Rules of Origin (e.g., goods imported from Asia and resold) attract import duties when entering the EU. UK merchants are responsible for communicating this clearly to customers.</p>
              </section>
              <section id="shopify-markets-duties" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify Markets Duties</h2>
                <p className="text-lg text-foreground mb-4">Shopify Markets (available on all plans) includes duty and import tax calculation for international orders. Enable it under Settings, then Markets. For each market, you can configure whether duties are included in the displayed price (DDP) or added at checkout.</p>
                <p className="text-lg text-foreground mb-4">Shopify uses Avalara for duty and tax calculations when you enable this feature. It calculates based on HS codes, product values, and destination country rules.</p>
              </section>
              <section id="delivered-duty-paid" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Delivered Duty Paid</h2>
                <p className="text-lg text-foreground mb-4">Delivered Duty Paid (DDP) means the seller handles all import duties, so the customer pays a fully landed price with no surprise charges on delivery. This dramatically improves customer experience and reduces package refusals.</p>
                <p className="text-lg text-foreground mb-4">To offer DDP, enable &quot;Collect duties and import taxes at checkout&quot; in your Shopify Markets settings for each international market. Shopify collects the estimated duties and remits them appropriately.</p>
              </section>
              <section id="threshold-limits" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Threshold Limits</h2>
                <p className="text-lg text-foreground mb-4">The EU removed its &euro;22 VAT threshold in 2021. All goods, regardless of value, are now subject to VAT when imported into EU countries. The UK similarly applies VAT to all imported goods from January 2021.</p>
                <p className="text-lg text-foreground mb-4">For goods valued under &euro;150 entering the EU, VAT is collected by the seller at point of sale via the EU&apos;s One Stop Shop (OSS) or Import One Stop Shop (IOSS) scheme. For goods over &euro;150, duties and VAT are assessed by customs.</p>
              </section>
              <section id="vat-moss-for-digital" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">VAT for Digital Products</h2>
                <p className="text-lg text-foreground mb-4">Digital products sold to EU customers are subject to VAT in the buyer&apos;s country, regardless of where the seller is based. This has applied since 2015 for EU-based sellers and since Brexit applies directly to UK sellers selling into the EU.</p>
                <p className="text-lg text-foreground mb-4">Register for VAT OSS in an EU member state if you sell digital products to EU consumers above the &euro;10,000 annual threshold. This lets you file a single quarterly return covering all EU VAT obligations.</p>
              </section>
              <section id="testing-checkout" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Checkout</h2>
                <p className="text-lg text-foreground mb-4">Test international checkout by using VPN to simulate orders from different countries. Check that duty and tax estimates are displayed clearly, the currency is correct, and the total reflects DDP pricing if you have enabled it.</p>
                <p className="text-lg text-foreground mb-4">Run test transactions with Shopify&apos;s test payment gateway for each key international market before launching. Check that orders are being captured correctly and that duty collection is appearing on order receipts.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-markets" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify Markets</h4><p className="text-sm text-foreground">Configure international selling</p></Link>
                    <Link href="/guides/how-to-sell-internationally-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Sell Internationally</h4><p className="text-sm text-foreground">Complete international selling guide</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With International Tax Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team configures Shopify Markets, duty calculations, and international tax settings to ensure compliant cross-border selling.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
