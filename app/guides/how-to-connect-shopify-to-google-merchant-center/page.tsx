import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Connect Shopify to Google Merchant Center",
  description:
    "Learn how to connect Shopify to Google Merchant Center for Shopping ads and free listings. Covers feed setup, product approval, and optimisation.",
  alternates: {
    canonical: "/guides/how-to-connect-shopify-to-google-merchant-center",
  },
  openGraph: {
    title: "How to Connect Shopify to Google Merchant Center",
    description:
      "Learn how to connect Shopify to Google Merchant Center for Shopping ads and free listings. Covers feed setup, product approval, and optimisation.",
    url: "/guides/how-to-connect-shopify-to-google-merchant-center",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-merchant-center", title: "What is Merchant Center?", level: 2 },
  { id: "prerequisites", title: "Prerequisites", level: 2 },
  { id: "connecting-shopify", title: "Connecting Shopify", level: 2 },
  { id: "product-feed-setup", title: "Product Feed Setup", level: 2 },
  { id: "feed-optimisation", title: "Feed Optimisation", level: 2 },
  { id: "common-disapprovals", title: "Common Disapprovals", level: 2 },
  { id: "performance-max", title: "Performance Max Campaigns", level: 2 },
  { id: "free-listings", title: "Free Listings", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Connect Shopify to Google Merchant Center",
  description:
    "Learn how to connect your Shopify store to Google Merchant Center for Shopping ads and free listings.",
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
    "@id": `${siteConfig.url}/guides/how-to-connect-shopify-to-google-merchant-center`,
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
      name: "How to Connect Shopify to Google Merchant Center",
      item: `${siteConfig.url}/guides/how-to-connect-shopify-to-google-merchant-center`,
    },
  ],
};

export default function GoogleMerchantCenterGuidePage() {
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
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Connect Shopify to Google Merchant Center
            </h1>

            <p className="text-xl text-foreground mb-8">
              Google Merchant Center is your gateway to Shopping ads and free product listings.
              This guide walks you through connecting your Shopify store, optimising your product
              feed, and getting your products approved.
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
              {/* What is Merchant Center */}
              <section id="what-is-merchant-center" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  What is Merchant Center?
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Google Merchant Center is a free platform where you upload your product data
                  so Google can display your products across its properties. This includes Google
                  Shopping, Google Search, Google Images, YouTube, and the Shopping tab.
                </p>
                <p className="text-lg text-foreground mb-6">
                  When someone searches for a product you sell, Google can show your products
                  with images, prices, and your store name. This happens through both paid
                  Shopping ads and free product listings, making Merchant Center essential for
                  ecommerce visibility.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">What You Can Do With Merchant Center</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shopping ads</strong> - Run paid product listings through Google Ads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Free listings</strong> - Show products in Google Shopping for free</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Local inventory ads</strong> - Show in-stock products to nearby shoppers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Buy on Google</strong> - Let customers checkout on Google (US only)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product reviews</strong> - Display star ratings on your listings</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The connection between Shopify and Merchant Center syncs your product catalogue
                  automatically, keeping prices, availability, and descriptions up to date without
                  manual work.
                </p>
              </section>

              {/* Prerequisites */}
              <section id="prerequisites" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Prerequisites
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before connecting Shopify to Merchant Center, ensure your store meets Google's
                  requirements. Missing these will cause your products to be disapproved.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Store Requirements
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Verified domain</strong> - You must own and verify your store's domain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>SSL certificate</strong> - Your store must use HTTPS (Shopify includes this)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Functional checkout</strong> - Customers must be able to complete purchases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Clear pricing</strong> - Prices shown must include all mandatory costs</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Required Pages
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Google requires these policies to be clearly accessible on your site:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Refund policy</strong> - How customers can return products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Privacy policy</strong> - How you handle customer data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Terms of service</strong> - Conditions of purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Contact information</strong> - Email, phone, or contact form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Shipping information</strong> - Delivery times and costs</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Add these policy pages to your footer so they're accessible from every page.
                    Google's crawlers will check that these exist before approving your products.
                  </p>
                </div>
              </section>

              {/* Connecting Shopify */}
              <section id="connecting-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Connecting Shopify
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify has a native Google & YouTube sales channel that handles the Merchant
                  Center connection automatically. This is the recommended approach.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Step-by-Step Setup
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Install the Google & YouTube app</strong>
                      <p className="text-foreground mt-1">
                        In your Shopify admin, go to Sales Channels and click the + button.
                        Search for "Google & YouTube" and install it. This is Shopify's official
                        integration.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Connect your Google account</strong>
                      <p className="text-foreground mt-1">
                        Click "Connect Google account" and sign in. Use the Google account that
                        owns or has access to your Merchant Center account.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Select or create Merchant Center account</strong>
                      <p className="text-foreground mt-1">
                        If you have an existing Merchant Center account, select it. If not, the
                        app can create one for you automatically.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Verify and claim your website</strong>
                      <p className="text-foreground mt-1">
                        The app will add verification code to your store automatically. This
                        proves you own the domain. Claiming makes your feed the authoritative
                        source for your URL.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Configure your target market</strong>
                      <p className="text-foreground mt-1">
                        Select the countries you ship to. Your products will show to shoppers
                        in these markets. You can add multiple countries.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong>Set up shipping</strong>
                      <p className="text-foreground mt-1">
                        Configure your shipping settings or let Shopify sync them from your
                        existing shipping rates. Accurate shipping is crucial for approval.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">7</span>
                    <div>
                      <strong>Sync your products</strong>
                      <p className="text-foreground mt-1">
                        Choose which products to sync. You can sync all products or select
                        specific collections. The initial sync can take several hours.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">After Connection</h4>
                  <p className="text-foreground">
                    Products typically take 24-72 hours to be reviewed and approved. Check the
                    Google & YouTube app in Shopify to see sync status and any issues that need
                    attention.
                  </p>
                </div>
              </section>

              {/* Product Feed Setup */}
              <section id="product-feed-setup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Product Feed Setup
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Your product feed is the data that describes your products to Google. The
                  Shopify integration creates this automatically, but understanding the key
                  attributes helps you optimise it.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Essential Product Attributes
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Title</h4>
                    <p className="text-foreground mb-2">
                      Your product name. Include brand, product type, and key attributes.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Example:</strong> "Nike Air Max 90 Men's Trainers - White/Black - Size 10"
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Description</h4>
                    <p className="text-foreground mb-2">
                      Detailed product description. Include features, materials, and use cases.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Tip:</strong> Avoid promotional language like "Best seller" or "Free shipping"
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Image</h4>
                    <p className="text-foreground mb-2">
                      Main product image. Must be at least 100x100px (250x250 for apparel).
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Requirements:</strong> No watermarks, logos, promotional text, or borders
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Price</h4>
                    <p className="text-foreground mb-2">
                      The price shown must match your product page exactly, including currency.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Note:</strong> Sale prices are supported but must be valid on the landing page
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Availability</h4>
                    <p className="text-foreground mb-2">
                      Stock status: in_stock, out_of_stock, or preorder.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Important:</strong> Must match what's shown on your product page
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Category-Specific Attributes
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Some product categories require additional attributes:
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Apparel:</strong> Gender, age group, colour, size, size_type, size_system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Electronics:</strong> GTIN (barcode), MPN, brand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Variants:</strong> Item_group_id to link colour/size variants</span>
                  </li>
                </ul>
              </section>

              {/* Feed Optimisation */}
              <section id="feed-optimisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Feed Optimisation
                </h2>
                <p className="text-lg text-foreground mb-4">
                  A well-optimised feed gets more impressions and better click-through rates.
                  Here's how to make your products stand out in Google Shopping results.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Title Optimisation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Your title is the most important attribute for matching search queries. Structure
                  it to include the terms shoppers actually search for.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Put the most important keywords first</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Include brand name (especially for branded products)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Add key attributes like colour, size, material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use up to 150 characters (70-100 is ideal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Don't use ALL CAPS or excessive punctuation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Don't include promotional text like "sale" or "free delivery"</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Image Optimisation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Your image is the first thing shoppers notice. High-quality images significantly
                  improve click-through rates.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use high-resolution images (at least 800x800px recommended)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Show the product clearly on a white or light background</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Product should fill 75-90% of the image frame</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Add multiple images using additional_image_link</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Product Type and Google Category
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Setting the correct Google product category helps your products appear in
                  relevant searches and enables category-specific features.
                </p>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use the most specific Google category possible. &quot;Apparel &amp; Accessories &gt; Clothing &gt; Dresses&quot;
                    is better than just &quot;Apparel &amp; Accessories&quot;. The Shopify app assigns categories
                    automatically, but you can override them for better accuracy.
                  </p>
                </div>
              </section>

              {/* Common Disapprovals */}
              <section id="common-disapprovals" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Disapprovals
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Product disapprovals are frustrating but usually fixable. Here are the issues
                  we see most frequently and how to resolve them.
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Price Mismatch
                    </h3>
                    <p className="text-foreground mb-3">
                      The price in your feed doesn't match your product page.
                    </p>
                    <p className="text-foreground mb-2"><strong>Causes:</strong></p>
                    <ul className="space-y-1 text-foreground mb-3">
                      <li>• Sale prices not syncing correctly</li>
                      <li>• Currency conversion issues</li>
                      <li>• Price changes not reflected in feed yet</li>
                    </ul>
                    <p className="text-foreground"><strong>Fix:</strong> Force a resync in the Google & YouTube app. Ensure your Shopify prices are final (no hidden fees added at checkout).</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Missing Identifiers
                    </h3>
                    <p className="text-foreground mb-3">
                      Products need unique identifiers (GTIN/barcode, MPN, or brand).
                    </p>
                    <p className="text-foreground mb-2"><strong>Causes:</strong></p>
                    <ul className="space-y-1 text-foreground mb-3">
                      <li>• Products without barcodes in Shopify</li>
                      <li>• Brand field not filled in</li>
                      <li>• Custom/handmade products without identifiers</li>
                    </ul>
                    <p className="text-foreground"><strong>Fix:</strong> Add barcodes to your Shopify products, or set identifier_exists to "no" for custom items.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Image Quality Issues
                    </h3>
                    <p className="text-foreground mb-3">
                      Images don't meet Google's requirements.
                    </p>
                    <p className="text-foreground mb-2"><strong>Causes:</strong></p>
                    <ul className="space-y-1 text-foreground mb-3">
                      <li>• Images too small (under 100x100px)</li>
                      <li>• Promotional text or watermarks on images</li>
                      <li>• Generic placeholder images</li>
                    </ul>
                    <p className="text-foreground"><strong>Fix:</strong> Upload clean product photos at least 800x800px. Remove any overlaid text or logos.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Policy Violations
                    </h3>
                    <p className="text-foreground mb-3">
                      Products or your site violate Google's Shopping policies.
                    </p>
                    <p className="text-foreground mb-2"><strong>Common issues:</strong></p>
                    <ul className="space-y-1 text-foreground mb-3">
                      <li>• Missing refund or privacy policy pages</li>
                      <li>• Prohibited products (weapons, adult content, etc.)</li>
                      <li>• Misleading claims in descriptions</li>
                    </ul>
                    <p className="text-foreground"><strong>Fix:</strong> Review Google's Shopping policies and ensure your site and products comply. Add any missing policy pages.</p>
                  </div>
                </div>
              </section>

              {/* Performance Max */}
              <section id="performance-max" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Performance Max Campaigns
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Once your products are approved in Merchant Center, you can run paid Shopping
                  campaigns through Google Ads. Performance Max (PMax) is Google's AI-powered
                  campaign type that shows your products across all Google properties.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up PMax from Shopify
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In the Google & YouTube app, go to "Marketing"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click "Create campaign" and select Performance Max</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Connect or create a Google Ads account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Set your daily budget and target ROAS (if known)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Select which products to advertise</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Performance Max Tips</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Start with a reasonable budget</strong> - PMax needs data to learn. Start with at least 50 GBP/day for meaningful results.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Give it time</strong> - Allow 2-4 weeks for the algorithm to optimise before judging performance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Add asset groups</strong> - Include headlines, descriptions, images, and videos for non-Shopping placements.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Segment your products into different asset groups based on margins or
                    categories. This gives you more control over bidding and allows for
                    tailored creative assets.
                  </p>
                </div>
              </section>

              {/* Free Listings */}
              <section id="free-listings" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Free Listings
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Even without paying for ads, your products can appear in Google Shopping through
                  free listings. These appear in the Shopping tab and sometimes in main search
                  results.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Enabling Free Listings
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Free listings are enabled by default when you connect through the Shopify app.
                  To verify:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Google Merchant Center directly (merchants.google.com)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click "Growth" in the left menu, then "Manage programs"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Ensure "Free product listings" shows as Active</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Maximising Free Listing Visibility
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Complete all attributes</strong> - The more data you provide, the more search queries you'll match</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Keep prices competitive</strong> - Free listings prioritise value for shoppers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Maintain good reviews</strong> - Connect Google Customer Reviews for star ratings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Offer fast shipping</strong> - Products with quick delivery get preference</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-google-analytics-4-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Google Analytics 4 Setup</h4>
                      <p className="text-sm text-foreground">Track your store performance</p>
                    </Link>
                    <Link
                      href="/guides/how-to-set-up-google-shopping-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Google Shopping on Shopify</h4>
                      <p className="text-sm text-foreground">Run Shopping ads from your product feed</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Google Shopping?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up your Merchant Center, optimise your product feed, and launch
            profitable Shopping campaigns that drive real revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/shopify-integrations" variant="outline-light" size="lg" icon={false}>
              Our Integration Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
