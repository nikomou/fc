import { Zap, Search, Lightbulb, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    icon: Zap,
    title: "Faster Delivery",
    description:
      "AI-assisted development cuts build time without cutting corners — so your project ships sooner without compromising quality.",
    delay: "0s",
  },
  {
    icon: Search,
    title: "Smarter SEO",
    description:
      "Optimised for AI search platforms: ChatGPT Shopping, Google SGE, and Perplexity — where your next customers are already looking.",
    delay: "0.75s",
  },
  {
    icon: Lightbulb,
    title: "Creative Ideation",
    description:
      "Rapid concept testing and design exploration powered by generative AI, so your team spends less time briefing and more time deciding.",
    delay: "1.5s",
  },
  {
    icon: BarChart3,
    title: "Data & Strategy",
    description:
      "Process behavioural data and surface growth opportunities faster than manual analysis — turning insights into action at speed.",
    delay: "2.25s",
  },
];

export function AISection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#0a0a0a" }}>
      <style>{`
        @property --ai-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes ai-border-spin {
          to { --ai-angle: 360deg; }
        }
        .ai-card-glow {
          background: conic-gradient(
            from var(--ai-angle),
            transparent 70%,
            rgba(239, 67, 107, 0.5) 80%,
            rgba(255, 255, 255, 0.85) 85%,
            rgba(239, 67, 107, 0.5) 90%,
            transparent 100%
          );
          animation: ai-border-spin 3s linear infinite;
        }
      `}</style>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: heading + description + CTA */}
          <div>
            <div className="relative inline-flex p-[1px] rounded-full overflow-hidden mb-6">
              <div className="ai-card-glow absolute inset-0" style={{ animationDelay: "1.2s", animationDuration: "2s" }} />
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] text-xs font-medium text-white/60 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef436b] inline-block" />
                AI-Powered
              </div>
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

          {/* Right: 2×2 capability cards with spinning border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="relative p-[1px] rounded-xl overflow-hidden"
                >
                  {/* Spinning gradient border */}
                  <div
                    className="ai-card-glow absolute inset-0"
                    style={{ animationDelay: cap.delay }}
                  />

                  {/* Card content */}
                  <div className="relative rounded-[11px] p-5 h-full" style={{ backgroundColor: "#111111" }}>
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-white/50" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-sm font-semibold text-white mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
