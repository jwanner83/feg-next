import { Image, _embedded } from '@/api/endpoints/basic.types'

class ImageService {
  getImage(_embedded: _embedded | undefined): Image {
    const sizes = _embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes

    if (sizes) {
      return {
        thumbnail: sizes?.medium_large?.source_url || null,
        large: sizes?.large?.source_url || null
      }
    }

    return undefined
  }
}

export const imageService = new ImageService()
