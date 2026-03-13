"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="bg-[#ef436b] py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to grow your Shopify store?
            </h2>
            <p className="text-white/90">
              Let&apos;s discuss your project and make it happen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/quote" size="lg" variant="solid-light">
              Get Your Free Quote
            </Button>
            <Button href="/contact" size="lg" variant="outline-light" icon={false}>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
