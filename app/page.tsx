import Gallery from "@/components/gallery";
import { LatestPosts } from "@/components/latest-posts";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <>
      <Title />
      <Section>
        <div className="prose prose-neutral">
          <p>
            I&apos;m a software engineer, currently based in London. I was a
            cheerleader on Team England but have now moved over to volleyball,
            I&apos;m also a big fan of craft beer and coffee.
          </p>
        </div>
      </Section>
      <Gallery />
      <div className="prose prose-neutral mt-10">
        <p>
          For those of you new to cheerleading, I recommend checking out{" "}
          <a
            href="https://www.youtube.com/watch?v=4VmvaqKoGTY"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team England 2019
          </a>
          . That was a fun one.
        </p>
      </div>
      <LatestPosts posts={latestPosts} />
    </>
  );
}
