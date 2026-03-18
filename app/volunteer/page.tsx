import { EditorialList, TwoColumnStory } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { pageBlurb } from "@/lib/site-data";

export default function VolunteerPage() {
  return (
    <>
      <PageHero eyebrow="Volunteer" title="Bring your time, your energy, and your heart to the work." description={pageBlurb.volunteer} theme="teal" />
      <TwoColumnStory
        eyebrow="Volunteer culture"
        title="We serve with respect, reliability, encouragement, and joy."
        description="Volunteers receive clear communication, community support, and meaningful recognition. In return, we ask for integrity, responsiveness, and care toward every young person and collaborator."
      />
      <EditorialList
        title="What volunteering can look like."
        items={[
          { title: "School outreach", description: "Support activations, workshops, and student-facing experiences with warmth and professionalism." },
          { title: "Community engagement", description: "Help connect the foundation with young people, families, and local partners in ways that feel welcoming." },
          { title: "Creative and operational support", description: "Contribute your skills in communications, logistics, publicity, fundraising, or program delivery." }
        ]}
      />
    </>
  );
}
