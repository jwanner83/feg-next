import { DynamicComponentParams } from '@/services/notion/types/component.types'

export default function Video ({ block }: DynamicComponentParams) {
  console.log('vdieoe', block)

  const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = block.video.external.url.match(regex)

  return <div className="w-full h-[400px] mb-8 flex flex-col">
    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${match[2]}`} />
    {block.video.caption?.length > 0 ?
      <p className="italic pt-4">{block.video.caption[0]['plain_text']}</p> : <></>
    }
  </div>
}