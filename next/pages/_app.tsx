import '@/styles/import.scss'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen dark:bg-dark">
      <Component {...pageProps} />
    </div>
  )
}
