import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container-shell section-padding">
        <div className="grid gap-10 rounded-[40px] bg-brand-plum px-6 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-10">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/82">
              Building a kinder and more empowered society through academic excellence, youth leadership, mental health advocacy, and social reform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/donate">Support the mission</Button>
              <Button href="/contact" variant="ghost" className="text-white">
                Talk to us
              </Button>
            </div>
          </div>
          <div>
            <p className="font-display text-2xl">Explore</p>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.explore.map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring text-white/80 transition hover:text-brand-pink">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-2xl">Connect</p>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.connect.map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring text-white/80 transition hover:text-brand-pink">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 text-sm text-white/72">
              <p>hello@blessingraymondfoundation.org</p>
              <p className="mt-2">Instagram / Facebook / LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Blessing Raymond Foundation. All rights reserved.</p>
          <p>Made with care for young changemakers and community builders.</p>
        </div>
      </div>
    </footer>
  );
}
