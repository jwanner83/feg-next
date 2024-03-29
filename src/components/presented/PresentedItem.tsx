import { Post } from '@/api/static/endpoints/post/post.types'
import CoreImage from '@/components/core/CoreImage'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type PresentedItemParams = {
  item: Post
}

export default function PresentedItem({ item }: PresentedItemParams) {
  const isPage = item.type === 'page'
  const type = isPage ? 'SEITE' : item.type.toUpperCase()

  const [excerpt, setExcerpt] = useState('')
  const [link] = useState(isPage ? item.slug : [item.type, item.slug].join('/'))

  useEffect(() => {
    setExcerpt(item.excerpt.replace(/<[^>]+>/g, ''))
  }, [])

  return (
    <Link href={`/${link}`} passHref>
      <a className="h-56 w-full sm:w-9/12 md:w-full relative snap-center shrink-0">
        <div className="absolute h-full w-full top-0 z-10 flex flex-col justify-end bg-gradient-to-tr from-black to-transparent px-8 py-7">
          <div>
            <div className="text-black text-sm font-bold bg-white py-[2px] px-[7px] mb-3 inline-block">
              {type}
            </div>
          </div>{' '}
          <h2 className="z-2 text-white font-bold">{item.title}</h2>
          <>
            {excerpt ? (
              <p className="italic text-gray-100 mt-3 truncate line-clamp-2 whitespace-normal">
                {excerpt}
              </p>
            ) : (
              <p className="italic text-gray-100 mt-3">Mehr erfahren ...</p>
            )}
          </>
        </div>

        <div className="absolute h-full w-full top-0">
          {item.image && (
            <CoreImage
              image={item.image?.thumbnail}
              title={item.title}
              placeholder={item.image.placeholder}
            />
          )}
        </div>
      </a>
    </Link>
  )
}
