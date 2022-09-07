import { NotionCover } from '@/api/static/notion/post.types'

export interface NotionNormalizedPost {
  id: string
  slug: string
  title: string
  cover: NotionCover
}