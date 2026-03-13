"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ValueCard } from "@/components/ui/ValueCard";
import { Handshake, FileText, Award, Settings, Users, Star } from "lucide-react";

const valueProps = [
  {
    title: "Long-Term Partnership",
    description: "Our goal is to be more than just a service provider; we aim to be long-term partners, fostering strong, sustainable relationships that grow as you do.",
    circle: "/images/circles/circle-black.svg",
    color: "#000000",
    icon: Handshake,
  },
  {
    title: "Transparent Quotations",
    description: "Clarity is key to trust. We provide detailed breakdowns in all our quotes, so you know exactly how every cent is invested in your project.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: FileText,
  },
  {
    title: "Shopify Experts",
    description: "Joining Flex means you gain an extended team of specialists in Shopify and Shopify Plus, dedicated to scaling your online presence.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: Award,
  },
  {
    title: "Flexible Support Options",
    description: "Our commitment is to your success, not to locking you into lengthy contracts. Work with us on your terms, for as long as you see value in our partnership.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: Settings,
  },
  {
    title: "In-House Team",
    description: "We take pride in our cohesive in-house team - no outsourcing. This ensures that everyone working on your project is fully invested in your success.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: Users,
  },
  {
    title: "5-Star Service",
    description: "We're not just proud of the work we do - we're thrilled when our clients recognise it, consistently rating us as a top-tier ecommerce agency.",
    circle: "/images/circles/circle-beige.svg",
    color: "#d4c4a8",
    icon: Star,
  },
];

export function ValueProps() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
        >
          An Ecommerce Agency You Can Trust
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-foreground max-w-3xl mx-auto"
        >
          At Flex, we ensure that every partnership starts on a solid foundation, offering you a clear glimpse of the tangible benefits we bring right from our first interaction.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueProps.map((prop, index) => (
          <ValueCard key={prop.title} {...prop} index={index} />
        ))}
      </div>
    </Section>
  );
}
