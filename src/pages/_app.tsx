import { getMenu } from '@/api/endpoints/menu/menu'
import { Menu } from '@/api/endpoints/menu/menu.types'
import CoreLayout from '@/components/core/CoreLayout'
import '@/styles/content.scss'
import '@/styles/post.scss'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'

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
