"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { clientLogos } from "@/lib/constants";

export function ClientLogos() {
  return (
    <Section className="py-16 md:py-20 bg-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-foreground-dark mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Trusted By Leading Brands
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-base text-foreground max-w-2xl mx-auto"
        >
          Discover the power and flexibility of Shopify with Flex Commerce. Join the ranks of top global brands who trust Shopify to drive their online sales. Whether you&apos;re starting up or scaling up, see how Shopify&apos;s robust platform and our expert customisation can elevate your e-commerce business to new heights.
        </motion.p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {/* First set */}
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex-shrink-0 mx-8 opacity-60"
            >
              <Image
                src={client.logo}
                alt={client.alt}
                width={100}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((client) => (
            <div
              key={`${client.name}-dup`}
              className="flex-shrink-0 mx-8 opacity-60"
            >
              <Image
                src={client.logo}
                alt={client.alt}
                width={100}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
