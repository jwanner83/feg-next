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

      <div className="h-index flex items-center relative md:static">
        <h1 className="font-bold text-huge absolute -ml-12 z-10 opacity-30 text-black md:text-gray-200">
          {page.title}
        </h1>
        <h1 className="font-bold text-5xl relative mt-3 z-10 ml-6 text-white md:text-black">
          {page.title}
        </h1>

        <div className="absolute h-index w-full z-0 md:z-10 md:h-index-image md:w-2/4 md:right-0">
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
