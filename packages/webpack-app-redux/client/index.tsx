import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.scss'
import App from './App'
import './styles/tailwind.css'
// import '../dist/tailwind.css'
// import store from './redux/store'
import { Provider } from 'react-redux'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { DConfigProvider } from 'dinod'
/* eslint-disable */

const { log } = require('webpack-lib') //是用cmj的格式

/* eslint-enable */
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

ReactDOM.render(
  <DConfigProvider locale={zhCN}>
    <ConfigProvider locale={zhCN}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </ConfigProvider>
  </DConfigProvider>,
  document.getElementById('root')
)
// 用来更新store
if (module.hot) {
  module.hot.accept()
}
log('9219')
