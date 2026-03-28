import { EditorialList, FeatureGrid } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { achievementHighlights, pageBlurb, stories } from "@/lib/site-data";

export default function ImpactStoriesPage() {
  return (
    <>
      <PageHero eyebrow="Impact stories" title="Moments of growth, dignity, and shared hope." description={pageBlurb.stories} theme="mission" />
      <FeatureGrid
        id="achievements"
        eyebrow="Impact & achievements"
        title="The numbers in the guidebook now have a clear home on the site."
        description="These highlights come directly from the foundation's onboarding guidebook and show the reach of recent work."
        items={achievementHighlights}
      />
      <EditorialList
        id="stories"
        title="Stories that make the numbers feel personal."
        items={stories.map((story) => ({
          title: story.title,
          description: story.excerpt,
          href: "/contact",
          ctaLabel: "Share a story"
        }))}
      />
    </>
  );
}
