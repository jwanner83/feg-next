import Image from 'next/image'

type ArchiveTitleParams = {
  title: string
  image: string
  date: string
}

export default function ArchiveTitle({ title, date, image }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-32">
        <h1 className="font-bold text-5xl leading-tight text-center max-w-2xl">
          {title}
        </h1>
        <p className="italic mt-4 text-gray-800">{date}</p>
      </div>
      <div className="min-h-post bg-gray-100 relative mb-32">
        <Image className="object-cover" src={image} layout="fill" alt={title} />
      </div>

      {/* 
      <div className="min-h-post relative mb-12">
        <Image className="object-cover" src={image} layout="fill" alt={title} />

        <div className="h-full w-full absolute flex flex-col justify-center items-baseline px-24 bg-gradient-to-r from-black-transparent">
          <h1 className="font-bold text-5xl text-white max-w-md leading-tight">
            {title}
          </h1>
          <p className="italic mt-4 text-gray-300">{date}</p>
        </div>
      </div>
      */}
    </>
  )
}
