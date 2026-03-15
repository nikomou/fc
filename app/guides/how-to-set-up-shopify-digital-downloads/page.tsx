import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Digital Downloads on Shopify",
  description:
    "Learn how to sell digital downloads on Shopify. Covers file delivery, protecting digital files, delivery emails, and fixing common issues.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-digital-downloads",
  },
  openGraph: {
    title: "How to Set Up Digital Downloads on Shopify",
    description:
      "Step-by-step guide to selling digital products and downloads on Shopify.",
    url: "/guides/how-to-set-up-shopify-digital-downloads",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "types-of-digital-products", title: "Types of Digital Products", level: 2 },
  { id: "setting-up-downloads", title: "Setting Up Downloads", level: 2 },
  { id: "file-delivery", title: "File Delivery", level: 2 },
  { id: "protecting-your-files", title: "Protecting Your Files", level: 2 },
  { id: "delivery-emails", title: "Delivery Emails", level: 2 },
  { id: "common-issues", title: "Common Issues", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Digital Downloads on Shopify",
  description: "Learn how to sell digital downloads on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-digital-downloads` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Digital Downloads on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-digital-downloads` },
  ],
};

export default function DigitalDownloadsGuidePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Digital Downloads on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Selling digital products has zero fulfilment cost and can scale infinitely. This guide explains how to set up digital downloads correctly on Shopify, from file delivery to protecting your content.
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="types-of-digital-products" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Types of Digital Products</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify supports selling any file type as a digital product. Common categories sold by UK merchants include:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Documents and Templates</h4>
                    <p className="text-foreground">PDF guides, Word templates, Excel spreadsheets, legal document packs, brand kits, and business plan templates. Popular with coaches, consultants, and designers.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Creative Assets</h4>
                    <p className="text-foreground">Stock photography, illustration packs, Lightroom presets, fonts, icon sets, and Canva templates. High demand with relatively low production cost per sale.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Audio and Video</h4>
                    <p className="text-foreground">Music tracks, sound effects, video footage, online course content, and meditation audio. Larger file sizes require careful attention to delivery.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Software and Code</h4>
                    <p className="text-foreground">WordPress plugins, Shopify apps, scripts, and code snippets. Often delivered as a zip file with documentation.</p>
                  </div>
                </div>
              </section>

              <section id="setting-up-downloads" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Up Downloads</h2>
                <p className="text-lg text-foreground mb-4">
                  The simplest way to handle digital downloads in Shopify is through the free Digital Downloads app by Shopify, available in the App Store. For more control, Sky Pilot and SendOwl are popular paid alternatives.
                </p>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-foreground-dark">Install the Digital Downloads app</strong>
                      <p className="text-foreground mt-2">Find it in the Shopify App Store. It is free and made by Shopify, so it integrates cleanly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-foreground-dark">Create a product and mark it as digital</strong>
                      <p className="text-foreground mt-2">In the product editor, uncheck &quot;This is a physical product&quot; under Shipping. This removes shipping from the checkout for that product.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-foreground-dark">Attach files via the Digital Downloads app</strong>
                      <p className="text-foreground mt-2">Open the app, find your product, and upload the file to deliver. Files up to 5GB are supported. The app links the file to the product variant.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <strong className="text-foreground-dark">Configure download limits and expiry</strong>
                      <p className="text-foreground mt-2">Set how many times a customer can download a file and whether the link expires. Sensible defaults are 5 downloads with a 30-day expiry.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="file-delivery" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">File Delivery</h2>
                <p className="text-lg text-foreground mb-4">
                  When an order is placed, the Digital Downloads app automatically emails the customer a download link. The link appears in the order confirmation email and in their order history if they have a customer account.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For large files, consider using a CDN-hosted link rather than uploading directly. Dropbox, Amazon S3, and Google Drive can all serve as file hosts, with apps like Sky Pilot managing access control. This approach is faster for customers and reduces strain on Shopify&apos;s servers.
                </p>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">VAT on Digital Products</h4>
                  <p className="text-foreground">
                    Digital downloads sold to EU customers are subject to VAT under the EU VAT Moss rules, with VAT charged at the buyer&apos;s country rate. For UK customers, standard 20% VAT applies to most digital products. Configure your tax settings in Shopify carefully and consult an accountant if you are unsure.
                  </p>
                </div>
              </section>

              <section id="protecting-your-files" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Protecting Your Files</h2>
                <p className="text-lg text-foreground mb-4">
                  Complete protection against piracy is not possible, but you can make it significantly harder to share your files without permission:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Expiring download links:</strong> Set links to expire after 24-48 hours to prevent sharing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>PDF watermarking:</strong> Automatically add the buyer&apos;s name or email to PDF files. Apps like BookVault and Fileflare offer this.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Licensing terms:</strong> Include a clear licence in your product that specifies personal use only and prohibits redistribution.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Unique file names:</strong> Give each order a unique file so you can trace the source of any leaked copies.</span>
                  </li>
                </ul>
              </section>

              <section id="delivery-emails" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Delivery Emails</h2>
                <p className="text-lg text-foreground mb-4">
                  The download email is the most important customer communication for digital products. Customise it under Settings, then Notifications, then the Digital Downloads template.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Include: a clear download button, instructions for what to do with the file, a note about download limits and link expiry, contact details for support, and any licence terms that apply.
                </p>
              </section>

              <section id="common-issues" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Issues</h2>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Download link not received</h3>
                    <p className="text-foreground mb-3">Email delivery failures are common if you have not set up a custom sending domain.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Set up a custom email sending domain in Shopify Settings to improve deliverability. Allow customers to access downloads from their order history page as a backup.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Checkout still showing shipping options</h3>
                    <p className="text-foreground mb-3">If the product was not marked as non-physical, shipping options will appear.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Edit the product, scroll to Shipping, and uncheck &quot;This is a physical product&quot;. This removes shipping requirements for that product.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Download limits exceeded after legitimate purchases</h3>
                    <p className="text-foreground mb-3">Customers who switch devices or lose a download may need to re-download beyond the set limit.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Offer a generous limit (10+ downloads) or set a longer expiry period. You can manually reset download limits from the order in the Digital Downloads app.</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-gift-cards" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Gift Cards</h4>
                      <p className="text-sm text-foreground">Sell store credit as a product</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-taxes" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Taxes</h4>
                      <p className="text-sm text-foreground">Configure VAT for digital products</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Digital Products?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you build a polished digital download experience, from file delivery to customer portal access.
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
