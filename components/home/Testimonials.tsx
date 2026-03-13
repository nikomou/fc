"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section background="alt">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-6 h-6"
                fill="rgb(255, 206, 93)"
                strokeWidth={0}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-foreground-dark mb-8 leading-relaxed">
            &ldquo;Partnering with Flex was a game-changer for our business. Their expert team and personalised approach made all the difference in our digital success.&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-lg font-semibold text-gray-600">
              G
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground-dark">Gregory</p>
              <p className="text-sm text-foreground">Managing Director</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
