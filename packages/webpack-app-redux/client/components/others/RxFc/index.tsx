import { useEffect } from 'react'
import { disposingObservable } from './util'
export default function RxFc() {
  useEffect(() => {
    disposingObservable()
  }, [])

  return <div>rxjs</div>
}
