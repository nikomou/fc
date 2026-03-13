import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Write Product Descriptions That Sell",
  description:
    "Learn how to write compelling product descriptions that convert browsers into buyers. Covers copywriting techniques, SEO optimisation, and formatting best practices.",
  alternates: {
    canonical: "/guides/how-to-write-product-descriptions-that-sell",
  },
  openGraph: {
    title: "How to Write Product Descriptions That Sell",
    description: "Learn how to write compelling product descriptions that convert browsers into buyers.",
    url: "/guides/how-to-write-product-descriptions-that-sell",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-descriptions-matter", title: "Why Descriptions Matter", level: 2 },
  { id: "know-your-customer", title: "Know Your Customer", level: 2 },
  { id: "features-vs-benefits", title: "Features vs Benefits", level: 2 },
  { id: "structure-and-formatting", title: "Structure and Formatting", level: 2 },
  { id: "sensory-language", title: "Sensory Language", level: 2 },
  { id: "seo-optimisation", title: "SEO Optimisation", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write Product Descriptions That Sell",
  description: "Learn how to write compelling product descriptions that convert browsers into buyers.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-write-product-descriptions-that-sell` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Write Product Descriptions That Sell", item: `${siteConfig.url}/guides/how-to-write-product-descriptions-that-sell` },
  ],
};

export default function ProductDescriptionsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Copywriting</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Write Product Descriptions That Sell
            </h1>

            <p className="text-xl text-foreground mb-8">
              Great product descriptions do more than describe. They persuade, overcome objections, and compel action. This guide shows you how to write copy that converts.
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

              <section id="why-descriptions-matter" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Descriptions Matter</h2>
                <p className="text-lg text-foreground mb-4">
                  In a physical shop, customers can pick up products, feel the materials, and ask questions. Online, your product description has to do all of that work. It must answer questions, address concerns, and create desire.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Many stores simply list features or copy manufacturer descriptions. This is a missed opportunity. Original, compelling descriptions differentiate your products, improve SEO, and significantly increase conversions.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">What Product Descriptions Must Do</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Inform:</strong> Provide essential details about what the product is and does</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Persuade:</strong> Convince browsers that they need this product</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Differentiate:</strong> Explain why your product is better than alternatives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reassure:</strong> Address potential objections and reduce purchase anxiety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Rank:</strong> Help search engines understand and index your products</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">The ROI of Good Copy</h4>
                  <p className="text-foreground">
                    Studies show that well-written product descriptions can increase conversion rates by 30% or more. For a store doing £100,000 per month, that improvement is worth £30,000 monthly in additional revenue.
                  </p>
                </div>
              </section>

              <section id="know-your-customer" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Know Your Customer</h2>
                <p className="text-lg text-foreground mb-4">
                  Effective product descriptions speak directly to your ideal customer. Before writing, you need to understand who you are writing for.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Questions to Answer</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Who is your customer?</strong>
                      <p className="text-foreground mt-1">Age, gender, occupation, lifestyle, values. The more specific, the better your copy will resonate.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">What problem are they solving?</strong>
                      <p className="text-foreground mt-1">People buy solutions, not products. What need or desire does this product fulfil?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">What objections might they have?</strong>
                      <p className="text-foreground mt-1">Price, quality, fit, durability. Address these proactively in your description.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">What language do they use?</strong>
                      <p className="text-foreground mt-1">Technical jargon for enthusiasts? Simple language for casual buyers? Match their vocabulary.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Write to One Person</h4>
                  <p className="text-foreground">
                    Even if you have many customers, write as if speaking to one person. Use &quot;you&quot; instead of &quot;customers&quot;. This creates intimacy and makes your copy feel personal rather than corporate.
                  </p>
                </div>
              </section>

              <section id="features-vs-benefits" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Features vs Benefits</h2>
                <p className="text-lg text-foreground mb-4">
                  The most common mistake in product descriptions is focusing on features instead of benefits. Features describe what a product is; benefits describe what it does for the customer.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Features vs Benefits Examples</h3>
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-gray-200">
                      <p className="text-foreground"><strong>Feature:</strong> Made from 100% merino wool</p>
                      <p className="text-foreground"><strong>Benefit:</strong> Stays warm without overheating, naturally breathable for all-day comfort</p>
                    </div>
                    <div className="pb-4 border-b border-gray-200">
                      <p className="text-foreground"><strong>Feature:</strong> 10,000mAh battery capacity</p>
                      <p className="text-foreground"><strong>Benefit:</strong> Charges your phone 3-4 times before needing a recharge</p>
                    </div>
                    <div>
                      <p className="text-foreground"><strong>Feature:</strong> Reinforced stitching</p>
                      <p className="text-foreground"><strong>Benefit:</strong> Built to last years of daily use without falling apart</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">The FAB Formula</h3>
                <p className="text-lg text-foreground mb-4">
                  For each feature, use the Feature-Advantage-Benefit formula:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Feature</h4>
                    <p className="text-foreground">What it is (the fact)</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Advantage</h4>
                    <p className="text-foreground">Why that matters (the function)</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Benefit</h4>
                    <p className="text-foreground">What it means for the customer (the feeling)</p>
                  </div>
                </div>
              </section>

              <section id="structure-and-formatting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Structure and Formatting</h2>
                <p className="text-lg text-foreground mb-4">
                  Online readers scan rather than read. Your description needs to be scannable whilst still delivering compelling copy for those who read in detail.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Ideal Description Structure</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Opening Hook</strong>
                      <p className="text-foreground mt-1">One or two sentences that grab attention and state the main benefit. This is what scanners will read.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Mini Paragraph</strong>
                      <p className="text-foreground mt-1">A short paragraph (2-3 sentences) expanding on the key benefits and addressing the primary use case.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Bullet Points</strong>
                      <p className="text-foreground mt-1">4-6 bullets highlighting key features and their benefits. Scanners love bullet points.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Technical Details</strong>
                      <p className="text-foreground mt-1">Specifications, dimensions, materials, care instructions. Important but secondary information.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Formatting Tips</h4>
                  <ul className="space-y-2 text-foreground">
                    <li>• Use short paragraphs (2-3 sentences maximum)</li>
                    <li>• Add white space to improve readability</li>
                    <li>• Bold key phrases for scanners</li>
                    <li>• Use subheadings to break up longer descriptions</li>
                  </ul>
                </div>
              </section>

              <section id="sensory-language" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Sensory Language</h2>
                <p className="text-lg text-foreground mb-4">
                  Since customers cannot physically experience your product, you need to create that experience through words. Sensory language activates the imagination and creates desire.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Engage Multiple Senses</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Touch</h4>
                    <p className="text-foreground">&quot;Buttery-soft leather that moulds to your feet&quot;, &quot;Crisp cotton with a satisfying weight&quot;</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Sight</h4>
                    <p className="text-foreground">&quot;Rich burgundy that deepens with wear&quot;, &quot;A silhouette that flatters every figure&quot;</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Smell</h4>
                    <p className="text-foreground">&quot;The subtle scent of genuine leather&quot;, &quot;Freshly ground coffee aroma&quot;</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Sound</h4>
                    <p className="text-foreground">&quot;A satisfying click when you close it&quot;, &quot;Whisper-quiet operation&quot;</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Show, Do Not Tell</h4>
                  <p className="text-foreground">
                    Instead of &quot;high-quality leather&quot;, write &quot;full-grain Italian leather that develops a unique patina over time&quot;. Specific, sensory details are more convincing than vague claims.
                  </p>
                </div>
              </section>

              <section id="seo-optimisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">SEO Optimisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Product descriptions serve dual purposes: persuading humans and ranking in search engines. The good news is that natural, helpful content tends to rank well.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">SEO Best Practices</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Include your primary keyword</strong> naturally in the first paragraph</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Write at least 300 words</strong> to give search engines enough content to index</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Use related keywords</strong> throughout (colour, material, style variations)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Write unique descriptions</strong> for every product (no duplicates or manufacturer copy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Answer common questions</strong> that people search for</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Do Not Keyword Stuff</h4>
                  <p className="text-foreground">
                    Write for humans first. Awkward, keyword-stuffed descriptions hurt both conversions and rankings. If a sentence sounds unnatural with your keywords, rewrite it.
                  </p>
                </div>
              </section>

              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Mistakes</h2>
                <p className="text-lg text-foreground mb-4">
                  Avoid these common product description mistakes that hurt conversions.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Using Manufacturer Descriptions</h3>
                    <p className="text-foreground">These are duplicated across the internet, hurting your SEO. They are also typically boring and feature-focused rather than benefit-focused.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Being Too Short</h3>
                    <p className="text-foreground">One-sentence descriptions do not provide enough information to make a purchase decision. Aim for at least 150-300 words.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Focusing Only on Features</h3>
                    <p className="text-foreground">Features tell, benefits sell. Always translate features into customer benefits.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Generic Language</h3>
                    <p className="text-foreground">&quot;High quality&quot;, &quot;best in class&quot;, &quot;premium&quot; are meaningless without specifics. Show quality rather than claiming it.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Ignoring Objections</h3>
                    <p className="text-foreground">If customers commonly return items or ask questions, address those concerns proactively in your descriptions.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-optimise-shopify-product-pages-for-seo" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Product Page SEO →</h4>
                      <p className="text-sm text-foreground">Complete product optimisation</p>
                    </Link>
                    <Link href="/guides/how-to-write-shopify-meta-descriptions" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Meta Descriptions →</h4>
                      <p className="text-sm text-foreground">Write search-friendly copy</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Professional Copywriting?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can write compelling, SEO-optimised product descriptions that convert browsers into buyers. Transform your product pages with expert copy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/ecommerce-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
