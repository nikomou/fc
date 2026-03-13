import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Remove Unused Shopify App Code",
  description:
    "Complete guide to finding and removing leftover code from uninstalled Shopify apps. Learn how to identify residual scripts, clean your theme, and improve store performance.",
  alternates: {
    canonical: "/guides/how-to-remove-unused-shopify-app-code",
  },
  openGraph: {
    title: "How to Remove Unused Shopify App Code",
    description: "Complete guide to finding and removing leftover code from uninstalled Shopify apps.",
    url: "/guides/how-to-remove-unused-shopify-app-code",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-apps-leave-code", title: "Why Apps Leave Code Behind", level: 2 },
  { id: "performance-impact", title: "Performance Impact", level: 2 },
  { id: "identifying-leftover-code", title: "Identifying Leftover Code", level: 2 },
  { id: "checking-theme-liquid", title: "Checking Theme.liquid", level: 2 },
  { id: "removing-app-snippets", title: "Removing App Snippets", level: 2 },
  { id: "cleaning-asset-files", title: "Cleaning Asset Files", level: 2 },
  { id: "verification", title: "Verification and Testing", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Remove Unused Shopify App Code",
  description: "Complete guide to finding and removing leftover code from uninstalled Shopify apps.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-remove-unused-shopify-app-code` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Remove Unused Shopify App Code", item: `${siteConfig.url}/guides/how-to-remove-unused-shopify-app-code` },
  ],
};

export default function RemoveAppCodeGuidePage() {
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
              How to Remove Unused Shopify App Code
            </h1>

            <p className="text-xl text-foreground mb-8">
              Uninstalled apps often leave behind code that continues to load on your store, slowing down page speed and creating technical debt. This guide shows you how to find and safely remove this residual code.
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

              <section id="why-apps-leave-code" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Apps Leave Code Behind</h2>
                <p className="text-lg text-foreground mb-4">
                  When you install a Shopify app, it often modifies your theme to add its functionality. This might include injecting scripts into theme.liquid, adding snippet files, or embedding liquid code in specific templates.
                </p>
                <p className="text-lg text-foreground mb-6">
                  When you uninstall the app, Shopify removes the app itself but frequently leaves the theme modifications in place. This happens because Shopify cannot always determine which code belongs to which app, especially if the theme has been modified by multiple apps over time.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Common Types of Leftover Code</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>JavaScript includes:</strong> Script tags loading external JS files</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>CSS stylesheets:</strong> Link tags for app-specific styles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Liquid snippets:</strong> Include statements referencing app files</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Asset files:</strong> JS and CSS files in your theme&apos;s assets folder</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>App embeds:</strong> Code injected via app embeds in theme settings</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="performance-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Performance Impact</h2>
                <p className="text-lg text-foreground mb-4">
                  Leftover app code can significantly impact your store&apos;s performance. Even if the main app functionality is gone, the code still loads and executes on every page view.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Blocking Resources</h3>
                    <p className="text-foreground">JavaScript files in the head of your document block rendering until they load. Even a 50KB unused script delays your page display.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Failed Network Requests</h3>
                    <p className="text-foreground">Scripts trying to load from app servers that no longer respond create failed requests, adding latency and console errors.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">JavaScript Errors</h3>
                    <p className="text-foreground">Orphaned code may throw errors when it cannot find elements or dependencies it expects, potentially breaking other scripts.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Real World Impact</h4>
                  <p className="text-foreground">
                    We regularly see stores with 5-10 uninstalled apps still loading scripts. Cleaning these up can improve page load times by 1-3 seconds and significantly boost Lighthouse scores.
                  </p>
                </div>
              </section>

              <section id="identifying-leftover-code" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Identifying Leftover Code</h2>
                <p className="text-lg text-foreground mb-4">
                  Before removing anything, you need to find the residual code. Here are the methods to identify it.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Using Browser DevTools</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Open your store in Chrome and press F12 to open DevTools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Go to the Network tab and reload the page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Filter by JS and CSS to see all loaded scripts and styles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Look for requests to external domains you do not recognise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Check for failed requests (shown in red) which indicate dead app scripts</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Using Page Source</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Right-click on your page and select &quot;View Page Source&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Search (Ctrl+F) for common app indicators: &quot;app-embed&quot;, &quot;cdn.shopify&quot;, app names</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Note any script or link tags that reference apps you have uninstalled</span>
                  </li>
                </ol>
              </section>

              <section id="checking-theme-liquid" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Checking Theme.liquid</h2>
                <p className="text-lg text-foreground mb-4">
                  The theme.liquid file is the most common location for app code injection. Apps typically add their scripts just before the closing head or body tags.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Open Theme Code</strong>
                      <p className="text-foreground mt-1">Go to Online Store &gt; Themes &gt; Actions &gt; Edit code. Open the theme.liquid file from the Layout folder.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Search for App References</strong>
                      <p className="text-foreground mt-1">Use Ctrl+F to search for app names, &quot;snippet&quot;, &quot;include&quot;, and external script sources. Look for comments like &quot;Start App Name&quot; or &quot;Added by App Name&quot;.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Check Near Head and Body Tags</strong>
                      <p className="text-foreground mt-1">Scroll to just before &lt;/head&gt; and &lt;/body&gt;. These are common injection points for app scripts.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <p className="text-gray-400 text-sm mb-2">/* Example of leftover app code */</p>
                  <pre className="text-gray-100 text-sm">
{`<!-- Start ReviewApp -->
{% include 'review-app-script' %}
<script src="https://cdn.reviewapp.com/widget.js"></script>
<!-- End ReviewApp -->`}
                  </pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Important: Backup First</h4>
                  <p className="text-foreground">
                    Before making any changes, duplicate your theme using Actions &gt; Duplicate. Work on the duplicate first and test thoroughly before making changes to your live theme.
                  </p>
                </div>
              </section>

              <section id="removing-app-snippets" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Removing App Snippets</h2>
                <p className="text-lg text-foreground mb-4">
                  Apps often create snippet files that remain after uninstallation. These need to be removed along with any references to them.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Finding App Snippets</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In the theme code editor, open the Snippets folder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Look for files with app names or unfamiliar prefixes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Open suspicious files and check if they reference the uninstalled app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Search your entire theme for references to these snippets before deleting</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Safe Removal Process</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">1.</span>
                    <span>Remove all include statements referencing the snippet from other files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">2.</span>
                    <span>Delete the snippet file itself</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">3.</span>
                    <span>Preview your theme to ensure nothing is broken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">4.</span>
                    <span>Check the browser console for new errors</span>
                  </li>
                </ul>
              </section>

              <section id="cleaning-asset-files" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Cleaning Asset Files</h2>
                <p className="text-lg text-foreground mb-4">
                  Apps may add JavaScript and CSS files to your theme&apos;s assets folder. These files continue loading even after the app is removed.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Identifying App Assets</h3>
                <p className="text-lg text-foreground mb-4">
                  Open the Assets folder in your theme code editor. Look for files that:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Have app names in their filename</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Were created around the same time the app was installed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>You do not recognise as part of your theme</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Before Deleting</h3>
                <p className="text-lg text-foreground mb-4">
                  Search your entire theme for references to the asset file before deleting. Use the theme editor&apos;s search function to find any link or script tags referencing the file.
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <p className="text-gray-400 text-sm mb-2">/* Search for patterns like these */</p>
                  <pre className="text-gray-100 text-sm">
{`{{ 'app-name.css' | asset_url | stylesheet_tag }}
{{ 'app-name.js' | asset_url | script_tag }}
<script src="{{ 'app-name.js' | asset_url }}"></script>`}
                  </pre>
                </div>
              </section>

              <section id="verification" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Verification and Testing</h2>
                <p className="text-lg text-foreground mb-4">
                  After removing code, verify that your store works correctly and that performance has improved.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Testing Checklist</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">1.</span>
                    <span>Preview your theme and navigate through all page types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">2.</span>
                    <span>Check the browser console for new JavaScript errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">3.</span>
                    <span>Test the checkout process with a test order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">4.</span>
                    <span>Verify all remaining apps still function correctly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">5.</span>
                    <span>Run PageSpeed Insights before and after to measure improvement</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Network Tab Verification</h3>
                <p className="text-lg text-foreground mb-4">
                  Re-check the Network tab in DevTools. Confirm that the removed scripts are no longer loading. Failed requests should be eliminated.
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Speed Optimisation Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Complete performance guide</p>
                    </Link>
                    <Link href="/checklists/shopify-app-audit-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">App Audit Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Review your installed apps</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Cleaning Your Theme?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our developers can audit your theme code, remove leftover app scripts, and optimise your store for maximum performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
