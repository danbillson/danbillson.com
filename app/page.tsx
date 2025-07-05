import Gallery from "@/components/gallery";
import { LatestPosts } from "@/components/latest-posts";
import { Title } from "@/components/title";
import { Section } from "@/components/ui/section";
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
            Software engineer at{" "}
            <a
              href="https://paddle.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paddle
            </a>{" "}
            in London. Ex-cheerleader on Team England, now hits volleyballs. Big
            fan of craft beer and coffee.
          </p>
        </div>
      </Section>
      <Gallery />
      <Section>
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
      </Section>
      <LatestPosts posts={latestPosts} />
    </>
  );
}
