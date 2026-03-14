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

const cityLocation = locations.find((l) => l.id === "london")!;

const whyChooseCards = [
  {
    title: "London Ecommerce Experts",
    description:
      "Deep understanding of London's DTC market — from luxury fashion in Chelsea to fast-growth consumer brands in Shoreditch. We know what London shoppers expect.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners with certified developers ready to scale your store to enterprise level and beyond.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Revenue Growth",
    description:
      "£50M+ revenue generated for UK brands. London clients see measurable improvements in conversion rate, AOV, and organic traffic.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Full UK Coverage",
    description:
      "Remote-first collaboration from our Manchester and Liverpool offices — you get the same quality wherever you are in the UK.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Globe",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency London | Shopify Plus Experts",
  description:
    "Leading Shopify & Shopify Plus agency serving London brands. Custom development, migrations & ongoing support from certified Shopify Plus partners.",
  alternates: {
    canonical: "/shopify-agency-london",
  },
  openGraph: {
    title: "Shopify Agency London | Shopify Plus Experts",
    description:
      "Leading Shopify & Shopify Plus agency serving London brands. Custom development, migrations & ongoing support from certified Shopify Plus partners.",
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
    title: "Shopify Agency London | Shopify Plus Experts",
    description:
      "Leading Shopify & Shopify Plus agency serving London brands. Custom development, migrations & ongoing support.",
    images: ["/images/og-london.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth London brands looking to scale internationally.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes designed to convert London's discerning shoppers into loyal customers.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from Magento, WooCommerce, and legacy platforms with zero data loss.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and third-party integrations built around your London operation's exact needs.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Improve Core Web Vitals and page speed to reduce bounce rates and boost conversion for London audiences.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Flexible support retainers keeping your London ecommerce brand live, fast, and converting year-round.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "ASOS",
  "Farfetch",
  "Depop",
  "Net-a-Porter",
  "Sweaty Betty",
  "Gymshark",
];

const serviceAreas = [
  "London",
  "Shoreditch",
  "Soho",
  "Canary Wharf",
  "Chelsea",
  "Brixton",
  "Hackney",
  "Islington",
  "Camden",
  "Clerkenwell",
  "Bethnal Green",
  "Wimbledon",
  "Richmond",
  "Croydon",
];

const faqs = [
  {
    question: "Do you work with London-based brands remotely?",
    answer:
      "Absolutely. Our team works with London brands entirely remotely using video calls, Slack, and collaborative project tools. Many clients find remote collaboration more efficient — no travel time, faster responses, and the same quality you'd expect from a local agency. We're on UK time, so communication is always instant.",
  },
  {
    question: "Why are so many London brands choosing Shopify Plus?",
    answer:
      "London is home to some of the UK's most ambitious DTC brands. Shopify Plus gives them the flexibility to customise checkout flows, run multi-currency stores, and integrate with the logistics and ERP systems their operations depend on. Brands like ASOS, Farfetch, and Gymshark have all demonstrated what's achievable on the platform.",
  },
  {
    question: "Can you handle high-traffic London ecommerce stores?",
    answer:
      "Yes. Shopify Plus is built for serious scale — it handles millions of visitors and thousands of transactions per minute without breaking a sweat. We've optimised stores for London brands through major seasonal peaks, influencer campaigns, and flash sales. Your store won't buckle when it matters most.",
  },
  {
    question: "What does a typical London Shopify project cost?",
    answer:
      "Project investment varies depending on scope. A bespoke Shopify theme typically starts from £7,500, while a full Shopify Plus build with integrations can range from £15,000 upwards. We provide detailed, transparent quotes after an initial discovery call — no surprises and no inflated London agency rates.",
  },
  {
    question: "How do you understand London's ecommerce landscape without a local office?",
    answer:
      "Our team actively tracks UK ecommerce trends, works with London brands across fashion, beauty, homewares, and food & drink, and attends major industry events. We understand what London consumers expect — seamless UX, fast delivery integrations, and mobile-first experiences that reflect premium brand positioning.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-london#localbusiness`,
      name: `${siteConfig.name} London`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-london`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Leading Shopify and Shopify Plus agency serving London brands. Custom development, migrations and ongoing support from certified Shopify Plus partners.",
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
        name: "James Hartley",
      },
      reviewBody:
        "Flex Commerce helped us scale our London DTC brand from six figures to seven on Shopify Plus. Their remote collaboration process is genuinely seamless — you'd never know they weren't sitting in the office next door.",
      datePublished: "2024-10-20",
    },
  ],
};

export default function LondonPage() {
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
                Serving London &amp; the South East
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
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
                agency working with London&apos;s most ambitious ecommerce
                brands. From Shoreditch startups to established West End
                retailers, we help you build and scale stores that convert.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester and Liverpool, we&apos;ve been working
                remotely with London brands since day one. Our certified Shopify
                Plus developers deliver bespoke themes, migrations, and app
                integrations — with the quality of a premium London agency and
                none of the inflated price tag. We&apos;ve helped 50+ UK brands
                grow their online revenue significantly on Shopify.
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
            Why Choose Our London Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            London is one of the world&apos;s most competitive ecommerce
            markets. Brands like ASOS, Farfetch, and Net-a-Porter have shown
            what&apos;s possible when world-class technology meets genuine
            digital expertise — and we help ambitious brands follow in their
            footsteps.
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
              Ready to grow your London ecommerce brand?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help you scale on Shopify Plus.
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
            Shopify Services for London Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development tailored to the demands of
            London&apos;s fast-moving ecommerce sector.
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
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why London Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            London is home to some of the UK&apos;s most iconic ecommerce
            businesses. Brands like ASOS, Farfetch, Depop, and Net-a-Porter
            have built global empires on flexible, scalable technology — and
            Shopify Plus powers many of them. The platform gives London brands
            the speed to launch, the flexibility to customise, and the
            infrastructure to handle serious, sustained scale.
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
        quote="Flex Commerce helped us scale our London DTC brand from six figures to seven on Shopify Plus. Their remote collaboration process is genuinely seamless — you'd never know they weren't sitting in the office next door. The results have been transformational."
        author="James Hartley"
        role="Head of Ecommerce, London Lifestyle Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving London &amp; the South East
          </h2>
          <p className="text-foreground mb-6">
            Whether your team is in Shoreditch, Soho, Canary Wharf, or
            distributed across Greater London, we&apos;re set up for seamless
            remote collaboration. Our Manchester and Liverpool teams operate on
            UK time, respond quickly, and are always available on a call when
            you need us. No London commute required.
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
        imageAlt="London ecommerce Shopify agency"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1400%2C51.4900%2C-0.0800%2C51.5200&layer=mapnik&marker=51.5074%2C-0.1278"
          className="w-full h-80 md:h-96 border-0"
          title="Map of London — Flex Commerce serves London brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
