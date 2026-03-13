import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Shopify Collections",
  description:
    "Learn how to create and organise Shopify collections effectively. Covers manual vs automated collections, collection conditions, SEO optimisation, and navigation.",
  alternates: {
    canonical: "/guides/how-to-create-shopify-collections",
  },
  openGraph: {
    title: "How to Create Shopify Collections",
    description:
      "Learn how to create and organise Shopify collections effectively. Covers manual vs automated collections and best practices.",
    url: "/guides/how-to-create-shopify-collections",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-collections", title: "Understanding Collections", level: 2 },
  { id: "manual-vs-automated", title: "Manual vs Automated Collections", level: 2 },
  { id: "creating-collections", title: "Creating Collections", level: 2 },
  { id: "automated-collection-conditions", title: "Automated Collection Conditions", level: 2 },
  { id: "organising-products", title: "Organising Products in Collections", level: 2 },
  { id: "collection-seo", title: "Collection SEO", level: 2 },
  { id: "navigation-and-display", title: "Navigation and Display", level: 2 },
  { id: "advanced-strategies", title: "Advanced Collection Strategies", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Shopify Collections",
  description:
    "Learn how to create and organise Shopify collections effectively. Covers manual vs automated collections and best practices.",
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
    "@id": `${siteConfig.url}/guides/how-to-create-shopify-collections`,
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
      name: "How to Create Shopify Collections",
      item: `${siteConfig.url}/guides/how-to-create-shopify-collections`,
    },
  ],
};

export default function ShopifyCollectionsGuidePage() {
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
                <span>11 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Shopify Collections
            </h1>

            <p className="text-xl text-foreground mb-8">
              Well-organised collections help customers find products quickly and improve your
              store's SEO. Learn how to create effective collection structures that drive sales.
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
              {/* Understanding Collections */}
              <section id="understanding-collections" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding Collections
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Collections in Shopify are groups of products that share common characteristics.
                  They help customers browse your catalogue and are essential for organising
                  stores with more than a handful of products.
                </p>
                <p className="text-lg text-foreground mb-6">
                  A single product can belong to multiple collections. For example, a red
                  running shoe might be in "Running Shoes", "Red Shoes", "New Arrivals",
                  and "Sale" all at once.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Common Collection Types</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Category collections</strong> - Group by product type (Dresses, Trousers, Tops)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Brand collections</strong> - Group by manufacturer or brand</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Seasonal collections</strong> - Summer, Winter, Holiday</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Promotional collections</strong> - Sale, Clearance, New Arrivals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Curated collections</strong> - Best Sellers, Staff Picks, Gift Ideas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Attribute collections</strong> - By colour, size, material, or price range</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The collections you create should reflect how your customers think about
                  and search for products. Start by analysing your site search data and
                  customer feedback to understand their mental models.
                </p>
              </section>

              {/* Manual vs Automated */}
              <section id="manual-vs-automated" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Manual vs Automated Collections
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify offers two types of collections, each suited to different use cases.
                  Understanding when to use each type saves time and prevents errors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Manual Collections</h3>
                    <p className="text-foreground mb-4">
                      You hand-pick which products belong in the collection. Products stay
                      in the collection until you manually remove them.
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">Best for:</h4>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Small, curated selections</li>
                      <li>• One-off promotions</li>
                      <li>• Collections with complex criteria</li>
                      <li>• Staff picks or editorial selections</li>
                      <li>• Stores with few products</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">Automated Collections</h3>
                    <p className="text-foreground mb-4">
                      Products automatically appear based on conditions you set. New products
                      matching the conditions are added automatically.
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">Best for:</h4>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Category collections</li>
                      <li>• Brand collections</li>
                      <li>• Price-based collections (Under £50)</li>
                      <li>• Tag-based organisation</li>
                      <li>• Stores with many products</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    You cannot convert between manual and automated after creation. If you
                    start with a manual collection and realise you need automation, you will
                    need to create a new automated collection and delete the manual one.
                  </p>
                </div>
              </section>

              {/* Creating Collections */}
              <section id="creating-collections" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Creating Collections
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The process for creating collections is straightforward, but taking time
                  to fill in all fields properly improves both user experience and SEO.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Step-by-Step: Creating a Collection
                </h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Collections</strong>
                      <p className="text-foreground mt-2">
                        In your Shopify admin, go to <strong>Products → Collections</strong> and
                        click <strong>Create collection</strong>.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-foreground-dark">Add Title and Description</strong>
                      <p className="text-foreground mt-2">
                        Enter a clear, descriptive title. Write a description that includes
                        relevant keywords and helps customers understand what they will find.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-foreground-dark">Choose Collection Type</strong>
                      <p className="text-foreground mt-2">
                        Select Manual or Automated. For automated, set your conditions (covered
                        in detail below).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <strong className="text-foreground-dark">Add Collection Image</strong>
                      <p className="text-foreground mt-2">
                        Upload a high-quality image that represents the collection. This appears
                        on collection listing pages and in navigation menus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">5</span>
                    <div>
                      <strong className="text-foreground-dark">Configure SEO Settings</strong>
                      <p className="text-foreground mt-2">
                        Scroll to "Search engine listing preview" and click <strong>Edit</strong>.
                        Customise the page title, meta description, and URL handle.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">6</span>
                    <div>
                      <strong className="text-foreground-dark">Set Availability</strong>
                      <p className="text-foreground mt-2">
                        Choose sales channels where this collection should appear. If selling
                        wholesale, you might hide certain collections from the online store.
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Collection Image Best Practices
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Use landscape images (16:9 or 3:2 ratio works well)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Minimum 1200px wide for crisp display on all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Show representative products or lifestyle imagery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Keep consistent style across all collection images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Compress images to under 500KB for fast loading</span>
                  </li>
                </ul>
              </section>

              {/* Automated Collection Conditions */}
              <section id="automated-collection-conditions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Automated Collection Conditions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Automated collections use conditions to determine which products appear.
                  You can combine multiple conditions with AND or OR logic.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Available Condition Fields
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-foreground-dark">Field</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-foreground-dark">Example Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Product title</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Contains "T-Shirt"</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Product type</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Is equal to "Shoes"</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Product vendor</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Is equal to "Nike"</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Product tag</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Is equal to "new-arrival"</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Compare at price</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Is not empty (shows sale items)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Price</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Is less than £50</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Weight</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Is greater than 1kg</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Inventory stock</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Is greater than 0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Variant title</td>
                        <td className="border border-gray-200 px-4 py-3 text-foreground">Contains "Large"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  AND vs OR Logic
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">All conditions (AND)</h4>
                    <p className="text-foreground text-sm mb-3">
                      Products must match ALL conditions to appear.
                    </p>
                    <div className="bg-white rounded-lg p-3 text-sm">
                      <p className="text-foreground mb-1">Product type = "Dress"</p>
                      <p className="text-accent font-medium mb-1">AND</p>
                      <p className="text-foreground mb-1">Price &lt; £100</p>
                      <p className="text-gray-500 mt-2 italic">Result: Only dresses under £100</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Any condition (OR)</h4>
                    <p className="text-foreground text-sm mb-3">
                      Products matching ANY condition appear.
                    </p>
                    <div className="bg-white rounded-lg p-3 text-sm">
                      <p className="text-foreground mb-1">Tag = "bestseller"</p>
                      <p className="text-accent font-medium mb-1">OR</p>
                      <p className="text-foreground mb-1">Tag = "featured"</p>
                      <p className="text-gray-500 mt-2 italic">Result: All bestsellers and featured items</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use consistent, lowercase product tags for reliable automation. Create a
                    tagging convention document and follow it. Example: "category-dresses",
                    "colour-red", "season-summer".
                  </p>
                </div>
              </section>

              {/* Organising Products */}
              <section id="organising-products" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Organising Products in Collections
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Once products are in a collection, you can control their order and
                  presentation. The default sort order significantly impacts sales.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Sort Order Options
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Best selling</strong> - Prioritises products with most sales. Good for established stores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Alphabetically A-Z / Z-A</strong> - Useful for brand or category browsing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Price low-high / high-low</strong> - Helps price-conscious shoppers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Date: newest first</strong> - Great for New Arrivals collections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Manually</strong> - You control the exact order</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Manual Product Ordering
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For manual ordering:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Edit the collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Set sort order to "Manually"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Drag and drop products in the Products section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Save the collection</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Merchandising Tips</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Put your best-margin products in the top positions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Feature products with the best photography first</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Rotate featured products periodically to keep collections fresh</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Consider search data when deciding what to prioritise</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Collection SEO */}
              <section id="collection-seo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Collection SEO
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Collection pages are often your most important pages for SEO. They target
                  category-level keywords that have significant search volume.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Optimising Collection Titles
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Include your target keyword naturally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Keep under 60 characters for full display in search</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Make it descriptive and specific</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Avoid generic names like "Products" or "All Items"</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Title Examples</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-red-500">✗</span>
                      <span className="text-foreground">Women's</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-foreground">Women's Running Shoes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-500">✗</span>
                      <span className="text-foreground">Tops</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-foreground">Women's Summer Tops</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Writing Collection Descriptions
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Collection descriptions serve both customers and search engines. Include:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Opening paragraph introducing the collection (include main keyword)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>What customers will find in this collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Key features or benefits of these products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Related categories they might want to explore</span>
                  </li>
                </ul>
                <p className="text-lg text-foreground mb-6">
                  Aim for 100-300 words. More is better for SEO, but avoid fluff.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  URL Handles
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Keep handles short and descriptive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Use hyphens between words (not underscores)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Include keywords where natural</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Avoid changing handles after launch (causes redirects)</span>
                  </li>
                </ul>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-foreground">
                    <strong>Good:</strong> /collections/womens-running-shoes<br />
                    <strong>Bad:</strong> /collections/womens_shoes_running_category_new
                  </p>
                </div>
              </section>

              {/* Navigation and Display */}
              <section id="navigation-and-display" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Navigation and Display
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Creating collections is only half the job. You also need to make them
                  discoverable through navigation and on-site merchandising.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Adding Collections to Navigation
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Online Store → Navigation</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click on the menu you want to edit (usually "Main menu")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click <strong>Add menu item</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>In the Link field, select your collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Add a name for the menu item</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Drag to reorder or nest under parent items</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Navigation Structure Tips
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Limit top-level items</strong> - 5-7 items maximum for usability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Use dropdown menus</strong> - Group related collections under parent categories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Include "All" options</strong> - Let users see everything in a category</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Consider mobile</strong> - Navigation should work well on small screens</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Featuring Collections on Your Homepage
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Most themes let you showcase collections on your homepage using sections:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Collection list</strong> - Display multiple collection images with links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Featured collection</strong> - Show products from a single collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Image with text</strong> - Promote a collection with custom imagery</span>
                  </li>
                </ul>
              </section>

              {/* Advanced Strategies */}
              <section id="advanced-strategies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Advanced Collection Strategies
                </h2>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Hidden Collections for Internal Use
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Create collections that are not visible in navigation but serve other purposes:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Homepage featured</strong> - Products to feature on homepage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Email campaign</strong> - Products for a specific campaign</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Wholesale only</strong> - Products for B2B channel only</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Dynamic Sale Collections
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Create automated "Sale" collections that update themselves:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Condition Setup</h4>
                  <p className="text-foreground mb-3">
                    Field: <strong>Compare at price</strong><br />
                    Condition: <strong>Is not empty</strong>
                  </p>
                  <p className="text-foreground">
                    Any product with a compare-at price will automatically appear in this
                    collection. Remove the compare-at price to remove from sale.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Multi-Condition Collections
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Combine tags and product types for complex filtering:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Example: "Gift Ideas Under £30"</h4>
                  <p className="text-foreground">
                    Product tag = "gift-idea"<br />
                    <strong>AND</strong><br />
                    Price is less than £30<br />
                    <strong>AND</strong><br />
                    Inventory stock is greater than 0
                  </p>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-shopify-navigation-menus"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Navigation Menus →</h4>
                      <p className="text-sm text-foreground">Organise your store navigation</p>
                    </Link>
                    <Link
                      href="/guides/how-to-optimise-shopify-product-pages-for-seo"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Page SEO →</h4>
                      <p className="text-sm text-foreground">Optimise individual products</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Collections?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you structure your collections for maximum discoverability,
            implement advanced filtering, and optimise for search engines.
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
