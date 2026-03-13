import Image from "next/image";
import { LucideIcon } from "lucide-react";

export interface CapabilityItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string; // ignored — theme colour used instead
}

export interface ServiceTheme {
  wave: string;
  circle: string;
  cardBg: string;
}

interface ServiceCapabilitiesProps {
  heading: string;
  subheading?: string;
  items: CapabilityItem[];
  theme: ServiceTheme;
}

export function ServiceCapabilities({
  heading,
  subheading,
  items,
  theme,
}: ServiceCapabilitiesProps) {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
          {heading}
        </h2>
        {subheading && (
          <p className="text-lg text-foreground max-w-2xl mx-auto">{subheading}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              style={{ backgroundColor: theme.cardBg }}
            >
              <Image
                src={theme.wave}
                alt=""
                width={160}
                height={160}
                className="absolute top-0 right-0 w-28 h-28 object-contain object-right-top opacity-50 pointer-events-none transition-all duration-500 group-hover:opacity-75 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2"
                aria-hidden="true"
              />
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={theme.circle}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute inset-0 w-12 h-12"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="relative text-lg font-semibold text-foreground-dark mb-2">
                {item.title}
              </h3>
              <p className="relative text-foreground text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
