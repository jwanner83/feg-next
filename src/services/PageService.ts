import { Page, RawPage } from '@/api/endpoints/page/page.types'
import { dateService } from './DateService'
import { imageService } from './ImageService'

class PageService {
  getPage(raw: RawPage): Page {
    return {
      id: raw.id,
      slug: raw.slug,
      title: raw.title.rendered,
      content: raw.content.rendered,
      excerpt: raw.excerpt.rendered,
      formattedDate: dateService.getFormattedDate(new Date(raw.date)),
      image: imageService.getImage(raw._embedded)
    }
  }
}

export const pageService = new PageService()
