import CoreImage from '@/components/core/CoreImage'

type PostTitleParams = {
  title: string
  image?: string
  date?: string
  placeholder?: string
}

export default function PostTitle({
  title,
  date,
  image,
  placeholder
}: PostTitleParams) {
  return (
    <div className="flex flex-col-reverse md:flex-col mb-6 md:mb-0">
      <div className="flex flex-col justify-center md:items-center my-8 md:my-32">
        <h1 className="font-bold md:text-5xl text-3xl leading-relaxed md:text-center max-w-2xl dark:text-white">
          {title}
        </h1>
        {date && (
          <p className="italic mt-4 text-gray-800 dark:text-gray-300">{date}</p>
        )}
      </div>
      {image && (
        <div className="min-h-post bg-transparent relative md:mb-32">
          <CoreImage image={image} title={title} placeholder={placeholder} />
        </div>
      )}
    </div>
  )
}
