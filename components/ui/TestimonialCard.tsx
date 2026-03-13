"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initial?: string;
  light?: boolean;
}

export function TestimonialCard({
  quote,
  author,
  role,
  initial,
  light,
}: TestimonialCardProps) {
  const authorInitial = initial || author.charAt(0);
  const avatarColors = ["#ef436b", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"];
  const avatarBg = avatarColors[author.charCodeAt(0) % avatarColors.length];

  return (
    <section className={`${light ? "bg-white text-[#1a1a1a]" : "bg-[#1a1a1a] text-white"} py-20 md:py-28 relative overflow-hidden`}>
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ef436b]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote icon */}
          <Quote className="w-12 h-12 text-[#ef436b] mx-auto mb-8 fill-[#ef436b]" strokeWidth={0} />

          <blockquote className={`text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-10 ${light ? "text-[#1a1a1a]" : "text-white"}`}>
            {quote}
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            {/* Avatar circle */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white" style={{ backgroundColor: avatarBg }}>
              {authorInitial}
            </div>
            <div className="text-left">
              <p className={`font-semibold ${light ? "text-[#1a1a1a]" : "text-white"}`}>{author}</p>
              <p className="text-gray-400 text-sm">{role}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
