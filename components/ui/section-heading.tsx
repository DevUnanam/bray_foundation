import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-sm font-bold uppercase tracking-[0.22em]",
            light ? "text-brand-sky" : "text-brand-plum"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("display-title text-balance", light ? "text-brand-white" : "text-brand-plum")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", light ? "text-white/84" : "text-brand-black/75")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
