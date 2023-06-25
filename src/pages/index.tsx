import matter from 'gray-matter'

import SEO from '../components/seo'
import Header from '../components/header'
import Hero from '../components/hero'
import Grid from '../components/grid'
import Event from '../components/event'
import Preview from '../components/preview'
import Box from '../components/box'
import Social from '../components/social'
import Project from '../components/project'

export default function Home(props) {
  const { seo, projects, professional, blog } = props

  return (
    <div>
      <SEO {...seo} />
      <Header />
      <Hero {...props} />

      <Grid title="Projects">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </Grid>

      <Grid title="Professional">
        {professional.map((job) => (
          <Event key={job.name} {...job} />
        ))}
      </Grid>

      <Box>
        <Grid title="Blog">
          {blog.map((preview) => (
            <Preview key={preview.title} {...preview} />
          ))}
        </Grid>
        <Social />
      </Box>
    </div>
  )
}

export async function getStaticProps() {
  const config = await import('../data/config.json')
  // @ts-ignore-next-line
  const home = await import('../data/home.md')
  const { data } = matter(home.default)

  return {
    props: {
      seo: {
        title: config.title,
        description: config.description,
      },
      ...data,
    },
  }
}
