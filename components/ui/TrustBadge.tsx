"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const clientAvatars = [
  { src: "/images/clients/avatars/client-1.png", alt: "Happy client" },
  { src: "/images/clients/avatars/client-2.png", alt: "Happy client" },
  { src: "/images/clients/avatars/client-3.png", alt: "Happy client" },
  { src: "/images/clients/avatars/client-4.png", alt: "Happy client" },
  { src: "/images/clients/avatars/client-5.png", alt: "Happy client" },
];

interface TrustBadgeProps {
  dark?: boolean;
  align?: "left" | "center";
  showRating?: boolean;
}

export function TrustBadge({ dark = false, align = "center", showRating = true }: TrustBadgeProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-8", align === "center" ? "justify-center" : "justify-start")}>
      {/* Happy Clients */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {clientAvatars.map((avatar, i) => (
            <div
              key={i}
              style={{ zIndex: i + 1 }}
              className={cn(
                "w-10 h-10 rounded-full border-2 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1.5",
                dark ? "border-gray-800" : "border-white"
              )}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <span className={cn("text-sm", dark ? "text-gray-300" : "text-foreground")}>
          <strong className={dark ? "text-white" : "text-foreground-dark"}>50+</strong> happy clients
        </span>
      </div>

      {/* Rating */}
      {showRating && (
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-5 h-5 transition-transform duration-300 ease-out hover:-translate-y-1.5"
                fill="rgb(255, 206, 93)"
                strokeWidth={0}
              />
            ))}
          </div>
          <span className={cn("text-sm", dark ? "text-gray-300" : "text-foreground")}>
            <strong className={dark ? "text-white" : "text-foreground-dark"}>5.0</strong> average rating
          </span>
        </div>
      )}
    </div>
  );
}
