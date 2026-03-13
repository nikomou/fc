import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
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
    description: "Official Shopify & Shopify Plus partners with certified developers ready to scale your Scottish business.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Scottish Expertise",
    description: "Remote developers across Glasgow who understand the Scottish market and local ecommerce landscape.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Users",
  },
  {
    title: "Proven Results",
    description: "Over £50M revenue generated for UK brands with measurable growth and ROI.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Seamless Communication",
    description: "Video calls, screen sharing, and real-time collaboration tools for effective remote partnerships.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const glasgowLocation = locations.find((l) => l.id === "glasgow")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Glasgow Shopify Agency | Shopify Plus Experts | Scotland",
  description:
    "Leading Shopify & Shopify Plus agency serving Glasgow and Scotland. Custom development, theme design & migrations for ambitious Scottish brands. Get a free quote.",
  alternates: {
    canonical: "/shopify-agency-glasgow",
  },
  openGraph: {
    title: "Glasgow Shopify Agency | Shopify Plus Experts | Scotland",
    description:
      "Leading Shopify & Shopify Plus agency serving Glasgow and Scotland. Custom development, theme design & migrations for ambitious Scottish brands.",
    url: "/shopify-agency-glasgow",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-glasgow.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Glasgow - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glasgow Shopify Agency | Shopify Plus Experts | Scotland",
    description:
      "Leading Shopify & Shopify Plus agency serving Glasgow and Scotland. Custom development, theme design & migrations.",
    images: ["/images/og-glasgow.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Scottish brands.",
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
    description: "Dedicated support packages for Scottish businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const glasgowBrands = [
  "Irn-Bru",
  "Scottish Power",
  "Tennent's",
  "Rangers FC",
  "Celtic FC",
  "Arnold Clark",
];

const faqs = [
  {
    question: "How do you work with Glasgow clients remotely?",
    answer:
      "We use a combination of video calls, screen sharing, project management tools, and instant messaging to ensure seamless collaboration. Our remote developers in Glasgow are available during UK business hours, and we schedule regular check-ins to keep projects on track.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Absolutely! While we work remotely with our Glasgow clients, we're happy to travel to Glasgow for important meetings, workshops, or project kick-offs. You're also welcome to visit our offices in Manchester or Liverpool.",
  },
  {
    question: "What's the benefit of working with a UK-wide agency?",
    answer:
      "Working with Flex Commerce gives you access to a broader talent pool and diverse expertise. Our team has experience with brands across the UK, bringing insights and best practices from various markets to benefit your Glasgow business.",
  },
  {
    question: "Do you understand the Scottish market?",
    answer:
      "Yes! We have team members based in Scotland who understand the local market nuances, consumer preferences, and business landscape. We've successfully delivered projects for Scottish brands and understand what resonates with Scottish consumers.",
  },
  {
    question: "What size businesses do you work with in Glasgow?",
    answer:
      "We work with businesses of all sizes, from Glasgow startups launching their first Shopify store to established Scottish brands on Shopify Plus generating millions in revenue.",
  },
];

const serviceAreas = [
  "Glasgow",
  "Paisley",
  "East Kilbride",
  "Hamilton",
  "Motherwell",
  "Clydebank",
  "Coatbridge",
  "Airdrie",
  "Greenock",
  "Dumbarton",
  "Kilmarnock",
  "Ayr",
  "Irvine",
  "Lanark",
];

// JSON-LD Structured Data
const glasgowSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-glasgow#localbusiness`,
      name: `${siteConfig.name} Glasgow`,
      description: "Leading Shopify & Shopify Plus agency serving Glasgow and Scotland. Custom development, theme design & migrations for ambitious Scottish brands.",
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-glasgow`,
      telephone: `+44-${siteConfig.phone.replace(/\s/g, "-").replace(/^0/, "")}`,
      email: siteConfig.email,
      priceRange: "£££",
      address: {
        "@type": "PostalAddress",
        streetAddress: manchesterLocation.streetAddress,
        addressLocality: manchesterLocation.addressLocality,
        addressRegion: "Greater Manchester",
        postalCode: manchesterLocation.postalCode,
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: glasgowLocation.geo.latitude,
        longitude: glasgowLocation.geo.longitude,
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
          name: "Shopify Agency Glasgow",
          item: `${siteConfig.url}/shopify-agency-glasgow`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Glasgow`,
        "@id": `${siteConfig.url}/shopify-agency-glasgow#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Ewan MacLeod",
      },
      reviewBody:
        "Working remotely with Flex Commerce has been seamless. Despite not having an office in Glasgow, the team's communication and project delivery have been outstanding. Our new Shopify Plus store has increased our Scottish customer base by 68%.",
      datePublished: "2024-12-10",
    },
  ],
};

export default function GlasgowPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glasgowSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                Serving Glasgow Remotely
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
                Shopify Agency Glasgow
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Glasgow and Scotland. Helping ambitious Scottish brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in Glasgow, we have experienced
                Shopify developers working remotely across Scotland&apos;s largest city. Our
                team delivers the same high-quality service you&apos;d expect from a local agency,
                with the added benefit of UK-wide expertise.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing support,
                we deliver end-to-end Shopify solutions for Scottish businesses. We&apos;ve helped
                50+ UK brands increase their online revenue and streamline their operations.
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
                    streetAddress: manchesterLocation.streetAddress,
                    addressLocality: manchesterLocation.addressLocality,
                    postalCode: manchesterLocation.postalCode,
                  },
                  {
                    name: "Liverpool Office",
                    streetAddress: liverpoolLocation.streetAddress,
                    addressLocality: liverpoolLocation.addressLocality,
                    postalCode: liverpoolLocation.postalCode,
                  },
                ]}
              />

              {/* Contact Info */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground-dark mb-4">Get in Touch</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-foreground hover:text-foreground-dark"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                    <p className="text-foreground">Video calls available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Glasgow */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Glasgow Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Glasgow is Scotland&apos;s commercial powerhouse and home to some of the
            UK&apos;s most innovative brands. Our remote team is perfectly positioned
            to help Scottish businesses thrive online.
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
              Ready to grow your Scottish ecommerce business?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Glasgow brand succeed online.
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
            Shopify Services for Glasgow Businesses
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Scottish businesses.
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

      {/* Why Glasgow Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Glasgow Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Scotland&apos;s most successful brands trust Shopify to power their
            ecommerce. From iconic Scottish products to innovative startups,
            Shopify Plus provides the scalability Glasgow businesses need.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {glasgowBrands.map((brand) => (
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
        quote="Working remotely with Flex Commerce has been seamless. Despite not having an office in Glasgow, the team's communication and project delivery have been outstanding. Our new Shopify Plus store has increased our Scottish customer base by 68%."
        author="Ewan MacLeod"
        role="Founder, Edinburgh Spirits Co."
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Glasgow & Central Scotland
          </h2>
          <p className="text-foreground mb-6">
            While our team works remotely, we serve businesses across Glasgow,
            the Central Belt, and throughout Scotland. With video conferencing
            and collaborative tools, distance is no barrier to delivering
            exceptional Shopify solutions for your business.
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

      {/* FAQs */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-foreground-dark mb-2">
                {faq.question}
              </h3>
              <p className="text-foreground">
                {index === 1 ? (
                  <>
                    Absolutely! While we work remotely with our Glasgow clients,
                    we&apos;re happy to travel to Glasgow for important meetings,
                    workshops, or project kick-offs. You&apos;re also welcome to visit
                    our offices in{" "}
                    <Link
                      href="/shopify-agency-manchester"
                      className="text-[#ef436b] hover:underline"
                    >
                      Manchester
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="/shopify-agency-liverpool"
                      className="text-[#ef436b] hover:underline"
                    >
                      Liverpool
                    </Link>
                    .
                  </>
                ) : (
                  faq.answer
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Our Team - replaces Map section */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Our Team
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to discuss your project? Our team is available for video calls,
            phone consultations, or you can visit one of our offices. We&apos;re
            here to help your Glasgow business succeed online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button href="/quote" variant="cta" size="lg">
              Request a Quote
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Link
              href="/shopify-agency-manchester"
              className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors text-left"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ef436b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Manchester Office</p>
                  <p className="text-sm text-gray-300">
                    {manchesterLocation.streetAddress}, {manchesterLocation.postalCode}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">View location page</p>
                </div>
              </div>
            </Link>
            <Link
              href="/shopify-agency-liverpool"
              className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors text-left"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ef436b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Liverpool Office</p>
                  <p className="text-sm text-gray-300">
                    {liverpoolLocation.streetAddress}, {liverpoolLocation.postalCode}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">View location page</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
