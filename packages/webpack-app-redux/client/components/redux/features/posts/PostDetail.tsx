import { Modal, Form, Input, Button } from 'antd'
import { useGetPostsQuery, useUpdatePostMutation } from './postsSlice'
export default function PostDetail({
  id,
  onCancel,
}: {
  id: number
  onCancel: () => void
}) {
  const { post, options } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === id),
      options: data?.map((item) => {
        return {
          label: item.name,
          value: item.id,
        }
      }),
    }),
  })
  const [
    updatePost, // This is the mutation trigger
  ] = useUpdatePostMutation()
  console.log(options)
  return (
    <Modal title="post detail" visible={!!id} onCancel={onCancel}>
      {post && (
        <Form initialValues={post} onFinish={(values) => updatePost(values)}>
          <Form.Item label="id" name="id">
            {post.id}
          </Form.Item>
          <Form.Item label="name" name="name">
            <Input></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Modal>
  )
}
