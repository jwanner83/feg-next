import { ReactNode } from 'react'

type InforationParams = {
  title: string
  type: 'danger' | 'warn' | 'neutral'
  children: ReactNode
}

export default function Information({
  title,
  type,
  children
}: InforationParams) {
  let color = 'bg-info-neutral'

  switch (type) {
    case 'danger':
      color = 'bg-info-danger'
      break
    case 'warn':
      color = 'bg-info-warn'
      break
  }

  return (
    <div className="flex justify-center mt-8 mb-24">
      <div className={`max-w-2xl p-6 bg-info-${type} dark:bg-blue-300 dark:bg-opacity-20`}>
        <h3 className="font-bold mb-4 text-xl dark:text-white">{title}</h3>
        <div className="dark:text-white">{children}</div>
      </div>
    </div>
  )
}
