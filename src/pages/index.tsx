import { getPost, getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'
import { CoreImage } from '@/components/core/CoreImage'
import Presented from '@/components/presented/Presented'
import Head from 'next/head'
import Image from 'next/image'
import { BlurhashCanvas } from 'react-blurhash'

type IndexParams = {
  post: Post
  presented: Post[]
}

export default function Index({ post, presented }: IndexParams) {
  return (
    <>
      <Head>
        <title>FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="h-index flex items-center relative md:static">
        <h1 className="font-bold text-huge absolute -ml-12 z-10 opacity-30 text-black dark:text-black md:text-gray-200 md:dark:text-[#7b7b7b]">
          {post.title}
        </h1>
        <h1 className="font-bold text-5xl relative mt-3 z-10 ml-6 text-white md:text-black md:dark:text-white">
          {post.title}
        </h1>

        <div className="absolute h-index w-full z-0 md:z-10 md:h-index-image md:w-3/5 md:right-0">
          <CoreImage
            image={post.image.large}
            title={post.title}
            placeholder={post.image.placeholder}
          />
        </div>
      </div>

      <Presented posts={presented} title="Aktuelle Predigten" />

      <div className="max-w-2xl mx-auto mt-24">
        <div
          className="content dark:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const post = await getPost({ type: 'pages', slug: 'Willkommen' })
  const presented = await getPosts({ type: 'predigten', amount: 3 })

  return {
    props: {
      post,
      presented
    },
    revalidate: 10
  }
}
