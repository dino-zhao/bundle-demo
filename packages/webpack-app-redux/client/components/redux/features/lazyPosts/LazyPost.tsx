import { useLazyGetPostsQuery } from './postsSlice'
import { Button, Input } from 'antd'
import { useState } from 'react'

export default function LazyPost() {
  const [trigger, { data, isFetching }, lastArg] = useLazyGetPostsQuery()
  const [param, setParam] = useState('')

  const fetch = () => {
    console.log(trigger(param, true))
  }
  return (
    <div>
      <Button onClick={fetch} loading={isFetching}>
        trigger
      </Button>
      <Input
        value={param}
        onChange={(e) => {
          setParam(e.target.value)
        }}
      />
      <div>{JSON.stringify(data)}</div>
      <div>{JSON.stringify(lastArg)}</div>
    </div>
  )
}
