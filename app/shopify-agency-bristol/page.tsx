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
} from "lucide-react";
import { OfficeAccordion } from "@/components/ui/OfficeAccordion";

const whyChooseCards = [
  {
    title: "Shopify Partners",
    description: "Official Shopify & Shopify Plus partners with certified developers ready to scale your store.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Remote South West Team",
    description: "Experienced Shopify developers working remotely across the South West, available when you need us.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Globe",
  },
  {
    title: "Proven Results",
    description: "£50M+ revenue generated for UK brands with measurable growth and ROI.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Seamless Communication",
    description: "Video calls, Slack, and regular check-ins ensure you're always in the loop, wherever you are.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "MessageCircle",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const bristolLocation = locations.find((l) => l.id === "bristol")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Bristol Shopify Agency | Shopify Plus Experts | South West",
  description:
    "Leading Shopify & Shopify Plus agency serving Bristol and the South West. Custom themes, migrations & ongoing support. Get a free quote.",
  alternates: {
    canonical: "/shopify-agency-bristol",
  },
  openGraph: {
    title: "Bristol Shopify Agency | Shopify Plus Experts | South West",
    description:
      "Leading Shopify & Shopify Plus agency serving Bristol and the South West. Custom development, theme design & migrations for ambitious brands.",
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
    title: "Bristol Shopify Agency | Shopify Plus Experts | South West",
    description:
      "Leading Shopify & Shopify Plus agency serving Bristol and the South West. Custom development, theme design & migrations.",
    images: ["/images/og-bristol.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth South West brands.",
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
    description: "Dedicated support packages for Bristol and South West businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const bristolBrands = [
  "Aardman",
  "OVO Energy",
  "Deliveroo",
  "Just Eat",
  "Dyson",
  "Clarks",
];

const faqs = [
  {
    question: "How does working with a remote Shopify agency work?",
    answer:
      "We've perfected remote collaboration over years of working with clients nationwide. You'll have a dedicated project manager, regular video calls, and real-time communication via Slack or your preferred platform. Many clients find remote collaboration more efficient than traditional agency relationships.",
  },
  {
    question: "Can I still meet the team in person?",
    answer:
      "Absolutely! While we don't have a Bristol office, we're happy to travel to meet you for important meetings. Alternatively, you're welcome to visit our Manchester or Liverpool offices. We also offer face-to-face meetings at convenient locations across the South West.",
  },
  {
    question: "What are the advantages of working with a remote team?",
    answer:
      "Remote teams often deliver faster turnaround times as there's no commute overhead. You also get access to specialist talent regardless of location, more flexible meeting times, and often better value as we don't have expensive city-centre office costs to pass on.",
  },
  {
    question: "How do you handle time-sensitive issues without a local office?",
    answer:
      "Our team operates across the same timezone and business hours as Bristol. We offer rapid response support packages and use modern communication tools to resolve issues quickly. Many urgent matters can be addressed faster remotely than waiting for an in-person meeting.",
  },
  {
    question: "Do you work with Bristol startups and small businesses?",
    answer:
      "Yes! We work with businesses of all sizes across the South West, from startups launching their first Shopify store to enterprise brands on Shopify Plus. Bristol's thriving tech scene has given us great experience with innovative startups.",
  },
];

const serviceAreas = [
  "Bristol",
  "Bath",
  "Clifton",
  "Redland",
  "Gloucester",
  "Cheltenham",
  "Swindon",
  "Exeter",
  "Taunton",
  "Weston-super-Mare",
  "Chippenham",
  "Stroud",
  "Thornbury",
  "Portishead",
];

// JSON-LD Structured Data
const bristolSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-bristol#localbusiness`,
      name: `${siteConfig.name} Bristol`,
      description: "Leading Shopify & Shopify Plus agency serving Bristol and the South West. Custom development, theme design & migrations for ambitious brands.",
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-bristol`,
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
        latitude: bristolLocation.geo.latitude,
        longitude: bristolLocation.geo.longitude,
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
        name: "James Whitfield",
      },
      reviewBody:
        "Working with Flex Commerce remotely has been seamless. Despite not having a local office, their communication is excellent and they truly understand the South West market. Our new Shopify Plus store has doubled our conversion rate.",
      datePublished: "2024-10-22",
    },
  ],
};

export default function BristolPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bristolSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <MapPin className="w-3 h-3" />
                Serving Bristol & The South West
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
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
                agency serving Bristol and the South West. Helping ambitious brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in Bristol, we have experienced
                Shopify developers working remotely across the South West. This means you
                get the same expert service with the flexibility of modern remote collaboration.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing support,
                our team delivers end-to-end Shopify solutions. We&apos;ve helped
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

            {/* Office Cards - Accordion */}
            <div className="space-y-4">
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

              {/* Contact CTA */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Video className="w-5 h-5 text-[#ef436b]" />
                  <h3 className="font-semibold text-foreground-dark">Prefer a Video Call?</h3>
                </div>
                <p className="text-sm text-foreground mb-4">
                  Book a free consultation with our team. We&apos;ll discuss your project over Zoom or Google Meet.
                </p>
                <Button href="/contact" variant="outline" size="sm" className="w-full">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bristol */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Bristol Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Bristol is one of the UK&apos;s fastest-growing tech hubs, home to innovative
            startups and established brands alike. Our remote team brings world-class
            Shopify expertise to the South West.
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
              Let&apos;s discuss how we can help your Bristol brand succeed online.
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
            Shopify Services for Bristol Businesses
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for South West businesses.
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

      {/* Why Bristol Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Bristol Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Bristol&apos;s creative and tech-forward businesses need a platform that
            can keep up. From animation studios to sustainable brands, Shopify Plus
            powers the most ambitious South West companies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {bristolBrands.map((brand) => (
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
        quote="Working with Flex Commerce remotely has been seamless. Despite not having a local office, their communication is excellent and they truly understand the South West market. Our new Shopify Plus store has doubled our conversion rate."
        author="James Whitfield"
        role="Founder, Bristol Lifestyle Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Bristol, Bath & The South West
          </h2>
          <p className="text-foreground mb-6">
            Our remote team serves businesses across the South West of England.
            Whether you&apos;re based in Bristol city centre, the Cotswolds, or
            anywhere in between, we&apos;re ready to help your ecommerce business
            thrive. Need a face-to-face meeting? We&apos;re happy to travel.
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
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Contact Our Bristol Team
                </h2>
                <p className="text-gray-300 mb-6">
                  Ready to discuss your project? Our South West team is available for
                  video calls, phone consultations, or we can arrange to meet in person.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-[#ef436b]" />
                    </div>
                    <div>
                      <p className="font-medium">Video Consultations</p>
                      <p className="text-sm text-gray-400">Zoom, Google Meet, or Teams</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#ef436b]" />
                    </div>
                    <div>
                      <p className="font-medium">{siteConfig.phone}</p>
                      <p className="text-sm text-gray-400">Mon-Fri, 9am - 5:30pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#ef436b]" />
                    </div>
                    <div>
                      <p className="font-medium">{siteConfig.email}</p>
                      <p className="text-sm text-gray-400">We reply within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button href="/quote" variant="cta" size="lg" className="w-full justify-center">
                  Get a Free Quote
                </Button>
                <Button href="/contact" variant="outline-light" size="lg" className="w-full justify-center">
                  Book a Video Call
                </Button>
                <p className="text-center text-sm text-gray-400 mt-2">
                  Or visit our{" "}
                  <Link href="/shopify-agency-manchester" className="text-white hover:underline">
                    Manchester
                  </Link>{" "}
                  or{" "}
                  <Link href="/shopify-agency-liverpool" className="text-white hover:underline">
                    Liverpool
                  </Link>{" "}
                  offices
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
