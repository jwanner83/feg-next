import { Image, rendered, _embedded } from '@/api/endpoints/basic.types'

export interface getPostsParams {
  type: string
}

export interface getPostParams {
  type: string
  slug: string
}

export interface Post {
  id: number
  slug: string
  title: string
  content: string
  excerpt: string
  formattedDate: string
  image: Image
}

export interface RawPost {
  id: number
  title: rendered
  excerpt: rendered
  content: rendered
  link: string
  slug: string
  date: string
  _embedded: _embedded
}
