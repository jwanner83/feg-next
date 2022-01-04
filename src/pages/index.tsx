import { useActiveSeremon } from '@/api/dynamic/endpoints/seremons/seremons'
import { getPost, getPosts } from '@/api/static/endpoints/post/post'
import { Post } from '@/api/static/endpoints/post/post.types'
import Button from '@/components/core/basic/Button'
import CoreImage from '@/components/core/CoreImage'
import Information from '@/components/information/Information'
import Presented from '@/components/presented/Presented'
import dayjs from 'dayjs'
import Head from 'next/head'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

type IndexParams = {
  post: Post
  presented: Post[]
  latestSermon: Post
}

export default function Index({ post, presented, latestSermon }: IndexParams) {
  const { seremon } = useActiveSeremon()

  return (
    <>
      <Head>
        <title>FEG Gossau - Die Freie Evangelische Gemeinde in Gossau</title>
      </Head>

      <div className="h-mobile-index min-h-[380px] md:min-h-[450px] flex items-center relative md:static md:h-index">
        <h1 className="top-0 -mt-9 sm:mt-3 md:top-auto md:-mt-36 md:opacity-50 font-bold text-huge absolute -ml-12 z-10 opacity-30 text-black dark:text-black md:text-gray-200 md:dark:text-[#7b7b7b]">
          {post.title}
        </h1>

        <div className="z-20 relative h-full flex flex-col justify-between w-full p-8 sm:p-12 md:p-0 md:mt-3 md:ml-6 md:h-auto">
          <h1 className="mt-8 sm:mt-14 md:mt-0 font-bold sm:text-5xl text-4xl relative z-10 text-white md:text-black md:dark:text-white">
            {post.title}
          </h1>

          <div>
            <h2 className="font-bold text-white md:text-black md:dark:text-white mb-1 mt-4 text-shadow">
              {seremon?.summary || <Skeleton width="150px" />}
            </h2>
            <p className="italic mb-8 sm:mb-4 text-gray-200 md:text-gray-600 md:dark:text-gray-200 text-shadow">
              {seremon ? (
                dayjs(seremon.start.dateTime).format('DD.MM.YYYY, hh:mm')
              ) : (
                <Skeleton width="170px" />
              )}
            </p>

            <Link href="/kontakt" passHref={true}>
              <a>
                <Button
                  className="w-full mb-2 sm:mb-0 sm:w-auto sm:mr-3 text-shadow"
                  background="bg-white bg-opacity-20 text-white sm:bg-gray-200 sm:text-black sm:hover:bg-black sm:hover:bg-black sm:hover:text-white"
                >
                  Anfahrt
                </Button>
              </a>
            </Link>
            <Link
              href={`/${latestSermon.type}/${latestSermon.slug}`}
              passHref={true}
            >
              <a>
                <Button
                  className="w-full sm:w-auto text-shadow"
                  background="bg-white bg-opacity-20 text-white sm:bg-gray-200 sm:text-black sm:hover:bg-black sm:hover:bg-black sm:hover:text-white"
                >
                  Letzte Predigt
                </Button>
              </a>
            </Link>
          </div>
        </div>

        <div className="absolute h-mobile-index min-h-[380px] md:min-h-[450px] w-full z-0 md:z-10 md:h-index-image md:w-3/5 md:right-0">
          <div className="h-full w-full">
            <CoreImage
              image={post.image.large}
              title={post.title}
              placeholder={post.image.placeholder}
            />
          </div>
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

  const { presented, latestSermon } = await getPresented()

  return {
    props: {
      post,
      presented,
      latestSermon
    },
    revalidate: 10
  }
}

async function getPresented(): Promise<{
  presented: Post[]
  latestSermon: Post
}> {
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

  return {
    presented,
    latestSermon: latestSermon[0]
  }
}
