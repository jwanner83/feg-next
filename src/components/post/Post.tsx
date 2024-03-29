import { Post } from '@/api/static/endpoints/post/post.types'
import React from 'react'
import PostContent from './PostContent'
import PostTitle from './PostTitle'

type PostComponentParams = {
  post: Post
}

export default function PostComponent({ post }: PostComponentParams) {
  return (
    <>
      <PostTitle
        title={post?.title}
        image={post?.image?.large}
        placeholder={post?.image?.placeholder}
        date={post?.formattedDate}
      />
      <PostContent post={post} />
    </>
  )
}
