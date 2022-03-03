import { Form, Select, Button } from 'antd'
const { Item } = Form

export default function FormFormat() {
  return (
    <div>
      <Form>
        <Item>
          <Button htmlType="submit">打印</Button>
        </Item>
      </Form>
    </div>
  )
}
