import TabPage, { TabItem } from '@components/common/TabPage'
import EditableCellTable from './editableCellTable'
import EditableTrTable from './editableTrTable'
import VirtualTable from './virtualTable'
import OrdinaryTable from './ordinaryTable'
const tabList: TabItem[] = [
  {
    name: '可编辑单元格',
    component: EditableCellTable,
  },
  {
    name: '可编辑行',
    component: EditableTrTable,
  },
  {
    name: '虚拟表格',
    component: VirtualTable,
  },
  {
    name: '普通表格',
    component: OrdinaryTable,
  },
]

export default function Antd() {
  return <TabPage tabList={tabList}></TabPage>
}
