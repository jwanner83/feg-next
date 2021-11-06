import { postEndpoint } from "../api/post/PostEndpoint"
import ArchiveContainer from '../components/archive/ArchiveContainer'
import ArchiveItem from '../components/archive/ArchiveItem'
import Head from 'next/head'

export default function Predigten () {
    const { isLoading, isError, data, error } = postEndpoint.useGetPredigtenRequest()

    const predigten = data?.map(predigt => {
        return (<ArchiveItem key={predigt.id} item={predigt} base="predigten" />)
    })

    return (
        <>
        <Head>
            <title>Predigten - FEG Gossau</title>
        </Head>
        <ArchiveContainer title="Predigten">
            {data && (
                <div className="flex flex-col gap-8">
                    {predigten}
                </div>
            )}
        </ArchiveContainer>
        </>
    )
}
