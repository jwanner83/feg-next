import Head from 'next/head'
import Archive from '@/components/archive/Archive'
import { getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'

type PredigtenParams = {
  posts: Post[]
}

export default function Predigten({ posts }: PredigtenParams) {
  return (
    <>
      <Head>
        <title>Predigten - FEG Gossau</title>
      </Head>

      <Archive title="Predigten" posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts({ type: 'predigten' })
  return {
    props: { posts },
    revalidate: 10
  }
}
