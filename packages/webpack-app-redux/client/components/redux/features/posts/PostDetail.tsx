import { Modal } from 'antd'
import { useGetPostsQuery } from '../../services/posts'
export default function PostDetail({
  id,
  onCancel,
}: {
  id: number
  onCancel: () => void
}) {
  const { post } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === id),
    }),
  })
  return (
    <Modal title="post detail" visible={!!id} onCancel={onCancel}>
      {post?.name + post?.id}
    </Modal>
  )
}
