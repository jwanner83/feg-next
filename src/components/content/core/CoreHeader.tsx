import { Menu } from '@/api/static/endpoints/menu/menu.types'
import Logo from '@/components/content/svg/Logo'
import Link from 'next/link'
import DesktopNavigation from './Navigation/DesktopNavigation'
import MobileNavigation from './Navigation/MobileNavigation'

type CoreHeaderParams = {
  menus?: Menu[] | null
}

export default function CoreHeader({ menus }: CoreHeaderParams) {
  return (
    <div className="flex justify-between items-center w-full mb-8 relative z-40">
      <Link href="/" passHref={true}>
        <a className="h-[64px] z-40">
          <Logo />
        </a>
      </Link>

      <div className="hidden md:block">
        <DesktopNavigation menus={menus} />
      </div>
      <div className="md:hidden">
        <MobileNavigation menus={menus} />
      </div>
    </div>
  )
}
