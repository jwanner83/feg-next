import { request } from '@/api/static/request'
import { postService } from '@/services/content/post/PostService'
import {
  getPostCountParams,
  getPostParams,
  getPostsParams,
  Post,
  RawPost
} from './post.types'

export async function getPostCount({
  type
}: getPostCountParams): Promise<Number> {
  const { headers } = await request<RawPost[]>(type.toLowerCase(), {
    params: {
      per_page: '1'
    }
  })

  return Number(headers.get('x-wp-total'))
}

export async function getPosts({
  type,
  amount = 10,
  page = 1
}: getPostsParams): Promise<Post[] | null> {
  const { data } = await request<RawPost[]>(type.toLowerCase(), {
    params: {
      _embed: '',
      page: String(page),
      per_page: String(amount)
    }
  })

  if (data && data.length > 0) {
    const posts = []

    for (const post of data) {
      posts.push(await postService.getPost(post))
    }

    return posts
  }

  return null
}

export async function getPost({ type, slug }: getPostParams): Promise<Post> {
  const { data } = await request<RawPost[]>(type.toLowerCase(), {
    params: {
      _embed: '',
      slug: slug.toString()
    }
  })

  if (data && data.length > 0) {
    return postService.getPost(data[0])
  }

  return null
}
