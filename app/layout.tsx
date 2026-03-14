import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, locations } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Shopify Plus Agency Manchester & Liverpool | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    `Shopify Plus agency in Manchester & Liverpool. Custom ecommerce design, development & ongoing support for ambitious brands. Free quote today.`,
  keywords: [
    "Shopify Plus Agency",
    ...locations.map(l => `Shopify Agency ${l.name}`),
    "Ecommerce Development",
    "Shopify Plus Development",
    "Custom Shopify Themes",
    "Shopify Migration",
    "Ecommerce Agency UK",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Shopify Plus Agency Manchester & Liverpool | ${siteConfig.name}`,
    description:
      `Shopify Plus agency in Manchester & Liverpool. Custom ecommerce design, development & ongoing support for ambitious brands. Free quote today.`,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Shopify Plus Agency Manchester & Liverpool`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Shopify Plus Agency Manchester & Liverpool | ${siteConfig.name}`,
    description:
      `Shopify Plus agency in Manchester & Liverpool. Custom ecommerce design, development & ongoing support for ambitious brands. Free quote today.`,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Generate LocalBusiness schema for each location dynamically
const locationSchemas = locations.map((location) => ({
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#${location.id}`,
  name: `${siteConfig.name} ${location.name}`,
  image: `${siteConfig.url}/images/flex-logo.svg`,
  url: `${siteConfig.url}/${location.slug}`,
  telephone: `+44-${location.phone.replace(/\s/g, "-").replace(/^0/, "")}`,
  email: siteConfig.email,
  priceRange: "£££",
  address: {
    "@type": "PostalAddress",
    streetAddress: location.streetAddress,
    addressLocality: location.addressLocality,
    postalCode: location.postalCode,
    addressCountry: location.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.geo.latitude,
    longitude: location.geo.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      description: "Shopify Plus agency based in Manchester and Liverpool. We design, build and grow Shopify stores for ambitious UK brands.",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/flex-logo.svg`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+44-${siteConfig.phone.replace(/\s/g, "-").replace(/^0/, "")}`,
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "en-GB",
      },
    },
    ...locationSchemas,
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "Service",
      serviceType: "Shopify Plus Development",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Shopify Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Shopify Plus Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Shopify Theme Design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce SEO",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.className} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" strategy="afterInteractive" />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" />
        </noscript>
      </body>
    </html>
  );
}
