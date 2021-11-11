import { Image, rendered, _embedded } from '@/api/endpoints/basic.types'

export interface getPageParams {
  slug: string
}

export interface Page {
  id: number
  slug: string
  title: string
  content: string
  excerpt: string
  formattedDate: string
  image: Image
}

export interface RawPage {
  id: number
  title: rendered
  excerpt: rendered
  content: rendered
  link: string
  slug: string
  date: string
  _embedded: _embedded
}
