import { Post } from '@/api/post/PostEndpoints.types'

type PostContentParams = {
  post: Post
}

export default function PostContent({ post }: PostContentParams) {
  return (
    <div className="post max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} />
    </div>
  )
}
