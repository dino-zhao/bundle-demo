import { useEffect } from 'react'
import * as utils from './util'
import FindPoke from './FindPoke'
export default function RxFc() {
  useEffect(() => {
    utils.pipeFun()
  }, [])

  return (
    <div>
      <div>rxjs</div>
      <FindPoke></FindPoke>
    </div>
  )
}
