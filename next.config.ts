import type { NextConfig } from "next";

const isCF = process.env.BUILD_TARGET === "cf";

const nextConfig: NextConfig = {
  ...(isCF && { output: "export", images: { unoptimized: true } }),
  ...(!isCF && {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  }),
  ...(!isCF && {
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
  }),
};

export default nextConfig;
