import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Metafields",
  description:
    "Learn how to create and use Shopify metafields to store custom data on products, collections, and pages. Covers types, display in themes, and use cases.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-metafields" },
  openGraph: {
    title: "How to Set Up Shopify Metafields",
    description: "A complete guide to Shopify metafields for custom product data.",
    url: "/guides/how-to-set-up-shopify-metafields",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-metafields", title: "What Are Metafields?", level: 2 },
  { id: "creating-metafields", title: "Creating Metafields", level: 2 },
  { id: "metafield-types", title: "Metafield Types", level: 2 },
  { id: "displaying-metafields-in-theme", title: "Displaying in Your Theme", level: 2 },
  { id: "use-cases", title: "Use Cases", level: 2 },
  { id: "metafield-sets", title: "Metafield Sets", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Metafields",
  description: "Learn how to create and use Shopify metafields.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-metafields` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Metafields", item: `${siteConfig.url}/guides/how-to-set-up-shopify-metafields` },
  ],
};

export default function MetafieldsGuidePage() {
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
              How to Set Up Shopify Metafields
            </h1>
            <p className="text-xl text-foreground mb-8">
              Metafields let you store custom data against any Shopify resource: products, variants, collections, customers, and orders. They are one of the most powerful tools for extending your store without writing an app.
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

              <section id="what-are-metafields" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Are Metafields?</h2>
                <p className="text-lg text-foreground mb-4">
                  Metafields are custom data fields that extend the standard Shopify data model. By default, a product has a title, description, price, and images. But what if you also need to store materials, care instructions, certifications, or a table of nutritional values? That is where metafields come in.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Metafields consist of three parts: a namespace (a grouping identifier like &quot;custom&quot;), a key (the field name like &quot;material&quot;), and a value (the actual data). They were significantly improved in 2021 when Shopify introduced metafield definitions, allowing you to define typed fields with validation rules.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Metafields can be added to products, product variants, collections, customers, orders, blog posts, pages, and the shop itself. They are accessible via Liquid in your theme, via the Storefront API, and via the Admin API.
                </p>
              </section>

              <section id="creating-metafields" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating Metafields</h2>
                <p className="text-lg text-foreground mb-4">
                  You create metafield definitions in your Shopify admin. This is different from adding values: you first define the field structure, then add values to individual products.
                </p>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-foreground-dark">Go to Settings, then Custom Data</strong>
                      <p className="text-foreground mt-2">The Custom Data section in Settings is where all metafield definitions live. Select the resource type you want to add fields to.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-foreground-dark">Click Add definition</strong>
                      <p className="text-foreground mt-2">Give the field a name, a namespace (use &quot;custom&quot; for simplicity), and a key. The key is used in your Liquid code.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-foreground-dark">Select the content type</strong>
                      <p className="text-foreground mt-2">Choose a type that matches your data: text, integer, decimal, true/false, date, colour, URL, file, product reference, or JSON.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <strong className="text-foreground-dark">Add validation rules if needed</strong>
                      <p className="text-foreground mt-2">Text fields can have minimum/maximum length. Number fields can have min/max values. This prevents bad data entry.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">5</span>
                    <div>
                      <strong className="text-foreground-dark">Save and populate</strong>
                      <p className="text-foreground mt-2">Once saved, the field appears in the product editor. Open any product and scroll down to find the metafields section at the bottom.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="metafield-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Metafield Types</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify supports a wide range of metafield content types. Choosing the right type ensures data is stored correctly and displayed properly in your theme.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Single-line text:</strong> Short strings, ideal for materials, country of origin, or short labels.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Multi-line text:</strong> Longer blocks of text, useful for care instructions or detailed specifications.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Integer and Decimal:</strong> Numeric values, good for weights, dimensions, or quantities.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>True/False:</strong> Boolean flags, useful for things like &quot;is vegan&quot; or &quot;is limited edition&quot;.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>File:</strong> Upload images or documents directly to the metafield, great for product manuals or certifications.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product reference:</strong> Link to another product, used for related products or bundled items.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="displaying-metafields-in-theme" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Displaying in Your Theme</h2>
                <p className="text-lg text-foreground mb-4">
                  There are two ways to display metafields in your theme: using the theme editor, or by editing Liquid directly.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Modern Online Store 2.0 themes support metafields natively in the editor. You can add a metafield block to a product template and connect it to your definition without writing code. In the theme editor, add a block, select &quot;Metafield&quot;, and choose the definition from the dropdown.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For older themes or more control, use Liquid. Access a product metafield with: <code className="bg-gray-100 px-2 py-1 rounded text-sm">&#123;&#123; product.metafields.custom.material &#125;&#125;</code>. Replace &quot;custom&quot; with your namespace and &quot;material&quot; with your key.
                </p>
              </section>

              <section id="use-cases" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Use Cases</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Fashion: Fit and Care Information</h4>
                    <p className="text-foreground">Store garment measurements, fabric composition, and care instructions per product. Display them in structured tabs on the product page without cluttering the main description.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Food and Drink: Nutritional Values</h4>
                    <p className="text-foreground">Store calories, macronutrients, ingredients lists, and allergen information as separate metafields. This keeps data structured and makes it easy to update without editing HTML.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Electronics: Technical Specifications</h4>
                    <p className="text-foreground">Store dimensions, weight, power requirements, compatibility, and certifications. Render them as a comparison table across multiple products.</p>
                  </div>
                </div>
              </section>

              <section id="metafield-sets" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Metafield Sets</h2>
                <p className="text-lg text-foreground mb-4">
                  Metafield sets (also called definitions) allow you to group related fields together. For example, a &quot;nutrition&quot; set might contain fields for calories, protein, carbs, and fat. This keeps your definitions organised, especially if you have dozens of custom fields.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Shopify also offers standard metafield definitions for common use cases. These follow a standardised schema that some apps and integrations recognise automatically. For example, the standard &quot;product.care_instructions&quot; definition is understood by Google Shopping feeds and some review platforms.
                </p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-add-products-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Products</h4>
                      <p className="text-sm text-foreground">Product creation fundamentals</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-product-personalisation-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Personalisation</h4>
                      <p className="text-sm text-foreground">Add custom fields to products</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Custom Product Data?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our developers can implement metafields, build custom theme sections, and create structured product data displays that improve conversions.
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
