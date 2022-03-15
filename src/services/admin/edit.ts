import { useState } from 'react'

export function useIsEdit() {
  const [isEdit, setIsEdit] = useState(false)

  return {
    isEdit,
    setIsEdit
  }
}
