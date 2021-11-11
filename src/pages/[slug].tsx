import { getPost, getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'

type PageComponentParams = {
  post: Post
}

export default function PageComponent({ post }) {
  return <>{post?.title}</>
}

export async function getStaticProps({ params }) {
  const page = await getPost({ type: 'pages', slug: params.slug })

  return {
    props: {
      page
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
