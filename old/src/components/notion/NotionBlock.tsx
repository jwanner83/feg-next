import { NotionBlockType } from '@/services/notion/types/notion.types'
import { useDetermineComponent } from '@/services/notion/hooks/components'

type NotionBlockParams = {
  block: NotionBlockType
}

export default function NotionBlock ({ block }: NotionBlockParams) {
  const { Component } = useDetermineComponent({ template: block.type });

  return <Component block={block} />
}