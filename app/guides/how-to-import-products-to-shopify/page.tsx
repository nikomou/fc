import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Import Products to Shopify",
  description:
    "Complete guide to bulk importing products into Shopify. Learn about CSV formatting, image imports, variant handling, and troubleshooting common import errors.",
  alternates: {
    canonical: "/guides/how-to-import-products-to-shopify",
  },
  openGraph: {
    title: "How to Import Products to Shopify",
    description: "Complete guide to bulk importing products into Shopify.",
    url: "/guides/how-to-import-products-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "import-overview", title: "Import Overview", level: 2 },
  { id: "csv-format", title: "CSV Format", level: 2 },
  { id: "preparing-your-file", title: "Preparing Your File", level: 2 },
  { id: "importing-products", title: "Importing Products", level: 2 },
  { id: "handling-variants", title: "Handling Variants", level: 2 },
  { id: "importing-images", title: "Importing Images", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Import Products to Shopify",
  description: "Complete guide to bulk importing products into Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-import-products-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Import Products to Shopify", item: `${siteConfig.url}/guides/how-to-import-products-to-shopify` },
  ],
};

export default function ShopifyImportProductsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Products</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>18 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Import Products to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Bulk importing products saves hours of manual data entry. This guide covers the complete process from preparing your CSV file to troubleshooting common import errors.
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

              <section id="import-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Import Overview</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify&apos;s product import feature uses CSV (Comma Separated Values) files to bulk create or update products. This is essential when migrating from another platform, uploading supplier catalogues, or making mass updates to existing products.
                </p>
                <p className="text-lg text-foreground mb-6">
                  The import process handles product titles, descriptions, prices, variants, inventory, images, and all other product data. Understanding the CSV format is key to successful imports.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">What You Can Import</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product details</strong> including title, description, vendor, and type</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Pricing</strong> including price, compare at price, and cost per item</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Inventory</strong> including stock quantities and SKUs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Variants</strong> including size, colour, and custom options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Images</strong> via URLs to hosted image files</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="csv-format" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">CSV Format</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify expects a specific CSV structure. The easiest way to get the correct format is to export your existing products first, which provides a template with all the correct column headers.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Required Columns</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Handle</h4>
                    <p className="text-foreground">Unique identifier used in the product URL. Must be lowercase with hyphens instead of spaces. Example: blue-cotton-shirt</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Title</h4>
                    <p className="text-foreground">The product name displayed to customers. Can include spaces and special characters.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Variant Price</h4>
                    <p className="text-foreground">The price for each variant. Use numbers only, no currency symbols. Example: 29.99</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Common Optional Columns</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Body (HTML):</strong> Product description, can include HTML formatting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Vendor:</strong> The manufacturer or supplier name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Type:</strong> Product category for filtering and organisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Tags:</strong> Comma-separated tags for search and filtering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Published:</strong> TRUE or FALSE to control visibility</span>
                  </li>
                </ul>
              </section>

              <section id="preparing-your-file" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Preparing Your File</h2>
                <p className="text-lg text-foreground mb-4">
                  Proper file preparation prevents most import errors. Follow these steps to create a clean, error-free CSV.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Download the Template</strong>
                      <p className="text-foreground mt-1">Go to Products → Import → Download a sample CSV. This ensures you have all correct column headers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Use UTF-8 Encoding</strong>
                      <p className="text-foreground mt-1">Save your file with UTF-8 encoding to support special characters. In Excel, choose &quot;CSV UTF-8&quot; when saving.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Clean Your Data</strong>
                      <p className="text-foreground mt-1">Remove extra spaces, fix formatting inconsistencies, and ensure all required fields are filled.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Validate Handles</strong>
                      <p className="text-foreground mt-1">Ensure all handles are unique, lowercase, and contain no special characters except hyphens.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Test with Small Batch</strong>
                      <p className="text-foreground mt-1">Import 5-10 products first to verify everything works before importing the full catalogue.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="importing-products" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Importing Products</h2>
                <p className="text-lg text-foreground mb-4">
                  Once your file is prepared, the actual import process is straightforward.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Import Steps</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Import</strong>
                      <p className="text-foreground mt-1">Go to Products in your Shopify admin and click the &quot;Import&quot; button.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Upload Your File</strong>
                      <p className="text-foreground mt-1">Click &quot;Add file&quot; and select your CSV. Shopify will validate the file structure.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Review Import Options</strong>
                      <p className="text-foreground mt-1">Choose whether to overwrite existing products with matching handles or skip them.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Start Import</strong>
                      <p className="text-foreground mt-1">Click &quot;Import products&quot;. Large imports may take several minutes to complete.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Important Note</h4>
                  <p className="text-foreground">
                    Imports cannot be undone. Always export a backup of your existing products before running a large import, especially if using the overwrite option.
                  </p>
                </div>
              </section>

              <section id="handling-variants" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Handling Variants</h2>
                <p className="text-lg text-foreground mb-4">
                  Products with multiple options like size and colour require special formatting in your CSV. Each variant gets its own row.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Variant CSV Structure</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>First row:</strong> Contains product details (title, description, etc.) and first variant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Subsequent rows:</strong> Same Handle but only variant-specific data (option values, price, SKU, inventory)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Option columns:</strong> Option1 Name, Option1 Value, Option2 Name, Option2 Value, etc.</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Example Structure</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border border-gray-200 rounded-xl">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Handle</th>
                        <th className="px-4 py-3 text-left font-semibold">Title</th>
                        <th className="px-4 py-3 text-left font-semibold">Option1 Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Option1 Value</th>
                        <th className="px-4 py-3 text-left font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground">
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3">cotton-tshirt</td>
                        <td className="px-4 py-3">Cotton T-Shirt</td>
                        <td className="px-4 py-3">Size</td>
                        <td className="px-4 py-3">Small</td>
                        <td className="px-4 py-3">25.00</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3">cotton-tshirt</td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3">Medium</td>
                        <td className="px-4 py-3">25.00</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3">cotton-tshirt</td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3">Large</td>
                        <td className="px-4 py-3">27.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="importing-images" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Importing Images</h2>
                <p className="text-lg text-foreground mb-4">
                  Product images must be hosted online and accessible via URL. Shopify downloads images from these URLs during import.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Image Requirements</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Format:</strong> JPEG, PNG, GIF, or WebP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Size:</strong> Maximum 20MB per image, 4472 x 4472 pixels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>URL:</strong> Must be publicly accessible (no authentication required)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Multiple images:</strong> Separate URLs with commas in the Image Src column</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Host images on a CDN or cloud storage like Amazon S3, Google Cloud Storage, or Cloudflare before importing. This ensures reliable access during import.
                  </p>
                </div>
              </section>

              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Troubleshooting</h2>
                <p className="text-lg text-foreground mb-4">
                  Common import errors and how to fix them quickly.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">&quot;Invalid CSV&quot; Error</h3>
                    <p className="text-foreground">Usually caused by incorrect encoding or extra commas. Open in a text editor and check for formatting issues. Re-save as UTF-8.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">&quot;Missing required column&quot;</h3>
                    <p className="text-foreground">Ensure your CSV has Handle, Title, and Variant Price columns. Check for typos in column headers.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Products Not Appearing</h3>
                    <p className="text-foreground">Check the Published column is set to TRUE and that products have valid prices. Also verify Status is set to Active.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Images Not Loading</h3>
                    <p className="text-foreground">Verify URLs are accessible by opening them in a browser. Ensure no authentication is required and the file format is supported.</p>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices for smooth, error-free imports.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Import Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Backup first:</strong> Always export existing products before importing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Test small:</strong> Import a few products first to verify formatting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Consistent handles:</strong> Use a naming convention for handles to avoid duplicates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Batch large imports:</strong> Split files with more than 1000 products into smaller batches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Off-peak timing:</strong> Run large imports during low-traffic periods</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-manage-shopify-inventory" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Inventory Management →</h4>
                      <p className="text-sm text-foreground">Stock tracking guide</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Complete pre-launch guide</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Product Migration?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can handle complex product migrations, data cleaning, and bulk imports to ensure a smooth transition to Shopify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
