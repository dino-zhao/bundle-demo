import TabPage, { TabItem } from '@components/common/TabPage'
import ATable from './atable/ATable'
const tabList: TabItem[] = [
  {
    name: 'table',
    component: ATable,
  },
]

export default function Antd() {
  return <TabPage tabList={tabList}></TabPage>
}
