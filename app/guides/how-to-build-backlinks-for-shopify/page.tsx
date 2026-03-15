import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Build Backlinks for Your Shopify Store",
  description:
    "Learn proven backlink strategies for Shopify stores. Covers content-led link building, supplier links, PR outreach, broken link building, and monitoring.",
  alternates: { canonical: "/guides/how-to-build-backlinks-for-shopify" },
  openGraph: {
    title: "How to Build Backlinks for Your Shopify Store",
    description: "Proven backlink building strategies for Shopify ecommerce stores.",
    url: "/guides/how-to-build-backlinks-for-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-backlinks-matter", title: "Why Backlinks Matter", level: 2 },
  { id: "content-led-link-building", title: "Content-Led Link Building", level: 2 },
  { id: "supplier-and-partner-links", title: "Supplier and Partner Links", level: 2 },
  { id: "pr-and-digital-outreach", title: "PR and Digital Outreach", level: 2 },
  { id: "broken-link-building", title: "Broken Link Building", level: 2 },
  { id: "internal-linking", title: "Internal Linking", level: 2 },
  { id: "monitoring-backlinks", title: "Monitoring Backlinks", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Build Backlinks for Your Shopify Store",
  description: "Proven backlink building strategies for Shopify stores.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-build-backlinks-for-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Build Backlinks for Your Shopify Store", item: `${siteConfig.url}/guides/how-to-build-backlinks-for-shopify` },
  ],
};

export default function BacklinksGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">SEO &amp; Search</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Build Backlinks for Your Shopify Store
            </h1>
            <p className="text-xl text-foreground mb-8">
              Backlinks from other websites remain one of the strongest ranking signals in Google&apos;s algorithm. This guide covers practical, sustainable link building strategies for Shopify merchants, from quick wins to long-term authority building.
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

              <section id="why-backlinks-matter" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Backlinks Matter</h2>
                <p className="text-lg text-foreground mb-4">
                  Google treats backlinks as votes of confidence. A link from a trusted, relevant website tells Google your content is credible and worth ranking. Without backlinks, even the best-optimised Shopify store will struggle to rank for competitive terms.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Not all backlinks are equal. A single link from a relevant industry publication with high domain authority is worth more than 100 links from low-quality directories. Focus on quality over quantity.
                </p>
                <p className="text-lg text-foreground mb-6">
                  For most UK ecommerce brands, a domain rating (DR) of 30-50 puts you in a competitive position for mid-tail keywords. Getting from DR 10 to DR 30 is achievable within 12-18 months with consistent link building.
                </p>
              </section>

              <section id="content-led-link-building" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Content-Led Link Building</h2>
                <p className="text-lg text-foreground mb-4">
                  The most sustainable link building strategy is creating genuinely useful content that people naturally want to link to. This is slower than outreach-heavy approaches but builds lasting authority.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For ecommerce brands, high-performing linkable assets include: original research and survey data, comprehensive buying guides, free tools and calculators, infographics with proprietary data, and detailed how-to guides.
                </p>
                <p className="text-lg text-foreground mb-4">
                  A candle brand might publish a &quot;UK Candle Market Report&quot; with data from their own sales. A running equipment store might create a &quot;UK Running Routes Database&quot;. These earn links from journalists, bloggers, and other brands in the space.
                </p>
              </section>

              <section id="supplier-and-partner-links" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Supplier and Partner Links</h2>
                <p className="text-lg text-foreground mb-4">
                  One of the quickest backlink wins for new stores is getting links from your suppliers and brand partners. Most manufacturers have a &quot;Where to buy&quot; or &quot;Stockists&quot; page. Ask to be listed.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Similarly, if you are an official distributor or certified retailer for a brand, their website should link to you. Contact their wholesale or partnership teams and request to be added to their retailer directory.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Business partnerships, co-marketing campaigns, and joint guides with complementary brands are another reliable link source. A running shoe brand partnering with a nutrition supplement brand for a guide is natural and earns links from both audiences.
                </p>
              </section>

              <section id="pr-and-digital-outreach" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">PR and Digital Outreach</h2>
                <p className="text-lg text-foreground mb-4">
                  Digital PR means pitching journalists, bloggers, and content creators with genuinely newsworthy stories or useful expert contributions. A successful digital PR campaign can earn dozens of high-authority links from a single story.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Effective angles for UK ecommerce brands include: trend data from your own sales, expert commentary on industry news, original research, charity partnerships, and product launches that solve a genuine problem. Use a service like HARO (Help a Reporter Out) or ResponseSource to find journalists actively seeking expert quotes.
                </p>
              </section>

              <section id="broken-link-building" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Broken Link Building</h2>
                <p className="text-lg text-foreground mb-4">
                  Broken link building involves finding pages in your niche that link to dead URLs, then suggesting your own content as a replacement. It is effective because you are helping the linking site fix a problem.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Use Ahrefs&apos; broken links report to find broken pages being linked to from relevant sites. Create or repurpose content that matches what the original page covered, then reach out to sites linking to the dead page with your replacement suggestion.
                </p>
              </section>

              <section id="internal-linking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Internal Linking</h2>
                <p className="text-lg text-foreground mb-4">
                  Internal linking passes authority between your own pages and helps Google understand your site structure. Every new blog post should link to at least 3-5 relevant product or collection pages. Every collection page should link to sub-categories and related collections.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Use descriptive anchor text rather than generic &quot;click here&quot; links. &quot;Browse our leather wallets&quot; tells Google what the destination page is about, which supports that page&apos;s rankings.
                </p>
              </section>

              <section id="monitoring-backlinks" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Monitoring Backlinks</h2>
                <p className="text-lg text-foreground mb-4">
                  Set up backlink monitoring in Ahrefs or Google Search Console. New backlinks take 2-8 weeks to impact rankings, so monitoring helps you correlate link building activities with ranking changes.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Also watch for toxic backlinks from spammy directories or irrelevant sites. While Google is generally good at ignoring them, a sudden influx of low-quality links can trigger manual review. Disavow persistent problem links via Google Search Console.
                </p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-do-shopify-keyword-research" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Keyword Research</h4>
                      <p className="text-sm text-foreground">Find keywords to target with content</p>
                    </Link>
                    <Link href="/guides/how-to-optimise-shopify-product-pages-for-seo" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Product Pages for SEO</h4>
                      <p className="text-sm text-foreground">On-page SEO fundamentals</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need an SEO and Link Building Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team builds sustainable backlink strategies for Shopify stores, combining content, PR, and technical SEO for lasting organic growth.
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
