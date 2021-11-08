import 'tailwindcss/tailwind.css'
import '../styles/post.scss'

import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import CoreLayout from '../components/core/CoreLayout'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      LogRocket.init('aplimj/feg-next');
      setupLogRocketReact(LogRocket);
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <CoreLayout>
          <Component {...pageProps} />
        </CoreLayout>
      </div>
    </QueryClientProvider>
  )
}
