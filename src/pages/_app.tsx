import 'tailwindcss/tailwind.css'
import '../styles/post.scss'

import { QueryClient, QueryClientProvider } from 'react-query'
import CoreLayout from '../components/core/CoreLayout'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
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
