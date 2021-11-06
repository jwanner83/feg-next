import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
    return (
        <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet" />        </Head>
        <body className="m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}
