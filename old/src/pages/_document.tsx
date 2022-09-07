/* eslint-disable @next/next/no-page-custom-font */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/images/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display%3A400%2C700%7CLora%3A400%2C700%7COpen+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          data-domain="next.feg-gossau.ch"
          src="https://analytics.upscore.ch/js/plausible.js"
        ></script>
      </Head>
      <body className="m-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
