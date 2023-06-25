import matter from 'gray-matter'

import SEO from '../components/seo'
import Header from '../components/header'
import Heading from '../components/heading'
import VideoGrid from '../components/videoGrid'
import Box from '../components/box'
import Social from '../components/social'

type MediaProps = {
  title: string
  body: string
  archive: {
    video: string
  }[]
}

export default function Media({ archive, ...props }: MediaProps) {
  return (
    <div>
      <SEO title={props.title} description={props.body} />
      <Header />
      <Heading {...props} />
      <VideoGrid videos={archive} />
      <Box>
        <Social />
      </Box>
    </div>
  )
}

export async function getStaticProps() {
  // @ts-ignore-next-line
  const cheer = await import('../data/cheer.md')
  const { data } = matter(cheer.default)

  return {
    props: {
      ...data,
    },
  }
}
