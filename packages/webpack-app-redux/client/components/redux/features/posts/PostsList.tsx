import { useGetPostsQuery, Post } from '../../services/posts'
import PostDetail from './PostDetail'
import { useState } from 'react'
import { Button } from 'antd'
export default function PostsList() {
  const { data: posts, isFetching, isLoading } = useGetPostsQuery()
  const [id, setId] = useState(0)
  if (isLoading) return <div>Loading...</div>
  if (!posts) return <div>Missing post!</div>
  function List({ posts }: { posts: Post[] }) {
    return (
      <div>
        {posts.map((item) => {
          return (
            <div key={item.id}>
              <Button onClick={() => setId(item.id)}>{item.id}</Button>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div>
      <List posts={posts} />
      <div>{isFetching ? '...refetching' : ''}</div>
      <PostDetail id={id} onCancel={() => setId(0)} />
    </div>
  )
}
