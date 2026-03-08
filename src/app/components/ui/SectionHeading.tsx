"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
          {badge}
        </span>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-heading), sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
