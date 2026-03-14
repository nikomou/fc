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

const cityLocation = locations.find((l) => l.id === "bristol")!;

const whyChooseCards = [
  {
    title: "South West Ecommerce Experts",
    description:
      "Deep understanding of Bristol's creative, outdoor, and sustainable brand ecosystem — from Finisterre to Passenger Clothing.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners with certified developers delivering enterprise-level ecommerce for Bristol brands.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Revenue Growth",
    description:
      "£50M+ generated for UK brands. Bristol clients see meaningful improvements in conversion rate, AOV, and organic search traffic.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Fast Delivery",
    description:
      "Agile development sprints and clear project milestones mean your Bristol brand gets to market faster — without sacrificing quality.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency Bristol | Shopify Plus Experts South West",
  description:
    "Award-winning Shopify & Shopify Plus agency serving Bristol and the South West. Custom development, migrations & ongoing support for ambitious brands.",
  alternates: {
    canonical: "/shopify-agency-bristol",
  },
  openGraph: {
    title: "Shopify Agency Bristol | Shopify Plus Experts South West",
    description:
      "Award-winning Shopify & Shopify Plus agency serving Bristol and the South West. Custom development, migrations & ongoing support for ambitious brands.",
    url: "/shopify-agency-bristol",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-bristol.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Bristol - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Agency Bristol | Shopify Plus Experts South West",
    description:
      "Award-winning Shopify & Shopify Plus agency serving Bristol and the South West. Custom development, migrations & ongoing support.",
    images: ["/images/og-bristol.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce for high-growth Bristol and South West brands ready to scale nationally and internationally.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes that reflect Bristol's creative character and turn browsers into buyers.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & other platforms — no data loss, minimal disruption.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and third-party integrations built around your South West operation.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Improve Core Web Vitals and page load times — because slow stores lose Bristol customers to competitors.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Flexible support retainers to keep your Bristol ecommerce store running at its best all year.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "Renishaw",
  "Innocent Drinks",
  "Finisterre",
  "Seasalt Cornwall",
  "Passenger Clothing",
  "Patagonia UK",
];

const serviceAreas = [
  "Bristol",
  "Bath",
  "Swindon",
  "Cheltenham",
  "Gloucester",
  "Weston-super-Mare",
  "Taunton",
  "Exeter",
  "Plymouth",
  "Bournemouth",
  "Cardiff",
  "Newport",
  "Chippenham",
  "Stroud",
];

const faqs = [
  {
    question: "How does working with a remote Bristol Shopify agency work?",
    answer:
      "We use video calls, Slack, and shared project management tools to keep Bristol clients fully in the loop. You'll have a dedicated project manager, structured check-ins, and real-time access to project progress. Most clients find remote collaboration more efficient — faster responses, flexible call times, and no wasted travel days.",
  },
  {
    question: "Can I still meet the team in person?",
    answer:
      "Absolutely. Whilst we don't have a Bristol office, we're happy to travel to meet you for key project milestones or workshops. You're also very welcome at our Manchester or Liverpool offices. We can also host video workshops with screen sharing for design reviews and sprint planning sessions.",
  },
  {
    question: "Bristol has a strong independent retail scene — can you work with smaller brands?",
    answer:
      "Yes. We work with businesses across the spectrum, from Bristol independent brands launching their first Shopify store to established South West companies scaling on Shopify Plus. Our flexible service packages mean you only pay for what you need at each stage of growth.",
  },
  {
    question: "Do you have experience with outdoor and sustainable brands?",
    answer:
      "Very much so. Bristol's outdoor and sustainability sector is one of the UK's strongest, with brands like Finisterre, Passenger Clothing, and Seasalt leading the way. We understand the product complexity — size runs, technical descriptions, ethical supply chain storytelling — and we build Shopify experiences that reflect that ethos.",
  },
  {
    question: "Can you help Bristol brands expand into European and international markets?",
    answer:
      "Yes. Shopify Plus's multi-currency and multi-market functionality makes cross-border selling straightforward. We've helped South West brands set up international storefronts, configure shipping zones, and localise the checkout experience for European customers — a critical step post-Brexit.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-bristol#localbusiness`,
      name: `${siteConfig.name} Bristol`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-bristol`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Award-winning Shopify and Shopify Plus agency serving Bristol and the South West. Custom development, migrations and ongoing support for ambitious brands.",
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
          name: "Shopify Agency Bristol",
          item: `${siteConfig.url}/shopify-agency-bristol`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Bristol`,
        "@id": `${siteConfig.url}/shopify-agency-bristol#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Olivia Chen",
      },
      reviewBody:
        "Flex Commerce delivered an outstanding Shopify Plus store for our Bristol outdoor brand. The team understood our sustainable ethos from day one and translated it beautifully into the UX. Revenue is up 58% in the first six months.",
      datePublished: "2024-10-15",
    },
  ],
};

export default function BristolPage() {
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
                Serving Bristol &amp; the South West
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shopify Agency Bristol
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Bristol and the South West. Whether you&apos;re
                an outdoor brand in Clifton, a sustainable retailer in Stokes
                Croft, or a growing DTC brand anywhere in the region, we help
                you build ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester and Liverpool, we work remotely with Bristol
                brands every day. Our certified Shopify Plus developers bring
                full-service capability — from bespoke theme builds to complex
                platform migrations — without the inflated South West agency
                rates. We&apos;ve helped 50+ UK brands grow their revenue, and
                we bring that experience to every project.
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
            Why Choose Our Bristol Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Bristol is one of the UK&apos;s most vibrant creative and
            commercial cities — home to a brilliant mix of independent brands,
            outdoor and lifestyle companies, and innovative tech businesses.
            We&apos;re built to serve exactly that kind of ambition.
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
              Ready to grow your South West ecommerce brand?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Bristol brand scale on
              Shopify Plus.
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
            Shopify Services for Bristol Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for South West businesses of every
            size and specialism.
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

      {/* Why Bristol Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Bristol Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Bristol has long been a breeding ground for quality consumer brands
            — particularly in outdoor, sustainable, and lifestyle sectors.
            Brands like Finisterre, Passenger Clothing, and Seasalt Cornwall
            have used Shopify Plus to build national and international
            audiences, demonstrating what&apos;s possible when great products
            meet a platform built for growth.
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
        quote="Flex Commerce delivered an outstanding Shopify Plus store for our Bristol outdoor brand. The team understood our sustainable ethos from day one and translated it beautifully into the UX. Revenue is up 58% in the first six months and we're now selling across Europe."
        author="Olivia Chen"
        role="Ecommerce Manager, Bristol Outdoor Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving Bristol, Bath &amp; the South West
          </h2>
          <p className="text-foreground mb-6">
            Our remote team serves brands across Bristol and the wider South
            West of England. Whether you&apos;re in the city centre, Bath, the
            Cotswolds, or down in Devon, we deliver the same quality of Shopify
            development through seamless remote collaboration. Need a face-to-face
            meeting? We&apos;re happy to travel.
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
        imageAlt="Bristol Shopify agency helping South West ecommerce brands grow"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-2.6200%2C51.4200%2C-2.5200%2C51.4800&layer=mapnik&marker=51.4545%2C-2.5879"
          className="w-full h-80 md:h-96 border-0"
          title="Map of Bristol — Flex Commerce serves Bristol brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
