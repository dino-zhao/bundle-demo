import TabPage from '@components/common/TabPage'
import Query from './Query'
import Counter from './Counter'
import Book from './Book'
import ValidContext from './ValidContext'
const tabList = [
  {
    name: 'rtk query',
    component: Query,
  },
  {
    name: 'redux quick start',
    component: Counter,
  },
]

export default function ReduxRelated() {
  return <TabPage tabList={tabList}></TabPage>
}
