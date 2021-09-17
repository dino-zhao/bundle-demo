
class TestPlugin {
  apply(compiler) {
    compiler.hooks.beforeRun.tapAsync("start", function() {
      console.log('[Success] 开始编译')
    })
  }
}

module.exports = TestPlugin
