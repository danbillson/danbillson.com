import matter from "gray-matter";

import SEO from "../components/seo";
import Header from "../components/header";
import Heading from "../components/heading";
import MediaList from "../components/mediaList";
import Box from "../components/box";
import Social from "../components/social";

type MediaProps = {
  title: string;
  body: string;
  list: {
    [month: string]: {
      [category: string]: {
        title: string;
        info: string;
        emoji: string;
      }[];
    };
  };
};

export default function Media({ list, ...props }: MediaProps) {
  return (
    <div>
      <SEO title={props.title} description={props.body} />
      <Header />
      <Heading {...props} />
      <MediaList list={list} />
      <Box>
        <Social />
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  // @ts-ignore-next-line
  const media = await import("../data/media.md");
  const { data } = matter(media.default);

  return {
    props: {
      ...data,
    },
  };
}
