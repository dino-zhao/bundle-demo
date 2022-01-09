import { useEffect } from 'react'
import * as utils from './util'
import FindPokeNew from './FindPokeNew'
export default function RxFc() {
  useEffect(() => {
    utils.pipeFun()
  }, [])

  return (
    <div>
      <div>rxjs</div>
      <FindPokeNew></FindPokeNew>
    </div>
  )
}
