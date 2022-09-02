import Head from 'next/head'
import { NotionNormalizedPost } from '@/api/static/endpoints/post/normalized.post.types'
import { getPage } from '@/api/static/notion/client'

type PostParams = {
  post: NotionNormalizedPost
}

export default function PredigtenPost({ post }: PostParams) {
  return (
    <>
      <Head>
        <title>{post?.title} - FEG Gossau</title>
      </Head>

      {post?.slug}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPage(params.slug)

  console.log('post', post)

  return {
    props: {
      post
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}
