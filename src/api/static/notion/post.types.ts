export interface NotionList<T> {
  results: T[]
}

export interface NotionPage<Properties> {
  id: string
  cover: NotionCover
  properties: Properties
}

export interface NotionCover {
  type: 'external' | 'internal'
  external?: {
    url: string
  }
}

export interface NotionPageProperties {
  Name: {
    title: NotionPagePropertyRichText[]
  }
  Slug: {
    'rich_text': NotionPagePropertyRichText[]
  }
  Speaker?: {
    'rich_text': NotionPagePropertyRichText[]
  }
}

interface NotionPagePropertyRichText {
  'plain_text': string
}
