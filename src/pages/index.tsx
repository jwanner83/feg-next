import Head from 'next/head'

type IndexParams = {}

export default function Index({}: IndexParams) {
  return (
    <>
      <Head>
        <title>FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="flex justify-center items-center py-56">
        <h1 className="font-bold md:text-6xl text-4xl">Willkommen</h1>
      </div>
    </>
  )
}

export async function getStaticProps() {}
