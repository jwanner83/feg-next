import { Menu } from '@/api/endpoints/menu/menu.types'
import { NavigationItem } from '@/components/navigation/NavigationItem'
import { NavigationParams } from './navigation.types'

export default function DesktopNavigation({ menus }: NavigationParams) {
  const navigationItems = menus?.map((menu: Menu) => (
    <NavigationItem key={menu.ID} item={menu} />
  ))

  return <div className="flex gap-8">{navigationItems}</div>
}
