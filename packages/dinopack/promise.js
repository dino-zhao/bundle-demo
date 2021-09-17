const PENDDING = 'pendding'
const REJECTED = 'rejected'
const FULFILLED = 'fulfilled'

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      throw e
    }
  }
  status = PENDDING
  value = null
  reason = null
  resolveCallbacks = []
  rejectCallbacks = []
  resolve = (v) => {
    if (this.status === PENDDING) {
      this.status = FULFILLED
      this.value = v
      this.resolveCallbacks.forEach((fn) => fn.call(this, v))
    }
  }
  reject = (r) => {
    if (this.status === PENDDING) {
      this.status = REJECTED
      this.reason = r
      this.rejectCallbacks.forEach((fn) => fn.call(this, r))
    }
  }
  then = (onResolve, onReject) => {
    onResolve = typeof onResolve === 'function' ? onResolve : (v) => v
    onReject =
      typeof onReject === 'function'
        ? onReject
        : (r) => {
            throw r
          }
    let promise = new MyPromise((resolve, reject) => {
      let microResolve = () => {
        queueMicrotask(() => {
          try {
            let res = onResolve(this.value)
            doResolution(promise, res, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      let microReject = () => {
        queueMicrotask(() => {
          try {
            let res = onReject(this.reason)
            doResolution(promise, res, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      if (this.status === FULFILLED) {
        microResolve()
      } else if (this.status === REJECTED) {
        microReject()
      } else {
        this.rejectCallbacks.push(microReject)
        this.resolveCallbacks.push(microResolve)
      }
    })
    return promise
  }
}

function doResolution(p, x, resolve, reject) {
  if (p === x) {
    return reject(new TypeError('err'))
  }
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let then
    try {
      then = x.then
    } catch (error) {
      return reject(error)
    }
    if (typeof then === 'function') {
      let called = false
      let resolvePromise = (v) => {
        if (called) return
        called = true
        doResolution(p, v, resolve, reject)
      }
      let rejectPromise = (r) => {
        if (called) return
        called = true
        reject(r)
      }

      try {
        then.call(x, resolvePromise, rejectPromise)
      } catch (error) {
        if (called) return
        called = true
        return reject(error)
      }
    } else {
      resolve(x)
    }
  } else {
    resolve(x)
  }
}
let p = new MyPromise((resolve, reject) => {
  resolve(1)
})
MyPromise.deferred = function () {
  var result = {}
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve
    result.reject = reject
  })

  return result
}
module.exports = MyPromise
