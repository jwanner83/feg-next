import { dehydrate } from 'react-query'
import { postEndpoint } from "../api/post/PostEndpoint"

export default function Predigten () {
    const { isLoading, isError, data, error } = postEndpoint.useGetPredigtenRequest()

    const predigten = data?.map(predigt => {
        return <h1 key={predigt.id}>{predigt.title.rendered}</h1>
    })

    return (
        <>
            <h1>Predigten</h1>

            {isLoading && <p>Is Loading</p>}

            {data && (
                <>
                <p>data is filled</p>
                {predigten}
                </>
            )}
        </>
    )
}

export async function getServerSideProps() {
    const queryClient = await postEndpoint.prefetchPredigtenRequest(null)
    return {
      props: {
        dehydratedState: dehydrate(queryClient)
      }
    }
  }
