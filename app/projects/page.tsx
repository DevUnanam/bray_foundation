import { EditorialList, FeatureGrid } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { pageBlurb, projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our projects" title="A portfolio of bright, mission-led initiatives for young changemakers." description={pageBlurb.projects} theme="light" />
      <FeatureGrid
        eyebrow="Program lineup"
        title="Every project gives the mission a different shape."
        description="Together they create a lively pathway from care to confidence to action."
        items={projects.map((project) => ({ title: project.title, description: project.summary }))}
      />
      <EditorialList
        title="How projects move from idea to impact."
        items={[
          { title: "Listen closely", description: "We begin by hearing what students, schools, and communities are navigating right now." },
          { title: "Design with warmth", description: "Programs are structured to feel encouraging, clear, and visually inviting from the first touchpoint." },
          { title: "Measure what matters", description: "We track both reach and lived experience so the work remains grounded in people, not just metrics." }
        ]}
      />
    </>
  );
}
