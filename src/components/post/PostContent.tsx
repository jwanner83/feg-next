import { Post } from '@/api/endpoints/post/post.types'

type PostContentParams = {
  post: Post
}

export default function PostContent({ post }: PostContentParams) {
  return (
    <div className="content max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </div>
  )
}
