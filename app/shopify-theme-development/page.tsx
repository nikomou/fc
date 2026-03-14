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
  Palette,
  Smartphone,
  Gauge,
  Eye,
  ShoppingCart,
  Settings,
  Check,
  Paintbrush,
  Code,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Theme Development | Custom Themes | Flex Commerce",
  description:
    "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes by certified Shopify experts in Manchester & Liverpool.",
  alternates: {
    canonical: "/shopify-theme-development",
  },
  openGraph: {
    title: "Shopify Theme Development | Custom Themes | Flex Commerce",
    description:
      "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes built by certified Shopify experts in Manchester & Liverpool.",
    url: "/shopify-theme-development",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Theme Development - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Theme Development | Custom Themes | Flex Commerce",
    description:
      "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes built by certified Shopify experts.",
    images: ["/images/og-image.png"],
  },
};

const features = [
  {
    icon: Paintbrush,
    title: "Custom Design",
    description: "Unique designs tailored to your brand, not cookie-cutter templates.",
    color: "#ef436b",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Responsive designs that look perfect on every device and screen size.",
    color: "#8b5cf6",
  },
  {
    icon: Gauge,
    title: "Speed Optimised",
    description: "Lightning-fast themes that score high on Core Web Vitals.",
    color: "#0ea5e9",
  },
  {
    icon: Eye,
    title: "Accessibility",
    description: "WCAG compliant themes that work for all users.",
    color: "#10b981",
  },
  {
    icon: ShoppingCart,
    title: "Conversion Focused",
    description: "Strategic layouts designed to turn visitors into customers.",
    color: "#f59e0b",
  },
  {
    icon: Settings,
    title: "Easy to Manage",
    description: "Intuitive theme settings so you can update content without code.",
    color: "#64748b",
  },
];
const capabilityTheme = {
  wave: "/images/wave-pink-corner.svg",
  circle: "/images/circles/circle-pink.svg",
  cardBg: "#fff5f7",
};


const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your brand, audience, and goals to inform the design direction.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our designers create custom mockups for key pages, refining until perfect.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your theme with clean code, optimised for speed and SEO.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Thorough testing, training, and a smooth launch with ongoing support.",
  },
];

const includes = [
  "Custom homepage design",
  "Collection & product templates",
  "Mobile-responsive layouts",
  "Speed optimisation",
  "SEO best practices",
  "Theme documentation",
  "Content migration support",
  "30-day post-launch support",
];

const themeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Theme Development",
  description: "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes built by certified Shopify experts in Manchester & Liverpool.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Web Development",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-theme-development`,
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
      name: "Shopify Theme Development",
      item: `${siteConfig.url}/shopify-theme-development`,
    },
  ],
};

const faqs = [
  {
    q: "How long does a custom Shopify theme take to build?",
    a: "A bespoke Shopify theme project typically takes 8–12 weeks from discovery to launch. This covers design mockups, development, testing, content migration support, and a thorough QA process. We can discuss a timeline that fits your launch date during our initial call.",
  },
  {
    q: "Do you build themes from scratch or customise existing ones?",
    a: "We do both. We can build fully bespoke themes from a blank canvas for maximum flexibility, or we can customise a premium Shopify theme such as Dawn or Prestige to your brand requirements. We'll recommend the right approach based on your budget and goals.",
  },
  {
    q: "Will my custom theme be fast and score well on Core Web Vitals?",
    a: "Yes, performance is baked into our development process. We optimise images, minimise JavaScript, and follow Shopify's best practices to ensure your theme scores well on Core Web Vitals. Our custom-built themes consistently achieve Lighthouse scores of 85+ on mobile.",
  },
  {
    q: "Can I update my theme content without needing a developer?",
    a: "Absolutely. We build themes with intuitive Shopify sections and blocks so your team can update homepage layouts, banners, and content directly from the Shopify theme editor, no coding required. We also provide training and documentation on launch.",
  },
  {
    q: "Do you also handle Shopify speed optimisation if my current theme is slow?",
    a: "Yes. If you don't need a full rebuild but your existing theme is underperforming, our Shopify speed optimisation service can significantly improve your scores. We audit your current theme code, identify bottlenecks, and implement targeted improvements.",
  },
  {
    q: "Which locations do you serve for theme development projects?",
    a: "We're based in Manchester and Liverpool and work with clients across the whole of the UK. We manage projects remotely as well as in person for clients who prefer face-to-face collaboration.",
  },
];

export default function ThemeDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(themeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge={{ icon: Palette, text: "Theme Development" }}
        title="Custom Shopify Theme Development"
        description="Bespoke Shopify themes designed and built to convert. Pixel-perfect, high-performance, and tailored to your brand."
        primaryCta={{ text: "Get a Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "pink", bottomLeft: "pink" }}
      />

      {/* Features */}
      <Section background="alt">
          <ServiceCapabilities
            heading="What Makes Our Themes Different"
            subheading="We don&apos;t just build themes, we craft conversion machines."
            items={features}
            theme={capabilityTheme}
          />
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Theme Development Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A proven approach that delivers beautiful, high-performing themes.
          </p>
        </div>

        <ProcessSteps steps={process} />
      </Section>

      {/* What's Included */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              What&apos;s Included
            </h2>
            <p className="text-lg text-foreground mb-8">
              Every custom theme project includes everything you need for a successful launch and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground-dark mb-4">
              Why Custom Over Templates?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground-dark">Stand out from competitors</p>
                  <p className="text-sm text-foreground">No more looking like every other Shopify store.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground-dark">Clean, maintainable code</p>
                  <p className="text-sm text-foreground">No bloated template code slowing you down.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Gauge className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground-dark">Built for performance</p>
                  <p className="text-sm text-foreground">Faster load times mean higher conversions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="The custom theme Flex Commerce built for us has transformed our online presence. Page speed improved by 60% and our conversion rate doubled within three months of launch."
        author="Emma Richardson"
        role="Founder, London Beauty Brand"
      />

      {/* CTA */}
      <Section>
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for a theme that converts?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/work" variant="outline-light" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </Section>

      {/* Internal links */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">
            Shopify Theme Experts Based in the UK
          </h2>
          <p className="text-lg text-foreground">
            We design and build Shopify themes for brands based in{" "}
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
            , and across the UK. Need more than a new theme? Explore our{" "}
            <Link
              href="/shopify-speed-optimisation"
              className="text-[#ef436b] hover:underline"
            >
              speed optimisation
            </Link>{" "}
            and{" "}
            <Link href="/shopify-seo" className="text-[#ef436b] hover:underline">
              Shopify SEO
            </Link>{" "}
            services.
          </p>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-196644.webp"
        imageAlt="Shopify theme development"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      <RelatedServices exclude="Theme Development" />
    </>
  );
}
