import { NotionBlockType } from '@/services/notion/types/notion.types'

export enum ComponentTypes {
  'default' = 'default',
  'paragraph' = 'paragraph',
  'video' = 'video'
}

export interface DynamicComponentParams {
  block: NotionBlockType
}