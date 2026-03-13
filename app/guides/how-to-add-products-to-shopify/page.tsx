import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Products to Shopify",
  description:
    "Complete guide to adding products to your Shopify store. Learn about product details, variants, images, SEO, inventory management, and bulk import.",
  alternates: {
    canonical: "/guides/how-to-add-products-to-shopify",
  },
  openGraph: {
    title: "How to Add Products to Shopify",
    description:
      "Complete guide to adding products to your Shopify store with best practices for variants, images, and SEO.",
    url: "/guides/how-to-add-products-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "product-basics", title: "Product Basics", level: 2 },
  { id: "adding-your-first-product", title: "Adding Your First Product", level: 2 },
  { id: "product-images", title: "Product Images", level: 2 },
  { id: "variants-and-options", title: "Variants and Options", level: 2 },
  { id: "pricing-and-inventory", title: "Pricing and Inventory", level: 2 },
  { id: "product-seo", title: "Product SEO", level: 2 },
  { id: "bulk-import", title: "Bulk Import", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Products to Shopify",
  description:
    "Complete guide to adding products to your Shopify store with best practices for variants, images, and SEO.",
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
    "@id": `${siteConfig.url}/guides/how-to-add-products-to-shopify`,
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
      name: "How to Add Products to Shopify",
      item: `${siteConfig.url}/guides/how-to-add-products-to-shopify`,
    },
  ],
};

export default function AddProductsGuidePage() {
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
                Store Setup
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Products to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Your products are the heart of your store. This guide covers everything from basic
              product creation to advanced techniques for variants, images, and SEO optimisation.
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
              {/* Product Basics */}
              <section id="product-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Product Basics
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before diving into the product editor, it helps to understand how Shopify structures
                  product information. A well-organised product listing improves customer experience
                  and makes your store easier to manage.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Every product in Shopify has core fields that define what it is, how it looks, and
                  how it is sold. Getting these right from the start saves time and prevents issues
                  later.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Essential Product Fields</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Title</strong> - The product name customers see. Keep it clear and searchable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Description</strong> - Detailed information about the product. Supports HTML formatting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Images</strong> - Photos and videos showing the product. The first image becomes the featured image.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Price</strong> - The selling price. You can also add a compare-at price for sales.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Variants</strong> - Different versions like sizes or colours, each with its own SKU and stock.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Inventory</strong> - Stock quantity and tracking settings.</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Product Types and Organisation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify provides several ways to categorise products:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Product type:</strong> A free-text field like &quot;T-Shirt&quot; or &quot;Candle&quot;. Used for filtering and automation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Vendor:</strong> The brand or manufacturer. Useful if you sell multiple brands.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Collections:</strong> Groups of products displayed on your store. A product can be in multiple collections.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Tags:</strong> Keywords for filtering and search. Use consistent tags across products.</span>
                  </li>
                </ul>
              </section>

              {/* Adding Your First Product */}
              <section id="adding-your-first-product" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Adding Your First Product
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Let us walk through adding a product from start to finish. This process takes about
                  5-10 minutes per product when you have all your information ready.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Products</strong>
                      <p className="text-foreground mt-2">
                        In your Shopify admin, go to <strong>Products</strong> in the left sidebar.
                        Click <strong>Add product</strong> in the top right corner.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div>
                      <strong className="text-foreground-dark">Enter the Product Title</strong>
                      <p className="text-foreground mt-2">
                        Add a clear, descriptive title. Include key details customers search for.
                        For example, &quot;Organic Cotton T-Shirt - Navy Blue&quot; is better than just &quot;T-Shirt&quot;.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div>
                      <strong className="text-foreground-dark">Write the Description</strong>
                      <p className="text-foreground mt-2">
                        Describe the product in detail. Include materials, dimensions, benefits, and
                        use cases. Format with headings and bullet points for readability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div>
                      <strong className="text-foreground-dark">Upload Images</strong>
                      <p className="text-foreground mt-2">
                        Add product images by clicking <strong>Add media</strong> or dragging files.
                        Upload multiple angles and lifestyle shots. The first image becomes the main image.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">5</span>
                    <div>
                      <strong className="text-foreground-dark">Set Pricing</strong>
                      <p className="text-foreground mt-2">
                        Enter the price in the <strong>Pricing</strong> section. If the item is on sale,
                        enter the full price in &quot;Compare at price&quot; and the sale price in &quot;Price&quot;.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">6</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Inventory</strong>
                      <p className="text-foreground mt-2">
                        Add SKU, barcode if applicable, and stock quantity. Enable &quot;Track quantity&quot;
                        to automatically update stock when orders are placed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">7</span>
                    <div>
                      <strong className="text-foreground-dark">Add Shipping Details</strong>
                      <p className="text-foreground mt-2">
                        Enter the product weight for accurate shipping calculations. Check &quot;This is a
                        physical product&quot; for items that need shipping.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0 mt-1">8</span>
                    <div>
                      <strong className="text-foreground-dark">Save the Product</strong>
                      <p className="text-foreground mt-2">
                        Click <strong>Save</strong> in the top right. The product is now in your store.
                        Set the status to &quot;Active&quot; to make it visible to customers.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Product Images */}
              <section id="product-images" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Product Images
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Images are crucial for online sales. Customers cannot touch or try your products,
                  so photos must convey quality, size, and details. Good images directly impact
                  conversion rates.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Image Requirements
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Size:</strong> Minimum 2048 x 2048 pixels for zoom functionality. Square images work best.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Format:</strong> JPEG for photographs, PNG for graphics with transparency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>File size:</strong> Under 4MB per image. Compress larger files before uploading.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Quantity:</strong> 4-8 images per product showing different angles and details.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Types of Product Images
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Main Product Shot</h4>
                    <p className="text-foreground">
                      Clean image on white or simple background. Shows the product clearly without
                      distractions. This appears in collection pages and search results.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Detail Shots</h4>
                    <p className="text-foreground">
                      Close-ups showing texture, stitching, materials, or special features. Help
                      customers understand quality and craftsmanship.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Scale Reference</h4>
                    <p className="text-foreground">
                      Show the product next to common objects or in use to communicate size. Essential
                      for items where dimensions matter.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Lifestyle Images</h4>
                    <p className="text-foreground">
                      Product in context or being used. Helps customers envision owning the product.
                      Great for social media sharing.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Add alt text to every image. Click on an image, then click &quot;Add alt text&quot;.
                    Describe what the image shows for accessibility and SEO. Example: &quot;Navy blue
                    organic cotton t-shirt front view&quot;.
                  </p>
                </div>
              </section>

              {/* Variants and Options */}
              <section id="variants-and-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Variants and Options
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Many products come in different options like sizes and colours. Shopify handles
                  these through variants. Each variant can have its own price, SKU, and inventory level.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating Variants
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In the product editor, scroll to the <strong>Variants</strong> section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click <strong>Add options like size or colour</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enter the option name (e.g., &quot;Size&quot;)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Enter the option values (e.g., &quot;Small&quot;, &quot;Medium&quot;, &quot;Large&quot;)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Click <strong>Done</strong> to create the variants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>Edit each variant to add specific prices, SKUs, and stock levels</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Variant Limits
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Maximum 3 options</strong> per product (e.g., Size, Colour, Material)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Maximum 100 variants</strong> per product (combination of all options)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Each variant</strong> can have its own image, price, weight, and inventory</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Assigning Images to Variants
                </h3>
                <p className="text-lg text-foreground mb-4">
                  You can link specific images to variants so the correct image shows when a customer
                  selects a colour:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Upload all variant images to the product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>In the Variants section, click on a variant to edit it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click the image icon and select the matching image</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Repeat for each variant that needs a specific image</span>
                  </li>
                </ol>
              </section>

              {/* Pricing and Inventory */}
              <section id="pricing-and-inventory" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Pricing and Inventory
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Accurate pricing and inventory management prevent overselling and ensure customers
                  see the correct prices at checkout.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Pricing Fields
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Price</h4>
                    <p className="text-foreground">
                      The current selling price. If you have tax-inclusive pricing enabled (standard
                      for UK), this should include VAT.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Compare at Price</h4>
                    <p className="text-foreground">
                      The original price before discount. When set higher than Price, Shopify displays
                      this as a strikethrough price and shows the discount.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Cost per Item</h4>
                    <p className="text-foreground">
                      Your cost to acquire the product. Used for profit reporting. Customers never see
                      this value.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Inventory Settings
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Track quantity:</strong> Enable this to have Shopify monitor and update stock levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Continue selling when out of stock:</strong> Allow purchases even when stock reaches zero (for backorders)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>SKU:</strong> Your internal product code. Essential for inventory management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Barcode:</strong> UPC, EAN, or ISBN if applicable. Used for point of sale and product feeds</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Set up low stock alerts in Settings to get notified when inventory runs low. This
                    prevents stockouts and lost sales. Go to Settings, then Notifications, and configure
                    your low stock threshold.
                  </p>
                </div>
              </section>

              {/* Product SEO */}
              <section id="product-seo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Product SEO
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Optimising your products for search engines helps customers find your store through
                  Google and other search engines. Each product page is an opportunity to rank for
                  relevant keywords.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Editing SEO Settings
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Scroll to the bottom of the product editor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Find &quot;Search engine listing preview&quot; and click <strong>Edit</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Customise the Page title, Meta description, and URL handle</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  SEO Best Practices
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Page Title</h4>
                    <p className="text-foreground">
                      Include your main keyword naturally. Keep under 60 characters. Format:
                      &quot;Product Name | Category | Brand&quot;
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      <strong>Example:</strong> Organic Cotton T-Shirt Navy | Men&apos;s Tops | Your Brand
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Meta Description</h4>
                    <p className="text-foreground">
                      Write a compelling 150-160 character summary that encourages clicks. Include
                      keywords and a call to action.
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      <strong>Example:</strong> Premium organic cotton t-shirt in navy blue. Soft, sustainable,
                      and ethically made. Free UK delivery over £50. Shop now.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">URL Handle</h4>
                    <p className="text-foreground">
                      Keep it short, descriptive, and hyphenated. Avoid changing URLs after launch
                      as this requires redirects.
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      <strong>Good:</strong> organic-cotton-t-shirt-navy<br />
                      <strong>Bad:</strong> product_12345_cotton_tshirt_navy_blue_mens
                    </p>
                  </div>
                </div>
              </section>

              {/* Bulk Import */}
              <section id="bulk-import" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Bulk Import
                </h2>
                <p className="text-lg text-foreground mb-4">
                  If you have many products to add, creating them one by one is time-consuming.
                  Shopify supports bulk import via CSV files, letting you add hundreds of products
                  at once.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Exporting the Template
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Products</strong> in your Shopify admin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click <strong>Export</strong> in the top right</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Select &quot;Current page&quot; and &quot;Plain CSV file&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Use this export as your template structure</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Importing Products
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Fill in your CSV with product data (one row per variant)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Go to <strong>Products</strong> and click <strong>Import</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Upload your CSV file</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Preview the import and check for errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Click <strong>Import products</strong> to add them to your store</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    For images in bulk imports, host them at publicly accessible URLs and include the
                    URLs in the Image Src column. Shopify will download and store them automatically.
                  </p>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Mistakes
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Missing or Low-Quality Images
                    </h3>
                    <p className="text-foreground mb-3">
                      Products with poor images have significantly lower conversion rates. Customers
                      cannot see what they are buying.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Invest in good product photography. If budget is tight,
                      use natural lighting and a clean background. Multiple angles are essential.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Thin Product Descriptions
                    </h3>
                    <p className="text-foreground mb-3">
                      One-sentence descriptions leave customers with questions and hurt SEO.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Write at least 100-200 words per product. Include
                      materials, dimensions, care instructions, and benefits.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Not Adding Product Weight
                    </h3>
                    <p className="text-foreground mb-3">
                      Missing weights cause inaccurate shipping calculations for weight-based rates.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Always add accurate weights in the Shipping section.
                      Include packaging weight for best accuracy.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Forgetting to Track Inventory
                    </h3>
                    <p className="text-foreground mb-3">
                      Without inventory tracking, you can oversell products and disappoint customers.
                    </p>
                    <p className="text-foreground">
                      <strong>Fix:</strong> Enable &quot;Track quantity&quot; for all products. Set up low
                      stock notifications to stay ahead of restocking.
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
                      href="/guides/how-to-create-shopify-collections"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Create Collections</h4>
                      <p className="text-sm text-foreground">Organise products into collections</p>
                    </Link>
                    <Link
                      href="/guides/how-to-optimise-shopify-product-images"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Product Images</h4>
                      <p className="text-sm text-foreground">Speed and quality best practices</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Your Products?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you set up products, import your catalogue, and optimise listings
            for maximum conversions.
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
