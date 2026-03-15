import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Search, Zap, Palette, Code, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Shopify Plus", href: "/shopify-plus", icon: Zap },
  { name: "Theme Development", href: "/shopify-theme-development", icon: Palette },
  { name: "App Development", href: "/shopify-app-development", icon: Code },
  { name: "Our Work", href: "/work", icon: ArrowUpRight },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">

        {/* 404 */}
        <p className="text-8xl font-bold text-accent/20 leading-none mb-6 select-none">404</p>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-4">
          Page not found
        </h1>
        <p className="text-lg text-foreground mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button href="/" variant="cta" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" size="lg" icon={false}>
            Contact us
          </Button>
        </div>

        {/* Quick links */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Popular pages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-accent hover:shadow-md transition-all group"
              >
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground-dark group-hover:text-accent transition-colors text-center">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
