import { RangeSelector, exportExcel } from 'dinod'
import { DatePicker } from 'antd'
import { Button } from 'antd'

export default function DinoD() {
  const exportE = () => {
    exportExcel({
      rows: [
        [5, 'Bob', '22222222'],
        [5, 'Bob', 'wwwwwwwwwwwwww'],
      ],
      fileName: 'test',
    })
  }
  return (
    <div>
      <DatePicker />
      {/* <Foo title="test" /> */}
      <RangeSelector
        onRangeChange={() => {}}
        btnArr={['YESTODAY', 'LAST_SEVEN_DAYS_WITHOUT_TODAY']}
        value={'YESTODAY'}
      ></RangeSelector>
      <Button onClick={exportE}>下载excel</Button>
    </div>
  )
}
