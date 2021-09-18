const dinopack = require('./dinopack/src/index')

const config = require('./dinopack.config.js')


dinopack(config, function (err, stats) {
  if (err || stats.hasError()) {
    console.log('编译出错惹')
  }
})