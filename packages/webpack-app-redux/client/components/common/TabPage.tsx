import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs
export interface TabItem {
  name: string
  component: React.FunctionComponent
}

export default function TabPage({ tabList }: { tabList: TabItem[] }) {
  if (tabList.length === 0) return null
  return (
    <Tabs type="card">
      {tabList.map((item) => {
        return (
          <TabPane tab={item.name} key={item.name}>
            <item.component />
          </TabPane>
        )
      })}
    </Tabs>
  )
}
