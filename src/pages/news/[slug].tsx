import Head from 'next/head'
import PostComponent from '@/components/post/Post'
import { Post } from '@/api/endpoints/post/post.types'
import { getPost, getPosts } from '@/api/endpoints/post/post'

type PostParams = {
  post: Post
}

export default function PredigtenPost({ post }: PostParams) {
  return (
    <>
      <Head>
        <title>{post?.title} - FEG Gossau</title>
      </Head>

      <PostComponent post={post} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPost({ slug: params.slug, type: 'news' })

  return {
    props: {
      post
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const posts = await getPosts({ type: 'news' })

  return {
    paths: posts.map((post) => `/news/${post.slug}`) || [],
    fallback: true
  }
}
