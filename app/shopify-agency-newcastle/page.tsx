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

const cityLocation = locations.find((l) => l.id === "newcastle")!;

const whyChooseCards = [
  {
    title: "North East Ecommerce Experts",
    description:
      "We understand Newcastle and the North East — a region with a proud commercial heritage, from Barbour's heritage outdoor wear to Greggs' national retail success.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners delivering enterprise ecommerce for North East brands with serious growth ambitions.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Results",
    description:
      "£50M+ generated for UK brands. North East clients see measurable improvements across conversion rate, AOV, and organic search performance.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Agile Delivery",
    description:
      "Structured sprints and clear milestones get North East brands to market faster — with full transparency throughout.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency Newcastle | Shopify Plus Experts North East",
  description:
    "Leading Shopify & Shopify Plus agency serving Newcastle and the North East. Custom development, migrations & ongoing support from certified Shopify Plus partners.",
  alternates: {
    canonical: "/shopify-agency-newcastle",
  },
  openGraph: {
    title: "Shopify Agency Newcastle | Shopify Plus Experts North East",
    description:
      "Leading Shopify & Shopify Plus agency serving Newcastle and the North East. Custom development, migrations & ongoing support from certified Shopify Plus partners.",
    url: "/shopify-agency-newcastle",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-newcastle.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Newcastle - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Agency Newcastle | Shopify Plus Experts North East",
    description:
      "Leading Shopify & Shopify Plus agency serving Newcastle and the North East. Custom development, migrations & ongoing support.",
    images: ["/images/og-newcastle.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Newcastle and North East brands ready to scale nationally.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes designed to reflect your North East brand's character and convert visitors into customers.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & legacy platforms — zero data loss, minimal disruption.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and integrations built for the specific operational needs of your Newcastle business.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Improve Core Web Vitals and load times to keep North East shoppers engaged and converting.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Flexible support retainers for Newcastle businesses that need reliable, expert Shopify management all year round.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "Greggs",
  "Sage",
  "Barbour",
  "Fenwick",
  "Ringtons",
  "Northern Rail",
];

const serviceAreas = [
  "Newcastle",
  "Gateshead",
  "Sunderland",
  "Durham",
  "Middlesbrough",
  "Hartlepool",
  "Stockton-on-Tees",
  "Darlington",
  "Northumberland",
  "Hexham",
  "Carlisle",
  "York",
  "Leeds",
  "South Shields",
];

const faqs = [
  {
    question: "How does working with a remote Newcastle Shopify agency work?",
    answer:
      "We collaborate with Newcastle brands via structured video calls, Slack, and shared project management tools. You'll have a dedicated project manager and regular check-ins throughout the project. Our Manchester base means we're just 90 minutes from Newcastle by train — and genuinely close neighbours when in-person meetings matter.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Yes. Our Manchester office is easily accessible from Newcastle — just 90 minutes on the East Coast Main Line. We're happy to meet there for important workshops or presentations, or our team can travel to Newcastle for key project milestones. Most clients prefer the efficiency of remote collaboration once the project is underway.",
  },
  {
    question: "Do you have experience with North East brands and industries?",
    answer:
      "Absolutely. The North East has a proud commercial heritage — from Barbour's outdoor wear to Greggs' national bakery empire. We understand the region's mix of traditional manufacturing heritage, independent retail, and modern DTC brands, and we bring that contextual understanding to every North East project.",
  },
  {
    question: "Can you help Newcastle brands compete with London-based competitors?",
    answer:
      "Yes — and this is one of Shopify Plus's great strengths. A beautifully built Shopify store from a Newcastle brand is indistinguishable from one built by a London agency. With the right UX, brand storytelling, and performance optimisation, North East brands consistently outperform their larger London competitors online.",
  },
  {
    question: "What support options do you offer for Newcastle businesses after launch?",
    answer:
      "We offer flexible post-launch support ranging from ad-hoc developer hours to dedicated monthly retainers. Our support clients get priority response times, proactive performance monitoring, and a dedicated account manager who knows their business. We're not just a launch agency — we're here for the long term.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-newcastle#localbusiness`,
      name: `${siteConfig.name} Newcastle`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-newcastle`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Leading Shopify and Shopify Plus agency serving Newcastle and the North East. Custom development, migrations and ongoing support from certified Shopify Plus partners.",
      priceRange: "£££",
      address: {
        "@type": "PostalAddress",
        addressLocality: cityLocation.addressLocality,
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: cityLocation.geo.latitude,
        longitude: cityLocation.geo.longitude,
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
          name: "Shopify Agency Newcastle",
          item: `${siteConfig.url}/shopify-agency-newcastle`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Newcastle`,
        "@id": `${siteConfig.url}/shopify-agency-newcastle#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Rachel Armstrong",
      },
      reviewBody:
        "Flex Commerce took our Newcastle fashion brand from a struggling WooCommerce site to a polished Shopify Plus store in just 10 weeks. The team was communicative, professional, and genuinely invested in our success. Revenue has increased 61% since launch.",
      datePublished: "2024-10-30",
    },
  ],
};

export default function NewcastlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                Serving Newcastle &amp; the North East
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shopify Agency Newcastle
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Newcastle and the North East. From Tyne and Wear
                independents to established regional brands, we build ecommerce
                experiences that drive genuine growth — and we back every project
                with measurable results.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester — 90 minutes from Newcastle by train — we
                combine the responsiveness of a nearby agency with the resources
                of a certified Shopify Plus partner. Our developers have
                delivered for 50+ UK brands and we bring all of that experience
                to every North East project we take on.
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
              <h3
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Get in Touch
              </h3>
              <address className="not-italic space-y-4">
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
                    <p className="text-gray-300">Mon–Fri: 9am – 5:30pm</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose Our Newcastle Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            The North East has produced some of Britain&apos;s most beloved
            brands — Greggs, Barbour, Sage, and Fenwick are all proof that
            Newcastle breeds commercial ambition. We&apos;re here to help the
            next generation of North East brands build ecommerce businesses
            worthy of that heritage.
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
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to grow your North East ecommerce brand?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Newcastle business scale
              on Shopify Plus.
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
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Shopify Services for Newcastle Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for North East businesses at every
            stage of growth — from first store to enterprise scale.
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

      {/* Why North East Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why North East Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            The North East has given the UK some of its most recognisable
            brands. Greggs has scaled to over 2,300 stores. Barbour is sold in
            markets across the world. Sage is a FTSE 100 technology leader.
            Shopify Plus gives the next generation of Newcastle brands the
            platform and infrastructure to build that kind of enduring
            commercial success from an online-first foundation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {localBrands.map((brand) => (
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
        quote="Flex Commerce took our Newcastle fashion brand from a struggling WooCommerce site to a polished Shopify Plus store in just 10 weeks. The team was communicative, professional, and genuinely invested in our success. Revenue has increased 61% since launch and the store is a pleasure to manage."
        author="Rachel Armstrong"
        role="Digital Manager, North East Fashion Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving Newcastle &amp; the North East
          </h2>
          <p className="text-foreground mb-6">
            Our Manchester base puts us just 90 minutes from Newcastle, and we
            serve businesses across the entire North East region — from Tyne
            and Wear to County Durham, Northumberland, and Teesside. Same
            professional service, same quality of delivery, wherever you&apos;re
            based in the region.
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
        image="/images/articles/pexels-1640777.webp"
        imageAlt="Newcastle Shopify agency supporting North East ecommerce businesses"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-1.6500%2C54.9500%2C-1.5800%2C55.0000&layer=mapnik&marker=54.9783%2C-1.6178"
          className="w-full h-80 md:h-96 border-0"
          title="Map of Newcastle — Flex Commerce serves Newcastle and North East brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
