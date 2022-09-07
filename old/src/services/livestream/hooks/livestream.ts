import { useInterval } from '@/services/core/hooks/interval'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export function useLivestream() {
  const [date, setDate] = useState(dayjs())
  const [isLive, setIsLive] = useState(false)

  useInterval(() => {
    setDate(dayjs())
  }, 5000)

  useEffect(() => {
    if (date.day() !== 5) {
      // if its not sunday
      setIsLive(false)
      return
    }

    if (date.hour() > 10) {
      // if its after 11
      setIsLive(false)
      return
    }

    if (date.hour() < 6) {
      // if its before 7
      setIsLive(false)
      return
    }

    setIsLive(true)
  }, [date])

  return {
    isLive
  }
}