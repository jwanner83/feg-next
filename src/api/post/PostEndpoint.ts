import { GetContext } from "../base/Base.types";
import { BaseEndpoint } from "../base/BaseEndpoint";
import { apiRequest } from "../common/request";
import { GetPostParams, Post } from "./PostEndpoints.types";

class PostEndpoint extends BaseEndpoint<PostEndpoint> {
    key = 'post'

    getPredigtenRequest(
        context: GetContext<null>
    ): Promise<Post[]> {
        return apiRequest('predigten', {
            singleQueryParams: ['_embed']
        })
    }

    useGetPredigtenRequest = this.createUseGetHook(this.getPredigtenRequest)

    prefetchPredigtenRequest = this.createGetPrefetch(this.getPredigtenRequest)

    getPostRequest(
        context: GetContext<GetPostParams>
    ): Promise<Post[]> {
        return apiRequest(context.params.type, {
            queryParams: {
                slug: context.params.slug
            },
            singleQueryParams: ['_embed']
        })
    }

    useGetPostRequest = this.createUseGetHook(this.getPostRequest)
}

export const postEndpoint = new PostEndpoint()
