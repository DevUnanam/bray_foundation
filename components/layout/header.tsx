"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-brand-plum/95 backdrop-blur-xl lg:hidden"
        >
          <div className="container-shell flex min-h-screen flex-col py-6 text-brand-white">
            <div className="flex items-center justify-between">
              <Logo light />
              <button onClick={onClose} className="focus-ring rounded-full border border-white/20 p-3" aria-label="Close menu">
                <X />
              </button>
            </div>
            <nav className="mt-12 flex flex-1 flex-col gap-4" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="rounded-[28px] border border-white/15 bg-white/5 p-5">
                    <button
                      className="focus-ring flex w-full items-center justify-between text-left text-2xl font-display"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown className={cn("transition", expanded === item.label && "rotate-180")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded === item.label ? (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-4 flex flex-col gap-3">
                            {item.children.map((child) => (
                              <Link key={child.href} href={child.href} onClick={onClose} className="focus-ring rounded-2xl bg-white/10 px-4 py-3 font-bold">
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} onClick={onClose} className="focus-ring rounded-[28px] border border-white/15 bg-white/5 px-5 py-5 font-display text-2xl">
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <Button href="/donate" className="w-full justify-center">Donate</Button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 py-3">
        <div
          className={cn(
            "container-shell flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 lg:px-6",
            scrolled
              ? "border-brand-plum/10 bg-white/80 shadow-bubble backdrop-blur-xl"
              : "border-white/35 bg-white/20 backdrop-blur-md"
          )}
        >
          <Logo />
          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="focus-ring inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-brand-plum transition hover:bg-brand-plum/8"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-0 top-full mt-3 w-72 rounded-[28px] border border-brand-plum/10 bg-white p-4 shadow-bubble"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="focus-ring block rounded-2xl px-4 py-3 text-sm font-bold text-brand-plum transition hover:bg-brand-sky"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-brand-plum transition hover:bg-brand-plum/8"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="hidden lg:block">
            <Button href="/donate">Donate</Button>
          </div>
          <button
            className="focus-ring rounded-full border border-brand-plum/10 bg-white/80 p-3 text-brand-plum lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
