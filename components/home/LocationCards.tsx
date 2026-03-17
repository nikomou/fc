"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/constants";

const sideLeft = [
  { id: "edinburgh", name: "Edinburgh", href: "/shopify-agency-edinburgh" }, // outer
  { id: "bristol",   name: "Bristol",   href: "/shopify-agency-bristol" },   // inner
];

const sideRight = [
  { id: "london",     name: "London",     href: "/shopify-agency-london" },     // inner
  { id: "birmingham", name: "Birmingham", href: "/shopify-agency-birmingham" }, // outer
];

const mainLocations = [
  { id: "manchester", slug: "shopify-agency-manchester" },
  { id: "liverpool",  slug: "shopify-agency-liverpool" },
  { id: "leeds",      slug: "shopify-agency-leeds" },
];

export function LocationCards() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  // Position — outer outer first (no delay), inner most delayed; distance doubles outward
  const leftOuterX  = useTransform(scrollYProgress, [0,    1], [0, -400]); // no delay, fastest
  const leftInnerX  = useTransform(scrollYProgress, [0.15, 1], [0, -200]); // medium delay
  const mainLeftX   = useTransform(scrollYProgress, [0.3,  1], [0, -100]); // most delayed, slowest
  const mainRightX  = useTransform(scrollYProgress, [0.3,  1], [0,  100]);
  const rightInnerX = useTransform(scrollYProgress, [0.15, 1], [0,  200]);
  const rightOuterX = useTransform(scrollYProgress, [0,    1], [0,  400]);

  // Opacity — delayed further than movement
  const leftOuterOpacity  = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);
  const leftInnerOpacity  = useTransform(scrollYProgress, [0.4, 1],   [1, 0]);
  const mainOpacity       = useTransform(scrollYProgress, [0.5, 1],   [1, 0]);
  const rightInnerOpacity = useTransform(scrollYProgress, [0.4, 1],   [1, 0]);
  const rightOuterOpacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);

  // Blur — delayed further than movement
  const leftOuterFilter  = useTransform(scrollYProgress, [0.3, 0.7], [0, 6], { clamp: true });
  const leftInnerFilter  = useTransform(scrollYProgress, [0.4, 1],   [0, 6], { clamp: true });
  const mainFilterValue  = useTransform(scrollYProgress, [0.5, 1],   [0, 6], { clamp: true });
  const rightInnerFilter = useTransform(scrollYProgress, [0.4, 1],   [0, 6], { clamp: true });
  const rightOuterFilter = useTransform(scrollYProgress, [0.3, 0.7], [0, 6], { clamp: true });

  const toFilter = (v: number) => `blur(${v}px)`;

  const mainData = locations.filter(l => mainLocations.some(m => m.id === l.id));

  const sideCardClass = "group relative w-52 rounded-2xl overflow-hidden flex-shrink-0 self-stretch";

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <div className="flex items-stretch justify-center gap-4">

        {/* Left cards — outer (Edinburgh) leads, inner (Bristol) lags */}
        <div className="hidden lg:flex gap-4 flex-shrink-0 self-stretch">
          <motion.a
            href={sideLeft[0].href}
            style={{ x: leftOuterX, opacity: leftOuterOpacity, filter: useTransform(leftOuterFilter, toFilter) }}
            className={sideCardClass}
          >
            <Image src={`/images/cities/${sideLeft[0].id}.jpg`} alt={sideLeft[0].name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white font-semibold text-sm">{sideLeft[0].name}</p>
            </div>
          </motion.a>
          <motion.a
            href={sideLeft[1].href}
            style={{ x: leftInnerX, opacity: leftInnerOpacity, filter: useTransform(leftInnerFilter, toFilter) }}
            className={sideCardClass}
          >
            <Image src={`/images/cities/${sideLeft[1].id}.jpg`} alt={sideLeft[1].name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white font-semibold text-sm">{sideLeft[1].name}</p>
            </div>
          </motion.a>
        </div>

        {/* Main office cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full flex-shrink-0">
          {mainData.map((location, i) => (
            <motion.a
              key={location.id}
              href={`/${location.slug}`}
              style={{ x: i === 0 ? mainLeftX : mainRightX, opacity: mainOpacity, filter: useTransform(mainFilterValue, toFilter) }}
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 block aspect-[4/3] bg-gray-100"
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
            </motion.a>
          ))}
        </div>

        {/* Right cards — inner (London) lags, outer (Leeds) leads */}
        <div className="hidden lg:flex gap-4 flex-shrink-0 self-stretch">
          <motion.a
            href={sideRight[0].href}
            style={{ x: rightInnerX, opacity: rightInnerOpacity, filter: useTransform(rightInnerFilter, toFilter) }}
            className={sideCardClass}
          >
            <Image src={`/images/cities/${sideRight[0].id}.jpg`} alt={sideRight[0].name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white font-semibold text-sm">{sideRight[0].name}</p>
            </div>
          </motion.a>
          <motion.a
            href={sideRight[1].href}
            style={{ x: rightOuterX, opacity: rightOuterOpacity, filter: useTransform(rightOuterFilter, toFilter) }}
            className={sideCardClass}
          >
            <Image src={`/images/cities/${sideRight[1].id}.jpg`} alt={sideRight[1].name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white font-semibold text-sm">{sideRight[1].name}</p>
            </div>
          </motion.a>
        </div>

      </div>
    </div>
  );
}
