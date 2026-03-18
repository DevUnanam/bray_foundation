import { EditorialList, FeatureGrid } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { pageBlurb, stories } from "@/lib/site-data";

export default function ImpactStoriesPage() {
  return (
    <>
      <PageHero eyebrow="Impact stories" title="Moments of growth, dignity, and shared hope." description={pageBlurb.stories} theme="mission" />
      <FeatureGrid
        eyebrow="Featured narratives"
        title="Stories that make the numbers feel personal."
        description="These placeholders reflect the kinds of voices and outcomes the foundation can spotlight."
        items={stories.map((story) => ({ title: story.title, description: story.excerpt }))}
      />
      <EditorialList
        title="Themes we keep hearing across our community."
        items={[
          { title: "Students feel remembered", description: "Support becomes meaningful when it reminds a young person that they matter and belong." },
          { title: "Volunteers grow too", description: "Serving in community often deepens empathy, discipline, and long-term civic responsibility." },
          { title: "Hope gets practical", description: "When encouragement is paired with materials, mentorship, and structure, confidence becomes action." }
        ]}
      />
    </>
  );
}
