"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

function SectionCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "rounded-2xl border border-[#262626] bg-[#121212] p-6 md:p-8",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export { SectionCard };
