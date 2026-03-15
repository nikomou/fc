import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Optimise Shopify Images for SEO",
  description:
    "Learn how to optimise your Shopify product and collection images for search engines. Covers alt text, file names, compression, and image sitemaps.",
  alternates: {
    canonical: "/guides/how-to-optimise-shopify-images-for-seo",
  },
  openGraph: {
    title: "How to Optimise Shopify Images for SEO",
    description:
      "Learn how to optimise your Shopify images for search engines and drive traffic from Google Images.",
    url: "/guides/how-to-optimise-shopify-images-for-seo",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-image-seo-matters", title: "Why Image SEO Matters", level: 2 },
  { id: "file-naming-conventions", title: "File Naming Conventions", level: 2 },
  { id: "writing-effective-alt-text", title: "Writing Effective Alt Text", level: 2 },
  { id: "image-compression", title: "Image Compression", level: 2 },
  { id: "responsive-images", title: "Responsive Images", level: 2 },
  { id: "image-sitemaps", title: "Image Sitemaps", level: 2 },
  { id: "structured-data-for-images", title: "Structured Data for Images", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Optimise Shopify Images for SEO",
  description:
    "Learn how to optimise your Shopify images for search engines and drive traffic from Google Images.",
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
    "@id": `${siteConfig.url}/guides/how-to-optimise-shopify-images-for-seo`,
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
      name: "How to Optimise Shopify Images for SEO",
      item: `${siteConfig.url}/guides/how-to-optimise-shopify-images-for-seo`,
    },
  ],
};

export default function ImageSEOGuidePage() {
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
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Optimise Shopify Images for SEO
            </h1>

            <p className="text-xl text-foreground mb-8">
              Images are a significant source of organic traffic for ecommerce stores. This guide
              shows you how to optimise every image on your Shopify store for maximum search visibility.
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
              {/* Why Image SEO Matters */}
              <section id="why-image-seo-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why Image SEO Matters
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Google Images drives billions of searches every day, and for ecommerce stores, it
                  represents a significant opportunity to attract potential customers. When someone
                  searches for "blue leather handbag" in Google Images, properly optimised product
                  images can appear directly in the results, bringing high-intent traffic to your store.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Beyond driving traffic, image SEO is part of the overall user experience. Properly
                  labelled images with good alt text improve accessibility, help screen readers describe
                  your products, and provide context when images fail to load.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Image SEO Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Traffic from Google Images</strong> with high purchase intent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Rich results</strong> with product images in standard search</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Improved accessibility</strong> for users with visual impairments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Better page speed</strong> through proper optimisation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Pinterest traffic</strong> through properly labelled images</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The good news is that most Shopify stores leave significant image SEO opportunities
                  on the table. By implementing the techniques in this guide, you can gain a competitive
                  advantage over stores that upload images without proper optimisation.
                </p>
              </section>

              {/* File Naming Conventions */}
              <section id="file-naming-conventions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  File Naming Conventions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before you even upload an image to Shopify, the file name matters. Google uses file
                  names as one signal to understand what an image depicts. A file named "IMG_3847.jpg"
                  tells Google nothing, while "blue-leather-crossbody-bag.jpg" clearly describes the content.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  File Naming Best Practices
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Use descriptive names:</strong> Include the product name, colour, style, and any other relevant attributes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Use hyphens between words:</strong> Search engines treat hyphens as word separators. "blue-leather-bag" is read as three words.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Avoid underscores:</strong> "blue_leather_bag" may be read as one word by some search engines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Keep it lowercase:</strong> Consistency helps prevent confusion and duplicate content issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span><strong>Include keywords naturally:</strong> Don't stuff keywords, but do include relevant search terms.</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Examples</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">IMG_3847.jpg</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✗</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">product_photo_1.png</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">blue-leather-crossbody-bag-front-view.jpg</code>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <code className="bg-white px-3 py-1 rounded text-sm">mens-cotton-oxford-shirt-navy-small.webp</code>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a consistent naming convention for your team. Include the product name, variant
                    (colour/size), and image type (front, back, detail, lifestyle). This makes images
                    easier to manage and ensures consistency across your catalogue.
                  </p>
                </div>
              </section>

              {/* Writing Effective Alt Text */}
              <section id="writing-effective-alt-text" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Writing Effective Alt Text
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Alt text (alternative text) is the most important image SEO factor you can control
                  in Shopify. It serves multiple purposes: it tells search engines what an image shows,
                  it's read aloud by screen readers for visually impaired users, and it displays when
                  an image fails to load.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  How to Write Great Alt Text
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Describe the image accurately</strong>
                      <p className="text-foreground mt-1">Write what you see. If the image shows a blue handbag being worn with a summer dress, describe that scene.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Include relevant keywords naturally</strong>
                      <p className="text-foreground mt-1">Include your product name and key attributes, but write for humans first, search engines second.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Keep it concise</strong>
                      <p className="text-foreground mt-1">Aim for 125 characters or less. Screen readers may cut off longer text.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Don't start with "Image of" or "Picture of"</strong>
                      <p className="text-foreground mt-1">Screen readers already announce it as an image. Jump straight into the description.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Alt Text Examples</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Product on white background:</strong></p>
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-sm">"bag"</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-sm">"Blue Italian leather crossbody bag with gold hardware"</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Lifestyle image:</strong></p>
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-sm">"model wearing product"</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-sm">"Woman wearing blue leather crossbody bag at outdoor cafe"</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-foreground mb-2"><strong>Detail shot:</strong></p>
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 font-bold">✗</span>
                        <span className="text-sm">"close up"</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-sm">"Gold clasp and stitching detail on blue leather bag"</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Adding Alt Text in Shopify
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Products → select your product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click on the image you want to edit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click "Add alt text" below the image preview</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Enter your descriptive alt text and save</span>
                  </li>
                </ol>
              </section>

              {/* Image Compression */}
              <section id="image-compression" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Image Compression
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Image file size directly affects page load speed, which is both a ranking factor
                  and a conversion factor. Large, uncompressed images are one of the most common
                  causes of slow Shopify stores.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Before Uploading to Shopify
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Always optimise images before uploading. Here's the process:
                </p>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Resize to appropriate dimensions</strong>
                      <p className="text-foreground mt-1">Product images rarely need to be larger than 2048px on the longest side. Resize before compressing.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Choose the right format</strong>
                      <p className="text-foreground mt-1">JPEG for photographs, PNG for graphics with transparency, WebP for best compression (Shopify converts to WebP automatically).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Compress the image</strong>
                      <p className="text-foreground mt-1">Use tools like TinyPNG, Squoosh, or ImageOptim to reduce file size by 60-80% without visible quality loss.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Recommended Tools</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>TinyPNG/TinyJPG:</strong> Web-based, excellent quality, free for up to 20 images at a time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Squoosh:</strong> Google's free tool with advanced options and format conversion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>ImageOptim (Mac):</strong> Desktop app for batch processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>ShortPixel:</strong> WordPress plugin with API, good for bulk processing</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Target File Sizes
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Product images:</strong> 100-200KB maximum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Hero/banner images:</strong> 200-400KB maximum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Thumbnails:</strong> Under 50KB</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Icons and logos:</strong> Under 20KB</span>
                  </li>
                </ul>
              </section>

              {/* Responsive Images */}
              <section id="responsive-images" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Responsive Images
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Different devices need different image sizes. A mobile phone doesn't need a 2000px
                  wide image, and serving one wastes bandwidth and slows page load. Shopify handles
                  much of this automatically through its CDN, but understanding how it works helps
                  you optimise further.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  How Shopify Serves Images
                </h3>
                <p className="text-lg text-foreground mb-4">
                  When you upload an image to Shopify, it's stored on their CDN (Content Delivery Network)
                  and automatically served in multiple sizes. You can request specific sizes by adding
                  parameters to the image URL:
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`Original: /products/blue-bag.jpg
Small:    /products/blue-bag_300x.jpg
Medium:   /products/blue-bag_600x.jpg
Large:    /products/blue-bag_1200x.jpg`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Using srcset in Themes
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Modern Shopify themes use the srcset attribute to serve appropriate image sizes.
                  If you're customising your theme, here's an example:
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`{{ product.featured_image | image_url: width: 600 | image_tag:
    srcset: product.featured_image | image_srcset,
    loading: 'lazy',
    alt: product.featured_image.alt | escape
}}`}
                  </pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Upload the highest quality image you need (typically 2048px wide), and let Shopify
                    generate smaller versions. Don't upload both large and small versions of the same
                    image as this wastes storage and causes confusion.
                  </p>
                </div>
              </section>

              {/* Image Sitemaps */}
              <section id="image-sitemaps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Image Sitemaps
                </h2>
                <p className="text-lg text-foreground mb-4">
                  An image sitemap helps Google discover and index your product images more effectively.
                  Good news: Shopify automatically includes images in your sitemap, but understanding
                  how this works helps you ensure all images are being indexed.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Checking Your Image Sitemap
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>View your sitemap</strong>
                      <p className="text-foreground mt-1">Go to yourstore.com/sitemap.xml to see your main sitemap index.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Check product sitemaps</strong>
                      <p className="text-foreground mt-1">Product sitemaps include image tags for each product's images.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Verify in Search Console</strong>
                      <p className="text-foreground mt-1">Submit your sitemap to Google Search Console and monitor indexed images.</p>
                    </div>
                  </li>
                </ol>

                <p className="text-lg text-foreground mb-4">
                  Shopify includes <code className="bg-gray-100 px-2 py-1 rounded">image:image</code> tags
                  in product sitemap entries. These include the image URL and can include title and caption
                  if your alt text is properly set.
                </p>
              </section>

              {/* Structured Data for Images */}
              <section id="structured-data-for-images" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Structured Data for Images
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Structured data (schema markup) helps Google understand your images in context.
                  For product pages, this means associating images with product information like
                  price, availability, and reviews.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Product Schema with Images
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify themes typically include basic product schema. You can enhance this to
                  include multiple images:
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blue Leather Crossbody Bag",
  "image": [
    "https://store.com/bag-front.jpg",
    "https://store.com/bag-back.jpg",
    "https://store.com/bag-detail.jpg"
  ],
  "description": "Italian leather crossbody bag...",
  "offers": {
    "@type": "Offer",
    "price": "149.00",
    "priceCurrency": "GBP"
  }
}`}
                  </pre>
                </div>

                <p className="text-lg text-foreground mb-4">
                  Including multiple images in your schema markup helps Google understand your
                  complete product presentation, increasing the chances of your images appearing
                  in relevant search results.
                </p>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Image SEO is an ongoing process. Here's how to maintain and improve your image
                  optimisation over time.
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Audit existing images</strong>
                      <p className="text-foreground mt-1">Review your top products and ensure all images have descriptive file names and alt text.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Create an image upload checklist</strong>
                      <p className="text-foreground mt-1">Document your naming conventions and compression workflow for your team.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Monitor Google Images traffic</strong>
                      <p className="text-foreground mt-1">Use Google Search Console to track impressions and clicks from Google Images.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-optimise-shopify-product-images"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Image Guide →</h4>
                      <p className="text-sm text-foreground">Optimise images for conversions</p>
                    </Link>
                    <Link
                      href="/guides/how-to-optimise-shopify-product-pages-for-seo"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Product Pages for SEO →</h4>
                      <p className="text-sm text-foreground">Rank higher with better on-page SEO</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Image SEO?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your store's images and implement comprehensive SEO optimisation
            to drive more traffic from Google Images.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/shopify-seo" variant="outline-light" size="lg" icon={false}>
              Our SEO Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
