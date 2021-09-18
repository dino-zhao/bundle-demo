// object instanceof constructor 判断构造函数的原型是否存在于object的原型链上
function myInstanceof(obj, constructor) {
  let cur = Object.getPrototypeOf(obj)
  while (cur) {
    if (cur === constructor.prototype) {
      return true
    }
    cur = Object.getPrototypeOf(cur)
  }
  return false
}

console.log(myInstanceof(Array, Function))
