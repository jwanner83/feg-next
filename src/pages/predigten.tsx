import { dehydrate, QueryClient } from 'react-query'
import { postEndpoint } from '../api/post/PostEndpoint'
import ArchiveContainer from '../components/archive/ArchiveContainer'
import ArchiveItem from '../components/archive/ArchiveItem'
import Head from 'next/head'

export default function Predigten({ posts }) {
  const predigten = posts?.map((predigt) => {
    return <ArchiveItem key={predigt.id} item={predigt} base="predigten" />
  })

  return (
    <>
      <Head>
        <title>Predigten - FEG Gossau</title>
      </Head>
      <ArchiveContainer title="Predigten">
        {posts && <div className="flex flex-col gap-8">{predigten}</div>}
      </ArchiveContainer>
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
