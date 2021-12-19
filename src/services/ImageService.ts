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
        try {
          const { base64 } = await getPlaiceholder(
            image.large || image.thumbnail,
            {
              size: 10
            }
          )

          image.placeholder = base64
        } catch (error) {
          console.error(
            'ImageService:getImage - failed to get placeholder',
            `image: ${image.large || image.thumbnail}`,
            `message: ${error.message}`
          )
        }
      }

      return image
    }

    return undefined
  }
}

export const imageService = new ImageService()
