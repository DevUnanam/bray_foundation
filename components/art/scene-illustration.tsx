"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type SceneIllustrationProps = {
  theme?: "hero" | "mission" | "teal" | "light";
};

const themeMap = {
  hero: {
    bg: "from-brand-sky via-white to-brand-lilac/30",
    blob1: "#ff66c4",
    blob2: "#1cabb0",
    blob3: "#c860f5"
  },
  mission: {
    bg: "from-white via-brand-sky to-brand-lilac/20",
    blob1: "#c860f5",
    blob2: "#1cabb0",
    blob3: "#500769"
  },
  teal: {
    bg: "from-brand-teal/20 via-white to-brand-sky",
    blob1: "#500769",
    blob2: "#ff66c4",
    blob3: "#d880fc"
  },
  light: {
    bg: "from-white via-brand-sky/60 to-brand-pink/20",
    blob1: "#1cabb0",
    blob2: "#c860f5",
    blob3: "#ff66c4"
  }
};

export function SceneIllustration({ theme = "hero" }: SceneIllustrationProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const floatY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -40]);
  const colors = themeMap[theme];

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[44px] border border-brand-plum/10 bg-gradient-to-br ${colors.bg} p-8 shadow-bubble sm:p-10`}
      aria-hidden="true"
    >
      <motion.div className="absolute inset-x-10 top-8 h-12 rounded-full bg-white/50 blur-2xl" style={{ y: floatY }} />
      <svg viewBox="0 0 640 520" className="relative z-10 h-full w-full">
        <path
          d="M97 336C61 284 64 196 112 151C156 110 224 113 284 100C353 85 427 42 491 78C554 113 608 205 583 280C557 356 466 388 391 414C306 442 152 416 97 336Z"
          fill={colors.blob1}
          opacity="0.28"
        />
        <path
          d="M428 150C458 148 497 166 504 195C510 220 478 239 465 262C452 288 457 331 427 345C396 359 361 337 332 320C309 306 284 294 275 270C264 242 263 208 283 186C302 164 336 160 366 156C389 153 405 152 428 150Z"
          fill={colors.blob2}
          opacity="0.88"
        />
        <path
          d="M126 228C119 170 170 118 227 111C282 105 347 131 363 184C380 241 338 303 282 327C222 352 135 306 126 228Z"
          fill={colors.blob3}
          opacity="0.78"
        />
        <path d="M210 370C232 310 272 268 333 241C381 220 441 222 480 250C529 285 546 354 523 407H179C183 394 201 386 210 370Z" fill="#500769" />
        <circle cx="250" cy="207" r="47" fill="#ffffff" />
        <circle cx="245" cy="203" r="18" fill="#1cabb0" />
        <circle cx="252" cy="198" r="7" fill="#ffffff" />
        <circle cx="392" cy="195" r="58" fill="#ffffff" />
        <circle cx="387" cy="189" r="22" fill="#ff66c4" />
        <circle cx="396" cy="183" r="8" fill="#ffffff" />
        <path
          d="M136 410C163 379 193 361 231 356C254 353 278 358 298 370C310 377 322 388 336 392C356 398 378 391 399 387C431 380 468 384 504 410H136Z"
          fill="#1cabb0"
        />
        <path d="M154 425C199 433 240 449 282 470" stroke="#ff66c4" strokeWidth="13" strokeLinecap="round" />
        <path d="M491 421C453 436 418 457 388 480" stroke="#c2e9ff" strokeWidth="13" strokeLinecap="round" />
        <path d="M216 150L226 126L236 150L260 160L236 168L226 194L216 168L190 160L216 150Z" fill="#ff66c4" />
        <path d="M455 113L463 93L470 113L490 120L470 128L463 149L455 128L435 120L455 113Z" fill="#500769" />
      </svg>
    </div>
  );
}
