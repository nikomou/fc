import { Zap, Search, Lightbulb, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    icon: Zap,
    title: "Faster Delivery",
    description:
      "AI-assisted development cuts build time without cutting corners — so your project ships sooner without compromising quality.",
  },
  {
    icon: Search,
    title: "Smarter SEO",
    description:
      "Optimised for AI search platforms: ChatGPT Shopping, Google SGE, and Perplexity — where your next customers are already looking.",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideation",
    description:
      "Rapid concept testing and design exploration powered by generative AI, so your team spends less time briefing and more time deciding.",
  },
  {
    icon: BarChart3,
    title: "Data & Strategy",
    description:
      "Process behavioural data and surface growth opportunities faster than manual analysis — turning insights into action at speed.",
  },
];

export function AISection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0a0a0a" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: heading + description + CTA */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef436b] inline-block" />
              AI-Powered
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              AI-Powered Shopify Development
            </h2>

            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
              We&apos;ve embedded AI across every part of our workflow — so you get more output, deeper insight, and stronger performance without a bigger budget.
            </p>

            <Button href="/shopify-ai" variant="cta" size="lg">
              Explore AI Services
            </Button>
          </div>

          {/* Right: 2×2 capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group relative rounded-xl p-5 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200 overflow-hidden"
                >
                  {/* Pink accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ef436b] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-xl" />

                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#ef436b]/10 group-hover:border-[#ef436b]/30 transition-all duration-200">
                    <Icon className="w-4 h-4 text-white/50 group-hover:text-[#ef436b] transition-colors duration-200" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
