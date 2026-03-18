import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
};

export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Blessing Raymond Foundation home"
      className={cn("focus-ring inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "grid h-12 w-12 place-items-center rounded-[18px] border-2 border-current font-display text-xl",
          light ? "bg-white/10 text-brand-white" : "bg-brand-sky text-brand-plum"
        )}
      >
        BR
      </span>
      <span className={cn("max-w-[10rem] font-display text-xl leading-none", light ? "text-brand-white" : "text-brand-plum")}>
        Blessing Raymond Foundation
      </span>
    </Link>
  );
}
