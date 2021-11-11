import { Post } from '@/api/endpoints/post.types'
import ArchiveItem from './ArchiveItem'
import ArchiveTitle from './ArchiveTitle'

type ArchvieParams = {
  title: string
  posts: Post[]
}

export default function Archive({ title, posts }: ArchvieParams) {
  const items = posts?.map((predigt: Post) => {
    return (
      <ArchiveItem key={predigt.id} item={predigt} base={title.toLowerCase()} />
    )
  })

  return (
    <>
      <ArchiveTitle title={title} />

      <div className="flex flex-col gap-16">{items}</div>
    </>
  )
}
