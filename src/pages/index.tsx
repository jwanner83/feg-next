import { getPost, getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'
import Badge from '@/components/badge/Badge'
import Button from '@/components/core/basic/Button'
import CoreImage from '@/components/core/CoreImage'
import Information from '@/components/information/Information'
import Presented from '@/components/presented/Presented'
import Head from 'next/head'

type IndexParams = {
  post: Post
  presented: Post[]
}

export default function Index({ post, presented }: IndexParams) {
  return (
    <>
      <Head>
        <title>TEST FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="h-index flex items-center relative md:static">
        <h1 className="font-bold text-huge absolute -ml-12 z-10 opacity-30 text-black dark:text-black md:text-gray-200 md:dark:text-[#7b7b7b]">
          {post.title}
        </h1>
        <h1 className="font-bold sm:text-5xl text-4xl relative mt-3 z-10 ml-6 text-white md:text-black md:dark:text-white">
          {post.title}
        </h1>

        <div className="absolute h-index w-full z-0 md:z-10 md:h-index-image md:w-3/5 md:right-0">
          <CoreImage
            image={post.image.large}
            title={post.title}
            placeholder={post.image.placeholder}
          />
        </div>
      </div>

      <Information title="Informationen für den Gottesdienst" type="neutral">
        <p>
          Unsere Gottesdienste können ohne Zertifikat besucht werden. Wir führen
          Anwesenheitslisten und übertragen den Gottesdienst via Livestream in
          einen zweiten Raum, wenn der Hauptsaal mit den erlaubten 50 Besuchern
          gefüllt ist. Bei uns sind alle herzlich willkommen!
        </p>
        <a
          href="https://feg-gossau.ch/wp-content/uploads/2021/09/Schutzkonzept-Gottesdienste-ab-13.09.2021.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="mt-4">Schutzkonzept</Button>
        </a>
      </Information>

      <Presented posts={presented} title="Schnellzugriff" />

      <div className="max-w-2xl mx-auto md:mt-12 mt-4">
        <div
          className="content dark:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const post = await getPost({ type: 'pages', slug: 'Willkommen' })

  const presented = await getPresented()

  return {
    props: {
      post,
      presented
    },
    revalidate: 10
  }
}

async function getPresented(): Promise<Post[]> {
  const presented = []

  const latestSermon = await getPosts({ type: 'predigten', amount: 1 })
  const latestNews = await getPosts({ type: 'news', amount: 1 })

  if (latestNews?.[0]) {
    if (latestSermon[0]?.timestamp > latestNews[0]?.timestamp) {
      presented.push(latestSermon[0])
    } else {
      presented.push(latestNews[0])
    }
  } else {
    presented.push(latestSermon[0])
  }

  const jungschar = await getPost({
    type: 'pages',
    slug: ['treffpunkte', 'jungschar']
  })
  if (jungschar) {
    presented.push(jungschar)
  }

  const contact = await getPost({ type: 'pages', slug: ['ueber', 'kontakt'] })
  if (contact) {
    presented.push(contact)
  }

  return presented
}
