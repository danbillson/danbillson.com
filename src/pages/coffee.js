import matter from 'gray-matter'

import SEO from '../components/seo'
import Header from '../components/header'
import Heading from '../components/heading'
import Box from '../components/box'
import Social from '../components/social'

export default function Coffee({ locations, ...props }) {
  return (
    <div>
      <SEO title={props.title} description={props.body} />
      <Header />
      <Heading {...props} />
      <Box>
        <Social />
      </Box>
    </div>
  )
}

export async function getStaticProps() {
  const coffee = await import('../data/coffee.md')
  const { data } = matter(coffee.default)

  return {
    props: {
      ...data,
    },
  }
}
