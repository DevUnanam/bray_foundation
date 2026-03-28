import { FeatureGrid } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { teamDetails } from "@/lib/site-data";

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="The people and functions that keep the mission moving." description="Our team structure supports delivery, partnership, visibility, advocacy, and strong youth-centered engagement." theme="hero" />
      <FeatureGrid
        eyebrow="Core functions"
        title="Five teams support the mission from planning to public impact."
        description="Each team responsibility below is drawn from the onboarding guidebook so volunteers can understand how the organization works."
        items={teamDetails}
      />
    </>
  );
}
