import { Foo, RangeSelector } from 'dinod'

export default function DinoD() {
  return (
    <div>
      <Foo title="test" />
      <RangeSelector
        onRangeChange={() => {}}
        btnArr={['YESTODAY', 'LAST_SEVEN_DAYS_WITHOUT_TODAY']}
        value={'YESTODAY'}
      ></RangeSelector>
    </div>
  )
}
