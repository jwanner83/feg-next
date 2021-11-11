import { Post, RawPost } from '@/api/endpoints/post.types'
import { dateService } from './DateService'
import { imageService } from './ImageService'

class PostService {
  getPost(raw: RawPost): Post {
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

export const postService = new PostService()
