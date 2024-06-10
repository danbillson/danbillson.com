import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <section>
      <h1 className="font-medium text-2xl mt-14 mb-8 tracking-tighter">
        hey, i&apos;m dan 👋
      </h1>
      <div className="prose prose-neutral">
        <p>
          I&apos;m a software engineer, currently based in London. I was a
          cheerleader on Team England but have now moved over to volleyball,
          I&apos;m also a big fan of craft beer and coffee.
        </p>
      </div>
      <Gallery />
      <div className="prose prose-neutral mt-10">
        <p>
          For those of you new to cheerleading, I recommend checking out{" "}
          <a
            href="https://www.youtube.com/watch?v=4VmvaqKoGTY"
            target="_blank"
            rel="noopener noreferer"
          >
            Team England 2019
          </a>
          . That was a fun one.
        </p>
      </div>
    </section>
  );
}
