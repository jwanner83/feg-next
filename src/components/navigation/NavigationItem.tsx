import { Menu } from '@/api/static/endpoints/menu/menu.types'
import Link from 'next/link'

type NavigationItemParams = {
  item: Menu
}

export function NavigationItem({ item }: NavigationItemParams) {
  return (
    <Link href={`/${item.slug}`} passHref={true}>
      <a className="font-bold dark:text-white">{item.title}</a>
    </Link>
  )
}
