import { ComponentTypes, DynamicComponentParams } from '@/services/notion/types/component.types'
import { FunctionComponent } from 'react'
import Paragraph from '@/components/notion/dynamic/Paragraph'
import Default from '@/components/notion/dynamic/Default'
import Video from '@/components/notion/dynamic/Video'
import Image from '@/components/notion/dynamic/Image'

type ComponentMappingType = {
  [key in ComponentTypes]: FunctionComponent<DynamicComponentParams>;
};

export const ComponentMapping: ComponentMappingType = {
  default: Default,
  paragraph: Paragraph,
  video: Video,
  image: Image
};
