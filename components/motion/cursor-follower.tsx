"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorFollower() {
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer:fine)");
    setEnabled(mediaQuery.matches);

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor='active']")));
    };

    const handleChange = () => setEnabled(mediaQuery.matches);

    window.addEventListener("mousemove", handleMove);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-7 w-7 rounded-full border border-brand-plum/30 bg-brand-pink/20 mix-blend-multiply md:block"
      style={{ x: springX, y: springY, scale: active ? 2.1 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
    />
  );
}
