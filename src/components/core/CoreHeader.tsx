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
        <a>
          <Image
            src="/images/feg-logo.png"
            height={60}
            width={60}
            alt="feg logo"
            className="cursor-pointer"
          />
        </a>
      </Link>

      <div className="flex gap-8">{navigationItems}</div>
    </div>
  )
}
