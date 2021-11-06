import TabPage, { TabItem } from '@components/common/TabPage'
import DinoD from './DinoDesign'
import VisualList from './VisualList'

const tabList: TabItem[] = [
  { name: '自定义组件', component: DinoD },
  { name: '虚拟列表', component: VisualList },
]

export default function Others() {
  return <TabPage tabList={tabList}></TabPage>
}
