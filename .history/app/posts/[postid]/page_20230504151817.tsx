import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound}

export default async function Post({ params }: { params: { postid: string}}) {
  
    const posts = getSortedPostsData()
    const { postId } = params


  return (
    <div>Post</div>
  )
}
 