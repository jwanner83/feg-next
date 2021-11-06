import { useRouter } from "next/router"
import { postEndpoint } from "../../api/post/PostEndpoint"
import PostContainer from "../../components/post/PostContainer"
import PostContent from "../../components/post/PostContent"
import Head from 'next/head'

export default function PredigtenPost () {
    const router = useRouter()
    const slug = router.query?.slug as string

    const { isLoading, isError, data, error } = postEndpoint.useGetPostRequest({
        slug,
        type: 'predigten'
    })

    const post = data?.[0]

    const image = post?._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url


    return (
        <>
        <Head>
            <title>{post?.title.rendered} - FEG Gossau</title>
        </Head>
        <PostContainer title={post?.title.rendered} image={image}>
            <PostContent post={post} />
        </PostContainer>
        </>
    )
}