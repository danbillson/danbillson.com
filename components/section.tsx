"use client";

import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const transition = {
  duration: 0.3,
};

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      variants={variants}
      transition={transition}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.section>
  );
}
