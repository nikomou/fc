import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/shopify-services",
        permanent: true,
      },
      {
        source: "/ecommerce-services",
        destination: "/shopify-services",
        permanent: true,
      },
      {
        source: "/shopify-speed-optimization",
        destination: "/shopify-speed-optimisation",
        permanent: true,
      },
      {
        source: "/resources/:slug*-checklist",
        destination: "/checklists/:slug*-checklist",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
