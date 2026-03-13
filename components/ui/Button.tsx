"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "solid-light" | "cta" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", href, icon = true, children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-black text-white hover:bg-gray-800 shadow-sm hover:shadow-md",
      secondary:
        "bg-gray-800 text-white hover:bg-black shadow-sm hover:shadow-md",
      outline:
        "border-2 border-black text-black hover:bg-black hover:text-white",
      "outline-light":
        "border-2 border-white text-white hover:bg-white hover:text-black",
      "solid-light":
        "bg-white text-black hover:bg-gray-100 shadow-sm hover:shadow-md",
      cta:
        "bg-[#ef436b] text-white hover:bg-[#d93a5e] shadow-sm hover:shadow-md",
      ghost: "text-black hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
    };

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-5 h-5",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {children}
        {icon && <ArrowRight className={iconSizes[size]} />}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
