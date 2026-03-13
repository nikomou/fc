"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface RotatingCTAProps {
  href?: string;
  /** Text repeated around the circle (keep it short — repeated twice with bullets) */
  label?: string;
  /** Size of the circle in px */
  size?: number;
  /** Dark or light variant */
  variant?: "dark" | "light";
  className?: string;
}

export function RotatingCTA({
  href = "/quote",
  label = "GET A QUOTE",
  size = 140,
  variant = "dark",
  className = "",
}: RotatingCTAProps) {
  const r = size / 2 - 12;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;

  // Build the text string: "LABEL • LABEL • " spaced to fill the circle
  const text = `${label} • ${label} • ${label} • `;

  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      aria-label={label}
      className={`group relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Rotating ring with text */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="absolute inset-0 animate-spin-slow"
        aria-hidden="true"
      >
        <defs>
          <path
            id="rotating-cta-circle"
            d={`M ${cx},${cy - r} A ${r},${r} 0 1,1 ${cx - 0.001},${cy - r}`}
          />
        </defs>
        <text
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="2"
          fill={isDark ? "#1a1a1a" : "#ffffff"}
          fontFamily="inherit"
        >
          <textPath href="#rotating-cta-circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Centre circle */}
      <div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
          isDark
            ? "bg-[#1a1a1a] group-hover:bg-[#ef436b]"
            : "bg-white group-hover:bg-[#ef436b]"
        }`}
      >
        <ArrowUpRight
          className={`w-6 h-6 transition-colors duration-300 ${
            isDark
              ? "text-white"
              : "text-[#1a1a1a] group-hover:text-white"
          }`}
          strokeWidth={2}
        />
      </div>
    </Link>
  );
}
