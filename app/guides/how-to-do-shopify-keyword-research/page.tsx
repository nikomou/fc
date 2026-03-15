import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Do Keyword Research for Shopify",
  description:
    "Learn how to do keyword research for your Shopify store. Find product and collection keywords, identify long-tail opportunities, and map keywords to pages.",
  alternates: { canonical: "/guides/how-to-do-shopify-keyword-research" },
  openGraph: {
    title: "How to Do Keyword Research for Shopify",
    description: "A complete guide to keyword research for Shopify stores.",
    url: "/guides/how-to-do-shopify-keyword-research",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-keyword-research-matters", title: "Why Keyword Research Matters", level: 2 },
  { id: "tools-to-use", title: "Tools to Use", level: 2 },
  { id: "finding-product-keywords", title: "Finding Product Keywords", level: 2 },
  { id: "collection-page-keywords", title: "Collection Page Keywords", level: 2 },
  { id: "long-tail-opportunities", title: "Long-Tail Opportunities", level: 2 },
  { id: "mapping-keywords-to-pages", title: "Mapping Keywords to Pages", level: 2 },
  { id: "tracking-rankings", title: "Tracking Rankings", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Do Keyword Research for Shopify",
  description: "Learn how to do keyword research for your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-do-shopify-keyword-research` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Do Keyword Research for Shopify", item: `${siteConfig.url}/guides/how-to-do-shopify-keyword-research` },
  ],
};

export default function KeywordResearchGuidePage() {
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
                <span>18 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Do Keyword Research for Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Keyword research is the foundation of every successful Shopify SEO strategy. Without it, you are guessing which terms your customers use, and guessing rarely ranks. This guide covers a practical process for finding, evaluating, and using keywords across your store.
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

              <section id="why-keyword-research-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Keyword Research Matters</h2>
                <p className="text-lg text-foreground mb-4">
                  Your customers use specific words to search for products. If your pages do not include those words, Google has no reason to show them. Keyword research tells you exactly which terms to use on product pages, collection pages, and blog posts.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For Shopify stores, keyword research is particularly valuable because organic search traffic converts at 3-5x the rate of paid social traffic. A well-optimised product page that ranks on page one can drive consistent revenue for years without ongoing ad spend.
                </p>
                <p className="text-lg text-foreground mb-6">
                  The goal is not just to find the most searched terms, but to find terms you can realistically rank for given your domain authority and competition. A niche keyword with 200 monthly searches where you can rank in the top three is more valuable than a 10,000-search term where you are buried on page five.
                </p>
              </section>

              <section id="tools-to-use" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tools to Use</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Google Search Console (Free)</h4>
                    <p className="text-foreground">Shows the exact queries driving traffic to your existing pages. If you already have a store, start here. Look for keywords where you rank 5-20 and optimise those pages first: quick wins with minimal effort.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Ahrefs or Semrush (Paid)</h4>
                    <p className="text-foreground">Full keyword research suites with UK-specific search volumes, keyword difficulty scores, and competitor keyword data. Ahrefs is preferred by many UK agencies for its accurate UK search volume data. Expect to pay £80-£120 per month for a basic plan.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Google Keyword Planner (Free)</h4>
                    <p className="text-foreground">Requires a Google Ads account, but is free to use for keyword data. Volumes are shown as ranges unless you are running active campaigns, but it is useful for directional research.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Google Autocomplete and Related Searches</h4>
                    <p className="text-foreground">Type your seed keyword into Google and study the autocomplete suggestions and related searches at the bottom of the page. These are real queries from real users and are excellent for finding long-tail variations.</p>
                  </div>
                </div>
              </section>

              <section id="finding-product-keywords" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Finding Product Keywords</h2>
                <p className="text-lg text-foreground mb-4">
                  Product page keywords should be specific and transactional. A customer searching &quot;buy leather wallet UK&quot; is much closer to purchasing than someone searching &quot;types of wallets&quot;.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Start with your product name and add modifiers: material, colour, size, use case, price range, and location. For a leather wallet, seed keywords might be: &quot;men&apos;s leather bifold wallet UK&quot;, &quot;personalised leather wallet&quot;, &quot;slim leather card wallet&quot;.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Check competitor product pages for keyword ideas. Look at brands ranking for your target terms and study their product titles, headings, and meta descriptions. Tools like Ahrefs show which keywords a specific URL ranks for.
                </p>
              </section>

              <section id="collection-page-keywords" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Collection Page Keywords</h2>
                <p className="text-lg text-foreground mb-4">
                  Collection pages are your highest-value SEO pages. They rank for broader category terms that drive significant traffic. A collection page for &quot;men&apos;s leather wallets&quot; can rank for dozens of related terms simultaneously.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Target head terms and category-level keywords for collection pages. Think: what would someone type if they were browsing a category rather than looking for a specific product? &quot;Leather wallets for men&quot;, &quot;luxury wallets UK&quot;, and &quot;best leather wallets&quot; are all collection-level terms.
                </p>
              </section>

              <section id="long-tail-opportunities" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Long-Tail Opportunities</h2>
                <p className="text-lg text-foreground mb-4">
                  Long-tail keywords are three or more words, typically lower volume but higher intent. A search for &quot;personalised tan leather bifold wallet gift for dad&quot; has very low volume but extremely high intent. The person searching that knows exactly what they want.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Long-tail keywords are particularly valuable for new stores with low domain authority. Instead of competing for &quot;leather wallet&quot; against established brands, target specific long-tail terms where competition is minimal.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Blog content is ideal for long-tail keywords. A post titled &quot;The Best Leather Wallets for Men in 2025&quot; can rank for multiple long-tail variations and drive collection page traffic via internal links.
                </p>
              </section>

              <section id="mapping-keywords-to-pages" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Mapping Keywords to Pages</h2>
                <p className="text-lg text-foreground mb-4">
                  Each page on your store should target one primary keyword and 3-5 secondary keywords. Never target the same keyword on multiple pages: this causes cannibalisation where pages compete against each other.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Create a simple spreadsheet with URL, primary keyword, secondary keywords, and current ranking. This is your keyword map. Review it monthly and update page content when rankings change.
                </p>
              </section>

              <section id="tracking-rankings" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking Rankings</h2>
                <p className="text-lg text-foreground mb-4">
                  Track keyword rankings weekly using a rank tracking tool. Ahrefs, Semrush, and standalone tools like SERPWatcher all offer this. Set up alerts for significant ranking changes so you can respond quickly to drops.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Supplement rank tracking with Google Search Console impressions and clicks data. A page that is ranking but not getting clicks has a title and meta description problem, not a ranking problem.
                </p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-optimise-shopify-product-pages-for-seo" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Optimise Product Pages for SEO</h4>
                      <p className="text-sm text-foreground">Apply your keyword research</p>
                    </Link>
                    <Link href="/guides/how-to-fix-shopify-duplicate-content" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Fix Duplicate Content</h4>
                      <p className="text-sm text-foreground">Prevent keyword cannibalisation</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want an SEO Strategy Built for Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our SEO team conducts full keyword research audits, builds keyword maps, and implements on-page optimisation across your entire Shopify store.
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
