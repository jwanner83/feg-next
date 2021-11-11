import { getPage } from '@/api/endpoints/page/page'
import { Page } from '@/api/endpoints/page/page.types'
import Head from 'next/head'
import Image from 'next/image'

type IndexParams = {
  page: Page
}

export default function Index({ page }: IndexParams) {
  return (
    <>
      <Head>
        <title>FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="h-index flex items-center">
        <h1 className="font-bold text-huge absolute text-gray-200 -ml-12">
          {page.title}
        </h1>
        <h1 className="font-bold text-5xl relative mt-3">{page.title}</h1>

        <div className="absolute h-index-image w-2/4 right-0">
          <Image
            className="object-cover"
            src={page.image.large}
            layout="fill"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-12">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = await getPage({ slug: 'Willkommen' })

  return {
    props: {
      page
    },
    revalidate: 10
  }
}
