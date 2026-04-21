import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";

import { SceneIllustration } from "@/components/art/scene-illustration";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function TwoColumnStory({
  id,
  eyebrow,
  title,
  description,
  reverse = false,
  theme = "light"
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  reverse?: boolean;
  theme?: "hero" | "mission" | "teal" | "light";
}) {
  return (
    <section className="bg-white" id={id}>
      <div className={cn("container-shell section-padding grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center", reverse && "lg:grid-cols-[1.05fr_0.95fr]")}>
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <SceneIllustration theme={theme} />
        </Reveal>
        <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureGrid({
  id,
  eyebrow,
  title,
  description,
  items,
  dark = false
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: { id?: string; title: string; description: string }[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-brand-plum text-white" : "bg-brand-sky"} id={id}>
      <div className="container-shell section-padding">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} light={dark} />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <article id={item.id} className={cn("organic-card p-6", dark ? "border border-white/10 bg-white/10" : "bg-white")}>
                <p className={cn("text-xs font-bold uppercase tracking-[0.22em]", dark ? "text-brand-sky" : "text-brand-pink")}>
                  Spotlight {index + 1}
                </p>
                <h3 className={cn("mt-3 font-display text-3xl", dark ? "text-white" : "text-brand-plum")}>{item.title}</h3>
                <p className={cn("mt-4 text-base leading-relaxed", dark ? "text-white/80" : "text-brand-black/72")}>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialList({
  id,
  title,
  items
}: {
  id?: string;
  title: string;
  items: { id?: string; title: string; description: string; href?: Route; ctaLabel?: string }[];
}) {
  return (
    <section className="bg-[#fff7fd]" id={id}>
      <div className="container-shell section-padding">
        <Reveal>
          <SectionHeading eyebrow="Inside the work" title={title} />
        </Reveal>
        <div className="mt-12 grid gap-5">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div
                id={item.id}
                className="organic-card grid gap-4 bg-white p-6 lg:grid-cols-[0.15fr_0.85fr] lg:items-start"
              >
                <div className="font-display text-4xl text-brand-pink">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-display text-3xl text-brand-plum">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-brand-black/72">{item.description}</p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="focus-ring mt-5 inline-flex items-center gap-2 font-bold text-brand-teal"
                    >
                      {item.ctaLabel ?? "Learn more"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
