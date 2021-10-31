import TabPage, { TabItem } from '@components/common/TabPage'
import DinoD from './DinoDesign'

const tabList: TabItem[] = [{ name: '自定义组件', component: DinoD }]

export default function Others() {
  return <TabPage tabList={tabList}></TabPage>
}
