import { EditorialList, TwoColumnStory } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import {
  communicationChannels,
  conductGuidelines,
  pageBlurb,
  recognitionMoments
} from "@/lib/site-data";

export default function VolunteerPage() {
  return (
    <>
      <PageHero eyebrow="Volunteer" title="Bring your time, your energy, and your heart to the work." description={pageBlurb.volunteer} theme="teal" />
      <TwoColumnStory
        id="overview"
        eyebrow="Volunteer culture"
        title="The guidebook welcomes volunteers into a culture of clarity, respect, and joyful responsibility."
        description="Volunteers are invited to contribute to positive social change while being supported through strong communication, clear expectations, collaborative teams, and meaningful appreciation. The foundation asks each volunteer to serve with professionalism, kindness, and commitment."
      />
      <EditorialList
        id="code-of-conduct"
        title="Volunteer code of conduct."
        items={conductGuidelines.map((item) => ({
          ...item,
          href: "/team",
          ctaLabel: "See our teams"
        }))}
      />
      <EditorialList
        id="communication-channels"
        title="Communication channels volunteers use."
        items={communicationChannels.map((item) => ({
          ...item,
          href: item.title === "Social media" ? "/contact" : undefined,
          ctaLabel: item.title === "Social media" ? "Get in touch" : undefined
        }))}
      />
      <EditorialList
        id="recognition"
        title="How volunteers are recognized and supported."
        items={recognitionMoments.map((item) => ({
          ...item,
          href: "/faq",
          ctaLabel: "Read volunteer FAQ"
        }))}
      />
    </>
  );
}
