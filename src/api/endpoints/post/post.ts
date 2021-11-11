import { request } from '@/api/request'
import { postService } from '@/services/PostService'
import { getPostParams, getPostsParams, Post, RawPost } from './post.types'

export async function getPosts({ type }: getPostsParams) {
  const posts: RawPost[] = await request(type, {
    params: {
      _embed: ''
    }
  })

  if (posts && posts.length > 0) {
    return posts.map((post) => postService.getPost(post))
  }

  return null
}

export async function getPost({ type, slug }: getPostParams): Promise<Post> {
  const post: RawPost[] = await request(type, {
    params: {
      _embed: '',
      slug
    }
  })

  if (post && post.length > 0) {
    return postService.getPost(post[0])
  }

  return null
}
