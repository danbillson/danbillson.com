import Head from 'next/head'

export default function SEO({ title, description }) {
  return (
    <Head>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{title}</title>
    </Head>
  )
}
