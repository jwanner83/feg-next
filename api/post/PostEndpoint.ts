import { GetContext } from "../base/Base.types";
import { BaseEndpoint } from "../base/BaseEndpoint";
import { apiRequest } from "../common/request";
import { Predigt } from "./PostEndpoints.types";

class PostEndpoint extends BaseEndpoint<PostEndpoint> {
    key = 'post'

    getPredigtenRequest(
        context: GetContext<null>
    ): Promise<Predigt[]> {
        return apiRequest('predigten')
    }

    useGetPredigtenRequest = this.createUseGetHook(this.getPredigtenRequest)

    prefetchPredigtenRequest = this.createGetPrefetch(this.getPredigtenRequest)
}

export const postEndpoint = new PostEndpoint()
