import { getPages } from '@/api/static/notion/client'
import { NotionNormalizedPost } from '@/api/static/endpoints/post/normalized.post.types'
import Image from 'next/image'
import Link from 'next/link'

type NotionParams = {
  posts: NotionNormalizedPost[]
}

export default function Notion ({ posts }: NotionParams) {
  return <>
    Hello

    {posts ? posts.map(post =>
      <>
        <Link href={`/notion/${post.slug}`}>
          <a>
            <div className="h-16 w-16">
              <Image src={post.cover.external?.url} alt="cover image" height="100%" width="100%" />
            </div>
            <h1>{post.title}</h1>
          </a>
        </Link>
      </>
    ) : <></>}
  </>
}

export async function getStaticProps({ params }) {
  const posts = await getPages()

  console.log('database', posts)

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}
