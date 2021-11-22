import TabPage, { TabItem } from '@components/common/TabPage'
import EditableCellTable from './editableCellTable'
import EditableTrTable from './editableTrTable'
const tabList: TabItem[] = [
  {
    name: '可编辑单元格',
    component: EditableCellTable,
  },
  {
    name: '可编辑行',
    component: EditableTrTable,
  },
]

export default function Antd() {
  return <TabPage tabList={tabList}></TabPage>
}
