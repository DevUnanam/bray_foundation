import { SceneIllustration } from "@/components/art/scene-illustration";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  theme?: "hero" | "mission" | "teal" | "light";
};

export function PageHero({ eyebrow, title, description, theme = "light" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-36">
      <div className="container-shell section-padding grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        <Reveal delay={0.15}>
          <SceneIllustration theme={theme} />
        </Reveal>
      </div>
    </section>
  );
}
