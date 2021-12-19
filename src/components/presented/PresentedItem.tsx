import { Post } from '@/api/endpoints/post/post.types'
import CoreImage from '@/components/core/CoreImage'
import Link from 'next/link'

type PresentedItemParams = {
  item: Post
}

export default function PresentedItem({ item }: PresentedItemParams) {
  return (
    <Link href={`/${item.type}/${item.slug}`} passHref>
      <a className="h-56 w-full sm:w-9/12 md:w-full relative snap-center shrink-0">
        <div className="absolute h-full w-full top-0 z-10 flex flex-col justify-end bg-gradient-to-tr from-black to-transparent px-8 py-6">
          <div>
            <div className="text-black text-sm font-bold bg-white py-[2px] px-[7px] mb-3 inline-block">
              {item.type.toUpperCase()}
            </div>
          </div>{' '}
          <h2 className="z-2 text-white font-bold">{item.title}</h2>
          <p className="italic text-gray-100 mt-3">{item.formattedDate}</p>
        </div>

        <div className="absolute h-full w-full top-0">
          <CoreImage
            image={item.image.thumbnail}
            title={item.title}
            placeholder={item.image.placeholder}
          />
        </div>
      </a>
    </Link>
  )
}
