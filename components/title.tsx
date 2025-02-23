"use client";

import { motion } from "motion/react";

export function Title() {
  return (
    <h1 className="font-medium text-2xl mt-14 mb-8 tracking-tighter">
      hey, i&apos;m dan{" "}
      <motion.div
        className="inline-block"
        animate={{
          rotate: [0, 40, 0, 50, 0],
        }}
        transition={{
          rotate: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        👋
      </motion.div>
    </h1>
  );
}
