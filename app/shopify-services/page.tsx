import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  Zap,
  Palette,
  Code,
  ArrowRightLeft,
  Gauge,
  Headphones,
  ArrowRight,
  Check,
  Layers,
  Search,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Development Services | Flex Commerce",
  description:
    "Full-service Shopify development agency. Custom themes, Shopify Plus, app development, migrations, speed optimisation & ongoing support for UK brands.",
  alternates: {
    canonical: "/shopify-services",
  },
  openGraph: {
    title: "Shopify Development Services | Flex Commerce",
    description:
      "Full-service Shopify development agency. Custom themes, Shopify Plus, app development, migrations, speed optimisation & ongoing support.",
    url: "/shopify-services",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise-grade solutions for high-growth brands. Custom checkout, advanced automation, and scalable architecture.",
    features: [
      "Custom checkout development",
      "Scripts and Flow automation",
      "Multi-store management",
      "B2B/wholesale features",
    ],
    icon: Zap,
    color: "#f59e0b",
    href: "/shopify-plus",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes designed and built to convert. Pixel-perfect, high-performance, and tailored to your brand.",
    features: [
      "Custom design from scratch",
      "Mobile-first responsive",
      "Speed optimised",
      "Conversion-focused layouts",
    ],
    icon: Palette,
    color: "#ef436b",
    href: "/shopify-theme-development",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and integrations built for your unique business needs. Extend your store's functionality.",
    features: [
      "Custom private apps",
      "Third-party integrations",
      "API development",
      "Workflow automation",
    ],
    icon: Code,
    color: "#10b981",
    href: "/shopify-app-development",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from any platform. Your data, SEO, and customers transferred with zero downtime.",
    features: [
      "Platform assessment",
      "Data migration",
      "SEO preservation",
      "URL redirects",
    ],
    icon: ArrowRightLeft,
    color: "#8b5cf6",
    href: "/shopify-migration",
  },
  {
    title: "Speed Optimisation",
    description:
      "Faster stores convert better. We optimise every aspect of your store for maximum performance and Core Web Vitals.",
    features: [
      "Core Web Vitals fixes",
      "Image optimisation",
      "Code minification",
      "Third-party script audit",
    ],
    icon: Gauge,
    color: "#0ea5e9",
    href: "/shopify-speed-optimisation",
  },
  {
    title: "Ongoing Support",
    description:
      "Dedicated support and maintenance packages. We're here for you long after launch with flexible retainer options.",
    features: [
      "Priority support",
      "Bug fixes & updates",
      "Performance monitoring",
      "Monthly reporting",
    ],
    icon: Headphones,
    color: "#64748b",
    href: "/shopify-support",
  },
];

const additionalServices = [
  {
    title: "Shopify SEO",
    description: "Organic traffic growth through technical SEO, content strategy, and ongoing optimisation.",
    icon: Search,
    color: "#f59e0b",
    href: "/shopify-seo",
  },
  {
    title: "Store Audits",
    description: "Comprehensive analysis of your store's performance, UX, and conversion opportunities.",
    icon: Wrench,
    color: "#ef436b",
    href: "/shopify-store-audit",
  },
  {
    title: "Integrations",
    description: "Connect Shopify to your ERP, CRM, PIM, and other business systems seamlessly.",
    icon: Layers,
    color: "#8b5cf6",
    href: "/shopify-integrations",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and challenges to understand what success looks like.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We create a detailed roadmap with clear milestones, timelines, and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds your solution with regular check-ins and transparent communication.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We launch your project and provide ongoing support to ensure continued success.",
  },
];

// JSON-LD Schema
const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/shopify-services#services`,
      name: "Shopify Development Services",
      description: "Full-service Shopify development agency offering custom themes, Shopify Plus development, app development, migrations, speed optimisation and ongoing support.",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: "Shopify Development",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Shopify Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
          position: index + 1,
        })),
      },
    },
    {
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
          name: "Services",
          item: `${siteConfig.url}/shopify-services`,
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <PageHero
        badge={{ icon: Layers, text: "Full-Service Shopify Agency" }}
        title="Shopify Development Services"
        description="From custom theme development to complex integrations, we provide end-to-end Shopify solutions for ambitious brands."
        primaryCta={{ text: "Get a Free Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "pink", bottomLeft: "blue" }}
      />

      {/* Main Services */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Everything you need to build, grow, and scale your Shopify store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-5"
                  style={{
                    borderColor: service.color,
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: service.color }}
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium hover:gap-2 transition-all"
                  style={{ color: service.color }}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A proven process that delivers results, on time and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((phase, index) => (
            <div key={phase.step} className="relative">
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-700" />
              )}
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ef436b] text-white text-2xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Additional Services */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Additional Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Complementary services to help your store reach its full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4"
                  style={{
                    borderColor: service.color,
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-black">
                  {service.title}
                </h3>
                <p className="text-foreground text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Testimonial */}
      <TestimonialCard
        quote="Flex Commerce transformed our online presence. Their expertise in Shopify Plus helped us scale from £2M to £8M in annual revenue. The team's attention to detail and proactive communication made the entire process seamless."
        author="Sarah Mitchell"
        role="Ecommerce Director, London Fashion Brand"
      />

      {/* CTA Strip */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Not sure which service you need?
              </h2>
              <p className="text-gray-300">
                Book a free consultation and we&apos;ll help you find the right solution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/quote" variant="cta" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
