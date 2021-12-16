import { Post } from '@/api/endpoints/post/post.types'
import Link from 'next/link'
import Image from 'next/image'

type PresentedItemParams = {
  item: Post
}

export default function PresentedItem({ item }: PresentedItemParams) {
  return (
    <Link href={`${item.type}/${item.slug}`} passHref>
      <a className="bg-gray-100 h-56 relative">
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
          <Image
            src={item.image.thumbnail}
            alt={item.title}
            layout="fill"
            className="object-cover"
          />
        </div>
      </a>
    </Link>
  )
}
