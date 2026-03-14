import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/constants";

export interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  subheading?: string;
  background?: "white" | "alt" | "dark";
}

/**
 * Renders a FAQ section with the shared FAQAccordion UI component.
 * The JSON-LD FAQPage schema is injected as a sibling <script> tag so
 * the parent page can remain a pure Server Component — no "use client"
 * directive is needed here because the schema script is static and the
 * accordion interactivity lives inside FAQAccordion (which is already a
 * Client Component).
 */
export function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
  background = "white",
}: FAQSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Section background={background}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
              {heading}
            </h2>
            {subheading && (
              <p className="text-lg text-foreground">{subheading}</p>
            )}
          </div>
          <FAQAccordion
            faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
          />
        </div>
      </Section>
    </>
  );
}
