import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use Lazy Loading on Shopify",
  description: "Learn how to implement lazy loading on Shopify for faster page loads. Covers native lazy loading, images, sections, and testing your implementation.",
  alternates: { canonical: "/guides/how-to-use-shopify-lazy-loading" },
  openGraph: {
    title: "How to Use Lazy Loading on Shopify",
    description: "Implement lazy loading on Shopify to improve speed and Core Web Vitals.",
    url: "/guides/how-to-use-shopify-lazy-loading",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-lazy-loading", title: "What Is Lazy Loading?", level: 2 },
  { id: "native-lazy-loading", title: "Native Lazy Loading", level: 2 },
  { id: "lazy-loading-images", title: "Lazy Loading Images", level: 2 },
  { id: "lazy-loading-sections", title: "Lazy Loading Sections", level: 2 },
  { id: "third-party-lazy-loading", title: "Third-Party Libraries", level: 2 },
  { id: "testing-lazy-loading", title: "Testing Lazy Loading", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Lazy Loading on Shopify",
  description: "Implement lazy loading on Shopify for better performance.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-use-shopify-lazy-loading` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Use Lazy Loading on Shopify", item: `${siteConfig.url}/guides/how-to-use-shopify-lazy-loading` },
  ],
};

export default function LazyLoadingGuidePage() {
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
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Use Lazy Loading on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Lazy loading defers loading images and sections until they are needed, dramatically reducing initial page load time. This guide explains how to implement it correctly in your Shopify theme.
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

              <section id="what-is-lazy-loading" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Lazy Loading?</h2>
                <p className="text-lg text-foreground mb-4">
                  Lazy loading is a technique where resources (typically images) are not loaded until they are about to enter the browser&apos;s viewport. Instead of downloading all images on a page as soon as it loads, the browser only downloads images as the user scrolls down towards them.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For a typical Shopify collection page with 48 products, only 6-8 products are visible above the fold. Without lazy loading, all 48 product images download immediately. With lazy loading, only the visible images download first, with the rest loading on demand as the user scrolls.
                </p>
              </section>

              <section id="native-lazy-loading" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Native Lazy Loading</h2>
                <p className="text-lg text-foreground mb-4">
                  Modern browsers support native lazy loading via the loading attribute on img elements. Adding loading="lazy" to an image tag tells the browser to defer loading that image until it is near the viewport. No JavaScript required.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Browser support is excellent: Chrome, Firefox, Safari, and Edge all support it. This means you do not need a JavaScript lazy loading library for basic image lazy loading on modern Shopify stores.
                </p>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Never Lazy Load Above-the-Fold Images</h4>
                  <p className="text-foreground">Images visible without scrolling (above the fold) should never have loading="lazy". This delays the Largest Contentful Paint (LCP) metric, which directly impacts your Core Web Vitals score. Only apply lazy loading to images that are off-screen on initial load.</p>
                </div>
              </section>

              <section id="lazy-loading-images" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Lazy Loading Images</h2>
                <p className="text-lg text-foreground mb-4">
                  In Shopify themes, images are typically output using Liquid image tags. To add native lazy loading, find your image snippets in your theme and add the loading attribute.
                </p>
                <p className="text-lg text-foreground mb-4">
                  In most Dawn-based themes, product card images already have lazy loading. Check by inspecting a collection page image in Chrome DevTools and looking for the loading="lazy" attribute. If it is missing, add it to your product card snippet.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Section images like banners, testimonial photos, and logo grids should also have lazy loading added if they appear below the fold. Hero images should always load eagerly.
                </p>
              </section>

              <section id="lazy-loading-sections" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Lazy Loading Sections</h2>
                <p className="text-lg text-foreground mb-4">
                  Beyond images, entire theme sections can be deferred. Shopify&apos;s Dawn theme introduced section rendering API support, which allows sections to be loaded asynchronously. Some themes use IntersectionObserver to load section content only when it enters the viewport.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For sections that contain heavy content (video embeds, Instagram feeds, review carousels), deferring their initialisation until they are scrolled into view can significantly reduce initial load time.
                </p>
              </section>

              <section id="third-party-lazy-loading" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Third-Party Libraries</h2>
                <p className="text-lg text-foreground mb-4">
                  If you need lazy loading for older browser support or more advanced features, Lazysizes is the most widely used JavaScript lazy loading library. It is lightweight (3KB), well-maintained, and works with Shopify&apos;s responsive image syntax.
                </p>
                <p className="text-lg text-foreground mb-4">
                  However, with native lazy loading now widely supported, adding Lazysizes adds unnecessary JavaScript overhead. Only use it if you specifically need features not available natively, such as lazy loading background images.
                </p>
              </section>

              <section id="testing-lazy-loading" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Lazy Loading</h2>
                <p className="text-lg text-foreground mb-4">
                  To verify lazy loading is working, open Chrome DevTools, go to the Network tab, filter by images, and reload the page. You should see only above-the-fold images loading initially. As you scroll down, additional images should appear in the network log.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Run PageSpeed Insights before and after implementation. Look for improvements in Total Byte Weight, Largest Contentful Paint, and the &quot;Defer offscreen images&quot; recommendation.
                </p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-reduce-shopify-javascript" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Reduce JavaScript</h4>
                      <p className="text-sm text-foreground">Reduce JS bloat alongside lazy loading</p>
                    </Link>
                    <Link href="/guides/how-to-optimise-shopify-product-images" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Product Images</h4>
                      <p className="text-sm text-foreground">Reduce image file sizes</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want a Faster Store?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our performance specialists implement lazy loading, image optimisation, and JavaScript reduction to achieve significant speed improvements on Shopify stores.
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
