import { EditorialList } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Quick answers for volunteers, partners, and supporters." description="A starter FAQ page for common questions about participation, giving, collaboration, and communication." theme="light" />
      <EditorialList
        title="Frequently asked questions."
        items={[
          { title: "How can I volunteer?", description: "Visit the volunteer page, share your interest, and we will guide you through the next steps and available roles." },
          { title: "Can organizations partner with the foundation?", description: "Yes. We welcome school partnerships, community collaborations, sponsorships, and aligned mission support." },
          { title: "How can I stay updated?", description: "Use the newsletter sign-up or contact page to stay connected to stories, activations, and opportunities." }
        ]}
      />
    </>
  );
}
