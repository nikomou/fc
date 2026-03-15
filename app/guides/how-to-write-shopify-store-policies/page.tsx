import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Write Shopify Store Policies",
  description: "Learn how to write Shopify store policies for UK merchants. Covers refund policy, privacy policy, terms of service, shipping policy, UK consumer rights, and adding policies to your store.",
  alternates: { canonical: "/guides/how-to-write-shopify-store-policies" },
  openGraph: {
    title: "How to Write Shopify Store Policies",
    description: "Learn how to write Shopify store policies for UK merchants. Covers refund policy, privacy policy, terms of service, shipping policy, UK consumer rights, and adding policies to your store.",
    url: "/guides/how-to-write-shopify-store-policies",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "required-policies", title: "Required Policies", level: 2 },
  { id: "refund-policy", title: "Refund Policy", level: 2 },
  { id: "privacy-policy", title: "Privacy Policy", level: 2 },
  { id: "terms-of-service", title: "Terms of Service", level: 2 },
  { id: "shipping-policy", title: "Shipping Policy", level: 2 },
  { id: "uk-consumer-rights", title: "UK Consumer Rights", level: 2 },
  { id: "adding-policies-to-your-store", title: "Adding to Your Store", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write Shopify Store Policies",
  description: "Learn how to write Shopify store policies for UK merchants. Covers refund policy, privacy policy, terms of service, shipping policy, UK consumer rights, and adding policies to your store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-write-shopify-store-policies` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Write Shopify Store Policies", item: `${siteConfig.url}/guides/how-to-write-shopify-store-policies` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Customer Experience</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Write Shopify Store Policies</h1>
            <p className="text-xl text-foreground mb-8">Well-written store policies protect your business legally, build customer trust, and reduce support queries. UK merchants have specific legal requirements around consumer rights and data protection that your policies must address.</p>
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
              <section id="required-policies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Required Policies</h2>
                <p className="text-lg text-foreground mb-4">UK ecommerce law requires you to provide specific information to consumers before and after a purchase. This includes: your identity and contact details, a description of goods and services, total price including VAT, your cancellation rights (covered by the Consumer Contracts Regulations 2013), and your returns policy.</p>
                <p className="text-lg text-foreground mb-4">Shopify provides policy templates as a starting point under Settings, then Policies. These are generic and need customisation to reflect your actual practices and UK legal requirements.</p>
              </section>
              <section id="refund-policy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Refund Policy</h2>
                <p className="text-lg text-foreground mb-4">Under the Consumer Contracts Regulations 2013, UK consumers have the right to cancel any distance sale (including online sales) within 14 days of receiving goods, without giving a reason. You must refund within 14 days of receiving the returned items or within 14 days of receiving proof of dispatch.</p>
                <p className="text-lg text-foreground mb-4">Your refund policy must state this legal right clearly. You can go beyond the legal minimum (e.g., offering a 30-day returns window) but cannot offer less. For personalised or perishable goods, the right to return may not apply: state this clearly.</p>
              </section>
              <section id="privacy-policy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Privacy Policy</h2>
                <p className="text-lg text-foreground mb-4">Your privacy policy is required under UK GDPR. It must explain: what personal data you collect, why you collect it, who you share it with, how long you retain it, and what rights individuals have over their data.</p>
                <p className="text-lg text-foreground mb-4">Shopify generates a basic privacy policy template, but it needs customisation to cover your specific third-party apps (analytics, email marketing, payment processors) and any data transfers outside the UK.</p>
              </section>
              <section id="terms-of-service" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Terms of Service</h2>
                <p className="text-lg text-foreground mb-4">Your terms of service sets the legal framework for the relationship between you and customers. Cover: who can use your store (age requirements if applicable), intellectual property rights, limitation of liability, governing law (UK law for UK-based businesses), and dispute resolution.</p>
              </section>
              <section id="shipping-policy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shipping Policy</h2>
                <p className="text-lg text-foreground mb-4">Your shipping policy should state: available delivery options and their costs, estimated delivery timeframes for each service, what happens if a delivery is missed, how to track an order, and how international shipping works if applicable.</p>
                <p className="text-lg text-foreground mb-4">Be specific about timeframes: &quot;2-3 working days&quot; is clearer than &quot;fast delivery&quot;. State any cut-off times for same-day dispatch.</p>
              </section>
              <section id="uk-consumer-rights" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">UK Consumer Rights</h2>
                <p className="text-lg text-foreground mb-4">The Consumer Rights Act 2015 entitles UK consumers to goods that are of satisfactory quality, fit for purpose, and as described. If goods do not meet these standards, consumers are entitled to repair, replacement, or refund. Your policies must not attempt to waive these rights.</p>
              </section>
              <section id="adding-policies-to-your-store" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Adding to Your Store</h2>
                <p className="text-lg text-foreground mb-4">Add your policies in Shopify admin under Settings, then Policies. Once saved, link them from your footer navigation. Also link your returns policy from the checkout page so customers can review it before placing an order. Shopify&apos;s checkout displays a link to your refund and privacy policies automatically.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-make-shopify-gdpr-compliant" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">GDPR Compliance</h4><p className="text-sm text-foreground">UK GDPR requirements</p></Link>
                    <Link href="/guides/how-to-handle-shopify-returns" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Handle Returns</h4><p className="text-sm text-foreground">Manage the returns process</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Store Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">We review your store policies, advise on UK consumer law requirements, and ensure your Shopify store meets legal obligations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
