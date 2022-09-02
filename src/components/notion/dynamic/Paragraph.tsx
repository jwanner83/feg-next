import { DynamicComponentParams } from '@/services/notion/types/component.types'

export default function Paragraph ({block}: DynamicComponentParams) {
  return <p className="mb-3">{block.paragraph.rich_text[0]?.plain_text}</p>
}