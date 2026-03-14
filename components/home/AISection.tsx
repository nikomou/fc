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
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
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
        @keyframes aurora-1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          25%  { transform: translate(60px, -80px) scale(1.15); }
          50%  { transform: translate(-40px, 60px) scale(0.9); }
          75%  { transform: translate(80px, 40px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes aurora-2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-70px, 50px) scale(1.2); }
          66%  { transform: translate(50px, -60px) scale(0.85); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes aurora-3 {
          0%   { transform: translate(0px, 0px) scale(1.1); }
          40%  { transform: translate(40px, 70px) scale(0.9); }
          80%  { transform: translate(-60px, -40px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1.1); }
        }
        @keyframes aurora-4 {
          0%   { transform: translate(0px, 0px) scale(0.95); }
          50%  { transform: translate(-50px, -70px) scale(1.15); }
          100% { transform: translate(0px, 0px) scale(0.95); }
        }
      `}</style>

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Aurora blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Pink — top right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "-15%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(239,67,107,0.28) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "aurora-1 18s ease-in-out infinite",
          }}
        />
        {/* Purple — bottom left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "-20%",
            left: "-5%",
            background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "aurora-2 22s ease-in-out infinite",
          }}
        />
        {/* Blue — centre */}
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            top: "30%",
            left: "35%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "aurora-3 26s ease-in-out infinite",
          }}
        />
        {/* Teal — top left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 350,
            height: 350,
            top: "10%",
            left: "5%",
            background: "radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 70%)",
            filter: "blur(65px)",
            animation: "aurora-4 20s ease-in-out infinite",
          }}
        />
      </div>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

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
