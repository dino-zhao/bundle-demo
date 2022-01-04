import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { useGetPostsQuery, useUpdatePostMutation } from './postsSlice'
function PostDetail({ id, onCancel }: { id: number; onCancel: () => void }) {
  const { post, options } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === id),
      //这里生成的值总是会造成rerender
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
  return (
    <Modal title="post detail" visible={!!id} onCancel={onCancel}>
      {post && (
        <Form
          initialValues={post}
          onFinish={(values) => {
            updatePost({ ...post, ...values })
          }}
        >
          <Form.Item label="id">{post.id}</Form.Item>
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

export default React.memo(PostDetail)
