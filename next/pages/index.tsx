import Head from 'next/head'

type IndexParams = {
}

export default function Index({ }: IndexParams) {
  return (
    <>
      <Head>
        <title>FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="font-bold">Hello</div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 10
  }
}
