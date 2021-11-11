import Head from 'next/head'
import Archive from '@/components/archive/Archive'
import { getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'

type NewsParams = {
  posts: Post[]
}

export default function News({ posts }: NewsParams) {
  return (
    <>
      <Head>
        <title>News - FEG Gossau</title>
      </Head>

      <Archive title="News" posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts({ type: 'news' })
  return {
    props: { posts },
    revalidate: 10
  }
}
