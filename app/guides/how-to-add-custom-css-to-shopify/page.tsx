import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Custom CSS to Shopify",
  description:
    "Learn how to add custom CSS to your Shopify store. Covers theme editor, custom code sections, asset files, and best practices for maintainable styling.",
  alternates: {
    canonical: "/guides/how-to-add-custom-css-to-shopify",
  },
  openGraph: {
    title: "How to Add Custom CSS to Shopify",
    description:
      "Learn how to add custom CSS to your Shopify store with our comprehensive guide.",
    url: "/guides/how-to-add-custom-css-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-shopify-css", title: "Understanding Shopify CSS", level: 2 },
  { id: "theme-editor-method", title: "Theme Editor Method", level: 2 },
  { id: "custom-liquid-section", title: "Custom Liquid Section", level: 2 },
  { id: "theme-asset-files", title: "Theme Asset Files", level: 2 },
  { id: "css-best-practices", title: "CSS Best Practices", level: 2 },
  { id: "common-customisations", title: "Common Customisations", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Custom CSS to Shopify",
  description:
    "Learn how to add custom CSS to your Shopify store with our comprehensive guide.",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-add-custom-css-to-shopify`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Add Custom CSS to Shopify",
      item: `${siteConfig.url}/guides/how-to-add-custom-css-to-shopify`,
    },
  ],
};

export default function CustomCSSGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                Guide
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Custom CSS to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Want to customise your Shopify store beyond what the theme settings allow?
              This guide covers every method for adding custom CSS, from quick fixes to
              professional approaches.
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

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Understanding Shopify CSS */}
              <section id="understanding-shopify-css" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding Shopify CSS
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before diving into the methods, it helps to understand how CSS works in
                  Shopify. Every Shopify theme loads CSS files that control the visual
                  appearance of your store. When you add custom CSS, you are either adding
                  to these existing styles or overriding them.
                </p>
                <p className="text-lg text-foreground mb-6">
                  CSS follows a specificity hierarchy. This means that more specific
                  selectors override less specific ones, and styles that come later in
                  the code can override earlier ones. Understanding this is key to making
                  your custom styles work reliably.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">CSS Specificity Basics</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Element selectors</strong> (p, div, h1) have the lowest specificity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Class selectors</strong> (.button, .header) have medium specificity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>ID selectors</strong> (#main-nav) have high specificity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Inline styles</strong> and !important have the highest specificity</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The method you choose for adding CSS depends on your technical comfort
                  level and the scope of changes you need to make. Let us explore each
                  option from simplest to most advanced.
                </p>
              </section>

              {/* Theme Editor Method */}
              <section id="theme-editor-method" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Theme Editor Method
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Many modern Shopify themes include a built-in custom CSS field in the
                  theme settings. This is the quickest and safest way to add small CSS
                  customisations without touching any code files.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  How to Find the Custom CSS Setting
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Open your Shopify admin</strong>
                      <p className="text-foreground mt-1">Navigate to Online Store, then Themes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Click Customise on your active theme</strong>
                      <p className="text-foreground mt-1">This opens the theme editor where you can preview changes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Go to Theme Settings</strong>
                      <p className="text-foreground mt-1">Click the gear icon or Theme Settings in the sidebar.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Look for Custom CSS or Advanced</strong>
                      <p className="text-foreground mt-1">The exact location varies by theme. Check sections like Advanced, Custom Code, or CSS.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-2">Example: Changing Button Colours</h3>
                  <p className="text-foreground mb-4">
                    Here is a simple example of custom CSS you might add:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`.btn, .button, .shopify-payment-button button {
  background-color: #ef436b !important;
  border-color: #ef436b !important;
}

.btn:hover, .button:hover {
  background-color: #d63d5f !important;
  border-color: #d63d5f !important;
}`}
                  </pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Always preview your changes on mobile as well as desktop. The theme
                    editor lets you switch between device views to check responsiveness.
                  </p>
                </div>
              </section>

              {/* Custom Liquid Section */}
              <section id="custom-liquid-section" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Custom Liquid Section
                </h2>
                <p className="text-lg text-foreground mb-4">
                  If your theme does not have a custom CSS setting, or you need to add CSS
                  to specific pages only, you can use the Custom Liquid section. This
                  section type lets you add any HTML, CSS, or JavaScript to your pages.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Adding a Custom Liquid Section
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Open the theme editor</strong>
                      <p className="text-foreground mt-1">Go to Online Store, Themes, then click Customise.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Navigate to the page you want to customise</strong>
                      <p className="text-foreground mt-1">Use the page selector at the top to choose your page.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Add a Custom Liquid section</strong>
                      <p className="text-foreground mt-1">Click Add Section and search for Custom Liquid or Custom HTML.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Add your CSS wrapped in style tags</strong>
                      <p className="text-foreground mt-1">Paste your CSS code between opening and closing style tags.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-2">Custom Liquid CSS Example</h3>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`<style>
  /* Hide the quantity selector on product pages */
  .product-form__quantity {
    display: none;
  }

  /* Make the add to cart button full width */
  .product-form__submit {
    width: 100%;
    max-width: none;
  }
</style>`}
                  </pre>
                </div>

                <p className="text-lg text-foreground">
                  This method is particularly useful when you want different styles on
                  different pages. You can add Custom Liquid sections to individual
                  product pages, collection pages, or any template in your theme.
                </p>
              </section>

              {/* Theme Asset Files */}
              <section id="theme-asset-files" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Theme Asset Files
                </h2>
                <p className="text-lg text-foreground mb-4">
                  For larger CSS customisations or a more professional setup, you should
                  edit your theme files directly. This gives you full control and keeps
                  your CSS organised in dedicated files.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating a Custom CSS File
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Access the code editor</strong>
                      <p className="text-foreground mt-1">Go to Online Store, Themes, click the three dots, then Edit Code.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Navigate to Assets folder</strong>
                      <p className="text-foreground mt-1">Find the Assets folder in the left sidebar and click on it.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Add a new asset</strong>
                      <p className="text-foreground mt-1">Click Add a new asset and create a blank file called custom.css.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Link the CSS file in theme.liquid</strong>
                      <p className="text-foreground mt-1">Add the following line in your theme.liquid file, just before the closing head tag.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-2">Linking Your Custom CSS</h3>
                  <p className="text-foreground mb-4">
                    Add this line to theme.liquid before the closing head tag:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`{{ 'custom.css' | asset_url | stylesheet_tag }}`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Using theme.scss.liquid
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Some older themes use SCSS instead of CSS. If your theme has a
                  theme.scss.liquid file, you can add your styles directly to the bottom
                  of that file. SCSS supports variables and nesting, which can make your
                  CSS more maintainable.
                </p>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Always duplicate your theme before making code changes. Go to
                    Actions, then Duplicate. This gives you a backup you can restore
                    if something goes wrong.
                  </p>
                </div>
              </section>

              {/* CSS Best Practices */}
              <section id="css-best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  CSS Best Practices
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Writing maintainable CSS is just as important as making it work. Follow
                  these practices to keep your customisations organised and future-proof.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Use Comments</h3>
                    <p className="text-foreground mb-2">
                      Comment your CSS to explain what each section does. Future you (or
                      your developer) will thank you.
                    </p>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`/* =================================
   Product Page Customisations
   ================================= */

/* Hide compare at price when not on sale */
.price__compare-at {
  display: none;
}`}
                    </pre>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Avoid !important When Possible</h3>
                    <p className="text-foreground">
                      Using !important makes CSS harder to override later. Instead, try to
                      match or exceed the specificity of the original styles. If you must
                      use !important, document why.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Use Consistent Naming</h3>
                    <p className="text-foreground">
                      If you create new classes, use a consistent prefix like .custom- to
                      distinguish your code from theme code. This prevents conflicts and
                      makes debugging easier.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Test Across Devices</h3>
                    <p className="text-foreground">
                      Always test your CSS on mobile, tablet, and desktop. Use browser
                      developer tools to simulate different screen sizes and check for
                      responsive issues.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Mobile-First Media Queries</h3>
                  <p className="text-foreground mb-4">
                    When writing responsive CSS, use min-width media queries for a
                    mobile-first approach:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`/* Mobile styles (default) */
.product-grid {
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`}
                  </pre>
                </div>
              </section>

              {/* Common Customisations */}
              <section id="common-customisations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Customisations
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Here are CSS snippets for frequently requested customisations that you
                  can adapt for your store:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-3">Custom Font</h3>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body, button, input, select, textarea {
  font-family: 'Inter', sans-serif;
}`}
                    </pre>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-3">Hide Sold Out Badge</h3>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`.badge--sold-out,
.product__badge--sold-out {
  display: none;
}`}
                    </pre>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-3">Sticky Add to Cart Bar</h3>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`.product-form {
  position: sticky;
  bottom: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

@media (min-width: 768px) {
  .product-form {
    position: static;
    box-shadow: none;
    padding: 0;
  }
}`}
                    </pre>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-3">Custom Scrollbar</h3>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Troubleshooting
                </h2>
                <p className="text-lg text-foreground mb-6">
                  CSS not working as expected? Here are the most common issues and how to
                  fix them:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Styles Not Applying</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> Your CSS is not having any effect.
                    </p>
                    <p className="text-foreground">
                      <strong>Solutions:</strong> Check for typos in your selectors. Use
                      browser developer tools to inspect the element and see what classes
                      it actually has. Try increasing specificity or adding !important as
                      a test.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Styles Only Work in Preview</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> CSS works in the editor but not on the live site.
                    </p>
                    <p className="text-foreground">
                      <strong>Solutions:</strong> Clear your browser cache and Shopify
                      cache. Check that you saved and published your changes. Verify the
                      CSS file is linked correctly in theme.liquid.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Mobile Styles Breaking</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> Looks good on desktop, broken on mobile.
                    </p>
                    <p className="text-foreground">
                      <strong>Solutions:</strong> Check your media queries are correct.
                      Test in actual mobile browsers, not just desktop simulation. Look
                      for fixed widths that should be percentages.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Finding the Right Selector</h3>
                    <p className="text-foreground mb-2">
                      <strong>Problem:</strong> You cannot figure out what class to target.
                    </p>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Right-click the element and select
                      Inspect. This opens developer tools showing you the exact HTML and
                      classes. You can even test CSS changes live in the Styles panel.
                    </p>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Now that you know how to add custom CSS to your Shopify store, here is
                  how to continue improving your customisation skills:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Learn browser developer tools</strong>
                      <p className="text-foreground mt-1">Master the Elements and Styles panels. They are essential for CSS debugging.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Understand CSS Grid and Flexbox</strong>
                      <p className="text-foreground mt-1">Modern layout techniques that make responsive design much easier.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Explore CSS variables</strong>
                      <p className="text-foreground mt-1">Learn how Shopify themes use CSS custom properties for easy colour changes.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-create-shopify-announcement-bars"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Announcement Bars Guide</h4>
                      <p className="text-sm text-foreground">Create custom announcement bars</p>
                    </Link>
                    <Link
                      href="/guides/how-to-add-custom-fonts-to-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Custom Fonts to Shopify</h4>
                      <p className="text-sm text-foreground">Load and apply custom typefaces to your theme</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Custom Development?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you need simple CSS tweaks or a complete theme overhaul, our
            developers can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/shopify-theme-development" variant="outline-light" size="lg" icon={false}>
              Theme Development
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
