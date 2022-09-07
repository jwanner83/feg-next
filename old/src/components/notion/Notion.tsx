import { NotionBlockType } from '@/services/notion/types/notion.types'
import NotionBlock from '@/components/notion/NotionBlock'

type NotionParams = {
  blocks: NotionBlockType[]
}

export default function Notion ({ blocks }: NotionParams) {
  const rendered = blocks?.map(block =>
    <NotionBlock key={JSON.stringify(block)} block={block} />
  )

  return <>
    {rendered}
  </>
}