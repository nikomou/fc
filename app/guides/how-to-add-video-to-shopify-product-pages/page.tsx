import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Video to Shopify Product Pages",
  description: "Learn how to add video to Shopify product pages. Covers native video upload, embedding YouTube and Vimeo, autoplay, video SEO, and mobile considerations.",
  alternates: { canonical: "/guides/how-to-add-video-to-shopify-product-pages" },
  openGraph: {
    title: "How to Add Video to Shopify Product Pages",
    description: "Learn how to add video to Shopify product pages. Covers native video upload, embedding YouTube and Vimeo, autoplay, video SEO, and mobile considerations.",
    url: "/guides/how-to-add-video-to-shopify-product-pages",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "benefits-of-product-video", title: "Benefits of Product Video", level: 2 },
  { id: "native-shopify-video", title: "Native Shopify Video", level: 2 },
  { id: "embedding-youtube-vimeo", title: "Embedding YouTube and Vimeo", level: 2 },
  { id: "autoplay-and-performance", title: "Autoplay and Performance", level: 2 },
  { id: "video-seo", title: "Video SEO", level: 2 },
  { id: "mobile-considerations", title: "Mobile Considerations", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Video to Shopify Product Pages",
  description: "Learn how to add video to Shopify product pages. Covers native video upload, embedding YouTube and Vimeo, autoplay, video SEO, and mobile considerations.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-video-to-shopify-product-pages` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Video to Shopify Product Pages", item: `${siteConfig.url}/guides/how-to-add-video-to-shopify-product-pages` },
  ],
};

export default function Page() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Theme &amp; Design</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Add Video to Shopify Product Pages</h1>
            <p className="text-xl text-foreground mb-8">Product videos increase conversion rates by 80% on average. Customers who watch a product video are significantly more likely to buy. This guide explains how to add and optimise video on Shopify product pages without slowing down your store.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
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
              <section id="benefits-of-product-video" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Benefits of Product Video</h2>
                <p className="text-lg text-foreground mb-4">Product videos address the biggest limitation of online shopping: customers cannot pick up, touch, or try products. A 30-second video showing how a product works, how it looks in motion, or how to use it answers questions that static images cannot.</p>
                <p className="text-lg text-foreground mb-4">For fashion, video shows how garments move and drape. For furniture, it shows scale. For tech products, it demonstrates features. Brands with strong product video libraries consistently report lower return rates as well as higher conversion rates.</p>

              </section>
              <section id="native-shopify-video" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Native Shopify Video</h2>
                <p className="text-lg text-foreground mb-4">Shopify supports direct video uploads to products. In the product editor, click Add media and upload an MP4 or MOV file. Videos up to 1GB are supported. Uploaded videos are hosted by Shopify and delivered via CDN, so they load quickly without impacting your hosting.</p>
                <p className="text-lg text-foreground mb-4">Keep product videos under 2 minutes. Aim for 30-90 seconds for most product types. Ensure the video is well-lit and shows the product clearly from multiple angles.</p>

              </section>
              <section id="embedding-youtube-vimeo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Embedding YouTube and Vimeo</h2>
                <p className="text-lg text-foreground mb-4">For longer videos or if you have an existing YouTube channel, embed videos in your product description using an iframe. The advantage of YouTube hosting is that your video may also rank in YouTube search results.</p>
                <p className="text-lg text-foreground mb-4">The disadvantage is that YouTube embeds load additional scripts that slow down your page. Use a facade technique: show a static thumbnail image with a play button, and only load the full YouTube iframe when the user clicks play.</p>

              </section>
              <section id="autoplay-and-performance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Autoplay and Performance</h2>
                <p className="text-lg text-foreground mb-4">Autoplay videos can increase engagement when done well. Autoplay without sound is generally accepted by users. Autoplay with sound is intrusive and will harm conversion.</p>
                <p className="text-lg text-foreground mb-4">For performance, use the native Shopify video player rather than embedding external iframes where possible. Defer video loading using the IntersectionObserver API so videos only load when they are scrolled into view.</p>

              </section>
              <section id="video-seo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Video SEO</h2>
                <p className="text-lg text-foreground mb-4">Videos uploaded directly to Shopify can be included in product schema markup. Add VideoObject schema to your product pages to help Google understand and potentially index your video content.</p>
                <p className="text-lg text-foreground mb-4">For YouTube-hosted videos, ensure your video title and description include relevant keywords and a link back to the product page.</p>

              </section>
              <section id="mobile-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Mobile Considerations</h2>
                <p className="text-lg text-foreground mb-4">Over 60% of Shopify traffic is mobile. Ensure your video player is fully responsive and displays correctly on small screens. Native Shopify video handles this automatically. For custom implementations, test across iOS and Android as behaviour varies.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-optimise-shopify-product-images" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Product Images</h4><p className="text-sm text-foreground">Complement video with great images</p></Link>
                    <Link href="/guides/how-to-improve-shopify-checkout-conversion" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Conversion</h4><p className="text-sm text-foreground">Convert more product page visitors</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Add Professional Video to Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">We integrate video players, configure product media layouts, and implement performance-optimised video delivery on Shopify stores.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
