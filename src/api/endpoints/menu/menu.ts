import { request } from '@/api/request'
import { getMenuParams, Menu, MenuResponse } from './menu.types'

export async function getMenu({
  type = 'default'
}: getMenuParams): Promise<Menu[] | null> {
  const menus = []

  menus.push(createMenuItem('Predigten', 'predigten'))
  menus.push(createMenuItem('News', 'news'))
  menus.push(createMenuItem('Agenda', 'agenda'))
  menus.push(createMenuItem('Kontakt', 'kontakt'))

  return menus
}

function createMenuItem(title: string, slug: string): Menu {
  return {
    title,
    slug,
    ID: Math.random() * (10000 - 0) + 0
  }
}

async function getMenuThroughRest({
  type
}: getMenuParams): Promise<Menu[] | null> {
  const { data } = await request<MenuResponse>(type.toLowerCase(), {
    base: 'menus/v1/menus/'
  })

  if (data?.items?.length > 0) {
    return data.items
  }

  return null
}
