import { getSortedPostsData } from "@/lib/posts"

export default function Posts() {
    const posts = getSortedPostsData
    return (
        <div>
            Posts
        </div>
    )
}