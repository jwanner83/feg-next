import { Client } from '@notionhq/client'
import { NotionList, NotionPage, NotionPageProperties } from '@/api/static/notion/post.types'
import { NotionNormalizedPost } from '@/api/static/endpoints/post/normalized.post.types'
import { notionPostService } from '@/services/post/NotionPostService'
import { NotionBlockType } from '@/services/notion/types/notion.types'

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_CLIENT
})

export async function getPages() {
  const database = await notion.databases.query({
    database_id: 'a40c463f3c4e414d9279aa74c26f1a20'
  }) as unknown as NotionList<NotionPage<NotionPageProperties>>

  const pages: NotionNormalizedPost[] = []

  for (const page of database.results) {
    pages.push(notionPostService.getPost(page))
  }

  return pages
}

export async function getPage(slug: string) {
  const database = await notion.databases.query({
    database_id: 'a40c463f3c4e414d9279aa74c26f1a20',
    filter: {
      property: 'Slug',
      rich_text: {
        contains: slug
      }
    }
  }) as unknown as NotionList<NotionPage<NotionPageProperties>>

  if (database.results.length > 0) {
    return notionPostService.getPost(database.results[0])
  }

  return null
}

export async function getBlocks(id: string) {
  const list = await notion.blocks.children.list({ block_id: id }) as NotionList<NotionBlockType>
  return list.results
}