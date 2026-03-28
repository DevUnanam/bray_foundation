import { EditorialList, FeatureGrid } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { pageBlurb, projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our projects" title="A portfolio of bright, mission-led initiatives for young changemakers." description={pageBlurb.projects} theme="light" />
      <FeatureGrid
        eyebrow="Program lineup"
        title="Every project gives the mission a distinct shape."
        description="The guidebook breaks each project into practical program activities, and those details are now reflected across the page."
        items={projects.map((project) => ({ id: project.id, title: project.title, description: project.summary }))}
      />
      <EditorialList
        title="Program details from each project."
        items={projects.map((project) => ({
          id: project.id,
          title: project.title,
          description: project.details.join(" "),
          href: "/contact",
          ctaLabel: "Support this work"
        }))}
      />
    </>
  );
}
