export interface getMenuParams {
  type?: string
}

export interface MenuResponse {
  name: string
  items: Menu[]
}

export interface Menu {
  ID: number
  title: string
  slug: string
}
