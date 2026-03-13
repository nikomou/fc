import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { StatsBar } from "@/components/home/StatsBar";
import { ValueProps } from "@/components/home/ValueProps";
import { CTASection } from "@/components/home/CTASection";
import { MigrationSelector } from "@/components/home/MigrationSelector";
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <StatsBar />
      <ValueProps />

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
            return (
              <a
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
      <Section>
        <MigrationSelector />
      </Section>

      {/* Partners Section */}
      <Section background="dark">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technology Partners
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-2">
            We are proud to collaborate with some of the most respected names in the industry.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our partnerships are built on a foundation of mutual trust and shared values, enabling us to deliver unparalleled ecommerce solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg px-3 py-2 hover:shadow-lg transition-shadow"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={180}
                height={90}
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
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

        {/* Main Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {locations
            .filter((location) => location.id === "manchester" || location.id === "liverpool")
            .map((location) => (
              <a
                key={location.id}
                href={`/${location.slug}`}
                className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-black/10 transition-colors">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-2 group-hover:text-black transition-colors">
                  {location.name}
                </h3>
                <p className="text-foreground text-sm">
                  {location.streetAddress}, {location.addressLocality}
                </p>
              </a>
            ))}
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

      <CTASection />
    </>
  );
}
