"use client";

import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "white" | "alt" | "dark";
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    alt: "bg-background-alt",
    dark: "bg-primary-dark text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgrounds[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
