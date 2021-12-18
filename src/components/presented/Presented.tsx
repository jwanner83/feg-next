import { getPosts } from '@/api/endpoints/post/post'
import { Post } from '@/api/endpoints/post/post.types'
import { useEffect, useState } from 'react'
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
    <div className="mt-16 mb-24">
      <div className="flex justify-center relative mb-6">
        <div className="border-b border-solid border-black w-full absolute dark:border-white"></div>
        <h2 className="text-center text-3xl font-bold -mt-7 mb-8 bg-white relative px-10 dark:text-white dark:bg-dark">
          {title}
        </h2>
      </div>

      <div className="w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-8 md:grid md:grid-cols-3">
        {items}
      </div>
    </div>
  )
}
