import { Post, RawPost } from '@/api/static/endpoints/post/post.types'
import { dateService } from '../date/DateService'
import { imageService } from '../image/ImageService'

class PostService {
  async getPost(raw: RawPost): Promise<Post> {
    return {
      id: raw.id,
      slug: raw.slug,
      title: raw.title.rendered,
      content: raw.content.rendered,
      excerpt: raw.excerpt.rendered,
      timestamp: new Date(raw.date).getTime(),
      formattedDate: dateService.getFormattedDate(new Date(raw.date)),
      image: (await imageService.getImage(raw._embedded)) || null,
      type: raw.type
    }
  }
}

export const postService = new PostService()
