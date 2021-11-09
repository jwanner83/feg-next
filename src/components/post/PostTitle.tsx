import Image from 'next/image'

type ArchiveTitleParams = {
  title: string
  image: string
  date: string
}

export default function ArchiveTitle({ title, date, image }) {
  return (
    <div className="">
      <div className="min-h-screen">
        <Image className="object-cover" src={image} layout="fill" alt={title} />

        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-5xl">{title}</h1>
          <p className="italic mt-2">{date}</p>
        </div>
      </div>
    </div>
  )
}
