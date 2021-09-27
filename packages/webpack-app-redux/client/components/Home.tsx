import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import AppRoute from './AppRoute'

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
  return (
    <MyContext.Provider value={{ setObj, state }}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/redux">redux</Link>
            </li>
            <li>
              <Link to="/css">css</Link>
            </li>
          </ul>
        </nav>
        <AppRoute />
      </Router>

      {/* <Counter /> */}
      {/* <Query /> */}
      {/* <Book /> */}
      {/* <ValidContext /> */}
      {/* <div onClick={() => console.log(state.a)}>{state.a}</div> */}
    </MyContext.Provider>
  )
}
