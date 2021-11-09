import { Post } from '../../api/post/PostEndpoints.types'
import Image from 'next/image'
import Link from 'next/link'

type ArchiveItemParams = {
  item: Post
  base: string
}

export default function ArchiveItem({ item, base }: ArchiveItemParams) {
  const image =
    item._embedded['wp:featuredmedia'][0].media_details.sizes['post-thumbnail']
      .source_url

  const rawDate = new Date(item?.date)
  const date = `${rawDate?.getDate()}.${rawDate?.getMonth()}.${rawDate.getFullYear()}`

  return (
    <Link href={`${base}/${encodeURIComponent(item.slug)}`} passHref={true}>
      <a>
        <div className="grid md:grid-cols-archive grid-cols-1 md:gap-10 gap-6">
          <div className="bg-gray-100 h-72 relative">
            {image && (
              <Image
                src={image}
                alt={item.title.rendered}
                layout="fill"
                className="object-cover"
              />
            )}
          </div>
          <div className="flex justify-center flex-col">
            <h2 className="font-bold">{item.title.rendered}</h2>
            <p className="italic mt-4 text-gray-800">{date}</p>
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
            ></div>
          </div>
        </div>
      </a>
    </Link>
  )
}
