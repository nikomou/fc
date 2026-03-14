import Image from "next/image";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Section } from "@/components/ui/Section";

export interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  subheading?: string;
  background?: "white" | "alt" | "dark";
  image?: string;
  imageAlt?: string;
  overlayColor?: string;
}

export function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
  background = "white",
  image,
  imageAlt = "",
  overlayColor = "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
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
        {image ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: FAQs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-3">
                {heading}
              </h2>
              {subheading && (
                <p className="text-lg text-foreground mb-8">{subheading}</p>
              )}
              {!subheading && <div className="mb-8" />}
              <FAQAccordion
                faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
              />
            </div>

            {/* Right: image with colour overlay */}
            <div className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[560px] lg:sticky lg:top-28">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 opacity-70"
                style={{ background: overlayColor }}
              />
            </div>
          </div>
        ) : (
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
        )}
      </Section>
    </>
  );
}
