import TabPage, { TabItem } from '@components/common/TabPage'
import { store } from './app/store'
import { Provider } from 'react-redux'
const tabList: TabItem[] = []

export default function CssRelated() {
  return (
    <Provider store={store}>
      <TabPage tabList={tabList}></TabPage>
    </Provider>
  )
}
