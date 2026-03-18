import { TwoColumnStory } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Donate" title="Help fuel kinder schools, braver young leaders, and healthier communities." description="Support from donors and partners helps the foundation expand practical care, outreach, and opportunity." theme="teal" />
      <TwoColumnStory
        eyebrow="Giving with purpose"
        title="Every contribution helps care become visible, consistent, and scalable."
        description="This placeholder donate page is ready for integration with a secure payment platform or campaign-specific fundraising flow."
        reverse
      />
    </>
  );
}
