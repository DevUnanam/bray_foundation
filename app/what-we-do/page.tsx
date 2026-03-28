import { FeatureGrid, TwoColumnStory } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { pageBlurb, pillars } from "@/lib/site-data";

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero eyebrow="What we do" title="Programs that connect empathy, confidence, learning, and leadership." description={pageBlurb.whatWeDo} theme="teal" />
      <TwoColumnStory
        eyebrow="Our approach"
        title="We turn everyday care into structured programs that help young people grow and lead."
        description="The guidebook frames this work as an ecosystem: kindness strengthens empathy, education expands possibility, leadership builds agency, mental health support creates safer spaces, and social reform pushes for a fairer society."
        reverse
        theme="hero"
      />
      <FeatureGrid
        id="kindness"
        eyebrow="Focus areas"
        title="Five interconnected pillars define the foundation's work."
        description="Each section below is drawn from the guidebook and gives the website a direct home for the foundation's core focus areas."
        items={pillars.map((pillar) => ({ id: pillar.id, title: pillar.title, description: pillar.description }))}
      />
    </>
  );
}
