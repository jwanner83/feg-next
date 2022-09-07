import { DynamicComponentParams } from '@/services/notion/types/component.types'

export default function Default ({block}: DynamicComponentParams) {
  console.log('Default', block)

  return <div className="bg-teal-200 p-4 border-4 rounded-md border-teal-400 text-center font-bold">unhandled type {block.type}</div>
}