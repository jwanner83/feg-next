import { getPost, getPosts } from '@/api/static/endpoints/post/post'
import { Post } from '@/api/static/endpoints/post/post.types'
import PostComponent from '@/components/post/Post'
import Head from 'next/head'

type PageComponentParams = {
  post: Post
}

export default function PageComponent({ post }) {
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
  const post = await getPost({ type: 'pages', slug: params.slug })

  return {
    props: {
      post
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const posts = await getPosts({ type: 'pages' })

  return {
    paths: posts.map((post) => `/${post.slug}`) || [],
    fallback: true
  }
}
