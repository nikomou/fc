import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Handshake, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { partnerLogos } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Partners | Flex Commerce",
  description: "Flex Commerce partners with the best-in-class Shopify technology providers to deliver unparalleled ecommerce solutions.",
  alternates: { canonical: "https://flexcommerce.co.uk/partners" },
};

const partnerDetails: Record<string, { description: string; category: string }> = {
  Yotpo:        { description: "Reviews, loyalty and referral programmes that build brand trust and drive repeat purchases.", category: "Reviews & Loyalty" },
  Nosto:        { description: "AI-powered personalisation that delivers the right product to the right customer at the right time.", category: "Personalisation" },
  Klaviyo:      { description: "Email and SMS marketing automation built for ecommerce growth.", category: "Email Marketing" },
  Mollie:       { description: "Flexible payment solutions that increase conversion at checkout.", category: "Payments" },
  "Reviews.io": { description: "Collect and display verified customer reviews to boost credibility and conversions.", category: "Reviews" },
  Trustpilot:   { description: "The world's most trusted review platform, driving confidence in your brand.", category: "Reviews" },
  Gorgias:      { description: "Centralise customer support across email, live chat, social and SMS — built specifically for ecommerce to turn support into a revenue driver.", category: "Customer Support" },
  Klevu:        { description: "AI-powered search and product discovery that helps shoppers find what they need faster, increasing on-site conversion rates.", category: "Search & Discovery" },
  Brightpearl:  { description: "Retail operations platform connecting inventory, orders, warehousing and accounting — purpose-built for multichannel retailers.", category: "Operations & ERP" },
  Patchworks:   { description: "No-code integration platform that connects your entire tech stack — from ERP to 3PL — without the development complexity.", category: "Integration Platform" },
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

      {/* Become a Partner */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
              Partner Programme
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Become a technology partner
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We're always looking to expand our network with best-in-class technology providers. If your platform helps Shopify merchants grow, we'd love to explore a partnership.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our clients are ambitious ecommerce brands investing in their tech stack. As a partner, you get direct access to warm introductions, co-marketing opportunities, and a team that genuinely champions your product.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Joint case studies and co-branded content",
                "Introductions to actively investing merchants",
                "Listed on our partners page and recommended to clients",
                "Collaborative demos and solution workshops",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="cta" size="lg">
              Get in touch
            </Button>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-10 flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              What we look for
            </p>
            {[
              { title: "Shopify-native or deeply integrated", body: "Your platform works seamlessly within the Shopify ecosystem." },
              { title: "Proven results for merchants", body: "Demonstrable ROI with real merchant case studies to back it up." },
              { title: "Aligned values", body: "A shared commitment to long-term merchant success, not just making the sale." },
              { title: "Collaborative approach", body: "You're interested in building a genuine, reciprocal relationship." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-foreground-dark mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
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
