type ArchiveTitleParams = {
  title: string
}

export default function ArchiveTitle({ title }) {
  return (
    <div className="flex justify-center items-center py-56">
      <h1 className="font-bold dark:text-white">{title}</h1>
    </div>
  )
}
