import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@fontsource-variable/karla'
import '@fontsource-variable/bodoni-moda'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Karla, sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    letter-spacing: 0.5px;
    line-height: 1.6rem;
  }
`

const theme = {
  colors: {
    primary: '#00e4bd',
    secondary: '#9865d5',
    tertiary: '#fc0064',
    fg: '#272727',
    bg: '#fff',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* @ts-expect-error */}
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
