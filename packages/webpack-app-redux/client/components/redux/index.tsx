import TabPage, { TabItem } from '@components/common/TabPage'
import { store } from './app/store'
import { Provider } from 'react-redux'
import PostsList from './features/posts/PostsList'
import UsersList from './features/users/UsersList'
import { usersSlice } from './features/users/usersSlice'
import LazyPost from './features/lazyUser/LazyUser'
store.dispatch(usersSlice.endpoints.getUsers.initiate())
const tabList: TabItem[] = [
  {
    name: 'lazy posts',
    component: LazyPost,
  },
  {
    name: 'user列表',
    component: UsersList,
  },
  {
    name: 'post列表',
    component: PostsList,
  },
]

export default function ReduxComponent() {
  return (
    <Provider store={store}>
      <TabPage tabList={tabList}></TabPage>
    </Provider>
  )
}
