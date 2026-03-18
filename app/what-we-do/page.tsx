import { FeatureGrid, TwoColumnStory } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { pageBlurb, pillars } from "@/lib/site-data";

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero eyebrow="What we do" title="Programs that connect empathy, confidence, learning, and leadership." description={pageBlurb.whatWeDo} theme="teal" />
      <TwoColumnStory
        eyebrow="Our approach"
        title="We design experiences that feel alive, welcoming, and transformational."
        description="Rather than isolated interventions, our work forms an ecosystem: care opens trust, trust creates participation, and participation becomes long-term empowerment."
        reverse
        theme="hero"
      />
      <FeatureGrid
        id="kindness"
        eyebrow="Focus areas"
        title="Five interconnected pillars keep the work balanced."
        description="Each area reinforces the others so support feels holistic instead of fragmented."
        items={pillars.map((pillar) => ({ id: pillar.id, title: pillar.title, description: pillar.description }))}
      />
    </>
  );
}
