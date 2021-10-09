const express = require('express')
const webpack = require('webpack')
const webpackconfig = require('../webpack.dev')
const webpackMiddleware = require('webpack-dev-middleware')

var webpackHotMiddleware = require('webpack-hot-middleware')
var history = require('connect-history-api-fallback')
const path = require('path')
const app = express()

const webpackCompiler = webpack(webpackconfig)
const wpmw = webpackMiddleware(webpackCompiler, {
  publicPath: webpackconfig.output.publicPath,
})

app.use(history())
// app.use(express.static('../dist'))
app.use(wpmw)
app.use(
  webpackHotMiddleware(webpackCompiler, {
    log: console.log,
  })
)

app.use('/test', function (req, res) {
  res.send({
    code: 0,
    ...req.query,
  })
})

app.use('/post', function (req, res) {
  console.log(req.body)
  res.send({
    code: '1',
  })
})
// app.use(
//   history({
//     verbose: true,

//     index: '/',
//   })
// )

// app.get('/', function (req, res) {
//   res.redirect('/')
// })

// app.use(function (req, res) {
//   res.sendFile(path.join(__dirname, '../dist/index.html'))
// })

// app.get('/redux', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'))
// })
app.use((req, res, next) => {
  console.log(req.url)
  next()
})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
