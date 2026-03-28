import { EditorialList } from "@/components/sections/page-content";
import { PageHero } from "@/components/sections/page-hero";
import { volunteerFaqs } from "@/lib/site-data";

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Quick answers drawn from the volunteer onboarding guidebook." description="This page turns the guidebook's most common volunteer questions into a clear web reference for new and returning supporters." theme="light" />
      <EditorialList
        title="Frequently asked questions."
        items={volunteerFaqs.map((item) => ({
          ...item,
          href: "/volunteer",
          ctaLabel: "Back to volunteer info"
        }))}
      />
    </>
  );
}
