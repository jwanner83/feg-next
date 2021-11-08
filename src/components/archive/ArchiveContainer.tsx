import { ReactNode } from 'react'
import ArchiveTitle from './ArchiveTitle'

type ArchiveContainerParams = {
  title: string
  children: ReactNode
}

export default function ArchiveContainer({
  title,
  children
}: ArchiveContainerParams) {
  return (
    <div className="">
      <ArchiveTitle title={title} />

      <div>{children}</div>
    </div>
  )
}
