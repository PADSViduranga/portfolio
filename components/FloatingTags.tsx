"use client";

import { motion, useReducedMotion } from "motion/react";

// Each tag drifts around its starting point like a live cursor.
// top/left = starting position, dx/dy = how far it drifts, duration = speed.
type Tag = {
  label: string;
  color: string;
  top: string;
  left: string;
  dx: number;
  dy: number;
  duration: number;
};

const TAGS: Tag[] = [
  { label: "Flutter", color: "#38bdf8", top: "18%", left: "8%", dx: 40, dy: 20, duration: 7 },
  { label: "C# · .NET 8", color: "#a78bfa", top: "24%", left: "76%", dx: -30, dy: 30, duration: 9 },
  { label: "React", color: "#22d3ee", top: "60%", left: "72%", dx: -50, dy: -20, duration: 8 },
  { label: "MySQL", color: "#facc15", top: "46%", left: "30%", dx: 30, dy: -30, duration: 10 },
  { label: "Firebase", color: "#fb923c", top: "70%", left: "46%", dx: 40, dy: -10, duration: 6.5 },
  { label: "Next.js", color: "#f4f4f4", top: "10%", left: "50%", dx: -20, dy: 25, duration: 8.5 },
  { label: "Git", color: "#4ade80", top: "40%", left: "88%", dx: -35, dy: -15, duration: 7.5 },
  { label: "EF Core", color: "#f472b6", top: "84%", left: "82%", dx: -25, dy: -20, duration: 9.5 },
];

export default function FloatingTags() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
      {TAGS.map((tag, i) => (
        <motion.div
          key={tag.label}
          className="absolute flex items-start gap-1"
          style={{ top: tag.top, left: tag.left }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, x: [0, tag.dx, 0], y: [0, tag.dy, 0] }
          }
          transition={{
            opacity: { delay: 0.4 + i * 0.08 },
            scale: { delay: 0.4 + i * 0.08 },
            x: { duration: tag.duration, repeat: Infinity, ease: "easeInOut" },
            y: { duration: tag.duration * 1.3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* cursor arrow */}
          <svg width="16" height="16" viewBox="0 0 16 16" style={{ color: tag.color }}>
            <path d="M1 1l5.5 13 2-5.5L14 6.5z" fill="currentColor" />
          </svg>
          {/* label */}
          <span
            className="mt-3 rounded-md px-2 py-0.5 font-mono text-[11px] font-medium text-ink shadow-lg"
            style={{ backgroundColor: tag.color }}
          >
            {tag.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
