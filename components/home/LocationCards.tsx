"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/constants";

const sideLeft = [
  { id: "edinburgh", name: "Edinburgh", href: "/shopify-agency-edinburgh" },
  { id: "bristol",   name: "Bristol",   href: "/shopify-agency-bristol" },
];

const sideRight = [
  { id: "london", name: "London", href: "/shopify-agency-london" },
  { id: "leeds",  name: "Leeds",  href: "/shopify-agency-leeds" },
];

const mainLocations = [
  { id: "manchester", slug: "shopify-agency-manchester" },
  { id: "liverpool",  slug: "shopify-agency-liverpool" },
];

export function LocationCards() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX  = useTransform(scrollYProgress, [0, 1], [60, -220]);
  const rightX = useTransform(scrollYProgress, [0, 1], [-60, 220]);

  const mainData = locations.filter(l =>
    mainLocations.some(m => m.id === l.id)
  );

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="flex items-stretch justify-center gap-4 md:gap-6">

        {/* Left blurred cards */}
        <motion.div
          style={{ x: leftX }}
          className="hidden lg:flex gap-4 flex-shrink-0 self-stretch"
        >
          {sideLeft.map((loc) => (
            <a
              key={loc.id}
              href={loc.href}
              className="relative w-44 rounded-2xl overflow-hidden flex-shrink-0 opacity-50 blur-[2px] hover:opacity-60 transition-opacity"
            >
              <Image
                src={`/images/cities/${loc.id}.jpg`}
                alt={loc.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-semibold text-sm">{loc.name}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Main office cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full flex-shrink-0">
          {mainData.map((location) => (
            <a
              key={location.id}
              href={`/${location.slug}`}
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 block aspect-[4/3] bg-gray-100"
            >
              <Image
                src={`/images/cities/${location.id}.jpg`}
                alt={location.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs text-white/60 uppercase tracking-widest mb-1.5 font-medium">Our Office</p>
                <h3 className="text-2xl font-bold text-white mb-1">{location.name}</h3>
                <div className="flex items-start gap-1.5 text-sm text-white/75">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{location.streetAddress}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right blurred cards */}
        <motion.div
          style={{ x: rightX }}
          className="hidden lg:flex gap-4 flex-shrink-0 self-stretch"
        >
          {sideRight.map((loc) => (
            <a
              key={loc.id}
              href={loc.href}
              className="relative w-44 rounded-2xl overflow-hidden flex-shrink-0 opacity-50 blur-[2px] hover:opacity-60 transition-opacity"
            >
              <Image
                src={`/images/cities/${loc.id}.jpg`}
                alt={loc.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-semibold text-sm">{loc.name}</p>
              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
