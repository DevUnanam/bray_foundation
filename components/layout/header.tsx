"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
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
          className="fixed inset-0 z-[100] bg-[#0a5f68]/95 backdrop-blur-md lg:hidden"
        >
          <div className="flex min-h-screen flex-col px-5 py-6 text-white">
            <div className="flex items-center justify-between">
              <Logo light />
              <button
                onClick={onClose}
                className="rounded-full border border-white/20 p-3"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-3" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="rounded-3xl border border-white/15 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-xl font-bold"
                      >
                        {item.label}
                      </Link>
                      <button
                        className="rounded-full p-1"
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        aria-expanded={expanded === item.label}
                        aria-label={`Toggle ${item.label} menu`}
                      >
                        <ChevronDown
                          className={cn("h-5 w-5 transition-transform", expanded === item.label && "rotate-180")}
                        />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {expanded === item.label ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 flex flex-col gap-2">
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 font-semibold"
                            >
                              Overview
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="rounded-2xl bg-white/10 px-4 py-3 font-medium"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="rounded-3xl border border-white/15 bg-white/5 px-5 py-4 text-xl font-bold"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <Link
              href="/donate"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-[22px] bg-[#c8e79b] px-6 py-4 text-lg font-bold text-[#0d1b1e]"
            >
              Donate
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isHome = pathname === "/";
  const overlayMode = isHome && !scrolled;

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
      <header
        className={cn(
          "fixed left-0 top-0 z-[90] w-full transition-all duration-300",
          overlayMode ? "bg-transparent" : "bg-white/90 shadow-sm backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-[88px] w-full max-w-[1360px] items-center justify-between px-5 md:px-8 lg:px-10">
          <div className="shrink-0">
            <Logo light={overlayMode} compact={false} />
          </div>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
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
                    className={cn(
                      "inline-flex items-center gap-1 text-[15px] font-bold transition-colors",
                      overlayMode
                        ? "text-white hover:text-white/80"
                        : "text-[#11343a] hover:text-[#0a5f68]"
                    )}
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-0 top-full mt-4 min-w-[230px] overflow-hidden rounded-2xl bg-white py-2 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-sm font-semibold text-[#11343a] transition hover:bg-[#eef7ef]"
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
                  className={cn(
                    "text-[15px] font-bold transition-colors",
                    overlayMode
                      ? "text-white hover:text-white/80"
                      : "text-[#11343a] hover:text-[#0a5f68]"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/donate"
              className={cn(
                "inline-flex items-center justify-center rounded-[18px] px-8 py-4 text-[15px] font-bold transition-all",
                overlayMode
                  ? "bg-[#c8e79b] text-[#0d1b1e] hover:translate-y-[-1px]"
                  : "bg-[#c8e79b] text-[#0d1b1e] hover:translate-y-[-1px]"
              )}
            >
              Donate
            </Link>
          </div>

          <button
            className={cn(
              "inline-flex rounded-full p-3 lg:hidden",
              overlayMode ? "text-white" : "text-[#11343a]"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
