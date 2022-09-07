import { request } from '@/api/static/request'
import { getMenuParams, Menu } from '@/api/static/endpoints/menu/menu.types'

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
    slug
  }
}
