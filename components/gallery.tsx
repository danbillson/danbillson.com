import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid mt-6 grid-cols-2 gap-3">
      <Image
        src="/beer-fest.jpg"
        alt="Dan at a beer festival"
        width={500}
        height={675}
        className="rounded-lg row-span-3"
      />
      <Image
        src="/spw.jpg"
        alt="Dan at SoPost week"
        width={500}
        height={500}
        className="rounded-lg row-span-2"
      />
      <Image
        src="/cupie.jpg"
        alt="Dan doing a partner stunt"
        width={500}
        height={675}
        className="rounded-lg row-span-3"
      />
      <Image
        src="/balcony.jpg"
        alt="Dan on a balcony smiling"
        width={500}
        height={675}
        className="rounded-lg row-span-2"
      />
      <Image
        src="/te.jpg"
        alt="Team England Cheer"
        width={740}
        height={500}
        className="rounded-lg col-span-2"
      />
    </div>
  );
}
