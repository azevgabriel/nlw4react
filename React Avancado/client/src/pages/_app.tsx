import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'styles/globals';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default App;
