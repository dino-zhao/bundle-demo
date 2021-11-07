import { useEffect, useState } from 'react'
import Message from './Message'
import faker from 'faker/locale/zh_CN'

export default function DynamicVisualList() {
  const [messages, setMessage] = useState([])
  useEffect(() => {
    const arr = []
    for (let i = 0; i < 200; i++) {
      arr.push(faker.lorem.sentence())
    }
    setMessage(arr)
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        padding: '0px 100px',
        width: '100%',
      }}
    >
      <Message messages={messages}></Message>
    </div>
  )
}
