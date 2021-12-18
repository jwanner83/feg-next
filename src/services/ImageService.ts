import { Image, _embedded } from '@/api/endpoints/basic.types'
import { getPlaiceholder } from 'plaiceholder'

class ImageService {
  async getImage(_embedded: _embedded | undefined): Promise<Image> {
    const sizes = _embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes

    if (sizes) {
      const image: Image = {
        thumbnail: sizes?.medium_large?.source_url || null,
        large: sizes?.large?.source_url || null
      }

      if (image.large || image.thumbnail) {
        const { blurhash } = await getPlaiceholder(
          image.large || image.thumbnail,
          {
            size: 32
          }
        )

        image.placeholder = blurhash
      }

      return image
    }

    return undefined
  }
}

export const imageService = new ImageService()
