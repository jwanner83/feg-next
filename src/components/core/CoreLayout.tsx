import { Menu } from '@/api/static/endpoints/menu/menu.types'
import { ReactNode } from 'react'
import CoreFooter from './CoreFooter'
import CoreHeader from './CoreHeader'

type CoreLayoutParams = {
  children: ReactNode
  menus?: Menu[] | null
}

export default function CoreLayout({ children, menus }) {
  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden">
        <div className="max-w-6xl p-8 w-full relative">
          <CoreHeader menus={menus} />
          {children}
        </div>
      </div>
      <CoreFooter />
    </>
  )
}
