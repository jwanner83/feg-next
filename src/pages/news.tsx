import Head from 'next/head'
import Archive from '@/components/archive/Archive'
import { getPostCount, getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'

const type = 'News'

type NewsParams = {
  posts: Post[]
  pages: number
}

export default function News({ posts, pages }: NewsParams) {
  return (
    <>
      <Head>
        <title>{type} - FEG Gossau</title>
      </Head>

      <Archive title={type} posts={posts} pages={pages} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts({ type })

  const count = await getPostCount({ type })
  const pages = Math.ceil(Number(count) / 10)

  return {
    props: { posts, pages },
    revalidate: 10
  }
}
