import { MouseEventHandler, ReactNode } from 'react'

type ButtonParams = {
  children: ReactNode
  className?: string
  onClick?: () => MouseEventHandler
}

export default function Button({ children, className, onClick }: ButtonParams) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-4 uppercase font-bold bg-gray-200 ${className} transition-colors hover:bg-black hover:text-white`}
    >
      {children}
    </button>
  )
}
