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
  Clock,
  Zap,
  Palette,
  ArrowRightLeft,
  Code,
  Gauge,
  Headphones,
} from "lucide-react";

const whyChooseCards = [
  {
    title: "Shopify Partners",
    description: "Official Shopify & Shopify Plus partners with certified developers ready to scale your store.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Local Team",
    description: "A dedicated Manchester-based team who understand the local ecommerce landscape.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Users",
  },
  {
    title: "Proven Results",
    description: "£50M+ revenue generated for Manchester brands with measurable growth.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Fast Turnaround",
    description: "Agile development with quick response times and efficient project delivery.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Manchester Shopify Agency | Shopify Plus Experts",
  description:
    "Award-winning Shopify & Shopify Plus agency in Manchester. Custom development, theme design & migrations. Get a free quote today.",
  alternates: {
    canonical: "/shopify-agency-manchester",
  },
  openGraph: {
    title: "Manchester Shopify Agency | Shopify Plus Experts",
    description:
      "Award-winning Shopify & Shopify Plus agency in Manchester city centre. Custom development, theme design & migrations for ambitious brands.",
    url: "/shopify-agency-manchester",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-manchester.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Manchester - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manchester Shopify Agency | Shopify Plus Experts",
    description:
      "Award-winning Shopify & Shopify Plus agency in Manchester city centre. Custom development, theme design & migrations.",
    images: ["/images/og-manchester.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Manchester brands.",
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
    description: "Dedicated support packages for Manchester businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const manchesterBrands = [
  "Boohoo",
  "Pretty Little Thing",
  "Missguided",
  "In The Style",
  "I Saw It First",
  "Nasty Gal",
];

const faqs = [
  {
    question: "Why choose a Manchester-based Shopify agency?",
    answer:
      "Working with a local Manchester agency means face-to-face meetings, same timezone collaboration, and a team that understands the local business landscape. We're just a short walk or call away when you need us.",
  },
  {
    question: "Do you work with businesses outside Manchester?",
    answer:
      "Absolutely! While we're based in Manchester, we work with clients across the UK and internationally. Our Manchester office serves as our northern headquarters alongside our Liverpool office.",
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
  "Manchester",
  "Salford",
  "Trafford",
  "Stockport",
  "Bolton",
  "Bury",
  "Rochdale",
  "Oldham",
  "Wigan",
  "Tameside",
  "Altrincham",
  "Warrington",
  "Macclesfield",
  "Preston",
];

// JSON-LD Structured Data
const manchesterSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-manchester#localbusiness`,
      name: `${siteConfig.name} Manchester`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-manchester`,
      telephone: `+44-${manchesterLocation.phone.replace(/\s/g, "-").replace(/^0/, "")}`,
      email: siteConfig.email,
      description: "Award-winning Shopify and Shopify Plus agency in Manchester city centre specializing in custom theme development, platform migrations, and ongoing ecommerce support.",
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
          name: "Shopify Agency Manchester",
          item: `${siteConfig.url}/shopify-agency-manchester`,
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
        name: `${siteConfig.name} Manchester`,
        "@id": `${siteConfig.url}/shopify-agency-manchester#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Rebecca Taylor",
      },
      reviewBody:
        "Flex Commerce transformed our online presence. Being able to meet the team in person at their Manchester office made all the difference. Our conversion rate increased by 52% within three months.",
      datePublished: "2024-11-15",
    },
  ],
};

export default function ManchesterPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manchesterSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                Manchester City Centre
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
                Shopify Agency Manchester
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency based in the heart of Manchester. Helping ambitious brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing support,
                our Manchester team delivers end-to-end Shopify solutions. We&apos;ve helped
                50+ local brands increase their online revenue and streamline their operations.
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
            <div className="bg-black rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">Manchester Office</h3>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300">
                      {manchesterLocation.streetAddress},{" "}
                      {manchesterLocation.addressLocality},{" "}
                      {manchesterLocation.postalCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-gray-300 hover:text-white"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gray-300 hover:text-white"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-300">Mon-Fri: 9am - 5:30pm</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Why Manchester */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Manchester Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Manchester is the UK&apos;s ecommerce capital, home to brands like
            Boohoo, Pretty Little Thing, and The Hut Group. We&apos;re proud to
            be part of this thriving ecosystem.
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
              Let&apos;s discuss how we can help your Manchester brand succeed online.
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
            Shopify Services in Manchester
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Manchester businesses.
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

      {/* Why Manchester Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Manchester Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Manchester is the UK&apos;s ecommerce capital. Brands like Boohoo,
            Pretty Little Thing, and Missguided have scaled to global success on
            Shopify Plus - proof that the platform can handle serious growth.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {manchesterBrands.map((brand) => (
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
        quote="Flex Commerce transformed our online presence. Being able to meet the team in person at their Manchester office made all the difference. Our conversion rate increased by 52% within three months."
        author="Rebecca Taylor"
        role="Ecommerce Director, Manchester Fashion Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Greater Manchester & Beyond
          </h2>
          <p className="text-foreground mb-6">
            While our office is in Manchester city centre, we serve businesses
            across Greater Manchester, and throughout the North West. With easy
            access from Victoria station and excellent transport links,
            we&apos;re perfectly positioned to support your ecommerce growth.
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
                    Absolutely! While we&apos;re based in Manchester, we work
                    with clients across the UK and internationally. Our
                    Manchester office serves as our northern headquarters
                    alongside our{" "}
                    <Link
                      href="/shopify-agency-liverpool"
                      className="text-[#ef436b] hover:underline"
                    >
                      Liverpool office
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

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-2.2450%2C53.4820%2C-2.2300%2C53.4880&amp;layer=mapnik&amp;marker=53.4851%2C-2.2379"
          className="w-full h-80 md:h-96 border-0"
          title="Map showing Flex Commerce Manchester office location"
          loading="lazy"
        />
        <a
          href="https://www.google.com/maps/search/?api=1&query=Swan+Buildings+20+Swan+Street+Manchester+M4+5JW"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#ef436b] mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground-dark">Manchester Office</p>
              <p className="text-sm text-foreground">Swan Buildings, 20 Swan Street, M4 5JW</p>
              <p className="text-xs text-gray-400 mt-1">Open in Google Maps</p>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
