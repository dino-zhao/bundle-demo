import TabPage, { TabItem } from '@components/common/TabPage'
import { store } from './app/store'
import { Provider } from 'react-redux'
import PostsList from './features/posts/PostsList'
const tabList: TabItem[] = [
  {
    name: '列表',
    component: PostsList,
  },
]

export default function CssRelated() {
  return (
    <Provider store={store}>
      <TabPage tabList={tabList}></TabPage>
    </Provider>
  )
}
