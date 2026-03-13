"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const publications = [
  "TechCrunch",
  "Forbes",
  "The Drum",
  "Ecommerce Age",
  "Retail Week",
  "Marketing Week",
];

export function FeaturedIn() {
  return (
    <Section className="py-12 md:py-16">
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
          As Featured In
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {publications.map((pub, index) => (
          <motion.div
            key={pub}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-serif italic text-gray-300 hover:text-gray-500 transition-colors"
          >
            {pub}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
