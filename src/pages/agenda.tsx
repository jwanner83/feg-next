import { Post } from '@/api/static/endpoints/post/post.types'
import PostTitle from '@/components/content/post/PostTitle'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import Head from 'next/head'

type AgendaParams = {
  post: Post
}

export default function Agenda({ post }: AgendaParams) {
  return (
    <>
      <Head>
        <title>Agenda - FEG Gossau</title>
      </Head>

      <PostTitle title="Agenda" />

      <FullCalendar
        locale="de"
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_EVENTY_KEY}
        events={{
          googleCalendarId: process.env.NEXT_PUBLIC_GOOGLE_CALENDER_ID
        }}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today dayGridMonth,listWeek'
        }}
      />
    </>
  )
}
