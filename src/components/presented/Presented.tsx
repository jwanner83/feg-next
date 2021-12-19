import { Post } from '@/api/endpoints/post/post.types'
import PresentedItem from './PresentedItem'

type PresentedParams = {
  posts: Post[]
  title?: string
  amount?: number
}

export default function Presented({
  posts,
  title = 'Vorgestellt',
  amount = 3
}: PresentedParams) {
  const items = posts.map((post: Post) => {
    return <PresentedItem key={post.id} item={post} />
  })

  return (
    <div className="mt-16 mb-12">
      <div className="flex justify-center relative md:mb-6 mb-0">
        <div className="border-b border-solid border-black w-full absolute dark:border-white"></div>
        <h2 className="text-center text-3xl font-bold -mt-12 md:-mt-7 mb-8 mx-24 md:ml-0 bg-white relative px-10 dark:text-white dark:bg-dark">
          {title}
        </h2>
      </div>

      <div className="w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-8 md:grid md:grid-cols-3">
        {items}
      </div>
    </div>
  )
}
