import { ReactNode } from 'react'
import CoreFooter from './CoreFooter'
import CoreHeader from './CoreHeader'

type CoreLayoutParams = {
  children: ReactNode
}

export default function CoreLayout({ children }) {
  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden">
        <div className="max-w-6xl p-8 w-full relative">
          <CoreHeader />
          {children}
        </div>
      </div>
      <CoreFooter />
    </>
  )
}
