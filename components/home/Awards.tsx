"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Shield, Star, Trophy } from "lucide-react";
import { Section } from "@/components/ui/Section";

const awards = [
  {
    icon: Shield,
    title: "Shopify Plus Partner",
    description: "Certified Shopify Plus Partner Agency",
    year: "2024",
  },
  {
    icon: Trophy,
    title: "Best Ecommerce Agency",
    description: "Northern Digital Awards",
    year: "2023",
  },
  {
    icon: Star,
    title: "Top Rated Agency",
    description: "Clutch.co - 5 Star Rating",
    year: "2024",
  },
  {
    icon: Award,
    title: "Excellence in UX",
    description: "UK Digital Experience Awards",
    year: "2023",
  },
];

export function Awards() {
  return (
    <Section background="alt">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
          Awards & Recognition
        </h2>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          Our work has been recognised by industry leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((award, index) => {
          const Icon = award.icon;
          return (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-medium text-gray-500 mb-2">
                {award.year}
              </div>
              <h3 className="text-lg font-semibold text-foreground-dark mb-1">
                {award.title}
              </h3>
              <p className="text-sm text-foreground">{award.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Shopify Partner Badge */}
      <div className="mt-12 flex justify-center">
        <div className="bg-black rounded-2xl px-8 py-6">
          <Image
            src="/images/partners/shopify-credentials.png"
            alt="Shopify Partners & Shopify Plus"
            width={300}
            height={80}
            className="h-16 w-auto"
          />
        </div>
      </div>
    </Section>
  );
}
