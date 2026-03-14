import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { FAQSection } from "@/components/ui/FAQSection";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { siteConfig } from "@/lib/constants";
import {
  Zap,
  Search,
  Lightbulb,
  BarChart3,
  GitMerge,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Powered Shopify Development | Flex Commerce",
  description:
    "We've embedded AI across every part of our Shopify workflow — delivering faster builds, smarter SEO for AI search platforms, and deeper data insights for UK ecommerce brands.",
  alternates: {
    canonical: "/shopify-ai",
  },
  openGraph: {
    title: "AI-Powered Shopify Development | Flex Commerce",
    description:
      "AI-enhanced Shopify development from Flex Commerce. Faster delivery, AI search optimisation, generative creative strategy, and data-driven growth for UK brands.",
    url: "/shopify-ai",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI-Powered Shopify Development - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Shopify Development | Flex Commerce",
    description:
      "AI-enhanced Shopify development from Flex Commerce. Faster delivery, AI search optimisation, and data-driven growth for UK brands.",
    images: ["/images/og-image.png"],
  },
};

const capabilities = [
  {
    icon: Zap,
    title: "AI-Accelerated Development",
    description:
      "Faster builds with AI-assisted code generation, review and QA — without cutting corners on quality or reliability.",
    color: "#f59e0b",
  },
  {
    icon: Search,
    title: "AI Search Optimisation",
    description:
      "Your store, structured for discovery on ChatGPT Shopping, Google SGE, and Perplexity — the new frontier of product search.",
    color: "#ef436b",
  },
  {
    icon: Lightbulb,
    title: "Generative Creative Strategy",
    description:
      "Rapid ideation, layout exploration, and concept testing at speed — so you move from brief to decision in hours, not days.",
    color: "#8b5cf6",
  },
  {
    icon: BarChart3,
    title: "Behavioural Data Analysis",
    description:
      "Surface trends and growth opportunities from large datasets instantly — turning raw data into clear, actionable strategy.",
    color: "#10b981",
  },
  {
    icon: GitMerge,
    title: "Workflow Automation",
    description:
      "Streamline operations with intelligent automation and third-party integrations that reduce manual overhead across your business.",
    color: "#0ea5e9",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimisation",
    description:
      "AI-driven performance monitoring and conversion improvement that runs constantly — not just after a quarterly review.",
    color: "#64748b",
  },
];

const capabilityTheme = {
  wave: "/images/wave-yellow-corner.svg",
  circle: "/images/circles/circle-yellow.svg",
  cardBg: "#fffdf5",
};

const process = [
  {
    step: "01",
    title: "Audit",
    description:
      "We assess your current setup and identify where AI can unlock the most value for your store and workflows.",
  },
  {
    step: "02",
    title: "Integrate",
    description:
      "AI tools are woven into design, development and strategy workflows — invisibly and without friction.",
  },
  {
    step: "03",
    title: "Optimise",
    description:
      "We use AI insights to continuously improve performance, rankings, and conversion across your store.",
  },
  {
    step: "04",
    title: "Report",
    description:
      "Regular reporting shows the tangible output and ROI of AI-enhanced delivery — in plain language.",
  },
];

const faqs = [
  {
    q: "Do I need to do anything differently to benefit from your AI approach?",
    a: "No. Our AI integration is built into how we work. You brief us as normal and benefit from faster delivery, smarter insights and better outcomes automatically.",
  },
  {
    q: "Will AI replace the human thinking on my project?",
    a: "Never. AI handles repetitive and data-heavy tasks so our team can focus on strategy, creativity and the nuanced decisions that require human expertise.",
  },
  {
    q: "How does AI help with Shopify SEO?",
    a: "We optimise your store structure, metadata and content for AI-powered search platforms like ChatGPT Shopping and Google's AI Overviews — the new frontier of product discovery.",
  },
  {
    q: "Is AI development as reliable as traditional development?",
    a: "Yes — we use AI to augment quality, not shortcut it. Every AI-generated output is reviewed, tested and refined by our developers before it reaches your store.",
  },
  {
    q: "Can you help migrate my existing store and apply AI optimisation at the same time?",
    a: "Absolutely. Many clients combine a migration or rebuild with our AI-enhanced workflow for the best possible foundation.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI-Powered Shopify Development",
  description:
    "AI-enhanced Shopify development services from Flex Commerce. Faster builds, AI search optimisation, generative creative strategy and behavioural data analysis for UK ecommerce brands.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Shopify Development",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-ai`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI-Powered Shopify Development",
      item: `${siteConfig.url}/shopify-ai`,
    },
  ],
};

export default function ShopifyAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge={{ icon: Zap, text: "AI-Powered" }}
        title="AI-Powered Shopify Development"
        description="We've embedded AI across every part of our workflow — so you get more output, deeper insight, and stronger performance without a bigger budget."
        primaryCta={{ text: "Get A Quote", href: "/quote" }}
        secondaryCta={{ text: "Book a Call", href: "/contact" }}
        shapeColors={{ topRight: "yellow", bottomLeft: "yellow" }}
      />

      {/* Capabilities */}
      <Section background="alt">
        <ServiceCapabilities
          heading="How We Use AI"
          subheading="AI integrated across every discipline — not bolted on as an afterthought."
          items={capabilities}
          theme={capabilityTheme}
        />
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Use AI
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A structured approach to embedding AI where it creates the most value.
          </p>
        </div>
        <ProcessSteps steps={process} />
      </Section>

      {/* Why AI Matters Now */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Why AI Matters Now
            </h2>
            <p className="text-lg text-foreground mb-5">
              The way customers discover products online is changing faster than at any point in the last decade. AI-powered search tools — ChatGPT Shopping, Google&apos;s AI Overviews, and Perplexity — are now surfacing product recommendations directly in conversation, bypassing traditional search results entirely.
            </p>
            <p className="text-lg text-foreground mb-5">
              Brands that aren&apos;t structured for these platforms are already losing visibility. It&apos;s not a future problem — it&apos;s happening now. The stores that benefit are those with clean structured data, well-organised content, and pages that AI models can understand and cite confidently.
            </p>
            <p className="text-lg text-foreground">
              At the same time, AI is reshaping how we build. Code generation, automated QA, rapid prototyping and intelligent analysis mean our team can deliver more in less time — and that efficiency goes directly into your project.
            </p>
          </div>

          <div className="lg:sticky lg:top-28">
            <blockquote className="relative rounded-2xl p-8 bg-[#0a0a0a] overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f59e0b] to-[#ef436b]" />

              <p className="text-xl font-semibold text-white leading-relaxed mb-6">
                &ldquo;The brands winning in AI search aren&apos;t the biggest — they&apos;re the ones that structured their stores correctly first.&rdquo;
              </p>

              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#f59e0b] mt-2 flex-shrink-0" />
                  <p className="text-sm text-white/60">
                    <span className="text-white font-medium">ChatGPT Shopping</span> — 100M+ weekly active users discovering products through conversation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ef436b] mt-2 flex-shrink-0" />
                  <p className="text-sm text-white/60">
                    <span className="text-white font-medium">Google AI Overviews</span> — appearing in over 50% of commercial search queries globally.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                  <p className="text-sm text-white/60">
                    <span className="text-white font-medium">Perplexity</span> — the AI search engine growing fastest among high-intent buyers.
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3182812.webp"
        overlayColor="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
      />

      <RelatedServices exclude="AI-Powered Shopify Development" />
    </>
  );
}
