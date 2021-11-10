import { postEndpoint } from '@/api/post/PostEndpoint'
import ArchiveItem from '@/components/archive/ArchiveItem'
import Head from 'next/head'
import { Post } from '@/api/post/PostEndpoints.types'
import Archive from '@/components/archive/Archive'

export default function Predigten({ posts }) {
  return (
    <>
      <Head>
        <title>Predigten - FEG Gossau</title>
      </Head>

      <Archive title="Predigten" posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await postEndpoint.getPredigtenRequest()
  return {
    props: { posts },
    revalidate: 10
  }
}
