import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Check, FileText } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free quote for your Shopify project. Tell us about your goals and we'll provide a custom proposal.",
};

const benefits = [
  "Free consultation call",
  "Custom proposal within 48 hours",
  "Transparent pricing breakdown",
  "No obligation to proceed",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        badge={{ icon: FileText, text: "Free, No Obligation" }}
        title="Get Your Free Quote"
        description="Tell us about your project and we'll provide a custom proposal tailored to your needs."
        shapeColors={{ topRight: "yellow" }}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground-dark mb-6">
              What to Expect
            </h2>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-background-alt rounded-xl p-6">
              <h3 className="font-semibold text-foreground-dark mb-4">
                Our Process
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-foreground-dark">
                      Submit your details
                    </p>
                    <p className="text-sm text-foreground">
                      Fill out the form with your project information.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-foreground-dark">
                      Discovery call
                    </p>
                    <p className="text-sm text-foreground">
                      We&apos;ll schedule a call to discuss your needs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-foreground-dark">
                      Receive your quote
                    </p>
                    <p className="text-sm text-foreground">
                      Get a detailed proposal within 48 hours.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-foreground-dark mb-6">
                Project Details
              </h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
