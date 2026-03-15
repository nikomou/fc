import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { siteConfig } from "@/lib/constants";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} | Case Study | Flex Commerce`,
    description: caseStudy.description,
    alternates: {
      canonical: `${siteConfig.url}/work/${caseStudy.slug}`,
    },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      url: `${siteConfig.url}/work/${caseStudy.slug}`,
      type: "article",
      publishedTime: caseStudy.date,
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  const related = caseStudies
    .filter((c) => c.slug !== caseStudy.slug)
    .slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteConfig.url}/work/${caseStudy.slug}#article`,
        headline: caseStudy.title,
        description: caseStudy.description,
        author: { "@type": "Organization", name: siteConfig.name },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        datePublished: caseStudy.date,
        about: { "@type": "Service", name: caseStudy.service },
      },
      {
        "@type": "Review",
        itemReviewed: { "@id": `${siteConfig.url}/#organization` },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: caseStudy.testimonial.author },
        reviewBody: caseStudy.testimonial.quote,
      },
      {
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
            name: "Our Work",
            item: `${siteConfig.url}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: caseStudy.title,
            item: `${siteConfig.url}/work/${caseStudy.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <div
        className="relative pt-32 pb-16"
        style={{ background: caseStudy.gradient, minHeight: "580px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white transition-colors">
              Our Work
            </Link>
            <span>/</span>
            <span className="text-white/90">{caseStudy.title}</span>
          </nav>

          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Work
          </Link>

          {/* Industry badge */}
          <div className="mb-4">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: caseStudy.accent + "33", border: `1px solid ${caseStudy.accent}66` }}
            >
              {caseStudy.industry}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {caseStudy.title}
          </h1>

          {/* Headline metric */}
          <p
            className="text-xl md:text-2xl font-semibold mb-10 max-w-2xl"
            style={{ color: caseStudy.accent }}
          >
            {caseStudy.headline}
          </p>

          {/* Results grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {caseStudy.results.map((result) => {
              const parts = result.match(/^([£\d][\d,.]*[MKBkm%x+]?)\s+(.+)$/);
              const metric = parts ? parts[1] : result;
              const label = parts ? parts[2] : "";
              return (
                <div
                  key={result}
                  className="rounded-xl p-4 bg-black/30 border border-white/10 backdrop-blur-sm"
                >
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: caseStudy.accent }}
                  >
                    {metric}
                  </div>
                  <div className="text-white/70 text-xs leading-snug">{label || result}</div>
                </div>
              );
            })}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {caseStudy.duration}
            </span>
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge, Approach, Outcome */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                label: "The Challenge",
                colour: "#ef436b",
                text: caseStudy.challenge,
              },
              {
                label: "Our Approach",
                colour: caseStudy.accent,
                text: caseStudy.approach,
              },
              {
                label: "The Outcome",
                colour: "#10b981",
                text: caseStudy.outcome,
              },
            ].map((block) => (
              <div key={block.label}>
                <div
                  className="w-8 h-1 rounded-full mb-3"
                  style={{ backgroundColor: block.colour }}
                />
                <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  {block.label}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services delivered */}
      <Section background="alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
            Services Delivered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {caseStudy.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="font-medium text-[#1a1a1a] text-sm">
                  {service.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#ef436b] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="mx-auto mb-8 text-[#ef436b] opacity-60"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14 6C9.6 6 6 9.6 6 14v8c0 4.4 3.6 8 8 8h2l-4 12h6l6-14V14c0-4.4-3.6-8-8-8zm20 0c-4.4 0-8 3.6-8 8v8c0 4.4 3.6 8 8 8h2l-4 12h6l6-14V14c0-4.4-3.6-8-8-8z" />
          </svg>
          <blockquote
            className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &ldquo;{caseStudy.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: caseStudy.accent }}
            >
              {caseStudy.testimonial.author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">
                {caseStudy.testimonial.author}
              </p>
              <p className="text-white/50 text-xs">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section background="alt">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
            Start a similar project
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to see results like these for your brand? Get in touch with our team and we will put together a tailored plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="cta" size="lg">
              Get a Free Consultation
            </Button>
            <Button href="/work" variant="outline" size="lg">
              View More Case Studies
            </Button>
          </div>
        </div>
      </Section>

      {/* Related case studies */}
      {related.length > 0 && (
        <Section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              More Case Studies
            </h2>
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#1a1a1a] transition-colors"
            >
              View all work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className="p-8 flex flex-col gap-4 min-h-[220px]"
                  style={{ background: cs.gradient }}
                >
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full self-start text-white"
                    style={{
                      backgroundColor: cs.accent + "33",
                      border: `1px solid ${cs.accent}66`,
                    }}
                  >
                    {cs.industry}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    {cs.headline}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-medium mt-auto group-hover:gap-2 transition-all"
                    style={{ color: cs.accent }}
                  >
                    Read case study
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
