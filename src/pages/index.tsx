import { getPost } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'
import Head from 'next/head'
import Image from 'next/image'

type IndexParams = {
  post: Post
}

export default function Index({ post }: IndexParams) {
  return (
    <>
      <Head>
        <title>FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="h-index flex items-center relative md:static">
        <h1 className="font-bold text-huge absolute -ml-12 z-10 opacity-30 text-black md:text-gray-200">
          {post.title}
        </h1>
        <h1 className="font-bold text-5xl relative mt-3 z-10 ml-6 text-white md:text-black">
          {post.title}
        </h1>

        <div className="absolute h-index w-full z-0 md:z-10 md:h-index-image md:w-3/5 md:right-0">
          <Image
            className="object-cover"
            src={post.image.large}
            layout="fill"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-24">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const post = await getPost({ type: 'pages', slug: 'Willkommen' })

  return {
    props: {
      post
    },
    revalidate: 10
  }
}
