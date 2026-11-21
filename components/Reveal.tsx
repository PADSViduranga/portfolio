"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Smooth "ease out" curve used by every animation on the site.
const EASE = [0.22, 1, 0.36, 1] as const;

// Fades and slides its children up when they scroll into view.
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    // reducedMotion="user": people who turn off animations in their OS settings get no movement
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

// Slides one line of a headline up from behind an invisible mask.
// The outer span is always visible, so it is the one that watches for scrolling;
// it then tells the inner text to slide up.
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.span
        className={`-mb-[0.1em] block overflow-hidden pb-[0.1em] ${className}`}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true }}
      >
        <motion.span
          className="block"
          variants={{ hidden: { y: "110%" }, shown: { y: 0 } }}
          transition={{ duration: 0.8, delay, ease: EASE }}
        >
          {children}
        </motion.span>
      </motion.span>
    </MotionConfig>
  );
}
