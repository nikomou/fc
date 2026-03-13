"use client";

import { motion } from "framer-motion";
import { PricingCard } from "./PricingCard";
import { pricingTiers } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export function PricingGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {pricingTiers.map((tier, index) => (
        <PricingCard key={tier.name} {...tier} index={index} />
      ))}
    </motion.div>
  );
}
