import Head from 'next/head'
import PostComponent from '@/components/post/Post'
import { Post } from '@/api/endpoints/post/post.types'
import { getPost, getPosts } from '@/api/endpoints/post/post'

const type = 'News'

type PostParams = {
  post: Post
}

export default function NewsPost({ post }: PostParams) {
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
  const post = await getPost({ slug: params.slug, type })

  return {
    props: {
      post
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const posts = await getPosts({ type })

  return {
    paths: posts.map((post) => `/${type.toLowerCase()}/${post.slug}`) || [],
    fallback: true
  }
}
