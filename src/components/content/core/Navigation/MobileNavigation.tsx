import { Menu } from '@/api/static/endpoints/menu/menu.types'
import CoreTheme from '@/components/content/core/CoreTheme'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NavigationParams } from './navigation.types'

export default function MobileNavigation({ menus }: NavigationParams) {
  const router = useRouter()

  const [state, setState] = useState('')

  const navigationItems = menus?.map((menu: Menu) => (
    <div key={menu.ID}>
      <Link href={`/${menu.slug}`} passHref={true}>
        <a className="font-bold text-5xl dark:text-white">{menu.title}</a>
      </Link>
    </div>
  ))

  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [state])

  useEffect(() => {
    setState('')
  }, [router.query])

  return (
    <div className="flex gap-8 z-40">
      <button
        className={`hamburger hamburger--collapse z-40 ${state}`}
        type="button"
        onClick={() => setState(state ? '' : 'is-active')}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div
        className={`${
          state ? 'h-screen' : 'h-0'
        } w-screen fixed top-0 left-0 bg-white dark:bg-dark z-30 flex flex-col gap-2 overflow-y-hidden transition-height duration-300`}
      >
        <div className="pt-32 px-8 z-50">{navigationItems}</div>

        <div className="absolute w-full h-36 bottom-0 flex justify-center">
          <CoreTheme />
        </div>
      </div>
    </div>
  )
}
