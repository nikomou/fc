import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Optimise Shopify Product Images",
  description:
    "Learn how to optimise product images for faster loading, better SEO, and higher conversions. Covers file formats, compression, alt text, and lazy loading.",
  alternates: {
    canonical: "/guides/how-to-optimise-shopify-product-images",
  },
  openGraph: {
    title: "How to Optimise Shopify Product Images",
    description: "Learn how to optimise product images for faster loading, better SEO, and higher conversions.",
    url: "/guides/how-to-optimise-shopify-product-images",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-image-optimisation-matters", title: "Why Image Optimisation Matters", level: 2 },
  { id: "file-formats", title: "File Formats", level: 2 },
  { id: "image-compression", title: "Image Compression", level: 2 },
  { id: "image-dimensions", title: "Image Dimensions", level: 2 },
  { id: "alt-text-seo", title: "Alt Text for SEO", level: 2 },
  { id: "file-naming", title: "File Naming", level: 2 },
  { id: "lazy-loading", title: "Lazy Loading", level: 2 },
  { id: "shopify-cdn", title: "Shopify CDN", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Optimise Shopify Product Images",
  description: "Learn how to optimise product images for faster loading, better SEO, and higher conversions.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-optimise-shopify-product-images` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Optimise Shopify Product Images", item: `${siteConfig.url}/guides/how-to-optimise-shopify-product-images` },
  ],
};

export default function OptimiseProductImagesGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Performance</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Optimise Shopify Product Images
            </h1>

            <p className="text-xl text-foreground mb-8">
              Images are essential for ecommerce, but unoptimised images slow down your store. This guide shows you how to balance quality with performance for faster pages and better SEO.
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

              <section id="why-image-optimisation-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Image Optimisation Matters</h2>
                <p className="text-lg text-foreground mb-4">
                  Product images are typically the largest files on your Shopify store. A single unoptimised image can be several megabytes, while an optimised version of the same image might be under 100KB with no visible quality loss.
                </p>
                <p className="text-lg text-foreground mb-6">
                  This matters because page load time directly affects both user experience and search rankings. Google uses page speed as a ranking factor, and studies show that conversion rates drop significantly as pages take longer to load.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The Impact of Page Speed</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>1-second delay</strong> reduces conversions by approximately 7%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>40% of visitors</strong> abandon sites that take more than 3 seconds to load</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Images account for 50-70%</strong> of total page weight on average ecommerce sites</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Core Web Vitals</strong> (Google&apos;s speed metrics) include image loading as a key factor</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">The Good News</h4>
                  <p className="text-foreground">
                    Image optimisation is one of the easiest and most impactful speed improvements you can make. Even basic optimisation can reduce page load times by 50% or more.
                  </p>
                </div>
              </section>

              <section id="file-formats" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">File Formats</h2>
                <p className="text-lg text-foreground mb-4">
                  Choosing the right file format is the first step in image optimisation. Different formats are suited to different types of images.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">JPEG (.jpg)</h3>
                    <p className="text-foreground mb-2">Best for photographs and complex images with many colours and gradients.</p>
                    <p className="text-sm text-foreground"><strong>Use for:</strong> Product photos, lifestyle images, backgrounds</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">PNG (.png)</h3>
                    <p className="text-foreground mb-2">Best for images requiring transparency or sharp edges like logos and graphics.</p>
                    <p className="text-sm text-foreground"><strong>Use for:</strong> Logos, icons, graphics with transparency, screenshots</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">WebP (.webp)</h3>
                    <p className="text-foreground mb-2">Modern format offering better compression than JPEG and PNG with similar quality. Supported by all modern browsers.</p>
                    <p className="text-sm text-foreground"><strong>Use for:</strong> Any image where browser support allows. Shopify automatically serves WebP when available.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">AVIF (.avif)</h3>
                    <p className="text-foreground mb-2">Newest format with even better compression than WebP. Browser support is growing rapidly.</p>
                    <p className="text-sm text-foreground"><strong>Note:</strong> Shopify&apos;s CDN will serve AVIF to supporting browsers automatically.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Format Recommendation</h4>
                  <p className="text-foreground">
                    Upload high-quality JPEG or PNG files to Shopify. The platform&apos;s CDN will automatically convert and serve WebP or AVIF to browsers that support them, giving you the best of both worlds.
                  </p>
                </div>
              </section>

              <section id="image-compression" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Image Compression</h2>
                <p className="text-lg text-foreground mb-4">
                  Compression reduces file size by removing unnecessary data from images. There are two types: lossy (removes some quality) and lossless (preserves all quality).
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Compression Tools</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>TinyPNG/TinyJPG</strong> (free online tool for quick compression)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Squoosh</strong> (Google&apos;s free tool with advanced controls)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>ImageOptim</strong> (Mac app for batch compression)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Shopify apps</strong> like Crush.pics or TinyIMG for automatic optimisation</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Quality Settings</h3>
                <p className="text-lg text-foreground mb-4">
                  For product images, a JPEG quality setting of 80-85% typically provides an excellent balance between file size and visual quality. Most viewers cannot distinguish between 85% and 100% quality.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-4">Target File Sizes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-foreground">Product thumbnails</span>
                      <span className="font-semibold text-foreground-dark">Under 30KB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Product images (main)</span>
                      <span className="font-semibold text-foreground-dark">Under 150KB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Hero/banner images</span>
                      <span className="font-semibold text-foreground-dark">Under 200KB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Collection header images</span>
                      <span className="font-semibold text-foreground-dark">Under 150KB</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="image-dimensions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Image Dimensions</h2>
                <p className="text-lg text-foreground mb-4">
                  Uploading images at the correct dimensions prevents unnecessary scaling and ensures sharp display on all devices.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Recommended Dimensions</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Product Images</h4>
                    <p className="text-foreground">2048 x 2048 pixels (square) is Shopify&apos;s recommendation. This provides enough resolution for zoom functionality whilst being manageable in file size.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Collection Images</h4>
                    <p className="text-foreground">1920 x 1080 pixels for header/banner images. Maintain aspect ratio consistency across collections.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Homepage Hero</h4>
                    <p className="text-foreground">1920 x 1080 pixels or your theme&apos;s recommended dimensions. Check your theme documentation for specific requirements.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Consistency Matters</h4>
                  <p className="text-foreground">
                    Use consistent dimensions and aspect ratios across all product images. Inconsistent sizes create visual jarring in collection grids and can cause layout shifts that hurt Core Web Vitals scores.
                  </p>
                </div>
              </section>

              <section id="alt-text-seo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Alt Text for SEO</h2>
                <p className="text-lg text-foreground mb-4">
                  Alt text describes images for search engines and screen readers. It is one of the most overlooked SEO opportunities in ecommerce.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Writing Effective Alt Text</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Be Descriptive and Specific</strong>
                      <p className="text-foreground mt-1">Describe what is actually in the image. &quot;Blue cotton Oxford shirt front view&quot; is better than &quot;shirt&quot;.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Include Product Details</strong>
                      <p className="text-foreground mt-1">Include colour, material, style, and other relevant details that someone might search for.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Keep It Under 125 Characters</strong>
                      <p className="text-foreground mt-1">Screen readers may cut off longer alt text. Be concise whilst remaining descriptive.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Avoid Keyword Stuffing</strong>
                      <p className="text-foreground mt-1">Write for humans first. Natural descriptions that include relevant keywords perform best.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-4">Alt Text Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-red-500 text-sm">Bad:</span>
                      <p className="text-foreground">&quot;Product image&quot;</p>
                    </div>
                    <div>
                      <span className="text-red-500 text-sm">Also bad:</span>
                      <p className="text-foreground">&quot;Blue shirt men&apos;s shirt blue Oxford shirt cotton shirt&quot;</p>
                    </div>
                    <div>
                      <span className="text-green-500 text-sm">Good:</span>
                      <p className="text-foreground">&quot;Men&apos;s blue cotton Oxford shirt with button-down collar, front view&quot;</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="file-naming" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">File Naming</h2>
                <p className="text-lg text-foreground mb-4">
                  Search engines use image file names as a ranking signal for image search. Descriptive file names help your products appear in Google Images results.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">File Naming Best Practices</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Use hyphens to separate words (not underscores or spaces)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Include the product name and key descriptors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Keep names lowercase for consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Avoid generic names like &quot;IMG_001.jpg&quot; or &quot;photo.png&quot;</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-4">File Name Examples</h4>
                  <div className="space-y-2">
                    <p className="text-foreground"><span className="text-red-500">Bad:</span> IMG_2847.jpg, product.jpg, 1.png</p>
                    <p className="text-foreground"><span className="text-green-500">Good:</span> blue-oxford-shirt-front.jpg, mens-leather-wallet-brown.jpg</p>
                  </div>
                </div>
              </section>

              <section id="lazy-loading" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Lazy Loading</h2>
                <p className="text-lg text-foreground mb-4">
                  Lazy loading defers the loading of images until they are about to enter the viewport. This significantly speeds up initial page load, especially on pages with many images like collection pages.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">How Lazy Loading Works</h3>
                <p className="text-lg text-foreground mb-4">
                  Instead of loading all images when the page loads, lazy loading only loads images as the user scrolls towards them. Images below the fold load just before they become visible.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Native Lazy Loading</h4>
                  <p className="text-foreground">
                    Most modern Shopify themes support native browser lazy loading using the loading=&quot;lazy&quot; attribute. Check your theme settings or contact your developer to ensure it is enabled.
                  </p>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Important Note</h4>
                  <p className="text-foreground">
                    Do not lazy load images above the fold (visible without scrolling). Your hero image and first few product images should load immediately to prevent layout shift and ensure fast Largest Contentful Paint scores.
                  </p>
                </div>
              </section>

              <section id="shopify-cdn" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify CDN</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify automatically serves your images through its global Content Delivery Network (CDN). This means images are delivered from servers geographically close to your customers, reducing load times.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Automatic Optimisations</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Format conversion:</strong> WebP and AVIF served to supporting browsers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Responsive sizing:</strong> Images resized to match display size</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Caching:</strong> Images cached at edge servers worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Compression:</strong> Basic compression applied automatically</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-optimise-shopify-images-for-seo" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Images for SEO →</h4>
                      <p className="text-sm text-foreground">Improve image alt text and file names for search</p>
                    </Link>
                    <Link href="/guides/how-to-optimise-shopify-product-pages-for-seo" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Page SEO →</h4>
                      <p className="text-sm text-foreground">Optimise your product pages</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Speed Optimisation Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your store&apos;s performance, optimise your images and code, and implement best practices to improve your Core Web Vitals scores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-speed-optimization" variant="outline-light" size="lg" icon={false}>Our Speed Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
