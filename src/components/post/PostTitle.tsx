type ArchiveTitleParams = {
  title: string
  image: string
}

export default function ArchiveTitle({ title, image }) {
  return (
    <div className="flex justify-center items-center py-56">
      <h1 className="">{title}</h1>
    </div>
  )
}
