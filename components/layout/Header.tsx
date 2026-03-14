"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Palette,
  Cog,
  ArrowRightLeft,
  Gauge,
  Headphones,
  Code,
  Search,
  ClipboardCheck,
  Wrench,
  BookOpen,
  CheckSquare,
  FileText,
  Newspaper,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/lib/constants";

const developmentServices = [
  {
    name: "Shopify Plus",
    href: "/shopify-plus",
    icon: Zap,
  },
  {
    name: "Theme Development",
    href: "/shopify-theme-development",
    icon: Palette,
  },
  {
    name: "App Development",
    href: "/shopify-app-development",
    icon: Code,
  },
  {
    name: "Integrations",
    href: "/shopify-integrations",
    icon: Cog,
  },
  {
    name: "Migrations",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
  },
];

const growthServices = [
  {
    name: "Shopify SEO",
    href: "/shopify-seo",
    icon: Search,
  },
  {
    name: "Speed Optimisation",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
  },
  {
    name: "Store Audit",
    href: "/shopify-store-audit",
    icon: ClipboardCheck,
  },
  {
    name: "Ongoing Support",
    href: "/shopify-support",
    icon: Headphones,
  },
  {
    name: "Maintenance",
    href: "/shopify-maintenance",
    icon: Wrench,
  },
];

// Pages that should have transparent header over the hero
const transparentDarkPages = [
  // Service & migration pages
  "/shopify-services",
  "/shopify-plus",
  "/shopify-theme-development",
  "/shopify-app-development",
  "/shopify-integrations",
  "/shopify-migration",
  "/shopify-seo",
  "/shopify-speed-optimisation",
  "/shopify-store-audit",
  "/shopify-support",
  "/shopify-maintenance",
  "/woocommerce-to-shopify-migration",
  "/magento-to-shopify-migration",
  "/bigcommerce-to-shopify-migration",
  "/squarespace-to-shopify-migration",
  "/webflow-to-shopify-migration",
  "/salesforce-to-shopify-migration",
  // General pages
  "/about",
  "/work",
  "/articles",
  "/resources",
  "/contact",
  "/checklists",
  "/guides",
  "/pricing",
  "/quote",
  "/partners",
  "/automations",
  "/ecommerce-agency",
  "/privacy",
  "/terms",
];

export function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const isServicePage = transparentDarkPages.includes(pathname);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecommerceOpen, setEcommerceOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [margin, setMargin] = useState(12);

  useEffect(() => {
    if (!isHomepage && !isServicePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage, isServicePage]);

  useEffect(() => {
    const calcMargin = () => {
      setMargin(scrolled ? Math.max(12, (window.innerWidth - 1256) / 2) : 12);
    };
    calcMargin();
    window.addEventListener("resize", calcMargin);
    return () => window.removeEventListener("resize", calcMargin);
  }, [scrolled]);

  // Homepage: transparent with white text
  // Service pages: transparent with dark text
  const isTransparent = (isHomepage || isServicePage) && !scrolled && !mobileMenuOpen;
  const useWhiteText = isHomepage && isTransparent;

  return (
    <motion.header
      initial={false}
      animate={{ left: margin, right: margin }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-3 z-50 rounded-full transition-colors duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/50 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
      }`}
    >
      <nav className="flex items-center justify-between h-16 px-5">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={useWhiteText ? "/images/flex-logo-white.svg" : "/images/flex-logo.svg"}
              alt="Flex Commerce"
              width={140}
              height={32}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Ecommerce Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEcommerceOpen(true)}
              onMouseLeave={() => setEcommerceOpen(false)}
            >
              <Link
                href="/shopify-services"
                className={`flex items-center gap-1 transition-colors font-medium ${
                  useWhiteText
                    ? "text-white hover:text-white/80"
                    : "text-foreground hover:text-accent"
                }`}
              >
                Shopify
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${ecommerceOpen ? "rotate-180" : ""}`}
                />
              </Link>

              <AnimatePresence>
                {ecommerceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full -left-4 pt-2"
                  >
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 w-[520px]">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Development Column */}
                        <div>
                          <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 block">
                            Development
                          </span>
                          <div className="space-y-1">
                            {developmentServices.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <item.icon className="w-4 h-4 text-foreground" />
                                <span className="font-medium text-foreground-dark text-sm">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Growth & Support Column */}
                        <div>
                          <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 block">
                            Growth & Support
                          </span>
                          <div className="space-y-1">
                            {growthServices.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <item.icon className="w-4 h-4 text-foreground" />
                                <span className="font-medium text-foreground-dark text-sm">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.map((item) =>
              item.name === "Resources" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-colors font-medium ${
                      useWhiteText
                        ? "text-white hover:text-white/80"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full -left-4 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 w-[200px]">
                          <div className="space-y-1">
                            <Link
                              href="/resources"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <BookOpen className="w-4 h-4 text-foreground" />
                              <span className="font-medium text-foreground-dark text-sm">
                                All Resources
                              </span>
                            </Link>
                            <Link
                              href="/checklists"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <CheckSquare className="w-4 h-4 text-foreground" />
                              <span className="font-medium text-foreground-dark text-sm">
                                Checklists
                              </span>
                            </Link>
                            <Link
                              href="/guides"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <FileText className="w-4 h-4 text-foreground" />
                              <span className="font-medium text-foreground-dark text-sm">
                                Guides
                              </span>
                            </Link>
                            <Link
                              href="/articles"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Newspaper className="w-4 h-4 text-foreground" />
                              <span className="font-medium text-foreground-dark text-sm">
                                Articles
                              </span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors font-medium ${
                    useWhiteText
                      ? "text-white hover:text-white/80"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="/quote"
              size="sm"
              variant={useWhiteText ? "outline-light" : "cta"}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${useWhiteText ? "text-white" : "text-foreground-dark"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
      </nav>

        {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/50 backdrop-blur-2xl border-t border-white/40 rounded-b-3xl"
          >
            <div className="px-5 py-4">
              <div className="flex flex-col gap-2">
                {/* Development Services */}
                <div className="py-2">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                    Development
                  </span>
                  {developmentServices.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2 pl-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Growth & Support Services */}
                <div className="py-2">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                    Growth & Support
                  </span>
                  {growthServices.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2 pl-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>

                <hr className="my-2" />

                {navigation.map((item) =>
                  item.name === "Resources" ? (
                    <div key={item.name} className="py-2">
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                        Resources
                      </span>
                      <Link
                        href="/resources"
                        className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2 pl-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <BookOpen className="w-4 h-4" />
                        All Resources
                      </Link>
                      <Link
                        href="/checklists"
                        className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2 pl-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <CheckSquare className="w-4 h-4" />
                        Checklists
                      </Link>
                      <Link
                        href="/guides"
                        className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2 pl-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FileText className="w-4 h-4" />
                        Guides
                      </Link>
                      <Link
                        href="/articles"
                        className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2 pl-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Newspaper className="w-4 h-4" />
                        Articles
                      </Link>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-accent transition-colors font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}

                <hr className="my-2" />

                <Button href="/quote" variant="cta" className="mt-2" iconComponent={ArrowUpRight}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
