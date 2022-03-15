import { supabase } from '@/api/supabase/client'

export default function Supabase({ title, content }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  )
}

export async function getStaticProps() {
  const { data, error } = await supabase
    .from('pages')
    .select('title, content')
    .eq('title', 'supabase')

  if (error || data.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: { title: data?.[0]?.title, content: data?.[0]?.content }
  }
}
