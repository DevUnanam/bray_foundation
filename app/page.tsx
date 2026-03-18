import {
  HomeHero,
  ImpactSection,
  MissionSection,
  NewsletterSection,
  ProjectsSection,
  StoriesSection,
  TeamSection,
  VolunteerSection,
  WhatWeDoSection
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MissionSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <ImpactSection />
      <TeamSection />
      <VolunteerSection />
      <StoriesSection />
      <NewsletterSection />
    </>
  );
}
