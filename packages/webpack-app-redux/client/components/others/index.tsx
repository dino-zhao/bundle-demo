import TabPage, { TabItem } from '@components/common/TabPage'
import DinoD from './DinoDesign'
import VisualList from './VisualList'
import DynamicVisualList from './DynamicVisualList'

const tabList: TabItem[] = [
  { name: '自定义组件', component: DinoD },
  { name: '虚拟列表', component: VisualList },
  { name: '动态高度虚拟列表', component: DynamicVisualList },
]

export default function Others() {
  return <TabPage tabList={tabList}></TabPage>
}
