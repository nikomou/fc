import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { StatsBar } from "@/components/home/StatsBar";
import { ValueProps } from "@/components/home/ValueProps";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { MigrationSelector } from "@/components/home/MigrationSelector";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { LocationCards } from "@/components/home/LocationCards";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { locations, partnerLogos } from "@/lib/constants";
import { MapPin } from "lucide-react";

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

        <ServicesGrid />

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

      <ResourcesSection />
    </>
  );
}
