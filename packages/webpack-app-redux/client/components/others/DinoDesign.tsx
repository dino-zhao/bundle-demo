import { RangeSelector } from 'dinod'
import { DatePicker } from 'antd'

export default function DinoD() {
  return (
    <div>
      <DatePicker />
      {/* <Foo title="test" /> */}
      <RangeSelector
        onRangeChange={() => {}}
        btnArr={['YESTODAY', 'LAST_SEVEN_DAYS_WITHOUT_TODAY']}
        value={'YESTODAY'}
      ></RangeSelector>
    </div>
  )
}
