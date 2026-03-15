import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  Cog,
  Workflow,
  RefreshCw,
  Plug,
  Bell,
  Shield,
  Check,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/constants";
import { FAQSection } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Shopify Automation & Integrations | Shopify Flow & API | Flex Commerce",
  description:
    "Custom Shopify automation workflows and third-party integrations. We connect Shopify to ERPs, Klaviyo, Yotpo, Gorgias, and 50+ platforms. Free consultation.",
  alternates: {
    canonical: "/automations",
  },
};

const automations = [
  {
    icon: Workflow,
    title: "Shopify Flow",
    description:
      "Create automated workflows to handle repetitive tasks, from inventory management to customer segmentation.",
  },
  {
    icon: RefreshCw,
    title: "Order Processing",
    description:
      "Automate order routing, fulfilment workflows, and post-purchase communications.",
  },
  {
    icon: Bell,
    title: "Notifications & Alerts",
    description:
      "Set up automated alerts for low stock, high-value orders, and key business metrics.",
  },
  {
    icon: Shield,
    title: "Fraud Prevention",
    description:
      "Automated fraud detection and order verification workflows.",
  },
];

const integrations = [
  {
    category: "ERP & Inventory",
    tools: ["NetSuite", "SAP", "Brightpearl", "TradeGecko"],
  },
  {
    category: "Marketing",
    tools: ["Klaviyo", "Omnisend", "Mailchimp", "Postscript"],
  },
  {
    category: "Reviews & UGC",
    tools: ["Yotpo", "Reviews.io", "Trustpilot", "Okendo"],
  },
  {
    category: "Payments",
    tools: ["Klarna", "Affirm", "PayPal", "Apple Pay"],
  },
  {
    category: "Shipping",
    tools: ["ShipStation", "Shippo", "EasyPost", "DHL"],
  },
  {
    category: "Analytics",
    tools: ["Google Analytics", "Heap", "Mixpanel", "Lucky Orange"],
  },
];

const benefits = [
  "Reduce manual tasks by up to 80%",
  "Eliminate human error in repetitive processes",
  "Scale operations without adding headcount",
  "Real-time data sync across systems",
  "Improved customer experience",
  "Better decision-making with unified data",
];

const faqs = [
  {
    question: "What automation tools do you use for Shopify?",
    answer: "We primarily use Shopify Flow for native automation workflows, alongside custom API integrations for connecting Shopify to external systems like ERPs, CRMs, and marketing platforms. For complex workflows we build bespoke solutions using Shopify's REST and GraphQL APIs."
  },
  {
    question: "Can you integrate Shopify with our existing ERP system?",
    answer: "Yes. We have experience integrating Shopify with major ERP systems including NetSuite, SAP, Brightpearl, and Microsoft Dynamics. We build real-time two-way sync for inventory, orders, and customer data."
  },
  {
    question: "How long does a typical integration project take?",
    answer: "A standard third-party app integration (e.g., connecting Shopify to Klaviyo or Yotpo) takes 1–2 weeks. Custom API integrations with ERP or WMS systems typically take 4–8 weeks depending on complexity and the quality of the third-party API."
  },
  {
    question: "Do you offer ongoing support for integrations after launch?",
    answer: "Yes. We offer monthly retainer packages that include monitoring, maintenance, and updates for your integrations. API changes and platform updates can break integrations, so ongoing monitoring is strongly recommended."
  },
  {
    question: "Can you automate our order fulfilment process?",
    answer: "Absolutely. We build custom fulfilment automation workflows using Shopify Flow, including automatic order routing to fulfilment centres, low stock alerts, fraud flagging, and post-purchase communication sequences."
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Shopify Automation & Integration Services",
      serviceType: "Shopify Automation",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: "United Kingdom",
      description: "Custom Shopify automation workflows and third-party integrations. We connect your Shopify store to ERPs, CRMs, marketing platforms, and more.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Automations & Integrations", item: `${siteConfig.url}/automations` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function AutomationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero
        background="green"
        badge={{ icon: Cog, text: "Efficiency at Scale" }}
        title="Automations & Integrations"
        description="Streamline your operations with powerful automations and seamless integrations. Work smarter, not harder."
        primaryCta={{ text: "Get Started", href: "/quote" }}
        secondaryCta={{ text: "Book a Consultation", href: "/contact" }}
        shapeColors={{ topRight: "green" }}
      />

      {/* Automations */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Automation Solutions
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We build custom automation workflows that save time and reduce
            errors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {automations.map((automation) => {
            const Icon = automation.icon;
            return (
              <div
                key={automation.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                    {automation.title}
                  </h3>
                  <p className="text-foreground">{automation.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Integrations */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Integration Partners
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We integrate your Shopify store with the tools you already use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration) => (
            <div
              key={integration.category}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-foreground-dark mb-4">
                {integration.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {integration.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-background-alt rounded-full text-sm text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-foreground">
            Don&apos;t see your tool?{" "}
            <a href="/contact" className="text-accent hover:underline">
              Contact us
            </a>{" "}
            - we can integrate with almost any system.
          </p>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground-dark mb-6">
              Why Automate?
            </h2>
            <p className="text-lg text-foreground mb-8">
              Automation isn&apos;t just about efficiency - it&apos;s about freeing up
              your team to focus on what matters most: growing your business.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">80%</div>
                <p className="text-foreground">Reduction in manual tasks</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">5x</div>
                <p className="text-foreground">Faster order processing</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">0</div>
                <p className="text-foreground">Data entry errors</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Automate Your Operations?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us about your current setup and we&apos;ll identify the highest-impact automation opportunities for your store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get a Free Quote</Button>
            <Button href="/contact" variant="outline-light" size="lg">Book a Consultation</Button>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3182812.webp"
        imageAlt="Shopify automations and integration services"
        overlayColor="linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
      />
    </>
  );
}
