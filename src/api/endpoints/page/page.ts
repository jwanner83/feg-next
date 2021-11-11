import { request } from '@/api/request'
import { pageService } from '@/services/PageService'
import { getPageParams, Page, RawPage } from './page.types'

export async function getPages() {
  const pages: RawPage[] = await request('pages', {
    params: {
      _embed: ''
    }
  })

  if (pages && pages.length > 0) {
    return pages.map((page) => pageService.getPage(page))
  }

  return null
}

export async function getPage({ slug }: getPageParams): Promise<Page> {
  const post: RawPage[] = await request('pages', {
    params: {
      _embed: '',
      slug
    }
  })

  if (post && post.length > 0) {
    return pageService.getPage(post[0])
  }

  return null
}
