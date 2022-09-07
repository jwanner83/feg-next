import { default as NextImage } from 'next/image'
import { DynamicComponentParams } from '@/services/notion/types/component.types'

export default function Image ({block}: DynamicComponentParams) {
  console.log('Image', block)

  return <>
    {block?.image?.external?.url && <NextImage src={block.image.external.url} height="100%" width="100%" />}
  </>
}