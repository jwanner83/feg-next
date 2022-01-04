import { MouseEventHandler, ReactNode, useEffect, useState } from 'react'

type ButtonParams = {
  children: ReactNode
  className?: string
  background?: string
  onClick?: () => MouseEventHandler
}

export default function Button({ children, className, background, onClick }: ButtonParams) {
  const [backgroundClasses, setBackgroundClasses] = useState('bg-gray-200 hover:bg-black hover:bg-black')

  useEffect(() => {
    if (background) {
      setBackgroundClasses(background)
    }  
  }, [background])
  return (
    <button
      onClick={onClick}
      className={`py-3 px-4 uppercase font-bold transition-colors ${backgroundClasses} ${className}`}
    >
      {children}
    </button>
  )
}
