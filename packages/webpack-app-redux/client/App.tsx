import React, { useState } from 'react'
import Home from './components/Home'
import { Spin } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
const a: string = 2
console.log(a)
const store = {
  state: { a: 2 },
  setObj(v: number) {
    store.state = { a: store.state.a + v }
  },
} //模拟redux
function App() {
  const [, setState] = useState(1)
  const setObj = (v: number) => {
    store.setObj(v)
    setState((c) => c + 1)
  }

  return (
    <React.Suspense fallback={<Spin />}>
      <Router>
        <Home state={store.state} setObj={setObj} />
      </Router>
    </React.Suspense>
  )
}
export default App
