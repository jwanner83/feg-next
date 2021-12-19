import { getPostCount, getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'
import Archive from '@/components/archive/Archive'
import Head from 'next/head'

const type = 'News'

type NewsPageParams = {
  posts: Post[]
  page: number | null
  pages: number
}

export default function NewsPage({ posts, page, pages }: NewsPageParams) {
  return (
    <>
      <Head>
        <title>{type} - FEG Gossau</title>
      </Head>

      <Archive
        title={type}
        posts={posts}
        page={Number(page || 1)}
        pages={pages}
      />
    </>
  )
}

export async function getStaticProps({ params }) {
  let posts: Post[] | null = null

  if (!isNaN(params.page)) {
    posts = await getPosts({ type, page: params.page })
  }

  const count = await getPostCount({ type })
  const pages = Math.ceil(Number(count) / 10)

  return {
    props: {
      posts,
      page: params.page || null,
      pages
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  let paths = []

  const count = await getPostCount({ type })
  const pages = Math.ceil(Number(count) / 10)

  for (let i = 1; i < pages; i++) {
    paths = paths.concat(`/${type.toLowerCase()}/page/${i}`)
  }

  return {
    paths,
    fallback: true
  }
}
