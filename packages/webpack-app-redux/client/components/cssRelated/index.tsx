import TabPage, { TabItem } from '@components/common/TabPage'
import AspectRatio from './AspectRatio'
import Grid from './Grid'
const tabList: TabItem[] = [
  {
    name: 'grid',
    component: Grid,
  },
  {
    name: '宽高比',
    component: AspectRatio,
  },
]

export default function CssRelated() {
  return <TabPage tabList={tabList}></TabPage>
}
