import { ReactNode } from "react"
import PostTitle from "./PostTitle"

type PostContainerParams = {
    title: string,
    image: string,
    children: ReactNode
}

export default function PostContainer ({ title, image, children }: PostContainerParams) {
    return (
        <div className="">
            <PostTitle title={title} image={image} />

            <div>
                {children}
            </div>
        </div>
    )
}