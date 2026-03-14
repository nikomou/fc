import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrustBadge } from "@/components/ui/TrustBadge";
import Image from "next/image";

type WaveColor = "pink" | "blue" | "yellow" | "green" | "purple" | "black" | "orange" | "teal" | "indigo";

type HeroBackground = "white" | "pink" | "yellow" | "green" | "purple" | "blue" | "orange" | "teal";

const heroBgColors: Record<HeroBackground, string> = {
  white:  "#ffffff",
  pink:   "#fff5f7",
  yellow: "#fffdf5",
  green:  "#f3fdf6",
  purple: "#f8f5ff",
  blue:   "#f3f8ff",
  orange: "#fff8f3",
  teal:   "#f0fdfa",
};

interface PageHeroProps {
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  background?: HeroBackground;
  showTrustBadge?: boolean;
  shapeColors?: {
    topRight: WaveColor;
    bottomLeft?: WaveColor;
  };
  children?: ReactNode;
}

export function PageHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  background = "white",
  showTrustBadge = false,
  shapeColors,
  children,
}: PageHeroProps) {
  const BadgeIcon = badge?.icon;

  return (
    <section className="pt-32 pb-16 relative overflow-hidden" style={{ backgroundColor: heroBgColors[background] }}>
      {/* Background shapes - wavy gradients */}
{shapeColors && (
        <>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] hidden sm:block">
            <Image
              src={`/images/wave-${shapeColors.topRight}-corner.svg`}
              alt=""
              fill
              className="object-contain object-right-top"
              aria-hidden="true"
            />
          </div>
          {shapeColors.bottomLeft && (
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] hidden sm:block">
              <Image
                src={`/images/wave-${shapeColors.bottomLeft}-corner-bl.svg`}
                alt=""
                fill
                className="object-contain object-left-bottom"
                aria-hidden="true"
              />
            </div>
          )}
        </>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && BadgeIcon && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-6">
              <BadgeIcon className="w-4 h-4" />
              {badge.text}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            {title}
          </h1>
          <p className="text-xl text-foreground mb-8">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg" variant="cta">
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
          {showTrustBadge && <TrustBadge showRating={true} />}
          {children}
        </div>
      </div>
    </section>
  );
}
