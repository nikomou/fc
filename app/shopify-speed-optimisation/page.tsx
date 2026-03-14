import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQSection } from "@/components/ui/FAQSection";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { siteConfig } from "@/lib/constants";
import {
  Gauge,
  Image,
  Code,
  Smartphone,
  Zap,
  BarChart3,
  Check,
  TrendingUp,
  Clock,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Speed Optimisation | Core Web Vitals | Flex Commerce",
  description:
    "Speed up your Shopify store and improve Core Web Vitals scores. Faster load times mean higher conversions. Expert performance optimisation for UK stores.",
  alternates: {
    canonical: "/shopify-speed-optimisation",
  },
  openGraph: {
    title: "Shopify Speed Optimisation | Core Web Vitals | Flex Commerce",
    description:
      "Speed up your Shopify store and improve Core Web Vitals scores. Faster load times mean higher conversions. Expert performance optimisation for UK stores.",
    url: "/shopify-speed-optimisation",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Speed Optimisation - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Speed Optimisation | Core Web Vitals | Flex Commerce",
    description:
      "Speed up your Shopify store and improve Core Web Vitals scores. Faster load times mean higher conversions. Expert performance optimisation.",
    images: ["/images/og-image.png"],
  },
};

const optimisations = [
  {
    icon: Image,
    title: "Image Optimisation",
    description: "Compress, resize, and lazy load images for faster page loads.",
    color: "#ef436b",
  },
  {
    icon: Code,
    title: "Code Minification",
    description: "Remove bloat and optimise JavaScript, CSS, and Liquid code.",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "Third-Party Audit",
    description: "Identify and optimise slow-loading apps and scripts.",
    color: "#0ea5e9",
  },
  {
    icon: Smartphone,
    title: "Mobile Performance",
    description: "Ensure fast load times on mobile devices where most traffic comes from.",
    color: "#10b981",
  },
  {
    icon: BarChart3,
    title: "Core Web Vitals",
    description: "Improve LCP, FID, and CLS scores for better SEO and UX.",
    color: "#f59e0b",
  },
  {
    icon: Clock,
    title: "Caching Strategy",
    description: "Implement effective browser and CDN caching strategies.",
    color: "#64748b",
  },
];
const capabilityTheme = {
  wave: "/images/wave-black-corner.svg",
  circle: "/images/circles/circle-black.svg",
  cardBg: "#f8f8f8",
};


const stats = [
  { value: "53%", label: "of mobile users leave if a page takes over 3 seconds to load" },
  { value: "1s", label: "delay in page load can reduce conversions by 7%" },
  { value: "70%", label: "of consumers say speed impacts their purchase decisions" },
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "We run comprehensive performance tests and identify bottlenecks.",
  },
  {
    step: "02",
    title: "Prioritise",
    description: "We create a prioritised list of optimisations by impact.",
  },
  {
    step: "03",
    title: "Optimise",
    description: "We implement fixes systematically, testing at each stage.",
  },
  {
    step: "04",
    title: "Monitor",
    description: "We set up monitoring to catch any future regressions.",
  },
];

const speedSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Speed Optimisation",
  description: "Speed up your Shopify store and improve Core Web Vitals scores. Faster load times mean higher conversions. Expert performance optimisation for UK stores.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Performance Optimisation",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-speed-optimisation`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Shopify Speed Optimisation",
      item: `${siteConfig.url}/shopify-speed-optimisation`,
    },
  ],
};

const faqs = [
  {
    q: "What Lighthouse score should my Shopify store aim for?",
    a: "We target a mobile Lighthouse performance score of 80+ and desktop of 90+ for our clients' stores. A score above 80 on mobile correlates strongly with improved Core Web Vitals, which Google uses as a ranking factor. Starting point varies, we've seen stores come to us with scores of 15–30 and leave with scores of 80–95.",
  },
  {
    q: "What is the most common cause of a slow Shopify store?",
    a: "The most common culprits are excessive third-party apps injecting scripts into the storefront, unoptimised images (too large, wrong format, not lazy loaded), render-blocking JavaScript, and bloated theme code. Our audit process identifies exactly what's slowing your store down before we implement any fixes.",
  },
  {
    q: "Will speeding up my store improve my Google rankings?",
    a: "Yes, Core Web Vitals (LCP, FID/INP, and CLS) are a confirmed Google ranking factor under the Page Experience signals. Improving your scores can give you an edge in competitive search results, particularly for mobile searches where Google's mobile-first indexing makes performance more important than ever.",
  },
  {
    q: "Do I need a new theme to improve my store's speed?",
    a: "Not necessarily. In many cases we can significantly improve performance through code optimisation, image improvements, and app auditing without rebuilding the theme. However, if your theme is heavily modified with legacy code, a fresh custom theme build may be the most cost-effective path to a 90+ score.",
  },
  {
    q: "How quickly will I see conversion improvements after speed work?",
    a: "Most clients see measurable conversion improvements within 30 days of go-live following our optimisation work. The magnitude depends on how slow the store was before. We track conversions, bounce rates, and revenue per session before and after to quantify the impact.",
  },
  {
    q: "Do you provide a speed audit before starting work?",
    a: "Yes. Every speed optimisation engagement starts with a thorough performance audit. We run your store through Google PageSpeed Insights, Lighthouse, and WebPageTest across multiple device types and connection speeds. We then present a prioritised list of issues with projected impact before any development work begins.",
  },
];

export default function SpeedOptimisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speedSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge={{ icon: Gauge, text: "Speed Optimisation" }}
        title="Shopify Speed Optimisation"
        description="Faster stores convert better. We optimise every aspect of your Shopify store for maximum performance and improved Core Web Vitals."
        primaryCta={{ text: "Get Speed Audit", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "black", bottomLeft: "black" }}
      />

      {/* Stats */}
      <Section background="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold text-[#ef436b] mb-2">{stat.value}</div>
              <p className="text-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Optimisations */}
      <Section background="alt">
          <ServiceCapabilities
            heading="What We Optimise"
            subheading="We tackle every factor that affects your store&apos;s performance."
            items={optimisations}
            theme={capabilityTheme}
          />
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Optimisation Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A systematic approach that delivers measurable speed improvements.
          </p>
        </div>

        <ProcessSteps steps={process} />
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Why Speed Matters
            </h2>
            <p className="text-lg text-foreground mb-8">
              Page speed directly impacts your bottom line. Faster stores see higher conversions, better SEO rankings, and happier customers.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Higher conversion rates</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Better Google rankings</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Lower bounce rates</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Improved user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Higher customer satisfaction</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#ef436b]/10 to-[#0ea5e9]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Conversion Boost</h3>
                  <p className="text-sm text-foreground">Our clients typically see 15-30% improvement in conversions after optimisation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Core Web Vitals</h3>
                  <p className="text-sm text-foreground">We target green scores across LCP, FID, and CLS metrics.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Revenue Impact</h3>
                  <p className="text-sm text-foreground">Every 100ms improvement in load time increases revenue by 1%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="Our page speed score went from 28 to 89 after Flex Commerce's optimisation work. The impact on our conversion rate was immediate - we saw a 25% increase in the first month."
        author="Tom Bradley"
        role="Founder, UK Sports Equipment Brand"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Is your store running slow?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free speed audit and find out exactly what&apos;s slowing you down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Free Speed Audit
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>

      {/* Internal links */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">
            Shopify Performance Experts Based in the UK
          </h2>
          <p className="text-lg text-foreground">
            Our team works with Shopify merchants across{" "}
            <Link
              href="/shopify-agency-manchester"
              className="text-[#ef436b] hover:underline"
            >
              Manchester
            </Link>
            ,{" "}
            <Link
              href="/shopify-agency-liverpool"
              className="text-[#ef436b] hover:underline"
            >
              Liverpool
            </Link>
            , and the wider UK. Speed optimisation pairs perfectly with our{" "}
            <Link
              href="/shopify-seo"
              className="text-[#ef436b] hover:underline"
            >
              Shopify SEO
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-store-audit"
              className="text-[#ef436b] hover:underline"
            >
              store audit
            </Link>{" "}
            services for comprehensive ecommerce growth.
          </p>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3856027.webp"
        imageAlt="Ecommerce speed optimisation and performance improvements"
        overlayColor="linear-gradient(135deg, #1a1a1a 0%, #374151 100%)"
      />

      <RelatedServices exclude="Speed Optimisation" />
    </>
  );
}
