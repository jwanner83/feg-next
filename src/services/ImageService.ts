import { Image, _embedded } from '@/api/endpoints/post.types'

class ImageService {
  getImage(_embedded: _embedded): Image {
    const sizes = _embedded['wp:featuredmedia']?.[0]?.media_details.sizes

    if (sizes) {
      return {
        thumbnail: sizes.medium_large.source_url,
        large: sizes.large.source_url
      }
    }

    return undefined
  }
}

export const imageService = new ImageService()
