"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Crown, Check, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

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

const tierConfig: Record<number, {
  wave: string;
  circle: string;
  bg: string;
  icon: LucideIcon;
  pillBg: string;
  pillText: string;
  checkColor: string;
  idealFor: string;
}> = {
  0: {
    wave:       "/images/wave-yellow-corner.svg",
    circle:     "/images/circles/circle-yellow.svg",
    bg:         "#fffdf5",
    icon:       Zap,
    pillBg:     "#fef3c7",
    pillText:   "#92400e",
    checkColor: "#f59e0b",
    idealFor:   "Just starting out",
  },
  1: {
    wave:       "/images/wave-pink-corner.svg",
    circle:     "/images/circles/circle-pink.svg",
    bg:         "#fff5f7",
    icon:       TrendingUp,
    pillBg:     "#fce7ef",
    pillText:   "#9f1239",
    checkColor: "#ef436b",
    idealFor:   "Stores doing ~£250k/year",
  },
  2: {
    wave:       "/images/wave-purple-corner.svg",
    circle:     "/images/circles/circle-purple.svg",
    bg:         "#f8f5ff",
    icon:       Crown,
    pillBg:     "#ede9fe",
    pillText:   "#5b21b6",
    checkColor: "#8b5cf6",
    idealFor:   "Brands doing £1m+/year",
  },
};

export const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

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
  const cfg = tierConfig[index] ?? tierConfig[0];
  const Icon = cfg.icon;

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex flex-col ${popular ? "p-8 pt-20 pb-10" : "p-6 pt-12"}`}
      style={{ backgroundColor: cfg.bg }}
    >
      {/* Wave — clipped to card bounds */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <Image
          src={cfg.wave}
          alt=""
          width={160}
          height={160}
          className="absolute top-0 right-0 w-32 h-32 object-contain object-right-top opacity-60 transition-all duration-500 ease-out group-hover:opacity-90 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2"
          aria-hidden="true"
        />
      </div>


      {/* Icon circle — halfway above the card top edge */}
      <div className="absolute -top-[30px] left-6 w-[60px] h-[60px]">
        <Image
          src={cfg.circle}
          alt=""
          width={60}
          height={60}
          className="absolute inset-0 w-[60px] h-[60px]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Tier name */}
      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: cfg.checkColor }}>
        {name}
      </p>

      {/* Price */}
      <div className="mb-3 flex items-end gap-1.5">
        <span className="text-sm text-foreground mb-1.5">From</span>
        <span className="text-4xl font-extrabold tracking-tight text-foreground-dark">{price}</span>
        {priceNote && <span className="text-sm text-foreground mb-1.5">{priceNote}</span>}
      </div>

      {/* Ideal for */}
      <span
        className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 w-fit"
        style={{ backgroundColor: cfg.pillBg, color: cfg.pillText }}
      >
        {cfg.idealFor}
      </span>

      {/* Description */}
      <p className="text-sm text-foreground mb-5 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {index === 1 && (
          <li className="flex items-center gap-2.5 pb-1">
            <span className="text-xs font-semibold italic" style={{ color: cfg.checkColor }}>
              Everything in Flex Start, plus:
            </span>
          </li>
        )}
        {index === 2 && (
          <li className="flex items-center gap-2.5 pb-1">
            <span className="text-xs font-semibold italic" style={{ color: cfg.checkColor }}>
              Everything in Flex Grow, plus:
            </span>
          </li>
        )}
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: cfg.pillBg }}
            >
              <Check className="w-2.5 h-2.5" style={{ color: cfg.checkColor }} />
            </span>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button href="/quote" variant="outline" className="w-full mt-auto">
        {cta}
      </Button>
    </motion.div>
  );
}
