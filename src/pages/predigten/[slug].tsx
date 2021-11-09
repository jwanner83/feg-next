import { useRouter } from 'next/router'
import { postEndpoint } from '../../api/post/PostEndpoint'
import PostContainer from '../../components/post/PostContainer'
import PostContent from '../../components/post/PostContent'
import Head from 'next/head'
import { Post } from '../../api/post/PostEndpoints.types'

type PostParams = {
  post: Post
}

export default function PredigtenPost({ post }: PostParams) {
  const router = useRouter()

  const image =
    post?._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url

  return (
    <>
      <Head>
        <title>{post?.title.rendered} - FEG Gossau</title>
      </Head>
      <PostContainer
        title={post?.title.rendered}
        image={image}
        date={post?.date}
      >
        <PostContent post={post} />
      </PostContainer>
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
