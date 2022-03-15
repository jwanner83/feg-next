import { getMenu } from '@/api/static/endpoints/menu/menu'
import { Menu } from '@/api/static/endpoints/menu/menu.types'
import AdminInterface from '@/components/admin/interface/AdminInterface'
import CoreLayout from '@/components/content/core/CoreLayout'
import Logo from '@/components/content/svg/Logo'
import '@/styles/import.scss'
import { Box, MantineProvider } from '@mantine/core'
import dayjs from 'dayjs'
import 'dayjs/locale/de-ch'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import 'tailwindcss/tailwind.css'

dayjs.locale('de-ch')

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
    <MantineProvider>
      <AdminInterface
        header={
          <Box sx={{ height: '40px' }}>
            <Logo />
          </Box>
        }
      >
        <div className="min-h-screen dark:bg-dark">
          <CoreLayout menus={menus}>
            <Component {...pageProps} />
          </CoreLayout>
        </div>
      </AdminInterface>
    </MantineProvider>
  )
}
