import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { StatsBar } from "@/components/home/StatsBar";
import { ValueProps } from "@/components/home/ValueProps";
import { LatestPosts } from "@/components/home/LatestPosts";
import { MigrationSelector } from "@/components/home/MigrationSelector";
import { LocationCards } from "@/components/home/LocationCards";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { services, locations, partnerLogos } from "@/lib/constants";
import {
  Zap,
  Search,
  Palette,
  Code,
  Gauge,
  Headphones,
  MapPin,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Search,
  Palette,
  Code,
  Gauge,
  Headphones,
};

const serviceWaves: Record<string, string> = {
  "Shopify Plus":      "/images/wave-yellow-corner.svg",
  "Theme Development": "/images/wave-pink-corner.svg",
  "App Development":   "/images/wave-purple-corner.svg",
  "Shopify SEO":       "/images/wave-green-corner.svg",
  "Speed Optimisation":"/images/wave-black-corner.svg",
  "Ongoing Support":   "/images/wave-blue-corner.svg",
};

const serviceCardBg: Record<string, string> = {
  "Shopify Plus":      "#fffdf5",
  "Theme Development": "#fff5f7",
  "App Development":   "#f8f5ff",
  "Shopify SEO":       "#f3fdf6",
  "Speed Optimisation":"#f8f8f8",
  "Ongoing Support":   "#f3f8ff",
};


const serviceCircles: Record<string, string> = {
  "Shopify Plus":      "/images/circles/circle-yellow.svg",
  "Theme Development": "/images/circles/circle-pink.svg",
  "App Development":   "/images/circles/circle-purple.svg",
  "Shopify SEO":       "/images/circles/circle-green.svg",
  "Speed Optimisation":"/images/circles/circle-black.svg",
  "Ongoing Support":   "/images/circles/circle-blue.svg",
};

const servicePills: Record<string, { label: string; bg: string; text: string }[]> = {
  "Shopify Plus":      [
    { label: "Custom Checkout", bg: "#fef3c7", text: "#92400e" },
    { label: "B2B & Wholesale", bg: "#fef3c7", text: "#92400e" },
    { label: "Flow Automation",  bg: "#fef3c7", text: "#92400e" },
  ],
  "Theme Development": [
    { label: "Custom Design",   bg: "#fce7ef", text: "#9f1239" },
    { label: "Mobile-First",    bg: "#fce7ef", text: "#9f1239" },
    { label: "Liquid",          bg: "#fce7ef", text: "#9f1239" },
  ],
  "App Development":   [
    { label: "Private Apps",    bg: "#ede9fe", text: "#5b21b6" },
    { label: "Integrations",    bg: "#ede9fe", text: "#5b21b6" },
    { label: "APIs",            bg: "#ede9fe", text: "#5b21b6" },
  ],
  "Shopify SEO":       [
    { label: "Technical SEO",   bg: "#d1fae5", text: "#065f46" },
    { label: "Schema Markup",   bg: "#d1fae5", text: "#065f46" },
    { label: "Content",         bg: "#d1fae5", text: "#065f46" },
  ],
  "Speed Optimisation":[
    { label: "Core Web Vitals", bg: "#f1f5f9", text: "#1e293b" },
    { label: "Lighthouse",      bg: "#f1f5f9", text: "#1e293b" },
    { label: "Lazy Loading",    bg: "#f1f5f9", text: "#1e293b" },
  ],
  "Ongoing Support":   [
    { label: "Bug Fixes",       bg: "#e0f2fe", text: "#075985" },
    { label: "Updates",         bg: "#e0f2fe", text: "#075985" },
    { label: "Monitoring",      bg: "#e0f2fe", text: "#075985" },
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />

      {/* Services Preview */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            End-to-end Shopify solutions to help your business succeed in ecommerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            const wave = serviceWaves[service.title];
            const circle = serviceCircles[service.title];
            const pills = servicePills[service.title] ?? [];
            const cardBg = serviceCardBg[service.title] ?? "#ffffff";
            return (
              <a
                key={service.title}
                href={service.href}
                className="group relative rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col min-h-[280px]"
                style={{ backgroundColor: cardBg }}
              >
                {/* Wave decoration top-right */}
                {wave && (
                  <Image
                    src={wave}
                    alt=""
                    width={160}
                    height={160}
                    className="absolute top-0 right-0 w-32 h-32 object-contain object-right-top opacity-60 pointer-events-none transition-all duration-500 ease-out group-hover:opacity-90 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2"
                    aria-hidden="true"
                  />
                )}
                <div className="relative w-12 h-12 mb-4">
                  {circle && (
                    <Image
                      src={circle}
                      alt=""
                      width={48}
                      height={48}
                      className="absolute inset-0 w-12 h-12"
                      aria-hidden="true"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="relative text-lg font-semibold text-foreground-dark mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-foreground text-sm mb-4 flex-1">{service.description}</p>
                {pills.length > 0 && (
                  <div className="relative flex flex-wrap gap-2 mt-auto">
                    {pills.map((pill) => (
                      <span
                        key={pill.label}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: pill.bg, color: pill.text }}
                      >
                        {pill.label}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/shopify-services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Migration Selector */}
      <Section background="dark" className="py-12 md:py-16">
        <MigrationSelector />
      </Section>

      {/* Locations */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            With offices in Manchester and Liverpool, we&apos;re perfectly positioned
            to serve brands across the UK. Whether you&apos;re local or nationwide, our team delivers
            the same exceptional service and results.
          </p>
        </div>

        {/* Office Location Cards */}
        <div className="mb-10">
          <LocationCards />
        </div>

        {/* Other Service Areas */}
        <div className="text-center">
          <p className="text-sm text-foreground mb-4">We also serve clients in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "London", href: "/shopify-agency-london" },
              { name: "Edinburgh", href: "/shopify-agency-edinburgh" },
              { name: "Bristol", href: "/shopify-agency-bristol" },
              { name: "Leeds", href: "/shopify-agency-leeds" },
              { name: "Cambridge", href: "/shopify-agency-cambridge" },
              { name: "Birmingham", href: "/shopify-agency-birmingham" },
              { name: "Glasgow", href: "/shopify-agency-glasgow" },
              { name: "Newcastle", href: "/shopify-agency-newcastle" },
            ].map((city) => (
              <a
                key={city.name}
                href={city.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-foreground-dark text-sm font-medium hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4" />
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners Section */}
      <Section background="dark" className="!py-0 overflow-hidden">
        <PartnerMarquee />
      </Section>

      <StatsBar />

      <LatestPosts />
    </>
  );
}
