import { Image, rendered, _embedded } from '@/api/endpoints/basic.types'

export interface getPostCountParams {
  type: string
}

export interface getPostsParams {
  type: string
  amount?: number
  page?: number
}

export interface getPostParams {
  type: string
  slug: string | string[]
}

export interface Post {
  id: number
  slug: string
  title: string
  content: string
  excerpt: string
  timestamp: number
  formattedDate: string
  image: Image
  type: string
}

export interface RawPost {
  id: number
  title: rendered
  excerpt: rendered
  content: rendered
  link: string
  slug: string
  date: string
  type: string
  _embedded: _embedded
}
