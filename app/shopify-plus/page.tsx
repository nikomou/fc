import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import {
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Users,
  Cog,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Plus Development Agency | Flex Commerce",
  description:
    "Expert Shopify Plus development for high-growth UK brands. Custom checkout, B2B, multi-store & automation by certified partners in Manchester & Liverpool.",
  alternates: {
    canonical: "/shopify-plus",
  },
  openGraph: {
    title: "Shopify Plus Development Agency | Flex Commerce",
    description:
      "Expert Shopify Plus development for high-growth UK brands. Custom checkout, B2B, multi-store & automation by certified Shopify Plus partners in Manchester & Liverpool.",
    url: "/shopify-plus",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Plus Development Agency - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Plus Development Agency | Flex Commerce",
    description:
      "Expert Shopify Plus development for high-growth UK brands. Custom checkout, B2B, multi-store & automation by certified Shopify Plus partners.",
    images: ["/images/og-image.png"],
  },
};

const features = [
  {
    icon: Zap,
    title: "Custom Checkout",
    description:
      "Tailored checkout experiences that reduce abandonment and increase conversions.",
  },
  {
    icon: Cog,
    title: "Scripts & Automation",
    description:
      "Automated workflows with Shopify Scripts and Flow for seamless operations.",
  },
  {
    icon: Globe,
    title: "Multi-Store Management",
    description:
      "Expansion stores for different markets, languages, and currencies.",
  },
  {
    icon: Users,
    title: "B2B & Wholesale",
    description:
      "Dedicated B2B channels with custom pricing and ordering experiences.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Advanced security features and compliance for high-volume stores.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description:
      "Infrastructure built to handle flash sales and rapid growth.",
  },
];

const capabilityTheme = {
  wave: "/images/wave-yellow-corner.svg",
  circle: "/images/circles/circle-yellow.svg",
  cardBg: "#fffdf5",
};

const benefits = [
  "Unlimited staff accounts",
  "Advanced analytics & reporting",
  "Dedicated support from Shopify",
  "Higher API call limits",
  "Launchpad for campaign management",
  "Avalara tax automation",
  "Organisation management",
  "Lower transaction fees",
];

const faqs = [
  {
    q: "What is Shopify Plus and do I need it?",
    a: "Shopify Plus is Shopify's enterprise-grade ecommerce platform designed for high-growth and high-volume brands. It unlocks advanced features including customisable checkout, Shopify Scripts, Flow automation, B2B selling, and dedicated merchant success management. We typically recommend it for stores turning over £1M+ annually or those needing enterprise-level customisation.",
  },
  {
    q: "How long does a Shopify Plus build take?",
    a: "The timeline depends on the scope of your project. A standard Shopify Plus migration from another platform typically takes 6–10 weeks. A fully custom Shopify Plus build with bespoke theme, integrations, and custom checkout usually takes 10–16 weeks. We provide a detailed project timeline during the discovery phase.",
  },
  {
    q: "Can you migrate us from Magento or WooCommerce to Shopify Plus?",
    a: "Yes — platform migration is one of our core specialisms. We handle migrations from Magento, WooCommerce, BigCommerce, Salesforce Commerce Cloud, and more. Our process preserves your SEO rankings, migrates all product data and customer records, and sets up 301 redirects to protect your search traffic. Learn more on our Shopify migration page.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Absolutely. We offer flexible retainer packages providing ongoing Shopify Plus support, development work, and strategic guidance after launch. Our clients in Manchester, Liverpool, and across the UK rely on us as a long-term partner rather than a one-off agency.",
  },
  {
    q: "How much does Shopify Plus development cost?",
    a: "Shopify Plus projects at Flex Commerce typically start from £13,500 for a full build. The investment depends on the complexity of your requirements — custom checkout, third-party integrations, and bespoke features all influence the final price. We provide detailed, transparent quotes with no hidden costs.",
  },
  {
    q: "Are you a certified Shopify Plus partner?",
    a: "Yes. Flex Commerce is a certified Shopify partner with proven experience delivering Shopify Plus projects for ambitious UK brands. Our team holds Shopify certifications and we have a track record of successful enterprise ecommerce builds.",
  },
];

const shopifyPlusSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Plus Development",
  description:
    "Expert Shopify Plus development for high-growth UK brands. Custom checkout, B2B, multi-store & automation by certified Shopify Plus partners.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Shopify Plus Development",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-plus`,
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
      name: "Shopify Plus Development",
      item: `${siteConfig.url}/shopify-plus`,
    },
  ],
};

export default function ShopifyPlusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyPlusSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge={{ icon: Zap, text: "Enterprise Ecommerce" }}
        title="Shopify Plus Development Agency"
        description="Enterprise-grade Shopify solutions for high-growth UK brands. Unlock the full potential of Shopify Plus with our certified expert team in Manchester and Liverpool."
        primaryCta={{ text: "Get a Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "yellow", bottomLeft: "yellow" }}
      />

      {/* Features */}
      <Section background="alt">
        <ServiceCapabilities
          heading="Shopify Plus Capabilities"
          subheading="We help you leverage every feature of Shopify Plus to grow your business."
          items={features}
          theme={capabilityTheme}
        />
      </Section>

      {/* Benefits */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground-dark mb-6">
              Why Shopify Plus?
            </h2>
            <p className="text-lg text-foreground mb-8">
              Shopify Plus is the enterprise ecommerce platform built for
              high-growth brands. It provides the tools, features, and support
              you need to scale without limits. Brands across Manchester,
              Liverpool, and the wider UK are choosing Shopify Plus to power
              their ambitions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-4">99.99%</div>
              <p className="text-lg text-foreground-dark font-medium mb-2">
                Uptime Guarantee
              </p>
              <p className="text-foreground">
                Shopify Plus offers industry-leading reliability for your
                mission-critical ecommerce operations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Our Shopify Plus Process
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A proven approach for Shopify Plus implementations and migrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment",
              description:
                "We analyse your current setup and identify opportunities.",
            },
            {
              step: "02",
              title: "Planning",
              description:
                "We create a detailed roadmap for your Shopify Plus build.",
            },
            {
              step: "03",
              title: "Development",
              description:
                "We build your custom Shopify Plus solution with care.",
            },
            {
              step: "04",
              title: "Optimisation",
              description:
                "We continuously optimise for performance and growth.",
            },
          ].map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="text-5xl font-bold text-accent/20 mb-4">
                {phase.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                {phase.title}
              </h3>
              <p className="text-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Internal linking section */}
      <Section background="alt">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Shopify Plus Experts Across the UK
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto mb-8">
            Based in{" "}
            <Link
              href="/shopify-agency-manchester"
              className="text-[#ef436b] hover:underline"
            >
              Manchester
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-agency-liverpool"
              className="text-[#ef436b] hover:underline"
            >
              Liverpool
            </Link>
            , Flex Commerce works with ambitious brands across the UK. Whether
            you need a full Shopify Plus build, a{" "}
            <Link
              href="/shopify-migration"
              className="text-[#ef436b] hover:underline"
            >
              platform migration
            </Link>
            , or a{" "}
            <Link
              href="/shopify-theme-development"
              className="text-[#ef436b] hover:underline"
            >
              custom theme
            </Link>
            , our certified team delivers enterprise-grade results.
          </p>
          <Button href="/quote" variant="cta" size="lg">
            Get a Free Quote
          </Button>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      <RelatedServices exclude="Shopify Plus" />
    </>
  );
}
