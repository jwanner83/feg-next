import { ComponentTypes } from '@/services/notion/types/component.types'
import { NotionRichText } from '@/api/static/notion/post.types'

export interface NotionBlockType {
  type: ComponentTypes
  paragraph?: {
    'rich_text': NotionRichText[]
  },
  video?: {
    caption?: NotionRichText[],
    type: 'external' | 'internal',
    external: {
      url: string
    }
  }
}

