import Image from 'next/image'

type CoreImageTypes = {
  image: string
  title: string
  imageClassNames?: string
  placeholder?: string
}

export default function CoreImage({
  image,
  title,
  placeholder,
  imageClassNames = 'object-cover'
}: CoreImageTypes) {
  return (
    <Image
      priority
      src={image}
      placeholder="blur"
      blurDataURL={placeholder}
      className={`${imageClassNames}`}
      layout="fill"
      alt={title}
    />
  )
}
