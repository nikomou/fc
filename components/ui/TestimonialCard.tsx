"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initial?: string;
  light?: boolean;
}

function AnimatedWord({
  word,
  progress,
  start,
  end,
  light,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  light?: boolean;
}) {
  const baseColor = light ? "#d1d5db" : "#4b5563";
  const color = useTransform(progress, [start, end], [baseColor, "#ef436b"]);
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export function TestimonialCard({
  quote,
  author,
  role,
  initial,
  light,
}: TestimonialCardProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });

  const authorInitial = initial || author.charAt(0);
  const avatarColors = ["#ef436b", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"];
  const avatarBg = avatarColors[author.charCodeAt(0) % avatarColors.length];
  const words = quote.split(" ");

  return (
    <section
      ref={ref}
      className={`${light ? "bg-white text-[#1a1a1a]" : "bg-[#1a1a1a] text-white"} py-20 md:py-28 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ef436b]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#ef436b] mx-auto mb-8 fill-[#ef436b]" strokeWidth={0} />

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-10 italic" style={{ fontFamily: "var(--font-playfair)" }}>
            {words.map((word, i) => (
              <AnimatedWord
                key={i}
                word={word}
                progress={scrollYProgress}
                start={i / words.length}
                end={Math.min((i + 1) / words.length, 1)}
                light={light}
              />
            ))}
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white"
              style={{ backgroundColor: avatarBg }}
            >
              {authorInitial}
            </div>
            <div className="text-left">
              <p className={`font-semibold ${light ? "text-[#1a1a1a]" : "text-white"}`}>{author}</p>
              <p className="text-gray-400 text-sm">{role}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
