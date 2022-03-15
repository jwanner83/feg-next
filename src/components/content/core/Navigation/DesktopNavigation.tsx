import { Menu } from '@/api/static/endpoints/menu/menu.types'
import CoreTheme from '@/components/content/core/CoreTheme'
import { NavigationItem } from '@/components/content/navigation/NavigationItem'
import { NavigationParams } from './navigation.types'

export default function DesktopNavigation({ menus }: NavigationParams) {
  const navigationItems = menus?.map((menu: Menu) => (
    <NavigationItem key={menu.ID} item={menu} />
  ))

  return (
    <div className="flex items-center gap-8">
      {navigationItems}
      <CoreTheme />
    </div>
  )
}
