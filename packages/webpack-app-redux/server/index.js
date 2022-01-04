require('@babel/register')({ extensions: ['.js', '.ts'] })
const express = require('express')
const webpack = require('webpack')
const webpackconfig = require('../webpack.dev')
const webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var history = require('connect-history-api-fallback')
var postStore = require('./post.controller')
var useStore = require('./user.controller')
const getToekn = require('./oss.controller')
const app = express()

app.use(express.json())
app.use(
  history({
    rewrites: [
      {
        from: /^\/api\/.*$/,
        to: function (context) {
          return context.parsedUrl.path
        },
      },
    ],
  })
)
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
app.get('/api/oss-token', function (req, res) {
  getToekn().then((info) => {
    res.send(wrap(info))
  })
})
app.get('/api/posts/:id?', function (req, res) {
  if (req.params['id']) {
    return res.send(wrap(postStore.get(req.params['id'])))
  }
  res.send(wrap(postStore.getState()))
})
app.get('/api/users/:id?', function (req, res) {
  if (req.params['id']) {
    return res.send(wrap(useStore.get(req.params['id'])))
  }
  res.send(wrap(useStore.getState()))
})
app.post('/api/post', function (req, res) {
  return res.send(wrap(postStore.update(req.body)))
})
app.get((req, res, next) => {
  console.log(req.url)
  next()
})
app.use(express.static('public'))
app.listen(3012, () => {
  console.log('Example app listening on port 3012!')
})
