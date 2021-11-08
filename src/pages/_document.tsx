import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display%3A400%2C700%7CLora%3A400%2C700%7COpen+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext"
          rel="stylesheet"
        />
      </Head>
      <body className="m-0">
        <link rel="icon" href="/images/feg-logo.png" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
