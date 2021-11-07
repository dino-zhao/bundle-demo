import { useEffect, useState } from 'react'
import Message from './Message'
import faker from 'faker/locale/zh_CN'

export default function DynamicVisualList() {
  const [messages, setMessage] = useState([])
  useEffect(() => {
    const arr = []
    for (let i = 0; i < 200; i++) {
      arr.push(faker.lorem.paragraph())
    }
    setMessage(arr)
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <Message messages={messages}></Message>
    </div>
  )
}
