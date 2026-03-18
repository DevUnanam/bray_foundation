import { WaveDivider } from "@/components/art/wave-divider";
import { EditorialList, FeatureGrid, TwoColumnStory } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { pageBlurb } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A foundation shaped by care, courage, and community imagination." description={pageBlurb.about} theme="mission" />
      <TwoColumnStory
        id="mission"
        eyebrow="Mission & purpose"
        title="We believe young people deserve support that feels joyful, practical, and deeply human."
        description="Blessing Raymond Foundation exists to nurture the kind of society where students, volunteers, and communities rise together. We center dignity, possibility, and relational care in everything we build."
      />
      <WaveDivider topColor="#ffffff" bottomColor="#500769" />
      <FeatureGrid
        id="who-we-are"
        eyebrow="Who we are"
        title="An NGO with a hopeful pulse and a youth-first lens."
        description="Our identity is rooted in encouragement, visibility, and action."
        dark
        items={[
          { title: "Community-powered", description: "We build with schools, families, volunteers, and partners instead of designing in isolation." },
          { title: "Values-led", description: "Kindness, excellence, courage, wellbeing, and fairness shape both our programs and our culture." },
          { title: "Future-facing", description: "We support immediate needs while helping young people grow into confident and creative leaders." }
        ]}
      />
      <EditorialList
        id="reports"
        title="What guides our work behind the scenes."
        items={[
          { title: "Thoughtful stewardship", description: "We take resources seriously and translate support into visible, accountable care." },
          { title: "Relational impact", description: "We believe how people feel during a program matters just as much as the numbers that follow." },
          { title: "Transparent reports", description: "Reports, updates, and shared learning help our community stay connected to the mission." }
        ]}
      />
    </>
  );
}
