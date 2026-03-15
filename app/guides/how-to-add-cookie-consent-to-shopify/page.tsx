import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Cookie Consent to Shopify",
  description:
    "Complete guide to implementing cookie consent on your Shopify store. Learn about cookie banners, consent management, GDPR compliance, and UK/EU best practices.",
  alternates: {
    canonical: "/guides/how-to-add-cookie-consent-to-shopify",
  },
  openGraph: {
    title: "How to Add Cookie Consent to Shopify",
    description: "Complete guide to implementing cookie consent on your Shopify store. Learn about cookie banners, consent management, GDPR compliance, and UK/EU best practices.",
    url: "/guides/how-to-add-cookie-consent-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-cookie-consent", title: "Why Cookie Consent Matters", level: 2 },
  { id: "cookie-types", title: "Types of Cookies", level: 2 },
  { id: "shopify-native-consent", title: "Shopify Native Consent", level: 2 },
  { id: "consent-apps", title: "Cookie Consent Apps", level: 2 },
  { id: "implementing-consent", title: "Implementation Guide", level: 2 },
  { id: "testing-consent", title: "Testing Your Setup", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Cookie Consent to Shopify",
  description: "Complete guide to implementing cookie consent on your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-cookie-consent-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Cookie Consent to Shopify", item: `${siteConfig.url}/guides/how-to-add-cookie-consent-to-shopify` },
  ],
};

export default function CookieConsentGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Compliance</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Cookie Consent to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Cookie consent is a legal requirement for stores selling to customers in the UK and EU. This guide covers everything you need to implement compliant cookie consent on Shopify.
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

              <section id="why-cookie-consent" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Cookie Consent Matters</h2>
                <p className="text-lg text-foreground mb-4">
                  Under GDPR and the UK PECR regulations, you must obtain informed consent before placing non-essential cookies on a visitor&apos;s device. This includes tracking cookies from Google Analytics, Facebook Pixel, and other marketing tools.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Failure to comply can result in significant fines. More importantly, proper cookie consent builds trust with your customers and demonstrates that you respect their privacy.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Requirements</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Informed consent:</strong> Visitors must understand what cookies do before agreeing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Freely given:</strong> Consent cannot be a condition of using the site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Specific:</strong> Separate consent for different cookie categories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Easy withdrawal:</strong> Must be as easy to refuse as to accept</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Documented:</strong> You must keep records of consent</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Important Note</h4>
                  <p className="text-foreground">
                    &quot;Cookie walls&quot; that force users to accept all cookies or leave the site are not compliant. Users must be able to decline non-essential cookies while still using your store.
                  </p>
                </div>
              </section>

              <section id="cookie-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Types of Cookies</h2>
                <p className="text-lg text-foreground mb-4">
                  Not all cookies require consent. Understanding the different categories helps you implement consent correctly.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Essential Cookies (No Consent Required)</h3>
                    <p className="text-foreground mb-2">Cookies strictly necessary for the store to function. These can be set without consent.</p>
                    <p className="text-sm text-foreground"><strong>Examples:</strong> Cart session, login authentication, checkout functionality, security tokens</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Analytics Cookies (Consent Required)</h3>
                    <p className="text-foreground mb-2">Cookies that collect information about how visitors use the site.</p>
                    <p className="text-sm text-foreground"><strong>Examples:</strong> Google Analytics, Hotjar, Lucky Orange, Shopify analytics</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Marketing Cookies (Consent Required)</h3>
                    <p className="text-foreground mb-2">Cookies used for advertising and retargeting purposes.</p>
                    <p className="text-sm text-foreground"><strong>Examples:</strong> Facebook Pixel, Google Ads, TikTok Pixel, Pinterest Tag</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Functional Cookies (Consent Recommended)</h3>
                    <p className="text-foreground mb-2">Cookies that enhance functionality but aren&apos;t essential.</p>
                    <p className="text-sm text-foreground"><strong>Examples:</strong> Live chat, personalisation, recently viewed products, currency preferences</p>
                  </div>
                </div>
              </section>

              <section id="shopify-native-consent" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify Native Consent</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify includes a basic cookie consent banner in all stores. It can be enabled through your theme settings, but has significant limitations.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Enabling the Native Banner</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Access Theme Settings</strong>
                      <p className="text-foreground mt-1">Go to Online Store → Themes → Customise → Theme settings → Cookie banner.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Enable the Banner</strong>
                      <p className="text-foreground mt-1">Toggle on the cookie banner and customise the text. Select which regions should see the banner.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Tracking</strong>
                      <p className="text-foreground mt-1">Ensure your tracking scripts use Shopify&apos;s Customer Privacy API to respect consent preferences.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Native Banner Limitations</h4>
                  <p className="text-foreground">
                    Shopify&apos;s native banner is basic. It doesn&apos;t provide granular category controls, detailed cookie information, or comprehensive consent logging. For full compliance, most merchants need a third-party solution.
                  </p>
                </div>
              </section>

              <section id="consent-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Cookie Consent Apps</h2>
                <p className="text-lg text-foreground mb-4">
                  Third-party consent management platforms (CMPs) provide more robust compliance features. Here are the most popular options for Shopify.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Pandectes GDPR Compliance</h3>
                    <p className="text-foreground mb-2">The most popular GDPR app on Shopify. Includes cookie scanning, consent logging, geo-targeting, and automatic script blocking.</p>
                    <p className="text-sm text-foreground"><strong>Best for:</strong> UK and EU focused stores wanting comprehensive compliance</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Cookiebot</h3>
                    <p className="text-foreground mb-2">Enterprise-grade CMP with automatic cookie scanning and categorisation. Integrates with Shopify via app or manual installation.</p>
                    <p className="text-sm text-foreground"><strong>Best for:</strong> Larger stores with complex tracking setups</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">OneTrust</h3>
                    <p className="text-foreground mb-2">Enterprise solution offering cookie consent alongside broader privacy compliance. Requires manual implementation on Shopify.</p>
                    <p className="text-sm text-foreground"><strong>Best for:</strong> Enterprise stores with existing OneTrust contracts</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Consentmo</h3>
                    <p className="text-foreground mb-2">Shopify-native app with GDPR, CCPA, and LGPD compliance. Good balance of features and ease of use.</p>
                    <p className="text-sm text-foreground"><strong>Best for:</strong> Stores selling to multiple regions with different privacy laws</p>
                  </div>
                </div>
              </section>

              <section id="implementing-consent" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Implementation Guide</h2>
                <p className="text-lg text-foreground mb-4">
                  Proper implementation ensures your tracking scripts respect user consent. Here&apos;s how to set it up correctly.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step 1: Audit Your Cookies</h3>
                <p className="text-lg text-foreground mb-4">
                  Before implementing consent, understand what cookies your store sets. Most consent apps include scanning features, or use browser developer tools to see active cookies.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step 2: Categorise Cookies</h3>
                <p className="text-lg text-foreground mb-4">
                  Group cookies into categories (Essential, Analytics, Marketing, Functional). This allows users to make informed choices about what to accept.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step 3: Implement Conditional Loading</h3>
                <p className="text-lg text-foreground mb-4">
                  Configure tracking scripts to only load after consent is given. Modern CMPs handle this automatically, but you may need to modify custom scripts.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Google Tag Manager Integration</h4>
                  <p className="text-foreground">
                    If using GTM, configure consent mode to work with your CMP. This ensures Google tags respect consent signals and use consent-aware cookieless measurement when consent is denied.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step 4: Configure the Banner</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Write clear, jargon-free explanations of each cookie category</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Make &quot;Reject All&quot; as prominent as &quot;Accept All&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Link to your full cookie policy with detailed information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Ensure the banner is accessible (keyboard navigation, screen readers)</span>
                  </li>
                </ul>
              </section>

              <section id="testing-consent" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Your Setup</h2>
                <p className="text-lg text-foreground mb-4">
                  After implementation, thoroughly test that consent preferences are respected.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Test accepting all cookies</h3>
                    <p className="text-foreground">Verify all tracking fires correctly. Check that data appears in Google Analytics, Facebook Events Manager, etc.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Test rejecting all cookies</h3>
                    <p className="text-foreground">Verify no tracking cookies are set. Use browser dev tools to check cookies and network requests.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Test partial consent</h3>
                    <p className="text-foreground">Accept analytics but reject marketing. Verify only the appropriate scripts fire.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Test consent withdrawal</h3>
                    <p className="text-foreground">After accepting, use the preference centre to withdraw consent. Verify cookies are cleared and tracking stops.</p>
                  </div>
                </div>
              </section>

              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Mistakes</h2>
                <p className="text-lg text-foreground mb-4">
                  Avoid these frequent errors when implementing cookie consent.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Pre-ticked consent boxes</h3>
                    <p className="text-foreground">Consent checkboxes must be unticked by default. Pre-selected consent is not valid under GDPR.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Hidden reject option</h3>
                    <p className="text-foreground">Making &quot;Accept&quot; a large button while hiding &quot;Reject&quot; in small text is manipulative and non-compliant.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Firing scripts before consent</h3>
                    <p className="text-foreground">Some implementations show the banner but fire tracking immediately. Scripts must wait for explicit consent.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">No way to change preferences</h3>
                    <p className="text-foreground">Users must be able to change their consent at any time. Include a link to reopen the preference centre in your footer.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-make-shopify-gdpr-compliant" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">GDPR Compliance Guide →</h4>
                      <p className="text-sm text-foreground">Full GDPR requirements</p>
                    </Link>
                    <Link href="/guides/how-to-add-age-verification-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Age Verification to Shopify →</h4>
                      <p className="text-sm text-foreground">Comply with UK age restriction rules</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Cookie Consent Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your current setup, implement a compliant consent solution, and ensure your tracking works correctly within privacy regulations.
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
