import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Product Personalisation on Shopify",
  description:
    "Add personalisation options to your Shopify products. Covers line item properties, app options, managing personalised orders, and common mistakes.",
  alternates: { canonical: "/guides/how-to-set-up-product-personalisation-on-shopify" },
  openGraph: {
    title: "How to Set Up Product Personalisation on Shopify",
    description: "Learn how to let customers personalise products on your Shopify store.",
    url: "/guides/how-to-set-up-product-personalisation-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "personalisation-types", title: "Personalisation Types", level: 2 },
  { id: "using-line-item-properties", title: "Using Line Item Properties", level: 2 },
  { id: "app-options", title: "App Options", level: 2 },
  { id: "managing-personalised-orders", title: "Managing Personalised Orders", level: 2 },
  { id: "pricing-personalisation", title: "Pricing Personalisation", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Product Personalisation on Shopify",
  description: "Add personalisation options to your Shopify products.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-product-personalisation-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Product Personalisation on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-product-personalisation-on-shopify` },
  ],
};

export default function PersonalisationGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Products &amp; Collections</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Product Personalisation on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Personalised products command higher prices and generate stronger customer loyalty. This guide covers the key approaches for adding custom text, images, and options to your Shopify products.
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

              <section id="personalisation-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Personalisation Types</h2>
                <p className="text-lg text-foreground mb-4">
                  Product personalisation encompasses a wide range of customisation options. Understanding which types you need determines your implementation approach.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Custom Text</h4>
                    <p className="text-foreground">Names, dates, initials, or short messages engraved, embroidered, or printed on a product. The most common personalisation type, used by jewellers, homeware brands, and gifts.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Custom Images or Artwork</h4>
                    <p className="text-foreground">Customers upload a photo to be printed on a product. Common for photo books, phone cases, mugs, and canvas prints.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Configuration Options</h4>
                    <p className="text-foreground">Select specific attributes like wood type, thread colour, or engraving font. More complex than a text field but still manageable with the right approach.</p>
                  </div>
                </div>
              </section>

              <section id="using-line-item-properties" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Using Line Item Properties</h2>
                <p className="text-lg text-foreground mb-4">
                  Line item properties are custom key-value pairs attached to a specific item in the cart. They are Shopify&apos;s native way to capture per-item custom data without creating separate variants.
                </p>
                <p className="text-lg text-foreground mb-4">
                  To add a line item property, add an input field to your product page form with the name attribute formatted as: <code className="bg-gray-100 px-2 py-1 rounded text-sm">properties[Engraving Text]</code>. When the customer adds to cart, the entered value is attached to that line item and visible in the order.
                </p>
                <p className="text-lg text-foreground mb-4">
                  This approach requires theme editing. Add the input field in your product form template, ideally with a character limit and a note about what is acceptable. Validation is handled client-side.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Line Item Property Field Types</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Text input:</strong> Single line, good for names and short messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Textarea:</strong> Multi-line, for longer messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Select dropdown:</strong> For choosing from preset options like font styles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>File upload:</strong> For image uploads, requires an app as Shopify does not natively handle file uploads via line item properties</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="app-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Options</h2>
                <p className="text-lg text-foreground mb-4">
                  For complex personalisation without custom development, several apps handle the entire process including live preview, file uploads, and order management.
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Zakeke:</strong> Live product personalisation preview. Excellent for print-on-demand and custom text products. Higher price point but strong UX.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Infinite Options (ShopPad):</strong> Add unlimited custom fields to any product. Simple, reliable, and affordable at around £15/month.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Product Personalizer:</strong> Drag-and-drop design tool with live preview. Good for photo products.</span>
                  </li>
                </ul>
              </section>

              <section id="managing-personalised-orders" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Managing Personalised Orders</h2>
                <p className="text-lg text-foreground mb-4">
                  Personalised orders require manual attention during fulfilment. You cannot automate the production of a custom-engraved item in the same way as a standard product. Key operational considerations:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Set realistic lead times on product pages. &quot;Ships in 3-5 working days&quot; is better than &quot;ships today&quot; for personalised items.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Tag personalised orders automatically so they are easy to filter in your orders list.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Send a confirmation email that includes the personalisation details so customers can spot errors early.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Clarify your returns policy clearly: personalised items are typically non-returnable unless there is a manufacturing defect.</span>
                  </li>
                </ul>
              </section>

              <section id="pricing-personalisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Pricing Personalisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Adding a price uplift for personalisation requires creating a separate product variant or using an app that supports price modifiers per option. Native Shopify line item properties do not support automatic price additions.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Common approaches: create a &quot;Personalised&quot; variant priced £X more than the standard variant, or use an app like Infinite Options that supports price modifiers per field value. The latter is cleaner for complex configurations.
                </p>
              </section>

              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Mistakes</h2>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">No character limit on text fields</h3>
                    <p className="text-foreground mb-3">Without limits, customers may enter more text than can fit on the product.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Add a maxlength attribute to all text inputs and display a visible character counter.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Personalisation details not visible in fulfilment</h3>
                    <p className="text-foreground mb-3">If line item properties are not showing on packing slips, orders get fulfilled incorrectly.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Customise your packing slip template to display all line item properties clearly.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Unclear returns policy for personalised items</h3>
                    <p className="text-foreground mb-3">Customers may assume the standard returns policy applies and request returns on personalised items.</p>
                    <p className="text-foreground"><strong>Fix:</strong> Add a clear disclaimer on personalised product pages and in checkout notes.</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-metafields" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Metafields</h4>
                      <p className="text-sm text-foreground">Store custom product data</p>
                    </Link>
                    <Link href="/guides/how-to-create-shopify-gift-wrapping" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Gift Wrapping</h4>
                      <p className="text-sm text-foreground">Add gift wrap options to orders</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Add Personalisation to Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our developers can build custom personalisation experiences from simple text inputs to live preview configurators.
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
