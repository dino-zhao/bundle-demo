//为了this，这里不能用箭头函数
Function.prototype.myCall = function (ctx, ...args) {
  context = ctx ?? globalThis

  context.fn = this
  return context.fn(args)
}

var obj = {
  name: '小红',
}

function sayName(age) {
  return this.name + age
}
console.log(sayName.myCall(obj, 12))
