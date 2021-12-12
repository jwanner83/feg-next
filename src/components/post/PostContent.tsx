import { Post } from '@/api/endpoints/post/post.types'

type PostContentParams = {
  post: Post
}

export default function PostContent({ post }: PostContentParams) {
  return (
    <div className="content post max-w-2xl mx-auto mb-10 dark:text-white">
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </div>
  )
}
