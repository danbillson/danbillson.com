import { Bodoni_Moda, Karla } from "next/font/google";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const karla = Karla({ subsets: ["latin"], display: "swap" });
export const bodoni = Bodoni_Moda({ subsets: ["latin"], display: "swap" });

const GlobalStyle = createGlobalStyle`
  :root {
    --font-body: ${karla.style.fontFamily}, sans-serif;
    --font-heading: ${bodoni.style.fontFamily}, serif;
  }

  html {
    font-family: var(--font-body);
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    letter-spacing: 0.5px;
    line-height: 1.6rem;
  }
`;

const theme = {
  colors: {
    primary: "#00e4bd",
    secondary: "#9865d5",
    tertiary: "#fc0064",
    fg: "#272727",
    bg: "#fff",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
