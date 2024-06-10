import balcony from "../public/balcony.jpg";
import beerFest from "../public/beer-fest.jpg";
import cupie from "../public/cupie.jpg";
import spw from "../public/spw.jpg";
import te from "../public/te.jpg";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid mt-6 grid-cols-2 gap-3">
      <Image
        src={beerFest}
        alt="Dan at a beer festival"
        width={500}
        height={675}
        className="rounded-lg row-span-3"
        placeholder="blur"
        priority
      />
      <Image
        src={spw}
        alt="Dan at SoPost week"
        width={500}
        height={500}
        className="rounded-lg row-span-2"
        placeholder="blur"
        priority
      />
      <Image
        src={cupie}
        alt="Dan doing a partner stunt"
        width={500}
        height={675}
        className="rounded-lg row-span-3"
        placeholder="blur"
        priority
      />
      <Image
        src={balcony}
        alt="Dan on a balcony smiling"
        width={500}
        height={675}
        className="rounded-lg row-span-2"
        placeholder="blur"
        priority
      />
      <Image
        src={te}
        alt="Team England Cheer"
        width={740}
        height={500}
        className="rounded-lg col-span-2"
        placeholder="blur"
        priority
      />
    </div>
  );
}
