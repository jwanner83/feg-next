import { request } from '@/api/request'
import { pageService } from '@/services/PageService'
import { getPageParams, Page, RawPage } from './page.types'

export async function getPage({ slug }: getPageParams): Promise<Page> {
  const post: RawPage[] = await request('pages', {
    params: {
      _embed: '',
      slug
    }
  })

  if (post && post.length > 0) {
    return pageService.getPost(post[0])
  }

  return null
}
