import { GetContext } from "../base/Base.types";
import { BaseEndpoint } from "../base/BaseEndpoint";
import { apiRequest } from "../common/request";
import { GetPostParams, Post } from "./PostEndpoints.types";

class PostEndpoint extends BaseEndpoint<PostEndpoint> {
    key = 'post'

    getPredigtenRequest(): Promise<Post[]> {
        return apiRequest('predigten', {
            singleQueryParams: ['_embed']
        })
    }

    getPredigtenMinimalRequest(): Promise<Post[]> {
        return apiRequest('predigten')
    }

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
}

export const postEndpoint = new PostEndpoint()
