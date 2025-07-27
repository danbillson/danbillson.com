"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import useMeasure from "react-use-measure";

export function AnimatedCard3() {
  const [ref, bounds] = useMeasure();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="w-full max-w-sm overflow-hidden rounded-md shadow-md mx-auto"
      animate={{ height: bounds.height }}
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}
    >
      <div ref={ref} className="flex flex-col gap-4 p-4">
        <Image src="/mood/mug.jpg" alt="mugs" width={600} height={600} />
        <h1
          className="inline-flex cursor-pointer justify-between text-xl underline"
          onClick={() => setIsOpen(!isOpen)}
        >
          Studio Arhoj{" "}
          <ChevronDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </h1>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                filter: "blur(4px)",
                transition: { duration: 0.1 },
              }}
              transition={{ delay: 0.2 }}
            >
              I first sumbled across these mugs in Hens Teeth, Dublin where I
              had to grab a couple of them, and then I had the priveledge of
              visiting the store in Copenhagen and couldn't resist grabbing
              another.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
