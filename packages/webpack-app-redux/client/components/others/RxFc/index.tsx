import { useEffect, useState } from 'react'
import * as utils from './util'
import RaceCondition from './RaceCondition'
import { Radio } from 'antd'
import SuggestList from './suggestion'

const CList = [RaceCondition, SuggestList]

export default function RxFc() {
  useEffect(() => {
    utils.pipeFun()
  }, [])

  const [type, setType] = useState(1)
  const Component = CList[type]

  return (
    <div>
      <Radio.Group
        style={{ marginBottom: '20px' }}
        options={[
          {
            label: '竟态',
            value: 0,
          },
          {
            label: '推荐列表',
            value: 1,
          },
        ]}
        onChange={(e) => {
          setType(e.target.value)
        }}
        value={type}
        optionType="button"
      />
      <Component></Component>
    </div>
  )
}
