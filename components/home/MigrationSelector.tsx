"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const platforms = [
  { name: "WooCommerce", logo: "/images/platforms/woo-svg-36x36-1.svg", slug: "woocommerce" },
  { name: "Magento", logo: "/images/platforms/magento-svg-36x36-1.svg", slug: "magento" },
  { name: "BigCommerce", logo: "/images/platforms/big-svg-36x36-1.svg", slug: "bigcommerce" },
  { name: "Squarespace", logo: "/images/platforms/squarespace.svg", slug: "squarespace" },
  { name: "Webflow", logo: "/images/platforms/webflow.svg", slug: "webflow" },
  { name: "Salesforce", logo: "/images/platforms/salesforcecommercecloud.svg", slug: "salesforce" },
];

export function MigrationSelector() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
          Shopify Migrations
        </h2>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          Seamlessly migrate your store to Shopify from any platform. Zero downtime, full SEO preservation.
        </p>
      </div>

      {/* Selector */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
        <span className="text-foreground-dark text-xl font-medium">from</span>

        {/* Platform Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 bg-white rounded-full px-6 py-4 min-w-[240px] border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src={selectedPlatform.logo}
                alt={selectedPlatform.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-foreground-dark flex-1 text-left">
              {selectedPlatform.name}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-10">
              {platforms.map((platform) => (
                <button
                  key={platform.slug}
                  onClick={() => {
                    setSelectedPlatform(platform);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-5 py-3 hover:bg-gray-50 transition-colors ${
                    selectedPlatform.slug === platform.slug ? "bg-gray-50" : ""
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium text-foreground-dark">
                    {platform.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <span className="text-foreground-dark text-xl font-medium">to</span>

        {/* Shopify (Static) */}
        <div className="flex items-center gap-3 bg-white rounded-full px-6 py-4 min-w-[240px] border border-gray-200 shadow-sm">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/images/platforms/shopify.svg"
              alt="Shopify"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-medium text-foreground-dark flex-1">
            Shopify
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href={`/${selectedPlatform.slug}-to-shopify-migration`} variant="cta" size="lg">
          Migration Details
        </Button>
        <Button href="/quote" variant="primary" size="lg">
          Get Migration Quote
        </Button>
      </div>
    </div>
  );
}
