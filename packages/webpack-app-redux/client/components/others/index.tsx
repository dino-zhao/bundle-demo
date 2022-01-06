import TabPage, { TabItem } from '@components/common/TabPage'
import DinoD from './DinoDesign'
import VisualList from './VisualList'
import DynamicVisualList from './DynamicVisualList'
import TinyMce from './Tinymce'
import Dnd from './ReactDnd'
const tabList: TabItem[] = [
  {
    name: '拖拽排序',
    component: Dnd,
  },
  { name: '自定义组件', component: DinoD },
  { name: '虚拟列表', component: VisualList },
  { name: '动态高度虚拟列表', component: DynamicVisualList },
  {
    name: '富文本编辑框',
    component: TinyMce,
  },
]

export default function Others() {
  return <TabPage tabList={tabList}></TabPage>
}
