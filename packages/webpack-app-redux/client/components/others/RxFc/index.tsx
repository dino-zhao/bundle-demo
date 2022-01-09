import { useEffect } from 'react'
import * as utils from './util'
import RaceCondition from './RaceCondition'
export default function RxFc() {
  useEffect(() => {
    utils.pipeFun()
  }, [])

  return (
    <div>
      <div>rxjs</div>
      <RaceCondition></RaceCondition>
    </div>
  )
}
