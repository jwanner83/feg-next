import { Post } from "../../api/post/PostEndpoints.types";

type PostContentParams = {
    post: Post,
}

export default function PostContent ({ post }: PostContentParams) {
    return (
        <div className="post">
            <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} />
        </div>    
    )
}