"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  index: number;
}

export function PricingCard({
  name,
  price,
  priceNote,
  description,
  features,
  popular = false,
  cta,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl p-8 border",
        popular
          ? "border-black bg-white shadow-xl scale-105"
          : "border-gray-200 bg-white shadow-sm"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-black text-white text-sm font-medium px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-foreground-dark mb-2">
          {name}
        </h3>
        <div className="mb-4">
          <span className="text-sm text-foreground">From </span>
          <span className="text-4xl font-bold text-foreground-dark">{price}</span>
          {priceNote && (
            <span className="text-sm text-foreground ml-1">{priceNote}</span>
          )}
        </div>
        <p className="text-foreground">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/quote"
        variant={popular ? "primary" : "outline"}
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
