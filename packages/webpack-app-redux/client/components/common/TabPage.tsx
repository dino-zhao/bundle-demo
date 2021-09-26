import React, { useMemo } from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs
export interface TabItem {
  name: string
  component: React.FunctionComponent
}

export default function TabPage({ tabList }: { tabList: TabItem[] }) {
  const activeTab = useMemo(() => {
    return tabList[0]?.name
  }, [tabList])

  if (tabList.length === 0) return null
  return (
    <Tabs defaultActiveKey={activeTab}>
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
