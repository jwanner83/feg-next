import { IGetBlurhash, IGetBlurhashReturn } from 'plaiceholder/dist/blurhash'
import { BlurhashCanvas } from 'react-blurhash'
import Image from 'next/image'

type CoreImageTypes = {
  image: string
  title: string
  imageClassNames?: string
  placeholder?: IGetBlurhashReturn
}

export function CoreImage({
  image,
  title,
  placeholder,
  imageClassNames = 'object-cover'
}: CoreImageTypes) {
  return (
    <>
      {placeholder && (
        <BlurhashCanvas
          hash={placeholder.hash}
          width={placeholder.height}
          height={placeholder.width}
          punch={1}
          className="absolute inset-0 w-full h-full"
        />
      )}
      <Image
        priority
        src={image}
        className={`${imageClassNames} animate-fade-in text-transparent`}
        layout="fill"
        alt={title}
      />
    </>
  )
}
