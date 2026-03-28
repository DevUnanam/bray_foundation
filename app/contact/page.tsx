import { Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { pageBlurb } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk about partnership, volunteering, and meaningful community work." description={pageBlurb.contact} theme="light" />
      <section className="bg-brand-sky">
        <div className="container-shell section-padding grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="organic-card bg-brand-plum p-8 text-white">
              <h2 className="font-display text-4xl">Reach the foundation</h2>
              <div className="mt-6 space-y-5 text-white/84">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand-pink" /> hello@blessingraymondfoundation.org</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand-pink" /> 08122512474</p>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-pink" /> Lagos, Nigeria</p>
                <p className="text-sm text-white/70">@project_think_kindly</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="organic-card bg-white p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="focus-ring rounded-full border border-brand-plum/10 bg-brand-sky/40 px-5 py-4" placeholder="Full name" />
                <input className="focus-ring rounded-full border border-brand-plum/10 bg-brand-sky/40 px-5 py-4" placeholder="Email address" />
              </div>
              <input className="focus-ring mt-4 w-full rounded-full border border-brand-plum/10 bg-brand-sky/40 px-5 py-4" placeholder="Subject" />
              <textarea className="focus-ring mt-4 min-h-48 w-full rounded-[28px] border border-brand-plum/10 bg-brand-sky/40 px-5 py-4" placeholder="Tell us how you'd like to connect..." />
              <button className="focus-ring mt-6 rounded-full bg-brand-pink px-6 py-3 text-sm font-bold text-brand-plum transition hover:-translate-y-1">
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
