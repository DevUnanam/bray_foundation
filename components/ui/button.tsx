"use client";

import type { Route } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: Route;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const baseStyles =
  "focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300";

const variants = {
  primary: "bg-brand-pink text-brand-plum shadow-bubble hover:-translate-y-1 hover:shadow-xl",
  secondary: "bg-brand-plum text-brand-white shadow-bubble hover:-translate-y-1 hover:bg-brand-black",
  ghost: "border-2 border-current bg-transparent hover:-translate-y-1"
};

export function Button({ href, children, className, variant = "primary" }: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={classes}>
      {children}
    </motion.button>
  );
}
