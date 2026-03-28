"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
  compact?: boolean;
};

export function Logo({ className, light = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Blessing Raymond Foundation home"
      className={cn("focus-ring inline-flex items-center gap-3", className)}
    >
      {/* <span
        className={cn(
          "grid place-items-center font-display text-xl",
          compact
            ? "h-11 w-11 rounded-full border-[3px] border-current bg-transparent"
            : "h-12 w-12 rounded-[18px] border-2 border-current",
          light ? "text-brand-white" : "bg-brand-sky text-brand-plum"
        )}
      >
        BR
      </span> */}
      <span
        className={cn(
          "max-w-[10rem] font-display leading-none",
          compact ? "text-2xl sm:text-[1.7rem]" : "text-xl",
          light ? "text-brand-white" : "text-brand-plum"
        )}
      >
        Blessing Raymond Foundation
      </span>
    </Link>
  );
}
