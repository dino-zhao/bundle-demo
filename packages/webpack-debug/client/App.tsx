import React, { useState } from 'react'

function App() {
  const [state, setState] = useState(1)
  return (
    <div className="app">
      <header
        onClick={() => {
          setState((c) => c + 1)
          console.log(333)
          setState((c) => c + 1)
        }}
      >
        header{state}
      </header>
      <Content />
      <FunContent />
    </div>
  )
}

class Content extends React.Component {
  componentDidMount() {
    console.log(`Content Mount`)
    console.log(`Content 组件对应的fiber节点: `, this._reactInternals)
  }
  render() {
    return (
      <React.Fragment>
        <p>1</p>
        <p>2</p>
      </React.Fragment>
    )
  }
}

function FunContent() {
  console.log('FunContent render')
  return <div>函数组件333</div>
}
export default App
