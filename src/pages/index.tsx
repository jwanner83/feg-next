import { pageEndpoint } from '@/api/page/PageEndpoint'
import { Page } from '@/api/page/PageEndpoints.types'
import Head from 'next/head'

type IndexParams = {
  page: Page
}

export default function Index({ page }: IndexParams) {
  return (
    <>
      <Head>
        <title>FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="flex justify-center items-center py-56">
        <h1 className="font-bold md:text-6xl text-4xl">Willkommen</h1>
      </div>

      <div dangerouslySetInnerHTML={{ __html: page?.content?.rendered }}></div>
    </>
  )
}

export async function getStaticProps() {
  const page = await pageEndpoint.getPageRequest({
    params: { slug: 'Willkommen' },
    key: 'willkommen'
  })
  return {
    props: { page: page?.[0] },
    revalidate: 10
  }
}
