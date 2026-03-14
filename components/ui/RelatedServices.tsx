"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Zap, Search, Palette, Code, Gauge, Headphones, LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Search,
  Palette,
  Code,
  Gauge,
  Headphones,
};

const serviceWaves: Record<string, string> = {
  "Shopify Plus":       "/images/wave-yellow-corner.svg",
  "Theme Development":  "/images/wave-pink-corner.svg",
  "App Development":    "/images/wave-purple-corner.svg",
  "Shopify SEO":        "/images/wave-green-corner.svg",
  "Speed Optimisation": "/images/wave-black-corner.svg",
  "Ongoing Support":    "/images/wave-blue-corner.svg",
};

const serviceCardBg: Record<string, string> = {
  "Shopify Plus":       "#fffdf5",
  "Theme Development":  "#fff5f7",
  "App Development":    "#f8f5ff",
  "Shopify SEO":        "#f3fdf6",
  "Speed Optimisation": "#f8f8f8",
  "Ongoing Support":    "#f3f8ff",
};

const serviceCircles: Record<string, string> = {
  "Shopify Plus":       "/images/circles/circle-yellow.svg",
  "Theme Development":  "/images/circles/circle-pink.svg",
  "App Development":    "/images/circles/circle-purple.svg",
  "Shopify SEO":        "/images/circles/circle-green.svg",
  "Speed Optimisation": "/images/circles/circle-black.svg",
  "Ongoing Support":    "/images/circles/circle-blue.svg",
};

const servicePills: Record<string, { label: string; bg: string; text: string }[]> = {
  "Shopify Plus":       [
    { label: "Custom Checkout", bg: "#fef3c7", text: "#92400e" },
    { label: "B2B & Wholesale", bg: "#fef3c7", text: "#92400e" },
    { label: "Flow Automation",  bg: "#fef3c7", text: "#92400e" },
  ],
  "Theme Development":  [
    { label: "Custom Design",   bg: "#fce7ef", text: "#9f1239" },
    { label: "Mobile-First",    bg: "#fce7ef", text: "#9f1239" },
    { label: "Liquid",          bg: "#fce7ef", text: "#9f1239" },
  ],
  "App Development":    [
    { label: "Private Apps",    bg: "#ede9fe", text: "#5b21b6" },
    { label: "Integrations",    bg: "#ede9fe", text: "#5b21b6" },
    { label: "APIs",            bg: "#ede9fe", text: "#5b21b6" },
  ],
  "Shopify SEO":        [
    { label: "Technical SEO",   bg: "#d1fae5", text: "#065f46" },
    { label: "Schema Markup",   bg: "#d1fae5", text: "#065f46" },
    { label: "Content",         bg: "#d1fae5", text: "#065f46" },
  ],
  "Speed Optimisation": [
    { label: "Core Web Vitals", bg: "#f1f5f9", text: "#1e293b" },
    { label: "Lighthouse",      bg: "#f1f5f9", text: "#1e293b" },
    { label: "Lazy Loading",    bg: "#f1f5f9", text: "#1e293b" },
  ],
  "Ongoing Support":    [
    { label: "Bug Fixes",       bg: "#e0f2fe", text: "#075985" },
    { label: "Updates",         bg: "#e0f2fe", text: "#075985" },
    { label: "Monitoring",      bg: "#e0f2fe", text: "#075985" },
  ],
};

const VISIBLE = 3;

interface RelatedServicesProps {
  exclude?: string;
}

export function RelatedServices({ exclude }: RelatedServicesProps) {
  const filtered = exclude
    ? services.filter((s) => s.title !== exclude)
    : services;

  const [index, setIndex] = useState(0);
  const max = filtered.length - VISIBLE;
  const canPrev = index > 0;
  const canNext = index < max;

  return (
    <Section background="alt">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-2">
            Explore Our Other Services
          </h2>
          <p className="text-lg text-foreground max-w-xl">
            End-to-end Shopify solutions to help your business succeed in ecommerce.
          </p>
        </div>

        {/* Nav arrows */}
        <div className="flex gap-2 flex-shrink-0 ml-6">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            aria-label="Previous services"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-colors hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-foreground-dark" />
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(max, i + 1))}
            disabled={!canNext}
            aria-label="Next services"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-colors hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-foreground-dark" />
          </button>
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + 24px / ${VISIBLE} * (${VISIBLE} - 1) / ${VISIBLE})))` }}
        >
          {filtered.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            const wave = serviceWaves[service.title];
            const circle = serviceCircles[service.title];
            const pills = servicePills[service.title] ?? [];
            const cardBg = serviceCardBg[service.title] ?? "#ffffff";
            return (
              <a
                key={service.title}
                href={service.href}
                className="group relative rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col min-h-[280px] flex-shrink-0"
                style={{
                  backgroundColor: cardBg,
                  width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})`,
                }}
              >
                {wave && (
                  <Image
                    src={wave}
                    alt=""
                    width={160}
                    height={160}
                    className="absolute top-0 right-0 w-32 h-32 object-contain object-right-top opacity-60 pointer-events-none transition-all duration-500 ease-out group-hover:opacity-90 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2"
                    aria-hidden="true"
                  />
                )}
                <div className="relative w-12 h-12 mb-4">
                  {circle && (
                    <Image
                      src={circle}
                      alt=""
                      width={48}
                      height={48}
                      className="absolute inset-0 w-12 h-12"
                      aria-hidden="true"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="relative text-lg font-semibold text-foreground-dark mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-foreground text-sm mb-4 flex-1">
                  {service.description}
                </p>
                {pills.length > 0 && (
                  <div className="relative flex flex-wrap gap-2 mt-auto">
                    {pills.map((pill) => (
                      <span
                        key={pill.label}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: pill.bg, color: pill.text }}
                      >
                        {pill.label}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      {max > 0 && (
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#ef436b]" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
