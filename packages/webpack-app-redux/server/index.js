const express = require('express')
const webpack = require('webpack')
const webpackconfig = require('../webpack.dev')
const webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var history = require('connect-history-api-fallback')
var store = require('./store')

const app = express()

const webpackCompiler = webpack(webpackconfig)
const wpmw = webpackMiddleware(webpackCompiler, {
  publicPath: webpackconfig.output.publicPath,
})

function wrap(data) {
  return {
    code: 0,
    data,
  }
}

app.use(wpmw)
app.use(
  webpackHotMiddleware(webpackCompiler, {
    log: console.log,
  })
)

app.get('/posts/:id', function (req, res) {
  res.send(wrap(store.getState()))
})
app.get((req, res, next) => {
  console.log(req.url)
  next()
})
app.use(history())
app.listen(3012, () => {
  console.log('Example app listening on port 3012!')
})
