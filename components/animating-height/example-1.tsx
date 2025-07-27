"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AnimatedCard1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-fit w-full max-w-sm flex-col gap-4 rounded-md p-4 shadow-md mx-auto">
      <Image
        className="rounded-sm"
        src="/mood/mug.jpg"
        alt="mugs"
        width={600}
        height={600}
      />
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
      {isOpen && (
        <p>
          I first sumbled across these mugs in Hens Teeth, Dublin where I had to
          grab a couple of them, and then I had the priveledge of visiting the
          store in Copenhagen and couldn&apos;t resist grabbing another.
        </p>
      )}
    </div>
  );
}
