import { styled } from "styled-components";

import Video from "./video";

type VideoGridProps = {
  videos: {
    video: string;
  }[];
};

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <Grid>
      {videos.map(({ video }) => (
        <Video key={video} video={video} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1400px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
