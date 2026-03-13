import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
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
  Video,
  MessageCircle,
} from "lucide-react";
import { OfficeAccordion } from "@/components/ui/OfficeAccordion";

const whyChooseCards = [
  {
    title: "Shopify Partners",
    description: "Official Shopify & Shopify Plus partners with certified developers serving Cambridge and East Anglia.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Tech Hub Expertise",
    description: "We understand Cambridge's innovation-driven market and the unique needs of tech-forward brands.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Cpu",
  },
  {
    title: "Proven Results",
    description: "Delivered measurable growth for East Anglia brands with data-driven ecommerce strategies.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Remote Excellence",
    description: "Seamless collaboration through video calls, shared workspaces, and agile project management.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Wifi",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const cambridgeLocation = locations.find((l) => l.id === "cambridge")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Cambridge Shopify Agency | Shopify Plus Experts | East Anglia",
  description:
    "Expert Shopify & Shopify Plus agency serving Cambridge and East Anglia. Custom development, theme design & migrations for innovative brands in the UK's tech capital.",
  alternates: {
    canonical: "/shopify-agency-cambridge",
  },
  openGraph: {
    title: "Cambridge Shopify Agency | Shopify Plus Experts | East Anglia",
    description:
      "Expert Shopify & Shopify Plus agency serving Cambridge and East Anglia. Custom development, theme design & migrations for innovative brands.",
    url: "/shopify-agency-cambridge",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-cambridge.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Cambridge - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge Shopify Agency | Shopify Plus Experts | East Anglia",
    description:
      "Expert Shopify & Shopify Plus agency serving Cambridge and East Anglia. Custom development, theme design & migrations.",
    images: ["/images/og-cambridge.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Cambridge brands.",
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
    description: "Dedicated support packages for Cambridge businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const cambridgeBrands = [
  "ARM",
  "AstraZeneca",
  "Cambridge University Press",
  "Marshall Amplification",
  "Abcam",
  "Darktrace",
];

const faqs = [
  {
    question: "How do you work with Cambridge clients without a local office?",
    answer:
      "We've perfected remote collaboration through video calls, screen sharing, and project management tools like Slack and Notion. Many of our most successful partnerships are with clients we've never met in person. You'll have a dedicated project manager and direct access to our development team.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Absolutely! While we work remotely with Cambridge clients, we're happy to travel to Cambridge for important meetings, workshops, or project kickoffs. We also welcome you to visit our Manchester or Liverpool offices anytime.",
  },
  {
    question: "What are your working hours for Cambridge clients?",
    answer:
      "We work standard UK business hours (9am-5:30pm), so there's no timezone difference to worry about. We're available for video calls, quick chats, and support throughout the working day.",
  },
  {
    question: "Do you understand the Cambridge tech market?",
    answer:
      "Yes! Cambridge is home to world-leading tech companies and innovative startups. We understand the high standards and technical sophistication that Cambridge brands expect, and we deliver enterprise-grade Shopify solutions to match.",
  },
  {
    question: "What size businesses do you work with in Cambridge?",
    answer:
      "We work with businesses of all sizes, from university spin-outs launching their first Shopify store to established tech companies on Shopify Plus. Our flexible approach adapts to your needs and growth stage.",
  },
];

const serviceAreas = [
  "Cambridge",
  "Peterborough",
  "Norwich",
  "Ipswich",
  "Ely",
  "Newmarket",
  "Huntingdon",
  "St Ives",
  "Bedford",
  "Bury St Edmunds",
  "King's Lynn",
  "Great Yarmouth",
  "Colchester",
  "Chelmsford",
];

// JSON-LD Structured Data
const cambridgeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-cambridge#localbusiness`,
      name: `${siteConfig.name} Cambridge`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-cambridge`,
      telephone: `+44-${siteConfig.phone.replace(/\s/g, "-").replace(/^0/, "")}`,
      email: siteConfig.email,
      description: "Expert Shopify and Shopify Plus agency serving Cambridge and East Anglia businesses with custom theme development, migrations, and ongoing support.",
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
        latitude: cambridgeLocation.geo.latitude,
        longitude: cambridgeLocation.geo.longitude,
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
          name: "Shopify Agency Cambridge",
          item: `${siteConfig.url}/shopify-agency-cambridge`,
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
        name: `${siteConfig.name} Cambridge`,
        "@id": `${siteConfig.url}/shopify-agency-cambridge#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Dr. James Chen",
      },
      reviewBody:
        "Working with Flex Commerce remotely has been seamless. Their technical expertise matched our expectations as a Cambridge tech company. They delivered a high-performance Shopify Plus store that handles our complex product configurations perfectly.",
      datePublished: "2024-10-22",
    },
  ],
};

export default function CambridgePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cambridgeSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                Serving Cambridge & East Anglia
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
                Shopify Agency Cambridge
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Cambridge and East Anglia. Helping innovative brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in Cambridge, we have experienced Shopify developers working remotely across East Anglia. Our distributed team delivers the same exceptional service and results as our Manchester and Liverpool headquarters.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing support,
                we deliver end-to-end Shopify solutions for Cambridge&apos;s thriving tech and innovation community.
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Cambridge */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Cambridge Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Cambridge is the UK&apos;s innovation capital, home to world-leading tech companies
            and pioneering startups. We bring enterprise-grade Shopify expertise to match
            the region&apos;s technical excellence.
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
              Let&apos;s discuss how we can help your Cambridge brand succeed online.
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
            Shopify Services for Cambridge
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Cambridge and East Anglia businesses.
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

      {/* Why Cambridge Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Cambridge Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Cambridge is home to some of the world&apos;s most innovative companies.
            Leading brands from ARM to AstraZeneca trust Shopify Plus for their
            ecommerce needs - proof that the platform can handle enterprise-grade requirements.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {cambridgeBrands.map((brand) => (
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
        quote="Working with Flex Commerce remotely has been seamless. Their technical expertise matched our expectations as a Cambridge tech company. They delivered a high-performance Shopify Plus store that handles our complex product configurations perfectly."
        author="Dr. James Chen"
        role="CTO, Cambridge Innovation Lab"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Cambridge & East Anglia
          </h2>
          <p className="text-foreground mb-6">
            While we work remotely with Cambridge clients, we serve businesses
            across Cambridgeshire, Norfolk, Suffolk, and the wider East Anglia region.
            Our flexible approach means geography is never a barrier to great work.
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
                    Absolutely! While we work remotely with Cambridge clients,
                    we&apos;re happy to travel to Cambridge for important meetings,
                    workshops, or project kickoffs. We also welcome you to visit our{" "}
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
                    </Link>{" "}
                    offices anytime.
                  </>
                ) : (
                  faq.answer
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Our Team (instead of map) */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
              Contact Our Team
            </h2>
            <p className="text-lg text-foreground">
              Ready to start your Shopify project? Get in touch and we&apos;ll arrange
              a video call to discuss your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#ef436b]/10 flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-[#ef436b]" />
              </div>
              <h3 className="font-semibold text-foreground-dark mb-2">Video Call</h3>
              <p className="text-sm text-foreground mb-4">
                Schedule a free discovery call to discuss your project.
              </p>
              <Button href="/contact" variant="outline" size="sm">
                Book a Call
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#ef436b]/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#ef436b]" />
              </div>
              <h3 className="font-semibold text-foreground-dark mb-2">Email Us</h3>
              <p className="text-sm text-foreground mb-4">
                Send us your project brief and we&apos;ll get back to you.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#ef436b]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-[#ef436b]" />
              </div>
              <h3 className="font-semibold text-foreground-dark mb-2">Get a Quote</h3>
              <p className="text-sm text-foreground mb-4">
                Tell us about your project and receive a detailed proposal.
              </p>
              <Button href="/quote" variant="outline" size="sm">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
