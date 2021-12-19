import { Post, RawPost } from '@/api/endpoints/post/post.types'
import { dateService } from './DateService'
import { imageService } from './ImageService'

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
