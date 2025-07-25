"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export function MoodBoard() {
  const [selectedMoodIndex, setSelectedMoodIndex] = useState<number | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setSelectedMoodIndex(null));
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedMoodIndex(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectedMood =
    selectedMoodIndex !== null ? moods[selectedMoodIndex] : null;

  return (
    <>
      <AnimatePresence>
        {selectedMood && (
          <motion.div
            className="fixed inset-0 grid place-items-center w-screen h-screen bg-black/50 z-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedMood && (
          <div className="fixed inset-0 grid place-items-center p-8 w-screen h-screen z-50">
            <motion.div
              ref={ref}
              layoutId={`mood-container-${selectedMood.title}`}
              className="p-4 rounded-lg bg-background shadow-lg max-w-[632px] max-h-[75vh] overflow-y-auto"
            >
              <motion.span
                layoutId={`mood-index-${selectedMood.title}`}
                className="text-2xl font-bold"
              >
                {String((selectedMoodIndex ?? 0) + 1).padStart(2, "0")}
              </motion.span>
              <motion.div
                layoutId={`mood-image-${selectedMood.title}`}
                className="relative max-w-[600px]"
              >
                <Image
                  src={selectedMood.image}
                  alt={selectedMood.title}
                  width={selectedMood.width}
                  height={selectedMood.height}
                  className="rounded-lg"
                />
                <div className="absolute rounded-b-lg bottom-0 bg-gradient-to-b from-transparent to-black/50 w-full h-1/3" />
              </motion.div>
              <motion.h3
                layoutId={`mood-title-${selectedMood.title}`}
                className="relative -top-8 left-4 font-bold text-white"
              >
                {selectedMood.title}
              </motion.h3>
              <motion.p
                layoutId={`mood-description-${selectedMood.title}`}
                className="text-sm -mt-4"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0, duration: 0 },
                }}
                transition={{ delay: 0.35 }}
              >
                {selectedMood.description}
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ol className="w-full max-w-[100rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 sm:gap-y-20 md:gap-y-32 xl:gap-y-40 mx-auto">
        {moods.map((mood, index) => (
          <motion.li
            key={mood.title}
            layoutId={`mood-container-${mood.title}`}
            className="w-full cursor-pointer h-fit bg-background"
            onClick={() => setSelectedMoodIndex(index)}
          >
            <motion.span
              layoutId={`mood-index-${mood.title}`}
              className="text-lg font-bold"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
            <motion.div layoutId={`mood-image-${mood.title}`}>
              <Image
                src={mood.image}
                alt={mood.title}
                width={mood.width}
                height={mood.height}
                className="rounded-lg"
              />
            </motion.div>
            <motion.h3
              layoutId={`mood-title-${mood.title}`}
              className="font-bold"
            >
              {mood.title}
            </motion.h3>
          </motion.li>
        ))}
      </ol>
    </>
  );
}

const moods = [
  {
    title: "Honda Civic Type-R EP3",
    image: "/mood/civic.jpg",
    width: 600,
    height: 400,
    description:
      "The EP3 was the first car I got myself after graduating and probably the best car I'll ever own. The 197bhp front wheel drive made the long commute across b-roads so much fun, it's a shame it only did 16 miles to the gallon, otherwise I would have held onto it for a lot longer.",
  },
  {
    title: "Togo Sofa",
    image: "/mood/togo.jpg",
    width: 600,
    height: 329,
    description:
      "One of the coolest and most comfortable sofas I've seen, was definitely a little strange using it as the main sofa for a while with how low to the ground it is, once you get down, it can be hard to get back up.",
  },
  {
    title: "Earl of East Onsen",
    image: "/mood/onsen.jpg",
    width: 600,
    height: 800,
    description:
      "One of the easiest ways to elevate the feel of a room is with smell and the Onsen essential oil by Earl of East is by far the best smelling room fragrance I've ever used.",
  },
  {
    title: "Heliograf Light Soy",
    image: "/mood/soy.jpg",
    width: 600,
    height: 600,
    description:
      "The Light Soy is something that always catches the attention of guests, designed by the team at Heliograf and built with recycled ocean-plastic, it is incredibly playful and looks great.",
  },
  {
    title: "Studio Arhoj Mugs",
    image: "/mood/mug.jpg",
    width: 600,
    height: 600,
    description:
      "I first sumbled across these mugs in Hens Teeth, Dublin where I had to grab a couple of them, and then I had the priveledge of visiting the store in Copenhagen and couldn't resist grabbing another.",
  },
  {
    title: "Salt Fat Acid Heat",
    image: "/mood/sfah.jpg",
    width: 600,
    height: 400,
    description:
      "A book that goes into the fundamentals of what makes food taste good and how to make simple yet exciting meals. The one cookbook that I'd recommend to anyone.",
  },
  {
    title: "The Barbican",
    image: "/mood/barbican.jpg",
    width: 600,
    height: 400,
    description:
      "Easily my favourite place in London and my default place to go when I need to get out of the house. Living in the Barbican is top of my bucket list.",
  },
  {
    title: "Teenage Engineering OP-1",
    image: "/mood/op-1.jpg",
    width: 600,
    height: 600,
    description:
      "A product that I don't think I'll ever be able to justify buying myself but I'm always blown away when I see them in use. Clearly inspired by Dieter Rams, a must checkout for anyone into producing music.",
  },
  {
    title: "Brompton",
    image: "/mood/brompton.jpg",
    width: 600,
    height: 400,
    description:
      "A really cool piece of engineering that has stood the test of time, I had so much fun cycling around London the summer that I moved here that I really wanted to get my own bike, living in a shared house really limits the space you have so having a brompton tucked away in the room is perfect.",
  },
  {
    title: "Kanpai",
    image: "/mood/kanpai.jpg",
    width: 600,
    height: 400,
    description:
      "The best sake brewery outside of Japan with the most passionate staff I've ever met. Got a question about sake? Be prepared for a white pen to come out and for diagrams to be drawn all over the table to explain how it all works.",
  },
  {
    title: "Fellow Aiden",
    image: "/mood/aiden.jpg",
    width: 600,
    height: 600,
    description:
      "I've been a pour over guy for around the past 5 years (previously cafetiere), and have used my trusty V60 and Stagg EKG for a long time and while I love the process of making a delicious cup of coffee, the idea of a really hands off approach with the Aiden sounds great.",
  },
  {
    title: "Akari 24N",
    image: "/mood/24n.jpg",
    width: 600,
    height: 600,
    description:
      "Going hand in hand with a nice smelling room, the next best thing is nice lighting. The Akari 24N by Isamu Noguchi is a really simple yet elegent way to add a bit of light to a room. NO BIG LIGHTS!",
  },
  {
    title: "Sennheiser HD-6XX",
    image: "/mood/hd6xx.jpg",
    width: 600,
    height: 400,
    description:
      "A collaboration between Sennheiser and Massdrop, the HD-6XX have to be the best sounding headphones for the price. An absolute game changer for listening to albums front to back.",
  },
];
