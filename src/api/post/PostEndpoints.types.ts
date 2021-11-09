export interface GetPostParams {
  slug: string
  type: string
}

export interface Post {
  id: number
  title: rendered
  excerpt: rendered
  content: rendered
  link: string
  slug: string
  date: string
  _embedded: _embedded
}

interface _embedded {
  ['wp:featuredmedia']: featuredmedia[]
}

interface featuredmedia {
  id: number
  slug: string
  title: rendered
  media_details: mediaDetails
}

interface mediaDetails {
  file: string
  sizes: {
    medium: Image
    large: Image
    thumbnail: Image
    medium_large: Image
    ['1536x1536']: Image
    ['2048x2048']: Image
    ['post-thumbnail']: Image
  }
}

interface Image {
  file: string
  width: number
  height: number
  mime_type: string
  source_url: string
}

interface rendered {
  rendered: string
}
