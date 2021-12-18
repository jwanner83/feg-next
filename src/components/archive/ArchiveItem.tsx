import { Post } from '@/api/endpoints/post/post.types'
import Image from 'next/image'
import Link from 'next/link'
import { BlurhashCanvas } from 'react-blurhash'
import { CoreImage } from '@/components/core/CoreImage'

type ArchiveItemParams = {
  item: Post
  base: string
}

export default function ArchiveItem({ item, base }: ArchiveItemParams) {
  return (
    <Link href={`/${base}/${encodeURIComponent(item.slug)}`} passHref={true}>
      <a>
        <div className="grid md:grid-cols-archive grid-cols-1 md:gap-10 gap-6">
          <div className="bg-gray-100 h-72 relative">
            {item.image?.thumbnail && (
              <CoreImage
                image={item.image.thumbnail}
                title={item.title}
                placeholder={item.image.placeholder}
              />
            )}
          </div>
          <div className="flex justify-center flex-col">
            <h2 className="font-bold dark:text-white">{item.title}</h2>
            <p className="italic mt-4 text-gray-800 dark:text-gray-300">
              {item.formattedDate}
            </p>
            <div
              className="mt-4 dark:text-white"
              dangerouslySetInnerHTML={{ __html: item.excerpt }}
            ></div>
          </div>
        </div>
      </a>
    </Link>
  )
}
