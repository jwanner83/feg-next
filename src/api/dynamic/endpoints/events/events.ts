import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/api/dynamic/request'

export function useEvents(amount: number = 20) {
  const [now] = useState(new Date().toISOString())
  const { data, error } = useSWR(
    `https://www.googleapis.com/calendar/v3/calendars/6c9kdnu2ejnelnq0qfsus4t7eg@group.calendar.google.com/events?timeMin=${now}&singleEvents=true&orderBy=startTime&maxResults=${amount}&key=${process.env.NEXT_PUBLIC_GOOGLE_EVENTY_KEY}`,
    fetcher
  )

  const [events, setEvents] = useState([])

  useEffect(() => {
    if (data && Array.isArray(data.items)) {
      const raw = data.items
      raw.reverse()
      setEvents(raw)
    }
  }, [data])

  return {
    events,
    isLoading: !error && !data,
    isError: error
  }
}
