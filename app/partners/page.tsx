import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { partnerLogos } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Partners | Flex Commerce",
  description: "Flex Commerce partners with the best-in-class Shopify technology providers to deliver unparalleled ecommerce solutions.",
  alternates: { canonical: "https://flexcommerce.co.uk/partners" },
};

const partnerDetails: Record<string, { description: string; category: string }> = {
  Yotpo:       { description: "Reviews, loyalty and referral programmes that build brand trust and drive repeat purchases.", category: "Reviews & Loyalty" },
  Nosto:       { description: "AI-powered personalisation that delivers the right product to the right customer at the right time.", category: "Personalisation" },
  Klaviyo:     { description: "Email and SMS marketing automation built for ecommerce growth.", category: "Email Marketing" },
  Mollie:      { description: "Flexible payment solutions that increase conversion at checkout.", category: "Payments" },
  "Reviews.io":{ description: "Collect and display verified customer reviews to boost credibility and conversions.", category: "Reviews" },
  Trustpilot:  { description: "The world's most trusted review platform, driving confidence in your brand.", category: "Reviews" },
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        badge={{ icon: Handshake, text: "Our Partners" }}
        title="Technology Partners"
        description="We work with best-in-class technology providers to deliver complete ecommerce solutions for our clients."
        background="purple"
        shapeColors={{ topRight: "purple" }}
      />

      {/* Partner grid */}
      <Section background="alt">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerLogos.map((partner) => {
            const detail = partnerDetails[partner.name];
            return (
              <div
                key={partner.name}
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm border border-gray-100"
              >
                <div className="relative w-32 h-9">
                  <Image src={partner.logo} alt={partner.alt} fill className="object-contain object-left" />
                </div>
                {detail && (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                      {detail.category}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {detail.description}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build something great?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch and we'll put together the perfect tech stack for your store.
          </p>
          <Button href="/quote" variant="cta" size="lg">Get A Quote</Button>
        </div>
      </Section>
    </>
  );
}
