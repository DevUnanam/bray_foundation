import { FeatureGrid } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { teamFunctions } from "@/lib/site-data";

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="The people and functions that keep the mission moving." description="Our team structure supports delivery, partnership, visibility, advocacy, and strong youth-centered engagement." theme="hero" />
      <FeatureGrid
        eyebrow="Core functions"
        title="Different strengths, one shared mission."
        description="These areas help the foundation remain warm, strategic, and responsive."
        items={teamFunctions.map((team) => ({
          title: team,
          description: "A placeholder overview describing responsibilities, collaboration patterns, and how this team contributes to foundation-wide impact."
        }))}
      />
    </>
  );
}
