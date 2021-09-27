import React, { useContext } from 'react'
import { MyContext } from '../Home'

export default function ValidContext() {
  const { setObj, state } = useContext(MyContext)
  return (
    <div>
      <div>{state.a}</div>
      <div>
        <button onClick={() => setObj(2)}>修改</button>
      </div>
    </div>
  )
}
