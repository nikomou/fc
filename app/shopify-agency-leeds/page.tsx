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
  MessageSquare,
} from "lucide-react";
import { OfficeAccordion } from "@/components/ui/OfficeAccordion";

const whyChooseCards = [
  {
    title: "Shopify Partners",
    description: "Official Shopify & Shopify Plus partners with certified developers serving Yorkshire businesses.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Yorkshire Coverage",
    description: "Experienced remote developers across Yorkshire delivering the same quality as our office-based teams.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Globe",
  },
  {
    title: "Proven Results",
    description: "Helping Yorkshire brands scale online with measurable growth and increased conversions.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Seamless Communication",
    description: "Video calls, screen sharing, and real-time collaboration tools make remote work feel local.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Video",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const leedsLocation = locations.find((l) => l.id === "leeds")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Leeds Shopify Agency | Shopify Plus Experts | Yorkshire",
  description:
    "Expert Shopify & Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design & migrations for ambitious Yorkshire brands. Get a free quote.",
  alternates: {
    canonical: "/shopify-agency-leeds",
  },
  openGraph: {
    title: "Leeds Shopify Agency | Shopify Plus Experts | Yorkshire",
    description:
      "Expert Shopify & Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design & migrations for ambitious Yorkshire brands.",
    url: "/shopify-agency-leeds",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-leeds.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Leeds - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leeds Shopify Agency | Shopify Plus Experts | Yorkshire",
    description:
      "Expert Shopify & Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design & migrations.",
    images: ["/images/og-leeds.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Yorkshire brands.",
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
    description: "Dedicated support packages for Yorkshire businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const leedsBrands = [
  "ASDA",
  "Morrisons",
  "JD Sports",
  "Jet2",
  "Leeds United",
  "First Direct",
];

const faqs = [
  {
    question: "How does working with a remote Leeds Shopify agency work?",
    answer:
      "We use modern collaboration tools including video calls, screen sharing, and project management platforms to ensure seamless communication. You'll have a dedicated account manager and regular check-ins, making remote work feel just as personal as in-office meetings.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Absolutely! While we don't have a physical office in Leeds, our Manchester and Liverpool offices are easily accessible. We're happy to travel to Leeds for important meetings, or you can visit either of our offices. Many clients prefer video calls for convenience.",
  },
  {
    question: "Do you have Shopify developers based in Yorkshire?",
    answer:
      "Yes, we have experienced Shopify developers working remotely across Yorkshire. Combined with our office-based teams in Manchester and Liverpool, this gives us excellent coverage of the North of England.",
  },
  {
    question: "What's your response time for Leeds clients?",
    answer:
      "Our response times are the same for all clients regardless of location. You can expect a response within 2-4 hours during business hours, with urgent issues handled immediately. Remote tools actually speed up our communication.",
  },
  {
    question: "Can you help with Shopify Plus migrations?",
    answer:
      "Yes, we're Shopify Plus partners and have extensive experience migrating brands from platforms like Magento, WooCommerce, and BigCommerce to Shopify Plus. We've helped several Yorkshire brands make the switch successfully.",
  },
];

const serviceAreas = [
  "Leeds",
  "Bradford",
  "Wakefield",
  "Huddersfield",
  "Halifax",
  "Harrogate",
  "York",
  "Sheffield",
  "Doncaster",
  "Barnsley",
  "Rotherham",
  "Hull",
  "Scarborough",
  "Ilkley",
];

// JSON-LD Structured Data
const leedsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-leeds#localbusiness`,
      name: `${siteConfig.name} Leeds`,
      description: "Expert Shopify and Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design, migrations and ongoing support for ambitious Yorkshire brands.",
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-leeds`,
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
        latitude: leedsLocation.geo.latitude,
        longitude: leedsLocation.geo.longitude,
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
          name: "Shopify Agency Leeds",
          item: `${siteConfig.url}/shopify-agency-leeds`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Leeds`,
        "@id": `${siteConfig.url}/shopify-agency-leeds#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "James Whitworth",
      },
      reviewBody:
        "Working with Flex Commerce remotely has been seamless. Despite being based in Leeds, communication has been excellent and the results speak for themselves. Our Shopify store now outperforms all our previous platforms.",
      datePublished: "2024-10-22",
    },
  ],
};

export default function LeedsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leedsSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                Serving Leeds & Yorkshire
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
                Shopify Agency Leeds
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Leeds and Yorkshire. Helping ambitious brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in Leeds, we have
                experienced Shopify developers working remotely across Yorkshire.
                Combined with our established offices in Manchester and Liverpool,
                we offer comprehensive coverage across the North of England.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing support,
                our team delivers end-to-end Shopify solutions. We&apos;ve helped
                50+ brands increase their online revenue and streamline their operations.
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

              {/* Email Contact */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground-dark mb-4">Contact Our Team</h3>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-foreground hover:text-foreground-dark"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leeds */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Leeds Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Leeds is a thriving hub for retail and ecommerce, home to major brands
            and ambitious startups alike. Our remote Yorkshire team combined with
            our northern offices means expert Shopify support is never far away.
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
              Let&apos;s discuss how we can help your Yorkshire brand succeed online.
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
            Shopify Services for Leeds Businesses
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Yorkshire businesses.
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

      {/* Why Leeds Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Leeds Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Yorkshire is home to some of the UK&apos;s biggest retail success stories.
            Brands like ASDA, Morrisons, and JD Sports have proven that Yorkshire
            businesses can scale to global success - Shopify Plus provides the
            platform to get you there.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {leedsBrands.map((brand) => (
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
        quote="Working with Flex Commerce remotely has been seamless. Despite being based in Leeds, communication has been excellent and the results speak for themselves. Our Shopify store now outperforms all our previous platforms."
        author="James Whitworth"
        role="Founder, Yorkshire Lifestyle Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Yorkshire & Beyond
          </h2>
          <p className="text-foreground mb-6">
            Our remote Yorkshire developers combined with our Manchester and
            Liverpool offices give us excellent coverage across the North of
            England. We serve businesses throughout West Yorkshire, South
            Yorkshire, and beyond.
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

      {/* Contact Our Team Section (instead of map) */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
            <div className="w-16 h-16 rounded-full bg-[#ef436b] flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Contact Our Team
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Ready to discuss your Shopify project? Our team is available for
              video calls, phone consultations, or in-person meetings at our
              Manchester or Liverpool offices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="cta" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                Contact Us
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href={`tel:${siteConfig.phone}`} className="text-gray-300 hover:text-white">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href={`mailto:${siteConfig.email}`} className="text-gray-300 hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
