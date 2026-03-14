import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { StatsBar } from "@/components/home/StatsBar";
import { ValueProps } from "@/components/home/ValueProps";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { AISection } from "@/components/home/AISection";
import { MigrationSelector } from "@/components/home/MigrationSelector";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { LocationCards } from "@/components/home/LocationCards";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { locations, partnerLogos } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />

      {/* Services Preview */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
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
      </Section>

      <AISection />

      <StatsBar />

      {/* Partners Section */}
      <Section background="dark" className="!py-0 overflow-hidden">
        <PartnerMarquee />
      </Section>

      <ResourcesSection />
    </>
  );
}
