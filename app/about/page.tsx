import { WaveDivider } from "@/components/art/wave-divider";
import { EditorialList, FeatureGrid, TwoColumnStory } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { introductionPoints, missionPoints, pageBlurb } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A foundation shaped by care, courage, and community imagination." description={pageBlurb.about} theme="mission" />
      <TwoColumnStory
        id="introduction"
        eyebrow="Introduction to the foundation"
        title="A registered nonprofit growing from Abeokuta into a wider community movement."
        description="The Blessing Raymond Foundation, formerly known as Project Think Kindly, began with a desire to create positive change in Abeokuta, Ogun State. Today, the foundation is also actively engaged in Abuja and Cross River State, carrying the same commitment to transparency, accountability, and responsible governance into every program."
        reverse
        theme="light"
      />
      <TwoColumnStory
        id="mission"
        eyebrow="Mission & purpose"
        title="We believe young people deserve support that feels practical, empowering, and deeply human."
        description='The guidebook mission is clear: "To create a kinder and more empowered society by nurturing academic excellence, promoting youth leadership, advocating for mental health, and driving social reform through community-driven initiatives." Every page of the site now reflects that same direction.'
      />
      <WaveDivider topColor="#ffffff" bottomColor="#500769" />
      <FeatureGrid
        id="who-we-are"
        eyebrow="Who we are"
        title="An incorporated trustee organization with a youth-first lens and a community-driven heartbeat."
        description="The foundation's identity in the guidebook comes through in the values, structure, and care practices that support the mission."
        dark
        items={introductionPoints.map((point, index) => ({
          title: ["Community-rooted beginnings", "Responsible governance", "Growing geographic reach"][index],
          description: point
        }))}
      />
      <EditorialList
        id="reports"
        title="The mission priorities guiding the work."
        items={missionPoints.map((point, index) => ({
          title: ["Kinder communities", "Academic excellence", "Leadership and reform", "Mental health advocacy"][index],
          description: point,
          href:
            index === 1
              ? "/what-we-do#academic-excellence"
              : index === 2
                ? "/what-we-do#youth-leadership"
                : index === 3
                  ? "/what-we-do#mental-health-advocacy"
                  : "/what-we-do#kindness",
          ctaLabel: "See this in action"
        }))}
      />
    </>
  );
}
