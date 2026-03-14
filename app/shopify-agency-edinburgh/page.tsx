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
  Video,
  MessageCircle,
} from "lucide-react";
import { OfficeAccordion } from "@/components/ui/OfficeAccordion";

const whyChooseCards = [
  {
    title: "Scottish Expertise",
    description: "Deep understanding of the Scottish market and local ecommerce trends from Edinburgh to the Highlands.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "MapPin",
  },
  {
    title: "Remote Edinburgh Team",
    description: "Experienced Shopify developers based in Edinburgh, delivering exceptional results without the need for office meetings.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Users",
  },
  {
    title: "Proven Results",
    description: "Helping Scottish brands generate significant online revenue with measurable growth across all metrics.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Seamless Communication",
    description: "Video calls, screen sharing, and instant messaging ensure you're always connected with your dedicated team.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Video",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const edinburghLocation = locations.find((l) => l.id === "edinburgh")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Edinburgh Shopify Agency | Shopify Plus Experts | Scotland",
  description:
    "Expert Shopify & Shopify Plus agency serving Edinburgh and Scotland. Custom themes, migrations & ongoing support for Scottish brands. Get a free quote.",
  alternates: {
    canonical: "/shopify-agency-edinburgh",
  },
  openGraph: {
    title: "Edinburgh Shopify Agency | Shopify Plus Experts | Scotland",
    description:
      "Expert Shopify & Shopify Plus agency serving Edinburgh and Scotland. Remote team of certified developers delivering custom ecommerce solutions for Scottish brands.",
    url: "/shopify-agency-edinburgh",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-edinburgh.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Edinburgh - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edinburgh Shopify Agency | Shopify Plus Experts | Scotland",
    description:
      "Expert Shopify & Shopify Plus agency serving Edinburgh and Scotland. Remote team delivering custom ecommerce solutions.",
    images: ["/images/og-edinburgh.png"],
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
    description: "Dedicated support packages for Edinburgh and Scottish businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const edinburghBrands = [
  "BrewDog",
  "Skyscanner",
  "FanDuel",
  "Blackwell's",
  "Johnstons of Elgin",
  "Harris Tweed",
];

const faqs = [
  {
    question: "How does working with a remote Edinburgh team work?",
    answer:
      "We use modern collaboration tools including video conferencing, screen sharing, and project management software to ensure seamless communication. You'll have a dedicated project manager and regular check-ins, making remote collaboration just as effective as in-person meetings.",
  },
  {
    question: "Can I meet the team in person if needed?",
    answer:
      "Absolutely! While our Edinburgh team works remotely, we have physical offices in Manchester and Liverpool. We're happy to arrange in-person meetings at either location, or we can travel to Edinburgh for important project milestones.",
  },
  {
    question: "Do you understand the Scottish ecommerce market?",
    answer:
      "Yes, our Edinburgh-based developers have extensive experience working with Scottish brands. We understand the unique aspects of the Scottish market, from local consumer preferences to regional logistics considerations.",
  },
  {
    question: "What timezone do you operate in?",
    answer:
      "We operate on UK time (GMT/BST), the same as Edinburgh. Our team is available during standard business hours Monday to Friday, with emergency support available for critical issues outside these hours.",
  },
  {
    question: "How do you handle project kickoffs without a local office?",
    answer:
      "We conduct comprehensive video discovery sessions to understand your brand, goals, and requirements. We use collaborative tools like Figma for design reviews and Loom for async updates, ensuring you're always in the loop.",
  },
];

const serviceAreas = [
  "Edinburgh",
  "Leith",
  "Stockbridge",
  "Morningside",
  "Portobello",
  "Musselburgh",
  "Dalkeith",
  "Livingston",
  "Dunfermline",
  "Falkirk",
  "Stirling",
  "Perth",
  "Dundee",
  "St Andrews",
];

// JSON-LD Structured Data
const edinburghSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-edinburgh#localbusiness`,
      name: `${siteConfig.name} Edinburgh`,
      description: "Expert Shopify & Shopify Plus agency serving Edinburgh and Scotland. Remote team of certified developers delivering custom ecommerce solutions for Scottish brands.",
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-edinburgh`,
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
        latitude: edinburghLocation.geo.latitude,
        longitude: edinburghLocation.geo.longitude,
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
          name: "Shopify Agency Edinburgh",
          item: `${siteConfig.url}/shopify-agency-edinburgh`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Edinburgh`,
        "@id": `${siteConfig.url}/shopify-agency-edinburgh#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Alistair MacLeod",
      },
      reviewBody:
        "Working with Flex Commerce remotely from Edinburgh has been seamless. Their team understood our Scottish heritage brand perfectly and delivered an online store that exceeded our expectations. Sales have increased by 68% since launch.",
      datePublished: "2024-09-22",
    },
  ],
};

export default function EdinburghPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(edinburghSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                Serving Edinburgh Remotely
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
                Shopify Agency Edinburgh
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Edinburgh and the whole of Scotland. Helping ambitious Scottish brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in Edinburgh, we have experienced Shopify developers working remotely across Scotland&apos;s capital. Our team combines local market knowledge with the full support of our UK-wide agency.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing support,
                our Edinburgh team delivers end-to-end Shopify solutions. We&apos;ve helped
                Scottish brands increase their online revenue and reach customers worldwide.
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
                <h3 className="text-lg font-semibold mb-4 text-foreground-dark">Get in Touch</h3>
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
                    <Video className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                    <p className="text-foreground">Video calls available</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                    <p className="text-foreground">Instant messaging support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Edinburgh */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Edinburgh Shopify Team?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Edinburgh is home to a thriving tech scene and innovative brands. Our
            remote team combines local Scottish expertise with the resources of a
            full-service Shopify agency.
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
              Let&apos;s discuss how we can help your Edinburgh brand succeed online.
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
            Shopify Services for Edinburgh Businesses
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

      {/* Why Edinburgh Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Edinburgh Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            From heritage Scottish brands to innovative tech startups, Edinburgh
            businesses trust Shopify to power their online growth. Brands like
            BrewDog and Johnstons of Elgin have scaled globally with Shopify Plus.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {edinburghBrands.map((brand) => (
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
        quote="Working with Flex Commerce remotely from Edinburgh has been seamless. Their team understood our Scottish heritage brand perfectly and delivered an online store that exceeded our expectations. Sales have increased by 68% since launch."
        author="Alistair MacLeod"
        role="Founder, Edinburgh Heritage Goods"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Edinburgh, Scotland & Beyond
          </h2>
          <p className="text-foreground mb-6">
            Our remote Edinburgh team serves businesses across Scotland&apos;s capital
            and beyond. Whether you&apos;re in the heart of the Old Town or operating
            from the Highlands, we deliver the same exceptional Shopify solutions
            through seamless remote collaboration.
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
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Our Edinburgh Team
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to discuss your Shopify project? Our Edinburgh-based team is just
            a call or video chat away. We&apos;ll arrange a discovery session to
            understand your goals and show you how we can help grow your online business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Request a Quote
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Schedule a Call
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{siteConfig.email}</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
