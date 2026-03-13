import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Customise Your Shopify Theme",
  description:
    "Complete guide to customising your Shopify theme. Learn about the theme editor, sections, settings, custom CSS, and when to edit code for advanced changes.",
  alternates: {
    canonical: "/guides/how-to-customise-shopify-theme",
  },
  openGraph: {
    title: "How to Customise Your Shopify Theme",
    description:
      "Complete guide to customising your Shopify theme using the editor, sections, settings, and code.",
    url: "/guides/how-to-customise-shopify-theme",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "theme-editor-basics", title: "Theme Editor Basics", level: 2 },
  { id: "customising-sections", title: "Customising Sections", level: 2 },
  { id: "theme-settings", title: "Theme Settings", level: 2 },
  { id: "adding-custom-css", title: "Adding Custom CSS", level: 2 },
  { id: "editing-theme-code", title: "Editing Theme Code", level: 2 },
  { id: "working-with-metafields", title: "Working with Metafields", level: 2 },
  { id: "theme-best-practices", title: "Theme Best Practices", level: 2 },
  { id: "common-customisations", title: "Common Customisations", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Customise Your Shopify Theme",
  description:
    "Complete guide to customising your Shopify theme using the editor, sections, settings, and code.",
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
    "@id": `${siteConfig.url}/guides/how-to-customise-shopify-theme`,
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
      name: "How to Customise Your Shopify Theme",
      item: `${siteConfig.url}/guides/how-to-customise-shopify-theme`,
    },
  ],
};

export default function CustomiseThemeGuidePage() {
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
                Design
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Customise Your Shopify Theme
            </h1>

            <p className="text-xl text-foreground mb-8">
              Your theme defines how your store looks and feels. This guide covers everything from
              basic customisations in the editor to advanced code modifications.
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
              {/* Theme Editor Basics */}
              <section id="theme-editor-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Theme Editor Basics
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The theme editor is where most customisation happens. It provides a visual interface
                  for changing colours, fonts, layouts, and content without touching code.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Modern Shopify themes use Online Store 2.0 architecture, which allows you to customise
                  any page type using sections and blocks. Older themes (vintage themes) have more
                  limited customisation options.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Accessing the Theme Editor
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Online Store → Themes</strong> in your Shopify admin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Find your current theme and click <strong>Customise</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>The editor opens showing your homepage with a left sidebar</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-4">Editor Layout</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Left sidebar:</strong> Sections and blocks for the current page, plus theme settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Centre preview:</strong> Live preview of your changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Top bar:</strong> Page selector, device preview, and save button</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Device toggle:</strong> Preview on desktop, tablet, or mobile</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Page Selector
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Use the dropdown at the top of the editor to switch between page types:
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Home page:</strong> Your store&apos;s main landing page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Products:</strong> Product page templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Collections:</strong> Collection page templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Pages:</strong> Content page templates (About, Contact, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Blog:</strong> Blog listing and article templates</span>
                  </li>
                </ul>
              </section>

              {/* Customising Sections */}
              <section id="customising-sections" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Customising Sections
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Sections are the building blocks of your pages. Each section serves a purpose, like
                  displaying a slideshow, featuring products, or showing testimonials.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Adding a New Section
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In the theme editor, click <strong>Add section</strong> in the left sidebar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Browse available sections or search for what you need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Click a section to add it to the page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Drag the section to reorder it on the page</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Section Settings
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Click any section in the sidebar to reveal its settings. Common options include:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Heading and subheading:</strong> Text that appears above the section content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Colour scheme:</strong> Background and text colours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Padding:</strong> Spacing above and below the section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Width:</strong> Full width or contained within margins</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Working with Blocks
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Many sections contain blocks, which are smaller content units within the section.
                  For example, a &quot;Multicolumn&quot; section contains individual column blocks.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Block Actions</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Add block:</strong> Click &quot;Add block&quot; within a section</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Edit block:</strong> Click on a block to see its settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reorder blocks:</strong> Drag blocks to change their order</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Delete block:</strong> Click the bin icon on a selected block</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Click directly on elements in the preview to jump to their settings. This is often
                    faster than navigating through the sidebar.
                  </p>
                </div>
              </section>

              {/* Theme Settings */}
              <section id="theme-settings" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Theme Settings
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Theme settings are global options that affect your entire store. Access them by
                  clicking <strong>Theme settings</strong> at the bottom of the left sidebar.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Colours</h3>
                    <p className="text-foreground">
                      Set your brand colours for text, backgrounds, buttons, and accents. Most themes
                      let you create colour schemes that can be applied to different sections.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Typography</h3>
                    <p className="text-foreground">
                      Choose fonts for headings and body text. Select from system fonts (faster loading)
                      or Shopify&apos;s font library. Set base font sizes and scales.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Layout</h3>
                    <p className="text-foreground">
                      Control page width, spacing between sections, and grid settings. Some themes
                      offer options for borders, shadows, and corner rounding.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Buttons</h3>
                    <p className="text-foreground">
                      Customise button styles including padding, border radius, and hover effects.
                      Set different styles for primary and secondary buttons.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Social Media</h3>
                    <p className="text-foreground">
                      Add links to your social profiles. These appear in the header, footer, or
                      dedicated social sections depending on your theme.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Favicon</h3>
                    <p className="text-foreground">
                      Upload your favicon (the small icon in browser tabs). Use a 32x32 or 16x16
                      pixel PNG image.
                    </p>
                  </div>
                </div>
              </section>

              {/* Adding Custom CSS */}
              <section id="adding-custom-css" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Adding Custom CSS
                </h2>
                <p className="text-lg text-foreground mb-4">
                  When the theme editor does not offer the customisation you need, custom CSS can
                  override default styles. Most themes provide a dedicated field for custom CSS.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Where to Add Custom CSS
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In the theme editor, go to <strong>Theme settings</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Look for <strong>Custom CSS</strong> or <strong>Custom code</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Add your CSS rules in the provided text area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Save to see changes</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Common CSS Customisations
                </h3>
                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-gray-100 text-sm">
{`/* Change announcement bar colour */
.announcement-bar {
  background-color: #ef436b;
}

/* Increase product title size */
.product__title h1 {
  font-size: 2.5rem;
}

/* Hide a specific element */
.breadcrumb {
  display: none;
}

/* Custom button style */
.button--primary {
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Add custom font (with @import) */
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}`}
                  </pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Finding CSS Selectors</h4>
                  <p className="text-foreground">
                    Use your browser&apos;s developer tools (right-click, Inspect) to find the CSS
                    selectors for elements you want to style. Look for class names starting with
                    your theme&apos;s prefix.
                  </p>
                </div>
              </section>

              {/* Editing Theme Code */}
              <section id="editing-theme-code" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Editing Theme Code
                </h2>
                <p className="text-lg text-foreground mb-4">
                  For advanced changes beyond CSS, you may need to edit the theme&apos;s Liquid files
                  directly. This requires understanding HTML, CSS, and Shopify&apos;s Liquid templating
                  language.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Accessing Theme Files
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to <strong>Online Store → Themes</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click <strong>... → Edit code</strong> on your theme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Navigate the file structure in the left sidebar</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Theme File Structure
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Layout:</strong> theme.liquid (main template wrapper)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Templates:</strong> Page type templates (product.json, collection.json)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Sections:</strong> Reusable content blocks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Snippets:</strong> Small reusable code pieces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Assets:</strong> CSS, JavaScript, images</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Config:</strong> Theme settings schema</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Locales:</strong> Translation files</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-2">Warning</h4>
                  <p className="text-red-700">
                    Always duplicate your theme before editing code. Go to Themes, click ... on your
                    theme, and select Duplicate. Edit the copy, not the live theme.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Basic Liquid Syntax
                </h3>
                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-gray-100 text-sm">
{`<!-- Output a variable -->
{{ product.title }}

<!-- Conditional logic -->
{% if product.available %}
  <span>In Stock</span>
{% else %}
  <span>Sold Out</span>
{% endif %}

<!-- Loop through items -->
{% for product in collection.products %}
  <h3>{{ product.title }}</h3>
{% endfor %}

<!-- Include a snippet -->
{% render 'product-card', product: product %}`}
                  </pre>
                </div>
              </section>

              {/* Working with Metafields */}
              <section id="working-with-metafields" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Working with Metafields
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Metafields let you store custom data on products, collections, customers, and more.
                  You can display this data in your theme for enhanced customisation.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Common Metafield Uses
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Product specifications:</strong> Size charts, materials, care instructions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Collection descriptions:</strong> Extended content for SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Custom badges:</strong> &quot;New&quot;, &quot;Bestseller&quot;, &quot;Eco-friendly&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Brand content:</strong> Manufacturer logos, warranties</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Displaying Metafields in Theme Editor
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Many theme sections support dynamic sources. Instead of typing text directly, you
                  can link to a metafield:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Click on a text field in the theme editor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click the <strong>Connect dynamic source</strong> icon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Select the metafield you want to display</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create metafield definitions in Settings → Custom data. This lets you set field
                    types (text, number, date) and add validation rules for cleaner data.
                  </p>
                </div>
              </section>

              {/* Theme Best Practices */}
              <section id="theme-best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Theme Best Practices
                </h2>

                <div className="space-y-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Always Work on a Duplicate
                    </h3>
                    <p className="text-foreground">
                      Before making significant changes, duplicate your theme. Test changes on the
                      duplicate, then publish when ready. This prevents breaking your live store.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Document Your Changes
                    </h3>
                    <p className="text-foreground">
                      Keep notes about what you changed and why. This helps when updating themes or
                      troubleshooting issues later. Add comments to custom CSS and code.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Test on Multiple Devices
                    </h3>
                    <p className="text-foreground">
                      Use the device preview in the editor, but also test on actual phones and tablets.
                      Over 70% of traffic is mobile, so mobile experience is critical.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Keep Performance in Mind
                    </h3>
                    <p className="text-foreground">
                      Every section, image, and custom font adds load time. Only add what adds value.
                      Compress images before uploading. Limit custom fonts to 2-3 weights.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-foreground">
                      Theme developers release updates with bug fixes and new features. Review update
                      changelogs. Note: updates may overwrite custom code changes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Customisations */}
              <section id="common-customisations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Customisations
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Here are solutions to customisation requests we see frequently.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Change the Logo Size
                    </h3>
                    <p className="text-foreground mb-3">
                      In the theme editor, click on the Header section. Look for logo width or size
                      settings. If not available, use custom CSS:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-gray-100 text-sm">
                        .header__logo img &#123; max-width: 150px; &#125;
                      </code>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Add a Sticky Header
                    </h3>
                    <p className="text-foreground mb-3">
                      Many themes have this as a setting. Check Header → Enable sticky header. If
                      not available:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-gray-100 text-sm">
                        .header &#123; position: sticky; top: 0; z-index: 100; &#125;
                      </code>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Show Product Reviews
                    </h3>
                    <p className="text-foreground">
                      Install a reviews app like Judge.me or Loox. Most apps include theme integration.
                      Alternatively, enable native Shopify Product Reviews app and add the review
                      section in the product template.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Add Trust Badges Below Add to Cart
                    </h3>
                    <p className="text-foreground mb-3">
                      Look for a &quot;Custom Liquid&quot; block in your product section. Add HTML for trust
                      badges:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-gray-100 text-sm">
{`<div class="trust-badges">
  <img src="{{ 'secure-checkout.svg' | asset_url }}" alt="Secure checkout">
  <img src="{{ 'free-returns.svg' | asset_url }}" alt="Free returns">
</div>`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground-dark mb-3">
                      Hide a Section on Mobile
                    </h3>
                    <p className="text-foreground mb-3">
                      Use CSS media queries to hide elements on smaller screens:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-gray-100 text-sm">
{`@media (max-width: 749px) {
  .section-to-hide {
    display: none;
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-add-custom-fonts-to-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Custom Fonts</h4>
                      <p className="text-sm text-foreground">Use any font on your store</p>
                    </Link>
                    <Link
                      href="/guides/how-to-add-custom-css-to-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Custom CSS Guide</h4>
                      <p className="text-sm text-foreground">In-depth CSS customisation</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Custom Theme Work?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can handle complex theme customisations, build custom sections, and create
            bespoke designs that make your store stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/shopify-theme-development" variant="outline-light" size="lg" icon={false}>
              Theme Development Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
