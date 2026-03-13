import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  Settings,
  Shield,
  RefreshCw,
  Eye,
  AlertTriangle,
  FileText,
  Check,
  Clock,
  Database,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Maintenance Services | Keep Your Store Healthy | Flex Commerce",
  description:
    "Proactive Shopify maintenance to keep your store secure, fast, and up-to-date. Security updates, backups, monitoring, and performance care.",
  alternates: {
    canonical: "/shopify-maintenance",
  },
  openGraph: {
    title: "Shopify Maintenance Services | Keep Your Store Healthy | Flex Commerce",
    description:
      "Proactive Shopify maintenance to keep your store secure, fast, and up-to-date. Security updates, backups, monitoring, and performance care.",
    url: "/shopify-maintenance",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Shield,
    title: "Security Updates",
    description: "Regular security patches and vulnerability monitoring.",
    color: "#ef436b",
  },
  {
    icon: RefreshCw,
    title: "App Updates",
    description: "Keep apps updated and compatible with latest Shopify changes.",
    color: "#8b5cf6",
  },
  {
    icon: Eye,
    title: "Uptime Monitoring",
    description: "24/7 monitoring with instant alerts if issues arise.",
    color: "#0ea5e9",
  },
  {
    icon: Database,
    title: "Backups",
    description: "Regular backups of your theme, content, and configurations.",
    color: "#10b981",
  },
  {
    icon: AlertTriangle,
    title: "Error Monitoring",
    description: "Catch and fix errors before they impact customers.",
    color: "#f59e0b",
  },
  {
    icon: FileText,
    title: "Health Reports",
    description: "Monthly reports on your store's health and performance.",
    color: "#64748b",
  },
];

const checklist = [
  "Theme code review and cleanup",
  "App audit and optimisation",
  "Broken link checking",
  "Image optimisation",
  "Database cleanup",
  "Speed performance check",
  "SEO health check",
  "Security vulnerability scan",
  "Mobile responsiveness test",
  "Checkout flow testing",
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "We assess your current store health and identify maintenance needs.",
  },
  {
    step: "02",
    title: "Schedule",
    description: "We create a maintenance schedule tailored to your store.",
  },
  {
    step: "03",
    title: "Maintain",
    description: "We perform regular maintenance tasks on schedule.",
  },
  {
    step: "04",
    title: "Report",
    description: "We provide monthly reports on work completed and store health.",
  },
];

const maintenanceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Maintenance Services",
  description: "Proactive Shopify maintenance to keep your store secure, fast, and up-to-date. Security updates, backups, monitoring, and performance care.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Website Maintenance",
  areaServed: "United Kingdom",
};

export default function MaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maintenanceSchema) }}
      />

      <PageHero
        badge={{ icon: Settings, text: "Store Maintenance" }}
        title="Shopify Maintenance Services"
        description="Proactive maintenance to keep your Shopify store secure, fast, and running at peak performance. Prevention is better than cure."
        primaryCta={{ text: "Get Maintenance Plan", href: "/quote" }}
        secondaryCta={{ text: "Book a Call", href: "/contact" }}
        showTrustBadge
        shapeColors={{ topRight: "yellow", bottomLeft: "pink" }}
      />

      {/* Services */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            What We Maintain
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Comprehensive maintenance covering every aspect of your store&apos;s health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4"
                  style={{
                    borderColor: service.color,
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Checklist */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Monthly Maintenance Checklist
            </h2>
            <p className="text-lg text-foreground mb-8">
              Every month, we run through a comprehensive checklist to ensure your store stays healthy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground-dark mb-6">
              Why Proactive Maintenance?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ef436b]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#ef436b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Prevent Downtime</p>
                  <p className="text-sm text-foreground">Catch issues before they take your store offline.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Stay Secure</p>
                  <p className="text-sm text-foreground">Regular security updates protect customer data.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Stay Compatible</p>
                  <p className="text-sm text-foreground">Keep up with Shopify platform changes and updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A systematic approach to keeping your store in top shape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((phase, index) => (
            <div key={phase.step} className="relative">
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-700" />
              )}
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ef436b] text-white text-2xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <TestimonialCard
        quote="Since signing up for Flex Commerce's maintenance plan, we haven't had a single unexpected issue. They catch problems before we even know they exist. It's like having an insurance policy for our store."
        author="James Wilson"
        role="Founder, UK Outdoor Equipment Brand"
      />

      {/* CTA */}
      <Section>
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Keep your store running smoothly
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us handle the maintenance so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Maintenance Plan
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
