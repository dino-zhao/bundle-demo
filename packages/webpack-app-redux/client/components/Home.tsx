import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import AppRoute from './AppRoute'
import { Breadcrumb } from 'antd'
export interface ContextType {
  state: { a: number }
  setObj: (v: number) => void
}

export const MyContext = React.createContext<ContextType>({
  state: { a: 1 },
  setObj: (v: number) => {
    console.log(v)
  },
})
export default function Home({ setObj, state }: ContextType) {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{url}</Link>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)
  return (
    <MyContext.Provider value={{ setObj, state }}>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      <nav>
        <ul>
          <li>
            <Link to="/redux">redux</Link>
          </li>
          <li>
            <Link to="/css">css</Link>
          </li>
          <li>
            <Link to="/header">http header</Link>
          </li>
          <li>
            <Link to="/others">其他</Link>
          </li>
        </ul>
      </nav>
      <AppRoute />

      {/* <Counter /> */}
      {/* <Query /> */}
      {/* <Book /> */}
      {/* <ValidContext /> */}
      {/* <div onClick={() => console.log(state.a)}>{state.a}</div> */}
    </MyContext.Provider>
  )
}
