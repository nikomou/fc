import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Translate Your Shopify Store",
  description:
    "Complete guide to making your Shopify store multilingual. Learn about translation apps, Shopify Markets, language selectors, and SEO considerations for international stores.",
  alternates: {
    canonical: "/guides/how-to-translate-your-shopify-store",
  },
  openGraph: {
    title: "How to Translate Your Shopify Store",
    description: "Complete guide to making your Shopify store multilingual.",
    url: "/guides/how-to-translate-your-shopify-store",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-translate", title: "Why Translate Your Store", level: 2 },
  { id: "shopify-markets", title: "Using Shopify Markets", level: 2 },
  { id: "translation-apps", title: "Translation Apps", level: 2 },
  { id: "manual-translations", title: "Manual Translations", level: 2 },
  { id: "language-selector", title: "Language Selector Setup", level: 2 },
  { id: "seo-considerations", title: "SEO Considerations", level: 2 },
  { id: "testing-translations", title: "Testing Your Translations", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Translate Your Shopify Store",
  description: "Complete guide to making your Shopify store multilingual.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-translate-your-shopify-store` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Translate Your Shopify Store", item: `${siteConfig.url}/guides/how-to-translate-your-shopify-store` },
  ],
};

export default function TranslateShopifyStoreGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">International</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Translate Your Shopify Store
            </h1>

            <p className="text-xl text-foreground mb-8">
              Expanding into international markets requires a properly translated store. This guide covers everything from native Shopify features to third-party apps and SEO best practices.
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

              <section id="why-translate" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Translate Your Store</h2>
                <p className="text-lg text-foreground mb-4">
                  Research consistently shows that customers prefer to shop in their native language. A study by CSA Research found that 76% of online shoppers prefer to buy products with information in their own language, and 40% will never buy from websites in other languages.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Translation is not just about accessibility. It directly impacts your conversion rates, average order value, and customer trust. A localised shopping experience signals that you understand and value your international customers.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Benefits of Translation</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Higher conversion rates</strong> in target markets, often 2-3x improvement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Improved SEO</strong> in local search engines and Google regional domains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reduced support queries</strong> when customers can self-serve in their language</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Competitive advantage</strong> over merchants who only offer English</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="shopify-markets" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Using Shopify Markets</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Markets is the native solution for managing international selling, including languages and currencies. It provides a centralised dashboard for all your international configurations.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Setting Up Markets</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Access Markets</strong>
                      <p className="text-foreground mt-1">Go to Settings → Markets in your Shopify admin. You&apos;ll see your primary market (usually your home country) already configured.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Add New Markets</strong>
                      <p className="text-foreground mt-1">Click &quot;Add market&quot; and select the countries or regions you want to target. You can group similar countries together or create individual markets.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Languages</strong>
                      <p className="text-foreground mt-1">For each market, add the relevant languages. Shopify supports over 20 languages natively, including right-to-left languages like Arabic and Hebrew.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Set Up Subfolders</strong>
                      <p className="text-foreground mt-1">Enable subfolders (e.g., /fr/ for French, /de/ for German) to create separate URLs for each language, which is essential for SEO.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Shopify Markets Pro</h4>
                  <p className="text-foreground">
                    For advanced international needs, Shopify Markets Pro (powered by Global-e) handles duties, taxes, and compliance automatically. It&apos;s available on Shopify Plus and higher-tier plans.
                  </p>
                </div>
              </section>

              <section id="translation-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Translation Apps</h2>
                <p className="text-lg text-foreground mb-4">
                  While Shopify provides basic translation functionality, dedicated apps offer more features, better workflows, and higher quality translations.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Weglot</h3>
                    <p className="text-foreground mb-2">The most popular translation app for Shopify. Weglot automatically detects and translates all content, including dynamic elements and checkout.</p>
                    <p className="text-sm text-foreground"><strong>Best for:</strong> Quick setup, automatic translations, SEO-focused stores</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Langify</h3>
                    <p className="text-foreground mb-2">A more affordable option that integrates directly with Shopify&apos;s translation system. Requires more manual work but offers greater control.</p>
                    <p className="text-sm text-foreground"><strong>Best for:</strong> Budget-conscious stores, manual translation workflows</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Translate &amp; Adapt (Shopify)</h3>
                    <p className="text-foreground mb-2">Shopify&apos;s free translation app. It handles basic translations and works well with Shopify Markets. Limited compared to paid alternatives.</p>
                    <p className="text-sm text-foreground"><strong>Best for:</strong> Simple stores, testing international expansion</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">AI vs Human Translation</h3>
                  <p className="text-foreground mb-4">
                    Most apps use AI (like Google Translate or DeepL) for initial translations. While AI has improved dramatically, we recommend human review for:
                  </p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Product descriptions and marketing copy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Legal pages (terms, privacy policy, returns)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Brand voice and taglines</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="manual-translations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Manual Translations</h2>
                <p className="text-lg text-foreground mb-4">
                  For complete control over your translations, you can manage them manually through Shopify&apos;s built-in translation editor.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Accessing the Translation Editor</h3>
                <p className="text-lg text-foreground mb-4">
                  Navigate to Settings → Languages in your Shopify admin. Select a language and click &quot;Translate&quot; to access the editor. You can translate content by resource type:
                </p>

                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Products:</strong> Titles, descriptions, variants, and metafields</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Collections:</strong> Collection names and descriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Pages:</strong> All custom pages and their content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Blog posts:</strong> Article titles, content, and excerpts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Navigation:</strong> Menu items and link text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Theme content:</strong> Buttons, labels, and static text</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Bulk Import/Export</h4>
                  <p className="text-foreground">
                    For large catalogues, export translations as CSV files, translate them externally (using professional translators or translation management systems), then import them back. This is much faster than translating item by item.
                  </p>
                </div>
              </section>

              <section id="language-selector" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Language Selector Setup</h2>
                <p className="text-lg text-foreground mb-4">
                  A clear, accessible language selector helps visitors switch to their preferred language. Most modern Shopify themes include a built-in selector, but you may need to customise it.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Placement Best Practices</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Header:</strong> Top right corner is the standard location, often combined with currency selector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Footer:</strong> Include a secondary selector in the footer for users who scroll</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Use flags with caution:</strong> Flags represent countries, not languages. Spanish is spoken in many countries, so a Spain flag can confuse Latin American visitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Show language names in their native form:</strong> Display &quot;Deutsch&quot; not &quot;German&quot;, &quot;Fran&ccedil;ais&quot; not &quot;French&quot;</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Auto-Detection</h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify Markets can automatically detect a visitor&apos;s location and suggest the appropriate language and currency. Enable this in Markets settings, but always provide a manual override option.
                </p>
              </section>

              <section id="seo-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">SEO Considerations</h2>
                <p className="text-lg text-foreground mb-4">
                  Proper multilingual SEO ensures each language version of your store ranks well in local search results. Get this wrong, and you may cannibalise your own rankings.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">URL Structure</h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify uses subfolders by default (yourstore.com/fr/, yourstore.com/de/). This is the recommended approach for most stores as it consolidates domain authority.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Hreflang Tags</h3>
                <p className="text-lg text-foreground mb-4">
                  Hreflang tags tell search engines which language version of a page to show to users. Shopify automatically generates these when you use Markets with subfolders enabled.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Verify Your Hreflang Tags</h4>
                  <p className="text-foreground">
                    Use Google Search Console or a tool like Ahrefs to verify hreflang tags are implemented correctly. Common issues include missing self-referencing tags, incorrect language codes, and non-reciprocal links.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Translated Meta Data</h3>
                <p className="text-lg text-foreground mb-4">
                  Ensure your page titles, meta descriptions, and alt text are translated for each language. This is often overlooked but crucial for ranking in local search results.
                </p>
              </section>

              <section id="testing-translations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Your Translations</h2>
                <p className="text-lg text-foreground mb-4">
                  Before launching, thoroughly test your translated store to catch errors and ensure a smooth experience for international customers.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Navigation flow</h3>
                    <p className="text-foreground">Browse your store as a customer would. Check that all navigation items, buttons, and links are properly translated and functional.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Checkout process</h3>
                    <p className="text-foreground">Complete a test purchase in each language. Verify that the checkout, payment screens, and confirmation emails are all translated.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Email notifications</h3>
                    <p className="text-foreground">Test that order confirmations, shipping updates, and other automated emails are sent in the customer&apos;s language.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Native speaker review</h3>
                    <p className="text-foreground">Have a native speaker review key pages. They can catch awkward phrasing, cultural missteps, and errors that automated tools miss.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Complete pre-launch guide</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-b2b" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">B2B Setup Guide →</h4>
                      <p className="text-sm text-foreground">Wholesale and trade accounts</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Going International?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up your multilingual store, configure Shopify Markets, and ensure your translations are optimised for conversions and SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
