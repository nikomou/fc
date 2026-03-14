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
    title: "Shopify Partners",
    description: "Official Shopify & Shopify Plus partners with certified developers ready to scale your Birmingham business.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "West Midlands Expertise",
    description: "Experienced Shopify developers working remotely across the West Midlands, understanding local market needs.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Users",
  },
  {
    title: "Proven Results",
    description: "£50M+ revenue generated for UK brands with measurable growth and data-driven strategies.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Seamless Remote Collaboration",
    description: "Modern communication tools and agile workflows ensure efficient project delivery, wherever you are.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const birminghamLocation = locations.find((l) => l.id === "birmingham")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Birmingham Shopify Agency | Shopify Plus Experts | West Midlands",
  description:
    "Expert Shopify & Shopify Plus agency serving Birmingham and the West Midlands. Custom themes, migrations & ongoing support. Get a free quote.",
  alternates: {
    canonical: "/shopify-agency-birmingham",
  },
  openGraph: {
    title: "Birmingham Shopify Agency | Shopify Plus Experts | West Midlands",
    description:
      "Expert Shopify & Shopify Plus development for Birmingham and West Midlands businesses. Custom themes, migrations & ongoing support from certified Shopify partners.",
    url: "/shopify-agency-birmingham",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-birmingham.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Birmingham - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birmingham Shopify Agency | Shopify Plus Experts | West Midlands",
    description:
      "Expert Shopify & Shopify Plus development for Birmingham and West Midlands businesses. Custom themes, migrations & ongoing support.",
    images: ["/images/og-birmingham.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Birmingham and West Midlands brands.",
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
    description: "Dedicated support packages for Birmingham businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const birminghamBrands = [
  "Cadbury",
  "JLR",
  "Selfridges",
  "Bullring",
  "Gymshark",
  "Halfords",
];

const faqs = [
  {
    question: "Do you have an office in Birmingham?",
    answer:
      "While we don't have a physical office in Birmingham, we have experienced Shopify developers working remotely across the West Midlands. Our team is fully equipped to collaborate with Birmingham businesses through video calls, screen sharing, and modern project management tools.",
  },
  {
    question: "How does working with a remote team work?",
    answer:
      "We use industry-leading collaboration tools including Slack, Zoom, and project management platforms to ensure seamless communication. You'll have a dedicated project manager and regular video check-ins. Many of our clients prefer this approach as it offers greater flexibility and faster response times.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Absolutely! We have offices in Manchester and Liverpool, both easily accessible from Birmingham. We're happy to arrange face-to-face meetings at either location, or our team can travel to Birmingham for key project milestones.",
  },
  {
    question: "What size businesses do you work with?",
    answer:
      "We work with businesses of all sizes, from startups launching their first Shopify store to enterprise brands on Shopify Plus generating millions in revenue.",
  },
  {
    question: "How long does a typical Shopify project take?",
    answer:
      "Project timelines vary based on scope. A theme customisation might take 2-3 weeks, while a full custom build could take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Can you help with Shopify Plus migrations?",
    answer:
      "Yes, we're Shopify Plus partners and have extensive experience migrating brands from platforms like Magento, WooCommerce, and BigCommerce to Shopify Plus.",
  },
];

const serviceAreas = [
  "Birmingham",
  "Solihull",
  "Wolverhampton",
  "Coventry",
  "Walsall",
  "Dudley",
  "Sutton Coldfield",
  "West Bromwich",
  "Tamworth",
  "Redditch",
  "Worcester",
  "Stratford-upon-Avon",
  "Warwick",
  "Leamington Spa",
];

// JSON-LD Structured Data
const birminghamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-birmingham#localbusiness`,
      name: `${siteConfig.name} Birmingham`,
      description: "Expert Shopify and Shopify Plus agency serving Birmingham and the West Midlands. Custom development, theme design, migrations and ongoing support for ambitious West Midlands brands.",
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-birmingham`,
      telephone: `+44-${siteConfig.phone.replace(/\s/g, "-").replace(/^0/, "")}`,
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
        latitude: birminghamLocation.geo.latitude,
        longitude: birminghamLocation.geo.longitude,
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
          name: "Shopify Agency Birmingham",
          item: `${siteConfig.url}/shopify-agency-birmingham`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Birmingham`,
        "@id": `${siteConfig.url}/shopify-agency-birmingham#localbusiness`,
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
        "Working remotely with Flex Commerce was seamless. Despite not being in the same city, their communication was excellent and they delivered our new Shopify Plus store ahead of schedule. Revenue is up 45% since launch.",
      datePublished: "2024-09-20",
    },
  ],
};

export default function BirminghamPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birminghamSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                West Midlands
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
                Shopify Agency Birmingham
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency helping Birmingham and West Midlands brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in Birmingham, we have
                experienced Shopify developers working remotely across the West
                Midlands. Our team delivers the same exceptional results through
                modern collaboration tools and agile workflows.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing
                support, we deliver end-to-end Shopify solutions. We&apos;ve helped
                50+ UK brands increase their online revenue and streamline their
                operations.
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
                <h3 className="font-semibold text-foreground-dark mb-3">Get in Touch</h3>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-foreground hover:text-foreground-dark"
                  >
                    <Mail className="w-4 h-4" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 text-foreground hover:text-foreground-dark"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Birmingham */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Birmingham Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Birmingham is the UK&apos;s second largest city and a thriving hub for
            retail and ecommerce. Our remote team brings enterprise-level
            Shopify expertise to West Midlands businesses.
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
              Ready to grow your ecommerce business?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Birmingham brand succeed online.
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
            Shopify Services for Birmingham
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Birmingham and West Midlands businesses.
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
                  style={{ borderColor: service.color, backgroundColor: `${service.color}10` }}
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

      {/* Why Birmingham Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Birmingham Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Birmingham is home to iconic retail brands and a thriving startup
            scene. From Cadbury to Gymshark, West Midlands businesses are
            scaling globally on Shopify Plus - proof that the platform can
            handle serious growth.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {birminghamBrands.map((brand) => (
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
        quote="Working remotely with Flex Commerce was seamless. Despite not being in the same city, their communication was excellent and they delivered our new Shopify Plus store ahead of schedule. Revenue is up 45% since launch."
        author="James Mitchell"
        role="Founder, West Midlands Lifestyle Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Birmingham & the West Midlands
          </h2>
          <p className="text-foreground mb-6">
            Our remote team serves businesses across Birmingham and the wider
            West Midlands region. With team members based locally and offices in
            Manchester and Liverpool for in-person meetings, we&apos;re perfectly
            positioned to support your ecommerce growth.
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


      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-2220316.webp"
        imageAlt="Birmingham Shopify agency supporting Midlands ecommerce businesses"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Contact Our Team Section (instead of map) */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ef436b]/10 mb-6">
            <MessageCircle className="w-8 h-8 text-[#ef436b]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Contact Our Team
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Ready to discuss your project? Our team is available for video calls,
            phone consultations, or we can arrange to meet you at our Manchester
            or Liverpool offices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm text-foreground">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 hover:text-foreground-dark"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-2 hover:text-foreground-dark"
            >
              <Mail className="w-4 h-4" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
