import { ReactNode } from 'react'
import PostTitle from './PostTitle'

type PostContainerParams = {
  title: string
  image: string
  date: string
  children: ReactNode
}

export default function PostContainer({
  title,
  image,
  date,
  children
}: PostContainerParams) {
  return (
    <>
      <PostTitle title={title} date={date} image={image} />
      <div>{children}</div>
    </>
  )
}
