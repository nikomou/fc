import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import {
  Cog,
  Workflow,
  RefreshCw,
  Plug,
  Bell,
  Shield,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automations & Integrations",
  description:
    "Streamline your Shopify operations with powerful automations and seamless integrations. Shopify Flow, custom APIs, and more.",
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
      "Automate order routing, fulfillment workflows, and post-purchase communications.",
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

export default function AutomationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background-alt via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Cog className="w-4 h-4" />
              Efficiency at Scale
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              Automations & Integrations
            </h1>
            <p className="text-xl text-foreground mb-8">
              Streamline your operations with powerful automations and seamless
              integrations. Work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" size="lg" variant="cta">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <CTASection />
    </>
  );
}
