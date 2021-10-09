import { useState, useCallback } from 'react'
import { Button } from 'antd'
import midImg from '@/assets/m.jpg'
import styles from './Counter.module.scss'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from '@redux/store'
import { decrement, increment, testAsync } from '@/redux/countSlice'
const Hello = styled.div`
  color: red;
`

export default function Counter() {
  const { value, loading } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  const [state, setState] = useState(0)

  useCallback(() => {
    return value
  }, [value])

  return (
    <div>
      <img style={{ display: 'none' }} src={midImg} alt="" />
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment12
        </Button>
        <span className={styles.className}>{value}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
      <Hello>styled-components</Hello>
      <div>
        <span onClick={() => setState((c) => c + 1)}>{state}</span>
        <input type="text" />
      </div>
      <div
        onClick={() => {
          dispatch(testAsync())
        }}
        style={{ border: '1px solid #111' }}
      >
        异步调用 {loading ? '调用中' : '完成'}
      </div>
    </div>
  )
}