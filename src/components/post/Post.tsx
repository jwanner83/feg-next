import { Post } from '@/api/endpoints/post.types'
import React from 'react'
import PostContent from './PostContent'
import PostTitle from './PostTitle'

type PostParams = {
  post: Post
}

export default function Archive({ post }: PostParams) {
  return (
    <>
      <PostTitle
        title={post?.title}
        image={post?.image?.large}
        date={post?.formattedDate}
      />
      <PostContent post={post} />
    </>
  )
}
