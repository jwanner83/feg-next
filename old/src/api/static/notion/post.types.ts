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
    title: NotionRichText[]
  }
  Slug: {
    'rich_text': NotionRichText[]
  }
  Speaker?: {
    'rich_text': NotionRichText[]
  }
}

export interface NotionRichText {
  'plain_text': string
}
