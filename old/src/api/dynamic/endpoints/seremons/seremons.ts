import { useEvents } from '@/api/dynamic/endpoints/events/events'

export function useActiveSeremon() {
  const { events, isLoading, isError } = useEvents()

  let seremon

  for (const event of events) {
    if (event.summary.toLowerCase().includes('gottesdienst')) {
      seremon = event
    }
  }

  return {
    seremon,
    isLoading,
    isError
  }
}
