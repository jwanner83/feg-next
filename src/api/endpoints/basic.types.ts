export interface Image {
  thumbnail: string
  large: string
}

export interface _embedded {
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
    medium: RawImage
    large: RawImage
    thumbnail: RawImage
    medium_large: RawImage
    ['1536x1536']: RawImage
    ['2048x2048']: RawImage
    ['post-thumbnail']: RawImage
  }
}

interface RawImage {
  file: string
  width: number
  height: number
  mime_type: string
  source_url: string
}

export interface rendered {
  rendered: string
}
