import { Menu } from '@/api/endpoints/menu/menu.types'
import { NavigationItem } from '@/components/navigation/NavigationItem'
import Image from 'next/image'
import Link from 'next/link'

type CoreHeaderParams = {
  menus?: Menu[] | null
}

export default function CoreHeader({ menus }: CoreHeaderParams) {
  const navigationItems = menus?.map((menu: Menu) => (
    <NavigationItem key={menu.ID} item={menu} />
  ))

  return (
    <div className="flex justify-between items-center w-full mb-8">
      <Link href="/" passHref={true}>
        <a className="h-[64px]"> 
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" viewBox="0 0 512 512">
            <g><path fill="#d9241c" d="M -0.5,-0.5 C 60.1667,-0.5 120.833,-0.5 181.5,-0.5C 181.829,59.5416 181.496,119.542 180.5,179.5C 179.975,180.192 179.308,180.692 178.5,181C 118.834,181.5 59.1676,181.667 -0.5,181.5C -0.5,120.833 -0.5,60.1667 -0.5,-0.5 Z"/></g>
            <g><path fill="#d9241c" d="M 330.5,-0.5 C 390.833,-0.5 451.167,-0.5 511.5,-0.5C 511.5,60.1667 511.5,120.833 511.5,181.5C 451.458,181.829 391.458,181.496 331.5,180.5C 330.5,120.17 330.167,59.837 330.5,-0.5 Z"/></g>
            <g><path fill="#da241c" d="M -0.5,330.5 C 59.8333,330.5 120.167,330.5 180.5,330.5C 181.485,390.811 181.818,451.144 181.5,511.5C 120.833,511.5 60.1667,511.5 -0.5,511.5C -0.5,451.167 -0.5,390.833 -0.5,330.5 Z"/></g>
          </svg>
        </a>
      </Link>

      <div className="flex gap-8">{navigationItems}</div>
    </div>
  )
}
