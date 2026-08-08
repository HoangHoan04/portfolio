"use client";

import { motion, useReducedMotion } from "motion/react";

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 md:mb-14"
    >
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary-text md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}

export { PageHeader };
