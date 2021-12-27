import { useGetPostsQuery, Post, useExportExcelMutation } from './postsSlice'
import PostDetail from './PostDetail'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
export default function PostsList() {
  const {
    data: posts,
    isFetching,
    isLoading,
    refetch,
  } = useGetPostsQuery(undefined, {
    //参数变化时请求
    refetchOnMountOrArgChange: true,
  })

  useEffect(() => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 555,
      }),
    })
  }, [])
  const [exportExcel, { isLoading: isExporting }] = useExportExcelMutation()

  const [id, setId] = useState(0)
  const hiddenDetail = () => {
    setId(0)
  }
  if (isLoading) return <div>Loading...</div>
  if (!posts) return <div>Missing post!</div>
  function List({ posts }: { posts: Post[] }) {
    return (
      <div>
        <Button
          onClick={() => exportExcel(2)}
          key="export"
          loading={isExporting}
        >
          重新下载
        </Button>
        <Button onClick={refetch} key="refetch">
          refetch
        </Button>
        {posts.map((item) => {
          return (
            <div key={item.id}>
              <Button onClick={() => setId(item.id)}>{item.id}</Button>
              {item.name}
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
      <PostDetail id={id} onCancel={hiddenDetail} />
    </div>
  )
}
