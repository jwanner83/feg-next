import { useRouter } from 'next/router'
import { postEndpoint } from '@/api/post/PostEndpoint'
import Head from 'next/head'
import PostComponent from '@/components/post/Post'
import { Post } from '@/api/post/PostEndpoints.types'

type PostParams = {
  post: Post
}

export default function PredigtenPost({ post }: PostParams) {
  const router = useRouter()

  const image =
    post?._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url

  const rawDate = new Date(post?.date)
  const date = `${rawDate?.getDate()}.${rawDate?.getMonth()}.${rawDate.getFullYear()}`

  return (
    <>
      <Head>
        <title>{post?.title.rendered} - FEG Gossau</title>
      </Head>

      <PostComponent post={post} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await postEndpoint.getPostRequest({
    params: { slug: params.slug, type: 'predigten' },
    key: params.slug
  })

  return {
    props: {
      post: post?.[0]
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const predigten = await postEndpoint.getPredigtenMinimalRequest()
  return {
    paths: predigten.map((predigt: Post) => `/predigten/${predigt.slug}`) || [],
    fallback: true
  }
}
