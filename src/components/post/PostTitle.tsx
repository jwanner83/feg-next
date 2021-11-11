import Image from 'next/image'

type PostTitleParams = {
  title: string
  image: string
  date: string
}

export default function PostTitle({ title, date, image }: PostTitleParams) {
  return (
    <div className="flex flex-col-reverse md:flex-col mb-6 md:mb-0">
      <div className="flex flex-col justify-center md:items-center my-8 md:my-32">
        <h1 className="font-bold md:text-5xl text-3xl leading-relaxed md:text-center max-w-2xl">
          {title}
        </h1>
        <p className="italic mt-4 text-gray-800">{date}</p>
      </div>
      <div className="min-h-post bg-gray-100 relative md:mb-32">
        <Image className="object-cover" src={image} layout="fill" alt={title} />
      </div>
    </div>
  )
}
