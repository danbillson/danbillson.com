"use client";

import balcony from "../public/balcony.jpg";
import beerFest from "../public/beer-fest.jpg";
import cupie from "../public/cupie.jpg";
import spw from "../public/spw.jpg";
import te from "../public/te.jpg";
import { InView } from "@/components/ui/in-view";
import { motion } from "motion/react";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
} as const;

export default function Gallery() {
  return (
    <InView
      viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
    >
      <div className="mt-6 grid grid-cols-2 gap-3">
        {images.map((image) => (
          <motion.div
            key={image.alt}
            className={image.className}
            variants={variants}
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              {...image}
              className="rounded-lg"
              placeholder="blur"
              priority
            />
          </motion.div>
        ))}
      </div>
    </InView>
  );
}

const images = [
  {
    src: beerFest,
    alt: "Dan at a beer festival",
    width: 500,
    height: 675,
    className: "row-span-3",
  },
  {
    src: spw,
    alt: "Dan at SoPost week",
    width: 500,
    height: 500,
    className: "row-span-2",
  },
  {
    src: cupie,
    alt: "Dan doing a partner stunt",
    width: 500,
    height: 675,
    className: "row-span-3",
  },
  {
    src: balcony,
    alt: "Dan on a balcony smiling",
    width: 500,
    height: 675,
    className: "row-span-2",
  },
  {
    src: te,
    alt: "Team England Cheer",
    width: 740,
    height: 500,
    className: "col-span-2",
  },
] as const;
