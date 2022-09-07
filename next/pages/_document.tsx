import { Html, Main, NextScript, Head } from 'next/document'

export default function Document () {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Html lang="de">
        <body className="m-0">
        <Main />
        <NextScript />
        </body>
      </Html>
    </>
  )
}
