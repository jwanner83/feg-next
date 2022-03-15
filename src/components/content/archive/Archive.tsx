import { Post } from '@/api/static/endpoints/post/post.types'
import ArchiveItem from './ArchiveItem'
import ArchivePagination from './ArchivePagination'
import ArchiveTitle from './ArchiveTitle'

type ArchvieParams = {
  title: string
  posts: Post[]
  page?: number
  pages: number
}

export default function Archive({
  title,
  posts,
  page = 1,
  pages
}: ArchvieParams) {
  const items = posts?.map((predigt: Post) => {
    return (
      <ArchiveItem key={predigt.id} item={predigt} base={title.toLowerCase()} />
    )
  })

  return (
    <>
      <ArchiveTitle title={title} />

      <div className="flex flex-col gap-16 mb-20">{items}</div>

      <ArchivePagination type={title} page={page} pages={pages} />
    </>
  )
}
