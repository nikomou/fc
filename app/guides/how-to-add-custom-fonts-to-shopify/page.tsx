import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Custom Fonts to Shopify",
  description:
    "Complete guide to adding custom fonts to your Shopify store. Learn about font formats, performance optimisation, and implementation methods for theme customisation.",
  alternates: {
    canonical: "/guides/how-to-add-custom-fonts-to-shopify",
  },
  openGraph: {
    title: "How to Add Custom Fonts to Shopify",
    description: "Complete guide to adding custom fonts to your Shopify store.",
    url: "/guides/how-to-add-custom-fonts-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-custom-fonts", title: "Why Custom Fonts Matter", level: 2 },
  { id: "font-formats", title: "Understanding Font Formats", level: 2 },
  { id: "theme-editor-method", title: "Theme Editor Method", level: 2 },
  { id: "code-method", title: "Code Implementation", level: 2 },
  { id: "google-fonts", title: "Using Google Fonts", level: 2 },
  { id: "performance", title: "Performance Optimisation", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Custom Fonts to Shopify",
  description: "Complete guide to adding custom fonts to your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-custom-fonts-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Custom Fonts to Shopify", item: `${siteConfig.url}/guides/how-to-add-custom-fonts-to-shopify` },
  ],
};

export default function CustomFontsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Theme Customisation</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Custom Fonts to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Typography is a crucial part of your brand identity. This guide covers everything you need to know about adding custom fonts to your Shopify store while maintaining optimal performance.
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

              <section id="why-custom-fonts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Custom Fonts Matter</h2>
                <p className="text-lg text-foreground mb-4">
                  Custom fonts help differentiate your brand from competitors using default Shopify fonts. They create a unique visual identity that customers associate with your store and products.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Beyond aesthetics, the right typography improves readability and guides customers through your content. A well-chosen font can increase time on page, improve comprehension, and ultimately boost conversions.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Benefits of Custom Fonts</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Brand consistency</strong> across all touchpoints and marketing materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Visual distinction</strong> from competitors using standard fonts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Professional appearance</strong> that builds customer trust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Better readability</strong> when chosen appropriately for your audience</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="font-formats" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Understanding Font Formats</h2>
                <p className="text-lg text-foreground mb-4">
                  Before uploading fonts to Shopify, you need to understand the different font formats and which ones to use for optimal compatibility and performance.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">WOFF2 (Recommended)</h3>
                    <p className="text-foreground">The most compressed format with excellent browser support. Use WOFF2 as your primary format for modern browsers. File sizes are typically 30% smaller than WOFF.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">WOFF</h3>
                    <p className="text-foreground">Fallback for older browsers that do not support WOFF2. Good compression and wide compatibility. Include this as a secondary option.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">TTF/OTF</h3>
                    <p className="text-foreground">Standard desktop formats. Larger file sizes than web formats. Only use as a last resort fallback for very old browsers.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Font Conversion</h4>
                  <p className="text-foreground">
                    If you only have TTF or OTF files, convert them to WOFF2 using tools like Font Squirrel&apos;s Webfont Generator or Transfonter. Always verify you have the appropriate licence for web use.
                  </p>
                </div>
              </section>

              <section id="theme-editor-method" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Theme Editor Method</h2>
                <p className="text-lg text-foreground mb-6">
                  Many Shopify themes include built-in options for custom fonts. This is the easiest method if your theme supports it.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Access Theme Settings</strong>
                      <p className="text-foreground mt-1">Go to Online Store &gt; Themes &gt; Customise. Click on Theme Settings (gear icon) in the left sidebar.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Navigate to Typography</strong>
                      <p className="text-foreground mt-1">Look for Typography, Fonts, or Text settings. The exact location varies by theme but is usually under a Design or Branding section.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Select or Upload Fonts</strong>
                      <p className="text-foreground mt-1">Choose from Shopify&apos;s font library or upload custom fonts if your theme supports it. Set fonts for headings and body text separately.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Preview and Save</strong>
                      <p className="text-foreground mt-1">Check how your fonts look across different pages and devices before saving. Pay attention to readability at various sizes.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="code-method" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Code Implementation</h2>
                <p className="text-lg text-foreground mb-4">
                  For complete control over custom fonts, you can add them directly to your theme code. This method works with any font file you have a licence to use.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step 1: Upload Font Files</h3>
                <p className="text-lg text-foreground mb-4">
                  Go to Settings &gt; Files and upload your WOFF2 and WOFF font files. Copy the URLs for each uploaded file.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step 2: Add CSS</h3>
                <p className="text-lg text-foreground mb-4">
                  Edit your theme code (Online Store &gt; Themes &gt; Actions &gt; Edit code). Add the @font-face declaration to your main CSS file or create a new snippet.
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-gray-100 text-sm">
{`@font-face {
  font-family: 'YourFontName';
  src: url('your-font-url.woff2') format('woff2'),
       url('your-font-url.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Step 3: Apply the Font</h3>
                <p className="text-lg text-foreground mb-4">
                  Use CSS custom properties or direct styling to apply your font throughout the theme.
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-gray-100 text-sm">
{`:root {
  --font-heading: 'YourFontName', sans-serif;
  --font-body: 'YourBodyFont', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

body {
  font-family: var(--font-body);
}`}
                  </pre>
                </div>
              </section>

              <section id="google-fonts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Using Google Fonts</h2>
                <p className="text-lg text-foreground mb-4">
                  Google Fonts offers hundreds of free, web-optimised fonts. While convenient, there are performance considerations to keep in mind.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Self-Hosting vs CDN</h3>
                <p className="text-lg text-foreground mb-6">
                  We recommend self-hosting Google Fonts rather than loading from Google&apos;s CDN. This eliminates an external dependency, improves GDPR compliance, and often loads faster due to reduced DNS lookups.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">How to Self-Host</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">1.</span>
                      <span>Visit google-webfonts-helper.herokuapp.com to download fonts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">2.</span>
                      <span>Select only the weights you need (typically 400, 500, 700)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">3.</span>
                      <span>Download WOFF2 format files</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">4.</span>
                      <span>Upload to Shopify and implement using the code method above</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="performance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Performance Optimisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Custom fonts can significantly impact page load times. Follow these best practices to maintain fast performance.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Limit Font Weights</h3>
                    <p className="text-foreground">Only load the weights you actually use. Each weight adds 15-50KB. Stick to 2-3 weights maximum per font family.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Use font-display: swap</h3>
                    <p className="text-foreground">This ensures text is visible immediately using a system font, then swaps to your custom font once loaded. Prevents invisible text during loading.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Preload Critical Fonts</h3>
                    <p className="text-foreground">Add preload hints for your most important fonts in the theme&apos;s head section to prioritise their loading.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Subset Fonts</h3>
                    <p className="text-foreground">If you only need Latin characters, use subsetted fonts that exclude Greek, Cyrillic, and other character sets you do not need.</p>
                  </div>
                </div>
              </section>

              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Troubleshooting</h2>
                <p className="text-lg text-foreground mb-4">
                  Common font issues and how to resolve them.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Font not displaying</h3>
                    <p className="text-foreground">Check that the file URL is correct and the font-family name in CSS matches your @font-face declaration exactly. Clear your browser cache and try again.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Flash of unstyled text (FOUT)</h3>
                    <p className="text-foreground">This is expected behaviour with font-display: swap. Choose a system font fallback that closely matches your custom font&apos;s metrics to minimise the visual shift.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Font looks different on mobile</h3>
                    <p className="text-foreground">Some fonts render differently across operating systems. Test on actual devices, not just browser emulators. Consider using slightly heavier weights for mobile.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Speed Optimisation Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Improve overall store performance</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Complete pre-launch guide</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Theme Customisation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can implement custom fonts, optimise performance, and ensure your branding is consistent across your entire store.
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
