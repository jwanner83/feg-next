import Head from 'next/head'
import { NotionNormalizedPost } from '@/api/static/endpoints/post/normalized.post.types'
import { getBlocks, getPage } from '@/api/static/notion/client'
import Notion from '@/components/notion/Notion'
import { NotionBlockType } from '@/services/notion/types/notion.types'

type PostParams = {
  post: NotionNormalizedPost,
  blocks: NotionBlockType[]
}

export default function PredigtenPost({ post, blocks }: PostParams) {
  return (
    <>
      <Head>
        <title>{post?.title} - FEG Gossau</title>
      </Head>

      <Notion blocks={blocks} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPage(params.slug)
  const blocks = await getBlocks(post.id)

  return {
    props: {
      post,
      blocks
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
