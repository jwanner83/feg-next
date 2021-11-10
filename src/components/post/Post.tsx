import { Post } from '@/api/post/PostEndpoints.types'
import React from 'react'
import PostContent from './PostContent'
import PostTitle from './PostTitle'

type PostParams = {
  post: Post
}

export default function Archive({ post }: PostParams) {
  const image =
    post?._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url

  const rawDate = new Date(post?.date)
  const date = `${rawDate?.getDate()}.${rawDate?.getMonth()}.${rawDate.getFullYear()}`

  return (
    <>
      <PostTitle title={post?.title?.rendered} image={image} date={date} />
      <PostContent post={post} />
    </>
  )
}
