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
  Clock,
  Zap,
  Palette,
  ArrowRightLeft,
  Code,
  Gauge,
  Headphones,
  Users,
  Video,
} from "lucide-react";
import { OfficeAccordion } from "@/components/ui/OfficeAccordion";

const whyChooseCards = [
  {
    title: "Shopify Partners",
    description: "Official Shopify & Shopify Plus partners with certified developers serving the North East remotely.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "North East Expertise",
    description: "Remote developers who understand the unique needs and ambitions of Newcastle and North East businesses.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Users",
  },
  {
    title: "Proven Results",
    description: "Helping North East brands achieve measurable ecommerce growth with data-driven strategies.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Seamless Remote Work",
    description: "Modern collaboration tools ensure responsive communication and efficient project delivery.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

const manchesterLocation = locations.find((l) => l.id === "manchester")!;
const liverpoolLocation = locations.find((l) => l.id === "liverpool")!;
const newcastleLocation = locations.find((l) => l.id === "newcastle")!;

// SEO-optimized metadata with canonical, OpenGraph, and Twitter
export const metadata: Metadata = {
  title: "Newcastle Shopify Agency | Shopify Plus Experts | North East",
  description:
    "Expert Shopify & Shopify Plus agency serving Newcastle and the North East. Custom themes, migrations & ongoing support. Get a free quote.",
  alternates: {
    canonical: "/shopify-agency-newcastle",
  },
  openGraph: {
    title: "Newcastle Shopify Agency | Shopify Plus Experts | North East",
    description:
      "Expert Shopify & Shopify Plus agency serving Newcastle and the North East. Remote developers delivering custom development, theme design & migrations for ambitious brands.",
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
    title: "Newcastle Shopify Agency | Shopify Plus Experts | North East",
    description:
      "Expert Shopify & Shopify Plus agency serving Newcastle and the North East. Remote developers delivering custom development, theme design & migrations.",
    images: ["/images/og-newcastle.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth North East brands.",
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
    description: "Dedicated support packages for Newcastle businesses.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const newcastleBrands = [
  "Greggs",
  "Sage",
  "Newcastle United",
  "Fenwick",
  "Barbour",
  "End Clothing",
];

const faqs = [
  {
    question: "How does working with a remote Shopify agency work?",
    answer:
      "We use modern collaboration tools like Slack, Zoom, and project management software to ensure seamless communication. You'll have a dedicated project manager and regular video calls to keep projects on track. Many clients find remote working even more efficient than traditional agency setups.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Absolutely! While we work remotely with Newcastle clients, we have physical offices in Manchester and Liverpool. We're happy to arrange face-to-face meetings at either location, or our team can travel to Newcastle for key project milestones.",
  },
  {
    question: "What are the benefits of working with a remote team?",
    answer:
      "Remote working means you get access to the best Shopify developers regardless of location. It also means faster response times, flexible scheduling, and often more competitive pricing without the overhead of a local office.",
  },
  {
    question: "What size businesses do you work with in Newcastle?",
    answer:
      "We work with businesses of all sizes, from Newcastle startups launching their first Shopify store to established North East brands on Shopify Plus generating millions in revenue.",
  },
  {
    question: "How long does a typical Shopify project take?",
    answer:
      "Project timelines vary based on scope. A theme customisation might take 2-3 weeks, while a full custom build could take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support for Newcastle businesses?",
    answer:
      "Yes, we offer flexible support packages tailored to your needs. Whether you need ad-hoc development help or a dedicated monthly retainer, we've got options to suit your business.",
  },
];

const serviceAreas = [
  "Newcastle",
  "Gateshead",
  "Sunderland",
  "Durham",
  "Northumberland",
  "South Shields",
  "North Shields",
  "Whitley Bay",
  "Tynemouth",
  "Middlesbrough",
  "Darlington",
  "Hartlepool",
  "Hexham",
  "Morpeth",
];

// JSON-LD Structured Data
const newcastleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-newcastle#localbusiness`,
      name: `${siteConfig.name} Newcastle`,
      description: "Expert Shopify & Shopify Plus agency serving Newcastle and the North East. Remote developers delivering custom development, theme design & migrations for ambitious brands.",
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-newcastle`,
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
        latitude: newcastleLocation.geo.latitude,
        longitude: newcastleLocation.geo.longitude,
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
        name: "James Henderson",
      },
      reviewBody:
        "Working with Flex Commerce remotely has been seamless. Despite not being in Newcastle, they've felt like an extension of our team. Our Shopify Plus store now handles 3x the traffic with better conversion rates.",
      datePublished: "2024-10-22",
    },
  ],
};

export default function NewcastlePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newcastleSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                <Users className="w-3 h-3" />
                Remote Team Serving Newcastle
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
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
                agency serving Newcastle and the North East. Helping ambitious brands build
                ecommerce experiences that convert.
              </p>
              <p className="text-foreground mb-4">
                Whilst we don&apos;t have a physical office in Newcastle, we have experienced
                Shopify developers working remotely across the North East. This means you get
                access to our full team of experts with the flexibility of modern remote collaboration.
              </p>
              <p className="text-foreground mb-6">
                From custom theme development to platform migrations and ongoing support,
                our team delivers end-to-end Shopify solutions for Newcastle businesses.
                We&apos;ve helped 50+ brands across the UK increase their online revenue
                and streamline their operations.
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

      {/* Why Newcastle */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Choose Our Newcastle Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Newcastle is home to innovative brands and a thriving digital economy.
            Our remote team brings Shopify expertise directly to North East businesses
            without the constraints of geography.
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
              Let&apos;s discuss how we can help your Newcastle brand succeed online.
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
            Shopify Services for Newcastle Businesses
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for North East businesses.
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

      {/* Why Newcastle Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why North East Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            The North East is home to iconic brands that have built global success.
            From Greggs to End Clothing, ambitious businesses choose Shopify Plus
            for its scalability, reliability, and powerful feature set.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {newcastleBrands.map((brand) => (
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
        quote="Working with Flex Commerce remotely has been seamless. Despite not being in Newcastle, they've felt like an extension of our team. Our Shopify Plus store now handles 3x the traffic with better conversion rates."
        author="James Henderson"
        role="Founder, North East Fashion Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4">
            Serving Newcastle & The North East
          </h2>
          <p className="text-foreground mb-6">
            Our remote team serves businesses across Newcastle, Tyne and Wear,
            and the wider North East region. With offices in Manchester and
            Liverpool, we&apos;re well-positioned to support your ecommerce growth
            wherever you&apos;re based.
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
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="w-16 h-16 bg-[#ef436b] rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Our Team
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to discuss your Shopify project? Book a free video consultation
              with our team. We&apos;ll explore your goals, answer your questions,
              and show you how we can help your Newcastle business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="cta" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                Contact Us
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-5 h-5 text-[#ef436b] mx-auto mb-2" />
                <p className="text-sm text-gray-400">Call us</p>
                <a href={`tel:${siteConfig.phone}`} className="font-medium hover:text-[#ef436b]">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <Mail className="w-5 h-5 text-[#ef436b] mx-auto mb-2" />
                <p className="text-sm text-gray-400">Email us</p>
                <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-[#ef436b]">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <Clock className="w-5 h-5 text-[#ef436b] mx-auto mb-2" />
                <p className="text-sm text-gray-400">Working hours</p>
                <p className="font-medium">Mon-Fri: 9am - 5:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
