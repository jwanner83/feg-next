import { NotionBlockType } from '@/services/notion/types/notion.types'

export enum ComponentTypes {
  'default' = 'default',
  'paragraph' = 'paragraph',
  'video' = 'video',
  'image' = 'image'
}

export interface DynamicComponentParams {
  block: NotionBlockType
}