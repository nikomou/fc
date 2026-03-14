import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FAQSection } from "@/components/ui/FAQSection";
import { Button } from "@/components/ui/Button";
import { siteConfig, locations } from "@/lib/constants";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { ValueCard } from "@/components/ui/ValueCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap,
  Palette,
  ArrowRightLeft,
  Code,
  Gauge,
  Headphones,
  MessageCircle,
} from "lucide-react";
import { OfficeAccordion } from "@/components/ui/OfficeAccordion";

const whyChooseCards = [
  {
    title: "Capital Expertise",
    description: "Deep understanding of London's competitive ecommerce market and the brands that thrive in the UK capital.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Building2",
  },
  {
    title: "Remote London Team",
    description: "Experienced Shopify developers working remotely across London, available for video calls and collaborative sessions.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Monitor",
  },
  {
    title: "Enterprise Results",
    description: "Trusted by leading London brands with Shopify Plus solutions that scale to millions in revenue.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Agile Delivery",
    description: "Fast, efficient project delivery with regular updates and transparent communication throughout.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const londonLocation = locations.find((l) => l.id === "london")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "London Shopify Agency | Shopify Plus Experts | UK Capital",
  description:
    "Leading Shopify & Shopify Plus agency serving London. Custom development, theme design & migrations for UK capital brands. Free quote.",
  alternates: {
    canonical: "/shopify-agency-london",
  },
  openGraph: {
    title: "London Shopify Agency | Shopify Plus Experts | UK Capital",
    description:
      "Leading Shopify & Shopify Plus agency serving London businesses. Custom development, theme design & migrations for ambitious brands in the UK capital.",
    url: "/shopify-agency-london",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-london.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency London - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Shopify Agency | Shopify Plus Experts | UK Capital",
    description:
      "Leading Shopify & Shopify Plus agency serving London businesses. Custom development, theme design & migrations for ambitious brands.",
    images: ["/images/og-london.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth London brands.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes designed to convert visitors into customers.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & more.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description: "Custom Shopify apps and integrations for your unique needs.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description: "Speed up your store and improve Core Web Vitals scores.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description: "Dedicated support packages for London businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const londonBrands = [
  "ASOS",
  "Gymshark",
  "Charlotte Tilbury",
  "Sweaty Betty",
  "AllSaints",
  "Selfridges",
];

const faqs = [
  {
    question: "Do you have a physical office in London?",
    answer:
      "Whilst we don't have a physical office in London, we have experienced Shopify developers working remotely across the capital. We conduct all meetings via video call and can arrange in-person meetings at our Manchester or Liverpool offices when needed.",
  },
  {
    question: "How do you work with London-based clients?",
    answer:
      "We use modern collaboration tools like Slack, Zoom, and Loom for seamless communication. Our London-based developers are available during business hours for calls and screen shares. Many of our most successful client relationships are fully remote.",
  },
  {
    question: "Can you meet in person if needed?",
    answer:
      "Absolutely! While our team works remotely from London, we can arrange face-to-face meetings at our Manchester or Liverpool offices. Both cities are easily accessible from London by train in under 2.5 hours.",
  },
  {
    question: "What size London businesses do you work with?",
    answer:
      "We work with London businesses of all sizes, from ambitious startups launching their first Shopify store to established enterprise brands on Shopify Plus generating millions in revenue.",
  },
  {
    question: "How long does a typical Shopify project take?",
    answer:
      "Project timelines vary based on scope. A theme customisation might take 2-3 weeks, while a full custom build could take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you understand the London ecommerce market?",
    answer:
      "Yes, we have extensive experience working with London brands and understand the competitive nature of the capital's ecommerce scene. We've helped London businesses compete with major players like ASOS and Selfridges.",
  },
];

const serviceAreas = [
  "Central London",
  "East London",
  "West London",
  "North London",
  "South London",
  "Shoreditch",
  "Canary Wharf",
  "Westminster",
  "Camden",
  "Hackney",
  "Islington",
  "Kensington",
  "Richmond",
  "Croydon",
];

// JSON-LD Structured Data
const londonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-london#localbusiness`,
      name: `${siteConfig.name} London`,
      description: "Expert Shopify and Shopify Plus agency serving London businesses with custom theme development, migrations, and ongoing support from our remote London team.",
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-london`,
      telephone: `+44-${londonLocation.phone.replace(/\s/g, "-").replace(/^0/, "")}`,
      email: siteConfig.email,
      priceRange: "£££",
      address: {
        "@type": "PostalAddress",
        streetAddress: manchesterLocation.streetAddress!,
        addressLocality: manchesterLocation.addressLocality,
        addressRegion: "Greater Manchester",
        postalCode: manchesterLocation.postalCode!,
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: manchesterLocation.geo.latitude,
        longitude: manchesterLocation.geo.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
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
          name: "Shopify Agency London",
          item: `${siteConfig.url}/shopify-agency-london`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} London`,
        "@id": `${siteConfig.url}/shopify-agency-london#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "James Mitchell",
      },
      reviewBody:
        "Working with Flex Commerce remotely has been seamless. Despite not being in the same city, their London-based developers understood our brand perfectly. Our site speed improved by 40% and conversions are up significantly.",
      datePublished: "2024-12-10",
    },
  ],
};

export default function LondonPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(londonSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                Serving London Remotely
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
                Shopify Agency London
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving ambitious London brands. Helping ecommerce
                businesses in the UK capital build experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in London, we have
                experienced Shopify developers working remotely across the
                capital. Our team is available for video calls, screen shares,
                and collaborative sessions throughout the working day.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing
                support, we deliver end-to-end Shopify solutions for London
                businesses. We&apos;ve helped 50+ brands increase their online
                revenue and streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href="/quote" size="lg" variant="cta">
                  Get a Free Quote
                </Button>
                <Button href="/work" variant="outline" size="lg">
                  Our Work
                </Button>
              </div>
              <TrustBadge align="left" showRating={false} />
            </div>
            <div className="space-y-4">
              {/* Office Accordion */}
              <OfficeAccordion
                offices={[
                  {
                    name: "Manchester Office",
                    streetAddress: manchesterLocation.streetAddress!,
                    addressLocality: manchesterLocation.addressLocality,
                    postalCode: manchesterLocation.postalCode!,
                  },
                  {
                    name: "Liverpool Office",
                    streetAddress: liverpoolLocation.streetAddress!,
                    addressLocality: liverpoolLocation.addressLocality,
                    postalCode: liverpoolLocation.postalCode!,
                  },
                ]}
              />

              {/* Contact Info */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-foreground-dark mb-3">
                  Get in Touch
                </h3>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-foreground hover:text-foreground-dark"
                  >
                    <Mail className="w-4 h-4" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why London */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our London Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            London is home to some of the world&apos;s most innovative ecommerce
            brands. We understand the competitive landscape and what it takes to
            stand out in the UK capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseCards.map((card, index) => (
            <ValueCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA Strip */}
      <Section background="dark">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to grow your London ecommerce business?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your London brand succeed
              online.
            </p>
          </div>
          <Button href="/quote" variant="cta" size="lg">
            Get a Free Quote
          </Button>
        </div>
      </Section>

      {/* Services */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Shopify Services for London
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for London businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4 transition-colors"
                  style={{
                    borderColor: service.color,
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/shopify-services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Why London Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why London Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            London is the UK&apos;s ecommerce hub, home to global brands like
            ASOS, Gymshark, and Charlotte Tilbury. These industry leaders trust
            Shopify Plus to power their growth - proof that the platform can
            handle serious scale.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {londonBrands.map((brand) => (
            <div
              key={brand}
              className="text-xl md:text-2xl font-bold text-gray-300"
            >
              {brand}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/shopify-plus" variant="outline">
            Learn About Shopify Plus
          </Button>
        </div>
      </Section>

      {/* Testimonial */}
      <TestimonialCard
        quote="Working with Flex Commerce remotely has been seamless. Despite not being in the same city, their London-based developers understood our brand perfectly. Our site speed improved by 40% and conversions are up significantly."
        author="James Mitchell"
        role="Head of Digital, London Fashion Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving All of London & The South East
          </h2>
          <p className="text-foreground mb-6">
            Our remote London team serves businesses across the entire capital
            and South East region. Whether you&apos;re based in the City,
            Shoreditch&apos;s tech hub, or anywhere else in London, we&apos;re
            ready to help your ecommerce business thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-gray-100 rounded-full text-foreground-dark"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>


      <FAQSection faqs={faqs} />

      {/* Contact Our Team Section (replaces map) */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#ef436b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-[#ef436b]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
                Contact Our London Team
              </h2>
              <p className="text-foreground max-w-2xl mx-auto">
                Ready to discuss your Shopify project? Our London-based
                developers are available for video calls and consultations. Get
                in touch today for a free quote and discover how we can help
                your brand grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <Phone className="w-6 h-6 text-[#ef436b] mx-auto mb-3" />
                <p className="font-semibold text-foreground-dark mb-1">
                  Call Us
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-foreground hover:text-[#ef436b]"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="text-center p-4">
                <Mail className="w-6 h-6 text-[#ef436b] mx-auto mb-3" />
                <p className="font-semibold text-foreground-dark mb-1">
                  Email Us
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground hover:text-[#ef436b]"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="text-center p-4">
                <Clock className="w-6 h-6 text-[#ef436b] mx-auto mb-3" />
                <p className="font-semibold text-foreground-dark mb-1">Hours</p>
                <p className="text-foreground">Mon-Fri: 9am - 5:30pm</p>
              </div>
            </div>

            <div className="text-center">
              <Button href="/quote" variant="cta" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
