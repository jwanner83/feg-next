import { getPost, getPosts } from '@/api/static/endpoints/post/post'
import { Post } from '@/api/static/endpoints/post/post.types'
import PostComponent from '@/components/content/post/Post'
import Head from 'next/head'

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
