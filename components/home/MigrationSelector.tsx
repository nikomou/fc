"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const platforms = [
  { name: "WooCommerce", logo: "/images/platforms/woo-svg-36x36-1.svg",         slug: "woocommerce", color: "#a78bfa" },
  { name: "Magento",     logo: "/images/platforms/magento-svg-36x36-1.svg",      slug: "magento",     color: "#fb923c" },
  { name: "BigCommerce", logo: "/images/platforms/big-svg-36x36-1.svg",          slug: "bigcommerce", color: "#94a3b8" },
  { name: "Squarespace", logo: "/images/platforms/squarespace.svg",              slug: "squarespace", color: "#e2e8f0" },
  { name: "Webflow",     logo: "/images/platforms/webflow.svg",                  slug: "webflow",     color: "#818cf8" },
  { name: "Salesforce",  logo: "/images/platforms/salesforcecommercecloud.svg",  slug: "salesforce",  color: "#38bdf8" },
];

const W = 720;
const H = 260;

// Platform circles
const C_R       = 22;   // radius
const ICON_SIZE = 20;
const COL1_CX   = C_R + 10;                        // 32
const COL2_CX   = COL1_CX + C_R * 2 + 16;         // 92

const MARGIN  = 28;
const SPACING = (H - 2 * MARGIN) / (platforms.length - 1); // ~40.8

const itemCY       = (i: number) => MARGIN + i * SPACING;
const getCircleCX  = (i: number) => i % 2 === 0 ? COL1_CX : COL2_CX;
const getPathStartX = (i: number) => getCircleCX(i) + C_R;

// Shopify destination
const SHOPIFY_CX   = W - 80;
const SHOPIFY_CY   = H / 2;
const SHOPIFY_SIZE = 90;

const getPath = (i: number) =>
  `M ${getPathStartX(i)} ${itemCY(i)} C ${W * 0.44} ${itemCY(i)} ${W * 0.68} ${SHOPIFY_CY} ${SHOPIFY_CX - SHOPIFY_SIZE / 2} ${SHOPIFY_CY}`;

export function MigrationSelector() {
  const [selected, setSelected] = useState(platforms[0]);

  return (
    <div className="relative">

      {/* ── Heading ── */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Shopify Migrations</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Seamlessly migrate your store to Shopify from any platform. Zero downtime, full SEO preservation.
        </p>
      </div>

      {/* ── Flow diagram ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          overflow="visible"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}
        >
          <defs>
            {platforms.map((p, i) => <path key={p.slug} id={`mp-${p.slug}`} d={getPath(i)} />)}
            <filter id="glow-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Platform paths + dots */}
          {platforms.map((p, i) => {
            const isSelected = p.slug === selected.slug;
            const dur  = isSelected ? 1.6 : 3.2;
            const dots = isSelected ? 4 : 2;
            return (
              <g key={`path-${p.slug}`}>
                <use href={`#mp-${p.slug}`} fill="none" stroke={p.color}
                  strokeWidth={isSelected ? 2.5 : 1} opacity={isSelected ? 0.7 : 0.18} />
                {Array.from({ length: dots }).map((_, j) => (
                  <circle key={j} r={isSelected ? 5 : 3} fill={p.color} opacity={isSelected ? 1 : 0.5}>
                    <animateMotion dur={`${dur}s`} begin={`${(j * dur) / dots}s`} repeatCount="indefinite">
                      <mpath href={`#mp-${p.slug}`} />
                    </animateMotion>
                  </circle>
                ))}
              </g>
            );
          })}

          {/* Platform circles */}
          {platforms.map((p, i) => {
            const isSelected = p.slug === selected.slug;
            const cx = getCircleCX(i);
            const cy = itemCY(i);
            return (
              <g key={`node-${p.slug}`} onClick={() => setSelected(p)} style={{ cursor: "pointer" }}>
                {/* Selected accent ring */}
                {isSelected && (
                  <circle cx={cx} cy={cy} r={C_R + 4}
                    fill="none" stroke={p.color} strokeWidth={1.5} opacity={0.5} />
                )}
                {/* Dark circle */}
                <circle cx={cx} cy={cy} r={C_R}
                  fill={isSelected ? "#2e2e2e" : "#232323"}
                  stroke={isSelected ? "#555" : "#333"} strokeWidth={1}
                  filter={isSelected ? "url(#glow-shadow)" : undefined}
                />
                {/* White logo badge circle */}
                <circle cx={cx} cy={cy} r={C_R - 5} fill="white" opacity={0.93} />
                {/* Logo */}
                <image href={p.logo}
                  x={cx - ICON_SIZE / 2} y={cy - ICON_SIZE / 2}
                  width={ICON_SIZE} height={ICON_SIZE} />
              </g>
            );
          })}

          {/* Shopify pulse rings — overflow="visible" on SVG prevents clipping */}
          {[0, 0.8, 1.6].map((delay) => (
            <circle key={delay} cx={SHOPIFY_CX} cy={SHOPIFY_CY} fill="none" stroke="#96bf48" strokeWidth={1.5}>
              <animate attributeName="r" from={SHOPIFY_SIZE / 2} to={SHOPIFY_SIZE / 2 + 36} dur="2.4s" begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from={0.5} to={0} dur="2.4s" begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {/* Static glow ring */}
          <circle cx={SHOPIFY_CX} cy={SHOPIFY_CY} r={SHOPIFY_SIZE / 2 + 5}
            fill="none" stroke="#96bf48" strokeWidth={2.5} opacity={0.4} />
          <circle cx={SHOPIFY_CX} cy={SHOPIFY_CY} r={SHOPIFY_SIZE / 2}
            fill="#2a2a2a" stroke="#3a3a3a" strokeWidth={1} />
          <image href="/images/platforms/shopify.svg"
            x={SHOPIFY_CX - 26} y={SHOPIFY_CY - 26} width={52} height={52} />
        </svg>
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 text-center mt-8">
        <p className="text-sm text-gray-400 mb-5">
          Migrating from{" "}
          <span className="font-semibold text-white">{selected.name}</span>{" "}
          to Shopify
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={`/${selected.slug}-to-shopify-migration`} variant="cta" size="lg">
            Migration Details
          </Button>
          <Button href="/quote" variant="outline-light" size="lg">
            Get Migration Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
