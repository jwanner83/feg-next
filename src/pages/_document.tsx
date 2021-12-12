/* eslint-disable @next/next/no-page-custom-font */
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/images/feg-logo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display%3A400%2C700%7CLora%3A400%2C700%7COpen+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="m-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
