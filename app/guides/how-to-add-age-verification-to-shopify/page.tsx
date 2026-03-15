import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Age Verification to Shopify",
  description: "Learn how to add age verification to your Shopify store. Covers UK legal requirements, app options, implementation methods, and compliance documentation.",
  alternates: { canonical: "/guides/how-to-add-age-verification-to-shopify" },
  openGraph: {
    title: "How to Add Age Verification to Shopify",
    description: "Learn how to add age verification to your Shopify store. Covers UK legal requirements, app options, implementation methods, and compliance documentation.",
    url: "/guides/how-to-add-age-verification-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "when-age-verification-is-required", title: "When It Is Required", level: 2 },
  { id: "uk-legal-requirements", title: "UK Legal Requirements", level: 2 },
  { id: "app-options", title: "App Options", level: 2 },
  { id: "implementation-methods", title: "Implementation Methods", level: 2 },
  { id: "limitations", title: "Limitations", level: 2 },
  { id: "compliance-documentation", title: "Compliance Documentation", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Age Verification to Shopify",
  description: "Learn how to add age verification to your Shopify store. Covers UK legal requirements, app options, implementation methods, limitations, and compliance documentation.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-age-verification-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Age Verification to Shopify", item: `${siteConfig.url}/guides/how-to-add-age-verification-to-shopify` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Add Age Verification to Shopify</h1>
            <p className="text-xl text-foreground mb-8">Selling age-restricted products online in the UK carries legal obligations. Whether you sell alcohol, vaping products, knives, or adult content, this guide explains what age verification means in practice for Shopify merchants.</p>
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
              <section id="when-age-verification-is-required" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">When It Is Required</h2>
                <p className="text-lg text-foreground mb-4">Age verification is required by law in the UK for certain product categories. The main categories for ecommerce are: alcohol (over 18 under the Licensing Act 2003), tobacco and nicotine products (over 18), vaping products (over 18 under the Tobacco and Related Products Regulations 2016), knives (over 18 under the Offensive Weapons Act 2019), and some adult content.</p>
                <p className="text-lg text-foreground mb-4">The Online Safety Act 2023 introduced stronger age verification requirements for services hosting pornographic content, enforced by Ofcom.</p>
              </section>
              <section id="uk-legal-requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">UK Legal Requirements</h2>
                <p className="text-lg text-foreground mb-4">For alcohol, HMRC and the Portman Group&apos;s Code of Practice require that you take reasonable steps to verify age before completing a sale. A simple date-of-birth form does not constitute effective age verification.</p>
                <p className="text-lg text-foreground mb-4">The most compliant approach for alcohol and nicotine products is delivery-point age verification: couriers check ID on delivery. This is the standard used by major UK alcohol retailers. It must be clearly communicated at checkout.</p>
              </section>
              <section id="app-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Options</h2>
                <p className="text-lg text-foreground mb-4">Shopify age verification apps include AgeVerify, Hulk Age Verification, and AAAge Verify. These typically implement a popup or splash page requiring users to confirm they are 18 or over.</p>
                <p className="text-lg text-foreground mb-4">For more robust verification, third-party age verification services like AgeID and Yoti offer digital ID checking that cross-references government databases. These are significantly more expensive but provide much stronger compliance evidence.</p>
              </section>
              <section id="implementation-methods" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Implementation Methods</h2>
                <p className="text-lg text-foreground mb-4">The most common implementation is a pop-up on the homepage (or specific product/collection pages) requiring the visitor to confirm their age by clicking a button or entering a date of birth. This is a &quot;soft&quot; verification: it stops honest underage users but does not prevent someone from lying.</p>
                <p className="text-lg text-foreground mb-4">For products where a stronger standard is legally required, integrate with a digital age verification provider. These services require the customer to submit a photo ID which is checked against government records.</p>
              </section>
              <section id="limitations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Limitations</h2>
                <p className="text-lg text-foreground mb-4">Date-of-birth form verification is widely acknowledged as ineffective: anyone can enter a false date. It provides minimal legal protection. HMRC and trading standards expect more than a checkbox for regulated products.</p>
                <p className="text-lg text-foreground mb-4">Be honest about what level of verification your legal obligations require. For alcohol, delivery-point ID checks combined with a checkout declaration are the practical standard for most online retailers.</p>
              </section>
              <section id="compliance-documentation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Compliance Documentation</h2>
                <p className="text-lg text-foreground mb-4">Document your age verification procedures in writing. This includes which products require verification, what method is used, how failures are handled (e.g., what happens if a customer fails delivery-point age check), and how you train staff.</p>
                <p className="text-lg text-foreground mb-4">Retain records of verification checks for auditable products. In the event of a trading standards investigation, documented procedures and records are your primary defence.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-secure-your-shopify-store" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Secure Your Store</h4><p className="text-sm text-foreground">Broader security practices</p></Link>
                    <Link href="/guides/how-to-write-shopify-store-policies" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Write Store Policies</h4><p className="text-sm text-foreground">Document your policies clearly</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Age-Restricted Products?</h2>
          <p className="text-xl text-gray-300 mb-8">We advise on compliance requirements for age-restricted products and implement the appropriate verification solutions for your store.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
