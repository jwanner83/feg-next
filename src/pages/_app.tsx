import 'tailwindcss/tailwind.css'
import '@/styles/content.scss'
import '@/styles/post.scss'

import { useEffect, useState } from 'react'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import CoreLayout from '@/components/core/CoreLayout'
import { getMenu } from '@/api/endpoints/menu/menu'
import { Menu } from '@/api/endpoints/menu/menu.types'

export default function App({ Component, pageProps }) {
  const [menus, setMenus] = useState(null as null | Menu[])

  const fetch = async () => {
    if (!menus) {
      setMenus(await getMenu({}))
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      LogRocket.init('aplimj/feg-next')
      setupLogRocketReact(LogRocket)
    }
  })

  fetch()

  return (
    <div className="min-h-screen dark:bg-dark">
      <CoreLayout menus={menus}>
        <Component {...pageProps} />
      </CoreLayout>
    </div>
  )
}
