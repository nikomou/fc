"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  LucideIcon,
  Handshake,
  FileText,
  Award,
  Settings,
  Users,
  Star,
  Shield,
  TrendingUp,
  Zap,
  MapPin,
  Rocket,
  Code,
  Globe,
  MessageCircle,
  Video,
  Monitor,
  Building2,
  Cpu,
  Wifi,
} from "lucide-react";

// Icon mapping for string-based icon names
const iconMap: Record<string, LucideIcon> = {
  Handshake,
  FileText,
  Award,
  Settings,
  Users,
  Star,
  Shield,
  TrendingUp,
  Zap,
  MapPin,
  Rocket,
  Code,
  Globe,
  MessageCircle,
  Video,
  Monitor,
  Building2,
  Cpu,
  Wifi,
};

export interface ValueCardProps {
  title: string;
  description: string;
  circle: string;
  color: string;
  icon: LucideIcon | string;
  index?: number;
}

export function ValueCard({
  title,
  description,
  circle,
  color,
  icon,
  index = 0,
}: ValueCardProps) {
  // Resolve icon - either use directly if it's a component, or look up from map
  const Icon = typeof icon === "string" ? iconMap[icon] : icon;

  if (!Icon) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
    >
      {/* Circle with icon overlay */}
      <div className="relative w-14 h-14 mb-4">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          className="absolute inset-0"
        >
          <Image
            src={circle}
            alt=""
            width={56}
            height={56}
            className="w-14 h-14"
          />
        </motion.div>
        {/* Icon centered on circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="w-6 h-6"
            style={{ color: color === "#d4c4a8" ? "#1a1a1a" : "#ffffff" }}
            strokeWidth={1.5}
          />
        </div>
        {/* Subtle glow */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-20"
          style={{ backgroundColor: color }}
        />
      </div>

      <h3 className="text-lg font-semibold text-foreground-dark mb-2">
        {title}
      </h3>
      <p className="text-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
