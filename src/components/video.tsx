import YouTube from "react-youtube";

type VideoProps = {
  video: string;
};

export default function Video({ video }: VideoProps) {
  const opts = {
    height: "390",
    width: "100%",
  };

  return <YouTube videoId={video.split(`?v=`)[1]} opts={opts} />;
}
