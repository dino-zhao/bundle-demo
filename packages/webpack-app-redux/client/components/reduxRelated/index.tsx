import TabPage, { TabItem } from '@components/common/TabPage'
import Query from './Query'
import Counter from './Counter'
import Book from './Book'
import ValidContext from './ValidContext'
const tabList: TabItem[] = [
  {
    name: 'rtk query',
    component: Query,
  },
  {
    name: 'redux quick start',
    component: Counter,
  },
  {
    name: 'rtk',
    component: Book,
  },
  {
    name: '模拟redux',
    component: ValidContext,
  },
]
export default function ReduxRelated() {
  return <TabPage tabList={tabList}></TabPage>
}
