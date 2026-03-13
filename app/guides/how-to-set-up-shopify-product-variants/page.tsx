import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Product Variants",
  description:
    "Complete guide to setting up product variants in Shopify. Learn about options, variant limits, pricing, inventory tracking, and best practices for managing product variations.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-product-variants",
  },
  openGraph: {
    title: "How to Set Up Shopify Product Variants",
    description: "Complete guide to setting up product variants in Shopify.",
    url: "/guides/how-to-set-up-shopify-product-variants",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-variants", title: "Understanding Variants", level: 2 },
  { id: "creating-options", title: "Creating Options", level: 2 },
  { id: "setting-up-variants", title: "Setting Up Variants", level: 2 },
  { id: "variant-pricing", title: "Variant Pricing", level: 2 },
  { id: "inventory-tracking", title: "Inventory Tracking", level: 2 },
  { id: "variant-images", title: "Variant Images", level: 2 },
  { id: "variant-limits", title: "Working with Variant Limits", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Product Variants",
  description: "Complete guide to setting up product variants in Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-product-variants` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Product Variants", item: `${siteConfig.url}/guides/how-to-set-up-shopify-product-variants` },
  ],
};

export default function ProductVariantsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Product Setup</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify Product Variants
            </h1>

            <p className="text-xl text-foreground mb-8">
              Product variants let you sell different versions of a product, such as sizes, colours, or materials, all from a single product listing. This guide covers everything you need to know about setting up and managing variants.
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="understanding-variants" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Understanding Variants</h2>
                <p className="text-lg text-foreground mb-4">
                  A variant is a specific version of a product defined by its options. For example, a t-shirt in size Medium and colour Blue is one variant, while the same t-shirt in size Large and colour Red is another variant.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Each variant can have its own SKU, price, inventory level, weight, and barcode. This allows you to track and sell different versions of a product independently.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Concepts</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Options:</strong> The attributes that define variants (e.g., Size, Colour, Material)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Option values:</strong> The specific choices within each option (e.g., Small, Medium, Large)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Variants:</strong> The combinations of option values (e.g., Small/Blue, Medium/Red)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Variant Limits</h4>
                  <p className="text-foreground">
                    Shopify allows a maximum of 3 options per product and 100 variants total per product. For example, if you have 10 sizes x 5 colours x 3 materials, that is 150 variants, which exceeds the limit.
                  </p>
                </div>
              </section>

              <section id="creating-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating Options</h2>
                <p className="text-lg text-foreground mb-6">
                  Options define the attributes that differentiate your variants. Choose options that customers actually use to make purchasing decisions.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Common Option Types</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Size</h3>
                    <p className="text-foreground">XS, S, M, L, XL, XXL or numeric sizes like 6, 8, 10, 12. Use consistent naming across your catalogue.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Colour</h3>
                    <p className="text-foreground">Black, White, Navy, etc. Consider using colour swatches in your theme for better visual selection.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Material</h3>
                    <p className="text-foreground">Cotton, Polyester, Leather, etc. Useful when the same design comes in different materials.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Style</h3>
                    <p className="text-foreground">Regular fit, Slim fit, Relaxed fit. Good for clothing with different cuts.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Adding Options to a Product</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Open the product in your Shopify admin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Scroll to the Variants section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click &quot;Add options like size or colour&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Enter the option name (e.g., Size) and values (e.g., S, M, L)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Click &quot;Done&quot; and add additional options if needed</span>
                  </li>
                </ol>
              </section>

              <section id="setting-up-variants" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Up Variants</h2>
                <p className="text-lg text-foreground mb-4">
                  Once you have defined your options, Shopify automatically generates all possible variant combinations. You then need to configure each variant.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Variant Configuration</h3>
                <p className="text-lg text-foreground mb-4">
                  After adding options, you will see a list of all generated variants. For each variant, you can set:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Price:</strong> Each variant can have a different price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Compare at price:</strong> Original price for showing discounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>SKU:</strong> Unique identifier for the variant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Barcode:</strong> UPC, EAN, or ISBN</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Inventory:</strong> Stock quantity at each location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Weight:</strong> Used for shipping calculations</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Bulk Editing</h3>
                <p className="text-lg text-foreground mb-4">
                  For products with many variants, use the bulk editor to update multiple variants at once. Click &quot;Edit&quot; in the Variants section, then click &quot;Open bulk editor&quot;.
                </p>
              </section>

              <section id="variant-pricing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Variant Pricing</h2>
                <p className="text-lg text-foreground mb-4">
                  Different variants can have different prices. This is useful when larger sizes cost more to produce or premium materials command higher prices.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Size-Based Pricing</h3>
                    <p className="text-foreground">Common in clothing where larger sizes use more material. For example, sizes XS-L at £29.99, sizes XL-XXL at £34.99.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Material-Based Pricing</h3>
                    <p className="text-foreground">When the same product comes in standard and premium materials. A cotton version might be £25 while a silk version is £65.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Colour-Based Pricing</h3>
                    <p className="text-foreground">Less common, but some colours may cost more to produce. Ensure this is clearly communicated to avoid customer confusion.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pricing Display</h4>
                  <p className="text-foreground">
                    When variants have different prices, your product page typically shows a price range (e.g., &quot;From £29.99&quot;) or updates the price dynamically as customers select options.
                  </p>
                </div>
              </section>

              <section id="inventory-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Tracking</h2>
                <p className="text-lg text-foreground mb-4">
                  Each variant maintains its own inventory count. This allows accurate stock tracking across all product variations.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Enabling Inventory Tracking</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In the variant editor, check &quot;Track quantity&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Enter the current stock quantity for each location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Choose whether to continue selling when out of stock</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Multi-Location Inventory</h3>
                <p className="text-lg text-foreground mb-4">
                  If you have multiple locations (warehouse, retail store, etc.), you can track inventory separately at each location. Shopify automatically allocates stock when orders come in.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Out of Stock Behaviour</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Stop selling:</strong> Variant becomes unavailable when stock reaches zero</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Continue selling:</strong> Allow backorders, useful for made-to-order items</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="variant-images" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Variant Images</h2>
                <p className="text-lg text-foreground mb-4">
                  Assign specific images to variants so customers see the correct product image when they select an option, particularly important for colour variants.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Assigning Images to Variants</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Upload All Images</strong>
                      <p className="text-foreground mt-1">First, upload all product images to the Media section of your product.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Edit the Variant</strong>
                      <p className="text-foreground mt-1">Click on a variant to open its editor.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Select an Image</strong>
                      <p className="text-foreground mt-1">Click the image placeholder and choose the relevant image from your media library.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Repeat for All Variants</strong>
                      <p className="text-foreground mt-1">Assign appropriate images to each variant that needs one.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Image Tip</h4>
                  <p className="text-foreground">
                    When customers select a colour, the product gallery should update to show that colour. Most modern themes handle this automatically when variant images are properly assigned.
                  </p>
                </div>
              </section>

              <section id="variant-limits" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Working with Variant Limits</h2>
                <p className="text-lg text-foreground mb-4">
                  When you hit Shopify&apos;s 100 variant limit, you have several options to work around it.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Split into Multiple Products</h3>
                    <p className="text-foreground">Create separate products for different categories. For example, &quot;T-Shirt (Basic Colours)&quot; and &quot;T-Shirt (Premium Colours)&quot;.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Use an App</h3>
                    <p className="text-foreground">Apps like Infinite Options or Bold Product Options can add options without creating actual variants, though this has inventory tracking limitations.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Reduce Option Values</h3>
                    <p className="text-foreground">Consolidate similar options. Instead of 15 colour variations, consider grouping into 8-10 core colours.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify Plus</h3>
                    <p className="text-foreground">Shopify Plus stores can request variant limit increases. This is handled through Shopify support on a case-by-case basis.</p>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these guidelines for a well-organised variant structure.
                </p>

                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">1.</span>
                    <span><strong>Consistent naming:</strong> Use the same option names and values across similar products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">2.</span>
                    <span><strong>Logical order:</strong> Arrange option values in a sensible sequence (S, M, L not L, S, M)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">3.</span>
                    <span><strong>Unique SKUs:</strong> Give every variant a unique SKU for accurate inventory tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">4.</span>
                    <span><strong>Complete data:</strong> Fill in all variant fields including weight for accurate shipping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">5.</span>
                    <span><strong>Assign images:</strong> Every colour variant should have an assigned image</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-product-page-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Page Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Optimise your product pages</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Complete store launch guide</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Product Setup?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you structure your products, configure variants, and optimise your catalogue for maximum sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
