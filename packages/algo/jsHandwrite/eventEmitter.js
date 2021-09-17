// 发布订阅模式
// emitter.on(eventName, listener) 订阅，将回调添加到emitter回调列表中
// emitter.emit(eventName[, ...args]) 触发，触发对应的回调
// emitter.off(eventName, listener) //移除
// emitter.once(eventName, listener)

class EventEmitter {
  funRoot = {} //{[eventName:string]:Function[]}
  on(eventName, callback) {
    if (this.funRoot[eventName]) {
      this.funRoot[eventName].push(callback)
    } else {
      this.funRoot[eventName] = [callback]
    }
  }
  off(eventName) {
    delete this.funRoot[eventName]
  }
  once(eventName, callback) {
    const temp = (...args) => {
      callback(args)
      this.off(eventName)
    }
    this.on(eventName, temp)
  }
  emit(eventName, ...args) {
    if (this.funRoot[eventName]) {
      this.funRoot[eventName].forEach((callback) => callback(args))
    }
  }
}

let myEmitter = new EventEmitter()
myEmitter.on('event', (param) => {
  console.log(param + '1')
})
myEmitter.on('event', (param) => {
  console.log(param + '2')
})
myEmitter.emit('event', 'params')
myEmitter.off('event')
myEmitter.emit('event', 'next')
myEmitter.once('onceEvent', (param) => {
  console.log(param + '3')
})
myEmitter.emit('onceEvent', 'once1')
myEmitter.emit('onceEvent', 'once2')
