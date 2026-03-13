"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { partnerLogos } from "@/lib/constants";

const half = Math.ceil(partnerLogos.length / 2);
const col1logos = [...partnerLogos.slice(0, half), ...partnerLogos.slice(half)];
const col2logos = [...partnerLogos.slice(half), ...partnerLogos.slice(0, half)];
const col1 = [...col1logos, ...col1logos, ...col1logos];
const col2 = [...col2logos, ...col2logos, ...col2logos];

function LogoCard({ partner }: { partner: typeof partnerLogos[0] }) {
  return (
    <div className="bg-white rounded-xl mb-4 flex-shrink-0 w-44 h-24 flex items-center justify-center p-4">
      <div className="relative w-28 h-7">
        <Image src={partner.logo} alt={partner.alt} fill className="object-contain" />
      </div>
    </div>
  );
}

export function PartnerMarquee() {
  return (
    <>
      <style>{`
        @keyframes marquee-up {
          from { transform: translateY(0); }
          to { transform: translateY(-33.333%); }
        }
        @keyframes marquee-down {
          from { transform: translateY(-33.333%); }
          to { transform: translateY(0); }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        {/* Left: text */}
        <div className="py-16 md:py-24 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technology Partners
          </h2>
          <p className="text-lg text-gray-300 mb-3">
            We collaborate with some of the most respected names in ecommerce.
          </p>
          <p className="text-gray-400">
            Our partnerships are built on mutual trust and shared values, enabling us to deliver unparalleled solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button href="/partners" variant="solid-light">Our Partners</Button>
            <Button href="/quote" variant="outline-light">Get A Quote</Button>
          </div>
        </div>

        {/* Right: 2 angled scrolling columns */}
        <div
          className="relative overflow-hidden self-stretch"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          {/* Rotated columns */}
          <div
            className="absolute inset-0 flex gap-6 justify-center"
            style={{ transform: "rotate(-8deg) scale(1.15)", transformOrigin: "center center" }}
          >
            {/* Column 1 — scrolls up */}
            <div className="flex flex-col flex-shrink-0" style={{ animation: "marquee-up 18s linear infinite" }}>
              {col1.map((p, i) => <LogoCard key={i} partner={p} />)}
            </div>

            {/* Column 2 — scrolls down */}
            <div className="flex flex-col flex-shrink-0" style={{ animation: "marquee-down 22s linear infinite" }}>
              {col2.map((p, i) => <LogoCard key={i} partner={p} />)}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
