"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Search, Palette, Code, Gauge, Headphones, LucideIcon } from "lucide-react";
import { services } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { Zap, Search, Palette, Code, Gauge, Headphones };

const serviceWaves: Record<string, string> = {
  "Shopify Plus":      "/images/wave-yellow-corner.svg",
  "Theme Development": "/images/wave-pink-corner.svg",
  "App Development":   "/images/wave-purple-corner.svg",
  "Shopify SEO":       "/images/wave-green-corner.svg",
  "Speed Optimisation":"/images/wave-black-corner.svg",
  "Ongoing Support":   "/images/wave-blue-corner.svg",
};

const serviceCardBg: Record<string, string> = {
  "Shopify Plus":      "#fffdf5",
  "Theme Development": "#fff5f7",
  "App Development":   "#f8f5ff",
  "Shopify SEO":       "#f3fdf6",
  "Speed Optimisation":"#f8f8f8",
  "Ongoing Support":   "#f3f8ff",
};

const serviceCircles: Record<string, string> = {
  "Shopify Plus":      "/images/circles/circle-yellow.svg",
  "Theme Development": "/images/circles/circle-pink.svg",
  "App Development":   "/images/circles/circle-purple.svg",
  "Shopify SEO":       "/images/circles/circle-green.svg",
  "Speed Optimisation":"/images/circles/circle-black.svg",
  "Ongoing Support":   "/images/circles/circle-blue.svg",
};

const servicePills: Record<string, { label: string; bg: string; text: string }[]> = {
  "Shopify Plus":      [
    { label: "Custom Checkout", bg: "#fef3c7", text: "#92400e" },
    { label: "B2B & Wholesale", bg: "#fef3c7", text: "#92400e" },
    { label: "Flow Automation",  bg: "#fef3c7", text: "#92400e" },
  ],
  "Theme Development": [
    { label: "Custom Design",   bg: "#fce7ef", text: "#9f1239" },
    { label: "Mobile-First",    bg: "#fce7ef", text: "#9f1239" },
    { label: "Liquid",          bg: "#fce7ef", text: "#9f1239" },
  ],
  "App Development":   [
    { label: "Private Apps",    bg: "#ede9fe", text: "#5b21b6" },
    { label: "Integrations",    bg: "#ede9fe", text: "#5b21b6" },
    { label: "APIs",            bg: "#ede9fe", text: "#5b21b6" },
  ],
  "Shopify SEO":       [
    { label: "Technical SEO",   bg: "#d1fae5", text: "#065f46" },
    { label: "Schema Markup",   bg: "#d1fae5", text: "#065f46" },
    { label: "Content",         bg: "#d1fae5", text: "#065f46" },
  ],
  "Speed Optimisation":[
    { label: "Core Web Vitals", bg: "#f1f5f9", text: "#1e293b" },
    { label: "Lighthouse",      bg: "#f1f5f9", text: "#1e293b" },
    { label: "Lazy Loading",    bg: "#f1f5f9", text: "#1e293b" },
  ],
  "Ongoing Support":   [
    { label: "Bug Fixes",       bg: "#e0f2fe", text: "#075985" },
    { label: "Updates",         bg: "#e0f2fe", text: "#075985" },
    { label: "Monitoring",      bg: "#e0f2fe", text: "#075985" },
  ],
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function ServicesGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {services.map((service) => {
        const Icon = iconMap[service.icon] || Zap;
        const wave = serviceWaves[service.title];
        const circle = serviceCircles[service.title];
        const pills = servicePills[service.title] ?? [];
        const cardBg = serviceCardBg[service.title] ?? "#ffffff";
        return (
          <motion.a
            key={service.title}
            href={service.href}
            variants={cardVariant}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col min-h-[280px]"
            style={{ backgroundColor: cardBg }}
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
            <p className="relative text-foreground text-sm mb-4 flex-1">{service.description}</p>
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
          </motion.a>
        );
      })}
    </motion.div>
  );
}
