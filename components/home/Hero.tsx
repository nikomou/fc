"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { RotatingCTA } from "@/components/ui/RotatingCTA";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <AnimatedBackground theme="blue" />

      {/* Rotating CTA — bottom-right accent */}
      <motion.div
        className="absolute bottom-8 right-8 hidden lg:block"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
      >
        <RotatingCTA variant="light" size={140} label="GET A QUOTE" href="/quote" />
      </motion.div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Image
              src="/images/shopify-credentials.png"
              alt="Official Shopify Partners and Shopify Plus Agency Badge"
              width={280}
              height={60}
              className="h-auto"
            />
          </motion.div>

          {/* SEO H1 - visually hidden */}
          <h1 className="sr-only">
            Shopify Plus Agency Manchester & Liverpool - Custom Ecommerce Development
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            role="heading"
            aria-level={2}
          >
            The Shopify agency
            <br />
            ecommerce brands trust
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We design, build and grow Shopify stores for ambitious brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button href="/quote" size="lg" variant="cta">
              Get A Quote
            </Button>
            <Button href="/work" variant="outline-light" size="lg" icon={false}>
              Our Work
            </Button>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TrustBadge dark />
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}
