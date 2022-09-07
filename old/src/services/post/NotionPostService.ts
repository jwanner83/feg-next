import { Post } from '@/api/static/endpoints/post/post.types'
import { NotionPage, NotionPageProperties } from '@/api/static/notion/post.types'
import { NotionNormalizedPost } from '@/api/static/endpoints/post/normalized.post.types'

class NotionPostService {
  getPost(page: NotionPage<NotionPageProperties>): NotionNormalizedPost {
    return {
      id: page.id,
      slug: page.properties.Slug.rich_text[0].plain_text,
      title: page.properties.Name.title[0].plain_text,
      cover: page.cover
    }
  }
}

export const notionPostService = new NotionPostService()
