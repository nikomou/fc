import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Shopify Announcement Bars",
  description:
    "Learn how to create effective announcement bars for your Shopify store. Covers built-in options, custom development, rotating messages, and conversion best practices.",
  alternates: {
    canonical: "/guides/how-to-create-shopify-announcement-bars",
  },
  openGraph: {
    title: "How to Create Shopify Announcement Bars",
    description:
      "Learn how to create effective announcement bars for your Shopify store.",
    url: "/guides/how-to-create-shopify-announcement-bars",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-announcement-bar", title: "What is an Announcement Bar", level: 2 },
  { id: "built-in-announcement-bar", title: "Built-in Announcement Bar", level: 2 },
  { id: "multiple-announcements", title: "Multiple Announcements", level: 2 },
  { id: "custom-announcement-bar", title: "Custom Announcement Bar", level: 2 },
  { id: "design-best-practices", title: "Design Best Practices", level: 2 },
  { id: "conversion-optimisation", title: "Conversion Optimisation", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Shopify Announcement Bars",
  description:
    "Learn how to create effective announcement bars for your Shopify store.",
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
    "@id": `${siteConfig.url}/guides/how-to-create-shopify-announcement-bars`,
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
      name: "How to Create Shopify Announcement Bars",
      item: `${siteConfig.url}/guides/how-to-create-shopify-announcement-bars`,
    },
  ],
};

export default function AnnouncementBarsGuidePage() {
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
                <span>10 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Shopify Announcement Bars
            </h1>

            <p className="text-xl text-foreground mb-8">
              Announcement bars are one of the most effective ways to communicate
              promotions, shipping offers, and important updates to your customers.
              Learn how to create them properly.
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
              {/* What is an Announcement Bar */}
              <section id="what-is-announcement-bar" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  What is an Announcement Bar
                </h2>
                <p className="text-lg text-foreground mb-4">
                  An announcement bar is a thin horizontal strip that appears at the very
                  top of your website, above the header navigation. It is designed to grab
                  attention and communicate time-sensitive or important information to
                  every visitor.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Unlike pop-ups, announcement bars are non-intrusive. They do not
                  interrupt the shopping experience but remain visible as a constant
                  reminder. This makes them perfect for ongoing promotions, shipping
                  thresholds, and store-wide messages.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Common Uses for Announcement Bars</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Free shipping thresholds</strong>: Free UK delivery on orders over £50</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Sale promotions</strong>: 20% off everything, use code SAVE20</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>New product launches</strong>: New arrivals now available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Holiday deadlines</strong>: Order by 20th Dec for Christmas delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Important notices</strong>: Delivery delays expected this week</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  Research shows that announcement bars can significantly impact conversion
                  rates. A well-crafted free shipping message alone can increase average
                  order value by 30% or more, as customers add items to reach the threshold.
                </p>
              </section>

              {/* Built-in Announcement Bar */}
              <section id="built-in-announcement-bar" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Built-in Announcement Bar
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Most Shopify themes include an announcement bar feature out of the box.
                  Here is how to set it up using the Dawn theme as an example. Other
                  themes follow a similar process.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Your Announcement Bar
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Open the theme customiser</strong>
                      <p className="text-foreground mt-1">Go to Online Store, then Themes, and click Customise on your active theme.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Find the Header section</strong>
                      <p className="text-foreground mt-1">In the left sidebar, click on Header. The announcement bar is usually a block within this section.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Enable the announcement bar</strong>
                      <p className="text-foreground mt-1">Look for an Announcement bar or Announcement block and ensure it is enabled.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Enter your message</strong>
                      <p className="text-foreground mt-1">Type your announcement text. Keep it concise, typically under 60 characters.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Add a link (optional)</strong>
                      <p className="text-foreground mt-1">Link to a relevant page like your sale collection or shipping information.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong>Customise the appearance</strong>
                      <p className="text-foreground mt-1">Most themes let you choose background colour, text colour, and font size.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use a contrasting colour scheme that stands out from your header but
                    still fits your brand. High contrast improves readability and ensures
                    visitors actually notice your message.
                  </p>
                </div>
              </section>

              {/* Multiple Announcements */}
              <section id="multiple-announcements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Multiple Announcements
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Some themes support rotating between multiple announcements, which is
                  perfect when you have several messages to share. If your theme does not
                  support this natively, you can achieve it with custom code or an app.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Theme-Based Rotation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Modern themes like Dawn 2.0 and newer support multiple announcement
                  blocks that automatically rotate. To set this up:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Add multiple Announcement blocks within your Header section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Each block can have its own text, link, and colour scheme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>The theme will automatically cycle between them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Rotation speed is typically configurable in Theme Settings</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Custom Rotation with JavaScript
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For themes without built-in rotation, you can add this functionality
                  with custom code. Here is a simple implementation:
                </p>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-2">Rotating Announcement Bar Code</h3>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`<div class="announcement-bar-rotating">
  <div class="announcement-message active">
    Free UK delivery on orders over £50
  </div>
  <div class="announcement-message">
    20% off everything with code SAVE20
  </div>
  <div class="announcement-message">
    New arrivals just dropped
  </div>
</div>

<style>
  .announcement-message {
    display: none;
    text-align: center;
    padding: 10px;
  }
  .announcement-message.active {
    display: block;
  }
</style>

<script>
  const messages = document.querySelectorAll('.announcement-message');
  let current = 0;

  setInterval(() => {
    messages[current].classList.remove('active');
    current = (current + 1) % messages.length;
    messages[current].classList.add('active');
  }, 4000);
</script>`}
                  </pre>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Recommended Apps for Advanced Features</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Essential Announcement Bar</strong>: Free, simple, multiple messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Hextom Quick Announcement Bar</strong>: Countdown timers, targeting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Starter Bar</strong>: Geo-targeting, scheduling, analytics</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Custom Announcement Bar */}
              <section id="custom-announcement-bar" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Custom Announcement Bar
                </h2>
                <p className="text-lg text-foreground mb-4">
                  For complete control over design and functionality, you can build a
                  custom announcement bar. This approach is best if you need features
                  like countdown timers, dismissible banners, or complex targeting.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating a Custom Section
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Create a new section file in your theme for a fully customisable
                  announcement bar:
                </p>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-2">custom-announcement.liquid</h3>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`{%- if section.settings.show_announcement -%}
<div
  class="custom-announcement"
  style="
    background-color: {{ section.settings.bg_color }};
    color: {{ section.settings.text_color }};
  "
>
  <div class="custom-announcement__content">
    {%- if section.settings.link != blank -%}
      <a href="{{ section.settings.link }}">
        {{ section.settings.text }}
      </a>
    {%- else -%}
      {{ section.settings.text }}
    {%- endif -%}
  </div>

  {%- if section.settings.dismissible -%}
    <button
      class="custom-announcement__close"
      onclick="this.parentElement.remove()"
    >
      &times;
    </button>
  {%- endif -%}
</div>
{%- endif -%}

<style>
  .custom-announcement {
    position: relative;
    padding: 12px 40px;
    text-align: center;
    font-size: 14px;
  }
  .custom-announcement a {
    color: inherit;
    text-decoration: underline;
  }
  .custom-announcement__close {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: inherit;
  }
</style>

{% schema %}
{
  "name": "Custom Announcement",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_announcement",
      "label": "Show announcement",
      "default": true
    },
    {
      "type": "text",
      "id": "text",
      "label": "Announcement text",
      "default": "Free delivery on orders over £50"
    },
    {
      "type": "url",
      "id": "link",
      "label": "Link"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Background colour",
      "default": "#1a1a1a"
    },
    {
      "type": "color",
      "id": "text_color",
      "label": "Text colour",
      "default": "#ffffff"
    },
    {
      "type": "checkbox",
      "id": "dismissible",
      "label": "Allow customers to dismiss",
      "default": false
    }
  ]
}
{% endschema %}`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Adding a Countdown Timer
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Countdown timers create urgency and can significantly boost conversions
                  for limited-time offers. Here is how to add one:
                </p>

                <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-2">Countdown Timer Code</h3>
                  <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
{`<div class="announcement-countdown">
  <span>Sale ends in: </span>
  <span id="countdown-timer"></span>
</div>

<script>
  const endDate = new Date('2024-03-31T23:59:59').getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown-timer')
        .innerHTML = 'EXPIRED';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))
      / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60))
      / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  }, 1000);
</script>`}
                  </pre>
                </div>
              </section>

              {/* Design Best Practices */}
              <section id="design-best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Design Best Practices
                </h2>
                <p className="text-lg text-foreground mb-6">
                  The most effective announcement bars follow proven design principles.
                  Here is what works best:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Keep It Short</h3>
                    <p className="text-foreground">
                      Aim for under 60 characters. Your message should be scannable in a
                      split second. If you need more detail, link to a dedicated page.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">High Contrast Colours</h3>
                    <p className="text-foreground">
                      Ensure your text is easily readable against the background. Use a
                      contrast checker tool to verify accessibility. WCAG recommends a
                      contrast ratio of at least 4.5:1 for normal text.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Consistent Positioning</h3>
                    <p className="text-foreground">
                      Keep your announcement bar at the very top, above the header. This
                      is where users expect it. Avoid moving it around or making it float.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Mobile Optimisation</h3>
                    <p className="text-foreground">
                      Test on mobile devices. The bar should not take up too much screen
                      space or wrap awkwardly. Consider shorter messages for mobile or
                      a smaller font size.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    A/B test your announcement bar colours. In many stores, a dark bar
                    with white text outperforms other combinations, but your brand and
                    audience may differ. Test to find what works.
                  </p>
                </div>
              </section>

              {/* Conversion Optimisation */}
              <section id="conversion-optimisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Conversion Optimisation
                </h2>
                <p className="text-lg text-foreground mb-6">
                  A well-optimised announcement bar can significantly impact your
                  store's performance. Here are strategies to maximise conversions:
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Message Hierarchy
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Not all messages are equal. Prioritise based on what drives the most
                  revenue:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Free shipping thresholds</strong>: Consistently the highest impact message</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Active promotions with discount codes</strong>: Creates urgency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Limited-time offers with countdown</strong>: FOMO drives action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>New arrivals or restocks</strong>: Best for engaged customers</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Effective Copy Formulas
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Free UK delivery on orders over £50</strong> (specific threshold)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>20% off sitewide | Code: SAVE20</strong> (clear offer + code)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Sale ends tonight at midnight</strong> (urgency)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span><strong>Check out our new products</strong> (too vague)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span><strong>Welcome to our store!</strong> (not actionable)</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Seasonal Strategies
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Update your announcement bar to match the shopping calendar:
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Black Friday / Cyber Monday</strong>: Focus on your biggest discount</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Christmas</strong>: Emphasise delivery deadlines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>January</strong>: New year sales and clearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Non-peak periods</strong>: Free shipping or loyalty rewards</span>
                  </li>
                </ul>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Mistakes
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Avoid these frequent announcement bar mistakes that hurt rather than
                  help your conversions:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Too Many Messages</h3>
                    <p className="text-foreground">
                      Rotating between five or more messages dilutes each one. Stick to
                      two or three maximum. More is overwhelming, not helpful.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Outdated Promotions</h3>
                    <p className="text-foreground">
                      Nothing damages trust faster than an expired offer. Set calendar
                      reminders to update your announcement bar when promotions end.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Broken Links</h3>
                    <p className="text-foreground">
                      If your announcement links to a sale page, ensure that page exists
                      and has relevant content. Test links regularly, especially after
                      making changes to your store.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Excessive Height</h3>
                    <p className="text-foreground">
                      Your announcement bar should be a thin strip, not a banner. On
                      mobile especially, a large announcement bar pushes important
                      content below the fold.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Ignoring Mobile</h3>
                    <p className="text-foreground">
                      What looks fine on desktop might wrap onto three lines on mobile.
                      Always test on actual phones, not just browser resize.
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
                  Now that you understand how to create effective announcement bars,
                  here is how to continue improving:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Set up your first announcement bar</strong>
                      <p className="text-foreground mt-1">Start with a free shipping threshold message. It is proven to work.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Track the impact</strong>
                      <p className="text-foreground mt-1">Monitor your average order value before and after. Most stores see a lift.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Test different messages</strong>
                      <p className="text-foreground mt-1">Try different copy and colours to find what resonates with your audience.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-add-custom-css-to-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Custom CSS Guide</h4>
                      <p className="text-sm text-foreground">Style your announcement bar</p>
                    </Link>
                    <Link
                      href="/shopify-theme-development"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Theme Development</h4>
                      <p className="text-sm text-foreground">Custom announcement solutions</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Announcement Bar?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We can build custom announcement bars with advanced features like
            geo-targeting, A/B testing, and countdown timers.
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
